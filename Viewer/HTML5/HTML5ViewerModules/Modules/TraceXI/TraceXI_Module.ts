/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../resources/libs/arcgis-js-api.d.ts" />

module TraceXI {
    import eg = esri.geometry;
    import et = esri.tasks;
    export class TraceXI_Module extends geocortex.framework.application.ModuleBase {
        _dojoCookie: any;
        _prefsCookieName: string = "TracingXI.Prefs"
        _mapClickHandler: esri.Handle = null;
        _app: geocortex.essentialsHtmlViewer.ViewerApplication;
        _cacheMode = false;
        _traceOptionsXI_ViewModel: TraceOptionsXI_ViewModel;
        _bufferOptionsXI_ViewModel: BufferOptionsXI_ViewModel;
        _currentTraceType: string = null;
        _electricTraceUrl: any = null;
        _userPrefs: any = null;
        _bufferLayerId: string = "traceXIBufferLayer";
        traceResultPointSymbol: any = null;
        traceResultLineSymbol: any = null;
        _traceExtent: any = null;
        _currentTraceResults: Object[] = null;
        _traceTimestamp: number = 0;
        //initialBufferSettings: any = null;
        _maxFeatureCount: number = 7500;
        traceFlagPath: string = null; //doesn't follow naming convention because this is set in the configuration .json file
        _bufferGraphicsLayer: esri.layers.GraphicsLayer = null;
        _traceCollection = null;
        _zoomExtent = null;

        //Cachec tracing stuff
        _tieDevices = [];
        _size: number = 15;
        _data: any = null;
        _feederExtent: esri.geometry.Extent = null;
        _upstreamEIDS = null;
        _downstreamEIDS = null;
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        downstreamLayer: esri.layers.GraphicsLayer = null;
        upstreamstreamLayer: esri.layers.GraphicsLayer = null;
        feederLayer: esri.layers.GraphicsLayer = null;
        _feederGraphic: esri.Graphic = null;
        _upstreamGraphic: esri.Graphic = null;
        _downstreamGraphic: esri.Graphic = null;
        _findFeederViewModel = null;


        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string) {
            //alert("module constructor");
            super(app, lib);
            this._app = app;
            this.app.command("XI_UpdatePrefsCookie").register(this, this.XI_UpdatePrefsCookie);
            this.app.command("XI_ZoomToResults").register(this, () => {
                console.log("about to zoom");
                this._app.map.setExtent(this._zoomExtent);
                console.log("done with zoom");
            });
            this.app.command("XI_PopulateAttributes").register(this, () => {
                console.log("about to add to trace results");
                this.addToTraceResults(this._traceCollection);
                console.log("done adding trace results");
            });
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

            //Cache Stuff
            //this.app.command("doShowArrows").register(this, this.showArrows);
            //this.app.command("doClearResults").register(this, this.clearResults);
            this.app.command("doZoomToFeeder").register(this, this.zoomToFeederClick);
            this.app.command("doGetJson").register(this, this.getJson);

            this.app.event("FindFeederViewModelAttached").subscribe(this, (model: FindFeederViewModel) => {
                //this.app.map.on("extent-change", (evt) => { this.FindFeedermapExtentChangeHandler(this, evt); });
                //this.app.map.on("click", (evt) => { this.FindFeederMapClickHandler(this, evt); });


                //alert("from the module");
                this._findFeederViewModel = model;
                var graphicLayers: string[] = this.app.map.graphicsLayerIds;

                for (var i: number = 0; i < graphicLayers.length; i++) {
                    console.log(graphicLayers[i]);
                }


                
                //this.viewModel.notifyView(this.app);
                
            });
            
        }
        

