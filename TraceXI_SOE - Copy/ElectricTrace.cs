using System;
using System.Collections;
using System.Collections.Generic;
using System.Xml;
using System.IO;
using Newtonsoft.Json;
using System.Runtime.InteropServices;
using System.Configuration;
using System.Linq;
using System.Text;

using ESRI.ArcGIS.Geodatabase;
using ESRI.ArcGIS.SOESupport;
using ESRI.ArcGIS.Geometry;
using ESRI.ArcGIS.esriSystem;
using Miner.Interop;
using Miner.Framework.Trace;

namespace TraceXI_SOE
{
    class ElectricTrace
    {

        private static IGeometricNetwork _geomNet = null;
        IWorkspace _workspace = null;
        public byte[] ElectricTraceResult(IWorkspace ws,  Dictionary<string, object> inputParams)
        {
            _workspace = ws;
            if (inputParams["traceType"].ToString().ToUpper() == "DOWNSTREAM")
            {
                return CreateDownstreamJSON(inputParams);
            }
            return null;
        }
        //-9168147.3,3463323
        //http://win-o7h4l8voqt9.arcfmsolution.com/arcgis104/rest/services/ArcFMMobile/SE_ElectricDistributionMobile/MapServer/exts/ArcFMMapServer/Electric%20Trace?startPoint=-9168147.3%2C3463323&traceType=Downstream&protectiveDevices=&phasesToTrace=Any&drawComplexEdges=False&includeEdges=True&includeJunctions=True&returnAttributes=True&returnGeometries=True&tolerance=100&spatialReference=&currentStatusProgID=&f=pjson
        private byte[] CreateDownstreamJSON(Dictionary<string,object> inputParams)
        {

            try
            {
                IGeometricNetwork geomNet;
                DateTime dtStart;
                INetElements netEl;
                IEnumNetEID edgeEnum;
                IEnumNetEID juncEnum;
                dtStart = DateTime.Now;
                RunDownstreamTrace(inputParams["startPoint"].ToString(), out geomNet, out netEl, out edgeEnum, out juncEnum, inputParams);
                DateTime dtEnd = DateTime.Now;
                double secs = (dtEnd - dtStart).TotalSeconds;
                //Console.WriteLine("Trace Time = " + secs);
                Dictionary<int, HashSet<int>> fcToOIDS = GetResultantObjectIDS(netEl, edgeEnum, juncEnum);
                dtStart = DateTime.Now;
                StringBuilder sb = new StringBuilder();
                StringWriter sw = new StringWriter(sb);
                string fieldsToGet = inputParams["fieldsToRetrieve"].ToString();
                List<string> fieldsToGetList = fieldsToGet.Split(',').ToList();
                HashSet<string> fieldsToGetHash = new HashSet<string>();
                for(int i = 0 ; i < fieldsToGetList.Count; i++)
                {
                    fieldsToGetHash.Add( fieldsToGetList[i].ToUpper());
                }
                using (JsonWriter writer = new JsonTextWriter(sw))
                {
                    writer.WriteStartObject();
                    {
                        writer.WritePropertyName("results");
                        writer.WriteStartArray();
                        {

                            foreach (KeyValuePair<int, HashSet<int>> kvp in fcToOIDS)
                            {
                                /*if (classesWeCareAbout.Contains(kvp.Key) == false)
                                {
                                    //continue;
                                }*/
                                writer.WriteStartObject();
                                {
                                    IFeatureClass feClass = ((IFeatureClassContainer)geomNet).get_ClassByID(kvp.Key);
                                    int[] oidsToGet = kvp.Value.ToArray();
                                    WriteSimpleProperties(writer, feClass);
                                    WriteSpatialReference(writer);
                                    WriteFieldAliases(writer, feClass, fieldsToGetHash);
                                    Dictionary<int, string> fieldNameDict = new Dictionary<int, string>();
                                    WriteFields(writer, feClass, ref fieldNameDict, fieldsToGetHash);
                                    WriteFeatures(writer, feClass, oidsToGet, fieldNameDict, fieldsToGetHash, inputParams["geometriesToRetrieve"].ToString());
                                }
                                writer.WriteEndObject();
                            }
                        }
                        writer.WriteEndArray();
                    }
                    writer.WriteEndObject();
                    //writer.WriteEnd();
                }
                byte[] array = Encoding.UTF8.GetBytes(sw.ToString());
                return array;

                /*dtEnd = DateTime.Now;
                TimeSpan ts = dtEnd - dtStart;
                secs = ts.TotalSeconds;
                Console.WriteLine("Time for JSON = " + secs);*/

            }
            catch (Exception ex)
            {
                byte[] array = Encoding.UTF8.GetBytes(ex.ToString());
                return array;
            }
            finally
            {
            }
            //return null;
        }

