/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />

module TraceXI {

    export class TraceOptionsXI_ViewModel extends geocortex.framework.ui.ViewModelBase {

        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        _userPrefs: any = null;
        _modelName: Observable<string> = new Observable<string>();
        _fields: Observable<string> = new Observable<string>();


        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string) {
            super(app, lib);
            
            //alert("viewmodel  constructor");
        }



        initialize(config: any): void {
            console.log("TraceXI initialize traceOptions view model (observables set here and view given userPrefs)");
            //Observables
            /*this.showBuffer.set(userPrefs.buffer.show);
            this.opacityBuffer.set(userPrefs.buffer.opacity);
            this.sizeBuffer.set(userPrefs.buffer.size);
            this.colorBuffer.set(userPrefs.buffer.color);*/

            //Stuff that doesn't support databinding needs to call init on the view
            this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").execute("InitProperties", config);
            
        }

        public initTraceOptions(userPrefs: any) {
            console.log("TraceXI init Trace Options");
            this._userPrefs = userPrefs;
            //Observables
            this._modelName.set(userPrefs.modelName);
            this._fields.set(userPrefs.fields);

            //Stuff that doesn't support databinding needs to call init on the view
            this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").execute("InitProperties", userPrefs);
        }


    }
} 