        XI_UpdatePrefsCookie(propName : string, propValue : string): void {
            try {
                console.log("TraceXI update prefs cookie " + propName + " " + propValue);
                this._userPrefs[propName] = propValue;
                this._dojoCookie(this._prefsCookieName, JSON.stringify(this._userPrefs), {});
                if (propName === "bufferSize" || propName === "bufferOpacity" || propName === "bufferColor" || propName === "bufferShow") {
                    this.ApplyBufferOptions(true);
                }
                if (propName === "CacheMode") {
                    this._cacheMode = propValue.toUpperCase() === "TRUE" ? true : false;
                    if (this._cacheMode) {
                        this._mapClickHandler = this.app.map.on("click", (evt) => { this.FindFeederMapClickHandler(this, evt); });
                    }
                    else {
                        if (this._mapClickHandler !== null){
                            this._mapClickHandler.remove();
                        }
                    }
                }
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
            
            this.app.command("XI_UpdatePrefsCookie").execute("CacheMode", "False");
            $("#btnZoomTo").prop("disabled", true);
            $("#btnPopulateAttributes").prop("disabled", true);
            if (this._bufferGraphicsLayer.graphics.length > 0) { this._bufferGraphicsLayer.clear(); }

            this._app.map.graphics.clear();
            this._traceCollection = null;
            this._traceExtent = null;
            var resultsToClear: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection = this._app.featureSetManager.getCollectionById("TraceResults");
            if (resultsToClear) { resultsToClear.clear(); }

            this._currentTraceType = null;

            this.app.command("CloseResultsFrame").execute();
            this.app.event("TraceResultsClearedEvent").publish();

            //Cache stuff
            try {
                this._data = null;
                this._upstreamEIDS = null;
                this._downstreamEIDS = null;
                this._feederGraphic = null;
                this._upstreamGraphic = null;
                this._downstreamGraphic = null;
                this.upstreamstreamLayer.clear();
                this.downstreamLayer.clear();
                this.feederLayer.clear();
            }
            catch(x){}
        }

        XI_DownstreamTrace(geometry: esri.geometry.Geometry) {
            //alert("xi trace downstream");
            let electricService = this.getEssentialsMapServiceByTraceType("Electric");
            this.XI_executeTrace(geometry, "Downstream", this._electricTraceUrl);
        }

        XI_executeTrace(geometry: esri.geometry.Geometry, traceType: string, traceUrl: string): void {
            $("#btnZoomTo").prop("disabled", true);
            $("#btnPopulateAttributes").prop("disabled", true);
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
            this._traceCollection = collection;

            this._app.command("ClearActiveTool").execute();
            var spatialReference: string = JSON.stringify(this._app.map.spatialReference);

            var request = null;
            this._currentTraceType = null;

            switch (traceUrl) {
                case this._electricTraceUrl:
                    //*********ELECTRIC TRACES*********
                    this._currentTraceType = "Electric";
                    //Get Phases to Trace
                    let phasesToTraceParam: string = "Any";

                    //If any phase is NOT selected...
                    /*if ($('#traceA').attr("checked") != "checked" || $('#traceB').attr("checked") != "checked" || $('#traceC').attr("checked") != "checked") {
                        phaseToTraceParam = "AtLeast";
                        if ($('#traceA').attr('checked') == "checked") { phaseToTraceParam += "A"; }
                        if ($('#traceB').attr('checked') == "checked") { phaseToTraceParam += "B"; }
                        if ($('#traceC').attr('checked') == "checked") { phaseToTraceParam += "C"; }
                    }*/
                    phasesToTraceParam = this._userPrefs["phasesToTrace"]; //TODO, read the actual property from the options view
                    let fields = this._userPrefs["fields"];
                    //TODO check to see if we really want to trace (as opposed to 
                    //let hardCode : string = "http://localhost:6080/arcgis/rest/services/TraceXI/MapServer/exts/TraceXI_SOE/ElectricTrace?startPoint=-9171282.9%2C3465550.4&traceType=Downstream&protectiveDevices=&phasesToTrace=ABC&drawComplexEdges=True&includeEdges=True&includeJunctions=True&extraInfo=&geometriesToRetrieve=*&tolerance=30&spatialReference=&currentStatusProgID=&fieldsToRetrieve=*&useModelNames=&runInParallel=&returnByClass=&unionOnServer=&geometryPrecision=2&traceResultsID=&f=pjson";
                    let pointString : string = point.x.toString() + "," + point.y.toString();
                    if (true) { //Non Protective Device Trace 
                        request = esri.request(new traceRequest({
                            url: traceUrl,
                            content: {
                                startPoint: pointString,
                                traceType: traceType,
                                phasesToTrace: phasesToTraceParam,
                                spatialReference: spatialReference,
                                fieldsToRetrieve:fields
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
                        //alert("response back");
                        this._currentTraceResults = response.results;
                        if (this._traceTimestamp && (this._traceTimestamp.toString() === statusId)) {
                            if (response.results) {
                                this._currentTraceResults = response.results;
                                this.ApplyBufferOptions(false);
                                let spatialRef = this._app.map.spatialReference;
                                this._zoomExtent = new esri.geometry.Extent(response.traceExtent.xmin, response.traceExtent.ymin, response.traceExtent.xmax, response.traceExtent.ymax, spatialRef);
                                let myMap = this._app.map;
                                
                                /*console.log("about to call set extent");
                                myMap.setExtent(extent, false);
                                let thisRef = this;
                                setTimeout(function () {
                                    thisRef.addToTraceResults(collection);
                                }, 10);*/
                                
                                

                                /*var defs = new dojo.DeferredList([myMap.setExtent(extent, false), this.addToTraceResults(collection)]);

                                defs.then(() => {
                                    console.log("Hopefully both are done");
                                });*/

                                /*let bigJSONString: string = "big json string with results and extent info retrieved from web service call";
                                //get extent info from bigJSONString...for now, just mock the values
                                let xmin = 123; let ymin = 234; let xmax = 345; let ymax = 789;
                                let jsonExtent: esri.geometry.Extent = new esri.geometry.Extent(xmin, ymin, xmax, ymax, spatialRef);
                                //I want to call setExtent and handResults in parallel...how do I do that?
                                let setExtentDeferred: dojo.Deferred = myMap.setExtent(jsonExtent);
                                let handleResultsDeferred: dojo.Deferred = this.handleResultsDeferred(bigJSONString);
                                dojo.Deferred.RUN_IN_PARALLEL(setExtentDeferred, handleResultsDeferred);*/

                                /*x.then(() => {
                                    console.log("TraceXI: the time in the on complete block is " + (new Date).getTime().toString());
                                    //Process the results
                                    this.addToTraceResults(collection);

                                });*/
                                $("#btnZoomTo").prop("disabled", false);
                                $("#btnPopulateAttributes").prop("disabled", false);
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

        handleResultsDeferred(jsonString: string): dojo.Deferred {
            console.log("writing results to trace results - the incoming string is " + jsonString);
            return new dojo.Deferred();
        }


        hexToRgb(hex: string) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }

        FindFeedermapExtentChangeHandler(context, evt) {
            /*var w = this.app.map.extent.xmax - this.app.map.extent.xmin;
            var relativeSize: number = (2000 / w);
            var bufferSize = this._findFeederViewModel.numBufferSize.get();
            $('#numBufferChange').val
            this._size = bufferSize * relativeSize;

            if (this._data !== null) {
                //this._size = 10;
                this.drawFeederGraphics();
                this.drawUpstreamDownstreamLine(false);
            }*/
        }
        FindFeederMapClickHandler(context, evt) {
            //Only redraw the graphics if we are in cache mode
            if (!this._cacheMode) {
                return;
            }
            if (this._findFeederViewModel.showTraceUpDown.get()) {
                //this.viewModel.ffFlowDirectionTraceMode.set(false);
                var eidToUpstreamAssocArray = [];
                for (var eidIndex = 0; eidIndex < this._data.feeder.uptopology.length; eidIndex++) {
                    var eid_upEIDPair = this._data.feeder.uptopology[eidIndex];
                    eidToUpstreamAssocArray[eid_upEIDPair[0]] = eid_upEIDPair[1];
                }

                var eidToDownstreamAssocArray = [];
                for (var eidIndex = 0; eidIndex < this._data.feeder.downTopology.length; eidIndex++) {
                    var eid_downEIDSPair = this._data.feeder.downTopology[eidIndex];
                    eidToDownstreamAssocArray[eid_downEIDSPair[0]] = eid_downEIDSPair[1];
                }

                var eidToLineGeometry: any = this._data.feeder.eidToLineGeometry;
                var mapPoint: esri.geometry.Point = evt.mapPoint;
                var mapPointX = mapPoint.x;
                var mapPointY = mapPoint.y;
                var closestSoFar = 9999;
                var startEID = -9999;
                for (var i = 0; i < eidToLineGeometry.length; i++) {
                    var verticiesOnLineSegment = eidToLineGeometry[i][1][0];
                    for (var j = 0; j < verticiesOnLineSegment.length; j++) {
                        var pointOnLine = verticiesOnLineSegment[j];
                        var pointOnLineX = pointOnLine[0];
                        var pointOnLineY = pointOnLine[1];
                        var dist = ((pointOnLineX - mapPointX) * (pointOnLineX - mapPointX)) + ((pointOnLineY - mapPointY) * (pointOnLineY - mapPointY));
                        if (dist < closestSoFar) {
                            closestSoFar = dist;
                            startEID = eidToLineGeometry[i][0];
                        }
                    }
                }

                //Now that we know the startEID, get the eids that are upstream from it. 
                var currentEID = -1 * startEID;
                var upstreamEdgeEidsToDraw = [];
                while (currentEID != -99999999) {
                    if (currentEID === undefined) {
                        alert("No path found");
                        break;
                    }
                    if (currentEID < 0) {
                        upstreamEdgeEidsToDraw.push(-1 * currentEID);
                    }
                    currentEID = eidToUpstreamAssocArray[currentEID]
                }


                //Now get the downstreamEIDS
                var eidsToVisit = [];
                var downstreamEidsToDraw = [];
                eidsToVisit.push(-1 * startEID);
                var visitIndexPoint = 0;
                while (visitIndexPoint < eidsToVisit.length) {
                    var eid = eidsToVisit[visitIndexPoint];
                    if (eidToDownstreamAssocArray[eid] !== undefined) {
                        for (var i = 0; i < eidToDownstreamAssocArray[eid].length; i++) {
                            var downstreamEID = eidToDownstreamAssocArray[eid][i];
                            eidsToVisit.push(downstreamEID);
                            if (downstreamEID < 0) {
                                downstreamEidsToDraw.push(-1 * downstreamEID);
                            }
                        }
                    }
                    visitIndexPoint++;
                }

                this._upstreamEIDS = upstreamEdgeEidsToDraw;
                this._downstreamEIDS = downstreamEidsToDraw;

                //Now draw the upstream line
                this.drawUpstreamDownstreamLine(true);
            }
        }
        drawUpstreamDownstreamLine(refresh: boolean) {
            var upstreamEids: number[] = this._upstreamEIDS;
            var downstreamEids: number[] = this._downstreamEIDS;
            if (upstreamEids === null && downstreamEids === null) {
                return;
            }

            if ((this._upstreamGraphic === null || this._downstreamGraphic === null) || (refresh)) {

                var eidLineGeomAssocArray = [];
                for (var j = 0; j < this._data.feeder.eidToLineGeometry.length; j++) {
                    var edgeEID = this._data.feeder.eidToLineGeometry[j][0];
                    eidLineGeomAssocArray[edgeEID] = this._data.feeder.eidToLineGeometry[j][1];
                }

                var combinedPathsUp = [];
                for (var i = 0; i < upstreamEids.length; i++) {
                    var eid = upstreamEids[i];
                    var singlePath = eidLineGeomAssocArray[eid];
                    combinedPathsUp.push(singlePath[0]);
                }

                var combinedPathsDown = [];
                for (var i = 0; i < downstreamEids.length; i++) {
                    var eid = downstreamEids[i];
                    var singlePath = eidLineGeomAssocArray[eid];
                    combinedPathsDown.push(singlePath[0]);
                }


                var lineSymbolUp = new esri.symbol.CartographicLineSymbol(
                    esri.symbol.CartographicLineSymbol.STYLE_SOLID,
                    new esri.Color([0, 255, 0, .5]), this._size,
                    esri.symbol.CartographicLineSymbol.CAP_ROUND,
                    esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3"
                    );

                var lineSymbolDown = new esri.symbol.CartographicLineSymbol(
                    esri.symbol.CartographicLineSymbol.STYLE_SOLID,
                    new esri.Color([0, 0, 255, .5]), this._size,
                    esri.symbol.CartographicLineSymbol.CAP_ROUND,
                    esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3"
                    );

                //var rgbUp: any = this.hexToRgb(this.viewModel.upstreamColor.get());
                //var red: number = rgbUp.r;
                //var green: number = rgbUp.g;
                //var blue: number = rgbUp.b;
                lineSymbolUp.setColor(new esri.Color([0, 255, 0, .5]));

                //var rgbDown: any = this.hexToRgb(this.viewModel.downstreamColor.get());
                //red = rgbDown.r;
                //green = rgbDown.g;
                //blue = rgbDown.b;
                lineSymbolDown.setColor(new esri.Color([0, 0, 255, .5]));

                var polyLineUp = new esri.geometry.Polyline({
                    "paths": combinedPathsUp,
                    "spatialReference": { "wkid": 102100 }
                });

                var polyLineDown = new esri.geometry.Polyline({
                    "paths": combinedPathsDown,
                    "spatialReference": { "wkid": 102100 }
                });


                var gUp = new esri.Graphic(polyLineUp, lineSymbolUp);
                var gDown = new esri.Graphic(polyLineDown, lineSymbolDown);

                this.upstreamstreamLayer.clear();
                this.downstreamLayer.clear();
                this.upstreamstreamLayer.add(gUp);
                this.downstreamLayer.add(gDown);

                this._upstreamGraphic = gUp;
                this._downstreamGraphic = gDown;
            }


            var lineSymbolUp = new esri.symbol.CartographicLineSymbol(
                esri.symbol.CartographicLineSymbol.STYLE_SOLID,
                new esri.Color([0, 255, 0, .5]), this._size,
                esri.symbol.CartographicLineSymbol.CAP_ROUND,
                esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3"
                );

            var lineSymbolDown = new esri.symbol.CartographicLineSymbol(
                esri.symbol.CartographicLineSymbol.STYLE_SOLID,
                new esri.Color([0, 0, 255, .5]), this._size,
                esri.symbol.CartographicLineSymbol.CAP_ROUND,
                esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3"
                );

            lineSymbolUp.setColor(new esri.Color([0, 255, 0, 0.5]));


            lineSymbolDown.setColor(new esri.Color([0, 0, 255, 0.5]));

            if (this._upstreamGraphic !== null) {
                this._upstreamGraphic.setSymbol(lineSymbolUp);
            }

            if (this._downstreamGraphic !== null) {
                this._downstreamGraphic.setSymbol(lineSymbolDown);
            }
        }
        getJson() {
            var selectedFeederID: string = $("#cboFindFeederList :selected").text().split(":")[1];
            this._findFeederViewModel.selectedFeeder.set("Looking for Feeder " + $("#cboFindFeederList :selected").text());
            $("#imgSpinner").css("display", "inline");
            //setTimeout(this.getJson2, 1000, this, selectedFeederID);
            this.getJson2(this, selectedFeederID);
        }
        getJson2(context: TraceXI_Module, selectedFeeder: string) {
            //var context = this;
            var map = context.app.map;
            var vm: FindFeederViewModel = this._findFeederViewModel;
            //var context: FindFeederModule = this;
            var urlToJson: string = "Resources/CachedFeeders/" + selectedFeeder + ".json";
            $.ajax({
                url: urlToJson
            }).then(function (data) {
                try {
                    vm.data.set(data);
                    context.app.command("XI_UpdatePrefsCookie").execute("CacheMode", "True");
                    
                    var feederExtent: eg.Extent = new eg.Extent(data.feeder.extent);

                    context._feederExtent = feederExtent;
                    context._data = data;
                    //ffPriOH,ffSecOH,ffOHTotal,ffPriUG,ffSecUG,ffUGTotal
                    vm.ffCustomersA.set(data.feeder.customers.PhaseACustomers);
                    vm.ffCustomersB.set(data.feeder.customers.PhaseBCustomers);
                    vm.ffCustomersC.set(data.feeder.customers.PhaseCCustomers);
                    vm.ffCustomersTotal.set(data.feeder.customers.Total);

                    vm.ffPriOH.set(data.feeder.conductor.priOH);
                    vm.ffPriUG.set(data.feeder.conductor.priUG);
                    vm.ffSecOH.set(data.feeder.conductor.secOH);
                    vm.ffSecUG.set(data.feeder.conductor.secUG);
                    vm.ffOHTotal.set(data.feeder.conductor.ohTotal);
                    vm.ffUGTotal.set(data.feeder.conductor.ugTotal);
                    vm.ffPriTotal.set(data.feeder.conductor.priTotal);
                    vm.ffSecTotal.set(data.feeder.conductor.secTotal);
                    vm.ffConductorTotal.set(data.feeder.conductor.conductorTotal);
                    


                    context.drawFeederGraphics();
                }
                finally {
                    $("#imgSpinner").css("display", "none");
                    context._findFeederViewModel.selectedFeeder.set("Found Feeder " + selectedFeeder);
                    context.zoomToFeeder(false);

                }
            });

        }
        zoomToFeederClick() {
            this.zoomToFeeder(true);
        }
        zoomToFeeder(forceZoom: boolean) {
            if (this._findFeederViewModel.autoZoom.get() || forceZoom) {
                if (this._feederExtent != null) {
                    this.app.map.setExtent(this._feederExtent);
                }
                else if (forceZoom) {
                    alert("Unable to zoom to the feeder.");
                }
            }
        }
        drawFeederGraphics() {
            //this._data = data;
            var data = this._data;
            if (data === undefined) {
                return;
            }
            if ($.inArray("feederLayer", this.app.map.graphicsLayerIds) === -1) {
                var fl: esri.layers.GraphicsLayer = new esri.layers.GraphicsLayer();
                fl.id = "feederLayer";
                var dn: esri.layers.GraphicsLayer = new esri.layers.GraphicsLayer();
                dn.id = "downstreamLayer";
                var us: esri.layers.GraphicsLayer = new esri.layers.GraphicsLayer();
                us.id = "upstreamLayer";
                this.app.map.addLayers([fl, dn, us]);
                this.feederLayer = fl;
                this.upstreamstreamLayer = us;
                this.downstreamLayer = dn;
            }
            //this.feederLayer.clear();
            //this.app.map.graphics.clear();
            var lineSymbol = new esri.symbol.CartographicLineSymbol(
                esri.symbol.CartographicLineSymbol.STYLE_SOLID,
                new esri.Color([255, 255, 0, .5]), this._size,
                esri.symbol.CartographicLineSymbol.CAP_ROUND,
                esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3"
                );
            var rgb: any = this.hexToRgb(this._findFeederViewModel.feederColor.get());
            var red: number = rgb.r;
            var green: number = rgb.g;
            var blue: number = rgb.b;
            lineSymbol.setColor(new esri.Color([red, green, blue, 0.5]));

            var eidToLineGeometry: any = data.feeder.eidToLineGeometry;
            if (this._feederGraphic === null) {
                var combinedPaths = [];
                for (var i = 0; i < eidToLineGeometry.length; i++) {
                    var singlePath = eidToLineGeometry[i][1];
                    combinedPaths.push(singlePath[0]);
                }

                var polyLine = new esri.geometry.Polyline({
                    "paths": combinedPaths,
                    "spatialReference": { "wkid": 102100 }
                });
                var g = new esri.Graphic(polyLine, lineSymbol);
                this._feederGraphic = g;
                this.feederLayer.add(g);
            }
            this._feederGraphic.setSymbol(lineSymbol);

            //this.app.map.graphics.add(g);
            

        }
        addToTraceResults(collection: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection)  {
            console.log("In Add to Trace results");
            var featureCount = 0;
            var truncating = false;
            let populateStart: Date = new Date();
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
                var populateEnd = new Date();
                var populatetime = populateEnd.getTime() - populateStart.getTime()
                //alert("Population time in milliseconds " + populatetime.toString());

                this._app.featureSetManager.closeCollection(collection.id);
                //this.ApplyBufferOptions(false);
                console.log("TraceXI: the time after setting attributes is " + (new Date).getTime().toString());
                if (truncating) { this.app.command("Alert").execute("The trace results have been limited to " + this._maxFeatureCount + " features.", "Limited Trace Results"); }
            } else {
                this.app.command("Alert").execute("No results were returned for the trace you performed.", "No Trace Results");
                //Remove the flag
                this.XI_ClearTraceResults();
            }
            //return new dojo.Deferred();
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


        ApplyBufferOptions(skipZoom: boolean) {
            //this._bufferOptionsXI_Model.GetIs
            let combinePaths = true;
            var combinedPathsDown = [];
            /*for (var i = 0; i < downstreamEids.length; i++) {
                var eid = downstreamEids[i];
                var singlePath = eidLineGeomAssocArray[eid];
                combinedPathsDown.push(singlePath[0]);
            }*/

            let extent = new esri.geometry.Extent({});
            if ($("#XI_showBuffer").attr("checked") == "checked") {
                if (this._currentTraceResults && (this._currentTraceResults.length > 0)) {
                    var geometries = new Array();
                    var spatialReference = null;
                    let sr: esri.SpatialReference = this._app.map.spatialReference;
                    for (var i = 0; i < this._currentTraceResults.length; i++) {
                        var traceResult: any = this._currentTraceResults[i];
                        if (traceResult.features !== undefined) {
                            for (var j = 0; j < traceResult.features.length; j++) {
                                //console.log("J = " + j.toString());
                                if (traceResult.geometryType !== "esriGeometryPoint") {
                                    if (combinePaths == false) {
                                        let geom: esri.geometry.Polyline = new esri.geometry.Polyline(traceResult.features[j].geometry);
                                        geom.spatialReference = sr;
                                        geometries.push(geom);
                                    }
                                    else {
                                        let path = traceResult.features[j].geometry.paths[0];
                                        combinedPathsDown.push(path);
                                    }
                                }
                            }
                        }
                    }

                    if (combinePaths) {
                        var polyLine = new esri.geometry.Polyline({
                            "paths": combinedPathsDown,
                            "spatialReference": { "wkid": 102100 }
                        });
                        polyLine.spatialReference = this._app.map.spatialReference;
                        this.ShowBuffer([polyLine]);
                    }
                    else {
                        this.ShowBuffer(geometries);
                    }

                    if ((!skipZoom) && (extent)) {
                        try {
                            //var zoomToStart: Date = new Date();
                            //extent = extent.expand(1.5);

                        } catch (ex) {
                            console.log("Warning: There was an error generating an extent for the trace results.");
                            console.log(ex);
                            return null;
                        }
                    }
                } else if (!skipZoom) {
                    this.app.command("Alert").execute("Trace results not found. Please perform a trace first.", "Trace Results Not Present");
                }
            } else {
                //Hide Buffers    
                this._bufferGraphicsLayer.clear();
            }
            //return extent;
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
            this._app.map.addLayer(this._bufferGraphicsLayer, 101);

        }
        updateBufferSymbology(): void {
            
            var buffColorRGBA: dojo.Color = dojo.colorFromHex(this._userPrefs.bufferColor);
            buffColorRGBA.a = this._userPrefs.bufferOpacity / 100; //Opacity is defined between 0 and 1.

            this.traceResultPointSymbol = new esri.symbol.SimpleMarkerSymbol(
                esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE,
                this._userPrefs.bufferSize,
                new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL),
                buffColorRGBA
                );

            this.traceResultLineSymbol = new esri.symbol.CartographicLineSymbol(
                esri.symbol.CartographicLineSymbol.STYLE_SOLID,
                buffColorRGBA,
                this._userPrefs.bufferSize,
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
            this.fieldsToRetrieve = "Transformer.FacilityID,Transformer.RatedKVA,Transformer.PhaseDesignation,Transformer.OperatingVoltage,Transformer.StreetAddress,"+
            "Fuse.CustomerCount,Fuse.StreetAdress,Fuse.FacilityID,Fuse.OperatingVoltage,Fuse.Subtype," +
            "ServicePoint.ConsumptionType, ServicePoint.StreetAddress, ServicePoint.FacilityID,ServicePoint.GPSX,ServicePoint.GPSY," +
            "Switch.FacilityID,Switch.OperatingVoltage,Switch.StreetAddress,Switch.LastUser,Switch.Subtype," +
            "PriOHElectricLineSegment.NetworkLevel,PriOHElectricLineSegment.ConductorConfiguration,PriOHElectricLineSegment.MeasuredLength,PriOHElectricLineSegment.PhaseDesignation,PriOHElectricLineSegment.NeutralSize,"+
            "PriUGElectricLineSegment.NetworkLevel,PriUGElectricLineSegment.NeutralMaterial,PriUGElectricLineSegment.MeasuredLength,PriUGElectricLineSegment.PhaseDesignation,PriUGElectricLineSegment.NeutralSize," +
            "SecOHElectricLineSegment.Subtype, SecOHElectricLineSegment.PhaseDesignation, SecOHElectricLineSegment.LengthSource,SecOHElectricLineSegment.FacilityID,SecOHElectricLineSegment.MeasuredLength,SecOHElectricLineSegment.Subtype,SecOHElectricLineSegment.PhaseDesignation,SecOHElectricLineSegment.FacilityID" +
            "SecUGElectricLineSegment.Subtype,SecUGElectricLineSegment.PhaseDesignation,SecUGElectricLineSegment.LengthSource,SecUGElectricLineSegment.FacilityID,SecUGElectricLineSegment.MeasuredLength";
            this.tolerance = 50;
            this.f = "json";

            dojo.mixin(this, p);
        }
    }


}