        private static Dictionary<int, HashSet<int>> GetResultantObjectIDS(INetElements netEl, IEnumNetEID edgeEnum, IEnumNetEID juncEnum)
        {
            Dictionary<int, HashSet<int>> fcToOIDS = new Dictionary<int, HashSet<int>>();//Key is ClassID, value is all OIDS in trace
            List<IEnumNetEID> enumNetEIDS = new List<IEnumNetEID> { edgeEnum, juncEnum };
            HashSet<string> classID_OIDFound = new HashSet<string>();
            foreach (IEnumNetEID enumNetEID in enumNetEIDS)
            {
                enumNetEID.Reset();
                int eid = enumNetEID.Next();
                while (eid > 0)
                {
                    int userClassID = -1; int userID = -1; int userSubID = -1;
                    netEl.QueryIDs(eid, enumNetEID.ElementType, out userClassID, out userID, out userSubID);
                    if (fcToOIDS.ContainsKey(userClassID) == false)
                    {
                        fcToOIDS.Add(userClassID, new HashSet<int>());
                    }
                    fcToOIDS[userClassID].Add(userID);
                    eid = enumNetEID.Next();
                }
            }
            return fcToOIDS;
        }

        private  string RunDownstreamTrace(string startPoint, out IGeometricNetwork geomNet, out INetElements netEl, out IEnumNetEID edgeEnum, out IEnumNetEID juncEnum, Dictionary<string,object> inputParams)
        {
            //startPoint = "-9180488.711,3460151.459";
            //startPoint = "-9180379.822,3460191.927";
            geomNet = GetGeometricNetwork("ElecGeomNet");

            int startEID = Convert.ToInt16(inputParams["startEID"]);
            if(startEID == -1)
            {
                startEID = GetStartEID(startPoint, geomNet, Convert.ToInt16(inputParams["tolerance"]));
            }
            //propSet.GetAllProperties(out names, out values1);
            Miner.Interop.SetOfPhases phaseToTrace = GetPhasesToTraceOn(inputParams);

            netEl = (INetElements)geomNet.Network;
            INetwork network = (INetwork)geomNet.Network;

            //Set up the barriers (this uses the network analysis ext, although it could be rewritten so that it did not)
            int[] barrierJuncs = new int[0];
            int[] barrierEdges = new int[0];

            //Call the trace
            IMMTracedElements tracedJunctions;
            IMMTracedElements tracedEdges;
            IMMElectricTraceSettings mmElectricTraceSettings = new MMElectricTraceSettingsClass();
            IMMElectricTracing mmElectricTracing = new MMFeederTracerClass();

            mmElectricTracing.TraceDownstream(
                geomNet, //Geometric Network
                mmElectricTraceSettings, //Trace Settings
                null, //Implementation of IMMCurrentStatus (no code in this case)
                startEID, //EID of start features
                esriElementType.esriETEdge, //Type of feature
                phaseToTrace, //Phases to trace on 
                mmDirectionInfo.establishBySourceSearch, //How to find source
                0, //Upstream neighbor (not used here)
                esriElementType.esriETNone, //Upstream neighbor type (not used here)
                barrierJuncs, // Junction barriers
                barrierEdges,//Edge barriers
                false, //Exclude open devices
                out tracedJunctions, //Resultant junctions
                out tracedEdges); //Resultant edges

            edgeEnum = NetworkHelper.GetEnumNetEID(network, tracedEdges, esriElementType.esriETEdge);
            juncEnum = NetworkHelper.GetEnumNetEID(network, tracedJunctions, esriElementType.esriETJunction);
            return startPoint;
        }

