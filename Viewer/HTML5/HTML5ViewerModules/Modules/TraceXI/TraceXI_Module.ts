/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../resources/libs/arcgis-js-api.d.ts" />

module TraceXI {
    export class TraceXI_Module extends geocortex.framework.application.ModuleBase {
        _dojoCookie: any;
        _prefsCookieName: string = "TracingXI.Prefs"
        _app: geocortex.essentialsHtmlViewer.ViewerApplication;
        _traceOptionsXI_ViewModel: TraceOptionsXI_ViewModel;
        _bufferOptionsXI_ViewModel: BufferOptionsXI_ViewModel;
        _currentTraceType: string = null;
        _electricTraceUrl: any = null;
        _userPrefs: any = null;
        _bufferLayerId: string = "traceBufferLayer";
        traceResultPointSymbol: any = null;
        traceResultLineSymbol: any = null;
        _currentTraceResults: Object[] = null;
        _traceTimestamp: number = 0;
        initialBufferSettings: any = null;
        _maxFeatureCount: number = 7500;
        traceFlagPath: string = null; //doesn't follow naming convention because this is set in the configuration .json file
        _bufferGraphicsLayer: esri.layers.GraphicsLayer = null;

        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string) {
            //alert("module constructor");
            super(app, lib);
            this._app = app;
            this.app.command("XI_UpdatePrefsCookie").register(this, this.XI_UpdatePrefsCookie);
            this.app.command("XI_ClearTraceResults").register(this, this.XI_ClearTraceResults);
            this.app.command("XI_DownstreamTrace").register(this, this.XI_DownstreamTrace);
            Promise.all([this._app.waitUntilSiteInitialized(), this._app.waitUntilMapLoaded(), this._app.waitUntilSiteServiceLayersLoaded()]).then(() => {
                this.initializeServiceConfig();
                this.initGraphicsLayers();
            });
            var t = this;
            require(["dojo/cookie"], function (dojoCookie) { t._dojoCookie = dojoCookie; });
        }


        initialize(config: any): void {
            //In the desktop.json.js file there is a configuration section that is read here and 
            //mapped onto like named variables (e.g. "traceFlagPath")
            for (var p in config) {
                if (this.hasOwnProperty(p)) {
                    this[p] = config[p];
                }
            }
            this.initializeUserPrefs(config);

            //this._traceOptionsXI_Model = new TraceOptionsXI_Model(this, config);
            //this._bufferOptionsXI_Model = new BufferOptionsXI_Model(this, config);

            this._app.event("BufferOptionsXI_ViewModelAttached").subscribe(this, (vm: BufferOptionsXI_ViewModel) => {
                this._bufferOptionsXI_ViewModel = vm;
                vm.initBufferOptions(this._userPrefs);
            });

            this._app.event("TracingOptions_ViewModelAttached").subscribe(this, (vm: TraceOptionsXI_ViewModel) => {
                console.log("TraceXI TracingOptions_ViewModelAttached");
                this._traceOptionsXI_ViewModel = vm;
                vm.initTraceOptions(this._userPrefs);
            });
        }


        XI_UpdatePrefsCookie(propName : string, propValue : string): void {
            try {
                console.log("TraceXI update prefs cookie " + propName + " " + propValue);
                this._userPrefs[propName] = propValue;
                this._dojoCookie(this._prefsCookieName, JSON.stringify(this._userPrefs), {});
            } catch (ex) {
                //Fail Silently
            }
        }

        initializeUserPrefs(config : any): void {
            try {
                console.log("TraceXI initializeUserPrefs");
                var prefsCookie = this._dojoCookie(this._prefsCookieName);

                if (prefsCookie) {
                    this._userPrefs = JSON.parse(prefsCookie);
                }
                else {
                    this._userPrefs = [];
                }
                for (var p in config) {
                    if (this._userPrefs[p] === undefined) {
                        this._userPrefs[p] = config[p];
                    }
                } 
            } 
            catch(ex) {
                console.log("TraceXI Error in initializeUserPrefs");
                this._userPrefs = {};
            }
        }

        

        XI_ClearTraceResults() {
            //alert("xi clear trace results");
            if (this._bufferGraphicsLayer.graphics.length > 0) { this._bufferGraphicsLayer.clear(); }

            this._app.map.graphics.clear();

            var resultsToClear: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection = this._app.featureSetManager.getCollectionById("TraceResults");
            if (resultsToClear) { resultsToClear.clear(); }

            this._currentTraceType = null;

            this.app.command("CloseResultsFrame").execute();
            this.app.event("TraceResultsClearedEvent").publish();
        }

