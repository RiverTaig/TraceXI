/// <reference path="../../Resources/Libs/Framework.d.ts" />
/// <reference path="../../Resources/Libs/Mapping.Infrastructure.d.ts" />

module TraceXI {

    export class BufferOptionsXI_View extends geocortex.framework.ui.ViewBase {

        app: geocortex.essentialsHtmlViewer.ViewerApplication;

        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, lib: string) {
            super(app, lib);
            //alert("constructor of buffer view");
        }

        attach(viewModel?: BufferOptionsXI_ViewModel): void {
            super.attach(viewModel);
            this.app.command("on_BufferOptionsXI_ViewModel_View_Notify").register(this, this.on_ViewModel_View_Notify);

            $("#XI_showBuffer").on('change', () => {
                this.app.command("XI_UpdatePrefsCookie").execute("bufferShow", ($("#XI_showBuffer").attr('checked') === 'checked' ));
            });

            $("#XI_bufferSize")
                .on('change', () => {
                viewModel.sizeBuffer.set($('#XI_bufferSize').val());
                this.app.command("XI_UpdatePrefsCookie").execute("bufferSize", $('#XI_bufferSize').val());
                })
                .on('input', () => {
                this.app.command("XI_UpdatePrefsCookie").execute("bufferSize", $('#XI_bufferSize').val());
                });

            $("#XI_bufferOpacity").on('change', () => {
                viewModel.opacityBuffer.set($('#XI_bufferOpacity').val());
                this.app.command("XI_UpdatePrefsCookie").execute("bufferOpacity", $('#XI_bufferOpacity').val());
            })
                .on('input', () => {
                this.app.command("XI_UpdatePrefsCookie").execute("bufferOpacity", $('#XI_bufferOpacity').val());
                });

            $("#XI_bufferColor")
                .spectrum({
                    preferredFormat: "hex"
                })
                .on('change.spectrum', () => {
                this.app.command("XI_UpdatePrefsCookie").execute("bufferColor", $('#XI_bufferColor').spectrum("get").toHexString());
                })
                .on('hide.spectrum', () => {
                this.app.command("XI_UpdatePrefsCookie").execute("bufferColor", $('#XI_bufferColor').spectrum("get").toHexString());
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
        }

        on_ViewModel_View_Notify(poperty: string, data: any) {
            switch (poperty) {
                case "InitProperties":
                    //data is userPrefs
                    let userPrefs = data;
                    $("#XI_bufferColor").spectrum("set", userPrefs.bufferColor);
                    $("#XI_bufferOpacity").val(userPrefs.bufferOpacity );
                    $('#XI_bufferSize').val(userPrefs.bufferSize);
                    
                    break;
            }
        }
    }
}