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