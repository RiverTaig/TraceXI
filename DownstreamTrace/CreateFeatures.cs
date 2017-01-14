using System;
using System.Collections;
using System.Collections.Generic;
using System.Xml;
using System.IO;
using System.Runtime.InteropServices;
using System.Configuration;
using System.Linq;
using System.Text;

using ESRI.ArcGIS.Geodatabase;
using ESRI.ArcGIS.DataSourcesGDB;
using ESRI.ArcGIS.Geometry;
using ESRI.ArcGIS.esriSystem;

namespace CreateFeatures
{
    class CreateFeatures
    {
        //The Apache log4net library is a tool to help the programmer 
        //output log statements to a variety of output targets.  http://logging.apache.org/log4net/
        private static readonly log4net.ILog _log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        static void Main(string[] args)
        {
            //Declare a license variable before the try block so that we can release it in the finally block
            License lic = new License();
            IWorkspaceEdit wse = null;
            try
            {
                //Get both an ArcFM and ArcGIS license
                lic.GetLicenses();
                //Get the CreateFeatures.xml as an XMLDocument
                XmlDocument xmlDoc = GetXMLDocument();
                //Get the workspace, start editing, and begin an edit operation
                wse = (IWorkspaceEdit)GetWorkspace(); // cast this as an IWorkspace
                wse.StartEditing(false);
                wse.StartEditOperation();
                //Get all of the XML nodes that represent features or rows that we will be creating, deleting, or updating
                XmlNodeList allObjects = xmlDoc.SelectNodes("/TOPLEVEL/OBJECT"); //Parsing the XML
                //Loop through each node
                foreach (XmlNode objectNode in allObjects)
                {
                    //Write to the Info log using Log4Net so that we can keep track of where we are in the XML
                    _log.Info("About to process " + objectNode.OuterXml);
                    ProcessObjects(objectNode, (IFeatureWorkspace)wse);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                _log.Error("ERROR - ", ex);
            }
            finally
            {
                //Stop the edit operation and stop editing
                if (wse != null)
                {
                    wse.StopEditOperation();
                    wse.StopEditing(false); //CHANGE TO TRUE WHEN YOU THINK YOU HAVE THE PROGRAM WORKING!!
                }
                lic.ReleaseLicenses();
                Console.WriteLine("");
                Console.WriteLine("=== PROGRAM COMPLETE : PRESS ENTER ====");
                Console.ReadLine();
            }
        }

        // this is as reusable code.
        //Declare a new hashtable (dictionary) that will allow us to quickly get the ITable given the name of the table as a string
        private static Hashtable _namesToTableHash = new Hashtable();
        private static IRow GetRow(IFeatureWorkspace fws, string sTable, string action, string whereclause)
        {
            ICursor tableCursor = null;
            try
            {
                ITable table = null;
                //For performance, we only want to get a given table from its name once, so store the tables in a hash using the string name as a key
                if (_namesToTableHash.ContainsKey(sTable))
                {
                    table = (ITable)_namesToTableHash[sTable];  //hash table or dictionary its storing the table avoid calling open table each time.
                }
                else
                {
                    //Open the table and store it in the hashtable
                    table = fws.OpenTable(sTable);
                    _namesToTableHash.Add(sTable, table);
                }
                if (action == "CREATE")
                {
                    //Need to call CreateRow
                    IRow retRow = table.CreateRow();
                    //return the newly created Row
                    return retRow;
                }
                //Create and populate a new QueryFilter
                IQueryFilter qf = new QueryFilterClass();
                qf.WhereClause = whereclause;

                //Search the table thereby populating the cursor
                //Note, in this case we aren't interested in looping through ALL of the returned rows...
                //if you were though, the code would look like this :

                //				tableCursor = table.Search(qf, false);
                //				IRow r = tableCursor.NextRow();
                //				while (r != null)
                //				{
                //					//Do something useful
                //					r = tableCursor.NextRow();
                //				}

                //There should be one and only one row matching the where clause..If not, throw an exception
                tableCursor = table.Search(qf, false);
                IRow firstRow = tableCursor.NextRow();
                if (firstRow == null)
                {
                    throw (new ApplicationException("No row found for " + sTable + " (" + whereclause + ")"));
                }
                else
                {
                    IRow unexpectedRow = tableCursor.NextRow();
                    if (unexpectedRow != null)
                    {
                        throw (new ApplicationException("Multiple rows found for " + sTable + " (" + whereclause + ")"));
                    }
                    else
                    {
                        return firstRow;
                    }
                }
            }
            catch (ApplicationException appEx)
            {
                throw (appEx);
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
                throw (new ApplicationException("Unable to " + action + " " + sTable + " feature (" + whereclause + ")", ex));
            }
            finally
            {
                //In .NET, you can only have a certain number of cursors open...since the Garbage collector won't clean these up for us, 
                //we need to release the COM object ourselves.  Note that you could also use CAFMCursor (as you will later in the 
                //exercise
                if (tableCursor != null)
                {
                    //When you call Marshal.ReleaseComObject, it returns the number of remaining references to the COM object
                    while (Marshal.ReleaseComObject(tableCursor) > 0)
                    {
                        //Just keep spinning to release the COM Reference
                    }
                }
            }
        }
        /// <summary>
        /// A field in a table may be assigned to a domain (such as PhaseDesignation or Owner).  Sometimes it is the field
        /// that governs the domain (as is likely the case with Owner).  Sometimes it is the subtype of the row that
        /// governs the domains (as is likely the case with PhaseDesignation where you would have a different set of
        /// allowable values for single-phase, two-phase, and three-phase).  This method will return the coded value
        /// domain associated to the subtype if it exists, or the coded valued domain associated to the field if it does not 
        /// exist.  If the field is not domain driven, this method returns null.
        /// </summary>
        /// <returns></returns>
        private static ICodedValueDomain GetDomainForField(IField field, IRow row)
        {
            try
            {
                if (row is IRowSubtypes)
                {
                    IRowSubtypes rowSubtypes = (IRowSubtypes)row;
                    int subtypeCode = rowSubtypes.SubtypeCode;
                    ISubtypes subTypes = (ISubtypes)row.Table;
                    //We are getting the coded field domain for the field for its subtype
                    ICodedValueDomain cvd = (ICodedValueDomain)subTypes.get_Domain(subtypeCode, field.Name);
                    if (cvd != null)
                    {
                        return cvd;
                    }
                }
                IDomain domain = field.Domain;
                if (domain != null)
                {
                    if (domain is ICodedValueDomain)
                    {
                        return (ICodedValueDomain)domain;
                    }
                }
                //Some fields may not be assigned to a domain.  In this case, just return null
                return null;
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
                return null;
            }
        }
        /// <summary>
        /// Given a coded value domain (like MATERIAL), and a codedValue (like "Wood"), this returns the value
        /// that actually gets stored in the database (like "W").
        /// </summary>
        /// <param name="cvd"></param>
        /// <param name="codedValue"></param>
        /// <returns></returns>
        private static object GetDomainValueFromDomain(ICodedValueDomain cvd, string codedValue)
        {
            try
            {
                for (int i = 0; i < cvd.CodeCount; i++) // checking tot he coded values
                {
                    if (cvd.get_Name(i).ToUpper() == codedValue.ToUpper())
                    {
                        return cvd.get_Value(i);
                    }
                }
                //If we get to here, then we didn't find a value, so we need to log an error.  So that the feature
                //will process, we'll return 0 (which will either get cast to a number or string ("0")), but will probably
                //be OK regardless.
                _log.Error("ERROR - the value " + codedValue + " was not found in the coded value domain " + ((IDomain)cvd).Name + ". You should edit this field manually");
                return 0;
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
                return null;
            }
        }
        private static void ApplyAttributesToRow(IRow row, XmlNodeList attributesForRow)
        {
            try
            {
                //Loop through each Attribute for the row
                foreach (XmlNode attribute in attributesForRow)
                {
                    //Get the name and the value pair for the attribute
                    string name = attribute.Attributes["name"].Value;
                    string val = attribute.Attributes["value"].Value;
                    if (name.ToUpper() == "SHAPE")
                    {
                        //In this example, we only support points.  The value from the XML is in the formata x,y (e.g:  "12345,34566"). 
                        //So, we need to parse the string using the comma as a delimiter
                        IPoint newPoint = new PointClass();
                        char[] chars = new char[1];
                        chars[0] = System.Convert.ToChar(",");
                        string[] coordinates = val.Split(chars, 2);
                        double x = System.Convert.ToDouble(coordinates[0]);
                        double y = System.Convert.ToDouble(coordinates[1]);
                        //Now that we have the XY coordinate, we can put the coordinates in the point and set the shape of the feature
                        newPoint.PutCoords(x, y);
                        //Cast the row to a feature and create a new point it inherits form Geometry.
                        ((IFeature)row).Shape = newPoint;  // geometry is being cast and set
                    }
                    else
                    {
                        //If this isn't the SHAPE field, then we need to determine if the value coming from the XML is really a value from a
                        //coded value domain.  
                        object o = val;
                        int fieldIndex = row.Fields.FindField(name);
                        IField field = row.Fields.get_Field(fieldIndex);
                        ICodedValueDomain cvd = GetDomainForField(field, row);// checking to see if this a coded domain.
                        if (cvd != null)
                        {
                            //The value from the XML might be "Wood", but we need to convert it to "W"
                            //to store in the database
                            o = GetDomainValueFromDomain(cvd, val);
                        }
                        SetValueOnField(row, fieldIndex, o);
                    }
                }
                //In addition to the attributes specified in the XML, if the object getting created is a point feature
                //and has a Comments field, then update the comments field with the MapGrid OID of the field that
                //the point is inside of
                if (row is IFeature)
                {
                    if (((IFeature)row).ShapeCopy.GeometryType == esriGeometryType.esriGeometryPoint)
                    {
                        int commentsIndex = row.Fields.FindField("COMMENTS");
                        SetCommentsFieldToMapGridOID((IFeature)row, commentsIndex);
                    }
                }
                row.Store();
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
            }
        }
        private static void SetValueOnField(IRow row, int fieldIndex, object valueToSet)
        {
            try
            {
                //The value coming from the XML is always a string, but we need to convert that into a datatype appropriate 
                //for the field that we are setting.
                IField field = row.Fields.get_Field(fieldIndex);
                switch (field.Type)
                {
                    case esriFieldType.esriFieldTypeDate:
                        row.set_Value(fieldIndex, System.Convert.ToDateTime(valueToSet));
                        break;
                    case esriFieldType.esriFieldTypeDouble:
                        row.set_Value(fieldIndex, System.Convert.ToDouble(valueToSet));
                        break;
                    case esriFieldType.esriFieldTypeInteger:
                        row.set_Value(fieldIndex, System.Convert.ToInt32(valueToSet));
                        break;
                    case esriFieldType.esriFieldTypeSingle:
                        row.set_Value(fieldIndex, System.Convert.ToSingle(valueToSet));
                        break;
                    case esriFieldType.esriFieldTypeBlob:
                        row.set_Value(fieldIndex, valueToSet);
                        break;
                    case esriFieldType.esriFieldTypeSmallInteger:
                        row.set_Value(fieldIndex, System.Convert.ToInt16(valueToSet));
                        break;
                    case esriFieldType.esriFieldTypeString:
                        row.set_Value(fieldIndex, System.Convert.ToString(valueToSet));
                        break;
                    default:
                        throw (new ApplicationException("Unexpected data type"));
                }
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
            }
        }
        /// <summary>
        /// This method is meant to demonstrate using a SpatialFilter and implementing point-in-polygon
        /// analysis.  We find the polygon from the MapGrid FeatureClass that contains the point feature 
        /// being passed in.  Assuming that we find the MapGrid, the comments fields of the point feature
        /// gets set to the ObjectID of the map grid.  This method also demonstrates the usefulness of the 
        /// CAFMCursor which wraps the standard ArcObjects cursor making code more concise, and cursor
        /// memory management more robust. 
        /// </summary>
        /// <param name="pointFeatureWithCommentsField"></param>
        /// <param name="commentsFieldIndex"></param>
        private static void SetCommentsFieldToMapGridOID(IFeature pointFeatureWithCommentsField, int commentsFieldIndex)
        {
            try
            {
                //Get the MapGrid feature class by getting the feature workspace from the point feature being passed in.
                IDataset ds = ((IDataset)pointFeatureWithCommentsField.Class);
                IFeatureWorkspace fws = (IFeatureWorkspace)ds.Workspace;
                IFeatureClass mapGridFeClass = fws.OpenFeatureClass("MAPGRID");
                //In C#, the using block will ensure that the CAFMCursor will have its Dispose method called on it. 
                //This will release the cursor appropriately.
                using (CAFMCursor cafmCur = new CAFMCursor(mapGridFeClass, "", "OBJECTID", pointFeatureWithCommentsField.ShapeCopy, esriSpatialRelEnum.esriSpatialRelIntersects))
                {
                    IFeature mapGrid = cafmCur.FeatureCursor.NextFeature();
                    if (mapGrid != null)
                    {
                        pointFeatureWithCommentsField.set_Value(commentsFieldIndex, mapGrid.OID);
                    }
                }
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
            }
        }
        /// <summary>
        /// Given a row representing the Origin class (such as SupportStructure), and a string representing
        /// a related destination table (such as JointUseAttachment), this method returns the IRelationshipClass 
        /// for the two tables.
        /// </summary>
        /// <param name="row"></param>
        /// <param name="sTable"></param>
        /// <returns></returns>
        private static IRelationshipClass GetRelationshipClass(IRow row, string sTable)
        {
            try
            {
                //We need to get the row and its table and cast it to IObjectClass
                //then we use the get_RelationshipClasses method to all of the relationship 
                //Classes for that object.
                IEnumRelationshipClass enumRelClass = ((IObjectClass)row.Table).get_RelationshipClasses(esriRelRole.esriRelRoleOrigin);
                enumRelClass.Reset();
                IRelationshipClass relClass = enumRelClass.Next();
                while (relClass != null)
                {
                    string sRelClassname = ((IDataset)relClass.DestinationClass).Name;
                    if (sRelClassname.ToUpper() == sTable.ToUpper())
                    {
                        return relClass;
                    }
                    relClass = enumRelClass.Next();
                }
                return null;
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
                return null;
            }
        }
        private static void HandleRelationships(IRow row, XmlNodeList relationshipsForRow)
        {
            try
            {
                //Loop through all of the related objects that will be created in the XML
                foreach (XmlNode relObject in relationshipsForRow)
                {
                    //Get the table and action (for example, "JOINTUSEATTACHMENT" and "CREATE")
                    string sTable = relObject.Attributes["table"].Value;
                    string action = relObject.Attributes["action"].Value;
                    IRelationshipClass relClass = GetRelationshipClass(row, sTable);
                    //Currently only relationship create is supported!!
                    if (action == "CREATE")
                    {
                        if (relClass != null)
                        {
                            //Create a row in the destination class (for example, JOINTUSEATTACHMENT)
                            ITable destTable = (ITable)relClass.DestinationClass;
                            IRow destRow = destTable.CreateRow();
                            //Get all of the attributes for the related table and apply them to the new row
                            XmlNodeList attributesForRelationship = relObject.SelectNodes("ATTRIBUTE");
                            ApplyAttributesToRow(destRow, attributesForRelationship);
                            //Create the relationship between the origin and destination rows
                            relClass.CreateRelationship((IObject)row, (IObject)destRow);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
            }
        }

        /// <summary>
        /// When a new row is created, the values for the fields will be null.  This procedure will
        /// set the values for those fields that have default values (as defined in the geodatabase)/
        /// </summary>
        /// <param name="newRow"></param>
        public static void InitializeDefaultSubtypeAndDefaultValues(IRow newRow, int subtype)
        {
            try
            {
                if (newRow is IRowSubtypes)
                {
                    //Get the ISubtypes interface so that we can get the default subtype code
                    ISubtypes pSubtype = (ISubtypes)newRow.Table;
                    //Set the default subtype code for the row
                    IRowSubtypes rowSubT = (IRowSubtypes)newRow;
                    //Set the row subtype
                    rowSubT.SubtypeCode = subtype;
                    //Init default values on all the other fields
                    rowSubT.InitDefaultValues();  //sets the default subtype, populates defaults.
                }
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
            }
        }
        private static void ProcessObjects(XmlNode featureNode, IFeatureWorkspace fws)
        {
            try
            {
                //Get the action, where clause, and table from the XML
                string action = featureNode.Attributes["action"].Value;
                string whereclause = featureNode.Attributes["whereclause"].Value;
                string table = featureNode.Attributes["table"].Value;
                //Get the Row (if the action is create, GetRow will actually create one, otherwise it will return it from the database)
                IRow row = GetRow(fws, table, action, whereclause);
                if (action == "DELETE")
                {
                    row.Delete();
                }
                else if (action == "UPDATE" || action == "CREATE")
                {
                    //For new features, we need to initialize default values for fields and subtypes
                    if (action == "CREATE")
                    {
                        //Need to get the subtype from the data filed in the xml
                        int val = Convert.ToInt16(featureNode.SelectSingleNode("ATTRIBUTE[@name='SUBTYPECD']").Attributes["value"].Value);
                        InitializeDefaultSubtypeAndDefaultValues(row, val);  //set the default value of the subtype important
                    }
                    //Apply the attributes from the XML to the row
                    XmlNodeList attributesForRow = featureNode.SelectNodes("ATTRIBUTE");
                    //This will update 6 attributes
                    ApplyAttributesToRow(row, attributesForRow);
                    //Get the related objects from the XML
                    XmlNodeList relationshipsForRow = featureNode.SelectNodes("RELATIONSHIPS/OBJECT");
                    HandleRelationships(row, relationshipsForRow);
                }
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
                //If a problem has occurred, we want to log it to a text file that the user can get to
            }
        }
        private static XmlDocument GetXMLDocument()
        {
            try
            {
                //In this example, we are getting the path to the XML file from a configuration file.  
                //If you installed the course data onto a drive other than the C:\ drive, modify the config file
                string xmlPath = (string)ConfigurationManager.AppSettings["xmlPath"];

                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.Load(xmlPath);
                return xmlDoc;
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
                //Throw the error, because we can't recover from this error!
                throw (new ApplicationException("Unable to open XML file", ex));
            }
        }
        private static IWorkspace GetWorkspace()
        {
            try
            {
                //Create a new AccessWorkspaceFactoryClass 
                IWorkspaceFactory wsf = new AccessWorkspaceFactoryClass();
                //IWorkspaceFactory wsf = new SdeWorkspaceFactoryClass();

                //Set the properties needed to log in
                ESRI.ArcGIS.esriSystem.IPropertySet ps = new PropertySetClass();
                ps.SetProperty("DATABASE", @"C:\CUST\ArcFM\Sample Data\Configured\CAFM_Minerville_Configured.mdb");
                // ps.SetProperty("DATABASE", @"C:\ArcFM\CAFM\Data\CAFM_Minerville_Configured.mdb");
                //ps.SetProperty("VERSION", "SDE.DEFAULT");
                //ps.SetProperty("USER", "DBA");
                //ps.SetProperty("PASSWORD", "THIS VALUE COULD BE PASSED INTO THE PROCEDURE");
                //ps.SetProperty("INSTANCE", "5151");
                IWorkspace ws = wsf.Open(ps, 0);
                return ws;
            }
            catch (Exception ex)
            {
                _log.Error("ERROR - ", ex);
                //Throw the error, because we can't recover from this error!
                throw (new ApplicationException("Unable to open workspace", ex));
            }
        }
    }
}
