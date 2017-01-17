
/* Begin Script: Resources/TSout/TraceXI_ts_out.js ------------------------- */ 
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../resources/libs/jquery.d.ts" />
/// <reference path="../../resources/libs/jqueryui.d.ts" />
/// <reference path="../../resources/libs/jquery.colorpicker.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var eg = esri.geometry;
var et = esri.tasks;
var TraceXI;
(function (TraceXI) {
    var FindFeederView = (function (_super) {
        __extends(FindFeederView, _super);
        function FindFeederView(app, lib) {
            _super.call(this, app, lib);
            this._tieDeviceLayer = null;
            this.states = ['Aa', 'Bb', 'Cc', 'Dd', 'Ee'];
            this._viewModel = null;
        }
        FindFeederView.prototype.PopulateFeederList = function () {
            var _this = this;
            var query = new et.Query();
            query.outFields = ["ID", "CIRCUITNAME"];
            query.where = "1=1";
            query.orderByFields = ["CIRCUITNAME"];
            query.returnDistinctValues = true;
            var url = "http://52.1.143.233/arcgis103/rest/services/Schneiderville/AcmeElectric/MapServer/17";
            var qTasks = new et.QueryTask(url);
            qTasks.execute(query, function (fs) {
                //alert("in complete");
                var cboFindFeederList = $("#cboFindFeederList");
                cboFindFeederList.empty();
                var firstID = fs.features[0].attributes["ID"]; //Used later to trigger a change on the combo box
                _this.states = [];
                for (var i = 0; i < fs.features.length; i++) {
                    var name = fs.features[i].attributes["CIRCUITNAME"];
                    var id = fs.features[i].attributes["ID"];
                    var entry = (name + ":" + id);
                    $('#cboFindFeederList').append($('<option>', {
                        value: i,
                        text: entry
                    }));
                }
                var substringMatcher = function (strs) {
                    return function findMatches(q, cb) {
                        var matches, substringRegex;
                        // an array that will be populated with substring matches
                        matches = [];
                        // regex used to determine if a string contains the substring `q`
                        var substrRegex = new RegExp(q, 'i');
                        // iterate through the pool of strings and for any string that
                        // contains the substring `q`, add it to the `matches` array
                        $.each(strs, function (i, str) {
                            if (substrRegex.test(str)) {
                                matches.push(str);
                            }
                        });
                        cb(matches);
                    };
                };
                /*
                $('#the-basics .typeahead').typeahead({
                    hint: true,
                    highlight: true,
                    minLength: 1
                },
                    {
                        name: 'states',
                        source: substringMatcher(this.states)
                    });
                */
            }, function (err) {
                alert(err.toString());
            });
        };
        FindFeederView.prototype.setTieDeviceData = function () {
            //alert("1");
            var tieDevices = this._viewModel.data.get().feeder.tieDevices[0];
            var tieDevice = $("#cboTieDevices option:selected").index();
            var facID = tieDevices[tieDevice].FACILITYID;
            var feederIDS = tieDevices[tieDevice].FEEDERIDS;
            var streetAddress = tieDevices[tieDevice].STREETADDRESS;
            $('#lblTieDeviceFacilityID').text(facID);
            //$('#lblTieDeviceAddress').text(streetAddress);
            this._viewModel.tieDeviceAddress.set(streetAddress);
            var selectedEID = tieDevices[tieDevice].EID;
            this._viewModel.tieDeviceEID.set(selectedEID);
            //loop through the graphics in the graphics layer and set the selected property = true or false
            if (this._tieDeviceLayer != null) {
                for (var i = 0; i < this._tieDeviceLayer.graphics.length; i++) {
                    var gr = this._tieDeviceLayer.graphics[i];
                    if (gr.attributes["EID"] === selectedEID) {
                        gr.setAttributes({ "SELECTED": "True", "EID": gr.attributes["EID"] });
                    }
                    else {
                        gr.setAttributes({ "SELECTED": "False", "EID": gr.attributes["EID"] });
                    }
                }
                this._tieDeviceLayer.redraw();
            }
            $('#lblTieDeviceFeederIDs').text(feederIDS);
        };
        FindFeederView.prototype.DrawTieDevices = function () {
            if (this._tieDeviceLayer == null) {
                this._tieDeviceLayer = new esri.layers.GraphicsLayer();
                this._tieDeviceLayer.setInfoTemplate;
            }
            this._tieDeviceLayer.clear();
            var tieDevicePointSymbol1 = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 30, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color([255, 255, 0]), 2), new esri.Color([255, 255, 0, 0.9]));
            var tieDevicePointSymbol2 = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 20, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color([0, 255, 255]), 2), new esri.Color([0, 255, 255, 0.5]));
            var uniqueValuerenderer = new esri.renderer.UniqueValueRenderer(tieDevicePointSymbol1, "SELECTED");
            uniqueValuerenderer.addValue("True", tieDevicePointSymbol1);
            uniqueValuerenderer.addValue("False", tieDevicePointSymbol2);
            //var tieDeviceRenderer = new esri.renderer.SimpleRenderer(tieDevicePointSymbol);
            this._tieDeviceLayer.setRenderer(uniqueValuerenderer);
            var tieDevices = this._viewModel.data.get().feeder.tieDevices[0];
            var eidsToHighlight = {};
            for (var i = 0; i < tieDevices.length; i++) {
                eidsToHighlight[tieDevices[i].EID.toString()] = 1;
            }
            var eid = this._viewModel.tieDeviceEID.get();
            var eidToPointGeoms = this._viewModel.data.get().feeder.eidToPointGeometry;
            for (var i = 0; i < eidToPointGeoms.length; i++) {
                var eidInJson = eidToPointGeoms[i][0];
                if (eidInJson.toString() in eidsToHighlight) {
                    var xy = eidToPointGeoms[i][1];
                    var map = this.app.map;
                    var gra = new esri.Graphic(new esri.geometry.Point(xy[0], xy[1], map.spatialReference));
                    gra.setAttributes({ "SELECTED": "False", "EID": eidInJson.toString() });
                    //gra.setAttributes({ "EID": eidInJson.toString() });
                    /*if (i < 1000) {
                        gra.setAttributes({ "SELECTED": "True" });
                    }
                    else {
                        gra.setAttributes({ "SELECTED": "False" });
                    }*/
                    this._tieDeviceLayer.add(gra);
                }
            }
            this.app.map.addLayer(this._tieDeviceLayer);
        };
        FindFeederView.prototype.ClearTieDevices = function () {
            if (this._tieDeviceLayer == null) {
                this._tieDeviceLayer = new esri.layers.GraphicsLayer();
            }
            this._tieDeviceLayer.clear();
        };
        FindFeederView.prototype.attach = function (viewModel) {
            var _this = this;
            this._viewModel = viewModel;
            _super.prototype.attach.call(this, viewModel);
            this.PopulateFeederList();
            viewModel.data.bind(this, function (data) {
                var tds = data.feeder.tieDevices[0];
                $('#cboTieDevices').empty();
                var firstFacID = "";
                for (var tdIndex = 0; tdIndex < tds.length; tdIndex++) {
                    var facID = tds[tdIndex].FACILITYID;
                    if (firstFacID === "") {
                        firstFacID = facID;
                    }
                    $('#cboTieDevices').append($('<option>', {
                        value: facID,
                        text: facID
                    }));
                }
                $("#cboTieDevices").val(firstFacID);
                _this.setTieDeviceData();
                //this.DrawTieDevices();
            });
            $('#btnZoomToTie').on('click', function (e) {
                var scale = 1;
                if (e.shiftKey) {
                    scale = 2;
                }
                if (e.ctrlKey) {
                    scale = .5;
                }
                if (e.altKey) {
                    if (scale === .5) {
                        scale = .25;
                    }
                    else if (scale === 2) {
                        scale = 4;
                    }
                }
                var eid = viewModel.tieDeviceEID.get();
                var eidToPointGeoms = viewModel.data.get().feeder.eidToPointGeometry;
                for (var i = 0; i < eidToPointGeoms.length; i++) {
                    var eidInJson = eidToPointGeoms[i][0];
                    if (eidInJson.toString() == eid) {
                        var xy = eidToPointGeoms[i][1];
                        var map = _this.app.map;
                        var pnt = new esri.geometry.Point(xy[0], xy[1], map.spatialReference);
                        map.setScale(map.getScale() * scale);
                        map.centerAt(pnt);
                        return;
                    }
                }
            });
            $("#cboTieDevices").on('change', function () {
                _this.setTieDeviceData();
                //this.DrawTieDevices();
            });
            $("#btnSelect").on('click', function () {
                _this.app.command("doSelectFeatures").execute();
            });
            $("#btnZoomToFindFeeder").on('click', function () {
                //this.app.command("doZoomToFeeder").execute();
            });
            $("#numBuffer").on('change', function () {
                //this.app.command("doZoomToFeeder").execute();
                //var xmin: number = this.app.map.extent.xmin - .001;
                //var xmax: number = this.app.map.extent.xmax - .001;
                //var ymin: number = this.app.map.extent.ymin - .001;
                //var ymax: number = this.app.map.extent.ymax - .001;
                var ext = _this.app.map.extent;
                _this.app.map.setExtent(ext);
            });
            $("#downstreamColor").on('change', function () {
                //this.app.command("doZoomToFeeder").execute();
                var xmin = _this.app.map.extent.xmin - .001;
                var xmax = _this.app.map.extent.xmax - .001;
                var ymin = _this.app.map.extent.ymin - .001;
                var ymax = _this.app.map.extent.ymax - .001;
                var ext = new eg.Extent(xmin, ymin, xmax, ymax, _this.app.map.spatialReference);
                _this.app.map.setExtent(ext);
            });
            $("#btnGetJson").on('click', function () {
                _this.app.command("doGetJson").execute();
            });
            var map = this.app.map;
            $(".lblShowArrows").on('click', function () {
                $(".lblShowArrows").toggleClass("off");
                $(".showArrows").toggleClass("off");
                $(".showArrowsBox").toggleClass("off");
                if ($(".lblShowArrows").hasClass("off")) {
                    viewModel.showArrows.set(false);
                }
                else {
                    viewModel.showArrows.set(true);
                }
            });
            $("#btnClear").on('click', function () {
                _this.app.command("doClearResults").execute();
            });
            $(".lblAutoZoom").on('click', function () {
                //alert(viewModel.autoZoom.get());
                $(".lblAutoZoom").toggleClass("off");
                $(".showAutoZoom").toggleClass("off");
                $(".showAutoZoomBox").toggleClass("off");
                if ($(".lblAutoZoom").hasClass("off")) {
                    viewModel.autoZoom.set(false);
                }
                else {
                    viewModel.autoZoom.set(true);
                }
            });
            $(".lblTraceUpDown").on('click', function () {
                $(".lblTraceUpDown").toggleClass("off");
                $(".traceUpDown").toggleClass("off");
                $(".traceUpDownBox").toggleClass("off");
                if ($(".lblTraceUpDown").hasClass("off")) {
                    viewModel.showTraceUpDown.set(true);
                }
                else {
                    viewModel.showTraceUpDown.set(false);
                }
            });
            $(".lblZoomToUpstream").on('click', function () {
                $(".lblZoomToUpstream").toggleClass("off");
                $(".zoomToUpstream").toggleClass("off");
                $(".zoomToUpstreamBox").toggleClass("off");
                if ($(".lblZoomToUpstream").hasClass("off")) {
                    viewModel.zoomToUpstream.set(true);
                }
                else {
                    viewModel.zoomToUpstream.set(false);
                }
            });
            $(".lblZoomToDownstream").on('click', function () {
                $(".lblZoomToDownstream").toggleClass("off");
                $(".zoomToDownstream").toggleClass("off");
                $(".zoomToDownstreamBox").toggleClass("off");
                if ($(".lblZoomToDownstream").hasClass("off")) {
                    viewModel.zoomToDownstream.set(true);
                }
                else {
                    viewModel.zoomToDownstream.set(false);
                }
            });
            $(".lblTraceFromCache").on('click', function () {
                $(".lblTraceFromCache").toggleClass("off");
                $(".showTrace").toggleClass("off");
                $(".showTraceBox").toggleClass("off");
                if ($(".lblTraceFromCache").hasClass("off")) {
                    viewModel.traceFromCache.set(false);
                }
                else {
                    viewModel.traceFromCache.set(true);
                }
            });
            var context = this;
            this.app.event("FindFeederViewModelAttached").subscribe(this, function (model) {
                //InitJS(window, $,null);
                //Set up accordion control
                var that = _this;
                jQuery('.accordion-section-title').click(function (e) {
                    // Grab current anchor value
                    var currentAttrValue = jQuery(this).attr('href');
                    if (jQuery(e.target).is('.active')) {
                        jQuery('.accordion .accordion-section-title').removeClass('active');
                        jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
                    }
                    else {
                        if ($("#accSelection select option").length == 0) {
                            var mapService = null;
                            for (var i = 0; i < that.app.site.essentialsMap.mapServices.length; i++) {
                                mapService = that.app.site.essentialsMap.mapServices[i];
                                var layers = mapService.layers;
                                for (var j = 0; j < layers.length; j++) {
                                    $('#accSelection select').append($('<option>', {
                                        value: mapService.id + ":" + j,
                                        text: layers[j].name
                                    }));
                                }
                            }
                        }
                        jQuery('.accordion .accordion-section-title').removeClass('active');
                        jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
                        // Add active class to section title
                        jQuery(this).addClass('active');
                        // Open up the hidden content panel
                        jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
                        if (currentAttrValue.toUpperCase().indexOf("TIEDEVICE") > -1) {
                            that.DrawTieDevices();
                            that.setTieDeviceData();
                        }
                        else {
                            that.ClearTieDevices();
                        }
                    }
                    e.preventDefault();
                });
                var substringMatcher = function (strs) {
                    return function findMatches(q, cb) {
                        var matches, substringRegex;
                        // an array that will be populated with substring matches
                        matches = [];
                        // regex used to determine if a string contains the substring `q`
                        var substrRegex = new RegExp(q, 'i');
                        // iterate through the pool of strings and for any string that
                        // contains the substring `q`, add it to the `matches` array
                        $.each(strs, function (i, str) {
                            if (substrRegex.test(str)) {
                                matches.push(str);
                            }
                        });
                        cb(matches);
                    };
                };
                //var states = ['A', 'B', 'C', 'D', 'E'];
                /*
                $('#the-basics .typeahead').typeahead({
                    hint: true,
                    highlight: true,
                    minLength: 1
                },
                {
                    name: 'states',
                    source: substringMatcher(context.states)
                });
                */
            });
            this.app.event("FindFeederViewModelAttached").publish(viewModel);
        };
        return FindFeederView;
    })(geocortex.framework.ui.ViewBase);
    TraceXI.FindFeederView = FindFeederView;
})(TraceXI || (TraceXI = {}));
function AttachTypeAhead() {
}
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
var TraceXI;
(function (TraceXI) {
    var FindFeederViewModel = (function (_super) {
        __extends(FindFeederViewModel, _super);
        function FindFeederViewModel(app, lib) {
            _super.call(this, app, lib);
            this.numRadius = new Observable();
            this.tieDevices = new Observable();
            this.tieDeviceEID = new Observable();
            this.tieDeviceAddress = new Observable();
            this.showArrows = new Observable();
            this.downstreamColor = new Observable();
            this.feederColor = new Observable();
            this.upstreamColor = new Observable();
            this.showTraceUpDown = new Observable();
            this.zoomToUpstream = new Observable();
            this.zoomToDownstream = new Observable();
            this.autoZoom = new Observable();
            this.traceFromCache = new Observable();
            this.zoomToSource = new Observable();
            this.urlToLayerWeWantToSelect = new Observable();
            this.selectedFeeder = new Observable();
            this.ffLoadA = new Observable();
            this.ffLoadB = new Observable();
            this.ffLoadC = new Observable();
            this.ffLoadTotal = new Observable();
            this.ffCustomersA = new Observable();
            this.ffCustomersB = new Observable();
            this.ffCustomersC = new Observable();
            this.ffCustomersTotal = new Observable();
            this.numBuffer = new Observable();
            this.ffConductorTotal = new Observable();
            this.numBufferSize = new Observable();
            this.ffPriUG = new Observable();
            this.ffSecUG = new Observable();
            this.ffPriOH = new Observable();
            this.ffSecOH = new Observable();
            this.ffUGTotal = new Observable();
            this.ffOHTotal = new Observable();
            this.data = new Observable();
            this.ffPriTotal = new Observable();
            this.ffSecTotal = new Observable();
            this.ffFlowDirectionTraceMode = new Observable();
        }
        FindFeederViewModel.prototype.initialize = function (config) {
            this.autoZoom.set(true);
            this.feederColor.set("#FF0000");
            this.upstreamColor.set("#00FF00");
            this.downstreamColor.set("#0000FF");
            this.numBufferSize.set(25);
        };
        return FindFeederViewModel;
    })(geocortex.framework.ui.ViewModelBase);
    TraceXI.FindFeederViewModel = FindFeederViewModel;
})(TraceXI || (TraceXI = {}));
/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
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
                _this.app.command("XI_UpdatePrefsCookie").execute("bufferShow", ($("#XI_showBuffer").attr('checked') === 'checked'));
            });
            $("#XI_bufferSize")
                .on('change', function () {
                viewModel.sizeBuffer.set($('#XI_bufferSize').val());
                _this.app.command("XI_UpdatePrefsCookie").execute("bufferSize", $('#XI_bufferSize').val());
            })
                .on('input', function () {
                _this.app.command("XI_UpdatePrefsCookie").execute("bufferSize", $('#XI_bufferSize').val());
            });
            $("#XI_bufferOpacity").on('change', function () {
                viewModel.opacityBuffer.set($('#XI_bufferOpacity').val());
                _this.app.command("XI_UpdatePrefsCookie").execute("bufferOpacity", $('#XI_bufferOpacity').val());
            })
                .on('input', function () {
                _this.app.command("XI_UpdatePrefsCookie").execute("bufferOpacity", $('#XI_bufferOpacity').val());
            });
            $("#XI_bufferColor")
                .spectrum({
                preferredFormat: "hex"
            })
                .on('change.spectrum', function () {
                _this.app.command("XI_UpdatePrefsCookie").execute("bufferColor", $('#XI_bufferColor').spectrum("get").toHexString());
            })
                .on('hide.spectrum', function () {
                _this.app.command("XI_UpdatePrefsCookie").execute("bufferColor", $('#XI_bufferColor').spectrum("get").toHexString());
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
                    $("#XI_bufferColor").spectrum("set", userPrefs.bufferColor);
                    $("#XI_bufferOpacity").val(userPrefs.bufferOpacity);
                    $('#XI_bufferSize').val(userPrefs.bufferSize);
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
            /*this.app.command("XI_showBuffer_Changed").register(this, this.executeshowBuffer_Changed);
            this.app.command("XI_bufferSize_Changed").register(this, this.XI_bufferSize_Changed);
            this.app.command("XI_bufferColor_Changed").register(this, this.executebufferColor_Changed);
            this.app.command("XI_bufferOpacity_Changed").register(this, this.executebufferOpacity_Changed);*/
            //alert("2");
        };
        BufferOptionsXI_ViewModel.prototype.initBufferOptions = function (userPrefs) {
            this._userPrefs = userPrefs;
            //Observables
            console.log("TraceXI initBufferOptions");
            this.showBuffer.set(userPrefs.bufferShow);
            this.opacityBuffer.set(userPrefs.bufferOpacity);
            this.sizeBuffer.set(userPrefs.bufferSize);
            this.colorBuffer.set(userPrefs.bufferColor);
            //Stuff that doesn't support databinding needs to call init on the view
            this.app.command("on_BufferOptionsXI_ViewModel_View_Notify").execute("InitProperties", userPrefs);
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
    var eg = esri.geometry;
    var TraceXI_Module = (function (_super) {
        __extends(TraceXI_Module, _super);
        function TraceXI_Module(app, lib) {
            var _this = this;
            //alert("module constructor");
            _super.call(this, app, lib);
            this._prefsCookieName = "TracingXI.Prefs";
            this._mapClickHandler = null;
            this._cacheMode = false;
            this._currentTraceType = null;
            this._electricTraceUrl = null;
            this._userPrefs = null;
            this._bufferLayerId = "traceXIBufferLayer";
            this.traceResultPointSymbol = null;
            this.traceResultLineSymbol = null;
            this._traceExtent = null;
            this._currentTraceResults = null;
            this._traceTimestamp = 0;
            //initialBufferSettings: any = null;
            this._maxFeatureCount = 7500;
            this.traceFlagPath = null; //doesn't follow naming convention because this is set in the configuration .json file
            this._bufferGraphicsLayer = null;
            this._traceCollection = null;
            this._zoomExtent = null;
            //Cachec tracing stuff
            this._tieDevices = [];
            this._size = 15;
            this._data = null;
            this._feederExtent = null;
            this._upstreamEIDS = null;
            this._downstreamEIDS = null;
            this.downstreamLayer = null;
            this.upstreamstreamLayer = null;
            this.feederLayer = null;
            this._feederGraphic = null;
            this._upstreamGraphic = null;
            this._downstreamGraphic = null;
            this._findFeederViewModel = null;
            this._app = app;
            this.app.command("XI_UpdatePrefsCookie").register(this, this.XI_UpdatePrefsCookie);
            this.app.command("XI_ZoomToResults").register(this, function () {
                console.log("about to zoom");
                _this._app.map.setExtent(_this._zoomExtent);
                console.log("done with zoom");
            });
            this.app.command("XI_PopulateAttributes").register(this, function () {
                console.log("about to add to trace results");
                _this.addToTraceResults(_this._traceCollection);
                console.log("done adding trace results");
            });
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
            //Cache Stuff
            //this.app.command("doShowArrows").register(this, this.showArrows);
            //this.app.command("doClearResults").register(this, this.clearResults);
            this.app.command("doZoomToFeeder").register(this, this.zoomToFeederClick);
            this.app.command("doGetJson").register(this, this.getJson);
            this.app.event("FindFeederViewModelAttached").subscribe(this, function (model) {
                //this.app.map.on("extent-change", (evt) => { this.FindFeedermapExtentChangeHandler(this, evt); });
                //this.app.map.on("click", (evt) => { this.FindFeederMapClickHandler(this, evt); });
                //alert("from the module");
                _this._findFeederViewModel = model;
                var graphicLayers = _this.app.map.graphicsLayerIds;
                for (var i = 0; i < graphicLayers.length; i++) {
                    console.log(graphicLayers[i]);
                }
                //this.viewModel.notifyView(this.app);
            });
        };
        TraceXI_Module.prototype.XI_UpdatePrefsCookie = function (propName, propValue) {
            var _this = this;
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
                        this._mapClickHandler = this.app.map.on("click", function (evt) { _this.FindFeederMapClickHandler(_this, evt); });
                    }
                    else {
                        if (this._mapClickHandler !== null) {
                            this._mapClickHandler.remove();
                        }
                    }
                }
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
            this.app.command("XI_UpdatePrefsCookie").execute("CacheMode", "False");
            $("#btnZoomTo").prop("disabled", true);
            $("#btnPopulateAttributes").prop("disabled", true);
            if (this._bufferGraphicsLayer.graphics.length > 0) {
                this._bufferGraphicsLayer.clear();
            }
            this._app.map.graphics.clear();
            this._traceCollection = null;
            this._traceExtent = null;
            var resultsToClear = this._app.featureSetManager.getCollectionById("TraceResults");
            if (resultsToClear) {
                resultsToClear.clear();
            }
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
            catch (x) { }
        };
        TraceXI_Module.prototype.XI_DownstreamTrace = function (geometry) {
            //alert("xi trace downstream");
            var electricService = this.getEssentialsMapServiceByTraceType("Electric");
            this.XI_executeTrace(geometry, "Downstream", this._electricTraceUrl);
        };
        TraceXI_Module.prototype.XI_executeTrace = function (geometry, traceType, traceUrl) {
            var _this = this;
            $("#btnZoomTo").prop("disabled", true);
            $("#btnPopulateAttributes").prop("disabled", true);
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
            this._traceCollection = collection;
            this._app.command("ClearActiveTool").execute();
            var spatialReference = JSON.stringify(this._app.map.spatialReference);
            var request = null;
            this._currentTraceType = null;
            switch (traceUrl) {
                case this._electricTraceUrl:
                    //*********ELECTRIC TRACES*********
                    this._currentTraceType = "Electric";
                    //Get Phases to Trace
                    var phasesToTraceParam = "Any";
                    //If any phase is NOT selected...
                    /*if ($('#traceA').attr("checked") != "checked" || $('#traceB').attr("checked") != "checked" || $('#traceC').attr("checked") != "checked") {
                        phaseToTraceParam = "AtLeast";
                        if ($('#traceA').attr('checked') == "checked") { phaseToTraceParam += "A"; }
                        if ($('#traceB').attr('checked') == "checked") { phaseToTraceParam += "B"; }
                        if ($('#traceC').attr('checked') == "checked") { phaseToTraceParam += "C"; }
                    }*/
                    phasesToTraceParam = this._userPrefs["phasesToTrace"]; //TODO, read the actual property from the options view
                    var fields = this._userPrefs["fields"];
                    //TODO check to see if we really want to trace (as opposed to 
                    //let hardCode : string = "http://localhost:6080/arcgis/rest/services/TraceXI/MapServer/exts/TraceXI_SOE/ElectricTrace?startPoint=-9171282.9%2C3465550.4&traceType=Downstream&protectiveDevices=&phasesToTrace=ABC&drawComplexEdges=True&includeEdges=True&includeJunctions=True&extraInfo=&geometriesToRetrieve=*&tolerance=30&spatialReference=&currentStatusProgID=&fieldsToRetrieve=*&useModelNames=&runInParallel=&returnByClass=&unionOnServer=&geometryPrecision=2&traceResultsID=&f=pjson";
                    var pointString = point.x.toString() + "," + point.y.toString();
                    if (true) {
                        request = esri.request(new traceRequest({
                            url: traceUrl,
                            content: {
                                startPoint: pointString,
                                traceType: traceType,
                                phasesToTrace: phasesToTraceParam,
                                spatialReference: spatialReference,
                                fieldsToRetrieve: fields
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
                        //alert("response back");
                        _this._currentTraceResults = response.results;
                        if (_this._traceTimestamp && (_this._traceTimestamp.toString() === statusId)) {
                            if (response.results) {
                                _this._currentTraceResults = response.results;
                                _this.ApplyBufferOptions(false);
                                var spatialRef = _this._app.map.spatialReference;
                                _this._zoomExtent = new esri.geometry.Extent(response.traceExtent.xmin, response.traceExtent.ymin, response.traceExtent.xmax, response.traceExtent.ymax, spatialRef);
                                var myMap = _this._app.map;
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
        TraceXI_Module.prototype.handleResultsDeferred = function (jsonString) {
            console.log("writing results to trace results - the incoming string is " + jsonString);
            return new dojo.Deferred();
        };
        TraceXI_Module.prototype.hexToRgb = function (hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        };
        TraceXI_Module.prototype.FindFeedermapExtentChangeHandler = function (context, evt) {
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
        };
        TraceXI_Module.prototype.FindFeederMapClickHandler = function (context, evt) {
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
                var eidToLineGeometry = this._data.feeder.eidToLineGeometry;
                var mapPoint = evt.mapPoint;
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
                    currentEID = eidToUpstreamAssocArray[currentEID];
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
        };
        TraceXI_Module.prototype.drawUpstreamDownstreamLine = function (refresh) {
            var upstreamEids = this._upstreamEIDS;
            var downstreamEids = this._downstreamEIDS;
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
                var lineSymbolUp = new esri.symbol.CartographicLineSymbol(esri.symbol.CartographicLineSymbol.STYLE_SOLID, new esri.Color([0, 255, 0, .5]), this._size, esri.symbol.CartographicLineSymbol.CAP_ROUND, esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3");
                var lineSymbolDown = new esri.symbol.CartographicLineSymbol(esri.symbol.CartographicLineSymbol.STYLE_SOLID, new esri.Color([0, 0, 255, .5]), this._size, esri.symbol.CartographicLineSymbol.CAP_ROUND, esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3");
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
            var lineSymbolUp = new esri.symbol.CartographicLineSymbol(esri.symbol.CartographicLineSymbol.STYLE_SOLID, new esri.Color([0, 255, 0, .5]), this._size, esri.symbol.CartographicLineSymbol.CAP_ROUND, esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3");
            var lineSymbolDown = new esri.symbol.CartographicLineSymbol(esri.symbol.CartographicLineSymbol.STYLE_SOLID, new esri.Color([0, 0, 255, .5]), this._size, esri.symbol.CartographicLineSymbol.CAP_ROUND, esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3");
            //var rgbUp: any = this.hexToRgb(this.viewModel.upstreamColor.get());
            //var red: number = rgbUp.r;
            //var green: number = rgbUp.g;
            //var blue: number = rgbUp.b;
            lineSymbolUp.setColor(new esri.Color([0, 255, 0, 0.5]));
            //var rgbDown: any = this.hexToRgb(this.viewModel.downstreamColor.get());
            //red = rgbDown.r;
            //green = rgbDown.g;
            //blue = rgbDown.b;
            lineSymbolDown.setColor(new esri.Color([0, 0, 255, 0.5]));
            if (this._upstreamGraphic !== null) {
                this._upstreamGraphic.setSymbol(lineSymbolUp);
            }
            if (this._downstreamGraphic !== null) {
                this._downstreamGraphic.setSymbol(lineSymbolDown);
            }
        };
        TraceXI_Module.prototype.getJson = function () {
            var selectedFeederID = $("#cboFindFeederList :selected").text().split(":")[1];
            this._findFeederViewModel.selectedFeeder.set("Looking for Feeder " + $("#cboFindFeederList :selected").text());
            $("#imgSpinner").css("display", "inline");
            //setTimeout(this.getJson2, 1000, this, selectedFeederID);
            this.getJson2(this, selectedFeederID);
        };
        TraceXI_Module.prototype.getJson2 = function (context, selectedFeeder) {
            //var context = this;
            var map = context.app.map;
            var vm = this._findFeederViewModel;
            //var context: FindFeederModule = this;
            var urlToJson = "Resources/CachedFeeders/" + selectedFeeder + ".json";
            $.ajax({
                url: urlToJson
            }).then(function (data) {
                try {
                    vm.data.set(data);
                    context.app.command("XI_UpdatePrefsCookie").execute("CacheMode", "True");
                    var feederExtent = new eg.Extent(data.feeder.extent);
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
        };
        TraceXI_Module.prototype.zoomToFeederClick = function () {
            this.zoomToFeeder(true);
        };
        TraceXI_Module.prototype.zoomToFeeder = function (forceZoom) {
            if (this._findFeederViewModel.autoZoom.get() || forceZoom) {
                if (this._feederExtent != null) {
                    this.app.map.setExtent(this._feederExtent);
                }
                else if (forceZoom) {
                    alert("Unable to zoom to the feeder.");
                }
            }
        };
        TraceXI_Module.prototype.drawFeederGraphics = function () {
            //this._data = data;
            var data = this._data;
            if (data === undefined) {
                return;
            }
            if ($.inArray("feederLayer", this.app.map.graphicsLayerIds) === -1) {
                var fl = new esri.layers.GraphicsLayer();
                fl.id = "feederLayer";
                var dn = new esri.layers.GraphicsLayer();
                dn.id = "downstreamLayer";
                var us = new esri.layers.GraphicsLayer();
                us.id = "upstreamLayer";
                this.app.map.addLayers([fl, dn, us]);
                this.feederLayer = fl;
                this.upstreamstreamLayer = us;
                this.downstreamLayer = dn;
            }
            //this.feederLayer.clear();
            //this.app.map.graphics.clear();
            var lineSymbol = new esri.symbol.CartographicLineSymbol(esri.symbol.CartographicLineSymbol.STYLE_SOLID, new esri.Color([255, 255, 0, .5]), this._size, esri.symbol.CartographicLineSymbol.CAP_ROUND, esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3");
            var rgb = this.hexToRgb(this._findFeederViewModel.feederColor.get());
            var red = rgb.r;
            var green = rgb.g;
            var blue = rgb.b;
            lineSymbol.setColor(new esri.Color([red, green, blue, 0.5]));
            var eidToLineGeometry = data.feeder.eidToLineGeometry;
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
        };
        TraceXI_Module.prototype.addToTraceResults = function (collection) {
            console.log("In Add to Trace results");
            var featureCount = 0;
            var truncating = false;
            var populateStart = new Date();
            if (this._currentTraceResults.length > 0) {
                this._app.featureSetManager.openCollection(collection.id);
                for (var i = 0; i < this._currentTraceResults.length; i++) {
                    var traceResult = this._currentTraceResults[i];
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
                var populateEnd = new Date();
                var populatetime = populateEnd.getTime() - populateStart.getTime();
                //alert("Population time in milliseconds " + populatetime.toString());
                this._app.featureSetManager.closeCollection(collection.id);
                //this.ApplyBufferOptions(false);
                console.log("TraceXI: the time after setting attributes is " + (new Date).getTime().toString());
                if (truncating) {
                    this.app.command("Alert").execute("The trace results have been limited to " + this._maxFeatureCount + " features.", "Limited Trace Results");
                }
            }
            else {
                this.app.command("Alert").execute("No results were returned for the trace you performed.", "No Trace Results");
                //Remove the flag
                this.XI_ClearTraceResults();
            }
            //return new dojo.Deferred();
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
            var combinePaths = true;
            var combinedPathsDown = [];
            /*for (var i = 0; i < downstreamEids.length; i++) {
                var eid = downstreamEids[i];
                var singlePath = eidLineGeomAssocArray[eid];
                combinedPathsDown.push(singlePath[0]);
            }*/
            var extent = new esri.geometry.Extent({});
            if ($("#XI_showBuffer").attr("checked") == "checked") {
                if (this._currentTraceResults && (this._currentTraceResults.length > 0)) {
                    var geometries = new Array();
                    var spatialReference = null;
                    var sr = this._app.map.spatialReference;
                    for (var i = 0; i < this._currentTraceResults.length; i++) {
                        var traceResult = this._currentTraceResults[i];
                        if (traceResult.features !== undefined) {
                            for (var j = 0; j < traceResult.features.length; j++) {
                                //console.log("J = " + j.toString());
                                if (traceResult.geometryType !== "esriGeometryPoint") {
                                    if (combinePaths == false) {
                                        var geom = new esri.geometry.Polyline(traceResult.features[j].geometry);
                                        geom.spatialReference = sr;
                                        geometries.push(geom);
                                    }
                                    else {
                                        var path = traceResult.features[j].geometry.paths[0];
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
                        }
                        catch (ex) {
                            console.log("Warning: There was an error generating an extent for the trace results.");
                            console.log(ex);
                            return null;
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
            //return extent;
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
            this._app.map.addLayer(this._bufferGraphicsLayer, 101);
        };
        TraceXI_Module.prototype.updateBufferSymbology = function () {
            var buffColorRGBA = dojo.colorFromHex(this._userPrefs.bufferColor);
            buffColorRGBA.a = this._userPrefs.bufferOpacity / 100; //Opacity is defined between 0 and 1.
            this.traceResultPointSymbol = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, this._userPrefs.bufferSize, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL), buffColorRGBA);
            this.traceResultLineSymbol = new esri.symbol.CartographicLineSymbol(esri.symbol.CartographicLineSymbol.STYLE_SOLID, buffColorRGBA, this._userPrefs.bufferSize, esri.symbol.CartographicLineSymbol.CAP_ROUND, esri.symbol.CartographicLineSymbol.JOIN_ROUND, "3");
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
            this.fieldsToRetrieve = "Transformer.FacilityID,Transformer.RatedKVA,Transformer.PhaseDesignation,Transformer.OperatingVoltage,Transformer.StreetAddress," +
                "Fuse.CustomerCount,Fuse.StreetAdress,Fuse.FacilityID,Fuse.OperatingVoltage,Fuse.Subtype," +
                "ServicePoint.ConsumptionType, ServicePoint.StreetAddress, ServicePoint.FacilityID,ServicePoint.GPSX,ServicePoint.GPSY," +
                "Switch.FacilityID,Switch.OperatingVoltage,Switch.StreetAddress,Switch.LastUser,Switch.Subtype," +
                "PriOHElectricLineSegment.NetworkLevel,PriOHElectricLineSegment.ConductorConfiguration,PriOHElectricLineSegment.MeasuredLength,PriOHElectricLineSegment.PhaseDesignation,PriOHElectricLineSegment.NeutralSize," +
                "PriUGElectricLineSegment.NetworkLevel,PriUGElectricLineSegment.NeutralMaterial,PriUGElectricLineSegment.MeasuredLength,PriUGElectricLineSegment.PhaseDesignation,PriUGElectricLineSegment.NeutralSize," +
                "SecOHElectricLineSegment.Subtype, SecOHElectricLineSegment.PhaseDesignation, SecOHElectricLineSegment.LengthSource,SecOHElectricLineSegment.FacilityID,SecOHElectricLineSegment.MeasuredLength,SecOHElectricLineSegment.Subtype,SecOHElectricLineSegment.PhaseDesignation,SecOHElectricLineSegment.FacilityID" +
                "SecUGElectricLineSegment.Subtype,SecUGElectricLineSegment.PhaseDesignation,SecUGElectricLineSegment.LengthSource,SecUGElectricLineSegment.FacilityID,SecUGElectricLineSegment.MeasuredLength";
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
        TraceOptionsXI_View.prototype.attach = function (viewModel) {
            var _this = this;
            _super.prototype.attach.call(this, viewModel);
            this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").register(this, this.on_ViewModel_View_Notify);
            console.log("TraceXI attach TraceOptions");
            $("#traceXI_Phase").on('change', function () {
                var selectedText = $("#traceXI_Phase :selected").text();
                var phase = selectedText.substring(0, selectedText.indexOf(" "));
                _this.app.command("XI_UpdatePrefsCookie").execute("phasesToTrace", phase);
            });
            $("#btnZoomTo").on('click', function () {
                _this.app.command("XI_ZoomToResults").execute();
            });
            $("#btnPopulateAttributes").on('click', function () {
                _this.app.command("XI_PopulateAttributes").execute();
            });
            $("input:checkbox").on('change', function (e) {
                var x = $(e.currentTarget)[0].id;
                //alert(x);
            });
            $("#cboXIPresets").on('change', function () {
                var selectedOption = $('#cboXIPresets option:selected').text();
                _this.app.command("XI_UpdatePrefsCookie").execute("Presets", selectedOption);
                var fieldsToRetrieve = "*";
                switch (selectedOption) {
                    case "All Fields":
                        break;
                    case "8 Layers 44 Fields":
                        fieldsToRetrieve = "Transformer.FacilityID,Transformer.RatedKVA,Transformer.PhaseDesignation,Transformer.OperatingVoltage,Transformer.StreetAddress," +
                            "Fuse.CustomerCount,Fuse.StreetAdress,Fuse.FacilityID,Fuse.OperatingVoltage,Fuse.Subtype,Fuse.PhaseDesignation," +
                            "ServicePoint.ConsumptionType, ServicePoint.StreetAddress, ServicePoint.FacilityID,ServicePoint.GPSX,ServicePoint.GPSY,ServicePoint.PhaseDesignation," +
                            "Switch.FacilityID,Switch.OperatingVoltage,Switch.StreetAddress,Switch.LastUser,Switch.Subtype,Switch.PhaseDesignation," +
                            "PriOHElectricLineSegment.NetworkLevel,PriOHElectricLineSegment.ConductorConfiguration,PriOHElectricLineSegment.MeasuredLength,PriOHElectricLineSegment.PhaseDesignation,PriOHElectricLineSegment.NeutralSize," +
                            "PriUGElectricLineSegment.NetworkLevel,PriUGElectricLineSegment.NeutralMaterial,PriUGElectricLineSegment.MeasuredLength,PriUGElectricLineSegment.PhaseDesignation,PriUGElectricLineSegment.NeutralSize," +
                            "SecOHElectricLineSegment.Subtype, SecOHElectricLineSegment.PhaseDesignation, SecOHElectricLineSegment.LengthSource,SecOHElectricLineSegment.FacilityID,SecOHElectricLineSegment.MeasuredLength,SecOHElectricLineSegment.Subtype,SecOHElectricLineSegment.PhaseDesignation,SecOHElectricLineSegment.FacilityID," +
                            "SecUGElectricLineSegment.Subtype,SecUGElectricLineSegment.PhaseDesignation,SecUGElectricLineSegment.LengthSource,SecUGElectricLineSegment.FacilityID,SecUGElectricLineSegment.MeasuredLength";
                        break;
                }
                $("#xiFields").val(fieldsToRetrieve);
                _this.app.command("XI_UpdatePrefsCookie").execute("fields", $("#xiFields").val());
            });
            $("#xiModelName").on("change paste keyup", function () {
                _this.app.command("XI_UpdatePrefsCookie").execute("modelName", $("#xiModelName").val());
            });
            $("#xiFields").on("change paste keyup", function () {
                _this.app.command("XI_UpdatePrefsCookie").execute("fields", $("#xiFields").val());
            });
            this.app.event("TracingOptions_ViewModelAttached").publish(viewModel);
        };
        TraceOptionsXI_View.prototype.on_ViewModel_View_Notify = function (poperty, data) {
            switch (poperty) {
                case "InitProperties":
                    //data is userPrefs
                    var userPrefs = data;
                    $('#xi_AutoZoom').prop('checked', userPrefs.autoZoom);
                    $('#xi_AutoPopulate').prop('checked', userPrefs.autoPopulate);
                    //disable buttons
                    $("#btnZoomTo").prop("disabled", true);
                    $("#btnPopulateAttributes").prop("disabled", true);
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
            this._fields = new Observable();
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
            this._modelName.set(userPrefs.modelName);
            this._fields.set(userPrefs.fields);
            //Stuff that doesn't support databinding needs to call init on the view
            this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").execute("InitProperties", userPrefs);
        };
        return TraceOptionsXI_ViewModel;
    })(geocortex.framework.ui.ViewModelBase);
    TraceXI.TraceOptionsXI_ViewModel = TraceOptionsXI_ViewModel;
})(TraceXI || (TraceXI = {}));
//# sourceMappingURL=TraceXI_ts_out.js.map

/* End Script: Resources/TSout/TraceXI_ts_out.js ------------------------- */ 

geocortex.resourceManager.register("TraceXI","inv","Modules/TraceXI/BufferOptionsXI.html","html","PGRpdiBjbGFzcz0iIiBpZD0idHJhY2VYSS1idWZmZXItc2V0dGluZ3MiPg0KICAgIDxkaXYgY2xhc3M9InNlLXRhYmxlIj4NCiAgICAgICAgPGRpdiBjbGFzcz0ic2Utcm93Ij4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlLWxhYmVsIj5TaG93IEJ1ZmZlcjo8L2Rpdj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlLWRldGFpbCI+PGlucHV0IHR5cGU9ImNoZWNrYm94IiBjaGVja2VkPSJjaGVja2VkIiBpZD0iWElfc2hvd0J1ZmZlciIgLz48L2Rpdj4NCiAgICAgICAgPC9kaXY+PGJyIC8+DQogICAgICAgIDxkaXYgY2xhc3M9InNlLXJvdyI+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJzZS1sYWJlbCI+U2l6ZTo8L2Rpdj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlLWRldGFpbCI+DQogICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPSJ3aWR0aDoxMDBweDtkaXNwbGF5OmlubGluZS1ibG9jazsiIGlkPSJYSV9idWZmZXJTaXplIiB0eXBlPSJyYW5nZSIgbWluPSIxIiBtYXg9IjUwIiBzdGVwcz0iMSIgLz4NCiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJ3aWR0aDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrOyIgZGF0YS1iaW5kaW5nPSJ7QHRleHQ6IHNpemVCdWZmZXJ9Ij48L2Rpdj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICA8L2Rpdj48YnIgLz4NCiAgICAgICAgPGRpdiBjbGFzcz0ic2Utcm93Ij4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlLWxhYmVsIj5PcGFjaXR5OjwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2UtZGV0YWlsIj4NCiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9IndpZHRoOjEwMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrOyIgaWQ9IlhJX2J1ZmZlck9wYWNpdHkiIHR5cGU9InJhbmdlIiBtaW49IjAiIG1heD0iMTAwIiBzdGVwcz0iMSIgLz4NCiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJ3aWR0aDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrOyIgZGF0YS1iaW5kaW5nPSJ7QHRleHQ6IG9wYWNpdHlCdWZmZXJ9Ij48L2Rpdj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICA8L2Rpdj48YnIgLz4NCiAgICAgICAgPGRpdiBjbGFzcz0ic2Utcm93Ij4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlLWxhYmVsIj5Db2xvcjo8L2Rpdj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlLWRldGFpbCI+PGlucHV0IGlkPSJYSV9idWZmZXJDb2xvciIgZGF0YS1iaW5kaW5nPSJ7QHZhbHVlOiBjb2xvckJ1ZmZmZXJ9IiAvPjwvZGl2Pg0KICAgICAgICA8L2Rpdj4NCg0KICAgIDwvZGl2Pg0KPC9kaXY+DQo=");
geocortex.resourceManager.register("TraceXI","inv","Modules/TraceXI/FindFeederView.html","html","PGRpdiBjbGFzcz0iRmluZEZlZWRlci1tb2R1bGUtdmlldyI+DQogICAgPGRpdiBjbGFzcz0ieGhlbGxvT2Zmc2V0Ij4NCiAgICAgICAgPGJyIC8+DQogICAgICAgIDxsYWJlbCBjbGFzcz0ibGFiZWxUZXh0IiBpZD0ieGxibFNlY3Rpb25IYW5kbGVyIj5TZWxlY3QgYSBGZWVkZXI8L2xhYmVsPjxiciAvPjxiciAvPg0KICAgICAgICA8ZGl2IG5hbWU9InRoZS1iYXNpY3MiPg0KICAgICAgICAgICAgDQogICAgICAgICAgICA8c2VsZWN0IGlkPSJjYm9GaW5kRmVlZGVyTGlzdCIgc3R5bGU9IndpZHRoOjcwJSIgdHlwZT0ic2VsZWN0IiA+PC9zZWxlY3Q+DQogICAgICAgICAgICA8aW1nIGNsYXNzPSJhbGxpZ25lZEltYWdlIiBzcmM9IlJlc291cmNlcy9JbWFnZXMvRmluZEZlZWRlci9BcnJvdy1SaWdodC0yNC5wbmciIGlkPSJidG5HZXRKc29uIiAvPg0KICAgICAgICA8L2Rpdj4NCiAgICAgICAgDQogICAgICAgIDxkaXY+DQoNCiAgICAgICAgICAgIDxiciAvPg0KICAgICAgICAgICAgPGRpdj4NCiAgICAgICAgICAgICAgICA8c3Bhbj4NCiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz0iYWxsaWduZWRJbWFnZSIgc3JjPSJSZXNvdXJjZXMvSW1hZ2VzL0ZpbmRGZWVkZXIvZ3JlZW5fcm90LmdpZiIgc3R5bGU9ImRpc3BsYXk6bm9uZTttYXJnaW4tcmlnaHQ6NXB4OyIgaWQ9ImltZ1NwaW5uZXIiIC8+DQogICAgICAgICAgICAgICAgICAgIDxsYWJlbCBpZD0iZmluZEZlZWRlclNlbGVjdGVkRmVlZGVyIiBkYXRhLWJpbmRpbmc9IntAdGV4dDogc2VsZWN0ZWRGZWVkZXJ9Ij48L2xhYmVsPg0KICAgICAgICAgICAgICAgIDwvc3Bhbj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGJyIC8+DQogICAgICAgIDwvZGl2Pg0KICAgICAgICA8ZGl2IGlkPSJ4YWNjb3JkaW9uQ29udHJvbCIgY2xhc3M9ImFjY29yZGlvbiI+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIgYWNjb3JkaW9uLXNlY3Rpb24iPg0KICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ic2VjdGlvbkhlYWRlciBhY2NvcmRpb24tc2VjdGlvbi10aXRsZSIgaHJlZj0iI2FjY0xvY2F0aW9uIiBpZD0ibGJsU2VjdGlvbkhhbmRsZXIiPlZJRVcgPC9sYWJlbD4NCiAgICAgICAgICAgICAgICA8ZGl2IGlkPSJhY2NMb2NhdGlvbiIgY2xhc3M9ImFjY29yZGlvbi1zZWN0aW9uLWNvbnRlbnQiPg0KICAgICAgICAgICAgICAgICAgICA8ZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJsYWJlbFRleHQiPkZlZWRlciBDb2xvcjogPC9sYWJlbD48aW5wdXQgaWQ9ImRvd25zdHJlYW1Db2xvciIgc3R5bGU9IndpZHRoOjM1cHg7aGVpZ2h0OjM1cHg7IiB2YWx1ZT0iI0ZGMzMxMSIgdHlwZT0iY29sb3IiIGRhdGEtYmluZGluZz0ie0B2YWx1ZTogZmVlZGVyQ29sb3J9IiAvPg0KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgICAgICAgICAgPGRpdj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ibGJsQXV0b1pvb20iPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9InNob3dBdXRvWm9vbUJveCBvZmYiIHNyYz0iUmVzb3VyY2VzL0ltYWdlcy9GaW5kRmVlZGVyL2JveC5wbmciIC8+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz0ic2hvd0F1dG9ab29tIiBzcmM9IlJlc291cmNlcy9JbWFnZXMvRmluZEZlZWRlci90aWNrLnBuZyIgLz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRvLVpvb20gdG8gRmVlZGVyDQogICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz0iYWxsaWduZWRJbWFnZSIgc3R5bGU9Im1hcmdpbi1sZWZ0OjVweDsiIHNyYz0iUmVzb3VyY2VzL0ltYWdlcy9GaW5kRmVlZGVyL1pvb21Uby5wbmciIGlkPSJidG5ab29tVG9GaW5kRmVlZGVyIiAvPg0KICAgICAgICAgICAgICAgICAgICA8L2Rpdj48YnIgLz4NCiAgICAgICAgICAgICAgICAgICAgPGRpdj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ibGJsQnVmZmVyU2l6ZSI+QnVmZmVyIFNpemU6IDwvbGFiZWw+DQogICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9Im51bUJ1ZmZlciIgY2xhc3M9InNtYWxsVGV4dEJveCIgdHlwZT0ibnVtYmVyIiB2YWx1ZT0iMjUiIGRhdGEtYmluZGluZz0ie0B2YWx1ZTogbnVtQnVmZmVyU2l6ZX0iIG1pbj0iMSIgbWF4PSIzMCIgLz4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImxhcmdlQnV0dG9uIiBpZD0iYnRuQ2xlYXIiIHZhbHVlPSJDbGVhciIgLz4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0NCiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ibGJsU2hvd0Fycm93cyI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz0ic2hvd0Fycm93c0JveCIgc3JjPSJSZXNvdXJjZXMvSW1hZ2VzL0ZpbmRGZWVkZXIvYm94LnBuZyIgIC8+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz0ic2hvd0Fycm93cyBvZmYiIHNyYz0iUmVzb3VyY2VzL0ltYWdlcy9GaW5kRmVlZGVyL3RpY2sucG5nIiAgLz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IEZsb3cgQXJyb3dzDQogICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPi0tPg0KICAgICAgICAgICAgICAgICAgICA8L2Rpdj48YnIgLz4NCiAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29udGFpbmVyIGFjY29yZGlvbi1zZWN0aW9uIj4NCiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9InNlY3Rpb25IZWFkZXIgYWNjb3JkaW9uLXNlY3Rpb24tdGl0bGUiIGhyZWY9IiNhY2NUaWVEZXZpY2VzIj5USUUgREVWSUNFUzwvbGFiZWw+DQogICAgICAgICAgICAgICAgPGRpdiBpZD0iYWNjVGllRGV2aWNlcyIgY2xhc3M9ImFjY29yZGlvbi1zZWN0aW9uLWNvbnRlbnQiPg0KICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImxhYmVsVGV4dCI+U2VsZWN0IFRpZSBEZXZpY2U8L2xhYmVsPg0KICAgICAgICAgICAgICAgICAgICA8ZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD0iY2JvVGllRGV2aWNlcyI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxvcHRpb24gdmFsdWU9IngiIGNvbnRleHRtZW51PSJ4Ij5TVzEyMzQgfCBBQkMgLSBERUY8L29wdGlvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJ5IiBjb250ZXh0bWVudT0ieSI+U1cxMjM1IHwgQUJDIC0gREVGPC9vcHRpb24+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0ieiIgY29udGV4dG1lbnU9InoiPlNXMTIzNiB8IEFCQyAtIERFRjwvb3B0aW9uPi0tPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSJhbGxpZ25lZEltYWdlIiBpZD0iYnRuWm9vbVRvVGllIiBzcmM9IlJlc291cmNlcy9JbWFnZXMvRmluZEZlZWRlci9ab29tSW5PdXQucG5nIiAvPg0KICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbWcgY2xhc3M9ImFsbGlnbmVkSW1hZ2UiIHNyYz0iLi4vR2VvY29ydGV4L0Vzc2VudGlhbHMvQXJjRk1XZWI0NTAvUkVTVC9zaXRlcy9GaW5kX0ZlZWRlcnMvVmlld2Vycy9GaW5kX0ZlZWRlcnMvVmlydHVhbERpcmVjdG9yeS9SZXNvdXJjZXMvSW1hZ2VzL0N1c3RvbS9oYW5kLnBuZyIgLz4tLT4NCiAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGlkPSJ0aWVEZXZpY2VBdHRyaWJ1dGVzIj5BdHRyaWJ1dGVzIG9mIHNlbGVjdGVkIFRpZSBEZXZpY2U6IDxzcGFuIGlkPSJhdHRyaWJ1dGVzT2ZUZXh0Ij4tLS08L3NwYW4+PC9kaXY+LS0+DQogICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9InRhYmxlIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz0iZmluZEZlZWRlclRhYmxlIGZpcnN0Q2hpbGRCb2xkIiBib3JkZXI9IjAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GSUVMRDwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlZBTFVFPC90aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPkZhY2lsaXR5SUQ8L3RkPjx0ZD48bGFiZWwgaWQ9ImxibFRpZURldmljZUZhY2lsaXR5SUQiIGRhdGEtYmluZGluZz0ie0B0ZXh0OiB0aWVEZXZpY2VGYWNpbGl0eUlEfSI+PC9sYWJlbD48L3RkPjwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5GZWVkZXJJRHM8L3RkPjx0ZD48bGFiZWwgaWQ9ImxibFRpZURldmljZUZlZWRlcklEcyIgZGF0YS1iaW5kaW5nPSJ7QHRleHQ6IHRpZURldmljZUZlZWRlcklEc30iPjwvbGFiZWw+PC90ZD48L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+QWRkcmVzczwvdGQ+PHRkPjxsYWJlbCBpZD0ieHh4IiBkYXRhLWJpbmRpbmc9IntAdGV4dDogdGllRGV2aWNlQWRkcmVzc30iPjwvbGFiZWw+PC90ZD48L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+PHRkPlgsWTwvdGQ+PHRkPjxsYWJlbCBkYXRhLWJpbmRpbmc9IntAdGV4dDogdGllRGV2aWNlWFl9Ij48L2xhYmVsPjwvdGQ+PC90cj4tLT4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+DQogICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIgYWNjb3JkaW9uLXNlY3Rpb24iPg0KICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ic2VjdGlvbkhlYWRlciBhY2NvcmRpb24tc2VjdGlvbi10aXRsZSIgaHJlZj0iI2FjY0xvYWQiPkxPQUQ8L2xhYmVsPg0KICAgICAgICAgICAgICAgIDxkaXYgaWQ9ImFjY0xvYWQiIGNsYXNzPSJhY2NvcmRpb24tc2VjdGlvbi1jb250ZW50Ij4NCiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJsYWJlbFRleHQiPkxvYWQgRG93bnN0cmVhbSBmcm9tIFNvdXJjZTwvbGFiZWw+PGJyIC8+DQogICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9InRhYmxlIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz0iZmluZEZlZWRlclRhYmxlIGZpcnN0Q2hpbGRCb2xkIiBib3JkZXI9IjAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QSEFTRTwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPktWQTwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5BPC90ZD48dGQ+PGxhYmVsIGRhdGEtYmluZGluZz0ie0B0ZXh0OiBmZkxvYWRBfSI+PC9sYWJlbD48L3RkPjwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5CPC90ZD48dGQ+PGxhYmVsIGRhdGEtYmluZGluZz0ie0B0ZXh0OiBmZkxvYWRCfSI+PC9sYWJlbD48L3RkPjwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5DPC90ZD48dGQ+PGxhYmVsIGRhdGEtYmluZGluZz0ie0B0ZXh0OiBmZkxvYWRDfSI+PC9sYWJlbD48L3RkPjwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5UT1RBTDwvdGQ+PHRkPjxsYWJlbCBkYXRhLWJpbmRpbmc9IntAdGV4dDogZmZMb2FkVG90YWx9Ij48L2xhYmVsPjwvdGQ+PC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+DQogICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIgYWNjb3JkaW9uLXNlY3Rpb24iPg0KICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ic2VjdGlvbkhlYWRlciBhY2NvcmRpb24tc2VjdGlvbi10aXRsZSIgaHJlZj0iI2FjY0NvbmR1Y3RvciI+Q09ORFVDVE9SPC9sYWJlbD4NCiAgICAgICAgICAgICAgICA8ZGl2IGlkPSJhY2NDb25kdWN0b3IiIGNsYXNzPSJhY2NvcmRpb24tc2VjdGlvbi1jb250ZW50Ij4NCiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJsYWJlbFRleHQiPkNvbmR1Y3RvciBEb3duc3RyZWFtIGZyb20gU291cmNlPC9sYWJlbD48YnIgLz4NCiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0idGFibGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPSJmaW5kRmVlZGVyVGFibGUgZmlyc3RDaGlsZEJvbGQiIGJvcmRlcj0iMCI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PdmVyaGVhZDwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlVuZGVyZ3JvdW5kPC90aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+UHJpbWFyeTwvdGQ+PHRkPjxsYWJlbCBkYXRhLWJpbmRpbmc9IntAdGV4dDogZmZQcmlPSH0iPjwvbGFiZWw+PC90ZD48dGQ+PGxhYmVsIGRhdGEtYmluZGluZz0ie0B0ZXh0OiBmZlByaVVHfSI+PC9sYWJlbD48L3RkPjx0ZD48bGFiZWwgZGF0YS1iaW5kaW5nPSJ7QHRleHQ6IGZmUHJpVG90YWx9Ij48L2xhYmVsPjwvdGQ+PC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPlNlY29uZGFyeTwvdGQ+PHRkPjxsYWJlbCBkYXRhLWJpbmRpbmc9IntAdGV4dDogZmZTZWNPSH0iPC9sYWJlbD48L3RkPjx0ZD48bGFiZWwgZGF0YS1iaW5kaW5nPSJ7QHRleHQ6IGZmU2VjVUd9Ij48L2xhYmVsPjwvdGQ+PHRkPjxsYWJlbCBkYXRhLWJpbmRpbmc9IntAdGV4dDogZmZTZWNUb3RhbH0iPjwvbGFiZWw+PC90ZD48L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+VE9UQUxTPC90ZD48dGQ+PGxhYmVsIGRhdGEtYmluZGluZz0ie0B0ZXh0OiBmZk9IVG90YWx9Ij48L3RkPjx0ZD48bGFiZWwgZGF0YS1iaW5kaW5nPSJ7QHRleHQ6IGZmVUdUb3RhbH0iPjwvbGFiZWw+PC90ZD48dGQ+PGxhYmVsIGRhdGEtYmluZGluZz0ie0B0ZXh0OiBmZkNvbmR1Y3RvclRvdGFsfSI+PC9sYWJlbD48L3RkPjwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPg0KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29udGFpbmVyIGFjY29yZGlvbi1zZWN0aW9uIj4NCiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9InNlY3Rpb25IZWFkZXIgYWNjb3JkaW9uLXNlY3Rpb24tdGl0bGUiIGhyZWY9IiNhY2NDdXN0b21lcnMiPkNVU1RPTUVSUzwvbGFiZWw+DQogICAgICAgICAgICAgICAgPGRpdiBpZD0iYWNjQ3VzdG9tZXJzIiBjbGFzcz0iYWNjb3JkaW9uLXNlY3Rpb24tY29udGVudCI+DQogICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ibGFiZWxUZXh0Ij5DdXN0b21lcnMgRG93bnN0cmVhbSBmcm9tIFNvdXJjZTwvbGFiZWw+PGJyIC8+DQogICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9InRhYmxlIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz0iZmluZEZlZWRlclRhYmxlIGZpcnN0Q2hpbGRCb2xkIiBib3JkZXI9IjAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QSEFTRTwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkN1c3RvbWVyczwvdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5BPC90ZD48dGQ+PGxhYmVsIGRhdGEtYmluZGluZz0ie0B0ZXh0OiBmZkN1c3RvbWVyc0F9Ij48L2xhYmVsPjwvdGQ+PC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPkI8L3RkPjx0ZD48bGFiZWwgZGF0YS1iaW5kaW5nPSJ7QHRleHQ6IGZmQ3VzdG9tZXJzQn0iPjwvbGFiZWw+PC90ZD48L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+QzwvdGQ+PHRkPjxsYWJlbCBkYXRhLWJpbmRpbmc9IntAdGV4dDogZmZDdXN0b21lcnNDfSI+PC9sYWJlbD48L3RkPjwvdHI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5UT1RBTDwvdGQ+PHRkPjxsYWJlbCBkYXRhLWJpbmRpbmc9IntAdGV4dDogZmZDdXN0b21lcnNUb3RhbH0iPjwvdGQ+PC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+DQogICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIgYWNjb3JkaW9uLXNlY3Rpb24iPg0KICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ic2VjdGlvbkhlYWRlciBhY2NvcmRpb24tc2VjdGlvbi10aXRsZSIgaHJlZj0iI2FjY0ZlZWRlclRyYWNlIj5GTE9XIERJUkVDVElPTjwvbGFiZWw+DQogICAgICAgICAgICAgICAgPGRpdiBpZD0iYWNjRmVlZGVyVHJhY2UiIGNsYXNzPSJhY2NvcmRpb24tc2VjdGlvbi1jb250ZW50Ij4NCiAgICAgICAgICAgICAgICAgICAgPGRpdj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ibGFiZWxUZXh0Ij5VcHN0cmVhbSBDb2xvcjogPC9sYWJlbD48aW5wdXQgaWQ9InVwc3RyZWFtQ29sb3IiIHN0eWxlPSJ3aWR0aDozNXB4O2hlaWdodDozNXB4OyIgdHlwZT0iY29sb3IiIHZhbHVlPSIjMTEyMkZGIiBkYXRhLWJpbmRpbmc9IntAdmFsdWU6IHVwc3RyZWFtQ29sb3J9IiAvPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+DQogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImxhYmVsVGV4dCI+RG93bnN0cmVhbSBDb2xvcjogPC9sYWJlbD48aW5wdXQgaWQ9ImRvd25zdHJlYW1Db2xvciIgc3R5bGU9IndpZHRoOjM1cHg7aGVpZ2h0OjM1cHg7IiB0eXBlPSJjb2xvciIgdmFsdWU9IiMxMTIyRkYiIGRhdGEtYmluZGluZz0ie0B2YWx1ZTogZG93bnN0cmVhbUNvbG9yfSIgLz4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImxibFRyYWNlVXBEb3duIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWxibFNob3dTZXJ2aWNlLS0+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9InRyYWNlVXBEb3duQm94IiBzcmM9IlJlc291cmNlcy9JbWFnZXMvRmluZEZlZWRlci9ib3gucG5nIiAvPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSJ0cmFjZVVwRG93biBvZmYiIHNyYz0iUmVzb3VyY2VzL0ltYWdlcy9GaW5kRmVlZGVyL3RpY2sucG5nIiAvPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFjZSBVcC9Eb3duc3RyZWFtIEZyb20gQ2xpY2sgUG9pbnQNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ibGJsWm9vbVRvVXBzdHJlYW0iPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbGJsU2hvd1NlcnZpY2UtLT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz0iem9vbVRvVXBzdHJlYW1Cb3giIHNyYz0iUmVzb3VyY2VzL0ltYWdlcy9GaW5kRmVlZGVyL2JveC5wbmciIC8+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9Inpvb21Ub1Vwc3RyZWFtIG9mZiIgc3JjPSJSZXNvdXJjZXMvSW1hZ2VzL0ZpbmRGZWVkZXIvdGljay5wbmciIC8+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1dG8tWm9vbSB0byBVcHN0cmVhbSBSZXN1bHRzDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImxibFpvb21Ub0Rvd25zdHJlYW0iPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbGJsU2hvd1NlcnZpY2UtLT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz0iem9vbVRvRG93bnN0cmVhbUJveCIgc3JjPSJSZXNvdXJjZXMvSW1hZ2VzL0ZpbmRGZWVkZXIvYm94LnBuZyIgLz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz0iem9vbVRvRG93bnN0cmVhbSBvZmYiIHNyYz0iUmVzb3VyY2VzL0ltYWdlcy9GaW5kRmVlZGVyL3RpY2sucG5nIiAvPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRvLVpvb20gdG8gRG93bnN0cmVhbSBSZXN1bHRzDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgaWQ9IkJ1dHRvbnMiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImxhcmdlQnV0dG9uIiBpZD0iYnRuRmVlZGVyVHJhY2UiIHZhbHVlPSJUYXAgb24gTWFwIiAvPg0KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT4NCiAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICA8L2Rpdj4NCiAgICA8L2Rpdj4NCjwvZGl2Pg0K");
geocortex.resourceManager.register("TraceXI","inv","Modules/TraceXI/TraceOptionsXI.html","html","PGRpdiBjbGFzcz0iVHJhY2VPcHRpb25zWEktdmlldyIgc3R5bGU9Im1hcmdpbi1sZWZ0OjVweCIgaWQ9InRyYWNlLWJ1ZmZlci1zZXR0aW5ncyI+DQogICAgPGRpdiBpZD0idGVzdCI+DQogICAgICAgIDxkaXYgY2xhc3M9Im9uZGlzcGxheSI+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJ4aURpdiI+DQogICAgICAgICAgICAgICAgPGRpdj5QUkVTRVRTPC9kaXY+DQogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ieGlEaXZDb250ZW50Ij4NCiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJkcm9wZG93biI+DQogICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPSJjYm9YSVByZXNldHMiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QWxsIEZpZWxkczwvb3B0aW9uPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+OCBMYXllcnMgNDQgRmllbGRzPC9vcHRpb24+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Nb2RlbCBOYW1lczwvb3B0aW9uPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UGFyYWxsZWw8L29wdGlvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkxhenkgTG9hZDwvb3B0aW9uPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q2FjaGVkIEpTT048L29wdGlvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPg0KICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJ4aURpdiI+DQogICAgICAgICAgICAgICAgPGRpdj5QSEFTRVMgVE8gVFJBQ0U8L2Rpdj4NCiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ4aURpdkNvbnRlbnQiPg0KICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImRyb3Bkb3duIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9InRyYWNlWElfUGhhc2UiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QW55IChBLEIsQyxBQixCQyxBQyxBQkMpPC9vcHRpb24+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BIChTaW5nbGUgUGhhc2UgQSBPbmx5KTwvb3B0aW9uPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QiAoU2luZ2xlIFBoYXNlIEIgT25seSk8L29wdGlvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkMgKFNpbmdsZSBQaGFzZSBDIE9ubHkpPC9vcHRpb24+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BQkMgKFRocmVlIFBoYXNlICdCYWNrYm9uZScgT25seSk8L29wdGlvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkF0IExlYXN0IEEgKEEsQUIsQUMsQUJDKTwvb3B0aW9uPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QXQgTGVhc3QgQiAoQixBQixCQyxBQkMpPC9vcHRpb24+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BdCBMZWFzdCBDIChDLEFDLEJDLEFCQyk8L29wdGlvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFCIChUd28gUGhhc2UgQUIgT25seSk8L29wdGlvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFDIChUd28gUGhhc2UgQUMgT25seSk8L29wdGlvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkJDIChUd28gUGhhc2UgQkMgT25seSk8L29wdGlvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPg0KICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJ4aURpdiI+DQogICAgICAgICAgICAgICAgPGRpdj5NT0RFTCBOQU1FPC9kaXY+DQogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ieGlEaXZDb250ZW50Ij4NCiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGNsYXNzPSJ4aVRleHQiIGlkPSJ4aU1vZGVsTmFtZSIgZGF0YS1iaW5kaW5nPSJ7QHZhbHVlOiBfbW9kZWxOYW1lfSIgLz48YnI+DQogICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9InhpRGl2Ij4NCiAgICAgICAgICAgICAgICA8ZGl2PkZJRUxEUyBUTyBSRVRSSUVWRTwvZGl2Pg0KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InhpRGl2Q29udGVudCI+DQogICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzcz0ieGlUZXh0IiBpZD0ieGlGaWVsZHMiIGRhdGEtYmluZGluZz0ie0B2YWx1ZTogX2ZpZWxkc30iIC8+PGJyPg0KICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJ4aURpdiI+DQogICAgICAgICAgICAgICAgPGRpdj5TRVJWRVIgT1BUSU9OUzwvZGl2Pg0KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InhpRGl2Q29udGVudCI+DQogICAgICAgICAgICAgICAgICAgIDwhLS0tPGxhYmVsIGNsYXNzPSJzd2l0Y2giPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBjaGVja2VkPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2xpZGVyIHJvdW5kIiBpZD0ieCI+PC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImxibCIgZm9yPSJ4Ij5QYXJhbGxlbDwvbGFiZWw+DQogICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+PGJyPi0tPg0KDQogICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ic3dpdGNoIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ieGlfcmV0dXJuQnlDbGFzcyIgdHlwZT0iY2hlY2tib3giIGNoZWNrZWQ+DQogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzbGlkZXIgcm91bmQiIGlkPSJ4Ij48L2Rpdj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ibGJsIiBmb3I9IngiPlJldHVybiBieSBDbGFzczwvbGFiZWw+DQogICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+PGJyPg0KICAgICAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGNsYXNzPSJzd2l0Y2giPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBjaGVja2VkPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2xpZGVyIHJvdW5kIiBpZD0ieCI+PC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImxibCIgZm9yPSJ4Ij5VbmlvbiBvbiBTZXJ2ZXI8L2xhYmVsPg0KICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPjxicj4tLT4NCiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJzd2l0Y2giPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSJ4aV9sYXp5TG9hZCIgdHlwZT0iY2hlY2tib3giIGNoZWNrZWQ+DQogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzbGlkZXIgcm91bmQiIGlkPSJ4Ij48L2Rpdj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ibGJsIiBmb3I9IngiPkxhenkgTG9hZDwvbGFiZWw+DQogICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+PGJyPg0KICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9InN3aXRjaCI+DQogICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJ4aV9ub0pzb24iIGNoZWNrZWQgPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2xpZGVyIHJvdW5kIiBpZD0ieCI+PC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImxibCIgZm9yPSJ4Ij5ObyBKU09OPC9sYWJlbD4NCiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD48YnI+DQogICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ic3dpdGNoIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgY2hlY2tlZCBpZD0ieGlfQXV0b1pvb20iPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2xpZGVyIHJvdW5kIiBpZD0ieCI+PC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImxibCIgZm9yPSJ4Ij5BdXRvIFpvb208L2xhYmVsPg0KICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPjxicj4NCiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJzd2l0Y2giPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBjaGVja2VkIGlkPSJ4aV9BdXRvUG9wdWxhdGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2xpZGVyIHJvdW5kIiBpZD0ieCI+PC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImxibCIgZm9yPSJ4Ij5BdXRvIFBvcHVsYXRlPC9sYWJlbD4NCiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4NCiAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0ieGlEaXYiPg0KICAgICAgICAgICAgICAgIDxkaXY+VHJhY2UgUmVzdWx0IElEPC9kaXY+DQogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ieGlEaXZDb250ZW50Ij4NCiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGNsYXNzPSJ4aVRleHQiIHZhbHVlPSItMSIgLz4NCiAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGlucHV0IHR5cGU9ImJ1dHRvbiIgIGNsYXNzPSJ4aUJ1dHRvbiIgaWQ9ImJ0blBvcHVsYXRlQXR0cmlidXRlcyIgdmFsdWU9IlBvcHVsYXRlIEF0dHJpYnV0ZXMiIC8+DQogICAgICAgICAgICA8aW5wdXQgdHlwZT0iYnV0dG9uIiAgY2xhc3M9InhpQnV0dG9uIiBpZD0iYnRuWm9vbVRvIiB2YWx1ZT0iWm9vbSB0byBSZXN1bHRzIiAvPg0KICAgICAgICA8L2Rpdj4NCiAgICA8L2Rpdj4NCjwvZGl2Pg0K");
geocortex.resourceManager.register("TraceXI","inv","Modules/TraceXI/BufferOptionsXI.css","css","DQoucmVnaW9uIC52aWV3LlRlbXBsYXRlTW9kdWxlVmlldy5hY3RpdmUgew0KCW1hcmdpbjogMDsNCn0NCg0KLnRlbXBsYXRlLW1vZHVsZS12aWV3IHsNCgl6LWluZGV4OiAxMDA7DQoJd2lkdGg6IDMyNXB4Ow0KCXJpZ2h0OiAwOw0KCWJhY2tncm91bmQ6IHdoaXRlOw0KCWNvbG9yOiBibGFjazsNCglib3JkZXI6IG5vbmU7DQoJbWFyZ2luOiA1cHg7DQp9DQoNCmlucHV0W3R5cGU9cmFuZ2VdIHsNCgkvKnJlbW92ZXMgZGVmYXVsdCB3ZWJraXQgc3R5bGVzKi8NCgktd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7DQoJLypmaXggZm9yIEZGIHVuYWJsZSB0byBhcHBseSBmb2N1cyBzdHlsZSBidWcgKi8NCglib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsNCgkvKnJlcXVpcmVkIGZvciBwcm9wZXIgdHJhY2sgc2l6aW5nIGluIEZGKi8NCgl3aWR0aDogOTAlOw0KfQ0KDQoJaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHsNCgkJd2lkdGg6IDkwJTsNCgkJaGVpZ2h0OiA1cHg7DQoJCWJhY2tncm91bmQ6ICNkZGQ7DQoJCWJvcmRlcjogbm9uZTsNCgkJYm9yZGVyLXJhZGl1czogM3B4Ow0KCX0NCg0KCWlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7DQoJCS13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsNCgkJYm9yZGVyOiBub25lOw0KCQloZWlnaHQ6IDE2cHg7DQoJCXdpZHRoOiAxNnB4Ow0KCQlib3JkZXItcmFkaXVzOiA1MCU7DQoJCWJhY2tncm91bmQ6ICMwMDk1MzA7DQoJCW1hcmdpbi10b3A6IC00cHg7DQoJfQ0KDQoJaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXMgew0KCQlvdXRsaW5lOiBub25lOw0KCX0NCg0KCQlpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sgew0KCQkJYmFja2dyb3VuZDogI2NjYzsNCgkJfQ0KDQoJaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2sgew0KCQl3aWR0aDogOTAlOw0KCQloZWlnaHQ6IDVweDsNCgkJYmFja2dyb3VuZDogI2RkZDsNCgkJYm9yZGVyOiBub25lOw0KCQlib3JkZXItcmFkaXVzOiAzcHg7DQoJfQ0KDQoJaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIgew0KCQlib3JkZXI6IG5vbmU7DQoJCWhlaWdodDogMTZweDsNCgkJd2lkdGg6IDE2cHg7DQoJCWJvcmRlci1yYWRpdXM6IDUwJTsNCgkJYmFja2dyb3VuZDogIzAwOTUzMDsNCgl9DQoNCgkvKmhpZGUgdGhlIG91dGxpbmUgYmVoaW5kIHRoZSBib3JkZXIqLw0KCWlucHV0W3R5cGU9cmFuZ2VdOi1tb3otZm9jdXNyaW5nIHsNCgkJb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlOw0KCQlvdXRsaW5lLW9mZnNldDogLTFweDsNCgl9DQoNCglpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHsNCgkJd2lkdGg6IDkwJTsNCgkJaGVpZ2h0OiA1cHg7DQoJCS8qcmVtb3ZlIGJnIGNvbG91ciBmcm9tIHRoZSB0cmFjaywgd2UnbGwgdXNlIG1zLWZpbGwtbG93ZXIgYW5kIG1zLWZpbGwtdXBwZXIgaW5zdGVhZCAqLw0KCQliYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsNCgkJLypsZWF2ZSByb29tIGZvciB0aGUgbGFyZ2VyIHRodW1iIHRvIG92ZXJmbG93IHdpdGggYSB0cmFuc3BhcmVudCBib3JkZXIgKi8NCgkJYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsNCgkJYm9yZGVyLXdpZHRoOiA2cHggMDsNCgkJLypyZW1vdmUgZGVmYXVsdCB0aWNrIG1hcmtzKi8NCgkJY29sb3I6IHRyYW5zcGFyZW50Ow0KCX0NCg0KCWlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC1sb3dlciB7DQoJCWJhY2tncm91bmQ6ICM3Nzc7DQoJCWJvcmRlci1yYWRpdXM6IDEwcHg7DQoJfQ0KDQoJaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLXVwcGVyIHsNCgkJYmFja2dyb3VuZDogI2RkZDsNCgkJYm9yZGVyLXJhZGl1czogMTBweDsNCgl9DQoNCglpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1iIHsNCgkJYm9yZGVyOiBub25lOw0KCQloZWlnaHQ6IDE2cHg7DQoJCXdpZHRoOiAxNnB4Ow0KCQlib3JkZXItcmFkaXVzOiA1MCU7DQoJCWJhY2tncm91bmQ6ICMwMDk1MzA7DQoJfQ0KDQoJaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLWxvd2VyIHsNCgkJYmFja2dyb3VuZDogIzg4ODsNCgl9DQoNCglpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtdXBwZXIgew0KCQliYWNrZ3JvdW5kOiAjY2NjOw0KCX0NCg0KDQoNCi5zZS10YWJsZSB7DQoJbWFyZ2luLXRvcDogOHB4Ow0KfQ0KDQoJLnNlLXRhYmxlIC5zZS1yb3cgew0KCX0NCg0KCQkuc2UtdGFibGUgLnNlLXJvdyBpbnB1dCwNCgkJLnNlLXRhYmxlIC5zZS1yb3cgbGFiZWwgew0KCQkJZGlzcGxheTogaW5saW5lLWJsb2NrOw0KCQl9DQoNCgkJLnNlLXRhYmxlIC5zZS1yb3cgaW5wdXQgew0KCQkJbWFyZ2luLXJpZ2h0OiA4cHg7DQoJCX0NCg0KCQkuc2UtdGFibGUgLnNlLXJvdyBsYWJlbCB7DQoJCQltYXJnaW4tdG9wOiAtMnB4Ow0KCQl9DQoNCgkJLnNlLXRhYmxlIC5zZS1yb3c6YWZ0ZXIgew0KCQkJdmlzaWJpbGl0eTogaGlkZGVuOw0KCQkJZGlzcGxheTogYmxvY2s7DQoJCQlmb250LXNpemU6IDA7DQoJCQljb250ZW50OiAiICI7DQoJCQljbGVhcjogYm90aDsNCgkJCWhlaWdodDogMDsNCgkJfQ0KDQoJLnNlLXRhYmxlIC5zZS1yb3cgew0KCQlkaXNwbGF5OiBpbmxpbmUtYmxvY2s7DQoJfQ0KLyogc3RhcnQgY29tbWVudGVkIGJhY2tzbGFzaCBoYWNrIFwqLw0KKiBodG1sIC5jbGVhcmZpeCB7DQoJaGVpZ2h0OiAxJTsNCn0NCg0KLnNlLXRhYmxlIC5zZS1yb3cgew0KCWRpc3BsYXk6IGJsb2NrOw0KfQ0KDQoJLnNlLXRhYmxlIC5zZS1yb3cgLnNlLWxhYmVsLA0KCS5zZS10YWJsZSAuc2Utcm93IC5zZS1kZXRhaWwgew0KCQlkaXNwbGF5OiBpbmxpbmUtYmxvY2s7DQoJfQ0KDQoJLnNlLXRhYmxlIC5zZS1yb3cgLnNlLWxhYmVsIHsNCgkJY29sb3I6ICM2NTYxODk7DQoJCW1pbi13aWR0aDogMTAwcHg7DQoJCXRleHQtYWxpZ246IHJpZ2h0Ow0KCQltYXJnaW4tcmlnaHQ6IDJweDsNCgl9DQoNCgkuc2UtdGFibGUgLnNlLXJvdyAuc2UtZGV0YWlsIHsNCgkJbWluLXdpZHRoOiAxMDBweDsNCgkJdGV4dC1hbGlnbjogbGVmdDsNCgl9DQoNCi5zaG93LXJlc3VsdHMtdGFibGUtYnV0dG9uLXZpZXcgew0KCXBvc2l0aW9uOiByZWxhdGl2ZTsNCglvdmVyZmxvdzogdmlzaWJsZTsNCn0NCg0KLnNob3ctcmVzdWx0cy10YWJsZS1idXR0b24gew0KCWRpc3BsYXk6IGJsb2NrOw0KCXdpZHRoOiAyLjc1ZW07DQoJYmFja2dyb3VuZDogdXJsKCIuL1Jlc291cmNlcy9JbWFnZXMvSWNvbnMvdmlldy1saXN0LTI0LnBuZyIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICNGOEY4Rjg7DQoJdGV4dC1pbmRlbnQ6IC05OTk5OWVtOw0KCWJvcmRlci1yYWRpdXM6IDAuMjVyZW07DQoJZmxvYXQ6IGxlZnQ7DQoJbWFyZ2luOiAwOw0KCWhlaWdodDogMi43NWVtOw0KCWJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7DQoJZmxvYXQ6IHJpZ2h0Ow0KfQ0KDQojdHJhY2UtYnVmZmVyLXNldHRpbmdzIHsNCn0NCg0KCSN0cmFjZS1idWZmZXItc2V0dGluZ3MgLnNlLXRhYmxlIHsNCgkJd2lkdGg6IDIyNXB4Ow0KCX0NCg0KCQkjdHJhY2UtYnVmZmVyLXNldHRpbmdzIC5zZS10YWJsZSAuc2Utcm93IHsNCgkJCW1pbi1oZWlnaHQ6IDMycHg7DQoJCX0NCg0KCQkjdHJhY2UtYnVmZmVyLXNldHRpbmdzIC5zZS10YWJsZSAuc2Utcm93IGlucHV0IHsNCgkJCW1hcmdpbi1yaWdodDogLTJweDsNCgkJfQ0KDQoJCQkjdHJhY2UtYnVmZmVyLXNldHRpbmdzIC5zZS10YWJsZSAuc2Utcm93IC5zZS1sYWJlbCB7DQoJCQkJbWluLXdpZHRoOiA4MHB4Ow0KCQkJfQ0KDQoJCQkjdHJhY2UtYnVmZmVyLXNldHRpbmdzIC5zZS10YWJsZSAuc2Utcm93IC5zZS1kZXRhaWwgew0KCQkJCW1pbi13aWR0aDogMTI1cHg7DQoJCQl9DQoNCi5lbGVjdHJpYy10cmFjZS1vcHRpb25zLXZpZXcgewkNCgl3aWR0aDogYXV0bzsNCglvdmVyZmxvdzogaGlkZGVuOw0KfQ0K");
geocortex.resourceManager.register("TraceXI","inv","Modules/TraceXI/FindFeederModule.css","css","LyouRmluZEZlZWRlci1tb2R1bGUtdmlld3s8aW5wdXQgdHlwZT0iYnV0dG9uIiBpZD0iYnRuVHJhY2VVcHN0cmVhbSIgdmFsdWU9IlRyYWNlIFVwc3RyZWFtIiAvPg0KICAgIHotaW5kZXg6IDA7DQogICAgd2lkdGg6IDUwJTsNCiAgICBkaXNwbGF5OmlubGluZTsNCiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsNCiAgICBjb2xvcjogYmxhY2s7DQogICAgbWFyZ2luLWxlZnQ6IDE1cHg7DQp9Ki8NCi5GaW5kRmVlZGVyLW1vZHVsZS12aWV3IHsNCiAgICBtYXJnaW4tbGVmdDogNXB4Ow0KICAgIG1hcmdpbi1yaWdodDogNXB4Ow0KfQ0KI2ZpbmRGZWVkZXJTZWxlY3RlZEZlZWRlcnsNCiAgICBjb2xvcjpibHVlOw0KfQ0KaW5wdXQjYnRuQ2xlYXIgew0KICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7DQogICAgZm9udC13ZWlnaHQ6IGJvbGQ7DQogICAgdmVydGljYWwtYWxpZ246IHRvcDsNCn0NCi5zZWN0aW9uSGVhZGVyIHsNCiAgICBmb250LXNpemU6IGxhcmdlOw0KICAgIGNvbG9yOiBibHVlOw0KICAgIG1hcmdpbi1sZWZ0OiAxNXB4Ow0KICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsNCn0NCi5GaW5kRmVlZGVyLW1vZHVsZS12aWV3IC5jb250YWluZXIgew0KICAgIGJhY2tncm91bmQtY29sb3I6I2VmZWZlZjsNCiAgICBib3JkZXItcmFkaXVzOjRweDsNCiAgICBib3JkZXItd2lkdGg6IHRoaW47DQogICAgYm9yZGVyLXN0eWxlOiBncm9vdmU7DQogICAgYm9yZGVyLXJhZGl1czo3cHg7DQogICAgbWFyZ2luLWJvdHRvbTogNXB4Ow0KICAgIG92ZXJmbG93OiBoaWRkZW47DQp9DQouRmluZEZlZWRlci1tb2R1bGUtdmlldyAuc2VjdGlvbkhlYWRlciB7DQogICAgIGZvbnQtd2VpZ2h0OjYwMCA7DQogICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsNCn0NCi5GaW5kRmVlZGVyLW1vZHVsZS12aWV3IC5ncHNTZWN0aW9uIHsNCiAgICAgbWFyZ2luLWJvdHRvbTogNXB4Ow0KfQ0KLkZpbmRGZWVkZXItbW9kdWxlLXZpZXcgLmxvY2F0aW9uQ2hlY2tib3h7DQogICAgbWFyZ2luLXRvcDogMTFweDsNCiAgICBtYXJnaW4tbGVmdDogNXB4Ow0KICAgIG1hcmdpbi1ib3R0b206IDEwcHg7DQogICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7DQogICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS41KTsNCiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41KTsNCiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTsNCiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDIpOw0KICAgIHBhZGRpbmc6IDEwcHg7DQp9DQouRmluZEZlZWRlci1tb2R1bGUtdmlldyAjd3JhcHBlciB7DQogIG1hcmdpbi1yaWdodDppbmhlcml0Ow0KfQ0KLkZpbmRGZWVkZXItbW9kdWxlLXZpZXcgc2VsZWN0ew0KICAgIG1hcmdpbi10b3A6NHB4Ow0KICAgIG1hcmdpbi1ib3R0b206NnB4Ow0KICAgIGhlaWdodDoyMHB4Ow0KICAgIGJvcmRlci1yYWRpdXM6IDNweDsNCiAgICB3aWR0aDogYXV0bzsNCiAgICBoZWlnaHQ6YXV0bzsNCn0NCg0KLkZpbmRGZWVkZXItbW9kdWxlLXZpZXcgLmxhYmVsVGV4dHsNCiAgICBjb2xvcjpncmVlbjsNCiAgICBmb250LXdlaWdodDo2MDAgOw0KICAgIGZvbnQtc2l6ZTptZWRpdW07DQoNCn0NCi5GaW5kRmVlZGVyLW1vZHVsZS12aWV3IC5zbWFsbExhYmVsVGV4dHsNCiAgICBjb2xvcjpncmF5Ow0KICAgIGZvbnQtd2VpZ2h0OjQwMCA7DQogICAgZm9udC1zaXplOnNtYWxsOw0KfQ0KLyouRmluZEZlZWRlci1tb2R1bGUtdmlldyAubGJsU2hvd1NlcnZpY2V7DQogICAgZm9udC13ZWlnaHQ6NjAwIDsNCiAgICBjb2xvcjpncmF5Ow0KICAgIGZvbnQtc2l6ZTpzbWFsbDsNCiAgICANCn0qLw0KI2Nib1RpZURldmljZXN7DQogICAgd2lkdGg6NzAlDQp9DQouZmluZEZlZWRlclRhYmxlIHRoew0Kd2lkdGg6MTUwcHg7DQpmb250LXNpemU6MTA7DQp0ZXh0LWFsaWduOmxlZnQ7DQp9DQouZmluZEZlZWRlclRhYmxlLmZpcnN0Q2hpbGRCb2xkIHRyOmZpcnN0LWNoaWxkIHsNCiAgICBmb250LXdlaWdodDogYm9sZDsNCn0NCi5maW5kRmVlZGVyVGFibGV7DQpsaW5lLWhlaWdodDoxLjU7DQp9DQoNCiN0aWVEZXZpY2VBdHRyaWJ1dGVzew0KDQptYXJnaW4tYm90dG9tIDogNXB4IDsNCmhlaWdodDogMTIwJTsNCn0NCg0KLyouRmluZEZlZWRlci1tb2R1bGUtdmlldyAubGJsU2hvd0Fycm93cy5vZmZ7DQogICAgY29sb3I6Z3JlZW47DQogICAgZm9udC1zaXplOnNtYWxsOw0KfSovDQoNCmltZy5hbGxpZ25lZEltYWdlIHsNCiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOw0KfQ0KDQoubGJsU2hvd0Fycm93cy5vZmYsLmxibFRyYWNlVXBEb3duLm9mZiwubGJsQXV0b1pvb20sLmxibFRyYWNlRnJvbUNhY2hlLm9mZiwubGJsWm9vbVRvVXBzdHJlYW0ub2ZmLC5sYmxab29tVG9Eb3duc3RyZWFtLm9mZnsNCiAgICBjb2xvcjpncmVlbjsNCiAgICAvKmZvbnQtd2VpZ2h0OjUwMCA7DQogICAgZm9udC1zaXplOnNtYWxsOyovDQp9DQoNCg0KLnNob3dBcnJvd3MsLnNob3dBcnJvd3NCb3gsLnRyYWNlVXBEb3duLC50cmFjZVVwRG93bkJveCwuem9vbVRvVXBzdHJlYW0sLnpvb21Ub0Rvd25zdHJlYW0sLnpvb21Ub1Vwc3RyZWFtQm94LC56b29tVG9Eb3duc3RyZWFtQm94LC5zaG93VHJhY2UsLnNob3dUcmFjZUJveCwuc2hvd0F1dG9ab29tLC5zaG93QXV0b1pvb21Cb3h7DQogICAgbWFyZ2luLXRvcDo1cHg7DQogICAgdmVydGljYWwtYWxpZ246LTdweDsNCn0NCi5sYmxUcmFjZVVwRG93biwubGJsWm9vbVRvVXBzdHJlYW0sLmxibFpvb21Ub0Rvd25zdHJlYW0sLmxibFNob3dBcnJvd3MsLmxibFRyYWNlRnJvbUNhY2hlLC5sYmxBdXRvWm9vbS5vZmZ7DQogICAgY29sb3I6Z3JheTsNCiAgICAvKmZvbnQtd2VpZ2h0OjQwMCA7DQogICAgZm9udC1zaXplOnNtYWxsOyovDQp9DQouc2hvd0Fycm93cy5vZmYsLnRyYWNlVXBEb3duLm9mZiwuem9vbVRvVXBzdHJlYW0ub2ZmLC56b29tVG9Eb3duc3RyZWFtLm9mZiwuem9vbVRvVXBzdHJlYW1Cb3gub2ZmLC56b29tVG9Eb3duc3RyZWFtQm94Lm9mZiwuc2hvd1RyYWNlLm9mZiwuc2hvd0F1dG9ab29tLm9mZiwuc2hvd0Fycm93c0JveC5vZmYsLnRyYWNlVXBEb3duQm94Lm9mZiwuc2hvd1RyYWNlQm94Lm9mZiwuc2hvd0F1dG9ab29tQm94Lm9mZnsNCiAgICBkaXNwbGF5Om5vbmU7DQp9DQoNCg0KLkZpbmRGZWVkZXItbW9kdWxlLXZpZXcgLnNtYWxsVGV4dEJveHsNCiAgICB3aWR0aDozMCU7DQogICAgYmFja2dyb3VuZDp3aGl0ZTsNCiAgICBib3JkZXItcmFkaXVzOjNweDsNCn0NCi5GaW5kRmVlZGVyLW1vZHVsZS12aWV3IC5ncHNUZXh0Qm94ew0KICAgIHdpZHRoOjUwJTsNCiAgICBiYWNrZ3JvdW5kOndoaXRlOw0KICAgIGNvbG9yOmJsdWU7DQogICAgYm9yZGVyLXJhZGl1czozcHg7DQp9DQouRmluZEZlZWRlci1tb2R1bGUtdmlldyAjY29udGVudCB7DQogIGZsb2F0OiBsZWZ0Ow0KICB3aWR0aDogMTAwJTsNCiAgYmFja2dyb3VuZC1jb2xvcjogI0NDRjsNCn0NCi5GaW5kRmVlZGVyLW1vZHVsZS12aWV3ICNzaWRlYmFyIHsNCiAgZmxvYXQ6IHJpZ2h0Ow0KICB3aWR0aDogNTZweDsNCiAgbWFyZ2luLXJpZ2h0OiAtNTZweDsNCiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTsNCn0NCi5GaW5kRmVlZGVyLW1vZHVsZS12aWV3ICNjbGVhcmVkIHsNCiAgY2xlYXI6IGJvdGg7DQp9DQoNCmRpdi5jb2x1bW5zIHsgDQogICAgd2lkdGg6IDQwMHB4OyANCiAgICBsaW5lLWhlaWdodDoxLjVlbTsNCn0NCmRpdi5jb2x1bW5zIGRpdiB7d2lkdGg6IDEwMHB4OyBmbG9hdDpsZWZ0O30NCmRpdi5jbGVhciB7DQogICAgY2xlYXI6IGJvdGg7DQp9DQpkaXYjZGF0YVZhbHVlcyB7DQogICAgd2lkdGg6IDIyMHB4Ow0KICAgIG92ZXJmbG93LXg6IGhpZGRlbjsNCiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOw0KfQ0KLkZpbmRGZWVkZXItbW9kdWxlLXZpZXcgLmxhcmdlQnV0dG9uIHsNCiAgICB3aWR0aDogNTAlOw0KICAgIGhlaWdodDogMzBweDsNCiAgICBmb250LXNpemU6IG1lZGl1bTsNCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEZBNjAwOw0KICAgIGJvcmRlci1yYWRpdXM6IDNweDsNCiAgICBtYXJnaW4tdG9wOjE1cHg7DQogICAgY29sb3I6YmxhY2s7DQogICAgZm9udC13ZWlnaHQ6IDQwMDsNCn0NCi5GaW5kRmVlZGVyLW1vZHVsZS12aWV3IC5zbWFsbEJ1dHRvbiB7DQogICAgYmFja2dyb3VuZC1jb2xvcjogIzRGQTYwMDsNCiAgICBib3JkZXItcmFkaXVzOiAzcHg7DQogICAgbWFyZ2luLXRvcDo1cHg7DQogICAgY29sb3I6YmxhY2s7DQogICAgd2lkdGg6MzAlOw0KICAgIGZvbnQtd2VpZ2h0OiA0MDA7DQp9DQouRmluZEZlZWRlci1tb2R1bGUtdmlldyBsYWJlbCB7DQogICAvKiBmb250LXNpemU6bWVkaXVtOyovDQp9DQouRmluZEZlZWRlci1tb2R1bGUtdmlldyAubmF2QnV0dG9uc3sNCiAgICBtYXJnaW4tdG9wOjVweDsNCn0NCi5GaW5kRmVlZGVyLW1vZHVsZS12aWV3ICNkaXNwbGF5TmFtZXJ7DQogICAgbWFyZ2luLXRvcDoxMHB4Ow0KICAgIG1hcmdpbi1ib3R0b206MTBweDsNCiAgICBmb250LXNpemU6bWVkaXVtOw0KICAgIGNvbG9yOiNGNEExMDAgOw0KfQ0KLkZpbmRGZWVkZXItbW9kdWxlLXZpZXcgLmZlYXR1cmVzWE9mWSB7DQogICAgZm9udC1zaXplOiBsYXJnZTsNCiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOw0KICAgIGZvbnQtc2l6ZTogc21hbGw7DQogICAgcG9zaXRpb246IHJlbGF0aXZlOw0KICAgIHRvcDogLThweDsNCiAgICBjb2xvcjojQzQwMTRCOw0KfQ0KDQouaGVsbG9PZmZzZXR7DQogICAgbWFyZ2luLWxlZnQ6NXB4Ow0KICAgIG1hcmdpbi1yaWdodDo1cHg7DQp9DQoubG9jYXRpb25CdXR0b25zIHsNCiAgICBtYXJnaW4tbGVmdDogMTBweDsNCiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOw0KfQ0KI2NvbnRlbnQgew0KICBmbG9hdDogbGVmdDsNCiAgd2lkdGg6IDEwMCU7DQogIGhlaWdodDogMjRweDsNCiAgDQp9DQouRmluZEZlZWRlci1tb2R1bGUtdmlldyBpbnB1dCB7DQogICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjsNCn0NCi5mZWF0dXJlc1hPZll7DQogICAgdmVydGljYWwtYWxpZ246IHRvcDsNCiAgICBtYXJnaW4tbGVmdDogNXB4Ow0KICAgIG1hcmdpbi1yaWdodDogNXB4Ow0KfQ0KLkZpbmRGZWVkZXItbW9kdWxlLXZpZXcgI2J0bkFkZFRleHR7DQogICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7DQogICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7DQogICAgYm9yZGVyLXJhZGl1czogNHB4Ow0KICAgIG1hcmdpbi10b3A6NTBweDsNCn0NCiNjbGVhcmVkew0KDQp9DQoNCg0KLmRpdi10b2dnbGVzIHsNCgltYXJnaW4tdG9wOiAxZW07DQp9DQouZGl2LXRvZ2dsZXMgLnRyaWdnZXIgew0KCXBvc2l0aW9uOiByZWxhdGl2ZTsNCglkaXNwbGF5OiBpbmxpbmUtYmxvY2s7DQoJd2lkdGg6IDQwcHg7DQoJcGFkZGluZzogNHB4Ow0KCWhlaWdodDogMjVweDsNCglib3JkZXI6IDFweCBzb2xpZCAjNjY2Ow0KCWJvcmRlci1yYWRpdXM6IDJweDsNCgliYWNrZ3JvdW5kOiAjZWVlOw0KCWJveC1zaGFkb3c6IGluc2V0IDAgLTE3cHggOHB4IHJnYmEoMCwwLDAsMC4zKSwgaW5zZXQgMCAtNHB4IDdweCByZ2JhKDAsMCwwLDAuMyk7DQp9DQouZGl2LXRvZ2dsZXMgLnRyaWdnZXI6YWZ0ZXIgew0KCWNvbnRlbnQ6ICIiOw0KCWRpc3BsYXk6IGJsb2NrOw0KCXBvc2l0aW9uOiBhYnNvbHV0ZTsNCgl0b3A6IDUwJTsNCglyaWdodDogNXB4Ow0KCW1hcmdpbi10b3A6IC0ycHg7DQoJYm9yZGVyOiA1cHggc29saWQ7DQoJYm9yZGVyLWNvbG9yOiAjMDAwIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50Ow0KfQ0KLmRpdi10b2dnbGVzIC50cmlnZ2VyOmJlZm9yZSB7DQoJY29udGVudDogIiI7DQoJZGlzcGxheTogYmxvY2s7DQoJcG9zaXRpb246IGFic29sdXRlOw0KCXRvcDogNTAlOw0KCXJpZ2h0OiA0cHg7DQoJbWFyZ2luLXRvcDogLTFweDsNCglib3JkZXI6IDVweCBzb2xpZDsNCglib3JkZXItY29sb3I6ICNlZWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7DQp9DQouZGl2LXRvZ2dsZXMgLmFjdGl2ZTpiZWZvcmUgew0KCW1hcmdpbi10b3A6IC03cHg7DQoJYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZWVlOw0KfQ0KLmRpdi10b2dnbGVzIC5hY3RpdmU6YWZ0ZXIgew0KCW1hcmdpbi10b3A6IC04cHg7DQoJYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMDAwOw0KfQ0KLmRpdi10b2dnbGVzIC50cmlnZ2VyIGRpdiB7DQoJZGlzcGxheTogaW5saW5lLWJsb2NrOw0KCXdpZHRoOiAyM3B4Ow0KCWhlaWdodDogMjNweDsNCgliYWNrZ3JvdW5kOiAjZmZmIHVybCgnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoREFBTUFJQUJBTXpNelAvLy95SDVCQUVBQUFFQUxBQUFBQUFNQUF3QUFBSVdoQitwaDVwczNJTXlRRkJ2elZScTN6bWZHQzVRQVFBNycpOw0KfQ0KLmRpdi10b2dnbGVzIC50cmlnZ2VyIGRpdiBkaXYgew0KCWJvcmRlcjogMXB4IHNvbGlkICM2NjY7DQoJYm9yZGVyLWNvbG9yOiAjNjY2ICNjY2MgI2NjYyAjNjY2Ow0KCWJhY2tncm91bmQ6ICNhYWE7DQp9DQo=");
geocortex.resourceManager.register("TraceXI","inv","Modules/TraceXI/TraceOptionsXI.css","css","LnhpQnV0dG9uIHsNCgktbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4ICMzZTczMjc7DQoJLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCAjM2U3MzI3Ow0KCWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4ICMzZTczMjc7DQoJYmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDUsICM3N2I1NWEpLCBjb2xvci1zdG9wKDEsICM3MmIzNTIpKTsNCgliYWNrZ3JvdW5kOi1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzc3YjU1YSA1JSwgIzcyYjM1MiAxMDAlKTsNCgliYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzc3YjU1YSA1JSwgIzcyYjM1MiAxMDAlKTsNCgliYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCh0b3AsICM3N2I1NWEgNSUsICM3MmIzNTIgMTAwJSk7DQoJYmFja2dyb3VuZDotbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzc3YjU1YSA1JSwgIzcyYjM1MiAxMDAlKTsNCgliYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3N2I1NWEgNSUsICM3MmIzNTIgMTAwJSk7DQoJZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjNzdiNTVhJywgZW5kQ29sb3JzdHI9JyM3MmIzNTInLEdyYWRpZW50VHlwZT0wKTsNCgliYWNrZ3JvdW5kLWNvbG9yOiM3N2I1NWE7DQoJLW1vei1ib3JkZXItcmFkaXVzOjlweDsNCgktd2Via2l0LWJvcmRlci1yYWRpdXM6OXB4Ow0KCWJvcmRlci1yYWRpdXM6OXB4Ow0KCWJvcmRlcjoxcHggc29saWQgIzRiOGYyOTsNCglkaXNwbGF5OmlubGluZS1ibG9jazsNCgljdXJzb3I6cG9pbnRlcjsNCgljb2xvcjojZmZmZmZmOw0KCWZvbnQtZmFtaWx5OkFyaWFsOw0KCWZvbnQtc2l6ZToxM3B4Ow0KCWZvbnQtd2VpZ2h0OmJvbGQ7DQoJcGFkZGluZzo3cHggMTVweDsNCgl0ZXh0LWRlY29yYXRpb246bm9uZTsNCgl0ZXh0LXNoYWRvdzowcHggMnB4IDFweCAjNWI4YTNjOw0KfQ0KLnhpQnV0dG9uOmRpc2FibGVkIHsNCgktbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4ICNhYWFhYWE7DQoJLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCAjYWFhYWFhOw0KCWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4ICNhYWFhYWE7DQoJYmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDUsICM5OTk5OTkpLCBjb2xvci1zdG9wKDEsICNjY2NjY2MpKTsNCgliYWNrZ3JvdW5kOi1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzk5OTk5OSA1JSwgI2NjY2NjYyAxMDAlKTsNCgliYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzk5OTk5OSA1JSwgI2NjY2NjYyAxMDAlKTsNCgliYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCh0b3AsICM5OTk5OTkgNSUsICNjY2NjY2MgMTAwJSk7DQoJYmFja2dyb3VuZDotbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzk5OTk5OSA1JSwgI2NjY2NjYyAxMDAlKTsNCgliYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5OTk5OTkgNSUsICNjY2NjY2MgMTAwJSk7DQoJZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjOTk5OTk5JywgZW5kQ29sb3JzdHI9JyNjY2NjY2MnLEdyYWRpZW50VHlwZT0wKTsNCgliYWNrZ3JvdW5kLWNvbG9yOiNhYWFhYWE7DQoJLW1vei1ib3JkZXItcmFkaXVzOjlweDsNCgktd2Via2l0LWJvcmRlci1yYWRpdXM6OXB4Ow0KCWJvcmRlci1yYWRpdXM6OXB4Ow0KCWJvcmRlcjoxcHggc29saWQgI2FhYWFhYTsNCglkaXNwbGF5OmlubGluZS1ibG9jazsNCgljdXJzb3I6cG9pbnRlcjsNCgljb2xvcjojZmZmZmZmOw0KCWZvbnQtZmFtaWx5OkFyaWFsOw0KCWZvbnQtc2l6ZToxM3B4Ow0KCWZvbnQtd2VpZ2h0OmJvbGQ7DQoJcGFkZGluZzo3cHggMTVweDsNCgl0ZXh0LWRlY29yYXRpb246bm9uZTsNCgl0ZXh0LXNoYWRvdzowcHggMnB4IDFweCAjYWFhYWFhOw0KfQ0KLnhpQnV0dG9uOmhvdmVyIHsNCgliYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wNSwgIzcyYjM1MiksIGNvbG9yLXN0b3AoMSwgIzc3YjU1YSkpOw0KCWJhY2tncm91bmQ6LW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjNzJiMzUyIDUlLCAjNzdiNTVhIDEwMCUpOw0KCWJhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNzJiMzUyIDUlLCAjNzdiNTVhIDEwMCUpOw0KCWJhY2tncm91bmQ6LW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIzcyYjM1MiA1JSwgIzc3YjU1YSAxMDAlKTsNCgliYWNrZ3JvdW5kOi1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjNzJiMzUyIDUlLCAjNzdiNTVhIDEwMCUpOw0KCWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzcyYjM1MiA1JSwgIzc3YjU1YSAxMDAlKTsNCglmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyM3MmIzNTInLCBlbmRDb2xvcnN0cj0nIzc3YjU1YScsR3JhZGllbnRUeXBlPTApOw0KCWJhY2tncm91bmQtY29sb3I6IzcyYjM1MjsNCn0NCi54aUJ1dHRvbjphY3RpdmUgew0KCXBvc2l0aW9uOnJlbGF0aXZlOw0KCXRvcDoxcHg7DQp9DQojYnRuWm9vbVRvMjpkaXNhYmxlZCB7DQogICAgYmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDUsICM3Nzc3NzcpLCBjb2xvci1zdG9wKDEsICNjY2NjY2MpKTsNCiAgICB0ZXh0LXNoYWRvdzowcHggMnB4IDFweCAjOTk5OTk5Ow0KICAgIGJvcmRlcjoxcHggc29saWQgIzY2NjY2NjsNCiAgICBib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCAjNTU1NTU1Ow0KICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDsNCn0NCiNidG5Qb3B1bGF0ZUF0dHJpYnV0ZXMyOmRpc2FibGVkIHsNCiAgICBiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wNSwgIzc3Nzc3NyksIGNvbG9yLXN0b3AoMSwgI2NjY2NjYykpOw0KICAgIHRleHQtc2hhZG93OjBweCAycHggMXB4ICM5OTk5OTk7DQogICAgYm9yZGVyOjFweCBzb2xpZCAjNjY2NjY2Ow0KICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4ICM1NTU1NTU7DQogICAgZm9udC13ZWlnaHQ6bm9ybWFsOw0KfQ0KI3Rlc3QgIHsNCiAgICBhbmltYXRpb246IGZhZGVpbiA0czsNCiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDRzOyAvKiBGaXJlZm94ICovDQogICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiA0czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi8NCiAgICAtby1hbmltYXRpb246IGZhZGVpbiA0czsgLyogT3BlcmEgKi8NCiAgICBoZWlnaHQ6IDEwMCU7DQogICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyOw0KICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsNCiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyOw0KICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7DQogICAgYmFja2dyb3VuZDogIzcwYmczMjsNCiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7DQogICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIHRvIGxlZnQgdG9wLCBncmVlbiwgcmVkKTsNCiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCggdG8gbGVmdCB0b3AsIGdyZWVuLCByZWQpOw0KICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoIHRvIGxlZnQgdG9wLCBncmVlbiwgcmVkKTsNCiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoIHRvIGxlZnQgdG9wLCBibHVlLCByZWQpOw0KICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggI2JiYmJiYiwgI2ZmZmZmZik7ICAgIA0KfQ0KQGtleWZyYW1lcyBmYWRlaW4gew0KICAgIGZyb20gew0KICAgICAgICBvcGFjaXR5OjA7DQogICAgfQ0KICAgIHRvIHsNCiAgICAgICAgb3BhY2l0eToxOw0KICAgIH0NCn0NCkAtbW96LWtleWZyYW1lcyBmYWRlaW4geyAvKiBGaXJlZm94ICovDQogICAgZnJvbSB7DQogICAgICAgIG9wYWNpdHk6MDsNCiAgICB9DQogICAgdG8gew0KICAgICAgICBvcGFjaXR5OjE7DQogICAgfQ0KfQ0KQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovDQogICAgZnJvbSB7DQogICAgICAgIG9wYWNpdHk6MDsNCiAgICB9DQogICAgdG8gew0KICAgICAgICBvcGFjaXR5OjE7DQogICAgfQ0KfQ0KQC1vLWtleWZyYW1lcyBmYWRlaW4geyAvKiBPcGVyYSAqLw0KICAgIGZyb20gew0KICAgICAgICBvcGFjaXR5OjA7DQogICAgfQ0KICAgIHRvIHsNCiAgICAgICAgb3BhY2l0eTogMTsNCiAgICB9DQp9DQoueGlEaXYgew0KCW1hcmdpbi1ib3R0b206IDdweDsNCgltYXJnaW4tdG9wOiA3cHg7DQoJZm9udC1mYW1pbHk6IFRhaG9tYTsNCglmb250LXdlaWdodDogYm9sZDsNCiAgICBtYXJnaW4tbGVmdDo1cHg7DQp9DQoueGlUZXh0ew0KCQliYWNrZ3JvdW5kLWNvbG9yOiAjRUVFOUJBOw0KfQ0KLnhpRGl2ew0KDQoJY29sb3I6ICM0MjQyRTY7DQp9DQoueGlEaXZDb250ZW50IHsNCiAgICBtYXJnaW4tdG9wOjVweDsNCiAgICBtYXJnaW4tcmlnaHQ6IDVweDsNCn0NCmxhYmVsIHsNCgltYXJnaW4tYm90dG9tOiAxMHB4Ow0KfQ0KLnN3aXRjaCB7DQogIHBvc2l0aW9uOiByZWxhdGl2ZTsNCiAgZGlzcGxheTogaW5saW5lLWJsb2NrOw0KICB3aWR0aDogNDBweDsNCiAgaGVpZ2h0OiAyNHB4Ow0KfQ0KDQouc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fQ0KDQouc2xpZGVyIHsNCiAgcG9zaXRpb246IGFic29sdXRlOw0KICBjdXJzb3I6IHBvaW50ZXI7DQogIHRvcDogMDsNCiAgbGVmdDogMDsNCiAgcmlnaHQ6IDA7DQogIGJvdHRvbTogMDsNCiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsNCiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7DQogIHRyYW5zaXRpb246IC40czsNCn0NCg0KLnNsaWRlcjpiZWZvcmUgew0KICBwb3NpdGlvbjogYWJzb2x1dGU7DQogIGNvbnRlbnQ6ICIiOw0KICBoZWlnaHQ6IDE2cHg7DQogIHdpZHRoOiAxNnB4Ow0KICBsZWZ0OiAycHg7DQogIGJvdHRvbTogNHB4Ow0KICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsNCiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXM7DQogIHRyYW5zaXRpb246IC41czsNCn0NCg0KaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgew0KICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NTMwOw0KfQ0KDQppbnB1dDpmb2N1cyArIC5zbGlkZXIgew0KICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7DQp9DQoNCmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7DQogIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpOw0KICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpOw0KICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7DQp9DQoNCi5zbGlkZXIucm91bmQ6YmVmb3JlIHsNCiAgYm9yZGVyLXJhZGl1czogNTAlOw0KICBiYWNrZ3JvdW5kOiAjRkZEMTAwOw0KfQ0KDQovKiBSb3VuZGVkIHNsaWRlcnMgKi8NCi5zbGlkZXIucm91bmQgew0KICBib3JkZXItcmFkaXVzOiAxNXB4Ow0KICBiYWNrZ3JvdW5kOiBncmF5Ow0KDQp9DQoNCi5sYmx7DQogICAgbWFyZ2luLWxlZnQ6NTBweDsNCiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOw0KICAgIGNvbG9yOiBibGFjazsNCiAgICBmb250LXdlaWdodDogbm9ybWFsOw0KfQ0KDQouc3R5bGUtMSBpbnB1dFt0eXBlPSJ0ZXh0Il0gew0KICBwYWRkaW5nOiAxMHB4Ow0KICBib3JkZXItcmFkaXVzOiA1cHg7DQogIGJvcmRlcjogc29saWQgMXB4ICNkY2RjZGM7DQogIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyIDAuM3M7DQp9DQppbnB1dFt0eXBlPSJ0ZXh0Il17DQoJYm9yZGVyLXJhZGl1czogNXB4Ow0KCXBhZGRpbmctbGVmdDogNXB4Ow0KfQ0KaW5wdXRbdHlwZT0idGV4dCJdOmZvY3VzLA0KaW5wdXRbdHlwZT0idGV4dCJdLmZvY3VzIHsNCiAgYm9yZGVyOiBzb2xpZCAxcHggIzcwNzA3MDsNCiAgYm9yZGVyLXJhZGl1czogNXB4Ow0KICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjOTY5Njk2Ow0KfQ0KbGFiZWwuZHJvcGRvd24gc2VsZWN0IHsNCglwYWRkaW5nOiA1cHggNDJweCA1cHggMTBweDsNCgliYWNrZ3JvdW5kOiAjY2RjZGYzOw0KCWNvbG9yOiAjMDAwOw0KCWJvcmRlcjogMXB4IHNvbGlkICNhYWE7DQoJYm9yZGVyLXJhZGl1czogMTBweDsNCglkaXNwbGF5OiBpbmxpbmUtYmxvY2s7DQoJLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOw0KCS1tb3otYXBwZWFyYW5jZTogbm9uZTsNCglhcHBlYXJhbmNlOiBub25lOw0KCWN1cnNvcjogcG9pbnRlcjsNCglvdXRsaW5lOiBub25lOw0KfQ0KbGFiZWwuZHJvcGRvd24gc2VsZWN0Oi1tb3otZm9jdXNyaW5nIHsNCgljb2xvcjogdHJhbnNwYXJlbnQ7DQoJdGV4dC1zaGFkb3c6IDAgMCAwICM0NDQ7DQp9DQpsYWJlbC5kcm9wZG93biBzZWxlY3Q6Oi1tcy1leHBhbmQgew0KCWRpc3BsYXk6IG5vbmU7DQp9DQpsYWJlbC5kcm9wZG93bjpiZWZvcmUgew0KCWNvbnRlbnQ6ICcnOw0KCXJpZ2h0OiA1cHg7DQoJdG9wOiAtN3B4Ow0KCXdpZHRoOiA3MHB4Ow0KCWJhY2tncm91bmQ6ICNmOGY4Zjg7DQoJcG9zaXRpb246IGFic29sdXRlOw0KCXBvaW50ZXItZXZlbnRzOiBub25lOw0KCWRpc3BsYXk6IGJsb2NrOw0KfQ0KbGFiZWwuZHJvcGRvd24geyBwb3NpdGlvbjogcmVsYXRpdmU7IH0NCmxhYmVsLmRyb3Bkb3duOmFmdGVyIHsNCgljb250ZW50OiAnPic7DQoJZm9udDogMTZweCBDb25zb2xhcywgbW9ub3NwYWNlOw0KCWNvbG9yOiAjNDQ0Ow0KCS13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOw0KCS1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOw0KCS1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7DQoJdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOw0KCXJpZ2h0OiAycHg7DQoJdG9wOiAtM3B4Ow0KCXBvc2l0aW9uOiBhYnNvbHV0ZTsNCglwb2ludGVyLWV2ZW50czogbm9uZTsNCgl3aWR0aDogMzVweDsNCglwYWRkaW5nOiAwIDAgNXB4IDA7DQoJdGV4dC1pbmRlbnQ6IDE0cHg7DQp9DQo=");

geocortex.framework.notifyLibraryDownload("TraceXI");
