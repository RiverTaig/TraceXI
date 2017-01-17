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
            lineSymbolUp.setColor(new esri.Color([0, 255, 0, 0.5]));
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