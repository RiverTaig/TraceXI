/// <reference path="../Libs/Framework.d.ts" />
/// <reference path="../Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../Libs/arcgis-js-api.d.ts" />
/// <reference path="../Libs/jquery.d.ts" />
/// <reference path="../Libs/jqueryui.d.ts" />
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
        executeshowBuffer_Changed(newValue: boolean): void;
        XI_bufferSize_Changed(text: string): void;
        executebufferOpacity_Changed(): void;
        executebufferColor_Changed(): void;
    }
}
declare module TraceXI {
    class TraceXI_Module extends geocortex.framework.application.ModuleBase {
        _dojoCookie: any;
        _prefsCookieName: string;
        _app: geocortex.essentialsHtmlViewer.ViewerApplication;
        _traceOptionsXI_ViewModel: TraceOptionsXI_ViewModel;
        _bufferOptionsXI_ViewModel: BufferOptionsXI_ViewModel;
        _currentTraceType: string;
        _electricTraceUrl: any;
        _userPrefs: any;
        _bufferLayerId: string;
        traceResultPointSymbol: any;
        traceResultLineSymbol: any;
        _currentTraceResults: Object[];
        _traceTimestamp: number;
        initialBufferSettings: any;
        _maxFeatureCount: number;
        traceFlagPath: string;
        _bufferGraphicsLayer: esri.layers.GraphicsLayer;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        initialize(config: any): void;
        XI_UpdatePrefsCookie(propName: string, propValue: string): void;
        initializeUserPrefs(config: any): void;
        XI_ClearTraceResults(): void;
        XI_DownstreamTrace(geometry: esri.geometry.Geometry): void;
        XI_executeTrace(geometry: esri.geometry.Geometry, traceType: string, traceUrl: string): void;
        initializeServiceConfig(): void;
        getEssentialsLayer(name: string, traceType: string): geocortex.essentials.Layer;
        ApplyBufferOptions(skipZoom: boolean): void;
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
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string);
        initialize(config: any): void;
        initTraceOptions(userPrefs: any): void;
    }
}
