/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />

module TraceXI {

    export class BufferOptionsXI_ViewModel extends geocortex.framework.ui.ViewModelBase {

        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        //viewReference: TraceXI_View = null;
        //modelReference: TraceXI_Model = null;

        //Buffer Observables
        showBuffer: Observable<boolean> = new Observable<boolean>();
        sizeBuffer: Observable<number> = new Observable<number>();
        opacityBuffer: Observable<number> = new Observable<number>();
        colorBuffer: Observable<string> = new Observable<string>();
        _userPrefs: any = null;

        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string) {
            super(app, lib);
            
            //alert("viewmodel  constructor");
        }



        initialize(config: any): void {
            //alert("1");//on_BufferOptionsXI_View_ViewModel_Notify
            //this.app.command("on_BufferOptionsXI_Model_ViewModel_Notify").register(this, this.on_Model_ViewModel_Notify);
            //this.app.command("on_BufferOptionsXI_View_ViewModel_Notify").register(this, this.on_View_ViewModel_Notify);
            this.app.command("XI_showBuffer_Changed").register(this, this.executeshowBuffer_Changed);
            this.app.command("XI_bufferSize_Changed").register(this, this.XI_bufferSize_Changed);
            this.app.command("XI_bufferColor_Changed").register(this, this.executebufferColor_Changed);
            this.app.command("XI_bufferOpacity_Changed").register(this, this.executebufferOpacity_Changed);
            //alert("2");
            
        }

        initBufferOptions(userPrefs: any): void {
            this._userPrefs = userPrefs;
            //Observables
            console.log("TraceXI initBufferOptions");
            this.showBuffer.set(userPrefs.buffer.show);
            this.opacityBuffer.set(userPrefs.buffer.opacity);
            this.sizeBuffer.set(userPrefs.bufferSize);
            this.colorBuffer.set(userPrefs.buffer.color);

            //Stuff that doesn't support databinding needs to call init on the view
            this.app.command("on_BufferOptionsXI_ViewModel_View_Notify").execute("InitProperties", userPrefs);

        }

        executeshowBuffer_Changed(newValue : boolean): void {
            //this._userPrefs.buffer.show = $('#showBuffer').prop("checked");
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("ApplyBufferOptions", newValue);
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("UpdatePrefsCookie", true);

        }

        XI_bufferSize_Changed(text: string): void {
            this._userPrefs.buffer.size = $('#XI_bufferSize').val();
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("ApplyBufferOptions", true);
            this.app.command("XI_UpdatePrefsCookie").execute("bufferSize", $('#XI_bufferSize').val());
        }

        executebufferOpacity_Changed(): void {
            this._userPrefs.buffer.opacity = $('#bufferOpacity').val();
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("ApplyBufferOptions", true);
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("UpdatePrefsCookie", true);
        }

        executebufferColor_Changed(): void {
            this._userPrefs.buffer.color = $('#bufferColor').spectrum("get").toHexString();
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("ApplyBufferOptions", true);
            this.app.command("on_BufferOptionsXI_ViewModel_Model_Notify").execute("UpdatePrefsCookie", true);
        }



    }
} 