        private static SetOfPhases GetPhasesToTraceOn(Dictionary<string, object> inputParams)
        {
            string phasesToTrace = inputParams["phasesToTrace"].ToString().ToUpper();
            Miner.Interop.SetOfPhases phaseToTrace = SetOfPhases.abc;
            switch (phasesToTrace)
            {
                case "A":
                    phaseToTrace = SetOfPhases.a;
                    break;
                case "B":
                    phaseToTrace = SetOfPhases.b;
                    break;
                case "C":
                    phaseToTrace = SetOfPhases.c;
                    break;
                case "AB":
                    phaseToTrace = SetOfPhases.ab;
                    break;
                case "AC":
                    phaseToTrace = SetOfPhases.ac;
                    break;
                case "BC":
                    phaseToTrace = SetOfPhases.bc;
                    break;
                case "ABC":
                    phaseToTrace = SetOfPhases.abc;
                    break;
                case "any":
                    phaseToTrace = SetOfPhases.abc;
                    break;
            }
            return phaseToTrace;
        }

        private static void WriteFeatures(JsonWriter writer, IFeatureClass feClass, int[] oidsToGet, Dictionary<int, string> fieldNameDict,HashSet<string> fieldsToGetList,string geometriesToReturn)
        {
            IFeatureCursor feCur = null;
            try
            {
                feCur = feClass.GetFeatures(oidsToGet, false);
                writer.WritePropertyName("features");
                {
                    writer.WriteStartArray();
                    {
                        IFeature feInTraceResults = feCur.NextFeature();
                        string feClassName= (feClass as IDataset).Name.ToUpper();
                        feClassName = feClassName.Substring(1 + feClassName.LastIndexOf("."));
                        bool needsGeometry = false;
                        if (geometriesToReturn.Contains("*") || geometriesToReturn.ToUpper().Contains(feClassName))
                        {
                            needsGeometry = true;
                        }

                        while (feInTraceResults != null)
                        {          
                            writer.WriteStartObject();
                            {
                                WriteAttributes(writer, feInTraceResults, fieldNameDict,fieldsToGetList);
                                WriteGeometry(writer, feInTraceResults, needsGeometry);
                            }
                            writer.WriteEndObject();
                            feInTraceResults = feCur.NextFeature();
                        }
                    }
                    writer.WriteEndArray();
                }
            }
            finally
            {
                Marshal.FinalReleaseComObject(feCur);
            }
        }

        private static void WriteGeometry(JsonWriter writer, IFeature feInTraceResults,bool needsGeometry)
        {
            writer.WritePropertyName("geometry");
            {
                writer.WriteStartObject();
                {
                    if (needsGeometry)
                    {
                        if (feInTraceResults.Shape.GeometryType == esriGeometryType.esriGeometryPoint)
                        {
                            IPoint pnt = (IPoint)feInTraceResults.Shape;
                            string x = Math.Round(pnt.X, 2).ToString();
                            string y = Math.Round(pnt.Y, 2).ToString();
                            writer.WritePropertyName("x"); writer.WriteValue(x);
                            writer.WritePropertyName("y"); writer.WriteValue(y);
                        }
                        else
                        {
                            WritePaths(writer, feInTraceResults);
                        }
                    }
                }
                writer.WriteEndObject();
            }
        }

        private static void WritePaths(JsonWriter writer, IFeature feInTraceResults)
        {
            writer.WritePropertyName("paths");
            writer.WriteStartArray(); //Last part of multi-part polyline
            {
                writer.WriteStartArray(); //Last part of polyline (which might be part of a multi-part polyline)
                {
                    IPolyline pl = feInTraceResults.Shape as IPolyline;
                    pl.Densify(-5, 1);
                    IPointCollection pointCol = (IPointCollection)pl;
                    for (int i = 0; i < pointCol.PointCount; i++)
                    {
                        writer.WriteStartArray(); //Vertex on line
                        {
                            IPoint currentPoint = pointCol.get_Point(i);
                            string x = Math.Round(currentPoint.X, 2).ToString();
                            string y = Math.Round(currentPoint.Y, 2).ToString();
                            writer.WriteRaw(x + "," + y);
                        }
                        writer.WriteEndArray();
                    }
                }
                writer.WriteEndArray();
            }
            writer.WriteEndArray();
        }

        private static void WriteAttributes(JsonWriter writer, IFeature feInTraceResults, Dictionary<int, string> fieldNameDict, HashSet<string> fieldsToGetList)
        {
            string feClassName = (feInTraceResults.Class as IDataset).Name;
            writer.WritePropertyName("attributes");
            {
                writer.WriteStartObject();
                {
                    for (int i = 0; i < feInTraceResults.Fields.FieldCount; i++)
                    {
                        IField fld = feInTraceResults.Fields.get_Field(i);
                        string potentialFieldToWrite = feClassName + "." + fld.Name;
                        if (IncludeField(feInTraceResults.Class as IFeatureClass, fld, fieldsToGetList))
                        {
                            writer.WritePropertyName(fieldNameDict[i]);
                            writer.WriteValue(GetFeatureValue(feInTraceResults, i));
                        }
                    }
                }
                writer.WriteEndObject();
            }
        }

