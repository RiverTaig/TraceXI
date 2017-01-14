using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Collections.Specialized;

using System.Runtime.InteropServices;

using ESRI.ArcGIS.esriSystem;
using ESRI.ArcGIS.Server;
using ESRI.ArcGIS.Geometry;
using ESRI.ArcGIS.Geodatabase;
using ESRI.ArcGIS.Carto;
using ESRI.ArcGIS.SOESupport;


//TODO: sign the project (project properties > signing tab > sign the assembly)
//      this is strongly suggested if the dll will be registered using regasm.exe <your>.dll /codebase


namespace TraceXI_SOE
{
    [ComVisible(true)]
    [Guid("9fb8929c-8a93-4c7b-9217-ddad53449049")]
    [ClassInterface(ClassInterfaceType.None)]
    [ServerObjectExtension("MapServer",//use "MapServer" if SOE extends a Map service and "ImageServer" if it extends an Image service.
        AllCapabilities = "",
        DefaultCapabilities = "",
        Description = "",
        DisplayName = "TraceXI_SOE",
        Properties = "",
        SupportsREST = true,
        SupportsSOAP = false)]
    public class TraceXI_SOE : IServerObjectExtension, IObjectConstruct, IRESTRequestHandler
    {
        private string soe_name;

        private IPropertySet configProps;
        private IServerObjectHelper serverObjectHelper;
        private ServerLogger logger;
        private IRESTRequestHandler reqHandler;

        public TraceXI_SOE()
        {
            soe_name = this.GetType().Name;
            logger = new ServerLogger();
            reqHandler = new SoeRestImpl(soe_name, CreateRestSchema()) as IRESTRequestHandler;
        }

        #region IServerObjectExtension Members
        IServerObject _serverObject = null;
        public void Init(IServerObjectHelper pSOH)
        {
            serverObjectHelper = pSOH;
            _serverObject = pSOH.ServerObject;
        }

        public void Shutdown()
        {
        }

        #endregion

        #region IObjectConstruct Members

        public void Construct(IPropertySet props)
        {
            configProps = props;
        }

        #endregion

        #region IRESTRequestHandler Members

        public string GetSchema()
        {
            return reqHandler.GetSchema();
        }

        public byte[] HandleRESTRequest(string Capabilities, string resourceName, string operationName, string operationInput, string outputFormat, string requestProperties, out string responseProperties)
        {
            return reqHandler.HandleRESTRequest(Capabilities, resourceName, operationName, operationInput, outputFormat, requestProperties, out responseProperties);
        }

        #endregion

        private RestResource CreateRestSchema()
        {
            RestResource rootRes = new RestResource(soe_name, false, TraceHandler);

            RestOperation traceOper = new RestOperation("ElectricTrace",
                                                      new string[] { "startPoint", "traceType","protectiveDevices",
                                                      "phasesToTrace","drawComplexEdges", "includeEdges", "includeJunctions",
                                                      "extraInfo", "geometriesToRetrieve","tolerance",
                                                      "spatialReference","currentStatusProgID",
                                                      "fieldsToRetrieve","useModelNames",
                                                      "runInParallel","returnByClass",
                                                      "unionOnServer", "geometryPrecision"},
                                                      new string[] { "json" },
                                                      TraceOperHandler);


            /*

             * 
             *                 
             *  inputParameters.Add("startPoint",startPoint);//0
                inputParameters.Add("traceType",traceType);//1
                inputParameters.Add("protectiveDevices",protectiveDevices);//2
                inputParameters.Add("phasesToTrace",phasesToTrace == "" ? "Any" : phasesToTrace);//3
                inputParameters.Add("drawComplexEdges", drawComplexEdges == "" ? false : true);//4
                inputParameters.Add("includeEdges", includeEdges == "" ? true : false);//5
                inputParameters.Add("includeJunctions", includeJunctions == "" ? true : false);//6
                inputParameters.Add("returnAllAttributes", returnAllAttributes == "" ? false : true);//7
                inputParameters.Add("returnGeometries", returnGeometries == "" ? "*" : returnGeometries);//8  (all geometries is default)
                inputParameters.Add("tolerance", tolerance == "" ? 30 : Convert.ToInt16( tolerance));//9
                inputParameters.Add("spatialReference", spatialReference );//10
                inputParameters.Add("currentStatusProgID", currentStatusProgID);//11
                inputParameters.Add("fieldsToRetrive", fieldsToRetrive);//12
                inputParameters.Add("useModelNames", useModelNames );//13
                inputParameters.Add("runInParallel", runInParallel == "" ? false : true);//14
                inputParameters.Add("returnByClass", returnByClass == "" ? false : true);//15
                inputParameters.Add("unionOnServer", unionOnServer == "" ? false : true);//16
                inputParameters.Add("geometryPrecision", geometryPrecision == "" ? -1 : Convert.ToInt16(geometryPrecision));//17
             * */


            rootRes.operations.Add(traceOper);

            return rootRes;
        }

