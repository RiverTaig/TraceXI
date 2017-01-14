/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />

module TraceXI {

    export class TraceOptionsXI_ViewModel extends geocortex.framework.ui.ViewModelBase {

        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        _userPrefs: any = null;
        _modelName: Observable<string> = new Observable<string>();


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
            console.log("TraceXI initBufferOptions");
            this._modelName.set(userPrefs.modelName);

            //Stuff that doesn't support databinding needs to call init on the view
            this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").execute("InitProperties", userPrefs);
        }

        /*on_Model_ViewModel_Notify(whatChanged: string, data : any): void {
            switch (whatChanged) {
                case "PhasesToTrace":
                    //Update the View
                    this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").execute("PhasesToTrace", data);
                    break;
            }
        }*/

        /*on_View_ViewModel_Notify(whatChanged: string, data: any): void {
            switch (whatChanged) {
                case "PhasesToTrace":
                    //Update the model
                    this.app.command("on_TraceOptionsXI_ViewModel_Model_Notify").execute("PhasesToTrace", data);
                    break;
                case "ModelName":
                    //Update the model
                    this.app.command("on_TraceOptionsXI_ViewModel_Model_Notify").execute("ModelName", data);
                    break;
                case "ReturnByClass":
                    //Update the model
                    this.app.command("on_TraceOptionsXI_ViewModel_Model_Notify").execute("ReturnByClass", data);
                    break;
                case "UnionOnServer":
                    //Update the model
                    this.app.command("on_TraceOptionsXI_ViewModel_Model_Notify").execute("UnionOnServer", data);
                    break;
            }
        }*/
    }
} 