using System;
using System.Drawing;
using System.Runtime.InteropServices;
using System.Windows.Forms;
using System.Collections;

using ESRI.ArcGIS.Geodatabase;
using ESRI.ArcGIS.EditorExt;
using ESRI.ArcGIS.Framework;
using ESRI.ArcGIS.ADF.BaseClasses;
using ESRI.ArcGIS.SystemUI;
using ESRI.ArcGIS.Display;
using ESRI.ArcGIS.esriSystem;
using ESRI.ArcGIS.NetworkAnalysis;
using ESRI.ArcGIS.ArcMapUI;

using Miner.Interop;
using Miner.FrameworkUI.Trace;
using Miner.ComCategories;
using Miner.Framework.Trace;

namespace ArcFMTracing
{
	/// <summary>
	/// Reports all of the customers downstream from the location clicked on by the user.
	/// </summary>
	/// 
	[ComVisible(true)]
	[Guid("9d89f49d-83c0-4f1c-b753-a02bf3db2d37")] 
	[ProgId("ArcFMTracing.FindDownstreamCustomers")]
	[ComponentCategory(ComCategory.ArcMapCommands)]
	public class FindDownstreamCustomers : BaseElectricTraceTool
	{
		private static readonly log4net.ILog _log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

		#region Constructor
		public FindDownstreamCustomers() : base(new CriticalCustomerSearch())
		{
			try
			{
				base.m_bitmap = new Bitmap(GetType().Assembly.GetManifestResourceStream("ArcFMTracing.Resources.Bitmaps.ShowCustomers.bmp")); 
				base.m_caption = "Find Downstream Customers";
				base.m_category = "CAFM";
				base.m_message = "Find Critical Customers";
				base.m_name = "Find Downstream Customers";
				base.m_toolTip = "Find Downstream Critical Customers";
			}
			catch(Exception e)
			{
				MessageBox.Show(e.ToString());
			}
			finally
			{
			}
		}
		#endregion
		
		#region Overrides of ITool / ICommand


		
		#endregion		

	}

	public class CriticalCustomerSearch: BaseElectricTraceStrategy, IMMSearchStrategy
	{
		private static readonly log4net.ILog _log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);


		protected override void DoTraceWithCurrentStatus()
		{
		}

		private IMMSearchConfiguration _searchConfiguration = null;

