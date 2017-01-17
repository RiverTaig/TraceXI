/// <reference path="../Libs/Framework.d.ts" />
/// <reference path="../Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../Libs/jquery.d.ts" />
/// <reference path="../Libs/jqueryui.d.ts" />
/// <reference path="../libs/jquery.colorpicker.d.ts" />
/// <reference path="../Libs/arcgis-js-api.d.ts" />
import eg = esri.geometry;
import et = esri.tasks;
declare module TraceXI {
    class FindFeederView extends geocortex.framework.ui.ViewBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        _tieDeviceLayer: esri.layers.GraphicsLayer;
        states: string[];
        _viewModel: FindFeederViewModel;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        PopulateFeederList(): void;
        setTieDeviceData(): void;
        DrawTieDevices(): void;
        ClearTieDevices(): void;
        attach(viewModel?: FindFeederViewModel): void;
    }
}
declare function AttachTypeAhead(): void;
declare module TraceXI {
    class FindFeederViewModel extends geocortex.framework.ui.ViewModelBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        numRadius: Observable<number>;
        tieDevices: Observable<any[]>;
        tieDeviceEID: Observable<string>;
        tieDeviceAddress: Observable<string>;
        showArrows: Observable<boolean>;
        downstreamColor: Observable<string>;
        feederColor: Observable<string>;
        upstreamColor: Observable<string>;
        showTraceUpDown: Observable<boolean>;
        zoomToUpstream: Observable<boolean>;
        zoomToDownstream: Observable<boolean>;
        autoZoom: Observable<boolean>;
        traceFromCache: Observable<boolean>;
        zoomToSource: Observable<string>;
        urlToLayerWeWantToSelect: Observable<string>;
        selectedFeeder: Observable<string>;
        ffLoadA: Observable<string>;
        ffLoadB: Observable<string>;
        ffLoadC: Observable<string>;
        ffLoadTotal: Observable<string>;
        ffCustomersA: Observable<string>;
        ffCustomersB: Observable<string>;
        ffCustomersC: Observable<string>;
        ffCustomersTotal: Observable<string>;
        numBuffer: Observable<number>;
        ffConductorTotal: Observable<string>;
        numBufferSize: Observable<number>;
        ffPriUG: Observable<number>;
        ffSecUG: Observable<string>;
        ffPriOH: Observable<number>;
        ffSecOH: Observable<string>;
        ffUGTotal: Observable<string>;
        ffOHTotal: Observable<string>;
        data: Observable<any>;
        ffPriTotal: Observable<string>;
        ffSecTotal: Observable<string>;
        ffFlowDirectionTraceMode: Observable<boolean>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        initialize(config: any): void;
    }
}
declare module TraceXI {
    class BufferOptionsXI_View extends geocortex.framework.ui.ViewBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        attach(viewModel?: BufferOptionsXI_ViewModel): void;
        on_ViewModel_View_Notify(poperty: string, data: any): void;
    }
}
declare module TraceXI {
    class BufferOptionsXI_ViewModel extends geocortex.framework.ui.ViewModelBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        showBuffer: Observable<boolean>;
        sizeBuffer: Observable<number>;
        opacityBuffer: Observable<number>;
        colorBuffer: Observable<string>;
        _userPrefs: any;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        initialize(config: any): void;
        initBufferOptions(userPrefs: any): void;
    }
}
declare module TraceXI {
    class TraceXI_Module extends geocortex.framework.application.ModuleBase {
        _dojoCookie: any;
        _prefsCookieName: string;
        _mapClickHandler: esri.Handle;
        _app: geocortex.essentialsHtmlViewer.ViewerApplication;
        _cacheMode: boolean;
        _traceOptionsXI_ViewModel: TraceOptionsXI_ViewModel;
        _bufferOptionsXI_ViewModel: BufferOptionsXI_ViewModel;
        _currentTraceType: string;
        _electricTraceUrl: any;
        _userPrefs: any;
        _bufferLayerId: string;
        traceResultPointSymbol: any;
        traceResultLineSymbol: any;
        _traceExtent: any;
        _currentTraceResults: Object[];
        _traceTimestamp: number;
        _maxFeatureCount: number;
        traceFlagPath: string;
        _bufferGraphicsLayer: esri.layers.GraphicsLayer;
        _traceCollection: any;
        _zoomExtent: any;
        _tieDevices: any[];
        _size: number;
        _data: any;
        _feederExtent: esri.geometry.Extent;
        _upstreamEIDS: any;
        _downstreamEIDS: any;
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        downstreamLayer: esri.layers.GraphicsLayer;
        upstreamstreamLayer: esri.layers.GraphicsLayer;
        feederLayer: esri.layers.GraphicsLayer;
        _feederGraphic: esri.Graphic;
        _upstreamGraphic: esri.Graphic;
        _downstreamGraphic: esri.Graphic;
        _findFeederViewModel: any;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        initialize(config: any): void;
        XI_UpdatePrefsCookie(propName: string, propValue: string): void;
        initializeUserPrefs(config: any): void;
        XI_ClearTraceResults(): void;
        XI_DownstreamTrace(geometry: esri.geometry.Geometry): void;
        XI_executeTrace(geometry: esri.geometry.Geometry, traceType: string, traceUrl: string): void;
        handleResultsDeferred(jsonString: string): dojo.Deferred;
        hexToRgb(hex: string): {
            r: number;
            g: number;
            b: number;
        };
        FindFeedermapExtentChangeHandler(context: any, evt: any): void;
        FindFeederMapClickHandler(context: any, evt: any): void;
        drawUpstreamDownstreamLine(refresh: boolean): void;
        getJson(): void;
        getJson2(context: TraceXI_Module, selectedFeeder: string): void;
        zoomToFeederClick(): void;
        zoomToFeeder(forceZoom: boolean): void;
        drawFeederGraphics(): void;
        addToTraceResults(collection: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection): void;
        initializeServiceConfig(): void;
        getEssentialsLayer(name: string, traceType: string): geocortex.essentials.Layer;
        ApplyBufferOptions(skipZoom: boolean): any;
        ShowBuffer(traceGeometries: any): void;
        getEssentialsMapServiceByTraceType(traceType: string): geocortex.essentials.MapService;
        mapServiceSupportsTraceType(svc: geocortex.essentials.MapService, traceTypeToFind: string): boolean;
        initGraphicsLayers(): void;
        updateBufferSymbology(): void;
    }
}
declare module TraceXI {
    class TraceOptionsXI_View extends geocortex.framework.ui.ViewBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        attach(viewModel?: TraceOptionsXI_ViewModel): void;
        on_ViewModel_View_Notify(poperty: string, data: any): void;
    }
}
declare module TraceXI {
    class TraceOptionsXI_ViewModel extends geocortex.framework.ui.ViewModelBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        _userPrefs: any;
        _modelName: Observable<string>;
        _fields: Observable<string>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        initialize(config: any): void;
        initTraceOptions(userPrefs: any): void;
    }
}
