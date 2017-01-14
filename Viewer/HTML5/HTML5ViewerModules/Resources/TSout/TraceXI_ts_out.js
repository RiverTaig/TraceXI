/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../resources/libs/arcgis-js-api.d.ts" />
/*
module TraceXI {

    export class BufferOptionsXI_Model {

        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        userPrefs: any = null;
        dojoCookie: any;
        prefsCookieName: string = "BufferOptionsXI.Prefs"

        constructor( mod: TraceXI_Module, config: any) {
            //alert("Model constructor");
            this.app = mod._app;
            var t = this;
            require(["dojo/cookie"], function (dojoCookie) { t.dojoCookie = dojoCookie; });
            this.initialize(config);
        }

        initialize(config: any): void {
            //alert("model init");
            //let model = this;
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").register(this, this.on_ViewModel_Model_Notify);
            this.app.event("BufferOptionsXI_ViewModelAttached").subscribe(this, (vm: TraceOptionsXI_ViewModel) => {
                this.initializeUserPrefs();
            });

        }

        private _showBuffer: boolean = true;
        ShowBuffer(): boolean{
            return this._showBuffer;
        }
        

        on_ViewModel_Model_Notify(poperty: string, data: any) {
            switch (poperty) {
                case "BufferOptions":
                    this.userPrefs.electric = { traceA: data[0], traceB: data[1], traceC: data[2] };
                    this.UpdatePrefsCookie();
                    break;
                case "ApplyBuffer":
                    alert("Need to let module know to apply the buffer");
                    break;
                case "ShowBuffer":
                    this._showBuffer = data;
                    break;
            }
        }

        UpdatePrefsCookie(): void {
            try {
                this.dojoCookie(this.prefsCookieName, JSON.stringify(this.userPrefs), {});
            } catch (ex) {
                //Fail Silently
            }
        }

        initializeUserPrefs(): void {
            try {
                var prefsCookie = this.dojoCookie(this.prefsCookieName);

                if (prefsCookie) {
                    this.userPrefs = JSON.parse(prefsCookie);
                }
            } catch (ex) {
                //Fail Silently
                this.userPrefs = null;
            }

            if (!this.userPrefs) { this.userPrefs = {}; }
            if (!this.userPrefs.buffer) { this.userPrefs.buffer = null; }
            if (!this.userPrefs.electric) { this.userPrefs.electric = { traceA: true, traceB: true, traceC: true } }
            if (!this.userPrefs.electric) { this.userPrefs.gas = {} }
            if (!this.userPrefs.electric) { this.userPrefs.water = {} }
            this.app.command("on_BufferOptionsXI_Model_ViewModel_Notify").execute("PhasesToTrace", [this.userPrefs.electric.traceA, this.userPrefs.electric.traceB, this.userPrefs.electric.traceC]);
        }

    }
} */ 
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../resources/libs/arcgis-js-api.d.ts" />
/*
module TraceXI {

    export class TraceOptionsXI_Model {

        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        userPrefs: any = null;
        dojoCookie: any;
        prefsCookieName: string = "TracingXI.Prefs"

        constructor( mod: TraceXI_Module, config: any) {
            //alert("Model constructor");
            this.app = mod._app;
            var t = this;
            require(["dojo/cookie"], function (dojoCookie) { t.dojoCookie = dojoCookie; });
            this.initialize(config);
        }

        initialize(config: any): void {
            //alert("model init");
            //let model = this;
            this.app.command("on_TraceOptionsXI_ViewModel_Model_Notify").register(this, this.on_ViewModel_Model_Notify);
            this.app.event("TraceXI_ViewModelAttached").subscribe(this, (vm: TraceOptionsXI_ViewModel) => {
                this.initializeUserPrefs();
            });
        }

        on_ViewModel_Model_Notify(poperty: string, data: any) {
            switch (poperty) {
                case "PhasesToTrace":
                    this.userPrefs.electric = { traceA: data[0], traceB: data[1], traceC: data[2] };
                    this.UpdatePrefsCookie();
                    break;
            }
        }

        public GetUserProperties() : any {
            return this.userPrefs;
        }

        UpdatePrefsCookie(): void {
            try {
                this.dojoCookie(this.prefsCookieName, JSON.stringify(this.userPrefs), {});
            } catch (ex) {
                //Fail Silently
            }
        }

        initializeUserPrefs(): void {
            try {
                var prefsCookie = this.dojoCookie(this.prefsCookieName);

                if (prefsCookie) {
                    this.userPrefs = JSON.parse(prefsCookie);
                }
            } catch (ex) {
                //Fail Silently
                this.userPrefs = null;
            }

            if (!this.userPrefs) { this.userPrefs = {}; }
            if (!this.userPrefs.buffer) { this.userPrefs.buffer = null; }
            if (!this.userPrefs.electric) { this.userPrefs.electric = { traceA: true, traceB: true, traceC: true } }
            if (!this.userPrefs.electric) { this.userPrefs.gas = {} }
            if (!this.userPrefs.electric) { this.userPrefs.water = {} }
            this.app.command("on_Model_ViewModel_Notify").execute("PhasesToTrace", [this.userPrefs.electric.traceA, this.userPrefs.electric.traceB, this.userPrefs.electric.traceC]);
        }

    }
} */ 
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TraceXI;
(function (TraceXI) {
    var BufferOptionsXI_View = (function (_super) {
        __extends(BufferOptionsXI_View, _super);
        function BufferOptionsXI_View(app, lib) {
            _super.call(this, app, lib);
            //alert("constructor of buffer view");
        }
        BufferOptionsXI_View.prototype.attach = function (viewModel) {
            var _this = this;
            _super.prototype.attach.call(this, viewModel);
            this.app.command("on_BufferOptionsXI_ViewModel_View_Notify").register(this, this.on_ViewModel_View_Notify);
            $("#XI_showBuffer").on('change', function () {
                _this.app.command("XI_showBuffer_Changed").execute("ShowBuffer", $("#XI_showBuffer").val);
            });
            $("#XI_bufferSize")
                .on('change', function () {
                viewModel.sizeBuffer.set($('#XI_bufferSize').val());
                _this.app.command("XI_bufferSize_Changed").execute();
            })
                .on('input', function () {
                viewModel.sizeBuffer.set($('#bufferSize').val());
            });
            $("#XI_bufferOpacity").on('mouseup', function () {
                viewModel.opacityBuffer.set($('#bufferOpacity').val());
                _this.app.command("XI_bufferOpacity_Changed").execute();
            })
                .on('input', function () {
                viewModel.opacityBuffer.set($('#bufferOpacity').val());
            });
            $("#XI_bufferColor")
                .spectrum({
                preferredFormat: "hex"
            })
                .on('change.spectrum', function () {
                _this.app.command("XI_bufferColor_Changed").execute();
            })
                .on('hide.spectrum', function () {
                _this.app.command("XI_bufferColor_Changed").execute();
            });
            this.app.event("ViewDeactivatedEvent").subscribe(this, function (event) {
                if (this.id === event.id) {
                    $("#XI_bufferColor").spectrum().hide();
                }
            });
            this.app.event("ViewActivatedEvent").subscribe(this, function (event) {
                $("#XI_bufferColor").spectrum().hide();
            });
            //Let the Module know that the view model is attached. 
            this.app.event("BufferOptionsXI_ViewModelAttached").publish(viewModel);
        };
        BufferOptionsXI_View.prototype.on_ViewModel_View_Notify = function (poperty, data) {
            switch (poperty) {
                case "InitProperties":
                    //data is userPrefs
                    var userPrefs = data;
                    $("#bufferColor").spectrum("set", userPrefs.buffer.color);
                    $("#bufferOpacity").val(userPrefs.buffer.opacity);
                    $('#bufferSize').val(userPrefs.bufferSize);
                    break;
            }
        };
        return BufferOptionsXI_View;
    })(geocortex.framework.ui.ViewBase);
    TraceXI.BufferOptionsXI_View = BufferOptionsXI_View;
})(TraceXI || (TraceXI = {}));
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
var TraceXI;
(function (TraceXI) {
    var BufferOptionsXI_ViewModel = (function (_super) {
        __extends(BufferOptionsXI_ViewModel, _super);
        function BufferOptionsXI_ViewModel(app, lib) {
            _super.call(this, app, lib);
            //viewReference: TraceXI_View = null;
            //modelReference: TraceXI_Model = null;
            //Buffer Observables
            this.showBuffer = new Observable();
            this.sizeBuffer = new Observable();
            this.opacityBuffer = new Observable();
            this.colorBuffer = new Observable();
            this._userPrefs = null;
            //alert("viewmodel  constructor");
        }
        BufferOptionsXI_ViewModel.prototype.initialize = function (config) {
            //alert("1");//on_BufferOptionsXI_View_ViewModel_Notify
            //this.app.command("on_BufferOptionsXI_Model_ViewModel_Notify").register(this, this.on_Model_ViewModel_Notify);
            //this.app.command("on_BufferOptionsXI_View_ViewModel_Notify").register(this, this.on_View_ViewModel_Notify);
            this.app.command("XI_showBuffer_Changed").register(this, this.executeshowBuffer_Changed);
            this.app.command("XI_bufferSize_Changed").register(this, this.XI_bufferSize_Changed);
            this.app.command("XI_bufferColor_Changed").register(this, this.executebufferColor_Changed);
            this.app.command("XI_bufferOpacity_Changed").register(this, this.executebufferOpacity_Changed);
            //alert("2");
        };
        BufferOptionsXI_ViewModel.prototype.initBufferOptions = function (userPrefs) {
            this._userPrefs = userPrefs;
            //Observables
            console.log("TraceXI initBufferOptions");
            this.showBuffer.set(userPrefs.buffer.show);
            this.opacityBuffer.set(userPrefs.buffer.opacity);
            this.sizeBuffer.set(userPrefs.bufferSize);
            this.colorBuffer.set(userPrefs.buffer.color);
            //Stuff that doesn't support databinding needs to call init on the view
            this.app.command("on_BufferOptionsXI_ViewModel_View_Notify").execute("InitProperties", userPrefs);
        };
        BufferOptionsXI_ViewModel.prototype.executeshowBuffer_Changed = function (newValue) {
            //this._userPrefs.buffer.show = $('#showBuffer').prop("checked");
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("ApplyBufferOptions", newValue);
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("UpdatePrefsCookie", true);
        };
        BufferOptionsXI_ViewModel.prototype.XI_bufferSize_Changed = function (text) {
            this._userPrefs.buffer.size = $('#XI_bufferSize').val();
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("ApplyBufferOptions", true);
            this.app.command("XI_UpdatePrefsCookie").execute("bufferSize", $('#XI_bufferSize').val());
        };
        BufferOptionsXI_ViewModel.prototype.executebufferOpacity_Changed = function () {
            this._userPrefs.buffer.opacity = $('#bufferOpacity').val();
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("ApplyBufferOptions", true);
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("UpdatePrefsCookie", true);
        };
        BufferOptionsXI_ViewModel.prototype.executebufferColor_Changed = function () {
            this._userPrefs.buffer.color = $('#bufferColor').spectrum("get").toHexString();
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("ApplyBufferOptions", true);
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("UpdatePrefsCookie", true);
        };
        return BufferOptionsXI_ViewModel;
    })(geocortex.framework.ui.ViewModelBase);
    TraceXI.BufferOptionsXI_ViewModel = BufferOptionsXI_ViewModel;
})(TraceXI || (TraceXI = {}));
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../resources/libs/arcgis-js-api.d.ts" />
var TraceXI;
(function (TraceXI) {
    var TraceXI_Module = (function (_super) {
        __extends(TraceXI_Module, _super);
        function TraceXI_Module(app, lib) {
            var _this = this;
            //alert("module constructor");
            _super.call(this, app, lib);
            this._prefsCookieName = "TracingXI.Prefs";
            this._currentTraceType = null;
            this._electricTraceUrl = null;
            this._userPrefs = null;
            this._bufferLayerId = "traceBufferLayer";
            this.traceResultPointSymbol = null;
            this.traceResultLineSymbol = null;
            this._currentTraceResults = null;
            this._traceTimestamp = 0;
            this.initialBufferSettings = null;
            this._maxFeatureCount = 7500;
            this.traceFlagPath = null; //doesn't follow naming convention because this is set in the configuration .json file
            this._bufferGraphicsLayer = null;
            this._app = app;
            this.app.command("XI_UpdatePrefsCookie").register(this, this.XI_UpdatePrefsCookie);
            this.app.command("XI_ClearTraceResults").register(this, this.XI_ClearTraceResults);
            this.app.command("XI_DownstreamTrace").register(this, this.XI_DownstreamTrace);
            Promise.all([this._app.waitUntilSiteInitialized(), this._app.waitUntilMapLoaded(), this._app.waitUntilSiteServiceLayersLoaded()]).then(function () {
                _this.initializeServiceConfig();
                _this.initGraphicsLayers();
            });
            var t = this;
            require(["dojo/cookie"], function (dojoCookie) { t._dojoCookie = dojoCookie; });
        }
        TraceXI_Module.prototype.initialize = function (config) {
            var _this = this;
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
            this._app.event("BufferOptionsXI_ViewModelAttached").subscribe(this, function (vm) {
                _this._bufferOptionsXI_ViewModel = vm;
                vm.initBufferOptions(_this._userPrefs);
            });
            this._app.event("TracingOptions_ViewModelAttached").subscribe(this, function (vm) {
                console.log("TraceXI TracingOptions_ViewModelAttached");
                _this._traceOptionsXI_ViewModel = vm;
                vm.initTraceOptions(_this._userPrefs);
            });
        };
        TraceXI_Module.prototype.XI_UpdatePrefsCookie = function (propName, propValue) {
            try {
                console.log("TraceXI update prefs cookie " + propName + " " + propValue);
                this._userPrefs[propName] = propValue;
                this._dojoCookie(this._prefsCookieName, JSON.stringify(this._userPrefs), {});
            }
            catch (ex) {
            }
        };
        TraceXI_Module.prototype.initializeUserPrefs = function (config) {
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
            catch (ex) {
                console.log("TraceXI Error in initializeUserPrefs");
                this._userPrefs = {};
            }
        };
        TraceXI_Module.prototype.XI_ClearTraceResults = function () {
            //alert("xi clear trace results");
            if (this._bufferGraphicsLayer.graphics.length > 0) {
                this._bufferGraphicsLayer.clear();
            }
            this._app.map.graphics.clear();
            var resultsToClear = this._app.featureSetManager.getCollectionById("TraceResults");
            if (resultsToClear) {
                resultsToClear.clear();
            }
            this._currentTraceType = null;
            this.app.command("CloseResultsFrame").execute();
            this.app.event("TraceResultsClearedEvent").publish();
        };
        TraceXI_Module.prototype.XI_DownstreamTrace = function (geometry) {
            //alert("xi trace downstream");
            var electricService = this.getEssentialsMapServiceByTraceType("Electric");
            this.XI_executeTrace(geometry, "Downstream", this._electricTraceUrl);
        };
        TraceXI_Module.prototype.XI_executeTrace = function (geometry, traceType, traceUrl) {
            var _this = this;
            //Clear previous trace results if present.
            this.XI_ClearTraceResults();
            //Plant the start flag.
            var point = geometry;
            var flagImage = new esri.symbol.PictureMarkerSymbol(this.traceFlagPath, 32, 32);
            flagImage.xoffset = 8;
            flagImage.yoffset = 16;
            this._app.map.graphics.add(new esri.Graphic(point, flagImage));
            var collection = this._app.featureSetManager.getCollectionById("TraceResults");
            if (!collection) {
                collection = new geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection();
                collection.id = "TraceResults";
                collection.sourceName = "TraceResults";
                collection.setExtendedProperty("ShowPushpins", true);
                collection.displayName.set("Trace Results");
                this._app.featureSetManager.addCollection(collection);
            }
            else {
                collection.clear();
            }
            this._app.command("ClearActiveTool").execute();
            var spatialReference = JSON.stringify(this._app.map.spatialReference);
            var request = null;
            this._currentTraceType = null;
            switch (traceUrl) {
                case this._electricTraceUrl:
                    //*********ELECTRIC TRACES*********
                    this._currentTraceType = "Electric";
                    //Get Phases to Trace
                    var phaseToTraceParam = "Any";
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
                    var pointString = point.x.toString() + "," + point.y.toString();
                    if (true) {
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
                var t = this;
                t._traceTimestamp = Date.now();
                var statusId = this._traceTimestamp.toString();
                var addStatusArgs = new geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.AddStatusArgs("Performing Trace");
                addStatusArgs.id = statusId;
                addStatusArgs.showBusyIcon = true;
                addStatusArgs.timeoutMS = 0;
                addStatusArgs.userClosedCallback = function () {
                    request.cancel();
                    if (t._traceTimestamp.toString() === statusId) {
                        t._traceTimestamp = 0;
                        t.XI_ClearTraceResults();
                    }
                };
                this.app.command("AddStatus").execute(addStatusArgs);
                try {
                    request.then(function (response) {
                        _this.app.command("RemoveStatus").execute(statusId);
                        if (_this._traceTimestamp && (_this._traceTimestamp.toString() === statusId)) {
                            if (response.results) {
                                _this._currentTraceResults = null;
                                _this._currentTraceResults = response.results;
                                var featureCount = 0;
                                var truncating = false;
                                if (_this._currentTraceResults.length > 0) {
                                    _this._app.featureSetManager.openCollection(collection.id);
                                    for (var i = 0; i < _this._currentTraceResults.length; i++) {
                                        var traceResult = _this._currentTraceResults[i];
                                        var layerName = traceResult.name;
                                        if (layerName !== undefined) {
                                            var essentialsLayer = _this.getEssentialsLayer(layerName, _this._currentTraceType);
                                            var esriFeatureSet = new esri.tasks.FeatureSet(traceResult);
                                            featureCount += esriFeatureSet.features.length;
                                            if (featureCount < _this._maxFeatureCount) {
                                                //Populate attribute table
                                                if (essentialsLayer) {
                                                    var essentialsFeatureSet = new geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet({
                                                        "esriFeatureSet": esriFeatureSet,
                                                        "layer": essentialsLayer,
                                                        "app": _this.app
                                                    });
                                                    //set the featureset id and display name
                                                    essentialsFeatureSet.id = layerName;
                                                    essentialsFeatureSet.displayName.set("(" + traceResult.features.length + ") " + essentialsLayer.displayName);
                                                    //clear out previous features from the same layer
                                                    var existingSet = collection.getFeatureSetById(essentialsFeatureSet.id);
                                                    if (existingSet) {
                                                        existingSet.append(essentialsFeatureSet);
                                                    }
                                                    else {
                                                        //add featureset to collection
                                                        collection.featureSets.addItem(essentialsFeatureSet);
                                                    }
                                                }
                                            }
                                            else {
                                                console.log("Skipping Table creation for : " + traceResult.name);
                                                truncating = true;
                                            }
                                        }
                                    }
                                    _this._app.featureSetManager.closeCollection(collection.id);
                                    _this.ApplyBufferOptions(false);
                                    if (truncating) {
                                        _this.app.command("Alert").execute("The trace results have been limited to " + _this._maxFeatureCount + " features.", "Limited Trace Results");
                                    }
                                }
                                else {
                                    _this.app.command("Alert").execute("No results were returned for the trace you performed.", "No Trace Results");
                                    //Remove the flag
                                    _this.XI_ClearTraceResults();
                                }
                            }
                        }
                        else {
                            console.log("Trace " + statusId + " response ignored/superseded.");
                        }
                    });
                }
                catch (ex) {
                    this.app.command("RemoveStatus").execute(statusId);
                }
            }
            else {
                console.log("TraceRequest creation failed.  traceUrl : '" + traceUrl + "'; traceType : '" + traceType + "'; currentTraceType : " + this._currentTraceType + ";");
            }
        };
        TraceXI_Module.prototype.initializeServiceConfig = function () {
            var electricService = this.getEssentialsMapServiceByTraceType("Electric");
            //TraceXI_SOE/ElectricTrace
            if (!electricService) {
                console.log("Could not find Electric Service layer.");
            }
            else {
                this._electricTraceUrl = electricService.serviceUrl + "/exts/TraceXI_SOE/ElectricTrace";
            }
        };
        TraceXI_Module.prototype.getEssentialsLayer = function (name, traceType) {
            var mapService = null;
            mapService = this.getEssentialsMapServiceByTraceType(traceType);
            if (mapService != null) {
                var layer = mapService.findLayerByName(name);
                return layer;
            }
            return null;
        };
        TraceXI_Module.prototype.ApplyBufferOptions = function (skipZoom) {
            //this._bufferOptionsXI_Model.GetIs
            if ($("#showBuffer").attr("checked") == "checked") {
                if (this._currentTraceResults && (this._currentTraceResults.length > 0)) {
                    var geometries = new Array();
                    var spatialReference = null;
                    var extent = null;
                    for (var i = 0; i < this._currentTraceResults.length; i++) {
                        var traceResult = this._currentTraceResults[i];
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
                        }
                        catch (ex) {
                            console.log("Warning: There was an error generating an extent for the trace results.");
                            console.log(ex);
                        }
                    }
                }
                else if (!skipZoom) {
                    this.app.command("Alert").execute("Trace results not found. Please perform a trace first.", "Trace Results Not Present");
                }
            }
            else {
                //Hide Buffers    
                this._bufferGraphicsLayer.clear();
            }
        };
        TraceXI_Module.prototype.ShowBuffer = function (traceGeometries) {
            //alert("show buffer");
            var _this = this;
            if (this._bufferGraphicsLayer != null) {
                this._bufferGraphicsLayer.clear();
                this.updateBufferSymbology();
                //TODO - wow, this looks slow
                dojo.forEach(traceGeometries, function (geometry) {
                    _this._bufferGraphicsLayer.add(new esri.Graphic(geometry, (geometry.type == "polyline") ? _this.traceResultLineSymbol : _this.traceResultPointSymbol));
                });
            }
        };
        TraceXI_Module.prototype.getEssentialsMapServiceByTraceType = function (traceType) {
            for (var i = 0; i < this._app.site.essentialsMap.mapServices.length; i++) {
                if (this.mapServiceSupportsTraceType(this._app.site.essentialsMap.mapServices[i], traceType)) {
                    return this._app.site.getResourceById(this._app.site.essentialsMap.mapServices, this._app.site.essentialsMap.mapServices[i].serviceLayer.id);
                }
            }
            return null;
        };
        TraceXI_Module.prototype.mapServiceSupportsTraceType = function (svc, traceTypeToFind) {
            var propNameWeAreLookingFor = "ArcFMTracingCapabilities";
            if (propNameWeAreLookingFor && svc && svc.properties) {
                var propName = propNameWeAreLookingFor.toLowerCase();
                var traceType = traceTypeToFind.toLowerCase();
                for (var prop in svc.properties) {
                    if (prop.toLowerCase() === propName) {
                        if (svc.properties[prop].toLowerCase() === traceType) {
                            return true;
                        }
                        var split = svc.properties[prop].split(",");
                        for (var i = 0; i < split.length; i++) {
                            if (split[i].toLowerCase() === traceType) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        };
        TraceXI_Module.prototype.initGraphicsLayers = function () {
            //Create trace results graphics layers
            this._bufferGraphicsLayer = new esri.layers.GraphicsLayer({ id: this._bufferLayerId });
            this.updateBufferSymbology();
            //Add graphics layers to map
            this._app.map.addLayer(this._bufferGraphicsLayer, 99);
        };
        TraceXI_Module.prototype.updateBufferSymbology = function () {
            var buffColorRGBA = dojo.colorFromHex(this._userPrefs.buffer.color);
            buffColorRGBA.a = this._userPrefs.buffer.opacity / 100; //Opacity is defined between 0 and 1.
            this.traceResultPointSymbol = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, this._userPrefs.buffer.size, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL), buffColorRGBA);
            this.traceResultLineSymbol = new esri.symbol.CartographicLineSymbol(esri.symbol.CartographicLineSymbol.STYLE_SOLID, buffColorRGBA, this._userPrefs.buffer.size, esri.symbol.CartographicLineSymbol.CAP_ROUND, esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3");
        };
        return TraceXI_Module;
    })(geocortex.framework.application.ModuleBase);
    TraceXI.TraceXI_Module = TraceXI_Module;
    var traceRequest = (function () {
        function traceRequest(p) {
            this.handleAs = "json";
            this.timeout = (5 * 60 * 1000); //milliseconds
            if (this && p) {
                dojo.mixin(this, p);
                if (p.content) {
                    this.content = new traceRequestContent(p.content);
                }
            }
        }
        return traceRequest;
    })();
    var traceRequestContent = (function () {
        function traceRequestContent(p) {
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
        return traceRequestContent;
    })();
})(TraceXI || (TraceXI = {}));
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../resources/libs/jquery.d.ts" />
/// <reference path="../../resources/libs/jqueryui.d.ts" />
var TraceXI;
(function (TraceXI) {
    var TraceOptionsXI_View = (function (_super) {
        __extends(TraceOptionsXI_View, _super);
        function TraceOptionsXI_View(app, lib) {
            _super.call(this, app, lib);
            //on_TraceOptionsXI_ViewModel_View_Notify
        }
        //Compiles Dec 22 4:22
        TraceOptionsXI_View.prototype.attach = function (viewModel) {
            var _this = this;
            _super.prototype.attach.call(this, viewModel);
            this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").register(this, this.on_ViewModel_View_Notify);
            console.log("TraceXI attach TraceOptions");
            $("#traceXI_Phase").on('change', function () {
                _this.app.command("XI_UpdatePrefsCookie").execute("PhasesToTrace", $(_this).text());
            });
            $("#xiModelName").on("change paste keyup", function () {
                _this.app.command("XI_UpdatePrefsCookie").execute("modelName", $("#xiModelName").val());
            });
            this.app.event("TracingOptions_ViewModelAttached").publish(viewModel);
        };
        TraceOptionsXI_View.prototype.on_ViewModel_View_Notify = function (poperty, data) {
            switch (poperty) {
                case "InitProperties":
                    //data is userPrefs
                    var userPrefs = data;
                    break;
            }
        };
        return TraceOptionsXI_View;
    })(geocortex.framework.ui.ViewBase);
    TraceXI.TraceOptionsXI_View = TraceOptionsXI_View;
})(TraceXI || (TraceXI = {}));
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
var TraceXI;
(function (TraceXI) {
    var TraceOptionsXI_ViewModel = (function (_super) {
        __extends(TraceOptionsXI_ViewModel, _super);
        function TraceOptionsXI_ViewModel(app, lib) {
            _super.call(this, app, lib);
            this._userPrefs = null;
            this._modelName = new Observable();
            //alert("viewmodel  constructor");
        }
        TraceOptionsXI_ViewModel.prototype.initialize = function (config) {
            console.log("TraceXI initialize traceOptions view model (observables set here and view given userPrefs)");
            //Observables
            /*this.showBuffer.set(userPrefs.buffer.show);
            this.opacityBuffer.set(userPrefs.buffer.opacity);
            this.sizeBuffer.set(userPrefs.buffer.size);
            this.colorBuffer.set(userPrefs.buffer.color);*/
            //Stuff that doesn't support databinding needs to call init on the view
            this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").execute("InitProperties", config);
        };
        TraceOptionsXI_ViewModel.prototype.initTraceOptions = function (userPrefs) {
            console.log("TraceXI init Trace Options");
            this._userPrefs = userPrefs;
            //Observables
            console.log("TraceXI initBufferOptions");
            this._modelName.set(userPrefs.modelName);
            //Stuff that doesn't support databinding needs to call init on the view
            this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").execute("InitProperties", userPrefs);
        };
        return TraceOptionsXI_ViewModel;
    })(geocortex.framework.ui.ViewModelBase);
    TraceXI.TraceOptionsXI_ViewModel = TraceOptionsXI_ViewModel;
})(TraceXI || (TraceXI = {}));
//# sourceMappingURL=TraceXI_ts_out.js.map