        XI_DownstreamTrace(geometry: esri.geometry.Geometry) {
            //alert("xi trace downstream");
            let electricService = this.getEssentialsMapServiceByTraceType("Electric");
            this.XI_executeTrace(geometry, "Downstream", this._electricTraceUrl);
        }

        XI_executeTrace(geometry: esri.geometry.Geometry, traceType: string, traceUrl: string): void {
            
            //Clear previous trace results if present.
            this.XI_ClearTraceResults();

            //Plant the start flag.
            var point = <esri.geometry.Point>geometry;
            var flagImage: esri.symbol.PictureMarkerSymbol = new esri.symbol.PictureMarkerSymbol(this.traceFlagPath, 32, 32);
            flagImage.xoffset = 8;
            flagImage.yoffset = 16;
            this._app.map.graphics.add(new esri.Graphic(point, flagImage));
            var collection: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection = this._app.featureSetManager.getCollectionById("TraceResults");

            if (!collection) {
                collection = new geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection();
                collection.id = "TraceResults";
                collection.sourceName = "TraceResults";
                collection.setExtendedProperty("ShowPushpins", true);
                collection.displayName.set("Trace Results");
                this._app.featureSetManager.addCollection(collection);
            } else {
                collection.clear();
            }

            this._app.command("ClearActiveTool").execute();
            var spatialReference: string = JSON.stringify(this._app.map.spatialReference);

            var request = null;
            this._currentTraceType = null;

            switch (traceUrl) {
                case this._electricTraceUrl:
                    //*********ELECTRIC TRACES*********
                    this._currentTraceType = "Electric";
                    //Get Phases to Trace
                    var phaseToTraceParam: string = "Any";

                    //If any phase is NOT selected...
                    /*if ($('#traceA').attr("checked") != "checked" || $('#traceB').attr("checked") != "checked" || $('#traceC').attr("checked") != "checked") {
                        phaseToTraceParam = "AtLeast";
                        if ($('#traceA').attr('checked') == "checked") { phaseToTraceParam += "A"; }
                        if ($('#traceB').attr('checked') == "checked") { phaseToTraceParam += "B"; }
                        if ($('#traceC').attr('checked') == "checked") { phaseToTraceParam += "C"; }
                    }*/
                    phaseToTraceParam = "ABC"; //TODO, read the actual property from the options view

                    //TODO check to see if we really want to trace (as opposed to 
                    //let hardCode : string = "http://localhost:6080/arcgis/rest/services/TraceXI/MapServer/exts/TraceXI_SOE/ElectricTrace?startPoint=-9171282.9%2C3465550.4&traceType=Downstream&protectiveDevices=&phasesToTrace=ABC&drawComplexEdges=True&includeEdges=True&includeJunctions=True&extraInfo=&geometriesToRetrieve=*&tolerance=30&spatialReference=&currentStatusProgID=&fieldsToRetrieve=*&useModelNames=&runInParallel=&returnByClass=&unionOnServer=&geometryPrecision=2&traceResultsID=&f=pjson";
                    let pointString : string = point.x.toString() + "," + point.y.toString();
                    if (true) { //Non Protective Device Trace 
                        request = esri.request(new traceRequest({
                            url: traceUrl,
                            content: {
                                startPoint: pointString,
                                traceType: traceType,
                                phasesToTrace: phaseToTraceParam,
                                spatialReference: spatialReference
                            }
                        }));
                    }
                    break;


            }

            if (request) {
                let t = this;
                t._traceTimestamp = Date.now();
                let statusId = this._traceTimestamp.toString();

                let addStatusArgs = new geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.AddStatusArgs("Performing Trace");
                addStatusArgs.id = statusId;
                addStatusArgs.showBusyIcon = true;
                addStatusArgs.timeoutMS = 0;
                addStatusArgs.userClosedCallback = function () {
                    request.cancel();
                    if (t._traceTimestamp.toString() === statusId) {
                        t._traceTimestamp = 0;
                        t.XI_ClearTraceResults();
                    }
                }
                this.app.command("AddStatus").execute(addStatusArgs);

                try {
                    request.then((response) => {
                        this.app.command("RemoveStatus").execute(statusId);

                        if (this._traceTimestamp && (this._traceTimestamp.toString() === statusId)) {
                            if (response.results) {
                                this._currentTraceResults = null;
                                this._currentTraceResults = response.results;

                                var featureCount = 0;
                                var truncating = false;

                                if (this._currentTraceResults.length > 0) {
                                    this._app.featureSetManager.openCollection(collection.id);

                                    for (var i = 0; i < this._currentTraceResults.length; i++) {
                                        var traceResult: any = this._currentTraceResults[i];
                                        var layerName = traceResult.name;
                                        if (layerName !== undefined) {
                                            var essentialsLayer = this.getEssentialsLayer(layerName, this._currentTraceType);

                                            var esriFeatureSet = new esri.tasks.FeatureSet(traceResult);

                                            featureCount += esriFeatureSet.features.length;

                                            if (featureCount < this._maxFeatureCount) {
                                                //Populate attribute table
                                                if (essentialsLayer) {
                                                    var essentialsFeatureSet = new geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet({
                                                        "esriFeatureSet": esriFeatureSet,
                                                        "layer": essentialsLayer,
                                                        "app": this.app
                                                    });

                                                    //set the featureset id and display name
                                                    essentialsFeatureSet.id = layerName;
                                                    essentialsFeatureSet.displayName.set("(" + traceResult.features.length + ") " + essentialsLayer.displayName);

                                                    //clear out previous features from the same layer
                                                    var existingSet = collection.getFeatureSetById(essentialsFeatureSet.id);
                                                    if (existingSet) {
                                                        existingSet.append(essentialsFeatureSet);
                                                    } else {
                                                        //add featureset to collection
                                                        collection.featureSets.addItem(essentialsFeatureSet);
                                                    }
                                                }
                                            } else {
                                                console.log("Skipping Table creation for : " + traceResult.name);
                                                truncating = true;
                                            }
                                        }
                                    }

                                    this._app.featureSetManager.closeCollection(collection.id);
                                    this.ApplyBufferOptions(false);

                                    if (truncating) { this.app.command("Alert").execute("The trace results have been limited to " + this._maxFeatureCount + " features.", "Limited Trace Results"); }
                                } else {
                                    this.app.command("Alert").execute("No results were returned for the trace you performed.", "No Trace Results");
                                    //Remove the flag
                                    this.XI_ClearTraceResults();
                                }
                            }
                        } else {
                            console.log("Trace " + statusId + " response ignored/superseded.");
                        }
                    });
                } catch (ex) {
                    this.app.command("RemoveStatus").execute(statusId);
                }
            } else {
                console.log("TraceRequest creation failed.  traceUrl : '" + traceUrl + "'; traceType : '" + traceType + "'; currentTraceType : " + this._currentTraceType + ";");
            }
        }