        private static void WriteFields(JsonWriter writer, IFeatureClass feClass, ref Dictionary<int, string> fieldNameDict, HashSet<string> fieldsToGetList)
        {
            writer.WritePropertyName("fields");
            {
                writer.WriteStartArray();
                {
                    for (int i = 0; i < feClass.Fields.FieldCount; i++)
                    {

                            IField fld = feClass.Fields.get_Field(i);
                            if (IncludeField(feClass, fld, fieldsToGetList))
                            {
                                writer.WriteStartObject();
                                {
                                    writer.WritePropertyName("name"); writer.WriteValue(fld.Name);
                                    fieldNameDict[i] = fld.Name;
                                    writer.WritePropertyName("type"); writer.WriteValue(fld.Type.ToString());
                                    writer.WritePropertyName("alias"); writer.WriteValue(fld.AliasName);
                                    writer.WritePropertyName("length"); writer.WriteValue(fld.Length);
                                }
                                writer.WriteEndObject();
                            }
                    }
                }
                writer.WriteEndArray();
            }
        }
        private static bool IncludeField(IFeatureClass feClass,IField field, HashSet<string> fieldsToGetList)
        {
            if (fieldsToGetList.Contains( "*"))
            {
                return true;
            }
            string feClassname = (feClass as IDataset).Name.ToUpper();
            feClassname = feClassname.Substring(1 + feClassname.LastIndexOf("."));
            if (fieldsToGetList.Contains (feClassname + ".*"))
            {
                return true;
            }
            string potentialFieldToWrite = feClassname + "." + field.Name.ToUpper();
            if (fieldsToGetList.Contains(potentialFieldToWrite.ToUpper()))
            {
                return true;
            }
            return false;
        }
        private static void WriteFieldAliases(JsonWriter writer, IFeatureClass feClass, HashSet<string> fieldsToGetList)
        {
            
            writer.WritePropertyName("fieldAliases");
            {
                writer.WriteStartObject();
                {
                    for (int i = 0; i < feClass.Fields.FieldCount; i++)
                    {
                        IField fld = feClass.Fields.get_Field(i);
                        if (IncludeField(feClass,fld,fieldsToGetList))
                        {
                            writer.WritePropertyName(fld.Name);
                            writer.WriteValue(fld.AliasName);
                        }
                    }
                }
                writer.WriteEndObject();
            }
        }

        private static void WriteSpatialReference(JsonWriter writer)
        {
            writer.WritePropertyName("spatialReference");
            {
                writer.WriteStartObject();
                {
                    writer.WritePropertyName("wkid"); writer.WriteValue(102100);
                    writer.WritePropertyName("latestWkid"); writer.WriteValue(3857);
                }
                writer.WriteEndObject();
            }
        }