        private byte[] TraceHandler(NameValueCollection boundVariables, string outputFormat, string requestProperties, out string responseProperties)
        {
            responseProperties = null;

            JsonObject result = new JsonObject();
            result.AddString("Compile time", "1106");

            return Encoding.UTF8.GetBytes(result.ToJson());
            
        }


        public static IMapLayerInfo GetLayer(IServerObject source, int layerId)
        {
            if (layerId < 0)
                return (IMapLayerInfo)null;
            if (source == null)
                return (IMapLayerInfo)null;
            IMapLayerInfo mapLayerInfo = (IMapLayerInfo)null;
            IMapServer mapServer = (IMapServer)source;
            for (int Index = 0; Index < mapServer.MapCount; ++Index)
            {
                if (mapServer.GetServerInfo(mapServer.get_MapName(Index)).MapLayerInfos.Count > layerId)
                {
                    mapLayerInfo = mapServer.GetServerInfo(mapServer.get_MapName(Index)).MapLayerInfos.get_Element(layerId);
                    break;
                }
            }
            return mapLayerInfo;
        }

        private byte[] TraceOperHandler(NameValueCollection boundVariables,
                                                  JsonObject operationInput,
                                                      string outputFormat,
                                                      string requestProperties,
                                                  out string responseProperties)
        {
            responseProperties = null;
            try
            {
                //Transformer.FacilityID,Transformer.RatedKVA,Transformer.PhaseDesignation,Transformer.OperatingVoltage,Transformer.StreetAddress,Fuse.CustomerCount,Fuse.StreetAdress,Fuse.FacilityID,Fuse.OperatingVoltage,Fuse.Subtype,ServicePoint.ConsumptionType,ServicePoint.StreetAddress,ServicePoint.FacilityID,ServicePoint.GPSX,ServicePoint.GPSY,Switch.FacilityID,Switch.OperatingVoltage,Switch.StreetAddress,Switch.LastUser,Switch.Subtype,PrimaryOHElectricLineSegment.NetworkLevel,PrimaryOHElectricLineSegment.ConductorConfiguration,PrimaryOHElectricLineSegment.MeasuredLength,PrimaryOHElectricLineSegment.PhaseDesignation,PrimaryOHElectricLineSegment.NeutralSize,PrimaryUGElectricLineSegment.NetworkLevel,PrimaryUGElectricLineSegment.NeutralMaterial,PrimaryUGElectricLineSegment.MeasuredLength,PrimaryUGElectricLineSegment.PhaseDesignation,PrimaryUGElectricLineSegment.NeutralSize,SecOHElectricLineSegment.Subtype,SecOHElectricLineSegment.PhaseDesignation,SecOHElectricLineSegment.LengthSource,SecOHElectricLineSegment.FacilityID,SecOHElectricLineSegment.MeasuredLength
   

                string startPoint;string traceType; string protectiveDevices; string phasesToTrace; string drawComplexEdges;
                bool? includeEdges; bool? includeJunctions; long? startEID; string geometriesToRetrieve; long? tolerance; 
                string spatialReference; string currentStatusProgID; string fieldsToRetrieve; bool? useModelNames; bool? runInParallel;
                bool? unionOnServer; long? geometryPrecision; bool? returnByClass;

                #region Get Variables
                bool found = operationInput.TryGetString("startPoint", out startPoint);//0    (pass as blank (null) to indicate that a startEID should be used).
                //if (!found || string.IsNullOrEmpty(startPoint))
                //    throw new ArgumentNullException("startPoint");
                found = operationInput.TryGetString("traceType", out traceType);//1
                //if (!found || string.IsNullOrEmpty(traceType))
                //    throw new ArgumentNullException("traceType");
                found = operationInput.TryGetString("protectiveDevices", out protectiveDevices);//2
                found = operationInput.TryGetString("phasesToTrace", out phasesToTrace);//3
                found = operationInput.TryGetString("drawComplexEdges", out drawComplexEdges);//4
                found = operationInput.TryGetAsBoolean("includeEdges", out includeEdges);//5
                found = operationInput.TryGetAsBoolean("includeJunctions", out includeJunctions);//6
                found = operationInput.TryGetAsLong("startEID", out startEID);//7   used only if startEID is null
                found = operationInput.TryGetString("geometriesToRetrieve", out geometriesToRetrieve);//8
                found = operationInput.TryGetAsLong("tolerance", out tolerance);//9
                found = operationInput.TryGetString("spatialReference", out spatialReference);//10
                found = operationInput.TryGetString("currentStatusProgID", out currentStatusProgID);//11
                found = operationInput.TryGetString("fieldsToRetrieve", out fieldsToRetrieve);//12
                found = operationInput.TryGetAsBoolean("useModelNames", out useModelNames);//13
                found = operationInput.TryGetAsBoolean("runInParallel", out runInParallel);//14
                found = operationInput.TryGetAsBoolean("returnByClass", out returnByClass);//15
                found = operationInput.TryGetAsBoolean("unionOnServer", out unionOnServer);//16
                found = operationInput.TryGetAsLong("geometryPrecision", out geometryPrecision);//17

     

                Dictionary<string, object> inputParameters = new Dictionary<string, object>();
                inputParameters.Add("startPoint", startPoint == null ? "-9176020.284,3458035.565" : startPoint);//0
                inputParameters.Add("traceType",traceType == null ? "Downstream" : traceType );//1
                inputParameters.Add("protectiveDevices",protectiveDevices);//2
                inputParameters.Add("phasesToTrace",phasesToTrace == null ? "Any" : phasesToTrace);//3
                inputParameters.Add("drawComplexEdges", drawComplexEdges == null ? false : true);//4
                inputParameters.Add("includeEdges", includeEdges == null ? true : includeEdges);//5
                inputParameters.Add("includeJunctions", includeJunctions == null ? true : includeJunctions);//6
                inputParameters.Add("startEID", startEID == null ? -1 : startEID);//7
                inputParameters.Add("geometriesToRetrieve", geometriesToRetrieve == null ? "*" : geometriesToRetrieve);//8  (all geometries is default)
                inputParameters.Add("tolerance", tolerance == null ? 30 : tolerance );//9
                inputParameters.Add("spatialReference", spatialReference );//10
                inputParameters.Add("currentStatusProgID", currentStatusProgID);//11
                inputParameters.Add("fieldsToRetrieve", fieldsToRetrieve == null ? "Transformer.FacilityID,Transformer.RatedKVA,Transformer.PhaseDesignation,Transformer.OperatingVoltage,Transformer.StreetAddress,Fuse.CustomerCount,Fuse.StreetAdress,Fuse.FacilityID,Fuse.OperatingVoltage,Fuse.Subtype,ServicePoint.ConsumptionType,ServicePoint.StreetAddress,ServicePoint.FacilityID,ServicePoint.GPSX,ServicePoint.GPSY,Switch.FacilityID,Switch.OperatingVoltage,Switch.StreetAddress,Switch.LastUser,Switch.Subtype,PrimaryOHElectricLineSegment.NetworkLevel,PrimaryOHElectricLineSegment.ConductorConfiguration,PrimaryOHElectricLineSegment.MeasuredLength,PrimaryOHElectricLineSegment.PhaseDesignation,PrimaryOHElectricLineSegment.NeutralSize,PrimaryUGElectricLineSegment.NetworkLevel,PrimaryUGElectricLineSegment.NeutralMaterial,PrimaryUGElectricLineSegment.MeasuredLength,PrimaryUGElectricLineSegment.PhaseDesignation,PrimaryUGElectricLineSegment.NeutralSize,SecOHElectricLineSegment.Subtype,SecOHElectricLineSegment.PhaseDesignation,SecOHElectricLineSegment.LengthSource,SecOHElectricLineSegment.FacilityID,SecOHElectricLineSegment.MeasuredLength" : fieldsToRetrieve);//12
                inputParameters.Add("useModelNames", useModelNames == null ? true : false );//13
                inputParameters.Add("runInParallel", runInParallel == null ? true : false);//14
                inputParameters.Add("returnByClass", returnByClass == null ? true : false);//15
                inputParameters.Add("unionOnServer", unionOnServer == null ? true : false);//16
                inputParameters.Add("geometryPrecision", geometryPrecision == null ? -1 : geometryPrecision);//17
                
                #endregion


                IMapServer map = (IMapServer)_serverObject;
                IMapServer3 mapServer = (IMapServer3)_serverObject;
                IMapServerDataAccess da = mapServer as IMapServerDataAccess;
                
                IFeatureClass fc = (IFeatureClass)da.GetDataSource(mapServer.DefaultMapName, 0);
                IWorkspace ws = (fc as IDataset).Workspace;

                //JsonObject result = new JsonObject();
                ElectricTrace elecTrace = new ElectricTrace();
                byte[] results = elecTrace.ElectricTraceResult(ws, inputParameters);
                return results;
 
                //result.AddString("layer", layer0Name);
                //result.AddString("field", field0Name);

                //return Encoding.UTF8.GetBytes(result.ToJson());

            }
            catch (Exception ex)
            {
                JsonObject result = new JsonObject();
                result.AddString("error", ex.ToString());

                return Encoding.UTF8.GetBytes(result.ToJson());
            }
        }


    }
}