        initializeServiceConfig(): void {
            var electricService = this.getEssentialsMapServiceByTraceType("Electric");
                                                                                                  //TraceXI_SOE/ElectricTrace
            if (!electricService) { console.log("Could not find Electric Service layer."); } else { this._electricTraceUrl = electricService.serviceUrl + "/exts/TraceXI_SOE/ElectricTrace"; }
        }

        getEssentialsLayer(name: string, traceType: string): geocortex.essentials.Layer {
            var mapService: geocortex.essentials.MapService = null;

            mapService = this.getEssentialsMapServiceByTraceType(traceType);

            if (mapService != null) {
                var layer = mapService.findLayerByName(name);
                return layer;
            }

            return null;
        }


        ApplyBufferOptions(skipZoom: boolean): void {
            //this._bufferOptionsXI_Model.GetIs
            if ($("#showBuffer").attr("checked") == "checked") {
                if (this._currentTraceResults && (this._currentTraceResults.length > 0)) {
                    var geometries = new Array();
                    var spatialReference = null;
                    var extent = null;

                    for (var i = 0; i < this._currentTraceResults.length; i++) {
                        var traceResult: any = this._currentTraceResults[i];
                        if (traceResult.features !== undefined) {
                            for (var j = 0; j < traceResult.features.length; j++) {
                                console.log("J = " + j.toString());
                                if (traceResult.geometryType !== "esriGeometryPoint") {
                                    geometries.push(traceResult.features[j].geometry);

                                    if (typeof (traceResult.features[j].geometry.getExtent) != 'undefined') {
                                        if (traceResult.features[j].geometry.getExtent() != null) {
                                            extent = (extent) ? extent.union(traceResult.features[j].geometry.getExtent()) : traceResult.features[j].geometry.getExtent();
                                        }
                                    }
                                }
                            }
                        }
                    }

                    this.ShowBuffer(geometries);

                    if ((!skipZoom) && (extent)) {
                        try {
                            extent = extent.expand(1.5);
                            this._app.map.setExtent(extent);
                        } catch (ex) {
                            console.log("Warning: There was an error generating an extent for the trace results.");
                            console.log(ex);
                        }
                    }
                } else if (!skipZoom) {
                    this.app.command("Alert").execute("Trace results not found. Please perform a trace first.", "Trace Results Not Present");
                }
            } else {
                //Hide Buffers    
                this._bufferGraphicsLayer.clear();
            }
        }