        private static void WriteSimpleProperties(JsonWriter writer, IFeatureClass feClass)
        {
            writer.WritePropertyName("name"); writer.WriteValue(feClass.AliasName);
            writer.WritePropertyName("id"); writer.WriteValue(feClass.ObjectClassID);
            writer.WritePropertyName("displayFieldName"); writer.WriteValue("OBJECTID");
            writer.WritePropertyName("geometryType"); writer.WriteValue(feClass.ShapeType.ToString());
            writer.WritePropertyName("exceededThreshold"); writer.WriteValue(false);
        }
        static string GetFeatureValue(IFeature fe, int index)
        {
            try
            {
                object o = fe.get_Value(index);
                if (o != DBNull.Value && o != null)
                {
                    return o.ToString();
                }
                else
                {
                    return "null";
                }
            }
            catch
            {
                return "null";
            }
        }
        static int GetStartEID(string pointString, IGeometricNetwork geomNet, double tolerance)
        {
            IFeatureCursor feCur = null;
            try
            {
                INetElements netElements = geomNet.Network as INetElements;
                ISpatialFilter sf = new SpatialFilterClass();
                IPoint clickPoint = new PointClass();
                IProximityOperator clickPointProx = clickPoint as IProximityOperator;
                double x = Convert.ToDouble(pointString.Split(',')[0]);
                double y = Convert.ToDouble(pointString.Split(',')[1]);
                clickPoint.PutCoords(x, y);
                IGeometry sfGeom = (clickPoint as ITopologicalOperator).Buffer(tolerance);
                sf.Geometry = sfGeom;
                sf.SpatialRel = esriSpatialRelEnum.esriSpatialRelIntersects;
                IEnumFeatureClass complexEdges = geomNet.get_ClassesByType(esriFeatureType.esriFTComplexEdge);
                IEnumFeatureClass simpleEdges = geomNet.get_ClassesByType(esriFeatureType.esriFTSimpleEdge);
                List<IEnumFeatureClass> edgeSimpleAndComplexEdgeFCS = new List<IEnumFeatureClass> { complexEdges, simpleEdges };
                double closestDistanceSoFar = tolerance + 1;
                int startEID = -1;
                foreach (IEnumFeatureClass enumEdgeFCS in edgeSimpleAndComplexEdgeFCS)
                {
                    enumEdgeFCS.Reset();
                    IFeatureClass fc = enumEdgeFCS.Next();
                    while (fc != null)
                    {
                        clickPoint.SpatialReference = (fc as IGeoDataset).SpatialReference;
                        sf.GeometryField = fc.ShapeFieldName;
                        feCur = fc.Search(sf, false);
                        IFeature feWithinTolerance = feCur.NextFeature();
                        while (feWithinTolerance != null)
                        {
                            double distAway = clickPointProx.ReturnDistance(feWithinTolerance.Shape);
                            if (distAway < closestDistanceSoFar)
                            {
                                closestDistanceSoFar = distAway;
                                sf.Geometry = (clickPoint as ITopologicalOperator).Buffer(closestDistanceSoFar);
                                if (feWithinTolerance is ISimpleEdgeFeature)
                                {
                                    startEID = ((ISimpleEdgeFeature)feWithinTolerance).EID;
                                }
                                else
                                {
                                    IEnumNetEID enNetEID = netElements.GetEIDs(feWithinTolerance.Class.ObjectClassID, feWithinTolerance.OID, esriElementType.esriETEdge);
                                    enNetEID.Reset();
                                    int eid = enNetEID.Next();
                                    while (eid != -1)
                                    {
                                        double distToEdge = clickPointProx.ReturnDistance(geomNet.get_GeometryForEdgeEID(eid));
                                        if (distToEdge * .999 < closestDistanceSoFar)
                                        {
                                            int oid = feWithinTolerance.OID;
                                            startEID = eid;
                                            break;
                                        }
                                        eid = enNetEID.Next();
                                    }

                                }

                            }
                            feWithinTolerance = feCur.NextFeature();
                        }
                        fc = enumEdgeFCS.Next();
                    }
                }
                return startEID;
            }
            finally
            {
                if (feCur != null)
                {
                    Marshal.FinalReleaseComObject(feCur);
                }
            }
        }


        private  IGeometricNetwork GetGeometricNetwork(string networkName)
        {
            if (_geomNet != null)
            {
                return _geomNet;
            }
            IEnumDatasetName enDSName = GetWorkspace().get_DatasetNames(esriDatasetType.esriDTFeatureDataset);
            enDSName.Reset();
            IFeatureDatasetName fdsName = enDSName.Next() as IFeatureDatasetName;
            while (fdsName != null)
            {
                fdsName = enDSName.Next() as IFeatureDatasetName;
                IEnumDatasetName enGNName = fdsName.GeometricNetworkNames;
                enGNName.Reset();
                IGeometricNetworkName gnn = enGNName.Next() as IGeometricNetworkName;
                while (gnn != null)
                {
                    IDatasetName dsName = gnn as IDatasetName;
                    if (dsName.Name.ToUpper().Contains(networkName.ToUpper()))
                    {
                        IGeometricNetwork gn = (gnn as IName).Open() as IGeometricNetwork;
                        _geomNet = gn;
                        return gn;

                    }
                    gnn = enGNName.Next() as IGeometricNetworkName;
                }
            }
            return null;
        }

        private  IWorkspace GetWorkspace()
        {
            try
            {
                if (_workspace != null)
                {
                    return _workspace;
                }

                return _workspace;
            }
            catch (Exception ex)
            {
                //Throw the error, because we can't recover from this error!
                throw (new ApplicationException("Unable to open workspace", ex));
            }
        }
    }
}
