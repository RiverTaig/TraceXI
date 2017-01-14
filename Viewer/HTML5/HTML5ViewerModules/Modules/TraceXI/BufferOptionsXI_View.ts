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
                this.app.command("XI_showBuffer_Changed").execute("ShowBuffer", $("#XI_showBuffer").val);
            });

            $("#XI_bufferSize")
                .on('change', () => {
                viewModel.sizeBuffer.set($('#XI_bufferSize').val());
                    this.app.command("XI_bufferSize_Changed").execute();
                })
                .on('input', () => {
                    viewModel.sizeBuffer.set($('#bufferSize').val());
                });

            $("#XI_bufferOpacity").on('mouseup', () => {
                viewModel.opacityBuffer.set($('#bufferOpacity').val());
                this.app.command("XI_bufferOpacity_Changed").execute();
            })
                .on('input', () => {
                    viewModel.opacityBuffer.set($('#bufferOpacity').val());
                });

            $("#XI_bufferColor")
                .spectrum({
                    preferredFormat: "hex"
                })
                .on('change.spectrum', () => {
                this.app.command("XI_bufferColor_Changed").execute();
                })
                .on('hide.spectrum', () => {
                this.app.command("XI_bufferColor_Changed").execute();
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
                    $("#bufferColor").spectrum("set", userPrefs.buffer.color);
                    $("#bufferOpacity").val(userPrefs.buffer.opacity);
                    $('#bufferSize').val(userPrefs.bufferSize);

                    break;
            }
        }
    }
}