		private IMMSearchResults _eidSearchResults = null;
		protected override void DoTrace()
		{
			try
			{
				//Read some of the important search configuration properties
				IPropertySet propSet = _searchConfiguration.SearchParameters as IPropertySet;

                object names; object values1;
                propSet.GetAllProperties(out names, out values1);

				int startEID = (int) propSet.GetProperty(Miner.Framework.Trace.Utilities.TraceProperties.StartEid);
				IGeometricNetwork geomNet = (IGeometricNetwork) propSet.GetProperty(Miner.Framework.Trace.Utilities.TraceProperties.GeometricNetwork);
				INetwork network = (INetwork) geomNet.Network;
				
				//Set up the barriers (this uses the network analysis ext, although it could be rewritten so that it did not)
				int[] barrierJuncs = new int[0];
				int[] barrierEdges = new int[0];
				INetworkAnalysisExt netAnalExt = NetworkHelper.GetNetAnalExt(ArcMapApplication.ExtensionManagerInstance());
				NetworkHelper.SetBarriers(ref barrierEdges, esriElementType.esriETEdge, netAnalExt );
				NetworkHelper.SetBarriers(ref barrierJuncs, esriElementType.esriETJunction, netAnalExt);
				
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
					SetOfPhases.abc, //Phases to trace on 
					mmDirectionInfo.establishBySourceSearch, //How to find source
					0, //Upstream neighbor (not used here)
					esriElementType.esriETNone, //Upstream neighbor type (not used here)
					barrierJuncs, // Junction barriers
					barrierEdges,//Edge barriers
					false, //Exclude open devices
					out tracedJunctions, //Resultant junctions
					out tracedEdges); //Resultant edges

				MessageBox.Show("TOTAL JUNCS : " + tracedJunctions.Count.ToString());
				//Report out the load points
				IMMTracedElements loadPoints = tracedJunctions.LoadPoints;
				MessageBox.Show("LOAD POINTS : \n" + BuildOIDStringFromTracedElements(loadPoints,esriElementType.esriETJunction, network));
				
				//Report out the Critical customers by getting the enumeration of EIDs from the IMMTracedElements of LoadPoints

				ArrayList criticalCustomers = new ArrayList();
				INetSchema netSchema = (INetSchema) network;
				INetWeight criticalCustWeight = netSchema.get_WeightByName("CRITICALINDICATORWEIGHT");
				int criticalCustomerIndIndex = criticalCustWeight.WeightID;
				IEnumNetEID enumLoadPoints =  NetworkHelper.GetEnumNetEID(network, loadPoints, esriElementType.esriETJunction);
				INetAttributes netAttributes = (INetAttributes) network;
				for (int i = 0; i < enumLoadPoints.Count ; i++)
				{
					int eid = enumLoadPoints.Next();
					int criticalWeight = 0;
					criticalWeight = (int) netAttributes.GetWeightValue(eid,esriElementType.esriETJunction, criticalCustomerIndIndex);
					if (criticalWeight != 0)
					{
						criticalCustomers.Add(eid);
					}
				}
				MessageBox.Show ("TOTAL DOWNSTREAM CRITICAL CUSTOMERS = " + criticalCustomers.Count);

				IEnumNetEID edgeEnum = NetworkHelper.GetEnumNetEID(network, tracedEdges,esriElementType.esriETEdge);
				IEnumNetEID juncEnum = NetworkHelper.GetEnumNetEID(network, tracedJunctions,esriElementType.esriETJunction);
				
				//Currently (9.2), setting the traced edges and traced junctions is useful only for Engine Viewer applications.  This is what allows 
				//the drawing of the edges and junctions when we call base.AfterDoTrace();
				base.TracedEdges = edgeEnum;
				base.TracedJunctions = juncEnum;
				//Since this application is designed for ArcMap, we have to set the result edges and junctions manually.
				Miner.Framework.Search.EidSearchResults eidSearchRes = new Miner.Framework.Search.EidSearchResults();
				eidSearchRes.GeometricNetwork = geomNet;
				eidSearchRes.Edges = edgeEnum;
				eidSearchRes.Junctions = juncEnum;
				eidSearchRes.DrawComplex = true;
				NetworkHelper.SetTraceBuffer(eidSearchRes);
				NetworkHelper.SetResults(edgeEnum, juncEnum, true, NetworkHelper.GetNetAnalExt(ArcMapApplication.ExtensionManagerInstance()), Color.Cyan);
			}
			catch (Exception ex)
			{
				_log.Error(ex.Message, ex);
				System.Diagnostics.Trace.WriteLine(ex.ToString());
			}
		}
		
		private string  BuildOIDStringFromTracedElements(IMMTracedElements tracedElements, esriElementType elemType, INetwork network)
		{
			//Returns a carriage return delimited list of ObjectIDs from the supplied tracedElements
			tracedElements.Reset();
			IMMTracedElement elem = tracedElements.Next();
			System.Text.StringBuilder sbOIDS = new System.Text.StringBuilder();
			while (elem != null)
			{
				int OID = NetworkHelper.GetOIDFromEID(elem.EID, network, elemType);
				sbOIDS.Append(OID);
				sbOIDS.Append("\n");
				elem = tracedElements.Next();
			}
			return sbOIDS.ToString();
		}

		#region IMMSearchStrategy Members

		public new IMMSearchResults Find(IMMSearchConfiguration pSearchConfig, IMMSearchControl pSearchControl)
		{
			try
			{
				_searchConfiguration = pSearchConfig;
				base.BeforeDoTrace(pSearchConfig);
				this.DoTrace();
				base.AfterDoTrace();
				return _eidSearchResults;
			}
			catch (Exception ex)
			{
				_log.Error(ex.Message, ex);
				return null;
			}
		}

		#endregion
	}
}
