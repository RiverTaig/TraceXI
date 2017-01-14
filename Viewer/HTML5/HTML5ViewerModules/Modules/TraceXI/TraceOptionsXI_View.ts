/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />
/// <reference path="../../resources/libs/jquery.d.ts" />
/// <reference path="../../resources/libs/jqueryui.d.ts" />

module TraceXI {
    export class TraceOptionsXI_View extends geocortex.framework.ui.ViewBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;

        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string) {
            super(app, lib);
            //on_TraceOptionsXI_ViewModel_View_Notify
        }

        //Compiles Dec 22 4:22
        attach(viewModel?: TraceOptionsXI_ViewModel): void {
            super.attach(viewModel);
            this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").register(this, this.on_ViewModel_View_Notify);
            console.log("TraceXI attach TraceOptions");

            $("#traceXI_Phase").on('change', () => {
                this.app.command("XI_UpdatePrefsCookie").execute("PhasesToTrace", $(this).text());
            });

            $("#xiModelName").on("change paste keyup", () => {
                this.app.command("XI_UpdatePrefsCookie").execute("modelName", $("#xiModelName").val());
            });

            this.app.event("TracingOptions_ViewModelAttached").publish(viewModel);
        }

        on_ViewModel_View_Notify(poperty: string, data: any) {
            switch (poperty) {
                case "InitProperties":
                    //data is userPrefs
                    let userPrefs = data;
                    break;
            }
        }

        


    }
}