        ShowBuffer(traceGeometries): void {
            //alert("show buffer");

            if (this._bufferGraphicsLayer != null) {
                this._bufferGraphicsLayer.clear();

                this.updateBufferSymbology();
                //TODO - wow, this looks slow
                dojo.forEach(traceGeometries, (geometry) => {
                    this._bufferGraphicsLayer.add(new esri.Graphic(geometry, (geometry.type == "polyline") ? this.traceResultLineSymbol : this.traceResultPointSymbol));
                });
            }
        }

        getEssentialsMapServiceByTraceType(traceType: string): geocortex.essentials.MapService {
            for (var i = 0; i < this._app.site.essentialsMap.mapServices.length; i++) {
                if (this.mapServiceSupportsTraceType(this._app.site.essentialsMap.mapServices[i], traceType)) {
                    return this._app.site.getResourceById(this._app.site.essentialsMap.mapServices, this._app.site.essentialsMap.mapServices[i].serviceLayer.id);
                }
            }

            return null;
        }

        mapServiceSupportsTraceType(svc: geocortex.essentials.MapService, traceTypeToFind: string): boolean {
            let propNameWeAreLookingFor = "ArcFMTracingCapabilities";

            if (propNameWeAreLookingFor && svc && svc.properties) {
                let propName = propNameWeAreLookingFor.toLowerCase();
                let traceType = traceTypeToFind.toLowerCase();

                for (var prop in svc.properties) {
                    if (prop.toLowerCase() === propName) {
                        if (svc.properties[prop].toLowerCase() === traceType) { return true; }

                        var split = svc.properties[prop].split(",");
                        for (var i = 0; i < split.length; i++) {
                            if (split[i].toLowerCase() === traceType) { return true; }
                        }
                    }
                }
            }

            return false;
        }
        initGraphicsLayers(): void {
            //Create trace results graphics layers
            this._bufferGraphicsLayer = new esri.layers.GraphicsLayer({ id: this._bufferLayerId });

            this.updateBufferSymbology();

            //Add graphics layers to map
            this._app.map.addLayer(this._bufferGraphicsLayer, 99);

        }
        updateBufferSymbology(): void {
            
            var buffColorRGBA: dojo.Color = dojo.colorFromHex(this._userPrefs.buffer.color);
            buffColorRGBA.a = this._userPrefs.buffer.opacity / 100; //Opacity is defined between 0 and 1.

            this.traceResultPointSymbol = new esri.symbol.SimpleMarkerSymbol(
                esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE,
                this._userPrefs.buffer.size,
                new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL),
                buffColorRGBA
                );

            this.traceResultLineSymbol = new esri.symbol.CartographicLineSymbol(
                esri.symbol.CartographicLineSymbol.STYLE_SOLID,
                buffColorRGBA,
                this._userPrefs.buffer.size,
                esri.symbol.CartographicLineSymbol.CAP_ROUND,
                esri.symbol.CartographicLineSymbol.JOIN_ROUND,
                "3"
                );
        }

    }
    class traceRequest {
        url: string;
        content: traceRequestContent;
        handleAs: string;
        timeout: number;

        constructor(p) {
            this.handleAs = "json";
            this.timeout = (5 * 60 * 1000);  //milliseconds

            if (this && p) {
                dojo.mixin(this, p);

                if (p.content) {
                    this.content = new traceRequestContent(p.content);
                }
            }
        }
    }

    class traceRequestContent {
        startPoint: string;
        traceType: string;
        protectiveDevices: any;
        phasesToTrace: string;
        drawComplexEdges: string;
        includeEdges: string;
        includeJunctions: string;
        geometriesToRetrieve: string;
        tolerance: number;
        spatialReference: number;
        currentStatusProgID: string;
        fieldsToRetrieve: string;
        useModelNames: string;
        runInParallel: string;
        returnByClass: string;
        unionOnServer: string;
        geometryPrecision: string;
        traceResultsID: string;
        f: string;

        constructor(p) {
            this.protectiveDevices = [];
            this.phasesToTrace = "Any";
            this.drawComplexEdges = "False";
            this.includeEdges = "True";
            this.includeJunctions = "True";
            this.geometriesToRetrieve = "*";
            this.fieldsToRetrieve = "*";
            this.tolerance = 50;
            this.f = "json";

            dojo.mixin(this, p);
        }
    }


}