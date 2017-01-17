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

        attach(viewModel?: TraceOptionsXI_ViewModel): void {
            super.attach(viewModel);
            this.app.command("on_TraceOptionsXI_ViewModel_View_Notify").register(this, this.on_ViewModel_View_Notify);
            console.log("TraceXI attach TraceOptions");

            $("#traceXI_Phase").on('change', () => {
                let selectedText = $("#traceXI_Phase :selected").text();
                let phase = selectedText.substring(0, selectedText.indexOf(" "));
                this.app.command("XI_UpdatePrefsCookie").execute("phasesToTrace", phase );
            });
            $("#btnZoomTo").on('click', () => {
                this.app.command("XI_ZoomToResults").execute();
            });
            $("#btnPopulateAttributes").on('click', () => {
                this.app.command("XI_PopulateAttributes").execute();
            });

            $("input:checkbox").on('change', (e: JQueryEventObject) => {
                
                let x: string = $(e.currentTarget)[0].id;
                //alert(x);
            });

            $("#cboXIPresets").on('change', () => {
                let selectedOption: string = $('#cboXIPresets option:selected').text();
                this.app.command("XI_UpdatePrefsCookie").execute("Presets", selectedOption);
                let fieldsToRetrieve : string = "*";
                switch (selectedOption) {
                    case "All Fields" :
                        break;
                    case "8 Layers 44 Fields":
                        fieldsToRetrieve  = "Transformer.FacilityID,Transformer.RatedKVA,Transformer.PhaseDesignation,Transformer.OperatingVoltage,Transformer.StreetAddress," +
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
                this.app.command("XI_UpdatePrefsCookie").execute("fields", $("#xiFields").val());
            });

            $("#xiModelName").on("change paste keyup", () => {
                this.app.command("XI_UpdatePrefsCookie").execute("modelName", $("#xiModelName").val());
            });

            $("#xiFields").on("change paste keyup", () => {
                this.app.command("XI_UpdatePrefsCookie").execute("fields", $("#xiFields").val());
            });

            this.app.event("TracingOptions_ViewModelAttached").publish(viewModel);
        }

        on_ViewModel_View_Notify(poperty: string, data: any) {
            switch (poperty) {
                case "InitProperties":
                    //data is userPrefs
                    let userPrefs = data;
                    $('#xi_AutoZoom').prop('checked', userPrefs.autoZoom);
                    $('#xi_AutoPopulate').prop('checked', userPrefs.autoPopulate);
                    //disable buttons
                    $("#btnZoomTo").prop("disabled", true);
                    $("#btnPopulateAttributes").prop("disabled", true);
                    break;
            }
        }

        


    }
}