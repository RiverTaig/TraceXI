/// <reference path="Framework.d.ts" />
/// <reference path="arcgis-js-api.d.ts" />
/// <reference path="dojo.d.ts" />
/// <reference path="modernizr.d.ts" />
/// <reference path="bluebird.d.ts" />
/// <reference path="essentials.d.ts" />
/// <reference path="moment.d.ts" />
/// <reference path="globalize.d.ts" />
/// <reference path="framework.ui.d.ts" />
/// <reference path="WeakMap.d.ts" />
/// <reference path="Documents.Rest.d.ts" />
/// <reference path="jquery.d.ts" />
/// <reference path="jqueryui.d.ts" />
/// <reference path="caja-html-sanitizer.d.ts" />
/// <reference path="LayerList.Rest.d.ts" />
/// <reference path="moment-timezone.d.ts" />
/// <reference path="moment-node.d.ts" />
declare module geocortex.framework.commands {
    import commandArgs = geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs;
    interface FrameworkCommands extends CommandsBase {
        /**
         * Activates buffering with the current settings for the specified command(s).
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ActivateBuffering
         * @param args A string or array of strings specifying the command(s) for which to deactivate buffering.
         * @introduced 2.5
         * @gcx-command-category Buffering
         */
        (commandName: "ActivateBuffering"): TypedCommand<{
            (args: string | string[]): void;
        }>;
        /**
        * Activates buffering for the specified command and displays the associated Buffer Options dialog.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name ActivateBufferingAndDisplayOptions
        * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.DisplayBufferOptionsArgs} object or string specifying the command for which to activate buffering and display Buffer Options.
        * A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.DisplayBufferOptionsArgs} object has the following properties: `targetCommand` and `delegateFunction` (optional).
        * `targetCommand` is the command for which to activate buffering and display Buffer Options.
        * `delegateFunction` is a delegate function to execute when the user clicks the Continue button on the Buffer Options dialog.
        * @introduced 2.5
        * @gcx-command-category Buffering
        */
        (commandName: "ActivateBufferingAndDisplayOptions"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.DisplayBufferOptionsArgs | string): void;
        }>;
        /**
         * Activates any workflow container views associated with a given workflow.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ActivateContainersForWorkflow
         * @param workflowId The ID of the workflow for which to activate container views.
         * @private
         */
        (commandName: "ActivateContainersForWorkflow"): TypedCommand<{
            (workflowId: string): void;
        }>;
        /**
         * Activates a context menu view that will be positioned based on the page x & y values specified.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ActivateContextMenu
         * @param options The context menu options.
         * @private
         */
        (commandName: "ActivateContextMenu"): TypedCommand<{
            (options: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ContextMenuArgs): void;
        }>;
        /**
         * Activates the Home Panel if it is configured to be included.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ActivateHomePanel
         * @introduced 1.3
         * @deprecated 2.0 Use ShowHomePanel instead.
         * @gcx-command-category Region and View
         */
        (commandName: "ActivateHomePanel"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates the Plot Coordinates View.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ActivatePlotCoordinatesView
         * @introduced 2.6
         * @gcx-command-category PlotCoordinates
         */
        (commandName: "ActivatePlotCoordinatesView"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates the Layer Selector for Identify and applies current settings.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ActivateSelectLayersForIdentify
         * @introduced 2.5
         * @gcx-command-category Layer Selector
         */
        (commandName: "ActivateSelectLayersForIdentify"): TypedCommand<{
            (): void;
        }>;
        /**
         * Deactivates the Layer Selector for Identify and enables all default identifiable layers.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeactivateSelectLayersForIdentify
         * @introduced 2.5
         * @gcx-command-category Layer Selector
         */
        (commandName: "DeactivateSelectLayersForIdentify"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates the Layer Selector for Snapping.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ActivateSelectLayersForSnapping
         * @introduced 2.5
         * @gcx-command-category Layer Selector
         */
        (commandName: "ActivateSelectLayersForSnapping"): TypedCommand<{
            (): void;
        }>;
        /**
         * Deactivates the Layer Selector for Snapping.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeactivateSelectLayersForSnapping
         * @introduced 2.5
         * @gcx-command-category Layer Selector
         */
        (commandName: "DeactivateSelectLayersForSnapping"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates Snapping.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ActivateSnapping
         * @introduced 2.5
         * @gcx-command-category Snapping
         */
        (commandName: "ActivateSnapping"): TypedCommand<{
            (): void;
        }>;
        /**
         * Deactivates Snapping.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeactivateSnapping
         * @introduced 2.5
         * @gcx-command-category Snapping
         */
        (commandName: "DeactivateSnapping"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates any transient elements configured against a specific ID in the toolbar module.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ActivateTransientElements
         * @param id The ID of the entity (for example, tool) for which to activate any associated transient elements.
         * @introduced 1.3
         * @gcx-command-category Region and View
         */
        (commandName: "ActivateTransientElements"): TypedCommand<{
            (id: string): void;
        }>;
        /**
         * Bookmarks the current extent with the given name.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddBookmark
         * @param name The name by which to bookmark the current extent.
         * @introduced 2.0
         * @gcx-command-category Bookmark
         */
        (commandName: "AddBookmark"): TypedCommand<{
            (name: string): void;
        }>;
        /**
         * Adds a cluster layer to an existing Geocortex Layer that holds an Esri FeatureLayer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddClusterLayer
         * @param args Either a ClusterLayerArgs or String representing the Map Service's ID.
         * @introduced 2.5
         * @gcx-command-category Visualization
         */
        (commandName: "AddClusterLayer"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ClusterLayerArgs | string): void;
        }>;
        /**
         * Adds an individual feature to the current {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} displayed in the results view.
         * Typically, an end-user would click "Add to Results" on a map tip to add the feature to the results.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddFeatureToResults
         * @param feature The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} to add to the results view.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "AddFeatureToResults"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Adds a heat map visualization to a given Geocortex layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddHeatMap
         * @param args Either {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.HeatMapArgs} or a string representing the Map Service's ID.
         * @introduced 2.5
         * @gcx-command-category Visualization
         */
        (commandName: "AddHeatMap"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.HeatMapArgs | string): void;
        }>;
        /**
         * Creates and displays a marker on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddMarker
         * @param arg The marker to add to the map, specified as the marker ID or as an instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.MarkerArgs}.
         * @introduced 2.5
         * @private
         */
        (commandName: "AddMarker"): TypedCommand<{
            (arg: string | geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.MarkerArgs): void;
        }>;
        /**
         * Adds the given geometry to the markup layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddMarkup
         * @param geometry The geometry to add to the markup layer.
         * @introduced 1.3
         * @gcx-command-category Markup
         */
        (commandName: "AddMarkup"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
         * Adds the given geometry to the markup layer.  (Identical to the AddMarkup command.)
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddMarkupGeometry
         * @param geometry The geometry to add to the markup layer.
         * @introduced 2.0
         * @gcx-command-category Markup
         */
        (commandName: "AddMarkupGeometry"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
         * Creates and displays a pushpin for the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} specified.
         * Pushpins must be enabled for this command to work.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddPushpin
         * @param feature The feature to generate a pushpin for.
         * @introduced 2.4
         * @gcx-command-category Pushpins
         */
        (commandName: "AddPushpin"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Creates and displays pushpins for the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} specified.
         * Pushpins must be enabled for this command to work.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddPushpins
         * @param fscId The ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} to generate pushpins for.
         * @introduced 2.3
         * @gcx-command-category Pushpins
         */
        (commandName: "AddPushpins"): TypedCommand<{
            (fscId: string): void;
        }>;
        /**
         * Displays a status indicator that can relay short messages in the results list or table.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddResultsStatus
         * @param messageOrArgs Either a string containing the message, or an {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.AddStatusArgs} object.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "AddResultsStatus"): TypedCommand<{
            (messageOrArgs: string | geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.AddStatusArgs): void;
        }>;
        /**
         * Displays a status indicator that can relay tool tips and other types of short messages.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddStatus
         * @param statusArgs An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.AddStatusArgs}, or a string.
         * @introduced 1.1
         * @gcx-workflow-requirements Note: In order to use this command in a workflow, you must pass the statusArgs parameter as a string.
         * @gcx-command-category Map Widget
         */
        (commandName: "AddStatus"): TypedCommand<{
            (statusArgs: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.AddStatusArgs): void;
            (statusArgs: string): void;
        }>;
        /**
         * Prompts the user for text to add as markup. When completed, text markup is added at the provided geometry.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddTextMarkup
         * @param geometry The geometry at which to place the text.
         * @introduced 2.0
         * @gcx-command-category Markup
         */
        (commandName: "AddTextMarkup"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
         * Adds a temporary markup graphic to the map. The command `ClearTemporaryMarkup` will clear this piece of markup.
         * Subsequent invocations of `AddTemporaryMarkupGeometry` will clear the previous piece of temporary markup.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddTemporaryMarkupGeometry
         * @param geometry A Geometry object representing the markup to draw.
         * @introduced 1.0
         * @gcx-command-category Markup
         */
        (commandName: "AddTemporaryMarkupGeometry"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
         * Displays an alert.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name Alert
         * @param message The body of the alert.
         * @param title The title of the alert.
         * @param callback A callback to execute when the alert is dismissed.
         * @introduced 1.0
         * @gcx-workflow-requirements In order to use this command in a workflow, you must omit the `callback` parameter.
         * @gcx-command-category Dialog
         */
        (commandName: "Alert"): TypedCommand<{
            (message: string, title?: string, callback?: () => void): void;
        }>;
        /**
         * Invokes a dialog that allows users to attach files to a given feature, when the browser environment supports it.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AttachFileToFeature
         * @param feature The Geocortex feature to attach files to.
         * @introduced 1.3
         * @gcx-workflow-disabled
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "AttachFileToFeature"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Broadcasts the viewers current viewpoint to the specified external component.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name BroadcastCurrentViewpoint
         * @param ecId The ID of the external component to broadcast the viewpoint to.
         * @introduced 2.4
         * @gcx-command-category Integration
         */
        (commandName: "BroadcastCurrentViewpoint"): TypedCommand<{
            (ecId: string): void;
        }>;
        /**
         * Buffers input geometry, adds buffer markup to the map, and fires the callback and event with the buffered geometry. When the source command is specified, buffers using current settings for the command.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name BufferGeometry
         * @param bufferGeometryArgs The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferGeometryArgs} object defining the geometry to buffer and the associated buffer parameters.
         * @introduced 2.5
         * @gcx-command-category Buffering
         */
        (commandName: "BufferGeometry"): TypedCommand<{
            (bufferGeometryArgs: geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferGeometryArgs): void;
        }>;
        /**
        * Cancels editing of a coordinate if currently active.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name CancelEditCoordinate
        * @introduced 2.6
        * @gcx-command-category PlotCoordinates
        */
        (commandName: "CancelEditCoordinate"): TypedCommand<{
            (): void;
        }>;
        /**
         * Cancel any in-progress search on all providers.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CancelSearch
         * @introduced 1.1
         * @gcx-command-category Search
         */
        (commandName: "CancelSearch"): TypedCommand<{
            (): void;
        }>;
        /**
         * Changes the style of markup to match the provided template.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ChangeMarkupStyle
         * @param markupTemplate A markup template for the markup style you want to change.
         * @private
         */
        (commandName: "ChangeMarkupStyle"): TypedCommand<{
            (markupTemplate: any): void;
        }>;
        /**
         * Clears the active tool.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearActiveTool
         * @introduced 1.1
         * @gcx-command-category Map Widget
         */
        (commandName: "ClearActiveTool"): TypedCommand<{
            (): void;
        }>;
        /**
         * Removes the highlights from the charting highlight layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearChartHighlights
         * @introduced 2.3
         * @private
         */
        (commandName: "ClearChartHighlights"): TypedCommand<{
            (): void;
        }>;
        /**
         * Removes all charts from the charting view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearCharts
         * @introduced 2.3
         * @gcx-command-category Charting
         */
        (commandName: "ClearCharts"): TypedCommand<{
            (): void;
        }>;
        /**
         * Clears the highlights from the default highlight layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearDefaultHighlights
         * @introduced 1.2
         * @deprecated 1.3 Use SetActiveHighlightLayerDefault followed by ClearHighlights instead.
         * @gcx-command-category Highlighting
         */
        (commandName: "ClearDefaultHighlights"): TypedCommand<{
            (): void;
        }>;
        /**
         * Clear the information stored within `RelatedFeaturesView` and `RelatedFeaturesViewModel` (for example, which features are currently open).
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearFeatureInformation
         * @introduced 2.3
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ClearFeatureInformation"): TypedCommand<{
            (): void;
        }>;
        /**
         * Clears the highlights from the currently active highlight layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearHighlights
         * @introduced 1.2
         * @gcx-command-category Highlighting
         */
        (commandName: "ClearHighlights"): TypedCommand<{
            (): void;
        }>;
        /**
         * Prompts the user for confirmation, and if approved, clears all of the markup from the markup layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearMarkup
         * @introduced 1.2
         * @gcx-command-category Markup
         */
        (commandName: "ClearMarkup"): TypedCommand<{
            (): void;
        }>;
        /**
         * Clears all of the markup from the markup layer without prompting for confirmation.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearMarkupQuiet
         * @introduced 1.2
         * @gcx-command-category Markup
         */
        (commandName: "ClearMarkupQuiet"): TypedCommand<{
            (): void;
        }>;
        /**
         * Clears any search results.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearSearch
         * @introduced 1.3
         * @gcx-command-category Search
         */
        (commandName: "ClearSearch"): TypedCommand<{
            (): void;
        }>;
        /**
         * Clears the open identify results/selection.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearSelection
         * @introduced 2.4
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ClearSelection"): TypedCommand<{
            (): void;
        }>;
        /**
         * Clears locally stored offline data for the current application.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearStorageForApplication
         * @param promptUser Whether to display a prompt to the user before clearning.
         * @introduced 1.2
         * @gcx-command-category Offline/Online
         */
        (commandName: "ClearStorageForApplication"): TypedCommand<{
            (promptUser?: boolean): void;
        }>;
        /**
         * Clears all offline data for the current domain. This includes data for all applications loaded from the current domain.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearStorageForDomain
         * @param promptUser Whether to display a prompt to the user before clearning.
         * @introduced 1.1
         * @gcx-command-category Offline/Online
         */
        (commandName: "ClearStorageForDomain"): TypedCommand<{
            (promptUser?: boolean): void;
        }>;
        /**
         * Removes temporary markup created by the command `AddTemporaryMarkupGeometry`.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ClearTemporaryMarkup
         * @introduced 1.0
         * @gcx-command-category Markup
         */
        (commandName: "ClearTemporaryMarkup"): TypedCommand<{
            (): void;
        }>;
        /**
         * Closes the BottomPanelRegion, if it is present in the current shell.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CloseBottomRegion
         * @introduced 1.3
         * @gcx-command-category Region and View
         */
        (commandName: "CloseBottomRegion"): TypedCommand<{
            (): void;
        }>;
        /**
         * Closes the data frame, if it is present in the current shell.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CloseDataFrame
         * @introduced 1.0
         * @gcx-command-category Region and View
         */
        (commandName: "CloseDataFrame"): TypedCommand<{
            (): void;
        }>;
        /**
         * Closes the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CloseFeatureSetCollection
         * @param fscId The ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} to close.
         * @introduced 1.1
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "CloseFeatureSetCollection"): TypedCommand<{
            (fscId: string): void;
        }>;
        /**
         * Closes the Results Frame, in shells where it is present and active.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CloseResultsFrame
         * @introduced 1.1
         * @gcx-command-category Region and View
         */
        (commandName: "CloseResultsFrame"): TypedCommand<{
            (): void;
        }>;
        /**
         * Closes the Overview Map when it is present.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CloseOverviewMap
         * @introduced 2.4
         * @gcx-command-category Map Display
         */
        (commandName: "CloseOverviewMap"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays a confirm.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name Confirm
         * @param message The body of the confirmation.
         * @param title The title of the confirmation.
         * @param callback A callback to execute with the result of the confirmation (`true` or `false`).
         * @introduced 1.0
         * @gcx-workflow-requirements In order to use this command in a workflow, you must omit the `callback` parameter.
         * @gcx-command-category Dialog
         */
        (commandName: "Confirm"): TypedCommand<{
            (message: string, title: string, callback: (confirmResult: boolean) => void, options?: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ConfirmOptionsArgs): void;
        }>;
        /**
         * Creates a feature attachment.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CreateAttachment
         * @param args An object with the following members: mapService, layer, feature, featureUrl, filename, contentType, payload, successCallback, errorCallback.
         * @introduced 1.1
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "CreateAttachment"): TypedCommand<{
            (arg: {
                mapService: geocortex.essentials.MapService;
                layer: esri.layers.FeatureLayer;
                feature: esri.Graphic;
                featureUrl: string;
                filename: string;
                contentType: string;
                payload;
                string;
                successCallback: () => void;
                errorCallback: (error: Error) => void;
            }): void;
        }>;
        /**
         * Creates a new feature.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CreateFeature
         * @param arg An object with members: mapService, feature, successCallback, errorCallback.
         * @introduced 1.1
         * @gcx-command-category Editing
         */
        (commandName: "CreateFeature"): TypedCommand<{
            (arg: commandArgs.EditFeatureArgs): void;
        }>;
        /**
         * Creates new graphics. These edits are only applied to the graphics layer in memory.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CreateGraphicsInMemory
         * @param args An instance of {@link EditInMemoryArgs} describing the graphics to create, with the following properties: `graphics`, `graphicsLayer`, `successCallback` (optional), `errorCallback` (optional).
         * `graphics` is an array of graphics to create.
         * `graphicsLayer` is the graphics layer to use to create the graphics.
         * `successCallback` is a callback function to call upon successfully creating the graphics.
         * `errorCallback` is a callback function to call when an error occurs while creating the graphics.
         * @introduced 2.5
         * @private
         */
        (commandName: "CreateGraphicsInMemory"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.EditInMemoryArgs): void;
        }>;
        /**
         * Creates a new highlight layer with the specified name, if one does not already exist.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CreateHighlightLayer
         * @param layerName The name of the new layer to create.
         * @param fillColor the color to fill the highlight symbol with
         * @param borderColor the color of the highlight symbol outline
         * @introduced 1.2
         * @gcx-command-category Highlighting
         */
        (commandName: "CreateHighlightLayer"): TypedCommand<{
            (layerName: string, fillColor?: any, borderColor?: any): void;
        }>;
        /**
         * Activates the markup style picker view based on the type name of geometry provided.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CreateMarkupStyleView
         * @param markupTypeName Either "point", "line", "polygon", or "text", depending on the style selector you want to activate.
         * If null is passed, it checks to see if you are editing a piece of markup and then activates the correct view.
         * @introduced 2.0
         * @gcx-command-category Markup
         */
        (commandName: "CreateMarkupStyleView"): TypedCommand<{
            (markupTypeName?: string): void;
        }>;
        /**
         * Creates a new named, saved selection based on the supplied {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CreateSelection
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.SelectionArgs} object with the following members: `name`, `featureSetCollection` (optional), `successCallback` (optional), `errorCallback` (optional).
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "CreateSelection"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.SelectionArgs): void;
        }>;
        /**
         * Launch the barcode scanner, and use the result to create a new feature or edit an existing feature.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CreateOrEditFeatureFromBarcodeScan
         * @param args An object that implements the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.CreateOrEditFeatureFromBarcodeScanArgs} interface with the following properties:
         * `featureServiceId` is ID of the feature service for which to create or edit a feature.
         * `scanResultFieldName` is the field name for which to set when creating a new feature, or search to edit an existing feature.
         * @introduced 2.5
         * @gcx-command-category Scanning
         */
        (commandName: "CreateOrEditFeatureFromBarcodeScan"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.CreateOrEditFeatureFromBarcodeScanArgs): void;
        }>;
        /**
         * Creates a related table record.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CreateRelatedRecord
         * @param arg An object with the following members: mapService, layer, feature, relatedFeature, relationshipOrigin, relationshipDestination, successCallback, errorCallback.
         * @introduced 1.1
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "CreateRelatedRecord"): TypedCommand<{
            (arg: commandArgs.EditRelatedRecordArgs): void;
        }>;
        /**
         * Cut graphics using a polyline, updating the geometry of the original graphic and creating new graphics for each new geometry. Created graphics will copy
         * attribute values from the original graphic, but can be updated in the successCallback. These edits are only applied to the graphics layer in memory.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CutGraphicsInMemory
         * @param args An instance of {@link CutGraphicsArgs} describing the graphics to cut.
         * @introduced 2.5
         * @private
         */
        (commandName: "CutGraphicsInMemory"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.CutGraphicsArgs): void;
        }>;
        /**
         * Deactivates buffering, if active, for the specified command(s).
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeactivateBuffering
         * @param args A string or array of strings specifying the command(s) for which to deactivate buffering.
         * @introduced 2.5
         * @gcx-command-category Buffering
         */
        (commandName: "DeactivateBuffering"): TypedCommand<{
            (args: string | string[]): void;
        }>;
        /**
        * Deactivates buffering for the specified command and dismisses the associated Buffer Options dialog if it's active.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name DectivateBufferingAndDisplayOptions
        * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.DisplayBufferOptionsArgs} object or string specifying the command for which to deactivate Buffer Options and dismiss the dialog.
        * @introduced 2.5
        * @gcx-command-category Buffering
        */
        (commandName: "DeactivateBufferingAndDismissOptions"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.DisplayBufferOptionsArgs | string): void;
        }>;
        /**
         * Deactivates any workflow container views associated with a given workflow.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeactivateContainersForWorkflow
         * @param workflowId The ID of the workflow for which to deactivate container views.
         * @private
         */
        (commandName: "DeactivateContainersForWorkflow"): TypedCommand<{
            (workflowId: string): void;
        }>;
        /**
         * Deactivates the context menu view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeactivateContainersForWorkflow
         * @introduced 2.6
         * @private
         */
        (commandName: "DeactivateContextMenu"): TypedCommand<{
            (): void;
        }>;
        /**
         * Deletes a feature attachment
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteAttachment
         * @param arg An object with the following members: mapService, layer, feature, featureUrl, filename, contentType, payload, successCallback, errorCallback.
         * @private
         */
        (commandName: "DeleteAttachment"): TypedCommand<{
            (arg: {
                mapService: geocortex.essentials.MapService;
                layer: esri.layers.FeatureLayer;
                feature: esri.Graphic;
                featureUrl: string;
                filename: string;
                contentType: string;
                payload;
                string;
                successCallback: () => void;
                errorCallback: (error: Error) => void;
            }): void;
        }>;
        /**
         * Deletes all plotted Coordinates from the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteAllCoordinates
         * @introduced 2.6
         * @gcx-command-category PlotCoordinates
         */
        (commandName: "DeleteAllCoordinates"): TypedCommand<{
            (): void;
        }>;
        /**
         * Deletes one or many plotted Coordinates from the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteCoordinates
         * @param descIds The string id, or array of string id's of the coordinate(s) to delete from the map.
         * @introduced 2.6
         * @gcx-command-category PlotCoordinates
         */
        (commandName: "DeleteCoordinates"): TypedCommand<{
            (descIds: string | string[]): void;
        }>;
        /**
         * Edits a plotted Coordinate on the map or creates a new coordinate in edit mode.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name EditCoordinate
         * @param descId The string id of the coordinate to edit. If unspecified, a new coordinate will be created in edit mode.
         * @introduced 2.6
         * @gcx-command-category PlotCoordinates
         */
        (commandName: "EditCoordinate"): TypedCommand<{
            (descId?: string): void;
        }>;
        /**
         * Deletes a feature.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteFeature
         * @param arg An object with the following members: mapService, feature, successCallback, errorCallback.
         * @introduced 1.1
         * @gcx-command-category Editing
         */
        (commandName: "DeleteFeature"): TypedCommand<{
            (arg: {
                mapService: geocortex.essentials.MapService;
                feature: esri.Graphic;
                successCallback?: () => void;
                errorCallback?: (error: Error) => void;
            }): void;
        }>;
        /**
         * Deletes graphics. These edits are only applied to the graphics layer in memory.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteGraphicsInMemory
         * @param args An instance of {@link EditInMemoryArgs} describing the graphics to delete.
         * @introduced 2.5
         * @private
         */
        (commandName: "DeleteGraphicsInMemory"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.EditInMemoryArgs): void;
        }>;
        /**
         * Removes the given entry from the edit log, then saves the edit log.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteFromEditLog
         * @param editLogEntry The edit log entry to remove.
         * @introduced 1.1
         * @gcx-command-category Editing
         */
        (commandName: "DeleteFromEditLog"): TypedCommand<{
            (editLogEntry: any): void;
        }>;
        /**
         * Deletes markup that intersects the extent of the provided geometry, prompting the user if multiple pieces of markup are selected for deletion.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteMarkup
         * @param geometry The geometry to use for selecting markup to delete.
         * @introduced 2.0
         * @gcx-command-category Markup
         */
        (commandName: "DeleteMarkup"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
         * Deletes measurement markup that intersects the extent of the provided geometry, prompting the user if multiple pieces of measurement markup are selected for deletion.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteMeasurement
         * @param geometry The geometry to use for selecting measurement markup to delete.
         * @introduced 2.1
         * @gcx-command-category Measurement
         */
        (commandName: "DeleteMeasurement"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
         * Deletes a project.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteProject
         * @param project The unique ID of the project to delete, or an instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project} containing the project to delete.
         * @introduced 2.6
         * @gcx-command-category Projects
         */
        (commandName: "DeleteProject"): TypedCommand<{
            (project: string | geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project): void;
        }>;
        /**
         * Deletes a named selection.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteSelection
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.SelectionArgs} object with the following members: `name`, `featureSetCollection` (optional), `successCallback` (optional), `errorCallback` (optional).
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "DeleteSelection"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.SelectionArgs): void;
        }>;
        /**
         * Deletes a related table record.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DeleteRelatedRecord
         * @param arg An object with the following members: mapService, layer, feature, relatedFeature, relationshipOrigin, relationshipDestination, successCallback, errorCallback.
         * @introduced 1.1
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "DeleteRelatedRecord"): TypedCommand<{
            (arg: commandArgs.EditRelatedRecordArgs): void;
        }>;
        /**
        * Prevents the commands configured to execute on map click from executing and also prevents the `MapClickedEvent` from firing.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name DisableMapClick
        * @introduced 2.4
        * @gcx-command-category Map Widget
        */
        (commandName: "DisableMapClick"): TypedCommand<{
            (): void;
        }>;
        /**
         * Disables the display of map tips on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DisableMapTips
         * @introduced 2.3.1
         * @gcx-command-category Map Widget
         */
        (commandName: "DisableMapTips"): TypedCommand<{
            (): void;
        }>;
        /**
         * Disables the display of pushpins on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DisablePushpins
         * @introduced 2.1
         * @gcx-command-category Pushpins
         */
        (commandName: "DisablePushpins"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays the Buffer Options dialog for the specified target command, and executes a optional delegate function when the user clicks the Continue button.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DisplayBufferOptions
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.DisplayBufferOptionsArgs} object or string defining the target command for which to show Buffer Options.
         * A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.DisplayBufferOptionsArgs} object has the following properties: `targetCommand` and `delegateFunction` (optional).
         * `targetCommand` is the command for which to activate buffering and display Buffer Options.
         * `delegateFunction` is a delegate function to execute when the user clicks the Continue button on the Buffer Options dialog.
         * @introduced 2.5
         * @gcx-command-category Buffering
         */
        (commandName: "DisplayBufferOptions"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.DisplayBufferOptionsArgs | string): void;
        }>;
        /**
         * Opens the specified chart in the charting view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DisplayChartById
         * @param chartId The chart ID.
         * @introduced 2.3
         * @gcx-command-category Charting
         */
        (commandName: "DisplayChartById"): TypedCommand<{
            (chartId: string): void;
        }>;
        /**
         * Opens the specified external component in the external components view. If this component is open in a seperate window, it will be closed.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DisplayDockedExternalComponentById
         * @param ecId The ID of the external component to dock in the viewer.
         * @introduced 2.4
         * @gcx-command-category Integration
         */
        (commandName: "DisplayDockedExternalComponentById"): TypedCommand<{
            (ecId: string): void;
        }>;
        /**
         * Opens the specified external component in a seperate window from the viewer. If this component is open in the viewer, it will be closed.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DisplayUndockedExternalComponentById
         * @param ecId The ID of the external component to open in a new window.
         * @introduced 2.4
         * @gcx-command-category Integration
         */
        (commandName: "DisplayUndockedExternalComponentById"): TypedCommand<{
            (ecId: string): void;
        }>;
        /**
         * Displays a view in a workflow container.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DisplayWorkflowContainerContent
         * @param entry An object with the following properties: containerName, view, activityContext.
         * @introduced 1.0
         * @gcx-workflow-disabled
         * @gcx-command-category Workflow
         */
        (commandName: "DisplayWorkflowContainerContent"): TypedCommand<{
            (entry: {
                containerName: string;
                view: ui.ViewBase;
                activityContext: geocortex.workflow.ActivityContext;
            }): void;
        }>;
        /**
          * Edits markup that intersects the extent of the provided geometry.
          * @docs-gcx-command geocortex.essentialsHtmlViewer
          * @name EditMarkup
          * @param geometry The geometry to use for selecting markup to edit.
          * @introduced 2.0
          * @gcx-command-category Markup
          */
        (commandName: "EditMarkup"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
        * Enables all identifiable layers such that they participate in Identify operations.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name EnableAllLayersForIdentify
        * @introduced 2.5
        * @gcx-command-category Identify
        */
        (commandName: "EnableAllLayersForIdentify"): TypedCommand<{
            (): void;
        }>;
        /**
        * Disables all identifiable layers such that they do not participate in Identify operations.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name DisableAllLayersForIdentify
        * @introduced 2.5
        * @gcx-command-category Identify
        */
        (commandName: "DisableAllLayersForIdentify"): TypedCommand<{
            (): void;
        }>;
        /**
        * Enables the specified layer, if it's identifiable, such that it participates in Identify operations.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name EnableLayerForIdentify
        * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.LayerDescriptor} object specifying the layer to enable for identify.
        * @introduced 2.5
        * @gcx-command-category Identify
        */
        (commandName: "EnableLayerForIdentify"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.LayerDescriptor): void;
        }>;
        /**
        * Disables the specified layer, if it's in the list of identifiable layers, such that it does not participate in Identify operations.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name DisableLayerForIdentify
        * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.LayerDescriptor} object specifying the layer to enable for identify.
        * @introduced 2.5
        * @gcx-command-category Identify
        */
        (commandName: "DisableLayerForIdentify"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.LayerDescriptor): void;
        }>;
        /**
        * Enables all configured commands to execute on map click and also wires up the `MapClickEvent` to fire when the map is clicked.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name EnableMapClick
        * @introduced 2.4
        * @gcx-command-category Map Widget
        */
        (commandName: "EnableMapClick"): TypedCommand<{
            (): void;
        }>;
        /**
         * Enables the display of map tips on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name EnableMapTips
         * @introduced 2.3.1
         * @gcx-command-category Map Widget
         */
        (commandName: "EnableMapTips"): TypedCommand<{
            (): void;
        }>;
        /**
         * Enables the display of pushpins on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name EnablePushpins
         * @introduced 2.1
         * @gcx-command-category Pushpins
         */
        (commandName: "EnablePushpins"): TypedCommand<{
            (): void;
        }>;
        /**
         * Enables or disables the refinement of a global search from within search hints (if any).
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name EnableSearchRefinement
         * @param enable Whether or not to enable the search refinement.  To hide the refinement button, set to `false`.  The default is `false`.
         * @introduced 2.0
         * @gcx-command-category Search
         */
        (commandName: "EnableSearchRefinement"): TypedCommand<{
            (enable?: boolean): void;
        }>;
        /**
         * Separates multi-part graphics into individual graphics. Created graphics will copy attribute values from the original
         * graphic, but can be updated in the successCallback. These edits are only applied to the graphics layer in memory.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ExplodeGraphicsInMemory
         * @param args An instance of {@link EditInMemoryArgs} describing the graphics to separate.
         * @introduced 2.5
         * @private
         */
        (commandName: "ExplodeGraphicsInMemory"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.EditInMemoryArgs): void;
        }>;
        (commandName: "ExportResultsTo"): TypedCommand<{
            (args: {
                format: string;
                fsc: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection;
            }): void;
        }>;
        /**
         * Exports the markup layer to a Shapefile.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ExportMarkupLayer
         * @introduced 2.6
         * @gcx-command-category Markup
         */
        (commandName: "ExportMarkupLayer"): TypedCommand<{
            (): void;
        }>;
        /**
         * Exports graphics layer to the specified format.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ExportGraphicsLayer
         * @introduced 2.6
         * @param args a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ExportGraphicsLayerArgs} object.
         * @gcx-command-category Export
         */
        (commandName: "ExportGraphicsLayer"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ExportGraphicsLayerArgs): void;
        }>;
        /**
         * Lists all the available metadata for named selections.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name FindAllSelectionMetadata
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.FindAllSelectionMetadataArgs} object with the following optional members: `successCallback` and `errorCallback`.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "FindAllSelectionMetadata"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.FindAllSelectionMetadataArgs): void;
        }>;
        /**
         * Looks up metadata about a particular named selection.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name FindMetadataForSelection
         * @param args An object with the following optional members: `name`, `featureSetCollectionId`, `successCallback` and `errorCallback`.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "FindMetadataForSelection"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.FindMetadataForSelectionArgs): void;
        }>;
        /**
         * Looks up a particular named selection.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name FindSelection
         * @param args An object with the following optional members: `name`, `successCallback` and `errorCallback`.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "FindSelection"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.FindSelectionArgs): void;
        }>;
        /**
         * Focuses on the first selectable input in the passed view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name FocusOnFirstInputInView
         * @param view The view to focus on.
         * @introduced 2.4
         * @gcx-command-category Region and View
         */
        (commandName: "FocusOnFirstInputInView"): TypedCommand<{
            (view: framework.ui.ViewBase): void;
        }>;
        /**
         * Set the preferred command to open the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} for the given source name.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name FSMCollectionSetCommand
         * @param sourceName The string source name whose command you want to change.
         * @param commandName The command to run for the source name.
         * @introduced 1.2
         * @deprecated 2.4 This is now an internal implementation detail. For control over how different sources of features
         * populate the viewer, consult the `resultMappings` option in the viewer's configuration file(s).
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "FSMCollectionSetCommand"): TypedCommand<{
            (sourceName: string, commandName: string): void;
        }>;
        /**
         * Zooms to the current location of the device when it becomes available.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name Geolocate
         * @param options (Optional) A {@link GeolocateArgs} object with the following optional properties: `profile`, `accuracyThreshold` and `timeLimit`.
         * `profile`: A string representing the name of a single geolocation profile to use from those defined in the Geolocate view model's configuration.
         * `accuracyThreshold`: A number representing the accuracy radius, in meters, at which the geolocation process will be satisfied.
         * `timeLimit`: A number representing the duration, in milliseconds, that the geolocation process will spend awaiting better geolocation data before giving up.
         * `toolFriendly`: A boolean indicating whether or not to tolerate an active tool. If `false`, any active tool will be cleared before the geolocation proceeds.  The default is `false`.
         * @introduced 1.1
         * @gcx-command-category Geolocation
         */
        (commandName: "Geolocate"): TypedCommand<{
            (options?: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.GeolocateArgs): void;
        }>;
        /**
         * Enables the following of the device's location when it is available, panning the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name GeolocateFollow
         * @introduced 2.3
         * @gcx-command-category Geolocation
         */
        (commandName: "GeolocateFollow"): TypedCommand<{
            (): void;
        }>;
        /**
         * Stops the tracking and following of the device's location.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name GeolocateStop
         * @introduced 2.3
         * @gcx-command-category Geolocation
         */
        (commandName: "GeolocateStop"): TypedCommand<{
            (): void;
        }>;
        /**
         * Enables the tracking of the device's location when it is available, without panning the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name GeolocateTrack
         * @introduced 2.3
         * @gcx-command-category Geolocation
         */
        (commandName: "GeolocateTrack"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays a circle around the user's position that indicates the accuracy of the GPS reading.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name GeolocateShowBuffer
         * @introduced 2.3
         * @gcx-command-category Geolocation
         */
        (commandName: "GeolocateShowBuffer"): TypedCommand<{
            (): void;
        }>;
        /**
         * Hides the circle around the user's position that indicates the accuracy of the GPS reading.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name GeolocateHideBuffer
         * @introduced 2.3
         * @gcx-command-category Geolocation
         */
        (commandName: "GeolocateHideBuffer"): TypedCommand<{
            (): void;
        }>;
        /**
         * Gets the edit log, passing it into a callback. If an error occurs, the error is passed into the callback.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name GetEditLog
         * @param callback A callback function that the edit log is passed to.
         * @introduced 1.1
         * @gcx-command-category Editing
         */
        (commandName: "GetEditLog"): TypedCommand<{
            (callback: (response: any, responseJson?: any) => void): void;
        }>;
        /**
         * Creates view for all configured feature details providers and embeds them into feature details dialog.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name GetFeatureDetailsProviders
         * @param feature The current feature in context.
         * @private
         */
        (commandName: "GetFeatureDetailsProviders"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Gets features related to a MapService based on a specific relationship and object ID.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name GetRelatedFeatures
         * @param arg An object with the following members: `mapService`, `relationshipId`, `objectId`, `successCallback`, `errorCallback`.
         * @introduced 1.1
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "GetRelatedFeatures"): TypedCommand<{
            (arg: {
                mapService: geocortex.essentials.MapService;
                relationshipId: number;
                objectId: number;
                successCallback: (results: esri.Graphic[]) => void;
                errorCallback: (error: Error) => void;
                currentFeature?: esri.Graphic | essentialsHtmlViewer.mapping.infrastructure.Feature;
            }): void;
        }>;
        /**
         * Performs a global search using all active providers.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name GlobalSearch
         * @param searchText The text for which to search.
         * @introduced 1.1
         * @gcx-command-category Search
         */
        (commandName: "GlobalSearch"): TypedCommand<{
            (searchText: string): void;
        }>;
        /**
         * Generates a sharing link, passing it into a callback.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HandleGenerateSharingLink
         * @param callback A callback to execute with the generated sharing link.
         * @introduced 2.4
         * @gcx-command-category Share
         */
        (commandName: "HandleGenerateSharingLink"): TypedCommand<{
            (callback: (myURL: string) => void): void;
        }>;
        /**
         * Hides the feature attribute editor used to edit feature attributes.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideFeatureAttributeEditor
         * @introduced 1.3
         * @deprecated 2.3 This command should never be used as it can lead to a confusing state,
         * since it only hides the editing pane without canceling feature editing.
         * @gcx-command-category Offline/Online
         */
        (commandName: "HideFeatureAttributeEditor"): TypedCommand<{
            (): void;
        }>;
        /**
         * Prevents the display of map tips by setting their visibility to `false`.  Map tips must be enabled for this command to work.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideAllMapTips
         * @introduced 2.3.1
         * @gcx-command-category Map Widget
         */
        (commandName: "HideAllMapTips"): TypedCommand<{
            (): void;
        }>;
        /**
         * Hides all plotted Coordinates temporarily.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideAllCoordinates
         * @introduced 2.6
         * @gcx-command-category PlotCoordinates
         */
        (commandName: "HideAllCoordinates"): TypedCommand<{
            (): void;
        }>;
        /**
         * Hides one or many plotted Coordinates temporarily.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideCoordinates
         * @param descIds The string id, or array of string id's of the coordinate(s) to hide.
         * @introduced 2.6
         * @gcx-command-category PlotCoordinates
         */
        (commandName: "HideCoordinates"): TypedCommand<{
            (descIds: string | string[]): void;
        }>;
        /**
         * Hides any coordinate actions view that is currently active.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideCoordinateActions
         * @introduced 2.6
         * @gcx-command-category PlotCoordinates
         */
        (commandName: "HideCoordinateActions"): TypedCommand<{
            (): void;
        }>;
        /**
         * Removes a modal message.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideFeatureLayerModalMessage
         * @private
         */
        (commandName: "HideFeatureLayerModalMessage"): TypedCommand<{
            (): void;
        }>;
        /**
         * Hides the feature template picker used to create new features.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideFeatureTemplatePicker
         * @introduced 1.3
         * @gcx-command-category Editing
         */
        (commandName: "HideFeatureTemplatePicker"): TypedCommand<{
            (): void;
        }>;
        /**
         * Hides the log view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideLog
         * @introduced 2.0
         * @gcx-command-category Log
         */
        (commandName: "HideLog"): TypedCommand<{
            (): void;
        }>;
        /**
         * Removes an element previously anchored to the map using the command `ShowMapElement`.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideMapElement
         * @param elementId The ID of the element to remove.
         * @introduced 1.0
         * @gcx-command-category Map Widget
         */
        (commandName: "HideMapElement"): TypedCommand<{
            (elementId: string): void;
        }>;
        /**
         * Prevents the display of map tips by setting their visibility to `false`, and suspends displaying map tips.  Map tips must be enabled for this command to work.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideMapTips
         * @introduced 2.3.1
         * @gcx-command-category Map Widget
         */
        (commandName: "HideMapTips"): TypedCommand<{
            (): void;
        }>;
        /**
         * Prevents the display of markers by setting their visibility to `false`.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HideMarkers
         * @introduced 2.5
         * @private
         */
        (commandName: "HideMarkers"): TypedCommand<{
            (): void;
        }>;
        /**
         * Prevents the display of pushpins by setting their visibility to `false`.  Pushpins must be enabled for this command to work.
         * Pushpins must be enabled for this command to work.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HidePushpins
         * @introduced 2.1
         * @gcx-command-category Pushpins
         */
        (commandName: "HidePushpins"): TypedCommand<{
            (): void;
        }>;
        /**
         * Highlights all of the features in the specified feature set in the charting highlight layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HighlightChartFeatureSet
         * @param featureSet The Geocortex feature set to highlight.
         * @introduced 2.3
         * @gcx-workflow-disabled
         * @gcx-command-category Charting
         */
        (commandName: "HighlightChartFeatureSet"): TypedCommand<{
            (featureSet: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet): void;
        }>;
        /**
         * Highlights all of the features in the specified Esri feature set in the active highlight layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HighlightEsriFeatureSet
         * @param esriFeatureSet The set of features to highlight.  An instance of {@link esri.tasks.FeatureSet}.
         * @introduced 1.2
         * @gcx-hyperlink-disabled
         * @gcx-command-category Highlighting
         */
        (commandName: "HighlightEsriFeatureSet"): TypedCommand<{
            (featureSet: esri.tasks.FeatureSet): void;
        }>;
        /**
         * Highlights the feature in the active highlight layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HighlightFeature
         * @param feature The Geocortex feature to highlight.
         * @introduced 1.2
         * @gcx-workflow-disabled
         * @gcx-command-category Highlighting
         */
        (commandName: "HighlightFeature"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Highlights the feature in the default highlight layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HighlightFeatureDefault
         * @param feature The Geocortex feature to highlight.
         * @introduced 1.2
         * @deprecated 1.3 Use SetActiveHighlightLayerDefault followed by HighlightFeature instead.
         * @gcx-workflow-disabled
         * @gcx-command-category Highlighting
         */
        (commandName: "HighlightFeatureDefault"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Highlights all of the features in the specified FeatureSet in the active highlight layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name HighlightFeatureSet
         * @param featureSet The Geocortex feature set to highlight.
         * @introduced 1.2
         * @gcx-workflow-disabled
         * @gcx-command-category Highlighting
         */
        (commandName: "HighlightFeatureSet"): TypedCommand<{
            (featureSet: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet): void;
        }>;
        /**
         * Executes an identify operation on a geometry.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name Identify
         * @param geometry The ESRI geometry to identify with.
         * @param args Alternatively, specify the Identify arguments. An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.IdentifyArgs}.
         * @introduced 1.0
         * @gcx-command-category Identify
         */
        (commandName: "Identify"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.IdentifyArgs): void;
        }>;
        /**
         * Activates the Buffer Options dialog, buffers input geometry using settings specified by the user, places temporary markup on the map and identifies using the buffered geometry.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name IdentifyBufferedGeometry
         * @param geometry The Esri geometry with which to buffer and identify.
         * @introduced 2.5
         * @gcx-command-category Buffering
         */
        (commandName: "IdentifyBufferedGeometry"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
         * Activates the Buffer Options dialog, buffers input feature geometry using settings specified by the user, places temporary markup on the map and identifies using the buffered geometry.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name IdentifyBufferedFeature
         * @param feature An {@link esri.Graphic} or {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} that has the geometry with which to buffer and identify.
         * @introduced 2.5
         * @gcx-command-category Buffering
         */
        (commandName: "IdentifyBufferedFeature"): TypedCommand<{
            (feature: esri.Graphic | essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Activates the Buffer Options dialog, buffers the specified feature set geometry using settings specified by the user, places temporary markup on the map and identifies using the buffered geometry.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name IdentifyBufferedFeatureSet
         * @param featureSetOrFeatureSetColl A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet} or {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or `string` representing the
         * feature set that has the geometry with which to buffer and identify. If a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} ID is specified, the currently selected feature set will be used as input. If no feature set is currently selected, the first one will be used.
         * @introduced 2.5
         * @gcx-command-category Buffering
         */
        (commandName: "IdentifyBufferedFeatureSet"): TypedCommand<{
            (featureSetOrFeatureSetColl: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet | essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | string): void;
        }>;
        /**
         * Activates the Buffer Options dialog, buffers the specified feature set collection geometries using settings specified by the user, places temporary markup on the map and identifies using the buffered geometry.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name IdentifyBufferedFeatureSetCollection
         * @param fsc A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or `string` representing the feature set collection that has the geometries with which to buffer and identify.
         * @introduced 2.5
         * @gcx-command-category Buffering
         */
        (commandName: "IdentifyBufferedFeatureSetCollection"): TypedCommand<{
            (fsc: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | string): void;
        }>;
        /**
         * Executes an Identify operation on the given geometry and sets "MapTip" as the feature source.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name InvokeMapTip
         * @param geometry The geometry for which to invoke the map tip.
         * @introduced 1.1
         * @gcx-command-category Map Widget
         */
        (commandName: "InvokeMapTip"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
         * Tells the Geocortex Essentials Site object to begin initialization.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name InitializeSite
         * @param mapControl The {@link esri.Map} object with which this Site will be initialized.
         * @introduced 1.0
         * @gcx-command-category Start-Up
         */
        (commandName: "InitializeSite"): TypedCommand<{
            (mapControl: esri.Map): void;
        }>;
        /**
         * Integrate a {@link essentials.MapService} and its sub-components into the viewer and onto the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name AddMapService
         * @param mapService The {@link essentials.MapService} which contains a service layer and Geocortex layers to be integrated
         * onto the map and into the viewer. Supported map service types include: {@link essentials.FeatureLayerService}, {@link essentials.KmlService},
         * and {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.LayerIntegrationUtils.LocalFeatureLayerService}.
         * @introduced 2.6
         * @gcx-command-category Layer List
         */
        (commandName: "AddMapService"): TypedCommand<{
            (mapService: geocortex.essentials.MapService): void;
        }>;
        /**
         * Lauches a QR scan, then calls the provided callback with the result.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name LaunchBarcodeScannerWithCallback
         * @param callback When a QR scan completes, this function is called and passed the scanning result object as an argument.
         * @introduced 2.5
         * @gcx-command-category Scanning
         */
        (commandName: "LaunchBarcodeScannerWithCallback"): TypedCommand<{
            (callback: (result) => void): void;
        }>;
        /**
         * Wires up a {@link geocortex.essentialsHtmlViewer.integration.PostMessageTransport} and enables
         * bi-directional communication with the component.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ListenToExternalComponentFrame
         * @param projectArgs An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.integration.ComponentFrameInfo} describing an external component.
         * @introduced 2.4
         * @gcx-command-category Integration
         */
        (commandName: "ListenToExternalComponentFrame"): TypedCommand<{
            (arg: geocortex.essentialsHtmlViewer.mapping.infrastructure.integration.ComponentFrameInfo): void;
        }>;
        /**
         * Loads a project and applies it to the viewer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name LoadProject
         * @param project The unique ID of the project to load, or an instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project} containing the project data.
         * @introduced 2.6
         * @gcx-command-category Projects
         */
        (commandName: "LoadProject"): TypedCommand<{
            (project: string | geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project): void;
        }>;
        /**
         * Presents a user interface for managing the list of available named, saved selections.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ListSelections
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ListSelections"): TypedCommand<{
            (): void;
        }>;
        /**
         * Logs an event for Geocortex Optimizer.
         * @name LogOptimizerEvent
         * @param eventName The type of event to log.
         * @param eventInfo Information about the event; varies based on the eventName.
         * @introduced 2.1
         * @gcx-command-category Optimizer
         */
        (commandName: "LogOptimizerEvent"): TypedCommand<{
            (eventName: string, eventInfo: string): void;
        }>;
        /**
         * Tells the map control to resize itself. This should be called after altering the map container's dimensions.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name MapResize
         * @introduced 1.0
         * @gcx-command-category Map Display
         */
        (commandName: "MapResize"): TypedCommand<{
            (): void;
        }>;
        /**
        * Instructs the region hosting a view to maximize itself, if it supports this action. As of version 2.4, only the `BottomPanelRegion` and its subregions support this action.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name MaximizePanel
        * @param viewId The ID of the view requesting its region to maximize itself.
        * @introduced 2.4
        * @gcx-command-category Region and View
        */
        (commandName: "MaximizePanel"): TypedCommand<{
            (viewId: string): void;
        }>;
        /**
         * Computes the area, perimeter and individual segment lengths for the specified polygon geometry and plots it on the map along with its measurements.
         * Uses the spatial reference, calculation mode and units specified for the measurement module
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name MeasureArea
         * @param polygon A polygon geometry object.  (Note: An Esri graphic or Geocortex feature may also be provided as arguments instead of a polygon geometry.)
         * @introduced 2.0
         * @gcx-command-category Measurement
         */
        (commandName: "MeasureArea"): TypedCommand<{
            (polygon: esri.geometry.Polygon): void;
        }>;
        /**
         * Computes the total and segment distance measurements for the specified Polyline geometry and plots it on the map along with its measurements.
         * Uses the spatial reference, calculation mode and units specified for the measurement module.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name MeasureDistance
         * @param polyline A polyline geometry object (Note: An Esri graphic or Geocortex feature may also be provided as arguments instead of a polyline geometry)
         * @introduced 2.0
         * @gcx-command-category Measurement
         */
        (commandName: "MeasureDistance"): TypedCommand<{
            (polyline: esri.geometry.Polyline): void;
        }>;
        /**
         * Opens the data frame, if it is present in the current shell.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name OpenDataFrame
         * @introduced 1.0
         * @gcx-command-category Region and View
         */
        (commandName: "OpenDataFrame"): TypedCommand<{
            (): void;
        }>;
        /**
         * Opens the bottom region, if it is present in the current shell.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name OpenBottomRegion
         * @introduced 1.3
         * @gcx-command-category Region and View
         */
        (commandName: "OpenBottomRegion"): TypedCommand<{
            (): void;
        }>;
        /**
         * Opens the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} with the given ID.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name OpenFeatureSetCollection
         * @param fscId The ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} to open.
         * @introduced 1.1
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "OpenFeatureSetCollection"): TypedCommand<{
            (fscId: string): void;
        }>;
        /**
         * Opens a new browser window to the authenticated users ArcGIS Portal 'My Content' page.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name OpenPortalMyContentWindow
         * @introduced 2.6
         * @gcx-command-category Navigation
         */
        (commandName: "OpenPortalMyContentWindow"): TypedCommand<{
            (): void;
        }>;
        /**
         * Opens the Results Frame in shells where it is present.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name OpenResultsFrame
         * @introduced 1.1
         * @gcx-command-category Region and View
         */
        (commandName: "OpenResultsFrame"): TypedCommand<{
            (): void;
        }>;
        /**
         * Opens the Overview Map when it is present.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name OpenOverviewMap
         * @introduced 2.4
         * @gcx-command-category Map Display
         */
        (commandName: "OpenOverviewMap"): TypedCommand<{
            (): void;
        }>;
        /**
         * Pans the map down on the vertical axis.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name PanDown
         * @param panStep The percentage of the current map view to pan down. @introduced 2.4
         * @introduced 1.3
         * @gcx-command-category Navigation
         */
        (commandName: "PanDown"): TypedCommand<{
            (panStep?: number): void;
        }>;
        /**
         * Pans the map left on the horizontal axis.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name PanLeft
         * @param panStep The percentage of the current map view to pan to the left. @introduced 2.4
         * @introduced 1.3
         * @gcx-command-category Navigation
         */
        (commandName: "PanLeft"): TypedCommand<{
            (panStep?: number): void;
        }>;
        /**
         * Pans the map right on the vertical axis.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name PanRight
         * @param panStep The percentage of the current map view to pan to the right. @introduced 2.4
         * @introduced 1.3
         * @gcx-command-category Navigation
         */
        (commandName: "PanRight"): TypedCommand<{
            (panStep?: number): void;
        }>;
        /**
         * Pans to the extent of all the specified features.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name PanToAllFeatures
         * @param features An array containing the features to which to pan.  If empty, no panning occurs.
         * @introduced 2.3
         * @gcx-workflow-disabled
         * @gcx-command-category Navigation
         */
        (commandName: "PanToAllFeatures"): TypedCommand<{
            (features: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature[]): void;
        }>;
        /**
         * Pans to a Geocortex feature.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name PanToFeature
         * @param feature The Geocortex feature to be panned to.
         * @introduced 1.1
         * @gcx-workflow-disabled
         * @gcx-command-category Navigation
         */
        (commandName: "PanToFeature"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Pans to a Geocortex feature if the feature is outside of the map's extent, otherwise nothing happens.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name PanToFeatureIfOutsideMapExtent
         * @param feature The Geocortex feature to be panned to.
         * @introduced 2.4
         * @gcx-workflow-disabled
         * @gcx-command-category Navigation
         */
        (commandName: "PanToFeatureIfOutsideMapExtent"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Pans to a point on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name PanToPoint
         * @param point The point to pan to.
         * @introduced 1.0
         * @gcx-command-category Navigation
         */
        (commandName: "PanToPoint"): TypedCommand<{
            (geometry: esri.geometry.Point): void;
        }>;
        /**
         * Pans the map up on the vertical axis.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name PanUp
         * @param panStep The percentage of the current map view to pan up. @introduced 2.4
         * @introduced 1.3
         * @gcx-command-category Navigation
         */
        (commandName: "PanUp"): TypedCommand<{
            (panStep?: number): void;
        }>;
        /**
        * Plots a coordinate or a number of coordinates on the map.
        * @docs-gcx-command geocortex.essentialsHtmlViewer
        * @name PlotCoordinates
        * @param baseCoords The (@link infrastructure.coordinates.CoordinateBase} (or array of multiple base coordinates) to plot.
        * @introduced 2.6
        * @gcx-command-category PlotCoordinates
        */
        (commandName: "PlotCoordinates"): TypedCommand<{
            (baseCoords: geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates.CoordinateBase | essentialsHtmlViewer.mapping.infrastructure.coordinates.CoordinateBase[]): void;
        }>;
        /**
         * Displays a dialog to create a printable map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name PrintMap
         * @introduced 1.3
         * @gcx-command-category Print
         */
        (commandName: "PrintMap"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays a dialog to export the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowExportMapDialog
         * @introduced 2.4
         * @gcx-command-category Export
         */
        (commandName: "ShowExportMapDialog"): TypedCommand<{
            (): void;
        }>;
        /**
         * Calls a geometry service to project geometries between different coordinate systems.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name Project
         * @param projectArgs An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ProjectArgs}.
         * @introduced 1.1
         * @gcx-hyperlink-disabled
         * @gcx-workflow-disabled
         * @gcx-command-category Projection
         */
        (commandName: "Project"): TypedCommand<{
            (arg: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ProjectArgs): void;
        }>;
        /**
         * Displays a prompt.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name Prompt
         * @param title The title of the prompt box.
         * @param description The text description to show in the prompt.
         * @param defaultText Default text that will appear in the input text box.
         * @param callback An optional callback to fire if the window was closed without clicking OK or Cancel.
         * @introduced 1.0
         * @gcx-workflow-recommendations Instead of using the `Prompt` viewer command in workflows, use the `Prompt` workflow activity that is provided in Workflow Designer.
         * @gcx-command-category Dialog
         */
        (commandName: "Prompt"): TypedCommand<{
            (title: string, description: string, defaultText: string, callback: (inputText: string) => void): void;
        }>;
        /**
         * Resets the timer of the status view model.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name PulseStatus
         * @param statusId ID of the status message whose timer need to be reset.
         * @introduced 1.1
         * @gcx-command-category Map Widget
         */
        (commandName: "PulseStatus"): TypedCommand<{
            (statusId: string): void;
        }>;
        /**
         * Recenters the map to its existing position the next time the map is resized.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RecenterMapOnNextMapResize
         * @introduced 1.1
         * @gcx-command-category Map Display
         */
        (commandName: "RecenterMapOnNextMapResize"): TypedCommand<{
            (): void;
        }>;
        /**
         * Refresh the list of offline maps on the OfflineMapsList view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RefreshOfflineMapsList
         * @introduced 2.6
         * @gcx-command-category Offline Profiles
         */
        (commandName: "RefreshOfflineMapsList"): TypedCommand<{
            (): void;
        }>;
        /**
         * Reverses the last recorded undo operation or transaction.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name Redo
         * @introduced 2.5
         * @gcx-command-category Undo and Redo
         */
        (commandName: "Redo"): TypedCommand<{
            (): void;
        }>;
        /**
         * Performs advanced set operations with multiple lists of results.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CombineResults
         * @param args A {@link CombineResultsArgs} object with the following members: `combineMode`, `featureSetCollectionIds`, `currentResults` (optional), `successCallback` (optional) and `errorCallback` (optional).
         * @introduced 2.6
         * @private
         */
        (commandName: "CombineResults"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.CombineResultsArgs): void;
        }>;
        /**
         * Activates a series of views that guide the user to perform advanced set operations with multiple lists of results.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CombineResultsInteractive
         * @param operationType One of: `union`, `intersect`, `subtract`, `replace`. If not specified, `replace` is used by default.
         * @introduced 2.6
         * @private
         */
        (commandName: "CombineResultsInteractive"): TypedCommand<{
            (args: {
                mode: string;
                currentResults: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | string;
            }): void;
        }>;
        /**
         * Only keeps results from the current set of results that also appear in the supplied {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ResultsIntersect
         * @param args Either a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or a string representing the collection ID.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ResultsIntersect"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | string): void;
        }>;
        /**
         * Replaces the current set of results with the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} supplied as argument.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ResultsReplace
         * @param args Either a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or a string representing the collection ID.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ResultsReplace"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | string): void;
        }>;
        /**
         * Removes the supplied {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} from the current set of results.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ResultsSubtract
         * @param args Either a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or a string representing the collection ID.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ResultsSubtract"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | string): void;
        }>;
        /**
         * Adds the supplied {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} to the current set of results.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ResultsUnion
         * @param args Either a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or a string representing the collection ID.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ResultsUnion"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | string): void;
        }>;
        /**
         * Refresh the list of browsable projects.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RefreshProjectsList
         * @introduced 2.6
         * @gcx-command-category Projects
         */
        (commandName: "RefreshProjectsList"): TypedCommand<{
            (): void;
        }>;
        /**
         * Registers a chart point data adapter if it is not already registered.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RegisterChartPointAdapter
         * @param arg An object with the following members: adapter, sourceType.
         * @private
         */
        (commandName: "RegisterChartPointAdapter"): TypedCommand<{
            (arg: {
                adapter: geocortex.charting.ChartPointAdapterInterface;
                sourceType: string;
            }): void;
        }>;
        /**
         * Registers a search provider if it is not already registered.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RegisterSearchProvider
         * @param provider The search provider instance to be registered.
         * @private
         */
        (commandName: "RegisterSearchProvider"): TypedCommand<{
            (provider: geocortex.essentialsHtmlViewer.mapping.infrastructure.search.SearchProviderBase): void;
        }>;
        /**
         * Registers a {@link geocortex.essentials.Layer} with the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.snapping.SnappingProvider}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RegisterSnappingLayer
         * @param layer The {@link geocortex.essentials.Layer} to be registered.
         * @gcx-command-category Snapping
         */
        (commandName: "RegisterSnappingLayer"): TypedCommand<{
            (layer: geocortex.essentials.Layer): void;
        }>;
        /**
         * Registers multiple layers with the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.snapping.SnappingProvider}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RegisterSnappingLayers
         * @param layers An array of {@link geocortex.essentials.Layer} instances to be registered.
         * @gcx-command-category Snapping
         */
        (commandName: "RegisterSnappingLayers"): TypedCommand<{
            (layers: geocortex.essentials.Layer[]): void;
        }>;
        /**
         * Removes a {@link geocortex.essentials.Layer} from the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.snapping.SnappingProvider}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveSnappingLayer
         * @param layer The {@link geocortex.essentials.Layer} to be removed.
         * @gcx-command-category Snapping
         */
        (commandName: "RemoveSnappingLayer"): TypedCommand<{
            (layer: geocortex.essentials.Layer): void;
        }>;
        /**
         * Removes multiple layers from the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.snapping.SnappingProvider}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RegisterSnappingLayers
         * @param layers An array of {@link geocortex.essentials.Layer} instances to be removed.
         * @gcx-command-category Snapping
         */
        (commandName: "RemoveSnappingLayers"): TypedCommand<{
            (layers: geocortex.essentials.Layer[]): void;
        }>;
        /**
         * Removes a bookmark with the given name, if it exists.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveBookmark
         * @param name The name of the bookmark to remove.
         * @introduced 2.0
         * @gcx-command-category Bookmark
         */
        (commandName: "RemoveBookmark"): TypedCommand<{
            (name: string): void;
        }>;
        /**
         * Removes the specified chart from the charting view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveChartById
         * @param chartId The chart Id.
         * @introduced 2.3
         * @gcx-command-category Charting
         */
        (commandName: "RemoveChartById"): TypedCommand<{
            (chartId: string): void;
        }>;
        /**
         * Removes a cluster layer from an existing Geocortex Layer that holds an Esri FeatureLayer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveClusterLayer
         * @param args Either a ClusterLayerArgs or String representing the Map Service's ID.
         * @introduced 2.5
         * @gcx-command-category Visualization
         */
        (commandName: "RemoveClusterLayer"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ClusterLayerArgs | string): void;
        }>;
        /**
         * Removes an individual feature from the current {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} displayed in the results view.
         * Typically, an end-user would click "Remove from Results" on a map tip to remove the feature from the results.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveFeatureFromResults
         * @param feature The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} to remove from the results view.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "RemoveFeatureFromResults"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Removes the specified collection from the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetManager}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveFeatureSetCollection
         * @param fsc The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} to remove.
         * @introduced 1.2
         * @gcx-workflow-disabled
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "RemoveFeatureSetCollection"): TypedCommand<{
            (fsc: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection): void;
        }>;
        /**
         * Removes the collection specified by ID from the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetManager}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveFeatureSetCollectionById
         * @param fscId ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} to remove.
         * @introduced 1.2
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "RemoveFeatureSetCollectionById"): TypedCommand<{
            (fscId: string): void;
        }>;
        /**
         * Removes a heat map visualization from a Geocortex layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveHeatMap
         * @param args Either {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.HeatMapArgs} or a string representing the Map Service's ID.
         * @introduced 2.5
         * @gcx-command-category Visualization
         */
        (commandName: "RemoveHeatMap"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.HeatMapArgs | string): void;
        }>;
        /**
         * Removes the highlight layer with the specified name, if one exists.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveHighlightLayer
         * @param layerName The name of the layer to remove.
         * @introduced 1.2
         * @gcx-command-category Highlighting
         */
        (commandName: "RemoveHighlightLayer"): TypedCommand<{
            (layerName: string): void;
        }>;
        /**
         * Removes the marker from the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveMarker
         * @param id The ID of the marker to be removed.
         * @introduced 2.5
         * @private
         */
        (commandName: "RemoveMarker"): TypedCommand<{
            (id: string): void;
        }>;
        /**
         * Removes the pushpin from the map for the given feature, if there is one.
         * Pushpins must be enabled for this command to work.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemovePushpin
         * @introduced 2.4
         * @gcx-command-category Pushpins
         */
        (commandName: "RemovePushpin"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Removes all pushpins from the map.
         * Pushpins must be enabled for this command to work.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemovePushpins
         * @introduced 2.3
         * @gcx-command-category Pushpins
         */
        (commandName: "RemovePushpins"): TypedCommand<{
            (): void;
        }>;
        /**
         * Removes the specified external component from the viewer. If the component is in a seperate window, that window will be closed.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveExternalComponentById
         * @param ecId The ID of the external component to remove.
         * @introduced 2.4
         * @gcx-command-category Integration
         */
        (commandName: "RemoveExternalComponentById"): TypedCommand<{
            (ecId: string): void;
        }>;
        /**
         * Removes the status indicator from the results list or table.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveResultsStatus
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "RemoveResultsStatus"): TypedCommand<{
            (): void;
        }>;
        /**
         * Removes the status indicator with the specified ID from the screen.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveStatus
         * @param statusId The ID of the status indicator which needs to be removed.  If not specified, the last one is removed.
         * @introduced 1.1
         * @gcx-command-category Map Widget
         */
        (commandName: "RemoveStatus"): TypedCommand<{
            (statusId?: string): void;
        }>;
        /**
         * Remove a user added {@link essentials.Layer} (and its parent map service) off of the map and out of the viewer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveUserAddedLayer
         * @param gcxLayer The {@link essentials.Layer} to be removed.
         * @introduced 2.6
         * @gcx-command-category Layer List
         */
        (commandName: "RemoveUserAddedLayer"): TypedCommand<{
            (gcxLayer: geocortex.essentials.Layer): void;
        }>;
        /**
         * Removes the visualization from a Geocortex layer, if one is enabled.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RemoveVisualization
         * @param args Either a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.VisualizationArgs} object or a string representing the ID of the map service.
         * @introduced 2.5
         * @gcx-command-category Visualization
         */
        (commandName: "RemoveVisualization"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.VisualizationArgs | string): void;
        }>;
        /**
         * Assigns a new name to a saved selection.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RenameSelection
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.RenameSelectionArgs} object with the following members: `newName`, `name`, `featureSetCollection` (optional), `successCallback` (optional) and `errorCallback` (optional).
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "RenameSelection"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.RenameSelectionArgs): void;
        }>;
        /**
         * Loads a named, saved selection into the results view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RestoreSelection
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.SelectionArgs} object with the following members: `name`, `featureSetCollection` (optional), `successCallback` (optional), `errorCallback` (optional).
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "RestoreSelection"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.SelectionArgs): void;
        }>;
        /**
         * Instructs the region hosting a view to restore itself to its previous dimensions, if it supports this action. As of version 2.4, only the `BottomPanelRegion` and its subregions support this action.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RestorePanel
         * @param viewId The ID of the view requesting its region to restore itself to the default dimensions.
         * @introduced 2.4
         * @gcx-command-category Region and View
         */
        (commandName: "RestorePanel"): TypedCommand<{
            (viewId: string): void;
        }>;
        /**
         * Recalculate the size and layout of the shell and refresh the shell accordingly.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ResizeShell
         * @introduced 1.2.1
         * @gcx-command-category Shell
         */
        (commandName: "ResizeShell"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays previously hidden map tips by setting their visibility to `true`.  Map tips must be enabled for this command to work.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RestoreAllMapTips
         * @introduced 2.3.1
         * @gcx-command-category Map Widget
         */
        (commandName: "RestoreAllMapTips"): TypedCommand<{
            (): void;
        }>;
        /**
         * Resumes the previously suspended display of map tips.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ResumeMapTips
         * @introduced 2.0
         * @gcx-command-category Map Widget
         */
        (commandName: "ResumeMapTips"): TypedCommand<{
            (): void;
        }>;
        /**
         * Executes preset actions for the supplied feature set when a user clicks on a chart point.
         * This includes highlighting, pan/zoom, opening Feature Details, or running a command.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RunChartFeatureActions
         * @param featureSet The Geocortex feature set.
         * @introduced 2.3
         * @gcx-workflow-disabled
         * @gcx-command-category Charting
         */
        (commandName: "RunChartFeatureActions"): TypedCommand<{
            (featureSet: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet): void;
        }>;
        /**
         * Runs a workflow.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RunWorkflowById
         * @param workflowId The ID of the workflow to run.
         * @introduced 1.0
         * @gcx-command-category Workflow
         */
        (commandName: "RunWorkflowById"): TypedCommand<{
            (workflowId: string): void;
        }>;
        /**
         * Runs a workflow with a set of input arguments.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RunWorkflowWithArguments
         * @param parameter An object that contains a property called workflowId representing the ID of the workflow, as well
         * as any other number of named arguments to pass to the workflow.
         * @introduced 1.2
         * @gcx-command-category Workflow
         * @gcx-workflow-requirements Note: In order to use this command in a workflow, you must pass the arg parameter as a `Newtonsoft.Json.Linq.JObject`.
         */
        (commandName: "RunWorkflowWithArguments"): TypedCommand<{
            (arg: {
                workflowId: string;
                [key: string]: string;
            }): void;
        }>;
        /**
         * Runs a workflow with a geometry used as an input argument.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RunWorkflowWithGeometry
         * @param arg An object with the following properties: workflowId, geometry.
         * @introduced 1.1
         * @gcx-workflow-disabled
         * @gcx-command-category Workflow
         */
        (commandName: "RunWorkflowWithGeometry"): TypedCommand<{
            (arg: {
                workflowId: string;
                geometry: esri.geometry.Geometry;
            }): void;
        }>;
        /**
         * If a user has screen reader software enabled, then the provided string is immediately spoken to them.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ScreenReaderNarrate
         * @param inputText A string that will be spoken to the user.
         * @introduced 2.4
         * @gcx-command-category WCAG
         */
        (commandName: "ScreenReaderNarrate"): TypedCommand<{
            (inputText: string): void;
        }>;
        /**
         * Disables the "ScreenReaderNarrate" command temporarily.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name DisableScreenReaderNarrate
         * @introduced 2.6
         * @gcx-command-category WCAG
         */
        (commandName: "DisableScreenReaderNarrate"): TypedCommand<{
            (): void;
        }>;
        /**
         * Enables screen reader narration if it was previously disabled using "DisableScreenReaderNarrate". Note that it will keep track of the number of calls to the
         * "DisableScreenReaderNarrate" command and will only reactivate the screen reader once all disable commands have been cancelled by a matching enable command.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name EnableScreenReaderNarrate
         * @introduced 2.6
         * @gcx-command-category WCAG
         */
        (commandName: "EnableScreenReaderNarrate"): TypedCommand<{
            (): void;
        }>;
        /**
         * Selects a base map by name and makes it visible. All other base maps are faded out.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SelectBaseMap
         * @param basemapName The name of the base map to switch to.
         * @introduced 2.0
         * @gcx-command-category Basemap
         */
        (commandName: "SelectBaseMap"): TypedCommand<{
            (basemapName: string): void;
        }>;
        /**
         * Sets the active highlight layer to the one matching the name provided, if one exists.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetActiveHighlightLayer
         * @param layerName The name of the layer to set as active.
         * @introduced 1.2
         * @gcx-command-category Highlighting
         */
        (commandName: "SetActiveHighlightLayer"): TypedCommand<{
            (layerName: string): void;
        }>;
        /**
         * Sets the default highlight layer as the active highlight layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetActiveHighlightLayerDefault
         * @introduced 1.3
         * @gcx-command-category Highlighting
         */
        (commandName: "SetActiveHighlightLayerDefault"): TypedCommand<{
            (): void;
        }>;
        /**
         * Sets the active tool.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetActiveTool
         * @param toolName The name of the tool to activate.
         * @introduced 1.1
         * @gcx-command-category Map Widget
         */
        (commandName: "SetActiveTool"): TypedCommand<{
            (toolName: string): void;
        }>;
        /**
         * Sets the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} of interest that will be used to generate data for charts.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetCollectionOfInterest
         * @param fscId The ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} for which to display charts.
         * @introduced 2.3
         * @gcx-command-category Charting
         */
        (commandName: "SetCollectionOfInterest"): TypedCommand<{
            (fscId: string): void;
        }>;
        /**
         * Sets the edit log, passing it into a callback. If an error occurs, the error is passed into the callback.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetEditLog
         * @param editLog An array of edit logs to set.
         * @param errorCallback A callback to execute when an error occurs.
         * @introduced 1.1
         * @gcx-command-category Editing
         */
        (commandName: "SetEditLog"): TypedCommand<{
            (editLog: any[], errorCallback: (error: Error) => void): void;
        }>;
        /**
         * Sets the geometry for the feature currently being edited.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetEditorFeatureGeometry
         * @param geometry Geometry for the feature currently being edited.
         * @private
         */
        (commandName: "SetEditorFeatureGeometry"): TypedCommand<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
         * Sets the current highlight border color to use, if the feature does not specify one.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetHighlightBorderColor
         * @param color A 6 or 8 digit hex string representation of the color in RGB or ARGB form, respectively.
         * @introduced 1.2
         * @gcx-command-category Highlighting
         */
        (commandName: "SetHighlightBorderColor"): TypedCommand<{
            (color: string): void;
        }>;
        /**
         * Sets the current highlight fill color to use, if the feature does not specify one.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetHighlightFillColor
         * @param color A 6 or 8 digit hex string representation of the color in RGB or ARGB form, respectively.
         * @introduced 1.2
         * @gcx-command-category Highlighting
         */
        (commandName: "SetHighlightFillColor"): TypedCommand<{
            (color: string): void;
        }>;
        /**
         * Sets the measurement units for the measurements performed by the measurement module.  Also updates existing measurements already on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetMeasurementUnits
         * @param lengthUnits A string with the following possible values: `feet`, `yard`, `meter`, `kilometer`, `mile`, `nauticalMile`.
         * @param areaUnits A string with the following possible values: `sqFeet`, `sqYard`, `sqMeter`, `sqKilometer`, `sqMile`, `sqNauticalMile`, `acre`, `hectare`.
         * @introduced 2.0
         * @gcx-command-category Measurement
         */
        (commandName: "SetMeasurementUnits"): TypedCommand<{
            (lengthUnits: string, areaUnits: string): void;
        }>;
        /**
         * Sets the geometry to be used in the offline map being edited.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetOfflineMapEditorGeometry
         * @param geometry The geometry to set, or null to clear.
         * @introduced 2.0
         * @gcx-command-category Offline Profiles
         */
        (commandName: "SetOfflineMapEditorGeometry"): TypedCommand<{
            (geometry: esri.geometry.Polygon): void;
        }>;
        /**
         * Sets the time extent for the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SetTimeExtent
         * @param timeExtent The time extent for which data is displayed on the map.
         * @introduced 2.4
         * @gcx-command-category Map Display
         */
        (commandName: "SetTimeExtent"): TypedCommand<{
            (timeExtent: esri.TimeExtent): void;
        }>;
        /**
         * Used to start the process for creating a new related record/feature. Is activated by clicking 'Create A New Related ____' in the related feature details view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name StartEditingNewRelatedRecord
         * @param item A RelatedLayerEntry object with the following properties: `id`, `text`, `relatedFeature`, `essentialsRelatedFeature` (optional), `feature` (optional), `editable` and `relationship`.
         * @param isNew A boolean value indicating whether the record is new or not.
         * @introduced 2.3
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "StartEditingNewRelatedRecord"): TypedCommand<{
            (item: any, isNew: boolean): void;
        }>;
        /**
         * Shares the Viewer url on the specified platform.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShareOn
         * @param name The id of the sharing option as specified on the configuration file.
         * @introduced 2.4
         * @gcx-command-category Share
         */
        (commandName: "ShareOn"): TypedCommand<{
            (id: string): void;
        }>;
        /**
         * Activates the accessibility view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowAccessibilityView
         * @introduced 2.5
         * @gcx-command-category Accessibility
         */
        (commandName: "ShowAccessibilityView"): TypedCommand<{
            (): void;
        }>;
        /**
         * Prompts the user to bookmark the current extent by entering a name. Requires that the `BookmarkViewModel`'s property, `bookmarksEnabled`, is set to `true`.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowAddBookmark
         * @introduced 2.4
         * @gcx-command-category Bookmark
         */
        (commandName: "ShowAddBookmark"): TypedCommand<{
            (): void;
        }>;
        /**
         * Shows all plotted coordinates (including temporarily hidden ones) on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowAllCoordinates
         * @introduced 2.6
         * @gcx-command-category PlotCoordinates
         */
        (commandName: "ShowAllCoordinates"): TypedCommand<{
            (): void;
        }>;
        /**
         * Shows one or many plotted, temporarily hidden Coordinates on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowCoordinates
         * @param descIds The string id, or array of string id's of the coordinate(s) to show on the map.
         * @introduced 2.6
         * @gcx-command-category PlotCoordinates
         */
        (commandName: "ShowCoordinates"): TypedCommand<{
            (descIds: string | string[]): void;
        }>;
        /**
         * Shows the configured coordinate actions.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowCoordinateActions
         * @param descId The id of the coordinate descriptor for which to display coordinate actions.
         * @introduced 2.6
         * @gcx-command-category PlotCoordinates
         */
        (commandName: "ShowCoordinateActions"): TypedCommand<{
            (descId: string): void;
        }>;
        /**
         * Displays the available options for refining the current set of results; that is, Union, Subtract, Intersect.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name "ShowSearchOptions"
         * @param fscOrId The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or its ID, to refine.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ShowSearchOptions"): TypedCommand<{
            (fscOrId: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | string): void;
        }>;
        /**
         * Displays the Bookmarked Locations menu if the `BookmarkViewModel`'s property, `bookmarksEnabled`, is set to `true`.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowBookmarks
         * @introduced 2.0
         * @gcx-command-category Bookmark
         */
        (commandName: "ShowBookmarks"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates the charting view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowChartingView
         * @introduced 2.3
         * @gcx-command-category Charting
         */
        (commandName: "ShowChartingView"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates the export web map view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowExportWebMapDialog
         * @introduced 2.6
         * @gcx-command-category Export
         */
        (commandName: "ShowExportWebMapDialog"): TypedCommand<{
            (): void;
        }>;
        /**
         * Shows the feature attribute editor used to edit feature attributes.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowFeatureAttributeEditor
         * @introduced 1.3
         * @deprecated 2.3 The feature editor will automatically appear when editing a feature is started.
         * @gcx-command-category Offline/Online
         */
        (commandName: "ShowFeatureAttributeEditor"): TypedCommand<{
            (): void;
        }>;
        /**
         * Creates and displays the Feature Details dialog for the first feature in the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} specified.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowFirstFeatureFromCollection
         * @param arg A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or its ID, whose first feature's details are to be shown.
         * @introduced 2.6
         * @gcx-workflow-requirements In order to use this command in a workflow, you must use the ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} as the parameter.
         * @gcx-command-category Feature Set
         */
        (commandName: "ShowFirstFeatureFromCollection"): TypedCommand<{
            (arg: string | geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection): void;
        }>;
        /**
         * Creates and displays the Feature Details dialog for the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} or {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} specified.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowFeatureDetails
         * @param arg A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} or a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} ID for which to show the Feature Details component.
         * @introduced 1.3
         * @gcx-workflow-requirements In order to use this command in a workflow, you must use the ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} as the parameter.
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ShowFeatureDetails"): TypedCommand<{
            (arg: any): void;
        }>;
        /**
         * Creates and displays the Feature Details dialog for the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} in Compact View mode. If the feature is not specified, details for the last feature will be displayed.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowFeatureDetailsCompact
         * @param feature A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} for which to show the feature details. If not specified, details for the last feature will be displayed.
         * @introduced 2.4
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ShowFeatureDetailsCompact"): TypedCommand<{
            (feature?: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Creates and displays the Feature Details dialog for the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} in Expanded View mode. If the feature is not specified, details for the last feature will be displayed.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowFeatureDetailsExpanded
         * @param feature A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} for which to show the feature details. If not specified, details for the last feature will be displayed.
         * @introduced 2.4
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ShowFeatureDetailsExpanded"): TypedCommand<{
            (arg: any): void;
        }>;
        /**
         * Creates and displays the Feature Details dialog for the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} in the specified view mode. If the feature is not specified, details for the last feature will be displayed.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowFeatureDetails
         * @param args A string specifying the view mode, or a configuration object with two properties: `viewMode` and `feature`. If the feature is not specified, details for the last feature will be displayed.
         * @introduced 2.4
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "SetFeatureDetailsMode"): TypedCommand<{
            (args: string | {
                viewMode: string;
                feature?: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature;
            }): void;
        }>;
        /**
         * Creates a ModalMessageView view and displays the given message.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowFeatureLayerModalMessage
         * @param message The message to be displayed in the ModalMessageView view.
         * @private
         */
        (commandName: "ShowFeatureLayerModalMessage"): TypedCommand<{
            (message: string): void;
        }>;
        /**
         * Shows the feature template picker used to create new features. If a layer is supplied, shows the templates for the layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowFeatureTemplatePicker
         * @introduced 1.2
         * @param layer A feature layer for which to display templates.
         * @param relatedFeature An Esri feature with the information needed to create a related feature.
         * @gcx-command-category Editing
         */
        (commandName: "ShowFeatureTemplatePicker"): TypedCommand<{
            (layer?: geocortex.essentials.Layer, relatedFeature?: esri.Graphic): void;
        }>;
        /**
         * Shows the previously opened feature when browsing related features in the feature details view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowFeatureParentDetails
         * @introduced 2.3
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ShowFeatureParentDetails"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays the Geolocate Menu if at least one Geolocate option is enabled.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowBookmarks
         * @introduced 2.3
         * @gcx-command-category Geolocation
         */
        (commandName: "ShowGeolocateMenu"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates the Home Panel if it is configured to be included.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowHomePanel
         * @introduced 2.0
         * @gcx-command-category Region and View
         */
        (commandName: "ShowHomePanel"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates the external component view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowExternalComponentView
         * @introduced 2.4
         * @gcx-command-category Integration
         */
        (commandName: "ShowExternalComponentView"): TypedCommand<{
            (): void;
        }>;
        /**
         * Shows available actions for a given layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowLayerActions
         * @param layer The Geocortex layer to show layer actions for.
         * @introduced 1.3
         * @gcx-workflow-disabled
         * @gcx-command-category Layer
         */
        (commandName: "ShowLayerActions"): TypedCommand<{
            (layer: geocortex.essentials.Layer): void;
        }>;
        /**
         * Displays the layer list.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowLayerList
         * @introduced 1.1
         * @deprecated 2.3 Using `ActivateView` and pass the ID `LayerListView`.
         * @gcx-command-category Layer List
         */
        (commandName: "ShowLayerList"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays previously hidden map tips by setting their visibility to `true`, and resumes displaying map tips.  Map tips must be enabled for this command to work.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowMapTips
         * @introduced 2.3.1
         * @gcx-command-category Map Widget
         */
        (commandName: "ShowMapTips"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays a dialog to save a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} as a named selection.
         * If name is specified, the dialog will pre-populate the name input field.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowSaveSelectionDialog
         * @param fscOrId The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or its ID, to save.
         * @param name (Optional) The name of the selection.
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ShowSaveSelectionDialog"): TypedCommand<{
            (fscOrId: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | string, name?: string): void;
        }>;
        /**
         * Show the offline map editor.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowOfflineMapEditor
         * @param args Arguments to showing the offline map editor.
         * @gcx-command-category Offline Profiles
         */
        (commandName: "ShowOfflineMapEditor"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ShowOfflineMapEditorArgs): void;
        }>;
        /**
         * Opens the Social Media sharing view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowShareView
         * @introduced 2.4
         * @gcx-command-category Share
         */
        (commandName: "ShowShareView"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays the layer list.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SwitchToLayerView
         * @introduced 2.3
         * @gcx-command-category Layer List
         */
        (commandName: "SwitchToLayerView"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays the legend view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SwitchToLegendView
         * @introduced 2.3
         * @gcx-command-category Layer List
         */
        (commandName: "SwitchToLegendView"): TypedCommand<{
            (): void;
        }>;
        /**
         * Shows the log view if the parameter is `true`.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowLog
         * @param show To show the log, set to `true`; otherwise set to `false`.  The default is `false`.
         * @introduced 2.0
         * @gcx-command-category Log
         */
        (commandName: "ShowLog"): TypedCommand<{
            (show?: boolean): void;
        }>;
        /**
         * Activates the map view, ensuring that it is active and visible.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowMap
         * @introduced 1.1
         * @gcx-command-category Map Display
         */
        (commandName: "ShowMap"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays a map tip callout anchored to a given point.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowMapCallout
         * @param parameter An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ShowMapElementArgs} with the following properties: `elementID`, `mapPoint`, `content`, `title`, `delay`.
         * @introduced 1.0
         * @gcx-workflow-disabled
         * @gcx-command-category Map Widget
         */
        (commandName: "ShowMapCallout"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ShowMapElementArgs): void;
        }>;
        /**
         * Displays an element anchored to a specific point on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowMapElement
         * @param args An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ShowMapElementArgs} with the following properties: `elementID`, `mapPoint`, `content`, `title`, `delay`.
         * @introduced 1.0
         * @gcx-workflow-disabled
         * @gcx-command-category Map Widget
         */
        (commandName: "ShowMapElement"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.ShowMapElementArgs): void;
        }>;
        /**
         * Displays a feature in the map tip view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowMapTip
         * @param feature The Geocortex feature to show the Map Tip for.
         * @introduced 1.1
         * @gcx-workflow-disabled
         * @gcx-command-category Map Widget
         */
        (commandName: "ShowMapTip"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Displays a feature in a map tip callout anchored to the map
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowMapTipInCallout
         * @param feature The Geocortex feature to show the Map Tip for.
         * @introduced 2.4
         * @gcx-workflow-disabled
         * @gcx-command-category Map Widget
         */
        (commandName: "ShowMapTipInCallout"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Shows map tip results for a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} previously added to the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetManager}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowMapTipResults
         * @param fscId The ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} to display.
         * @introduced 1.0
         * @gcx-command-category Map Widget
         */
        (commandName: "ShowMapTipResults"): TypedCommand<{
            (fscId: string): void;
        }>;
        /**
         * Shows map tip results for a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} previously added to the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetManager},
         * in a floating callout window on the map.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowMapTipResultsInCallout
         * @param fscId The ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} to display.
         * @introduced 2.4
         * @gcx-command-category Map Widget
         */
        (commandName: "ShowMapTipResultsInCallout"): TypedCommand<{
            (fscId: string): void;
        }>;
        /**
         * Displays markers by setting their visibility to `true`.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowMarkers
         * @introduced 2.5
         * @private
         */
        (commandName: "ShowMarkers"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays pushpins by setting their visibility to `true`, for each result in the results list or results table.  Pushpins must be enabled for this command to work.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowPushpins
         * @introduced 2.1
         * @gcx-command-category Pushpins
         */
        (commandName: "ShowPushpins"): TypedCommand<{
            (): void;
        }>;
        /**
         * Presents a user interface for choosing to run a report from a list of reports that are available to the given reportable input (group of features).
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ListReports
         * @param reportable: A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature}, {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet}, {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection}, or a {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} array.
         * @introduced 2.5
         * @gcx-command-category Reporting
         */
        (commandName: "ListReports"): TypedCommand<{
            (reportable: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet | geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature | geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature[]): void;
        }>;
        /**
         * Alias to the command `ListReports` for backwards-compatibility with the Silverlight viewer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RunFeatureReport
         * @param feature: A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} object.
         * @introduced 2.5
         * @gcx-command-category Reporting
         */
        (commandName: "RunFeatureReport"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Alias to the command `ListReports` for backwards-compatibility with the Silverlight viewer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RunFeaturesReport
         * @param feature: A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet} object.
         * @introduced 2.5
         * @gcx-command-category Reporting
         */
        (commandName: "RunFeaturesReport"): TypedCommand<{
            (featureSet: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet): void;
        }>;
        /**
         * Runs a given report on the provided features, and displays the result (a download link to the report file) to the user.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name RunReport
         * @param args: A {@link RunReportArgs} object with the following properties: `report`, `reportable` and `reportParameters` (optional).
         * `report` is the report to run.
         * `reportable` is the group of features upon which the report shall be run.
         * `reportParameters` are the report parameters passed along to the REST endpoint.
         * @introduced 2.5
         * @gcx-command-category Reporting
         */
        (commandName: "RunReport"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.RunReportArgs): void;
        }>;
        /**
         * Displays the user interface to fill in details about a project to be saved.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SaveAsProject
         * @introduced 2.6
         * @gcx-command-category Projects
         */
        (commandName: "SaveAsProject"): TypedCommand<{
            (): void;
        }>;
        /**
         * Save the current state of the viewer as a project or displays the user interface to fill in details about the project to be saved.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SaveProject
         * @introduced 2.6
         * @gcx-command-category Projects
         */
        (commandName: "SaveProject"): TypedCommand<{
            (): void;
        }>;
        /**
         * Shows the user interface for editing a project.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowProjectEditor
         * @param project The unique ID of the project to edit, or an instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project} containing the project to edit.
         * @introduced 2.6
         * @gcx-command-category Projects
         */
        (commandName: "ShowProjectEditor"): TypedCommand<{
            (project: string | geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project): void;
        }>;
        /**
         * Shows the user interface for browsing and loading projects.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowProjects
         * @introduced 2.6
         * @gcx-command-category Projects
         */
        (commandName: "ShowProjects"): TypedCommand<{
            (): void;
        }>;
        /**
         * Displays the list of features in the given {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} as a list.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowResultsList
         * @param fsc A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or the ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection}.
         * @introduced 1.1
         * @gcx-hyperlink-disabled
         * @gcx-workflow-requirements In order to use this command in a workflow, you must use the ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} as the parameter.
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ShowResultsList"): TypedCommand<{
            (fsc: any): void;
        }>;
        /**
         * Displays the list of features in the given {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} in a tabular view.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowResultsTable
         * @param fsc A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} or the ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection}.
         * @introduced 1.0
         * @gcx-hyperlink-disabled
         * @gcx-workflow-requirements In order to use this command in a workflow, you must use the ID of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} as the parameter.
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "ShowResultsTable"): TypedCommand<{
            (fsc: any): void;
        }>;
        /**
         * Switches from Results Table to Results List view if the Results Table view is currently active.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SwitchToListResultsView
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "SwitchToListResultsView"): TypedCommand<{
            (): void;
        }>;
        /**
         * Switches from Results List to Results Table view if the Results List view is currently active.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SwitchToTabularResultsView
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "SwitchToTabularResultsView"): TypedCommand<{
            (): void;
        }>;
        /**
         * Shows the user interface for sharing projects.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowShareProject
         * @param project The unique ID of the project to share, or an instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project} containing the project to share.
         * @introduced 2.6
         * @gcx-command-category Projects
         */
        (commandName: "ShowShareProject"): TypedCommand<{
            (project: string | geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project): void;
        }>;
        /**
         * Shows the visualization options view for a given Geocortex layer if the layer supports any visualizations.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ShowVisualizationView
         * @param args Either the Geocortex layer or a string representing the Map Service's ID.
         * @introduced 2.5
         * @gcx-command-category Visualization
         */
        (commandName: "ShowVisualizationView"): TypedCommand<{
            (args: geocortex.essentials.Layer | string): void;
        }>;
        /**
         * Navigates to the sign-in page.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SignIn
         * @param signInUrl An optional sign-in URL, otherwise the site default will be used.
         * @introduced 2.2
         * @gcx-command-category User
         */
        (commandName: "SignIn"): TypedCommand<{
            (signInUrl: string): void;
        }>;
        /**
         * Signs the current user out.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SignOut
         * @introduced 2.2
         * @gcx-command-category User
         */
        (commandName: "SignOut"): TypedCommand<{
            (): void;
        }>;
        /**
         * Creates a view to change and existing edit.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name StartEditingEditLogEntry
         * @param editLogEntry The edit to be changed.
         * @private
         */
        (commandName: "StartEditingEditLogEntry"): TypedCommand<{
            (editLogEntry: any): void;
        }>;
        /**
         * Begins an edit operation on an existing feature.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name StartEditingFeature
         * @param feature The existing Geocortex Feature to be edited.
         * @param isNewFeature If the feature is new, set to `true`; otherwise, set to `false`.  The default is `false`.
         * @private
         */
        (commandName: "StartEditingFeature"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature, isNewFeature?: boolean): void;
        }>;
        /**
         * Creates a view to edit a new feature.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name StartEditingNewFeature
         * @param feature A new instance of an esri.Graphic.
         * @param layer An editable feature layer from which the new feature is to belong to.
         * @param editGeometry Whether to immediately start editing the geometry, defaults to `true`.
         * @private
         */
        (commandName: "StartEditingNewFeature"): TypedCommand<{
            (feature: esri.Graphic, layer: esri.layers.FeatureLayer, editGeometry?: boolean): void;
        }>;
        /**
         * Starts downloading an offline map and displays the progress to the user.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name StartOfflineDownloadAndShowProgress
         * @param args The arguments to the command.
         * @introduced 2.6
         * @gcx-command-category Offline/Online
         */
        (commandName: "StartOfflineDownloadAndShowProgress"): TypedCommand<{
            (args: {
                offlineMap: geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.OfflineMap;
            }): void;
        }>;
        /**
         * Starts syncing an offline map and displays the progress to the user.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name StartOfflineSyncAndShowProgress
         * @param args The arguments to the command.
         * @introduced 2.6
         * @gcx-hyperlink-disabled
         * @gcx-command-category Offline/Online
         */
        (commandName: "StartOfflineSyncAndShowProgress"): TypedCommand<{
            (args: {
                offlineMap: geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.OfflineMap;
            }): void;
        }>;
        /**
         * Zooms in a step.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name StepZoomIn
         * @introduced 1.0
         * @gcx-command-category Navigation
         */
        (commandName: "StepZoomIn"): TypedCommand<{
            (): void;
        }>;
        /**
         * Zooms out a step.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name StepZoomOut
         * @introduced 1.0
         * @gcx-command-category Navigation
         */
        (commandName: "StepZoomOut"): TypedCommand<{
            (): void;
        }>;
        /**
         * Deactivates the Edit tool, if markup is being edited.  If nothing is being edited, the Edit tool remains active.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name StopEditingMarkup
         * @param clearActiveTool To clear the active tool, set to `true`; otherwise, set to `false`. The default is `false`.
         * @introduced 2.0
         * @gcx-command-category Markup
         */
        (commandName: "StopEditingMarkup"): TypedCommand<{
            (clearActiveTool?: boolean): void;
        }>;
        /**
         * Suspends the display of map tips, allowing other components the opportunity to interact with the map without invoking map tips on click/tap events.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SuspendMapTips
         * @introduced 2.0
         * @gcx-command-category Map Widget
         */
        (commandName: "SuspendMapTips"): TypedCommand<{
            (): void;
        }>;
        /**
         * Switches to the specified layer theme.
         * It activates the theme and updates the map based on the theme settings in the site.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name SwitchToLayerTheme
         * @param themeIdentifier The ID or the display name of the layer theme.
         * @introduced 2.3
         * @gcx-command-category Layer Theme
         */
        (commandName: "SwitchToLayerTheme"): TypedCommand<{
            (themeIdentifier: String): void;
        }>;
        /**
         * Puts the application in an offline state, if the application supports offline capabilities.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name TakeApplicationOffline
         * @introduced 1.1
         * @gcx-hyperlink-disabled
         * @gcx-command-category Offline/Online
         */
        (commandName: "TakeApplicationOffline"): TypedCommand<{
            (): void;
        }>;
        /**
         * Dismisses the specified view on the next tap anywhere on the screen. Optionally fires specified callbacks.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name TapToDismiss
         * @param args An object with the following properties: `view`, `onOtherInteracted` (optional) and `onElementInteracted` (optional).
         * `view` represents the view to be dismissed.
         * `onOtherInteracted` represents the callback to fire if an external element is clicked.
         * `onElementInteracted` represents the callback to fire if the same element is clicked.
         * @introduced 2.4
         * @gcx-hyperlink-disabled
         * @gcx-command-category Map Widget
         */
        (commandName: "TapToDismiss"): TypedCommand<{
            (args: {
                view: framework.ui.ViewBase;
                onOtherInteracted?: (evt?: Event) => void;
                onElementInteracted?: (evt?: Event) => void;
            }): void;
        }>;
        /**
         * Transitions the application from an offline state to an online state.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name TakeApplicationOnline
         * @introduced 1.1
         * @gcx-hyperlink-disabled
         * @gcx-command-category Offline/Online
         */
        (commandName: "TakeApplicationOnline"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates or deactivates the data frame.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ToggleDataFrame
         * @introduced 1.0
         * @gcx-command-category Region and View
         */
        (commandName: "ToggleDataFrame"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates or deactivates the log view, based on whether or not it is currently active.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ToggleLogView
         * @introduced 1.0
         * @gcx-command-category Region and View
         */
        (commandName: "ToggleLogView"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates or deactivates the mouse coordinates widget, based on whether or not it is currently active.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ToggleMouseCoordinates
         * @introduced 2.4
         * @gcx-command-category Region and View
         */
        (commandName: "ToggleMouseCoordinates"): TypedCommand<{
            (): void;
        }>;
        /**
         * Activates or deactivates the results frame.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ToggleResultsFrame
         * @introduced 1.1
         * @gcx-command-category Region and View
         */
        (commandName: "ToggleResultsFrame"): TypedCommand<{
            (): void;
        }>;
        /**
         * Toggle whether the specified external component is synchronized with the viewer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ToggleExternalComponentSyncById
         * @param ecId The ID of the external component which will toggle whether it is synchronized with the viewer.
         * @introduced 2.4
         * @gcx-command-category Integration
         */
        (commandName: "ToggleExternalComponentSyncById"): TypedCommand<{
            (ecId: string): void;
        }>;
        /**
         * Toggles the visibility of the toolbar, if present.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ToggleToolbar
         * @introduced 1.3
         * @gcx-command-category Region and View
         */
        (commandName: "ToggleToolbar"): TypedCommand<{
            (): void;
        }>;
        /**
         * Opens the toolbar, if present.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name OpenToolbar
         * @introduced 2.5
         * @gcx-command-category Region and View
         */
        (commandName: "OpenToolbar"): TypedCommand<{
            (): void;
        }>;
        /**
         * Closes the toolbar, if present.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name CloseToolbar
         * @introduced 2.5
         * @gcx-command-category Region and View
         */
        (commandName: "CloseToolbar"): TypedCommand<{
            (): void;
        }>;
        /**
         * Invokes the last recorded undo operation or transaction.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name Undo
         * @introduced 2.5
         * @gcx-command-category Undo and Redo
         */
        (commandName: "Undo"): TypedCommand<{
            (): void;
        }>;
        /**
         * Merge graphics into a single graphic. The merged graphic will use the attributes of the first graphic, but can be
         * updated in the `successCallback`. These edits are only applied to the graphics layer in memory.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name UnionGraphicsInMemory
         * @param args An instance of {@link EditInMemoryArgs} describing the graphics to edit.
         * @introduced 2.5
         * @private
         */
        (commandName: "UnionGraphicsInMemory"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.EditInMemoryArgs): void;
        }>;
        /**
         * Updates a feature attachment.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name UpdateAttachment
         * @param arg An object with the following members: `mapService`, `layer`, `feature`, `featureUrl`, `filename`, `contentType`, `payload`, `successCallback`, `errorCallback`.
         * @private
         */
        (commandName: "UpdateAttachment"): TypedCommand<{
            (arg: {
                mapService: essentials.MapService;
                layer: esri.layers.FeatureLayer;
                feature: esri.Graphic;
                featureUrl: string;
                filename: string;
                contentType: string;
                payload;
                string;
                successCallback: () => void;
                errorCallback: (error: Error) => void;
            }): void;
        }>;
        /**
         * Updates (edits) an existing feature. If the application is offline, an update entry is added to the edit log.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name UpdateFeature
         * @param arg An object with the following members: `mapService`, `feature`, `successCallback` (optional), `errorCallback` (optional).
         * @introduced 1.1
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "UpdateFeature"): TypedCommand<{
            (arg: commandArgs.EditFeatureArgs): void;
        }>;
        /**
         * Updates existing graphics. These edits are only applied to the graphics layer in memory.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name UpdateGraphicsInMemory
         * @param args An instance of {@link UpdateGraphicsArgs} describing the graphics to update.
         * @introduced 2.5
         * @private
         */
        (commandName: "UpdateGraphicsInMemory"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.UpdateGraphicsArgs): void;
        }>;
        /**
         * Updates a related table record.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name UpdateRelatedRecord
         * @param arg An object with the following members: `mapService`, `layer`, `feature`, `relatedFeature`, `relationshipOrigin`, `relationshipDestination`, `successCallback`, `errorCallback`.
         * @introduced 1.1
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "UpdateRelatedRecord"): TypedCommand<{
            (arg: commandArgs.EditRelatedRecordArgs): void;
        }>;
        /**
         * Update the visible ModalMessageView to also include the given message.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name UpdateFeatureLayerModalMessage
         * @param message The new message to be displayed in the ModalMessageView view.
         * @param type A string constant indicating type.
         * @private
         */
        (commandName: "UpdateFeatureLayerModalMessage"): TypedCommand<{
            (message: string, tyype?: string): void;
        }>;
        /**
         * Updates the marker with the given marker arguments.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name UpdateMarker
         * @param args An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.MarkerArgs}.
         * @introduced 2.5
         * @private
         */
        (commandName: "UpdateMarker"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.MarkerArgs): void;
        }>;
        /**
         * Updates an existing named, saved selection with the supplied {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection}.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name UpdateSelection
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.SelectionArgs} object with the following members: `name`, `featureSetCollection` (optional), `successCallback` (optional), `errorCallback` (optional).
         * @introduced 2.6
         * @gcx-command-category Feature and Feature Set
         */
        (commandName: "UpdateSelection"): TypedCommand<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.SelectionArgs): void;
        }>;
        /**
         * Updates the message shown on the status indicator.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name UpdateStatus
         * @param statusArgs An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.AddStatusArgs}, or a string.
         * @introduced 2.4
         * @gcx-workflow-requirements Note: In order to use this command in a workflow, you must pass the `statusArgs` parameter as a string.
         * @gcx-command-category Map Widget
         */
        (commandName: "UpdateStatus"): TypedCommand<{
            (statusArgs: geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.AddStatusArgs): void;
            (statusArgs: string): void;
        }>;
        /**
         * Prompt the user to upload layers onto the map straight from their own computer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name UploadData
         * @param process Optional `UploadDataProcess` object which can be used to skip dialogs or resume an in-progress upload data process.
         * @introduced 2.6
         * @gcx-command-category Upload Data
         */
        (commandName: "UploadData"): TypedCommand<{
            (process?: any): void;
        }>;
        /**
         * Zooms out to the given extent.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomOutToExtent
         * @introduced 1.1
         * @param extent The extent to zoom out to.
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomOutToExtent"): TypedCommand<{
            (extent: esri.geometry.Extent): void;
        }>;
        /**
         * Zooms to the extent of all the features.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToAllFeatures
         * @param features An array containing the features to which to zoom.
         * @introduced 1.1
         * @gcx-workflow-disabled
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToAllFeatures"): TypedCommand<{
            (features: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature[]): void;
        }>;
        /**
         * Zooms to the extent of all the features in the feature set.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToEsriFeatureSet
         * @param featureSet The featureSet to zoom to.
         * @introduced 1.0
         * @deprecated 1.1 Use `ZoomToFeatures` instead, passing a Geocortex `FeatureSet` object.
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToEsriFeatureSet"): TypedCommand<{
            (featureSet: esri.tasks.FeatureSet): void;
        }>;
        /**
         * Zooms to the given extent.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToExtent
         * @param extent The extent to zoom to.
         * @introduced 1.0
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToExtent"): TypedCommand<{
            (extent: esri.geometry.Extent): void;
        }>;
        /**
         * Zooms to a feature.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToFeature
         * @param feature The Geocortex feature for which to zoom to.
         * @introduced 1.0
         * @gcx-workflow-disabled
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToFeature"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Zooms to a feature if the it's outside of the map's extent, otherwise nothing happens.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToFeatureIfOutsideMapExtent
         * @param feature The Geocortex feature for which to zoom to.
         * @introduced 2.4
         * @gcx-workflow-disabled
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToFeatureIfOutsideMapExtent"): TypedCommand<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Zooms to the extent of all the features in the feature set.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToFeatures
         * @param featureSet The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet} to which to zoom.
         * @introduced 1.1
         * @gcx-workflow-disabled
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToFeatures"): TypedCommand<{
            (featureSet: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet): void;
        }>;
        /**
         * Zooms to the full extent of the current Site.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToFullExtent
         * @introduced 1.3
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToFullExtent"): TypedCommand<{
            (): void;
        }>;
        /**
         * Zooms to the initial extent of the current Site.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToInitialExtent
         * @introduced 1.0
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToInitialExtent"): TypedCommand<{
            (): void;
        }>;
        /**
         * Zooms to the previous recorded map extent (if any)
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToPreviousExtent
         * @introduced 2.3
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToPreviousExtent"): TypedCommand<{
            (): void;
        }>;
        /**
         * Zooms to the bookmarked extent with the specified name.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToNamedExtent
         * @param bookmarkName The name of the bookmarked extent to which to zoom.
         * @introduced 2.4
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToNamedExtent"): TypedCommand<{
            (bookmarkName: string): void;
        }>;
        /**
         * Zooms to the next recorded map extent (if any).
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToNextExtent
         * @introduced 2.3
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToNextExtent"): TypedCommand<{
            (): void;
        }>;
        /**
         * Zooms to the current offline map's extent. If there is no current offline map, then nothing happens.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToOfflineMapExtent
         * @introduced 2.6
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToOfflineMapExtent"): TypedCommand<{
            (): void;
        }>;
        /**
         * Zooms to the extent of all the features in a layer.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToLayerExtent
         * @param layer The Geocortex layer whose extent to zoom to.
         * @introduced 1.3
         * @gcx-workflow-disabled
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToLayerExtent"): TypedCommand<{
            (layer: essentials.Layer): void;
        }>;
        /**
         * Zooms to the scale at which features in a layer become visible.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToLayerVisibleScale
         * @param layer The Geocortex layer whose visibility scale to zoom to.
         * @introduced 1.3
         * @gcx-workflow-disabled
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToLayerVisibleScale"): TypedCommand<{
            (layer: essentials.Layer): void;
        }>;
        /**
         * Zooms to the given scale.
         * @docs-gcx-command geocortex.essentialsHtmlViewer
         * @name ZoomToScale
         * @param scale The denominator of the scale to zoom to.  The viewer rounds the denominator to the nearest integer, if necessary.
         * @introduced 1.3
         * @gcx-command-category Navigation
         */
        (commandName: "ZoomToScale"): TypedCommand<{
            (scale: number): void;
        }>;
    }
}
/**
* @namespace Base namespace for the Geocortex Essentials HTML5 Viewer mapping infrastructure commands.
*/
declare module geocortex.essentialsHtmlViewer {
    /**
     * @private
     * @docs-hide-from-nav
     */
    module Commands {
        /**
         * A collection of metadata for the known commands
         ****** This should be updated whenever you add a new command.******
         * NOTE: This metadata is used by the management pack to suggest command names and values for command parameters. Hence:
         * 1) Mark commands that do not make sense to be configured via the management pack as private. For instance, if a command takes in a feature,
         * it's unlikely that it can be configured from the management pack - though it's theoretically possible. Mark it as private. On the
         * other hand, it may make sense to include a command that takes in an extent - since it may be practically possible to configure this from the management pack.
         * 2) We DON'T support commands with multiple input parameters anymore - only ones that take in a complex object with multiple parameters. Mark as private.
         * 3) This may mean that the metadata is not 100% accurate with respect to the actual command signature. For example, "Alert" takes in one required string
         * parameter and two optional string parameters. However, since we dont support multiple parameters in commands anymore, we'll just let the user think it takes
         * in one required string parameter (as far as the configuration experience from the management pack is concerned).
         */
        var commandsMetadata: CommandMetadata[];
        interface CommandMetadataDescriptor {
            arguments: string;
            description: string;
            isHyperlinkable: boolean;
            visibility: string;
        }
        interface CommandMetadata {
            name: string;
            metadata: CommandMetadataDescriptor;
        }
        /**
         * Returns the metadata for a given command name, or null if one is not found
         * @private
         * @param commandName The name of the command of interest
         * @returns Object representing command metadata
         */
        function metadataForCommandName(commandName: string): CommandMetadataDescriptor;
        /**
         * Returns the metadata for a given command name, or null if one is not found
         * @private
         */
        function publicCommands(): CommandMetadata[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    /**
     * Specifies additional options that can be passed in to the Confirm command.
     */
    interface ConfirmOptionsArgs {
        /**
         * Custom text to display for the "OK" button (default is the value of the language resource "language-common-ok").
         */
        okLabel?: string;
        /**
         * Custom text to display for the "Cancel" button (default is the value of the language resource "language-common-cancel").
         */
        cancelLabel?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    const enum PolicyFlags {
        DisableSecurityPrompt = 1,
        DisablePromptOnImages = 2,
    }
    /**
     * Content Policy Facility screens URIs to ensure their safety.
     */
    class ContentPolicy {
        protected _app: ViewerApplication;
        protected _siteValidator: validation.SiteUrlValidator;
        protected _debounceHandle: number;
        protected _debounceInterval: number;
        protected _flags: number;
        constructor(app: ViewerApplication);
        hasFlag(flag: PolicyFlags): boolean;
        setFlag(flag: PolicyFlags): void;
        /**
         * Screen a collection of URI details.
         */
        screenUris(uris: FilterUtils.UriDetails[]): Promise<FilterUtils.UriDetails[]>;
        tryScreenNavLinkSynchronously(uri: FilterUtils.NavigableLinkUriDetails): boolean;
        protected _validateUris(uris: FilterUtils.UriDetails[]): Promise<FilterUtils.UriDetails[]>;
        protected _validateUriAgainstSite(uri: FilterUtils.UriDetails): Promise<validation.ValidationResult<string>>;
        protected _promptForUris(uris: FilterUtils.UriDetails[]): Promise<FilterUtils.UriDetails[]>;
        private _enqueueConfirmation(uriConfirmation);
        private _processConfirmationQueue();
        private _getConfirmation(uriConfirmation);
        protected _getMemoizationKey(uri: FilterUtils.UriDetails): string;
        protected _memoizeResult(uri: FilterUtils.UriDetails, result: boolean): void;
        protected _getMemoizedResult(uri: FilterUtils.UriDetails): boolean;
        /**
         * Screen a data URI.
         */
        protected _screenDataUri(uri: string): string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.distances {
    /**
   * Returns true if units are convertible.
   * @param targetUnit The type of unit we want to convert to
   * @param sourceUnit The type of unit we are converting from
   */
    function canConvert(targetUnit: string, sourceUnit: string): boolean;
    /**
     * Converts an unit to another
     * @param targetUnit The type of unit we want to convert to
     * @param distance Distance in original unit type
     * @param sourceUnit The type of unit we are converting from
     */
    function convert(targetUnit: string, distance: number, sourceUnit: string): number;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    class AccessibilityProviderBase {
        /**
         * The {@link geocortex.framework.application.Application} that this view belongs to.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        libraryId: string;
        /**
         * The ID of the provider.
         * @type String
         */
        id: string;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string);
        initialize(config: any): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    interface BoxEditorOptions {
        rotateEnabled?: boolean;
        scaleEnabled?: boolean;
        uniformScaling?: boolean;
        rotationAngle?: number;
        scaleFactor?: number;
        preciseRotationAngle?: number;
        preciseScaleFactor?: number;
        boxLineSymbol?: esri.symbol.SimpleLineSymbol;
        boxHandleSymbol?: esri.symbol.SimpleMarkerSymbol;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    interface EditCapability {
        owner: accessibility.Edit;
        graphic: esri.Graphic;
        map: esri.Map;
        suspended: boolean;
        destroy(): void;
        refresh(force?: boolean): void;
        suspend(): void;
        resume(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    interface ExtendedDrawOptions extends esri.DrawOptions {
        vertexOffsetX?: number;
        vertexOffsetY?: number;
        preciseVertexOffsetX?: number;
        preciseVertexOffsetY?: number;
        vertexSymbol?: esri.symbol.SimpleMarkerSymbol;
        selectedVertexSymbol?: esri.symbol.SimpleMarkerSymbol;
        enableEditing?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    interface ExtendedEditOptions extends esri.EditOptions {
        narrateKeyboardShortcuts?: boolean;
        rotateHandleOffset?: number;
        boxLineSymbol?: esri.symbol.SimpleLineSymbol;
        boxHandleSymbol?: esri.symbol.SimpleMarkerSymbol;
        textAnchorSymbol?: esri.symbol.SimpleMarkerSymbol;
        selectedVertexSymbol?: esri.symbol.SimpleMarkerSymbol;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    interface GraphicMoverOptions {
        offsetX?: number;
        offsetY?: number;
        preciseOffsetX?: number;
        preciseOffsetY?: number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    class InputMethod {
        static MOUSE: string;
        static KEYBOARD: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    interface MapNavigationState {
        isClickRecenter?: boolean;
        isDoubleClickZoom?: boolean;
        isKeyboardNavigation?: boolean;
        isPan?: boolean;
        isPanArrows?: boolean;
        isRubberBandZoom?: boolean;
        isScrollWheelZoom?: boolean;
        isShiftDoubleClickZoom?: boolean;
        isZoomSlider?: boolean;
    }
}
declare var require: any;
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    interface TransformationResult {
        geometry: esri.geometry.Geometry;
        transform: dojox.gfx.matrix.Matrix2D;
    }
    class MatrixUtils {
        /**
         * Translates (moves) a given polygon or polyline by a specified offset.
         * @param geometry The Geometry to rotate.
         * @param dx The X offset.
         * @param dy The Y offset.
         */
        static translate(geometry: esri.geometry.Geometry, map: esri.Map, dx: number, dy: number): TransformationResult;
        /**
         * Rotates a given polygon or polyline by a specified angle.
         * @param geometry The Geometry to rotate.
         * @param degreesClockwise The angle to rotate the polygon in, specified in degrees, in a clockwise direction (as is standard for esri)
         * @param pivotMapPoint The "pivot" around which to rotate the polygon. Is not required to lie on or within the polygon.
         */
        static rotate(geometry: esri.geometry.Geometry, map: esri.Map, degreesClockwise: number, pivotMapPoint?: esri.geometry.Point): TransformationResult;
        /**
         * Scales (resizes) a given polygon or polyline by a specified scaling factor.
         * @param geometry The Geometry to rotate.
         * @param scaleX A scaling factor used for the x coordinate, or a uniform scaling factor used for the both coordinates.
         * @param scaleY (Optional) A scaling factor used for the y coordinate.
         */
        static scale(geometry: esri.geometry.Geometry, map: esri.Map, scaleX: number, scaleY?: number): TransformationResult;
        /**
         * Returns an approximation of the center point of the given geometry, as measured in Cartesian space.
         * @param geometry The geometry whose center needs to be returned
         */
        static getCentroid(geometry: esri.geometry.Geometry): esri.geometry.Point;
        private static _applyOffset(geometry, paths, dx, dy, map);
        private static _applyOffset(geometry, rings, dx, dy, map);
        private static _applyTransform(geometry, paths, transformation);
        private static _applyTransform(geometry, rings, transformation);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    class EditCapabilityBase implements EditCapability {
        owner: accessibility.Edit;
        graphic: esri.Graphic;
        map: esri.Map;
        suspended: boolean;
        constructor(graphic: esri.Graphic, map: esri.Map, owner: accessibility.Edit);
        destroy(): void;
        refresh(force?: boolean): void;
        suspend(): void;
        resume(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    class VertexEditor extends EditCapabilityBase {
        /** Keyboard event subscriptions */
        private _keyDownHandle;
        private _keyUpHandle;
        /** X-Offset, Y-Offset to apply to vertices being moved  */
        private _keyDx;
        private _keyDy;
        protected _transform: dojox.gfx.matrix.Matrix2D;
        protected _isMoving: boolean;
        protected _isActive: boolean;
        /** Array of vertices managed by this editor */
        protected _vertexControls: VertexInfo[][];
        /** Array of "ghost" vertices managed by this editor. Ghost vertices are located at the midpoint of every segment. */
        protected _midpointControls: VertexInfo[][];
        /** Flattened array of all vertices (real and ghost) in proper order. Used to determine the next and previous vertex to jump to via keyboard */
        protected _allControls: VertexInfo[];
        /** Currently selected/highlighted vertex */
        protected _selectedControl: VertexInfo;
        /** The vertex anchor (red dot) */
        protected _vertexHandleGraphic: esri.Graphic;
        protected _options: VertexEditorOptions;
        protected _snappingInputMovedToken: string;
        static create(graphic: esri.Graphic, map: esri.Map, owner: accessibility.Edit, options?: VertexEditorOptions): VertexEditor;
        constructor(graphic: esri.Graphic, map: esri.Map, owner: accessibility.Edit, options?: VertexEditorOptions);
        protected _handleSnappingInputMovedEvent(args: eventArgs.SnappingFeedbackEventArgs): void;
        isActive(): boolean;
        hideVertexHandle(): void;
        showVertexHandle(): void;
        destroy(): void;
        refresh(force?: boolean): void;
        getSelectedVertex(): VertexInfo;
        /** Updates the position of the currently selected vertex whenever a vertex is added */
        onVertexAdd(vertexInfo: VertexInfo): void;
        /** Updates the position of the currently selected vertex whenever a vertex is deleted */
        onVertexDelete(vertexInfo: VertexInfo): void;
        protected _init(): void;
        protected _cleanUp(): void;
        protected _getSegments(geometry: esri.geometry.Geometry): esri.geometry.Point[][];
        protected _getMidpointSegments(geometry: esri.geometry.Geometry): esri.geometry.Point[][];
        protected _updatePoints(points: VertexInfo[]): void;
        protected _insertGraphicVertex(vertex: esri.geometry.Point, segmentIndex: number, pointIndex: number): void;
        protected _updateGraphicVertex(vertex: esri.geometry.Point, segmentIndex: number, pointIndex: number): void;
        protected _deleteGraphicVertex(segmentIndex: number, pointIndex: number): void;
        protected _findVertex(point: esri.geometry.Point, vertices: VertexInfo[][]): VertexInfo;
        protected _addControllers(): void;
        protected _removeControllers(): void;
        protected _refreshControllers(): void;
        protected _add(segments: esri.geometry.Point[][], isGhost?: boolean): VertexInfo[][];
        protected _remove(vertices: VertexInfo[][]): void;
        protected _refresh(vertices: VertexInfo[][], segments: esri.geometry.Point[][], isGhost?: boolean): void;
        protected _previous(): void;
        protected _next(): void;
        /**
         * Provides keyboard handling for the VertexEditor component.
         * @private
         */
        protected _onKeyDownHandler(event: KeyboardEvent): void;
        protected _onKeyDownWhenActive(event: KeyboardEvent): void;
        protected _move(vertexInfo: VertexInfo, dx: number, dy: number): void;
        protected _raiseEditVertexMoved(eventArgs: eventArgs.EditVertexMovedEventArgs): void;
        protected _moveStop(vertexInfo: VertexInfo, dx: number, dy: number): void;
        protected _delete(vertexInfo: VertexInfo): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    class MultipointVertexEditor extends VertexEditor {
        protected _getSegments(geometry: esri.geometry.Multipoint): esri.geometry.Point[][];
        protected _getMidpointSegments(geometry: esri.geometry.Geometry): esri.geometry.Point[][];
        protected _insertGraphicVertex(vertex: esri.geometry.Point, segmentIndex: number, pointIndex: number): void;
        protected _updateGraphicVertex(vertex: esri.geometry.Point, segmentIndex: number, pointIndex: number): void;
        protected _deleteGraphicVertex(segmentIndex: number, pointIndex: number): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    class PolygonVertexEditor extends VertexEditor {
        protected _getSegments(geometry: esri.geometry.Polygon): esri.geometry.Point[][];
        protected _getMidpointSegments(geometry: esri.geometry.Polygon): esri.geometry.Point[][];
        protected _insertGraphicVertex(vertex: esri.geometry.Point, segmentIndex: number, pointIndex: number): void;
        protected _updateGraphicVertex(vertex: esri.geometry.Point, segmentIndex: number, pointIndex: number): void;
        protected _deleteGraphicVertex(segmentIndex: number, pointIndex: number): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    class PolylineVertexEditor extends VertexEditor {
        protected _getSegments(geometry: esri.geometry.Polyline): esri.geometry.Point[][];
        protected _getMidpointSegments(geometry: esri.geometry.Polyline): esri.geometry.Point[][];
        protected _insertGraphicVertex(vertex: esri.geometry.Point, segmentIndex: number, pointIndex: number): void;
        protected _updateGraphicVertex(vertex: esri.geometry.Point, segmentIndex: number, pointIndex: number): void;
        protected _deleteGraphicVertex(segmentIndex: number, pointIndex: number): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    interface VertexEditorOptions {
        /** Specifies whether users can add new vertices. */
        allowAddVertices?: boolean;
        /** Specifies whether users can delete vertices. */
        allowDeleteVertices?: boolean;
        /**  Marker symbol used to draw the currently selected vertex while in keyboard mode. */
        selectedVertexSymbol?: esri.symbol.MarkerSymbol;
        offsetX?: number;
        offsetY?: number;
        preciseOffsetX?: number;
        preciseOffsetY?: number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    interface VertexInfo {
        /** Specifies whether the event fired for an existing vertex or a ghost vertex. When true, pointIndex indicates the position the vertex will take when added to the graphic. */
        isGhost: boolean;
        /** Index of the vertex in the segment indicated by segmentIndex. */
        pointIndex: number;
        /** Index of the ring or path that contains the vertex. Always 0 for multipoints. */
        segmentIndex: number;
        /** The vertex location on the map. */
        point?: esri.geometry.Point;
    }
}
declare module geocortex.framework.events {
    interface FrameworkEvents extends EventsBase {
        /**
         * Raised when the accessibility icon content has been initialized.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name AccessibilityIconContentInitializedEvent
         * @introduced 2.5
         * @gcx-event-category Accessibility
         */
        (eventName: "AccessibilityIconContentInitializedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when a keyboard accessible component begins execution.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name AccessibleComponentStartedEvent
         * @param component The keyboard accessible component.
         * @introduced 2.4
         * @gcx-event-category Tool
         */
        (eventName: "AccessibleComponentStartedEvent"): TypedEvent<{
            (component: essentialsHtmlViewer.mapping.infrastructure.accessibility.AccessibleMapComponent): void;
        }>;
        /**
         * Raised when a keyboard accessible component has ended execution.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name AccessibleComponentCompletedEvent
         * @param component The keyboard accessible component.
         * @introduced 2.4
         * @gcx-event-category Tool
         */
        (eventName: "AccessibleComponentCompletedEvent"): TypedEvent<{
            (component: essentialsHtmlViewer.mapping.infrastructure.accessibility.AccessibleMapComponent): void;
        }>;
        /**
         * Raised when the active tool has changed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ActiveToolChangedEvent
         * @param args An object containing the newly active tool (or null if no tool is active), and the previously active tool (or null if no tool was previously active).
         * @introduced 1.1
         * @gcx-event-category Tool
         */
        (eventName: "ActiveToolChangedEvent"): TypedEvent<{
            (args: essentialsHtmlViewer.mapping.infrastructure.eventArgs.ActiveToolChangedEventArgs): void;
        }>;
        /**
        * Raised when the all identifiable layers are enabled for identify operations.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name AllLayersEnabledForIdentifyEvent
        * @param IdentifiableLayerInfos: An array of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.IdentifiableLayerInfo} objects representing the current set of identifiable layers.
        * @introduced 2.5
        * @gcx-event-category Identify
        */
        (eventName: "AllLayersEnabledForIdentifyEvent"): TypedEvent<{
            (IdentifiableLayerInfos: geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.IdentifiableLayerInfo[]): void;
        }>;
        /**
        * Raised when the all identifiable layers are disabled for identify operations.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name AllLayersDisabledForIdentifyEvent
        * @param IdentifiableLayerInfos: An array of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.IdentifiableLayerInfo} objects representing the current set of identifiable layers.
        * @introduced 2.5
        * @gcx-event-category Identify
        */
        (eventName: "AllLayersDisabledForIdentifyEvent"): TypedEvent<{
            (IdentifiableLayerInfos: geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.IdentifiableLayerInfo[]): void;
        }>;
        /**
         * Raised when an application's storage space is cleared.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ApplicationStorageClearedEvent
         * @introduced 1.2
         * @gcx-event-category Offline/Online
         */
        (eventName: "ApplicationStorageClearedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when a user fails to authenticate against a {@link essentials.Site}.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name AuthenticationFailedEvent
         * @introduced 1.0
         * @gcx-event-category Authentication and Authorization
         */
        (eventName: "AuthenticationFailedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.AuthenticationEventArgs): void;
        }>;
        /**
         * Raised when a user successfully authenticates against a Site.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name AuthenticationSucceededEvent
         * @param args An object containing the following fields: result, username, token.
         * @introduced 1.0
         * @gcx-event-category Authentication and Authorization
         */
        (eventName: "AuthenticationSucceededEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.AuthenticationEventArgs): void;
        }>;
        /**
         * Raised when a bookmark is added or removed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name BookmarksModifiedEvent
         * @param bookmarksJson A JSON string containing all the bookmarks currently in the local storage of the browser.
         * @introduced 2.0
         * @gcx-event-category Bookmark
         */
        (eventName: "BookmarksModifiedEvent"): TypedEvent<{
            (bookmarksJson: any): void;
        }>;
        /**
         * Raised when the Bottom Region is maximized.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name BottomRegionMaximizedEvent
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "BottomRegionMaximizedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when the Bottom Region is restored to its previous dimensions.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name BottomRegionRestoredEvent
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "BottomRegionRestoredEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when a new Cluster Layer is added to the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ClusterLayerAddedEvent
         * @param clusterLayer The new ClusterLayer.
         * @introduced 2.5
         * @gcx-event-category Visualization
         */
        (eventName: "ClusterLayerAddedEvent"): TypedEvent<{
            (clusterLayer: any): void;
        }>;
        /**
         * Raised when a Cluster Layer is removed from the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ClusterLayerRemovedEvent
         * @param clusterLayer The ClusterLayer that has been removed from the map.
         * @introduced 2.5
         * @gcx-event-category Visualization
         */
        (eventName: "ClusterLayerRemovedEvent"): TypedEvent<{
            (clusterLayer: any): void;
        }>;
        /**
        * Raised when a plotted coordinate is temporarily hidden.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name CoordinateSetHiddenEvent
        * @param coordId The coordinate Id that has currently been set hidden.
        * @introduced 2.6
        * @gcx-event-category PlotCoordinates
        */
        (eventName: "CoordinateSetHiddenEvent"): TypedEvent<{
            (coordId: string): void;
        }>;
        /**
        * Raised when a plotted coordinate which was hidden, is set visible again.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name CoordinateSetHiddenEvent
        * @param coordId The coordinate Id that has currently been set visible.
        * @introduced 2.6
        * @gcx-event-category PlotCoordinates
        */
        (eventName: "CoordinateSetVisibleEvent"): TypedEvent<{
            (coordId: string): void;
        }>;
        /**
         * Raised when buffering is activated for a target command or commands.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name BufferingActivatedEvent
         * @param args A string or array of strings specifying the command(s) for which buffering has been activated.
         * @introduced 2.5
         * @gcx-event-category Buffering
         */
        (eventName: "BufferingActivatedEvent"): TypedEvent<{
            (args: string | string[]): void;
        }>;
        /**
        * Raised when buffering is deactivated for a target command or commands.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name BufferingDeactivatedEvent
        * @param args A string or array of strings specifying the command(s) for which buffering has been deactivated.
        * @introduced 2.5
        * @gcx-event-category Buffering
        */
        (eventName: "BufferingDeactivatedEvent"): TypedEvent<{
            (args: string | string[]): void;
        }>;
        /**
        * Raised when the current buffer distance or units for a command are changed by the user via the Buffer Options dialog.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name BufferDistanceChangedEvent
        * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferDistanceChangedEventArgs} object denoting the new buffer distance configuration.
        * @introduced 2.5
        * @gcx-event-category Buffering
        */
        (eventName: "BufferDistanceChangedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferDistanceChangedEventArgs): void;
        }>;
        /**
         * Raised when a buffering operation successfully completes.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name BufferingCompletedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferOperationResult} object, with either the buffered `geometry` or an array of `geometries` as its properties.
         * @introduced 2.5
         * @gcx-event-category Buffering
         */
        (eventName: "BufferingCompletedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferOperationResult): void;
        }>;
        /**
         * Raised when a buffering operation returns an error.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name BufferingErrorEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferOperationError} object.
         * @introduced 2.5
         * @gcx-event-category Buffering
         */
        (eventName: "BufferingErrorEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferOperationError): void;
        }>;
        /**
         * Raised when the Buffer Options dialog for any command is dismissed when the user clicks Continue.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name BufferOptionsDismissedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferDistanceChangedEventArgs} object containing the buffer settings when the view was dismissed, with the following properties: `distance`, `unit` and `targetCommands`.
         * `distance` is the distance amount entered by the user.
         * `unit` is the distance unit entered by the user.
         * `targetCommands` are the commands to which buffering will be applied.
         * @introduced 2.5
         * @gcx-event-category Buffering
         */
        (eventName: "BufferOptionsDismissedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferDistanceChangedEventArgs): void;
        }>;
        /**
         * Raised when the Compact Toolbar is expanded or collapsed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name CompactToolbarStateChanged
         * @param isExpanded Whether the Compact Toolbar has been expanded or not.
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "CompactToolbarStateChangedEvent"): TypedEvent<{
            (isExpanded: boolean): void;
        }>;
        /**
         * Raised when an external components viewpoint has been updated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ComponentViewpointUpdatedEvent
         * @param arg An instance of {@link essentialsHtmlViewer.mapping.infrastructure.integration.ComponentViewpointMessage}, that represents the updated viewpoint of the component.
         * @introduced 2.4
         * @gcx-event-category Integration
         */
        (eventName: "ComponentViewpointUpdatedEvent"): TypedEvent<{
            (arg: geocortex.essentialsHtmlViewer.mapping.infrastructure.integration.ComponentViewpointMessage): void;
        }>;
        /**
         * Raised when a coordinate is resolved and successfully plotted on the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name CoordinateAddedEvent
         * @param arg An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.PlotCoordinatesEventArgs}, that represents the coordinate just added to the map.
         * @introduced 2.6
         * @gcx-event-category PlotCoordinates
         */
        (eventName: "CoordinateAddedEvent"): TypedEvent<{
            (arg: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.PlotCoordinatesEventArgs): void;
        }>;
        /**
         * Raised when a coordinate is successfully edited.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name CoordinateEditedEvent
         * @param arg An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.PlotCoordinatesEventArgs}, that represents the coordinate that was just edited.
         * @introduced 2.6
         * @gcx-event-category PlotCoordinates
         */
        (eventName: "CoordinateEditedEvent"): TypedEvent<{
            (arg: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.PlotCoordinatesEventArgs): void;
        }>;
        /**
         * Raised when a coordinate is successfully deleted and removed from the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name CoordinateDeletedEvent
         * @param arg An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.PlotCoordinatesEventArgs}, that represents the coordinate that was just deleted
         * @introduced 2.6
         * @gcx-event-category PlotCoordinates
         */
        (eventName: "CoordinateDeletedEvent"): TypedEvent<{
            (arg: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.PlotCoordinatesEventArgs): void;
        }>;
        /**
         * Raised when a coordinate's id is updated, possibly as a result of another coordinate in the coordinate list being deleted.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name CoordinateIdUpdatedEvent
         * @param arg An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.PlotCoordinatesIdUpdatedEventArgs}, that represents the coordinate whose Id was just updated
         * @introduced 2.6
         * @gcx-event-category PlotCoordinates
         */
        (eventName: "CoordinateIdUpdatedEvent"): TypedEvent<{
            (arg: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.PlotCoordinatesIdUpdatedEventArgs): void;
        }>;
        /**
         * Raised when a coordinate successfully updates itself in response to a change in the global coordinate system setting.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name CoordinateSystemUpdateAppliedEvent
         * @param arg An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.PlotCoordinatesEventArgs}, that represents the coordinate whose coordinate system was just updated.
         * @introduced 2.6
         * @gcx-event-category PlotCoordinates
         */
        (eventName: "CoordinateSystemUpdateAppliedEvent"): TypedEvent<{
            (arg: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.PlotCoordinatesEventArgs): void;
        }>;
        /**
         * Raised when the context menu is activated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ContextMenuActivated
         * @introduced 2.6
         * @gcx-event-category Interface
         */
        (eventName: "ContextMenuActivated"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when the context menu is deactivated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ContextMenuDeactivated
         * @introduced 2.6
         * @gcx-event-category Interface
         */
        (eventName: "ContextMenuDeactivated"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when datalinks are discovered for the current {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSet} and resolution begins.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name DatalinkResolutionStartedEvent
         * @param datalinkId The ID of the datalink to resolve.
         * @param featureSet The {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSet} containing features with datalinks to be resolved.
         * @introduced 2.5
         * @gcx-event-category Editing
         */
        (eventName: "DatalinkResolutionStartedEvent"): TypedEvent<{
            (datalinkId: string, featureSet: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet): void;
        }>;
        /**
         * Raised when datalinks are successfully resolved.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name DatalinkResolutionCompletedEvent
         * @param datalinkId The ID of the datalink to resolve.
         * @param featureSet The {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSet} containing features with resolved datalinks.
         * @introduced 2.5
         * @gcx-event-category Editing
         */
        (eventName: "DatalinkResolutionCompletedEvent"): TypedEvent<{
            (datalinkId: string, featureSet: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet): void;
        }>;
        /**
         * Raised when the Data Frame is closed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name DataFrameClosedEvent
         * @introduced 1.1
         * @gcx-event-category Interface
         */
        (eventName: "DataFrameClosedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when offline data is cleared for an entire domain.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name DomainStorageClearedEvent
         * @introduced 1.1
         * @gcx-event-category Offline/Online
         */
        (eventName: "DomainStorageClearedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when the Data Frame is opened.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name DataFrameOpenedEvent
         * @introduced 1.1
         * @gcx-event-category Interface
         */
        (eventName: "DataFrameOpenedEvent"): TypedEvent<{
            (bottomPanelHeightPercent?: number): void;
        }>;
        /**
         * Raised when the feature editor is closed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name EditorClosedEvent
         * @introduced 2.5
         * @gcx-event-category Editing
         */
        (eventName: "EditorClosedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when a vertex within the Esri editor is dragged with the mouse.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name EditVertexHandleMovedEvent
         * @param args A reference to the dragging handle graphic.
         * @introduced 2.5
         * @gcx-event-category Editing
         */
        (eventName: "EditVertexHandleMovedEvent"): TypedEvent<{
            (args: esri.Graphic): void;
        }>;
        /**
         * Raised when a vertex is moved with the keyboard.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name EditVertexMovedEvent
         * @param args An {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.EditVertexMovedEventArgs} object with the following properties: `sender`, `mapPoint` and `screenPoint`.
         * `sender` is the sender.
         * `mapPoint` is the map coordinates of the vertex.
         * `screenPoint` is screen cooridinates of the vertex.
         * @introduced 2.5
         * @gcx-event-category Editing
         */
        (eventName: "EditVertexMovedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.EditVertexMovedEventArgs): void;
        }>;
        /**
         * Raised when a new feature is about to be created.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name EditorPreCreateFeatureEvent
         * @param feature The feature that is about to be created.
         * @introduced 1.2
         * @gcx-event-category Editing
         */
        (eventName: "EditorPreCreateFeatureEvent"): TypedEvent<{
            (feature: esri.Graphic): void;
        }>;
        /**
         * Raised when an existing feature is about to be updated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name EditorPreUpdateFeatureEvent
         * @param feature The feature that is about to be updated.
         * @introduced 1.2
         * @gcx-event-category Editing
         */
        (eventName: "EditorPreUpdateFeatureEvent"): TypedEvent<{
            (feature: esri.Graphic): void;
        }>;
        /**
         * Raised when an HTTP request to an Esri resource is started.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name EsriWebRequestStartedEvent
         * @param url The URL for the web request.
         * @introduced 2.5
         * @gcx-event-category Performance
         */
        (eventName: "EsriWebRequestStartedEvent"): TypedEvent<{
            (url: string): void;
        }>;
        /**
         * Raised when an HTTP request to an Esri resource is completed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name EsriWebRequestCompletedEvent
         * @param url The URL for the web request.
         * @introduced 2.5
         * @gcx-event-category Performance
         */
        (eventName: "EsriWebRequestCompletedEvent"): TypedEvent<{
            (url: string): void;
        }>;
        /**
         * Raised when an external component has established a {@link essentialsHtmlViewer.integration.PostMessageTransport}.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ExternalComponentInitializedEvent
         * @param arg An instance of {@link essentialsHtmlViewer.mapping.infrastructure.integration.ComponentInitializationMessage}, that represents a previous state of the component.
         * @introduced 2.4
         * @gcx-event-category Integration
         */
        (eventName: "ExternalComponentInitializedEvent"): TypedEvent<{
            (arg: geocortex.essentialsHtmlViewer.mapping.infrastructure.integration.ComponentInitializationMessage): void;
        }>;
        /**
         * Raised when a file attachment is added to a feature.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FeatureAttachmentAddedEvent
         * @param feature The feature to which the file was attached successfully
         * @introduced 1.3
         * @gcx-event-category Editing
         */
        (eventName: "FeatureAttachmentAddedEvent"): TypedEvent<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Raised when a feature is changed - for example when datalinks are asynchronously resolved.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FeatureChangedEvent
         * @param feature The feature that was changed.
         * @introduced 1.2
         * @gcx-event-category Editing
         */
        (eventName: "FeatureChangedEvent"): TypedEvent<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
        * Raised when the current feature whose details are being displayed by the Feature Details module changes.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name FeatureDetailsCurrentFeatureChanged
        * @param feature The current feature for which the Feature Details module is displaying details.
        * @introduced 2.4
        * @gcx-event-category Feature Details
        */
        (eventName: "FeatureDetailsCurrentFeatureChanged"): TypedEvent<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
        * Raised when the Feature Details module is invoked in order to display results for a given feature.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name FeatureDetailsInvokedEvent
        * @param feature The current feature for which the Feature Details module is displaying details.
        * @introduced 2.6
        * @gcx-event-category Feature Details
        */
        (eventName: "FeatureDetailsInvokedEvent"): TypedEvent<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Raised when a feature is created.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FeatureCreatedEvent
         * @param feature The feature that was created.
         * @introduced 2.3
         * @gcx-event-category Editing
         */
        (eventName: "FeatureCreatedEvent"): TypedEvent<{
            (feature: esri.Graphic): void;
        }>;
        /**
         * Raised when a feature data synchronization has completed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FeatureDataSyncCompleteEvent
         * @introduced 2.6
         * @gcx-event-category Offline/Online
         */
        (eventName: "FeatureDataSyncCompletedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when a feature data synchronization has started.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FeatureDataSyncStartedEvent
         * @param parameters The sync parameters that were used to specify which data should be synced.
         * @introduced 2.6
         * @gcx-event-category Offline/Online
         */
        (eventName: "FeatureDataSyncStartedEvent"): TypedEvent<{
            (parameters: geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.SyncParameters): void;
        }>;
        /**
         * Raised when a feature is deleted.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FeatureDeletedEvent
         * @param feature The feature that was deleted.
         * @introduced 1.2
         * @gcx-event-category Editing
         */
        (eventName: "FeatureDeletedEvent"): TypedEvent<{
            (feature: esri.Graphic): void;
        }>;
        /**
         * Raised when a feature is edited.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FeatureEditedEvent
         * @param args An object with the following properties: `originalFeature` and `editedFeature`.
         * `originalFeature` is the {@link esri.Graphic} representing the original feature.
         * `editedFeature` is the {@link esri.Graphic} representing the edited feature.
         * @introduced 1.3
         * @gcx-event-category Editing
         */
        (eventName: "FeatureEditedEvent"): TypedEvent<{
            (args: {
                originalFeature: esri.Graphic;
                editedFeature: esri.Graphic;
            }): void;
        }>;
        /**
         * Raised when a module opens a flyout menu.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FlyoutActivated
         * @param view The view whose flyout menu opened.
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "FlyoutActivated"): TypedEvent<{
            (view: geocortex.framework.ui.ViewBase): void;
        }>;
        /**
         * Raised when a module closes a flyout menu.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FlyoutDeactivated
         * @param view The view whose flyout menu closed.
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "FlyoutDeactivated"): TypedEvent<{
            (view: geocortex.framework.ui.ViewBase): void;
        }>;
        /**
         * Raised when a folder item in the layer list is clicked or tapped.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FolderClickedEvent
         * @param context The folder item in the layer list.  An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerListFolderItem}.
         * @introduced 2.3
         * @gcx-event-category Layer List
         */
        (eventName: "FolderClickedEvent"): TypedEvent<{
            (context: geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerListFolderItem): void;
        }>;
        /**
         * Raised when a {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} is added to the {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSetManager}.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FSMCollectionAddedEvent
         * @param args An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs}.
         * @introduced 1.0
         * @gcx-event-category Feature Set Collection
         */
        (eventName: "FSMCollectionAddedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs): void;
        }>;
        /**
         * Raised when a {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} in the {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSetManager} is altered.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FSMCollectionChangedEvent
         * @param args An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs}.
         * @introduced 1.0
         * @gcx-event-category Feature Set Collection
         */
        (eventName: "FSMCollectionChangedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs): void;
        }>;
        /**
         * Raised when a {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} is closed in the {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSetManager}.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FSMCollectionClosedEvent
         * @param args An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs}.
         * @introduced 1.0
         * @gcx-event-category Feature Set Collection
         */
        (eventName: "FSMCollectionClosedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs): void;
        }>;
        /**
         * Raised when a {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} is opened in the {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSetManager}.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FSMCollectionOpenedEvent
         * @param args An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs}.
         * @introduced 1.0
         * @gcx-event-category Feature Set Collection
         */
        (eventName: "FSMCollectionOpenedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs): void;
        }>;
        /**
         * Raised when a {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} is removed from the {@link essentialsHtmlViewer.mapping.infrastructure.FeatureSetManager}.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name FSMCollectionRemovedEvent
         * @param args An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs}.
         * @introduced 1.0
         * @gcx-event-category Feature Set Collection
         */
        (eventName: "FSMCollectionRemovedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.FeatureSetManagerEventArgs): void;
        }>;
        /**
         * Raised after a successful geolocation operation.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GeolocatedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GeolocationEventArgs} object containing the following properties: `mapPoint`, `location`, `typeOfGeolocation`, `accuracyThreshold`, `timedOut`.
         * `mapPoint` represents the map point of the user's position in Web Mercator.
         * `location` represents the location of the user, as returned directly from the HTML5 geolocation event.
         * `typeOfGeolocation` is a string indicating whether the current geolocation result was from single geolocation, tracking or following.
         * `accuracyThreshold` is a number indicating the accuracy radius, in meters, that was specified to satisfy a single-reading geolocation.
         * `timedOut` is `true` when the time limit specified for single-reading geolocation has been reached; otherwise, it is `false`.
         * @introduced 1.0
         * @gcx-event-category Map
         */
        (eventName: "GeolocatedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GeolocationEventArgs): void;
        }>;
        /**
         * Raised when a geolocation operation fails in find, track, or follow mode.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GeolocationFailedEvent
         * @param args An object containing the following properties: `error`, `isFollowing` and `isTracking`.
         * @introduced 2.3
         * @gcx-event-category Map
         */
        (eventName: "GeolocationFailedEvent"): TypedEvent<{
            (args: {
                error: PositionError;
                isFollowing: boolean;
                isTracking: boolean;
            }): void;
        }>;
        /**
         * Raised when geometry of a feature has been edited.
         * @name GeometryEditCompletedEvent
         * @param args An object that represents information about the edit, containing the properties: `editedGraphic`, `originalGraphic`, `cancelled`.
         * @introduced 1.3
         * @gcx-event-category Editing
         */
        (eventName: "GeometryEditCompletedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GeometryEditCompletedEventArg): void;
        }>;
        /**
         * Raised when editing of the geometry of a feature has started.
         * @name GeometryEditInvokedEvent
         * @param graphic The Esri Graphic being edited.
         * @introduced 1.3
         * @gcx-event-category Editing
         */
        (eventName: "GeometryEditInvokedEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when the component for drawing shapes is activated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GraphicDrawActivatedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicDrawActivatedEventArgs} object with the following properties: `sender` and `geometryType`.
         * @introduced 2.4
         * @gcx-event-category Tool
         */
        (eventName: "GraphicDrawActivatedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicDrawActivatedEventArgs): void;
        }>;
        /**
         * Raised when the user has ended drawing.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GraphicDrawCompletedEvent
         * @param geometry The geometry of the shape that was drawn. Coordinates of this geometry have the same spatial reference of the map.
         * @introduced 2.4
         * @gcx-event-category Tool
         */
        (eventName: "GraphicDrawCompletedEvent"): TypedEvent<{
            (geometry: esri.geometry.Geometry): void;
        }>;
        /**
         * Raised when the component for drawing shapes is deactivated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GraphicDrawDeactivatedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicDrawDeactivatedEventArgs} object with the following properties: `sender` and `geometryType`.
         * @introduced 2.4
         * @gcx-event-category Tool
         */
        (eventName: "GraphicDrawDeactivatedEvent"): TypedEvent<{
            (args: essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicDrawDeactivatedEventArgs): void;
        }>;
        /**
         * Raised when the component for editing a point-based feature is activated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GeometryEditPointActivatedEvent
         * @introduced 2.5
         * @gcx-event-category Tool
         */
        (eventName: "GeometryEditPointActivatedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when the component for editing graphics is activated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GraphicEditActivatedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicEditActivatedEventArgs} object with the following properties: `sender`, `tool` and `graphic`.
         * @introduced 2.4
         * @gcx-event-category Tool
         */
        (eventName: "GraphicEditActivatedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicEditActivatedEventArgs): void;
        }>;
        /**
         * Raised when the component for editing graphics is deactivated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GraphicEditDeactivatedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicEditDeactivatedEventArgs} object with the following properties: `sender`, `tool`, `graphic`, `isModified` (optional), `cancelled` (optional).
         * @introduced 2.4
         * @gcx-event-category Tool
         */
        (eventName: "GraphicEditDeactivatedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicEditDeactivatedEventArgs): void;
        }>;
        /**
         * Raised when the component for editing draw/markup graphics is activated after a drawing is completed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GraphicDrawAccessibleEditActivatedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicEditActivatedEventArgs} object with the following properties: `sender`, `tool` and `graphic`.
         * @introduced 2.5
         * @gcx-event-category Tool
         */
        (eventName: "GraphicDrawAccessibleEditActivatedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicEditActivatedEventArgs): void;
        }>;
        /**
         * Raised when the component for editing draw/markup graphics is deactivated after a drawing is completed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GraphicDrawAccessibleEditDeactivatedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicEditDeactivatedEventArgs} object with the following properties: `sender`, `tool`, `graphic`, `isModified` (optional), `cancelled` (optional).
         * @introduced 2.5
         * @gcx-event-category Tool
         */
        (eventName: "GraphicDrawAccessibleEditDeactivatedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicEditDeactivatedEventArgs): void;
        }>;
        /**
         * Raised when a new vertex is added to a polyline or polygon or a new point is added to a multipoint in an active drawing session.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GraphicVertexAddedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicVertexAddedEventArgs} object with the following properties: `sender`, `mapPoint`, `screenPoint`.
         * @introduced 2.4
         * @gcx-event-category Tool
         */
        (eventName: "GraphicVertexAddedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicVertexAddedEventArgs): void;
        }>;
        /**
         * Raised when the graphic vertex drawing tool is moved using the keyboard.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name GraphicVertexMovedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicVertexMovedEventArgs} object with the following properties: `sender`, `mapPoint`, `screenPoint`.
         * @introduced 2.4
         * @gcx-event-category Tool
         */
        (eventName: "GraphicVertexMovedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.GraphicVertexMovedEventArgs): void;
        }>;
        /**
         * Raised when a Geocortex layer has a heat map visualization added.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name HeatMapAddedEvent
         * @param gcxLayer The Geocortex layer that had the heat map added.
         * @introduced 2.5
         * @gcx-event-category Visualization
         */
        (eventName: "HeatMapAddedEvent"): TypedEvent<{
            (gcxLayer: geocortex.essentials.Layer): void;
        }>;
        /**
         * Raised when a Geocortex layer has a heat map visualization removed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name HeatMapRemovedEvent
         * @param gcxLayer The Geocortex layer that had the heat map removed.
         * @introduced 2.5
         * @gcx-event-category Visualization
         */
        (eventName: "HeatMapRemovedEvent"): TypedEvent<{
            (gcxLayer: geocortex.essentials.Layer): void;
        }>;
        /**
         * Raised when a layer has been added to the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerAddedEvent
         * @param serviceLayer The Esri service layer which has been added to the map.
         * @param service The map service specific to this layer.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "LayerAddedEvent"): TypedEvent<{
            (serviceLayer: esri.layers.Layer, service: geocortex.essentials.MapService): void;
        }>;
        /**
         * Raised when a layer is added to the map, or a layer fails to be added to the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerAddedWithResultEvent
         * @param serviceLayer The Esri service layer added to the map.
         * @param error (Optional) Available when an error occurs during the update.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "LayerAddedWithResultEvent"): TypedEvent<{
            (serviceLayer: esri.layers.Layer, error?: Error): void;
        }>;
        /**
         * Raised when a layer item in the layer list is clicked or tapped.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerClickedEvent
         * @param context The layer item in the layer list that was clicked or tapped.  An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerListLayerItem}.
         * @introduced 1.1
         * @gcx-event-category Layer List
         */
        (eventName: "LayerClickedEvent"): TypedEvent<{
            (context: geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerListLayerItem): void;
        }>;
        /**
        * Raised when a specific layer has been disabled from participating in identify operations.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name LayerDisabledForIdentifyEvent
        * @param layer A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.LayerDescriptor} object describing the layer that has been disabled for identify, with the following properties: `mapServiceId` and `layerId` (optional).
        * @introduced 2.5
        * @gcx-event-category Identify
        */
        (eventName: "LayerDisabledForIdentifyEvent"): TypedEvent<{
            (layer: geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.LayerDescriptor): void;
        }>;
        /**
        * Raised when a specific layer has been enabled such that it participates in identify operations.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name LayerEnabledForIdentifyEvent
        * @param layer A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.LayerDescriptor} object describing the layer that has been enabled for identify, with the following properties: `mapServiceId` and `layerId` (optional).
        * @introduced 2.5
        * @gcx-event-category Identify
        */
        (eventName: "LayerEnabledForIdentifyEvent"): TypedEvent<{
            (layer: geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.LayerDescriptor): void;
        }>;
        /**
         * Raised after the configurable layer list has initialized and the initial layer theme has been loaded.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerListInitializedEvent
         * @param sender The core layer list object reference.  An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerList}.
         * @introduced 2.3
         * @gcx-event-category Layer List
         */
        (eventName: "LayerListInitializedEvent"): TypedEvent<{
            (sender: geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerList): void;
        }>;
        /**
         * Raised when a layer item in the layer list is pressed for a long time.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerLongPressedEvent
         * @param context The layer item corresponding to the layer which was pressed for a long time.  An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerListLayerItem}.
         * @introduced 1.1
         * @gcx-event-category Layer List
         */
        (eventName: "LayerLongPressedEvent"): TypedEvent<{
            (context: geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerListLayerItem): void;
        }>;
        /**
         * Raised when a layer item in the layer list is clicked or tapped.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerPressedEvent
         * @param context The layer item in the layer list that was clicked or tapped.  An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerListLayerItem}.
         * @introduced 1.1
         * @gcx-event-category Layer List
         */
        (eventName: "LayerPressedEvent"): TypedEvent<{
            (context: geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerListLayerItem): void;
        }>;
        /**
         * Raised when a layer has been removed from the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerRemovedEvent
         * @param serviceLayer The Esri service layer which has been removed.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "LayerRemovedEvent"): TypedEvent<{
            (serviceLayer: esri.layers.Layer): void;
        }>;
        /**
         * Raised when more than one layer is added to the map, or more than one layer fails to be added to the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayersAddedWithResultEvent
         * @param results An array of result objects with the following properties: `layer`, `success`, `error`.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "LayersAddedWithResultEvent"): TypedEvent<{
            (results: {
                layer: esri.layers.Layer;
                success?: boolean;
                error?: Error;
            }[]): void;
        }>;
        /**
         * Raised when a layer finishes updating its content.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerUpdateEndedEvent
         * @param serviceLayer The Esri service layer whose attribute has been updated.
         * @param service The {@link essentials.MapService} specific to this layer.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "LayerUpdateEndedEvent"): TypedEvent<{
            (serviceLayer: esri.layers.Layer, service: essentials.MapService): void;
        }>;
        /**
         * Raised when a layer begins to update its content.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerUpdateStartedEvent
         * @param serviceLayer The Esri service layer whose attribute will be updated.
         * @param service The {@link essentials.MapService} specific to this layer.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "LayerUpdateStartedEvent"): TypedEvent<{
            (serviceLayer: esri.layers.Layer, service: essentials.MapService): void;
        }>;
        /**
         * Raised when the visibility of a layer has changed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerVisibilityChangedEvent
         * @param results An array of result objects with the following properties: `layer`, `mapService`, `visibility`.
         * `layer` represents the site (Essentials) layer whose visibility changed;
         * `mapService` represents the map service specific to this layer;
         * `visibility` indicates whether or not the layer is visible after the visibility changed.
         * @introduced 2.3
         * @gcx-event-category Interface
         */
        (eventName: "LayerVisibilityChangedEvent"): TypedEvent<{
            (results: {
                layer: essentials.Layer;
                mapService: essentials.MapService;
                visibility: boolean;
            }[]): void;
        }>;
        /**
         * Raised just before the layer theme is changed. At this point, the active theme property will be set, but the theme will not
         * yet have been applied to the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerThemeChangingEvent
         * @param layerThemeEventArgs A {@link geocortex.essentials.LayerThemeEventArgs} object containing the following properties: `currTheme` and `prevTheme`.
         * `currTheme` represents the current layer theme.
         * `prevTheme` represents the previous layer theme.
         * @introduced 2.3
         * @gcx-event-category Layer Theme
         */
        (eventName: "LayerThemeChangingEvent"): TypedEvent<{
            (layerThemeEventArgs: geocortex.essentials.LayerThemeEventArgs): void;
        }>;
        /**
         * Raised just after the layer theme has changed. At this point the theme will have been applied to the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerThemeChangedEvent
         * @param layerThemeEventArgs A {@link geocortex.essentials.LayerThemeEventArgs} object containing the following properties: `currTheme` and `prevTheme`.
         * `currTheme` represents the current layer theme.
         * `prevTheme` represents the previous layer theme.
         * @introduced 2.3
         * @gcx-event-category Layer Theme
         */
        (eventName: "LayerThemeChangedEvent"): TypedEvent<{
            (layerThemeEventArgs: geocortex.essentials.LayerThemeEventArgs): void;
        }>;
        /**
         * Raised when a Geocortex layer has its visualization changed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name LayerVisualizationChangedEvent
         * @param gcxLayer The Geocortex layer whose visualization changed.
         * @introduced 2.5
         * @gcx-event-category Visualization
         */
        (eventName: "LayerVisualizationChangedEvent"): TypedEvent<{
            (gcxLayer: geocortex.essentials.Layer): void;
        }>;
        /**
         * Raised when a map callout window is closed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapCalloutClosedEvent
         * @param elementID The unique element ID indicating which callout was closed, corresponding to the `elementID` parameter that was passed to the `ShowMapCallout` command.
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "MapCalloutClosedEvent"): TypedEvent<{
            (elementID: string): void;
        }>;
        /**
         * Raised when a user clicks on the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapClickedEvent
         * @param mouseEvent A {@link MouseEvent}.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "MapClickedEvent"): TypedEvent<{
            (mouseEvent: MouseEvent): void;
        }>;
        /**
         * Raised when a user triggers the context menu via right-click or long press of the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapContextMenuPointUpdatedEvent
         * @param point An instance of {@link esri.geometry.Point}, that represents the point on the map where the user activated the context menu.
         * @introduced 2.6
         * @gcx-event-category Interface
         */
        (eventName: "MapContextMenuPointUpdatedEvent"): TypedEvent<{
            (point: esri.geometry.Point): void;
        }>;
        /**
         * Raised as the extent of the map changes.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapExtentChangingEvent
         * @param mapExtentEventArgs An object that represents a center point on the current scale and resolution of the map.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "MapExtentChangingEvent"): TypedEvent<{
            (mapExtentEventArgs: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MapExtentEventArgs): void;
        }>;
        /**
         * Raised when the extent of the map completes a pan or zoom operation.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapExtentChangedEvent
         * @param extent The current extent of the map.
         * @param mapExtentEventArgs An object that represents a center point on the current scale and resolution of the map.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "MapExtentChangedEvent"): TypedEvent<{
            (extent: esri.geometry.Extent, mapExtentEventArgs: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MapExtentEventArgs): void;
        }>;
        /**
         * Raised as the extent of the map changes.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapExtentChangeEvent
         * @param extent The current extent of the map.
         * @param delta The change (in screen-space) of the coordinates from the last MapExtentChangeEvent.
         * @param levelChange Whether the user has zoomed to a new level on a tiled map service.
         * @param lod The level of detail for a tiled map service at the start of a zoom.
         * @introduced 1.0
         * @gcx-event-category Map
         */
        (eventName: "MapExtentChangeEvent"): TypedEvent<{
            (extent: esri.geometry.Extent, delta: esri.geometry.Point, levelChange: boolean, lod: esri.layers.LOD): void;
        }>;
        /**
         * Raised when the Esri map control is loaded.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapLoadedEvent
         * @param map The instance of the map that was loaded.
         * @introduced 1.0
         * @gcx-event-category Load
         */
        (eventName: "MapLoadedEvent"): TypedEvent<{
            (map: esri.Map): void;
        }>;
        /**
         * Raised when a user clicks on the map before releasing the mouse button.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapMouseDownEvent
         * @param mouseEvent An object describing the mouse down event.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "MapMouseDownEvent"): TypedEvent<{
            (mouseEvent: MouseEvent): void;
        }>;
        /**
         * Raised when a user hovers on the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapMouseHoverEvent
         * @param mouseHoverCoords An object containing the clientX and clientY mouse values when the hover occurs.
         * @introduced 2.4
         * @gcx-event-category Map
         */
        (eventName: "MapMouseHoverEvent"): TypedEvent<{
            (mouseHoverCoords: {
                clientX: number;
                clientY: number;
            }): void;
        }>;
        /**
         * Raised when a user clicks on the map after releasing the mouse button.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapMouseUpEvent
         * @param mouseEvent An object describing the mouse up event.
         * @introduced 2.4
         * @gcx-event-category Map
         */
        (eventName: "MapMouseUpEvent"): TypedEvent<{
            (mouseEvent: MouseEvent): void;
        }>;
        /**
         * Raised when a pan operation is completed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapPanEndedEvent
         * @param extent The current extent of the map.
         * @param endPoint The end point of the pan operation. Contains the following properties: `x`, `y`.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "MapPanEndedEvent"): TypedEvent<{
            (extent: esri.geometry.Extent, endPoint: esri.geometry.Point): void;
        }>;
        /**
         * Raised while a pan operation is in progress.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapPanEvent
         * @param extent The current extent of the map.
         * @param delta A point representing the change in screen-space as the map is panning.
         * @introduced 1.0
         * @gcx-event-category Map
         */
        (eventName: "MapPanEvent"): TypedEvent<{
            (extent: esri.geometry.Extent, delta: esri.geometry.Point): void;
        }>;
        /**
         * Raised at the beginning of a pan operation on the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapPanStartedEvent
         * @param extent The current extent of the map.
         * @param startPoint The starting point (in screen-space) where the pan was initiated from.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "MapPanStartedEvent"): TypedEvent<{
            (extent: esri.geometry.Extent, startPoint: esri.geometry.Point): void;
        }>;
        /**
         * Raised when a map service is added to the Essentials Map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapServiceAddedEvent
         * @param mapService The {@link essentials.MapService} which was added.
         * @introduced 2.2
         * @gcx-event-category Map
         */
        (eventName: "MapServiceAddedEvent"): TypedEvent<{
            (mapService: geocortex.essentials.MapService): void;
        }>;
        /**
         * Raised when a map service layer in the layer list is clicked or tapped.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapServiceClickedEvent
         * @param context The map service item for the map service layer that was clicked or tapped.  An instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerListMapServiceItem}.
         * @introduced 1.1
         * @gcx-event-category Layer List
         */
        (eventName: "MapServiceClickedEvent"): TypedEvent<{
            (context: geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList.LayerListMapServiceItem): void;
        }>;
        /**
         * Raised when a {@link essentials.MapService} has layers change by a user.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapServiceLayersChangedEvent
         * @param mapService The {@link essentials.MapService} which layers changed.
         * @introduced 2.2
         * @gcx-event-category Map
         */
        (eventName: "MapServiceLayersChangedEvent"): TypedEvent<{
            (mapService: geocortex.essentials.MapService): void;
        }>;
        /**
         * Raised when a user changes the layers of a {@link essentials.MapService}.  For example, when new dynamic layers are added to the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapServiceLayersChangedWithResultEvent
         * @param args A {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.MapServiceLayersChangedEventArgs} object with the following properties: `mapService`, `newItems` and `oldItems`.
         * @introduced 2.5.2
         * @gcx-event-category Map
         */
        (eventName: "MapServiceLayersChangedWithResultEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MapServiceLayersChangedEventArgs): void;
        }>;
        /**
         * Raised when a property on a {@link essentials.MapService} changes.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapServicePropertyChangedEvent
         * @param mapService The {@link essentials.MapService} which changed.
         * @introduced 2.2
         * @gcx-event-category Map
         */
        (eventName: "MapServicePropertyChangedEvent"): TypedEvent<{
            (mapService: geocortex.essentials.MapService): void;
        }>;
        /**
         * Raised when a map service is removed from the Essentials Map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapServiceRemovedEvent
         * @param mapService The {@link essentials.MapService} which was removed.
         * @introduced 2.2
         * @gcx-event-category Map
         */
        (eventName: "MapServiceRemovedEvent"): TypedEvent<{
            (mapService: geocortex.essentials.MapService): void;
        }>;
        /**
         * Raised when the visibility of a map service has changed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapServiceVisibilityChangedEvent
         * @param serviceLayer The Esri service layer whose visibility changed.
         * @param service The {@link essentials.MapService} specific to this layer.
         * @introduced 2.3
         * @gcx-event-category Map
         */
        (eventName: "MapServiceVisibilityChangedEvent"): TypedEvent<{
            (serviceLayer: esri.layers.Layer, service: essentials.MapService): void;
        }>;
        /**
         * Raised when the preferred extent to show on startup changes.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapStartupExtentChangedEvent
         * @param extent The extent to be shown on startup
         * @private
         */
        (eventName: "MapStartupExtentChangedEvent"): TypedEvent<{
            (extent: esri.geometry.Extent): void;
        }>;
        /**
         * Raised when the map tip window is closed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapTipClosedEvent
         * @introduced 1.1
         * @gcx-event-category Interface
         */
        (eventName: "MapTipClosedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when a zoom operation completes.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapZoomEndedEvent
         * @param extent The current extent of the map.
         * @param zoomFactor Represents the percentage that the map zoomed in or out from the previous extent.
         * @param anchor The position of the cursor in screen-space.
         * @param level The level of a tiled map service at the start of a zoom.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "MapZoomEndedEvent"): TypedEvent<{
            (extent: esri.geometry.Extent, zoomFactor: number, anchor: esri.geometry.Point, level: number): void;
        }>;
        /**
         * Raised during a zoom operation.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapZoomEvent
         * @param extent The current extent of the map.
         * @param zoomFactor Represents the percentage that the map zoomed in or out from the previous extent.
         * @param anchor The position of the cursor in screen-space.
         * @introduced 1.0
         * @gcx-event-category Map
         */
        (eventName: "MapZoomEvent"): TypedEvent<{
            (extent: esri.geometry.Extent, zoomFactor: number, anchor: esri.geometry.Point): void;
        }>;
        /**
         * Raised when a map zoom operation begins.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MapZoomStartedEvent
         * @param extent The current extent of the map.
         * @param zoomFactor Represents the percentage that the map zoomed in or out from the previous extent.
         * @param anchor The position of the cursor in screen-space.
         * @param level The level of a tiled map service at the start of a zoom.
         * @introduced 1.1
         * @gcx-event-category Map
         */
        (eventName: "MapZoomStartedEvent"): TypedEvent<{
            (extent: esri.geometry.Extent, zoomFactor: number, anchor: esri.geometry.Point, level: number): void;
        }>;
        /**
         * Raised when a marker is clicked.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkerClickedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerPointerEventArgs} object with the following properties: `id`, `graphic`, `mapPoint`, `screenPoint` and `button`.
         * @introduced 2.5
         * @private
         */
        (eventName: "MarkerClickedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerPointerEventArgs): void;
        }>;
        /**
         * Raised when a marker stops dragging (pointer has been released).
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkerDragEndEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerDragEventArgs} object with the following properties: `id`, `centerPoint`, `mapPoint` and `screenPoint`.
         * @introduced 2.5
         * @private
         */
        (eventName: "MarkerDragEndEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerDragEventArgs): void;
        }>;
        /**
         * Raised when a marker is being dragged.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkerDragEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerDragEventArgs} object with the following properties: `id`, `centerPoint`, `mapPoint` and `screenPoint`.
         * @introduced 2.5
         * @private
         */
        (eventName: "MarkerDragEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerDragEventArgs): void;
        }>;
        /**
         * Raised when a marker begins dragging.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkerDragStartEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerDragEventArgs} object with the following properties: `id`, `centerPoint`, `mapPoint` and `screenPoint`.
         * @introduced 2.5
         * @private
         */
        (eventName: "MarkerDragStartEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerDragEventArgs): void;
        }>;
        /**
         * Raised when a pointer input is pressed down on a marker.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkerPointerDownEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerPointerEventArgs} object with the following properties: `id`, `graphic`, `mapPoint`, `screenPoint` and `button`.
         * @introduced 2.5
         * @private
         */
        (eventName: "MarkerPointerDownEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerPointerEventArgs): void;
        }>;
        /**
         * Raised when a pointer input is pressed up on a marker.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkerPointerUpEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerPointerEventArgs} object with the following properties: `id`, `graphic`, `mapPoint`, `screenPoint` and `button`.
         * @introduced 2.5
         * @private
         */
        (eventName: "MarkerPointerUpEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.MarkerPointerEventArgs): void;
        }>;
        /**
         * Raised when a marker is updated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkerUpdatedEvent
         * @param graphic The marker graphic that was updated.
         * @introduced 2.5
         * @private
         */
        (eventName: "MarkerUpdatedEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when markup is added to the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkupAddedEvent
         * @param graphic The Esri graphic that is added.
         * @introduced 2.0
         * @gcx-event-category Markup
         */
        (eventName: "MarkupAddedEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when markup is cleared from the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkupClearedEvent
         * @introduced 2.0
         * @gcx-event-category Markup
         */
        (eventName: "MarkupClearedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when markup is deleted from the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkupDeletedEvent
         * @param graphic The Esri graphic that is deleted.
         * @introduced 2.0
         * @gcx-event-category Markup
         */
        (eventName: "MarkupDeletedEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when editing of a specific piece of markup begins.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkupEditingStartedEvent
         * @param graphic The Esri graphic that is being edited.
         * @introduced 2.0
         * @gcx-event-category Markup
         */
        (eventName: "MarkupEditingStartedEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when editing of a specific piece of markup ends.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkupEditingStoppedEvent
         * @param graphic The Esri graphic that is no longer being edited.
         * @introduced 2.0
         * @gcx-event-category Markup
         */
        (eventName: "MarkupEditingStoppedEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when markup has been updated on the map.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MarkupUpdatedEvent
         * @param graphic The Esri graphic that was updated.
         * @introduced 2.5
         * @gcx-event-category Markup
         */
        (eventNae: "MarkupUpdatedEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when a measurement is opened in the markup editor.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MeasurementEditingStartedEvent
         * @param args The event arguments, with the following properties: `graphic`.
         * `graphic` represents the Esri graphic that has been selected.
         * @introduced 2.5
         * @gcx-event-category Measurement
         */
        (eventName: "MeasurementEditingStartedEvent"): TypedEvent<{
            (args: {
                graphic: esri.Graphic;
            }): void;
        }>;
        /**
         * Raised when a measurement markup is successfully and completely added without errors for a given geometry, including all applicable measurements and labels.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MeasurementMarkupAdded
         * @param args The event arguments, with the following properties: `graphic`, `measurementDescriptor`.
         * `graphic` represents the Esri graphic that was added;
         * `measurementDescriptor` represents the descriptor object for the currently added markup that contains information about all the measurement properties.
         * @introduced 2.0
         * @gcx-event-category Measurement
         */
        (eventName: "MeasurementMarkupAdded"): TypedEvent<{
            (args: {
                graphic: esri.Graphic;
                measurementDescriptor: any;
            }): void;
        }>;
        /**
         * Raised when a measurement markup is successfully and completely added without errors for a given geometry, including all applicable measurements and labels.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MeasurementMarkupDeleted
         * @param args The event arguments, with the following properties: `graphic`, `measurementDescriptor`.
         * `graphic` represents the Esri graphic that was deleted;
         * `measurementDescriptor` represents the descriptor object for the currently deleted markup that contains information about all the measurement properties.
         * @introduced 2.0
         * @gcx-event-category Measurement
         */
        (eventName: "MeasurementMarkupDeleted"): TypedEvent<{
            (args: {
                graphic: esri.Graphic;
                measurementDescriptor: any;
            }): void;
        }>;
        /**
         * Raised when an item in a menu is activated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name MenuItemInvokedEvent
         * @param args The event arguments, with the following properties: `menuView`, `menuId` and `menuItem`.
         * `menuView` is the {@link essentialsHtmlViewer.mapping.infrastructure.menus.MenuView}.
         * `menuId` is the ID of the menu.
         * `menuItem` is the menu item itself.
         * @introduced 2.4
         * @gcx-event-category Menus
         */
        (eventName: "MenuItemInvokedEvent"): TypedEvent<{
            (args: {
                menuView: essentialsHtmlViewer.mapping.infrastructure.menus.MenuView;
                menuId: string;
                menuItem: essentialsHtmlViewer.mapping.infrastructure.menus.MenuItemViewModel;
            }): void;
        }>;
        /**
         * Raised when the offline manager has finished loading the offline maps from storage.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name OfflineMapsLoadedEvent
         * @param args Details of the event.ProjectEditorFinishedEventArgs
         * @introduced 2.6
         * @gcx-event-category Offline Profiles
         */
        (eventName: "OfflineMapsLoadedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.OfflineMapsLoadedEventArgs): void;
        }>;
        /**
         * Raised when a new offline map has been added to the offline manager.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name OfflineMapAddedEvent
         * @param args Details of the event.
         * @introduced 2.6
         * @gcx-event-category Offline Profiles
         */
        (eventName: "OfflineMapAddedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.OfflineMapAddedEventArgs): void;
        }>;
        /**
         * Raised when a new offline map has been added to the offline manager.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name OfflineMapRemovedEvent
         * @param args Details of the event.
         * @introduced 2.6
         * @gcx-event-category Offline Profiles
         */
        (eventName: "OfflineMapRemovedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.OfflineMapRemovedEventArgs): void;
        }>;
        /**
         * Raised when an offline map has been activated (or null offlineMap arg for none).
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name OfflineMapActivatedEvent
         * @param args Details of the event.
         * @introduced 2.6
         * @gcx-event-category Offline Profiles
         */
        (eventName: "OfflineMapActivatedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.OfflineMapActivatedEventArgs): void;
        }>;
        /**
         * Raised when the offline map editor has finished.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name OfflineMapEditorFinishedEvent
         * @param args Details of the event.
         * @introduced 2.6
         * @gcx-event-category Offline Profiles
         */
        (eventName: "OfflineMapEditorFinishedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.OfflineMapEditorFinishedEventArgs): void;
        }>;
        /**
         * Raised when a new offline map has been synced.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name OfflineMapSyncedEvent
         * @param args Details of the event.
         * @introduced 2.6
         * @gcx-event-category Offline Profiles
         */
        (eventName: "OfflineMapSyncedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.OfflineMapSyncedEventArgs): void;
        }>;
        /**
         * Raised when a named selection has been changed in any way. Renaming a selection raises this event.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SelectionChangedEvent
         * @param args The event arguments, with the following properties: `name`, `fsc, `previousName`.
         * @introduced 2.6
         * @gcx-event-category Named Selection
         */
        (eventName: "SelectionChangedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.SelectionChangedEventArgs): void;
        }>;
        /**
         * Raised when named selection has been successfully saved.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SelectionCreatedEvent
         * @param args The event arguments, with the following properties: `name`, `fsc.
         * @introduced 2.6
         * @gcx-event-category Named Selection
         */
        (eventName: "SelectionCreatedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.SelectionEventArgs): void;
        }>;
        /**
         * Raised when named selection has been removed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SelectionRemovedEvent
         * @param args The event arguments, with the following properties: `name`, `fsc.
         * @introduced 2.6
         * @gcx-event-category Named Selection
         */
        (eventName: "SelectionRemovedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.SelectionEventArgs): void;
        }>;
        /**
         * Raised when a smart panel starts to be resized.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PanelResizeStartEvent
         * @param graphic An object with the following properties: `viewId` and `resizeInformation`.
         * `viewId` represents the ID of the view.
         * `resizeInformation` represents a {@link ResizeInformation} object that contains information about the resizing operation.
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "PanelResizeStartEvent"): TypedEvent<{
            (args: {
                viewId: string;
                resizeInformation: essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.ResizeInformation;
            }): void;
        }>;
        /**
         * Raised as a smart panel is resized.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PanelResizingEvent
         * @param graphic An object with the following properties: `viewId` and `resizeInformation`.
         * `viewId` represents the ID of the view.
         * `resizeInformation` represents a {@link ResizeInformation} object that contains information about the resizing operation.
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "PanelResizingEvent"): TypedEvent<{
            (args: {
                viewId: string;
                resizeInformation: essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.ResizeInformation;
            }): void;
        }>;
        /**
         * Raised when the resizing operation for a smart panel is completed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PanelResizeEndEvent
         * @param graphic An object with the following properties: `viewId` and `resizeInformation`.
         * `viewId` represents the ID of the view.
         * `resizeInformation` represents a {@link ResizeInformation} object that contains information about the resizing operation.
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "PanelResizeEndEvent"): TypedEvent<{
            (args: {
                viewId: string;
                resizeInformation: essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.ResizeInformation;
            }): void;
        }>;
        /**
         * Raised when user selecte a different print layout.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PrintPreviewLayoutChangedEvent
         * @introduced 2.6
         * @gcx-event-category Print
         */
        (eventName: "PrintPreviewLayoutChangedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
        * Raised when user selecte a different print scale.
        * @docs-gcx-event geocortex.essentialsHtmlViewer
        * @name PrintPreviewScaleChangedEvent
        * @introduced 2.6
        * @gcx-event-category Print
        */
        (eventName: "PrintPreviewScaleChangedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when a request to print a template is sent to the server.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PrintTemplateStartedEvent
         * @param template The print template to be generated.
         * @introduced 2.5
         * @gcx-event-category Print
         */
        (eventName: "PrintTemplateStartedEvent"): TypedEvent<{
            (template: geocortex.essentials.PrintTemplate): void;
        }>;
        /**
         * Raised when a print template operation has completed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PrintTemplateCompletedEvent
         * @param template The print template used.
         * @introduced 2.5
         * @gcx-event-category Print
         */
        (eventName: "PrintTemplateCompletedEvent"): TypedEvent<{
            (template: geocortex.essentials.PrintTemplate): void;
        }>;
        /**
         * Raised when a project is successfully deleted.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ProjectDeletedEvent
         * @param project The ID of the project that was deleted.
         * @introduced 2.6
         * @gcx-event-category Projects
         */
        (eventName: "ProjectDeletedEvent"): TypedEvent<{
            (projectId: string): void;
        }>;
        /**
         * Raised when a project has begun being deleted.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ProjectDeletingEvent
         * @param project The ID of the project that is being deleted.
         * @introduced 2.6
         * @gcx-event-category Projects
         */
        (eventName: "ProjectDeletingEvent"): TypedEvent<{
            (projectId: string): void;
        }>;
        /**
         * Raised when the project editor has finished editing.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ProjectEditorFinishedEvent
         * @param args A {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.ProjectEditorFinishedEventArgs} object with the following properties: `canceled`, `existingProject`, and `newProject`.
         * @introduced 2.6
         * @gcx-event-category Projects
         */
        (eventName: "ProjectEditorFinishedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.ProjectEditorFinishedEventArgs): void;
        }>;
        /**
         * Raised when an attempt to save, load, or delete a project fails.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ProjectErrorEvent
         * @param project The project that caused the error.
         * @param error The error that occurred.
         * @introduced 2.6
         * @gcx-event-category Projects
         */
        (eventName: "ProjectErrorEvent"): TypedEvent<{
            (project: geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project, error: Error): void;
        }>;
        /**
         * Raised when a project is successfully loaded and applied.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ProjectLoadedEvent
         * @param project The project that was loaded.
         * @introduced 2.6
         * @gcx-event-category Projects
         */
        (eventName: "ProjectLoadedEvent"): TypedEvent<{
            (project: geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project): void;
        }>;
        /**
         * Raised when a project has begun loading.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ProjectLoadingEvent
         * @param projectId The ID of the project that is loading.
         * @introduced 2.6
         * @gcx-event-category Projects
         */
        (eventName: "ProjectLoadingEvent"): TypedEvent<{
            (projectId: string): void;
        }>;
        /**
         * Raised when a project is successfully saved.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ProjectSavedEvent
         * @param project The project that was saved.
         * @introduced 2.6
         * @gcx-event-category Projects
         */
        (eventName: "ProjectSavedEvent"): TypedEvent<{
            (project: geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project): void;
        }>;
        /**
         * Raised when a project has begun saving.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ProjectSavingEvent
         * @param project The project that is saving.
         * @introduced 2.6
         * @gcx-event-category Projects
         */
        (eventName: "ProjectSavingEvent"): TypedEvent<{
            (project: geocortex.essentialsHtmlViewer.mapping.infrastructure.project.Project): void;
        }>;
        /**
         * Raised when a pushpin has been clicked.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PushpinClickedEvent
         * @param graphic An instance of {@link esri.Graphic} that represents the pushpin being clicked.
         * @introduced 2.1
         * @gcx-event-category Pushpins
         */
        (eventName: "PushpinClickedEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when the mouse first enters the bounding area of a pushpin.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PushpinMouseEnterEvent
         * @param graphic An {@link esri.Graphic} that represents the pushpin where the mouse pointer is hovering.
         * @introduced 2.1
         * @gcx-event-category Pushpins
         */
        (eventName: "PushpinMouseEnterEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when the mouse exits the bounding area of a pushpin.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PushpinMouseLeaveEvent
         * @param graphic An instance of {@link esri.Graphic} that represents the pushpin where the mouse pointer was previously hovering.
         * @introduced 2.1
         * @gcx-event-category Pushpins
         */
        (eventName: "PushpinMouseLeaveEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when the left mouse button is pressed down while the mouse cursor is on a pushpin.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PushpinMouseButtonDownEvent
         * @param graphic An instance of {@link esri.Graphic} that represents the pushpin where the left mouse button was pressed down.
         * @introduced 2.1
         * @gcx-event-category Pushpins
         */
        (eventName: "PushpinMouseLeftButtonDownEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when the left mouse button is released while the mouse cursor is on a pushpin.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PushpinMouseButtonUpEvent
         * @param graphic An instance of {@link esri.Graphic} that represents the pushpin where the left mouse button was released.
         * @introduced 2.1
         * @gcx-event-category Pushpins
         */
        (eventName: "PushpinMouseLeftButtonUpEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when the right mouse button is pressed down while the mouse cursor is on a pushpin.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PushpinMouseButtonDownEvent
         * @param graphic An instance of {@link esri.Graphic} that represents the pushpin where the right mouse button was pressed down.
         * @introduced 2.1
         * @gcx-event-category Pushpins
         */
        (eventName: "PushpinMouseRightButtonDownEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised when the right mouse button is released while the mouse cursor is on a pushpin.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name PushpinMouseButtonUpEvent
         * @param graphic An instance of {@link esri.Graphic} that represents the pushpin where the right mouse button was released.
         * @introduced 2.1
         * @gcx-event-category Pushpins
         */
        (eventName: "PushpinMouseRightButtonUpEvent"): TypedEvent<{
            (graphic: esri.Graphic): void;
        }>;
        /**
         * Raised after the Undo Manager performs a redo operation.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name RedoCompletedEvent
         * @param args An {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs`} object with the following properties: `sender` and `operation` (optional).
         * `sender` is a reference to the sender.
         * `operation` is the operation that triggered the event.
         * @introduced 2.5
         * @gcx-event-category Undo and Redo
         */
        (eventName: "RedoCompletedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs): void;
        }>;
        /**
         * Raised when a redo operation begins.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name RedoStartedEvent
         * @param args An {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs} object with the following properties: `sender` and `operation` (optional).
         * `sender` is a reference to the sender.
         * `operation` is the operation that triggered the event.
         * @introduced 2.5
         * @gcx-event-category Undo and Redo
         */
        (eventName: "RedoStartedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs): void;
        }>;
        /**
         * Raised when a new related record has been created.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name RelatedRecordCreatedEvent
         * @param feature The new record that has been created.
         * @introduced 2.3
         * @gcx-event-category Editing
         */
        (eventName: "RelatedRecordCreatedEvent"): TypedEvent<{
            (feature: esri.Graphic): void;
        }>;
        /**
         * Raised when an existing related record has been edited.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name RelatedRecordCreatedEvent
         * @param feature The record that has been edited.
         * @introduced 2.3
         * @gcx-event-category Editing
         */
        (eventName: "RelatedRecordEditedEvent"): TypedEvent<{
            (feature: esri.Graphic): void;
        }>;
        /**
         * Raised when a request to print a layer report template is sent to the server.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ReportTemplateStartedEvent
         * @param reportId The ID of the layer report template.
         * @param mapServiceId The ID of the map service containing the layer with the report template.
         * @param layerId The ID of the layer with the configured report template.
         * @introduced 2.5
         * @gcx-event-category Print
         */
        (eventName: "ReportTemplateStartedEvent"): TypedEvent<{
            (reportId: string, mapServiceId: string, layerId: string): void;
        }>;
        /**
         * Raised when a layer report print template operation has completed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ReportTemplateCompletedEvent
         * @param reportId The ID of the layer report template.
         * @param mapServiceId The ID of the map service containing the layer with the report template.
         * @param layerId The ID of the layer with the configured report template.
         * @introduced 2.5
         * @gcx-event-category Print
         */
        (eventName: "ReportTemplateCompletedEvent"): TypedEvent<{
            (reportId: string, mapServiceId: string, layerId: string): void;
        }>;
        /**
         * The result of a successful `RunReport` command, which contains a download link to the report file.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ReportResultEvent
         * @param result A {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.ReportResultEventArgs} object with the following properties: `isAsync` and `href`.
         * `isAsync` is a boolean indicating whether the report result was asynchronous.
         * `href` is the download URL for the resultant report file.  In async mode, this is the URL to the report progress or download page.
         * @introduced 2.5
         * @gcx-event-category Reporting
         */
        (eventName: "ReportResultEvent"): TypedEvent<{
            (result: essentialsHtmlViewer.mapping.infrastructure.eventArgs.ReportResultEventArgs);
        }>;
        /**
         * Raised when a `RunReport` command fails in error.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ReportErrorEventl
         * @param error The Error object returned by the Report JavaScript API.
         * @introduced 2.5
         * @gcx-event-category Reporting
         */
        (eventName: "ReportErrorEvent"): TypedEvent<{
            (error: Error);
        }>;
        /**
         * When a feature is clicked in the results list view.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ResultsListFeatureClickedEvent
         * @param feature The feature that was clicked.
         * @introduced 1.0
         * @gcx-event-category Interface
         */
        (eventName: "ResultsListFeatureClickedEvent"): TypedEvent<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * When a feature is pressed using a long press in the results list view.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ResultsListFeaturePressedEvent
         * @param feature The feature that was pressed.
         * @introduced 1.0
         * @gcx-event-category Interface
         */
        (eventName: "ResultsListFeaturePressedEvent"): TypedEvent<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * When the current page of results has changed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ResultsPageChangedEvent
         * @param args An object that represents the new page of results, and contains the following properties: `featureSetCollection`, `newValue`.
         * @introduced 2.3
         * @gcx-event-category Interface
         */
        (eventName: "ResultsPageChangedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.ResultsPageChangedEventArgs): void;
        }>;
        /**
         * When a feature is clicked in the results table view.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ResultsTableFeatureClickedEvent
         * @param feature The feature that was clicked.
         * @introduced 1.0
         * @gcx-event-category Interface
         */
        (eventName: "ResultsTableFeatureClickedEvent"): TypedEvent<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * When a feature is pressed using a long press in the results table view.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ResultsTableFeaturePressedEvent
         * @param feature The feature that was pressed.
         * @introduced 1.0
         * @gcx-event-category Interface
         */
        (eventName: "ResultsTableFeaturePressedEvent"): TypedEvent<{
            (feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        }>;
        /**
         * Raised when the Results view is collapsed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ResultsViewCollapsedEvent
         * @param view The view that was collapsed.
         * @introduced 2.1
         * @gcx-event-category Interface
         */
        (eventName: "ResultsViewCollapsedEvent"): TypedEvent<{
            (view: geocortex.framework.ui.ViewBase): void;
        }>;
        /**
         * Raised when the Results view is opened.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ResultsViewOpenedEvent
         * @param view The view that was opened.
         * @introduced 2.1
         * @gcx-event-category Interface
         */
        (eventName: "ResultsViewOpenedEvent"): TypedEvent<{
            (view: geocortex.framework.ui.ViewBase): void;
        }>;
        /**
         * Raised when the Results view is closed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ResultsViewClosedEvent
         * @param view The view that was closed.
         * @introduced 2.6
         * @gcx-event-category Interface
         */
        (eventName: "ResultsViewClosedEvent"): TypedEvent<{
            (view: geocortex.framework.ui.ViewBase): void;
        }>;
        /**
         * Raised when progress updates are available for a search that is in progress.
         * The progress event may represent an error, failure, success etc.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SearchProgressEvent
         * @param eventArgs An instance of {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.SearchProgressEventArgs}.
         * @introduced 1.1
         * @gcx-event-category Search
         */
        (eventName: "SearchProgressEvent"): TypedEvent<{
            (eventArgs: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.SearchProgressEventArgs): void;
        }>;
        /**
         * Raised when a search hint is clicked in the search auto-complete drop down.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SearchHintClickedEvent
         * @param hintItem An instance of {@link essentialsHtmlViewer.mapping.infrastructure.search.SearchHinItem}.
         * @introduced 2.0
         * @gcx-event-category Search
         */
        (eventName: "SearchHintClickedEvent"): TypedEvent<{
            (eventArgs: geocortex.essentialsHtmlViewer.mapping.infrastructure.search.SearchHintItem): void;
        }>;
        /**
         * Raised when a user is not authorized for a site. This event is fired instead of SiteInitializationFailedEvent.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SiteAuthorizationFailedEvent
         * @param error The error that caused authorization to fail.
         * @introduced 1.2
         * @gcx-event-category Start-Up, Initialization and Shutdown
         */
        (eventName: "SiteAuthorizationFailedEvent"): TypedEvent<{
            (error: Error): void;
        }>;
        /**
         * Raised when the site fails to initialize. This event does not fire if SiteAuthorizationFailedEvent has fired.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SiteInitializationFailedEvent
         * @param error The initialization error that prevented the site from successfully initializing.
         * @introduced 1.0
         * @gcx-event-category Start-Up, Initialization and Shutdown
         */
        (eventName: "SiteInitializationFailedEvent"): TypedEvent<{
            (error: Error): void;
        }>;
        /**
         * Raised when a site layer's initialization begins.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SiteLayerLoadingEvent
         * @param layer The site layer that is initializing.
         * @introduced 2.5
         * @gcx-event-category Load
         */
        (eventName: "SiteLayerLoadingEvent"): TypedEvent<{
            (layer: essentials.Layer): void;
        }>;
        /**
         * Raised when a site layer is loaded.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SiteLayerLoadedEvent
         * @param layer The site layer that is loaded.
         * @introduced 1.1
         * @gcx-event-category Load
         */
        (eventName: "SiteLayerLoadedEvent"): TypedEvent<{
            (layer: essentials.Layer): void;
        }>;
        /**
         * Raised when a site layer fails to load.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SiteLayerLoadFailedEvent
         * @param error The error object that explains why site layer failed to load.
         * @introduced 1.1
         * @gcx-event-category Load
         */
        (eventName: "SiteLayerLoadFailedEvent"): TypedEvent<{
            (error: Error): void;
        }>;
        /**
         * Raised when the site begins to initialize.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SiteInitializingEvent
         * @param initArgs The Geocortex Essentials {@link essentials.Site} that is beginning to initialize.
         * @introduced 2.5
         * @gcx-event-category Start-Up, Initialization and Shutdown
         */
        (eventName: "SiteInitializingEvent"): TypedEvent<{
            (initArgs: essentials.Site): void;
        }>;
        /**
         * Raised when the site successfully initializes.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SiteInitializedEvent
         * @param initArgs The Geocortex Essentials site object that was initialized.
         * @introduced 1.0
         * @gcx-event-category Start-Up, Initialization and Shutdown
         */
        (eventName: "SiteInitializedEvent"): TypedEvent<{
            (initArgs: essentials.Site): void;
        }>;
        /**
         * Raised when the site has finished loading and there are layers that failed to load.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SiteServiceLayersFailedEvent
         * @param failedServices An array of geocortex.essentials.MapService objects that failed to load.
         * @introduced 1.3
         * @gcx-event-category Start-Up, Initialization and Shutdown
         */
        (eventName: "SiteServiceLayersFailedEvent"): TypedEvent<{
            (failedServices: essentials.MapService[]): void;
        }>;
        /**
         * Raised when all service layers in a site are loaded.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SiteServiceLayersLoadedEvent
         * @param site The site object that holds service layers.
         * @introduced 1.1
         * @gcx-event-category Load
         */
        (eventName: "SiteServiceLayersLoadedEvent"): TypedEvent<{
            (site: essentials.Site): void;
        }>;
        /**
         * Raised when the viewer begins federated sign in.  The application may close at any time if
         * sign in happens in the same browser tab.  This differs from `UserSigningInEvent` in that
         * the sign in need not be initiated by the user and cannot be cancelled.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SigningInEvent
         * @param args The event arguments, including a `url` that is the sign in page.
         * @introduced 2.4
         * @gcx-event-category Authentication and Authorization
         */
        (eventName: "SigningInEvent"): TypedEvent<{
            (args: {
                url: string;
            }): void;
        }>;
        /**
         * Raised when the viewer begins signing out.  The application may close at any time. This differs
         * from `UserSigningOutEvent` in that the sign out need not be initiated by the user and cannot be cancelled.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SigningOutEvent
         * @introduced 2.4
         * @gcx-event-category Authentication and Authorization
         */
        (eventName: "SigningOutEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when the bottom panel is closed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SmallBottomPanelClosedEvent
         * @introduced 2.6
         * @gcx-event-category Interface
         */
        (eventName: "SmallBottomPanelClosedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when the SnappingModule handles input movement. Contains the original input location as well as a snapping point or `null` if none was found.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name SnappingFeedbackEvent
         * @param args A {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.SnappingFeedbackEventArgs} object with the following properties: `snappingPoint` and `inputPoint`.
         * `snappingPoint` is the snapping point, or null if there is none.
         * `inputPoint` is the original input point.
         * @introduced 2.5
         * @gcx-event-category Tool
         */
        (eventName: "SnappingFeedbackEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.SnappingFeedbackEventArgs): void;
        }>;
        /**
         * Raised when the user chooses a template from the template picker.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name StartFeaturePlacementEvent
         * @introduced 2.5
         * @gcx-event-category Tool
         */
        (eventName: "StartFeaturePlacementEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when an application state is entered by a triggering command or event.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name StateEnteredEvent
         * @param args A {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.StateChangedEventArgs} object with the following properties: `stateDefinition`, `activeStates`, `modalState` and `previousModalState`.
         * `stateDefinition` defines the state that was entered.
         * `activeStates` is an array of active states.
         * `modalState` is the currently active global state (if any).
         * `previousModalState` is the previous global state (if any).
         * @introduced 2.5
         * @gcx-event-category Interface
         */
        (eventName: "StateEnteredEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.StateChangedEventArgs): void;
        }>;
        /**
         * Raised when an application state is exited by a triggering command or event.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name StateEnteredEvent
         * @param args A {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.StateChangedEventArgs} object with the following properties: `stateDefinition`, `activeStates`, `modalState` and `previousModalState`.
         * `stateDefinition` defines the state that was entered.
         * `activeStates` is an array of active states.
         * `modalState` is the currently active global state (if any).
         * `previousModalState` is the previous global state (if any).
         * @introduced 2.5
         * @gcx-event-category Interface
         */
        (eventName: "StateExitedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.StateChangedEventArgs): void;
        }>;
        /**
         * Raised after a user places a new feature on the map to be opened in the editor.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name StopFeaturePlacementEvent
         * @introduced 2.5
         * @gcx-event-category Tool
         */
        (eventName: "StopFeaturePlacementEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised after a toggle button changes its state.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ToggleButtonStateChangedEvent
         * @param args A {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.ToggleButtonStateChangedEventArgs} object with the following properties: `toggleButtonEntry` and `state`.
         * `toggleButtonEntry` is the {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.ToggleButtonStateChangedEventArgs} object that represents the toggle button entry.
         * `state` is the {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.ToggleButtonStateChangedEventArgs} object that represents the toggle button state.
         * @introduced 2.5
         * @gcx-event-category Tool
         */
        (eventName: "ToggleButtonStateChangedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.ToggleButtonStateChangedEventArgs): void;
        }>;
        /**
         * Raised when a button on the toolbar is clicked.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ToolbarButtonClickedEvent
         * @param args The object representing the clicked toolbar button with the following properties: `commandName`, `commandParameter`, `id`, `name` and `libraryId`.
         * `commandName` is the command name of the toolbar button.
         * `commandParameter` is the command parameter of the toolbar button.
         * `id` is the ID of the toolbar button.
         * `name` is the name of the toolbar button.
         * `libraryId` is the libaray ID of the toolbar button.
         * @introduced 2.5
         * @gcx-event-category Tool
         */
        (eventName: "ToolbarButtonClickedEvent"): TypedEvent<{
            (args: essentialsHtmlViewer.mapping.infrastructure.eventArgs.ToolbarButtonClickedEventArgs): void;
        }>;
        /**
         * Raised when a view tile is pressed in the toolbar in the small/handheld shell.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ToolbarViewTilePressedEvent
         * @param viewId The ID of the view whose tile was pressed.
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "ToolbarViewTilePressedEvent"): TypedEvent<{
            (viewId: string): void;
        }>;
        /**
         * Raised when a multitool flyout menu is opened.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ToolbarFlyoutActivatedEvent
         * @param viewId The ID of the view whose multitool flyout menu opened.
         * @introduced 2.4
         * @gcx-event-category Interface
         */
        (eventName: "ToolbarFlyoutActivatedEvent"): TypedEvent<{
            (viewId: string): void;
        }>;
        /**
         * Raised when the input method (for example, keyboard or mouse) for the active tool has changed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ToolInputMethodChangedEvent
         * @param args A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.ToolInputMethodChangedEvent} object containing the following properties: `tool`, `newMethod` and `previousMethod`.
         * `tool` represents the tool whose input method changed.
         * `newMethod` represents the new input method.
         * `previousMethod` represents the previous input method.
         * @introduced 2.4
         * @gcx-event-category Tool
         */
        (eventName: "ToolInputMethodChangedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.ToolInputMethodChangedEvent): void;
        }>;
        /**
         * Raised when a multitool flyout menu is closed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ToolbarFlyoutDeactivatedEvent
         * @param viewId The ID of the view whose multitool flyout menu closed.
         * @introduced 1.0
         * @gcx-event-category Interface
         */
        (eventName: "ToolbarFlyoutDeactivatedEvent"): TypedEvent<{
            (viewId: string): void;
        }>;
        /**
         * Raised when a transient toolbar is activated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name TransientActivatedEvent
         * @param args A {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.TransientActivatedEventArgs} object with the following properties: `stateName`, `viewId`, `regionId` and `widgetId`.
         * `stateName` is the state name.
         * `viewId` is the ID of the view.
         * `regionId` is the ID of the region.
         * `widgetId` is the ID of the widget.
         * @introduced 2.5
         * @gcx-event-category Tool
         */
        (eventName: "TransientActivatedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.TransientActivatedEventArgs): void;
        }>;
        /**
         * Raised when all transient toolbars are deactivated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name TransientsDeactivatedEvent
         * @introduced 2.5
         * @gcx-event-category Tool
         */
        (eventName: "TransientsDeactivatedEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when the last recorded operation has been reversed or rolled back by the Undo Manager.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name UndoCompletedEvent
         * @param args An {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs} object with the following properties: `sender` and `operation` (optional).
         * `sender` is a reference to the sender.
         * `operation` is the operation that triggered the event.
         * @introduced 2.5
         * @gcx-event-category Undo and Redo
         */
        (eventName: "UndoCompletedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs): void;
        }>;
        /**
         * Raised when a new undo operation is added to the undo stack.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name UndoOperationAddedEvent
         * @param args An {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs} object with the following properties: `sender` and `operation` (optional).
         * `sender` is a reference to the sender.
         * `operation` is the operation that triggered the event.
         * @introduced 2.5
         * @gcx-event-category Undo and Redo
         */
        (eventName: "UndoOperationAddedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs): void;
        }>;
        /**
         * Raised when an undo operation is discarded from the undo stack because the stack size exceeded the maximum number of operations.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name UndoOperationAddedEvent
         * @param args An {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs} object with the following properties: `sender` and `operation` (optional).
         * `sender` is a reference to the sender.
         * `operation` is the operation that triggered the event.
         * @introduced 2.5
         * @gcx-event-category Undo and Redo
         */
        (eventName: "UndoOperationDiscardedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs): void;
        }>;
        /**
         * Raised when an undo operation begins.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name UndoStartedEvent
         * @param args An {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs} object with the following properties: `sender` and `operation` (optional).
         * `sender` is a reference to the sender.
         * `operation` is the operation that triggered the event.
         * @introduced 2.5
         * @gcx-event-category Undo and Redo
         */
        (eventName: "UndoStartedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs): void;
        }>;
        /**
         * Raised when the undo stack changes.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name UndoStackChangedEvent
         * @param args An {@link essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs} object with the following properties: `sender` and `operation` (optional).
         * `sender` is a reference to the sender.
         * `operation` is the operation that triggered the event.
         * @introduced 2.5
         * @gcx-event-category Undo and Redo
         */
        (eventName: "UndoStackChangedEvent"): TypedEvent<{
            (args: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.UndoRedoEventArgs): void;
        }>;
        /**
         * Raised when an upload data process completes.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name UploadDataCompletedEvent
         * @param process The `UploadDataProcess` object containing all of the information about a given upload data process.
         * @introduced 2.6
         * @gcx-event-category Upload Data
         */
        (eventName: "UploadDataCompletedEvent"): TypedEvent<{
            (process: any): void;
        }>;
        /**
         * Raised when an upload data process fails.
         * @docs-gcx-event geocortex.UploadDataProcess
         * @name UploadDataFailedEvent
         * @param process The error that caused the upload data process to fail.
         * @introduced 2.6
         * @gcx-event-category Upload Data
         */
        (eventName: "UploadDataFailedEvent"): TypedEvent<{
            (error: Error): void;
        }>;
        /**
         * Raised when the user cancels the ArcGIS Online sign in process.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name UserSignInCancelledEvent
         * @param args The arguments containing a function callback called `tryAgainAction` with no parameters.
         * @introduced 1.3
         * @gcx-event-category Authentication and Authorization
         */
        (eventName: "UserSignInCancelledEvent"): TypedEvent<{
            (args: {
                tryAgainAction(): void;
            }): void;
        }>;
        /**
         * Raised when the user is about to navigate to the federated sign in page.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name UserSigningInEvent
         * @param eventArgs The event arguments, including an `isCancelled` flag that subscribers can set to cancel the sign-in.
         * @introduced 2.1
         * @gcx-event-category Authentication and Authorization
         */
        (eventName: "UserSigningInEvent"): TypedEvent<{
            (eventArgs: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.UserEventArgs): void;
        }>;
        /**
         * Raised when the user is about to sign out of the application.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name UserSigningOutEvent
         * @param eventArgs The event arguments, including an `isCancelled` flag that subscribers can set to cancel the sign-out.
         * @introduced 2.1
         * @gcx-event-category Authentication and Authorization
         */
        (eventName: "UserSigningOutEvent"): TypedEvent<{
            (eventArgs: geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.UserEventArgs): void;
        }>;
        /**
         * Raised when the vertex edit handle is hidden.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name VertexHandleHiddenEvent
         * @introduced 2.5
         * @gcx-event-category Editing
         */
        (eventName: "VertexHandleHiddenEvent"): TypedEvent<{
            (): void;
        }>;
        /**
         * Raised when the vertex edit handle is shown.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name VertexHandleShownEvent
         * @param geometry The point geometry of the vertex handle.
         * @introduced 2.5
         * @gcx-event-category Editing
         */
        (eventName: "VertexHandleShownEvent"): TypedEvent<{
            (geometry: esri.geometry.Point): void;
        }>;
        /**
         * Raised when a view is activated inside a view container.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ViewActivatedInContainerEvent
         * @param view The view that was activated.
         * @introduced 1.1
         * @gcx-event-category Interface
         */
        (eventName: "ViewActivatedInContainerEvent"): TypedEvent<{
            (view: geocortex.framework.ui.ViewBase): void;
        }>;
        /**
         * Raised when a ViewContainer View is closed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ViewContainerViewClosedEvent
         * @param eventArgs An instance of {@link geocortex.framework.ui.ViewContainer.ViewContainerViewClosedEventArgs}.
         * @introduced 1.1
         * @gcx-event-category Interface
         */
        (eventName: "ViewContainerViewClosedEvent"): TypedEvent<{
            (eventArgs: geocortex.framework.ui.ViewContainer.ViewContainerViewClosedEventArgs): void;
        }>;
        /**
         * Raised when a {@link essentialsHtmlViewer.integration.PostMessageTransport} has been wired up
         * with an external component and the viewers position has been updated.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ViewerPositionUpdatedEvent
         * @param arg An instance of {@link essentialsHtmlViewer.mapping.infrastructure.integration.MapViewpointMessage}, that represents the updated viewpoint of the viewer.
         * @introduced 2.4
         * @gcx-event-category Integration
         */
        (eventName: "ViewerPositionUpdatedEvent"): TypedEvent<{
            (arg: geocortex.essentialsHtmlViewer.mapping.infrastructure.integration.MapViewpointMessage): void;
        }>;
        /**
         * Raised when a viewpoint indicator of an external component has been updated on the viewer.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name ViewpointIndicatorUpdatedEvent
         * @param arg The point of the viewpoint indicator on the viewer. Contains the following properties: `x`, `y`.
         * @introduced 2.4
         * @gcx-event-category Integration
         */
        (eventName: "ViewpointIndicatorUpdatedEvent"): TypedEvent<{
            (arg: esri.geometry.Point): void;
        }>;
        /**
         * Raised when the visualization options view has been activated for a Geocortex layer.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name VisualizationViewActivatedEvent
         * @param gcxLayer The Geocortex layer.
         * @introduced 2.5
         * @gcx-event-category Visualization
         */
        (eventName: "VisualizationViewActivatedEvent"): TypedEvent<{
            (gcxLayer: geocortex.essentials.Layer): void;
        }>;
        /**
         * Raised when a workflow is aborted.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name WorkflowAbortedEvent
         * @param workflow The workflow that aborted.
         * @introduced 1.1
         * @gcx-event-category Workflow
         */
        (eventName: "WorkflowAbortedEvent"): TypedEvent<{
            (workflow: essentials.Workflow): void;
        }>;
        /**
         * Raised when a workflow activity is completed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name WorkflowActivityCompletedEvent
         * @param workflow The workflow that includes the completed activity.
         * @introduced 1.1
         * @gcx-event-category Workflow
         */
        (eventName: "WorkflowActivityCompletedEvent"): TypedEvent<{
            (workflow: essentials.Workflow): void;
        }>;
        /**
         * Raised when a workflow activity fails to dispatch.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name WorkflowActivityDispatchErrorEvent
         * @param args An object with the following properties: `error`, `context`.
         * `error` represents the `Error` object that explains what went wrong.
         * `context` represents the `ActivityContext` object that holds parameters configured in the workflow.
         * @introduced 1.1
         * @gcx-event-category Workflow
         */
        (eventName: "WorkflowActivityDispatchErrorEvent"): TypedEvent<{
            (args: {
                error: Error;
                context: workflow.ActivityContext;
            }): void;
        }>;
        /**
         * Raised when a workflow activity begins execution.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name WorkflowActivityStartedEvent
         * @param workflow The workflow whose activity started.
         * @introduced 1.1
         * @gcx-event-category Workflow
         */
        (eventName: "WorkflowActivityStartedEvent"): TypedEvent<{
            (workflow: essentials.Workflow): void;
        }>;
        /**
         * Raised when a workflow execution is completed.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name WorkflowCompletedEvent
         * @param workflow The workflow that completed.
         * @introduced 1.1
         * @gcx-event-category Workflow
         */
        (eventName: "WorkflowCompletedEvent"): TypedEvent<{
            (workflow: essentials.Workflow, outputs: any): void;
        }>;
        /**
         * Raised when a single web request for a workflow completes. Note that a workflow typically consists of many
         * requests to the server.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name WorkflowWebRequestCompletedEvent
         * @param url The workflow request URL.
         * @param workflow The workflow for which the request was made.
         * @introduced 2.5
         * @gcx-event-category Workflow
         */
        (eventName: "WorkflowWebRequestCompletedEvent"): TypedEvent<{
            (url: string, workflow: essentials.Workflow): void;
        }>;
        /**
         * Raised when a single web request for a workflow is started. Note that a workflow typically consists of many
         * requests to the server.
         * @docs-gcx-event geocortex.essentialsHtmlViewer
         * @name WorkflowWebRequestStartedEvent
         * @param url The workflow request URL.
         * @param workflow The workflow for which the request was made.
         * @introduced 2.5
         * @gcx-event-category Workflow
         */
        (eventName: "WorkflowWebRequestStartedEvent"): TypedEvent<{
            (url: string, workflow: essentials.Workflow): void;
        }>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    /**
     * The accessibility manager is the central access point for all things WCAG within the viewer.
     */
    class AccessibilityManager {
        /**
         * The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this accessibility manager instance belongs to.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** An object map of all referenced components that can be instantiated by this factory. */
        private _registeredComponentTypes;
        /** An stack of all currently active keyboard components. */
        private _stack;
        /**
         * Initializes a new instance of the {@link AccessibilityManager} class.
         * @param app The {@link framework.application.Application} that this instance belongs to.
         */
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication);
        registerComponent(name: string, typeName: string): void;
        unregisterComponent(name: string): boolean;
        /** Creates an Esri draw object. See {@link esri.toolbars.Draw} */
        createComponent(name: "esri.toolbars.draw", map: esri.Map, options?: esri.DrawOptions): esri.toolbars.Draw;
        /** Creates an Esri edit object. See {@link esri.toolbars.Edit} */
        createComponent(name: "esri.toolbars.edit", map: esri.Map, options?: esri.EditOptions): esri.toolbars.Edit;
        /** Creates a keyboard accessible draw object. See {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility.Draw} */
        createComponent(name: "geocortex.accessibility.draw", map: esri.Map, options?: ExtendedDrawOptions): infrastructure.accessibility.Draw;
        /** Creates a keyboard accessible edit object. See {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility.Edit} */
        createComponent(name: "geocortex.accessibility.edit", map: esri.Map, options?: ExtendedEditOptions): infrastructure.accessibility.Edit;
        createComponent(name: string, map: esri.Map, options?: any): any;
        /**
         * @private
         * A central location to ensure proper access to keyboard events. Whenever a new accessible component
         * is activated that requests access to keyboard events, the AccessibilityManager will suspend existing tools
         * until the current one completes execution.
         * This is modelled with a stack structure.
         */
        protected _handleAccessibleComponentStarted(sender: AccessibleMapComponent): void;
        /**
         * @private
         * A central location to ensure proper access to keyboard events. Whenever a new accessible component
         * is activated that requests access to keyboard events, the AccessibilityManager will suspend existing tools
         * until the current one completes execution.
         * This is modelled with a stack structure.
         */
        protected _handleAccessibleComponentCompleted(sender: AccessibleMapComponent): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    /**
     * Base class for accessible components
     */
    class AccessibleMapComponent {
        /**
         * The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this Draw toolbar instance belongs to.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** The mode the component is running - e.g. mouse, keyboard */
        inputMethod: string;
        suspended: boolean;
        isKeyboardActive: boolean;
        id: string;
        /** The map instance. */
        _map: esri.Map;
        private _mapNavState;
        /** Event handles */
        private _mouseDownHandle;
        private _keyDownHandle;
        private _keyUpHandle;
        constructor(map: esri.Map, app?: geocortex.essentialsHtmlViewer.ViewerApplication);
        setMap(map: esri.Map): void;
        setApp(app: geocortex.essentialsHtmlViewer.ViewerApplication): void;
        /**
         * Sets the current input method for this component (for example, mouse or keyboard).
         * @param method The input method. See {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility.InputMethod} for valid values.
         */
        setInputMethod(method: string): void;
        setKeyboardActive(value: boolean): void;
        suspend(): void;
        resume(): void;
        disableMapNavigation(hideZoomSlider?: boolean, hidePanArrows?: boolean, disableGraphicMouseEvents?: boolean): MapNavigationState;
        enableMapNavigation(showZoomSlider?: boolean, showPanArrows?: boolean, enableGraphicMouseEvents?: boolean, mapState?: MapNavigationState): void;
        getMapState(): MapNavigationState;
        activateMouseControls(resetInputMethod?: boolean): void;
        deactivateMouseControls(resetInputMethod?: boolean): void;
        activateKeyboardControls(resetInputMode?: boolean): void;
        deactivateKeyboardControls(resetInputMethod?: boolean): void;
        toggleKeyboardMode(): void;
        /**
         * Fired when the input method for this component (e.g. keyboard, mouse) has changed.
         */
        onInputMethodChange(result: {
            previousMethod: string;
            newMethod: string;
        }): void;
        /**
         * Internal method that subclasses should override to provide keyboard handling.
         */
        onKeyboardStart(): void;
        /**
         * Internal method that subclasses should override to provide keyboard handling.
         * @param cancelled Whether the operation was cancelled.
         */
        onKeyboardStop(cancelled?: boolean): void;
        /**
         * Internal method that subclasses should override to provide keyboard handling.
         */
        protected _onKeyDown(event: KeyboardEvent): void;
        /**
         * Internal method that subclasses should override to provide keyboard handling.
         */
        protected _onKeyUp(event: KeyboardEvent): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    class BoxEditor extends EditCapabilityBase {
        private _options;
        private _scaleEnabled;
        private _rotateEnabled;
        private _uniformScaling;
        private _isTextPoint;
        private _modified;
        private _isRotating;
        private _isScaling;
        private _lineSymbol;
        private _markerSymbol;
        private _transform;
        /** Keyboard event subscriptions */
        private _keyDownHandle;
        private _keyUpHandle;
        constructor(graphic: esri.Graphic, map: esri.Map, owner: accessibility.Edit, isTextPoint: boolean, options?: BoxEditorOptions);
        destroy(): void;
        protected _init(): void;
        protected _cleanUp(): void;
        /**
         * Provides keyboard handling for the BoxEditor component.
         * @private
         */
        protected _onKeyDownHandler(event: KeyboardEvent): void;
        /**
         * Keyboard event handler
         * @private
         */
        protected _onKeyUpHandler(event: KeyboardEvent): void;
        protected _rotateGraphic(degreesClockwise: number, pivotMapPoint?: esri.geometry.Point): void;
        protected _scaleGraphic(scaleX: number, scaleY?: number): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    class GraphicMover extends EditCapabilityBase {
        private _options;
        private _modified;
        private _isMoving;
        private _transform;
        private _textAnchor;
        /** Keyboard event subscriptions */
        private _keyDownHandle;
        private _keyUpHandle;
        constructor(graphic: esri.Graphic, map: esri.Map, owner: accessibility.Edit, textAnchor?: esri.Graphic, options?: GraphicMoverOptions);
        hasMoved(): boolean;
        destroy(): void;
        refresh(force?: boolean): void;
        protected _needsRefresh(): boolean;
        protected _init(): void;
        protected _cleanUp(): void;
        /**
         * Provides keyboard handling for the GraphicMover component.
         */
        protected _onKeyDownHandler(event: KeyboardEvent): void;
        /**
         * Keyboard event handler
         */
        protected _onKeyUpHandler(event: KeyboardEvent): void;
        protected _moveGraphic(dx: number, dy: number): void;
        protected _raiseEditVertexMoved(eventArgs: eventArgs.EditVertexMovedEventArgs): void;
    }
}
declare var require: any;
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    /**
     * The Edit toolbar is a helper class that provides functionality to move graphics or
     * modify individual vertices, i.e., edit the geometry of existing graphics.
     * To add new graphics, use the Draw toolbar.
     */
    class Edit extends AccessibleMapComponent implements esri.toolbars.Edit {
        /** When a textSymbol point is in edit mode, double-clicking leads to text editing mode, which is a text box where uses can change the text content. */
        static EDIT_TEXT: number;
        /** Display and edit vertices of a Polyline, Polygon, or Multipoint. */
        static EDIT_VERTICES: number;
        /** Move graphic to a new location on the map. */
        static MOVE: number;
        /** Rotate the graphic. */
        static ROTATE: number;
        /** Scale or resize a graphic. */
        static SCALE: number;
        private static _edit;
        /** The default (mouse-driven) drawing tools */
        private _editObject;
        /** The editing options */
        private _options;
        private _defaultOptions;
        /** The active tool(s). Can be a combination of several tools, e.g. Edit.MOVE | Edit.SCALE */
        private _tool;
        /** Whether the shape being edited is text markup */
        private _isTextPoint;
        private _isGeo;
        /** Whether we are in a editing session */
        private _active;
        /** Whether the shape has been modified */
        private _modified;
        /** Whether the editing operation has been cancelled */
        private _cancelled;
        /** Whether the mouse handles need refreshing (e.g. the graphic was changed via the keyboard) */
        private _needsRefresh;
        /** The shape being drawn */
        private _graphic;
        /** Handles returned by dojo.aspect */
        private _handles;
        /** Snapping feedback event token */
        private _snappingFeedbackEventToken;
        /** The last found snapping point */
        private _lastSnapPoint;
        /** Editing capabilities (e.g. move, scale, rotate, vertex editing) */
        private _graphicMover;
        private _vertexEditor;
        private _boxEditor;
        /**
         * Creates a new Edit object. A map is a required parameter.
         * @param map Map the toolbar is associated with.
         * @param options Optional parameters.
         */
        constructor(map: esri.Map, options?: esri.EditOptions, app?: geocortex.essentialsHtmlViewer.ViewerApplication);
        /**
         * Activates the toolbar to edit the supplied graphic. After activation the toolbar is ready for user interaction using the specified tool.
         * @param tool Specify the active tool(s). Combine tools using the | operator.
         * @param graphic The graphic to edit.
         * @param options See the object specifications table below for the structure of the `options` object.
         */
        activate(tool: number, graphic: esri.Graphic, options?: esri.EditOptions): void;
        /**
         * Deactivates the toolbar. Call this method to deactivate the toolbar after editing the graphic.
         */
        deactivate(): void;
        /**
         * Convert a polygon to an extent. Used for zoom operations using the keyboard.
         * @param polygon A esri.geometry.Polygon polygon that is to be converted to an extent.
         */
        protected _convertPolygonToExtent(polygon: any): esri.geometry.Extent;
        getOptions(): ExtendedEditOptions;
        /**
         * Returns an object with the following properties that describe the current state: `tool`, `graphic`, `isModified`.
         */
        getCurrentState(): {
            tool: number;
            graphic: esri.Graphic;
            isModified: boolean;
        };
        /**
         * Returns an array with the available tools (for example, [MOVE tool, ROTATE tool, SCALE tool]).
         */
        getEnabledTools(): EditCapabilityBase[];
        /**
         * Refreshes the internal state of the toolbar.
         */
        refresh(): void;
        setNeedsRefresh(value: boolean): void;
        suspend(): void;
        resume(): void;
        isActive(): boolean;
        activateMouseControls(resetInputMode?: boolean): void;
        deactivateMouseControls(resetInputMode?: boolean): void;
        /** Activates the toolbar for editing geometries. */
        on(type: "activate", listener: (event: {
            graphic: esri.Graphic;
            tool: number;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Deactivates the toolbar and reactivates map navigation. */
        on(type: "deactivate", listener: (event: {
            graphic: esri.Graphic;
            info: any;
            tool: number;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires when a graphic is clicked. */
        on(type: "graphic-click", listener: (event: {
            graphic: esri.Graphic;
            info: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires when the user begins to move a graphic. */
        on(type: "graphic-first-move", listener: (event: {
            graphic: esri.Graphic;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired continuously as the graphic moves. */
        on(type: "graphic-move", listener: (event: {
            graphic: esri.Graphic;
            transform: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired when the mouse button is pressed down on the graphic, usually while moving a graphic. */
        on(type: "graphic-move-start", listener: (event: {
            graphic: esri.Graphic;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired when the mouse button is released, usually after moving the graphic. */
        on(type: "graphic-move-stop", listener: (event: {
            graphic: esri.Graphic;
            transform: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires continuously as a graphic is rotated. */
        on(type: "rotate", listener: (event: {
            graphic: esri.Graphic;
            info: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires when the user begins to drag a handle to rotate the graphic. */
        on(type: "rotate-first-move", listener: (event: {
            graphic: esri.Graphic;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires when a user clicks on the handle to begin rotating a graphic. */
        on(type: "rotate-start", listener: (event: {
            graphic: esri.Graphic;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires when the mouse button is released from the rotate handle to finish rotating the graphic. */
        on(type: "rotate-stop", listener: (event: {
            graphic: esri.Graphic;
            info: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires continuously as the graphic is being scaled. */
        on(type: "scale", listener: (event: {
            graphic: esri.Graphic;
            info: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires when the user begins to drag a handle to scale the graphic. */
        on(type: "scale-first-move", listener: (event: {
            graphic: esri.Graphic;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires when a user clicks on the handle to scale or resize a graphic. */
        on(type: "scale-start", listener: (event: {
            graphic: esri.Graphic;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires when the mouse button is released from the scale handle to finish scaling the graphic. */
        on(type: "scale-stop", listener: (event: {
            graphic: esri.Graphic;
            info: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired after a new vertex is added to a polyline or polygon or a new point is added to a multipoint. */
        on(type: "vertex-add", listener: (event: {
            graphic: esri.Graphic;
            vertexinfo: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired when the mouse button is clicked on the vertex of a polyline or polygon or a point in a multipoint. */
        on(type: "vertex-click", listener: (event: {
            graphic: esri.Graphic;
            vertexinfo: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired after a vertex(polyline, polygon) or point(multipoint) is deleted. */
        on(type: "vertex-delete", listener: (event: {
            graphic: esri.Graphic;
            vertexinfo: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired when the user begins to move the vertex of a polyline or polygon or a point of a multipoint. */
        on(type: "vertex-first-move", listener: (event: {
            graphic: esri.Graphic;
            vertexinfo: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fires as the mouse exits a vertex(polyline, polygon) or a point(multipoint). */
        on(type: "vertex-mouse-out", listener: (event: {
            graphic: esri.Graphic;
            vertexinfo: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired when the mouse moves over a vertex (polyline, polygon) or point (multipoint). */
        on(type: "vertex-mouse-over", listener: (event: {
            graphic: esri.Graphic;
            vertexinfo: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired continuously as the user is moving a vertex (polyline, polygon) or point (multipoint). */
        on(type: "vertex-move", listener: (event: {
            graphic: esri.Graphic;
            transform: any;
            vertexinfo: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired when the mouse button is pressed down on a vertex (polyline, polygon) or point (multipoint). */
        on(type: "vertex-move-start", listener: (event: {
            graphic: esri.Graphic;
            vertexinfo: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        /** Fired when the mouse button is released from a vertex (polyline, polygon) or point(multipoint). */
        on(type: "vertex-move-stop", listener: (event: {
            graphic: esri.Graphic;
            transform: any;
            vertexinfo: any;
            target: esri.toolbars.Edit;
        }) => void): esri.Handle;
        on(type: string, listener: (event: any) => void): esri.Handle;
        /**
         * Fired when the editing tools are activated.
         * @param tool The editing type. The constants table lists valid editing values.
         * @param graphic The graphic to edit whose vertices will be edited or moved.
         */
        onActivate(tool: number, graphic: esri.Graphic): void;
        /**
         * Fired when the editing tools are deactivated.
         * @param tool The editing type. The constants table lists valid editing values.
         * @param graphic The graphic the toolbar was associated with.
         * @info An object with the following properties: isModified
         */
        onDeactivate(tool: number, graphic: esri.Graphic, info: {
            isModified: boolean;
            cancelled?: boolean;
        }): void;
        /**
         * Fired when a graphic is clicked. Applicable only when the MOVE tool is active.
         * @param graphic The clicked graphic.
         * @param info An object with the following properties: `mapPoint`, `screenPoint`
         */
        onGraphicClick(graphic: esri.Graphic, info: {
            mapPoint: esri.geometry.Point;
            screenPoint: esri.geometry.ScreenPoint;
        }): void;
        /** @private */
        _onGraphicClickImpl(graphic: esri.Graphic, info: {
            mapPoint: esri.geometry.Point;
            screenPoint: esri.geometry.ScreenPoint;
        }): void;
        /**
         * Fired when the user begins to move a graphic. Applicable only when the MOVE tool is active.
         * @param graphic The graphic associated with the toolbar.
         */
        onGraphicFirstMove(graphic: esri.Graphic): void;
        /** @private */
        _onGraphicFirstMoveImpl(graphic: esri.Graphic): void;
        /**
         * Fired continuously as the graphic moves. Applicable only when the MOVE tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param transform Represents the linear transformation applied to the graphic.
         */
        onGraphicMove(graphic: esri.Graphic, transform: any): void;
        /** @private */
        _onGraphicMoveImpl(graphic: esri.Graphic, transform: any): void;
        /**
         * Fired when the mouse button is pressed down on the graphic, usually while moving a graphic. Applicable only when the MOVE tool is active.
         * @param graphic The graphic associated with the toolbar.
         */
        onGraphicMoveStart(graphic: esri.Graphic): void;
        /** @private */
        _onGraphicMoveStartImpl(graphic: esri.Graphic): void;
        /**
         * Fired when the mouse button is released, usually after moving the graphic. Applicable only when the MOVE tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param transform Represents the linear transformation applied to the graphic.
         */
        onGraphicMoveStop(graphic: esri.Graphic, transform: any): void;
        /** @private */
        _onGraphicMoveStopImpl(graphic: esri.Graphic, transform: any): void;
        /**
         * Fired continuously as a graphic is rotated.
         * @param graphic The rotated graphic.
         * @param info The info object has the following properties: `transform`, `angle`, `around`
         */
        onRotate(graphic: esri.Graphic, info: any): void;
        /** @private */
        _onRotateImpl(graphic: esri.Graphic, info: any): void;
        /**
         * Fired when the user begins to drag a handle to rotate the graphic.
         * @param graphic The rotated graphic.
         */
        onRotateFirstMove(graphic: esri.Graphic): void;
        /** @private */
        _onRotateFirstMoveImpl(graphic: esri.Graphic): void;
        /**
         * Fired when a user clicks on the handle to begin rotating a graphic.
         * @param graphic The rotated graphic.
         */
        onRotateStart(graphic: esri.Graphic): void;
        /** @private */
        _onRotateStartImpl(graphic: esri.Graphic): void;
        /**
         * Fired when the mouse button is released from the rotate handle to finish rotating the graphic.
         * @param graphic The rotated graphic.
         * @param info The info object has the following properties: `transform`, `angle`, `around`
         */
        onRotateStop(graphic: esri.Graphic, info: any): void;
        /** @private */
        _onRotateStopImpl(graphic: esri.Graphic, info: any): void;
        /**
         * Fired continuously as the graphic is being scaled.
         * @param graphic The scaled graphic.
         * @param info The info object has the following properties: `transform`, `scaleX`, `scaleY`, `around`
         */
        onScale(graphic: esri.Graphic, info: any): void;
        /** @private */
        _onScaleImpl(graphic: esri.Graphic, info: any): void;
        /**
         * Fired when the user begins to drag a handle to scale the graphic.
         * @param graphic The scaled graphic.
         */
        onScaleFirstMove(graphic: esri.Graphic): void;
        /** @private */
        _onScaleFirstMoveImpl(graphic: esri.Graphic): void;
        /**
         * Fired when a user clicks on the handle to scale or resize a graphic.
         * @param graphic The scaled graphic.
         */
        onScaleStart(graphic: esri.Graphic): void;
        /** @private */
        _onScaleStartImpl(graphic: esri.Graphic): void;
        /**
         * Fired when the mouse button is released from the scale handle to finish scaling the graphic.
         * @param graphic The scaled graphic.
         * @param info The info object has the following properties: `transform`, `scaleX`, `scaleY`, `around`
         */
        onScaleStop(graphic: esri.Graphic, info: any): void;
        /** @private */
        _onScaleStopImpl(graphic: esri.Graphic, info: any): void;
        /**
         * Fired after a new vertex is added to a polyline or polygon or a new point is added to a multipoint. Applicable only when the EDIT_VERTICES tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param vertexInfo An object with properties: `isGhost`, `pointIndex`, `segmentIndex`
         */
        onVertexAdd(graphic: esri.Graphic, vertexInfo: any): void;
        /** @private */
        _onVertexAddImpl(graphic: esri.Graphic, vertexInfo: any): void;
        /**
         * Fired when the mouse button is clicked on the vertex of a polyline or polygon or a point in a multipoint. Applicable only when the EDIT_VERTICES tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param vertexInfo An object with properties: `isGhost`, `pointIndex`, `segmentIndex`
         */
        onVertexClick(graphic: esri.Graphic, vertexInfo: any): void;
        /** @private */
        _onVertexClickImpl(graphic: esri.Graphic, vertexInfo: any): void;
        /**
         * Fired after a vertex(polyline, polygon) or point(multipoint) is deleted. Applicable only when the EDIT_VERTICES tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param vertexInfo An object with properties: `isGhost`, `pointIndex`, `segmentIndex`
         */
        onVertexDelete(graphic: esri.Graphic, vertexInfo: any): void;
        /** @private */
        _onVertexDeleteImpl(graphic: esri.Graphic, vertexInfo: any): void;
        /**
         * Fired when the user begins to move the vertex of a polyline or polygon or a point of a multipoint. Applicable only when the EDIT_VERTICES tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param vertexInfo An object with properties: `isGhost`, `pointIndex`, `segmentIndex`
         */
        onVertexFirstMove(graphic: esri.Graphic, vertexInfo: any): void;
        /** @private */
        _onVertexFirstMoveImpl(graphic: esri.Graphic, vertexInfo: any): void;
        /**
         * Fired as the mouse exits a vertex(polyline, polygon) or a point(multipoint). Applicable only when the EDIT_VERTICES tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param vertexInfo An object with properties: `isGhost`, `pointIndex`, `segmentIndex`
         */
        onVertexMouseOut(graphic: esri.Graphic, vertexInfo: any): void;
        /** @private */
        _onVertexMouseOutImpl(graphic: esri.Graphic, vertexInfo: any): void;
        /**
         * Fired when the mouse moves over a vertex (polyline, polygon) or point (multipoint). Applicable only when the EDIT_VERTICES tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param vertexInfo An object with properties: `isGhost`, `pointIndex`, `segmentIndex`
         */
        onVertexMouseOver(graphic: esri.Graphic, vertexInfo: any): void;
        /** @private */
        _onVertexMouseOverImpl(graphic: esri.Graphic, vertexInfo: any): void;
        /**
         * Fired continuously as the user is moving a vertex (polyline, polygon) or point (multipoint). Applicable only when the EDIT_VERTICES tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param vertexInfo An object with properties: `isGhost`, `pointIndex`, `segmentIndex`
         * @param transform Represents the linear transformation applied to the graphic.
         */
        onVertexMove(graphic: esri.Graphic, vertexInfo: any, transform: any): void;
        /** @private */
        _onVertexMoveImpl(graphic: esri.Graphic, vertexInfo: any, transform: any): void;
        /**
         * Fired when the mouse button is pressed down on a vertex (polyline, polygon) or point (multipoint). Applicable only when the EDIT_VERTICES tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param vertexInfo An object with properties: `isGhost`, `pointIndex`, `segmentIndex`
         */
        onVertexMoveStart(graphic: esri.Graphic, vertexInfo: any): void;
        /** @private */
        _onVertexMoveStartImpl(graphic: esri.Graphic, vertexInfo: any): void;
        /**
         * Fired when the mouse button is released from a vertex (polyline, polygon) or point(multipoint). Applicable only when the EDIT_VERTICES tool is active.
         * @param graphic The graphic associated with the toolbar.
         * @param vertexInfo An object with properties: `isGhost`, `pointIndex`, `segmentIndex`
         * @param transform Represents the linear transformation applied to the graphic.
         */
        onVertexMoveStop(graphic: esri.Graphic, vertexInfo: any, transform: any): void;
        /** @private */
        _onVertexMoveStopImpl(graphic: esri.Graphic, vertexInfo: any, transform: any): void;
        /**
         * Internal method that subclasses should override to provide keyboard handling.
         */
        onKeyboardStart(): void;
        /**
         * Internal method that subclasses should override to provide keyboard handling.
         * @param cancelled Whether the operation was cancelled.
         */
        onKeyboardStop(cancelled?: boolean): void;
        /**
         * Provides keyboard handling for the Edit component.
         */
        protected _onKeyDown(event: KeyboardEvent): void;
        protected raiseGraphicEditActivated(eventArgs?: infrastructure.eventArgs.GraphicEditActivatedEventArgs): void;
        protected raiseGraphicEditDeactivated(eventArgs?: infrastructure.eventArgs.GraphicEditDeactivatedEventArgs): void;
        /**
         * Changes the current status message to something like:
         * "Use arrows to move, R to rotate, S to scale, V to select vertex. Combine with ALT for finer control. Combine with SHIFT to reverse."
         * It will also narrate the above text via the ScreenReaderNarrate command.
         * Implementors should override this method if they want to suppress this behavior.
         */
        protected _updateToolStatusMessage(): void;
        protected _clear(): void;
        private _getSymbol(graphic);
        protected _enableMove(graphic: esri.Graphic): boolean;
        protected _enableBoxEditing(graphic: esri.Graphic, scaleEnabled: boolean, rotateEnabled: boolean): boolean;
        protected _enableVertexEditing(graphic: esri.Graphic): boolean;
        /**
         * Contains logic to check if there is a snapping point to replace the moved point.
         * Snapping is difficult with points during keyboard edits as we do not have a vertex handle which is seperate from the actual graphic.
         * This handles points when the move is finished and does a last minute geometry swap. If the geometry is swapped before this time,
         * the point can become locked to the same point on the screen.
         * @param editingGraphic The editing graphic.
         * @param overridePoint The point geometry to override.
         */
        protected _adjustGraphicMoverPoint(editingGraphic: esri.Graphic, overridePoint: esri.geometry.Point): void;
        protected _disableMove(): void;
        protected _disableBoxEditing(): void;
        protected _disableVertexEditing(): void;
    }
}
declare var require: any;
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.accessibility {
    /**
     * Toolbar that supports functionality to create new geometries by drawing them: points (POINT or MULTI_POINT),
     * lines (LINE, POLYLINE, or FREEHAND_POLYLINE), polygons (FREEHAND_POLYGON or POLYGON), or rectangles (EXTENT).
     * To edit geometries of existing graphics, use the Edit Toolbar.
     */
    class Draw extends AccessibleMapComponent implements esri.toolbars.Draw {
        /** Draws an arrow. */
        static ARROW: string;
        /** Draws a circle. */
        static CIRCLE: string;
        /** Draws an arrow that points down. */
        static DOWN_ARROW: string;
        /** Draws an ellipse. */
        static ELLIPSE: string;
        /** Draws an extent box. */
        static EXTENT: string;
        /** Draws a freehand polygon. */
        static FREEHAND_POLYGON: string;
        /** Draws a freehand polyline. */
        static FREEHAND_POLYLINE: string;
        /** Draws an arrow that points left. */
        static LEFT_ARROW: string;
        /** Draws a line. */
        static LINE: string;
        /** Draws a Multipoint. */
        static MULTI_POINT: string;
        /** Draws a point. */
        static POINT: string;
        /** Draws a polygon. */
        static POLYGON: string;
        /** Draws a polyline. */
        static POLYLINE: string;
        /** Draws a rectangle. */
        static RECTANGLE: string;
        /** Draws an arrow that points right. */
        static RIGHT_ARROW: string;
        /** Draws a triangle. */
        static TRIANGLE: string;
        /** Draws an arrow that points up. */
        static UP_ARROW: string;
        /**
         * Symbol to be used when drawing a Polygon or Extent.
         */
        fillSymbol: esri.symbol.SimpleFillSymbol;
        /**
         * Symbol to be used when drawing a Polyline.
         */
        lineSymbol: esri.symbol.SimpleLineSymbol;
        /**
         * Symbol to be used when drawing a Point or Multipoint.
         */
        markerSymbol: esri.symbol.SimpleMarkerSymbol;
        /**
         * When set to false, the geometry is modified to be topologically correct.
         */
        respectDrawingVertexOrder: boolean;
        /**
         * Marker symbol used to draw the vertices while in keyboard mode. Valid for polyline and polygon geometries.
         */
        vertexSymbol: esri.symbol.SimpleMarkerSymbol;
        /**
         * Marker symbol used to draw the currently selected vertex while in keyboard mode. Valid for polyline and polygon geometries.
         */
        selectedVertexSymbol: esri.symbol.MarkerSymbol;
        private static _draw;
        /** @private */
        private static createEllipse(options);
        /** @private */
        private static createCircle(options);
        /** Templates for pre-defined shapes that can be drawn with this tool */
        protected _arrowShapeTemplate: number[][];
        protected _leftArrowShapeTemplate: number[][];
        protected _rightArrowShapeTemplate: number[][];
        protected _upArrowShapeTemplate: number[][];
        protected _downArrowShapeTemplate: number[][];
        protected _triangleShapeTemplate: number[][];
        protected _rectangleShapeTemplate: number[][];
        /** The default (mouse-driven) drawing tools */
        private _drawObject;
        /** Internal shape editing tools */
        private _editObject;
        /** The type of geometry drawn. */
        private _geometryType;
        /** The draw options */
        private _options;
        private _defaultOptions;
        /** Whether we are in a drawing session */
        private _active;
        /** The shape being drawn */
        private _graphic;
        /** Collection of digitized vertices when in keyboard mode. Valid for polyline and polygon geometries */
        /** _points and _onClickHandler are private members of Esri draw toolbar that are manipulated within the MapTool class */
        private _points;
        /** Deferred representing a drawing operation. It can result in either a default shape (e.g. circle) or a shape digitized via keyboard (e.g. polygon) */
        private _createGeometryDeferred;
        /** Whether polyline/polygon keyboard drawing is active */
        private _isPlottingPolyGeometry;
        /** Whether the polygon/polyline vertex anchor has been moved with the keyboard */
        private _lastVertexPosition;
        /** The polyline/polygon vertex anchor (red dot). Valid for polyline and polygon geometries */
        private _vertexAnchor;
        /** The ghost line is displayed when moving vertices. Valid for polyline and polygon geometries */
        private _ghostLine;
        /** Handles returned by dojo.aspect */
        private _handles;
        private _polyGeometryKeyDownHandle;
        private _editCompletedHandle;
        private _dblClickHandlerToken;
        private _lastSnappingPoint;
        /**
         * Creates a new Draw object.
         * @param map Map the toolbar is associated with.
         * @param options Parameters that define the functionality of the draw toolbar.
         */
        constructor(map: esri.Map, options?: ExtendedDrawOptions, app?: geocortex.essentialsHtmlViewer.ViewerApplication);
        /**
         * Activates the toolbar for drawing geometries.
         * @param geometryType The type of geometry drawn.
         * @param options Options that define the functionality of the draw toolbar.
         */
        activate(geometryType: string, options?: ExtendedDrawOptions): void;
        /**
         * Deactivates the toolbar and reactivates map navigation.
         */
        deactivate(): void;
        /**
         * Finishes drawing the geometry and fires the onDrawEnd event.
         */
        finishDrawing(): void;
        /**
         * Sets the fill symbol.
         * @param fillSymbol The fill symbol.
         */
        setFillSymbol(fillSymbol: esri.symbol.SimpleFillSymbol): void;
        /**
         * Sets the line symbol.
         * @param lineSymbol The line symbol.
         */
        setLineSymbol(lineSymbol: esri.symbol.SimpleLineSymbol): void;
        /**
         * Sets the marker symbol.
         * @param markerSymbol The marker symbol.
         */
        setMarkerSymbol(markerSymbol: esri.symbol.SimpleMarkerSymbol): void;
        /**
         * Sets whether the polygon geometry should be modified to be topologically correct.
         * @param value When set to false, the geometry is modified to be topologically correct.
         */
        setRespectDrawingVertexOrder(value: boolean): void;
        /**
         * Sets the vertex marker symbol.
         * @param markerSymbol The marker symbol.
         */
        setVertexSymbol(markerSymbol: esri.symbol.SimpleMarkerSymbol): void;
        /**
         * Sets the vertex highlight marker symbol.
         * @param markerSymbol The marker symbol.
         */
        setSelectedVertexSymbol(markerSymbol: esri.symbol.SimpleMarkerSymbol): void;
        activateMouseControls(resetInputMode?: boolean): void;
        deactivateMouseControls(resetInputMode?: boolean): void;
        raiseGraphicDrawActivated(eventArgs?: infrastructure.eventArgs.GraphicDrawActivatedEventArgs): void;
        raiseGraphicDrawDeactivated(eventArgs?: infrastructure.eventArgs.GraphicDrawDeactivatedEventArgs): void;
        raiseGraphicVertexAdded(eventArgs?: infrastructure.eventArgs.GraphicVertexAddedEventArgs): void;
        raiseGraphicVertexMoved(eventArgs?: infrastructure.eventArgs.GraphicVertexMovedEventArgs): void;
        /** Fired when the user has ended drawing. */
        on(type: "draw-complete", listener: (event: {
            geographicGeometry: esri.geometry.Geometry;
            geometry: esri.geometry.Geometry;
            target: esri.toolbars.Draw;
        }) => void): esri.Handle;
        /** Fired when drawing is complete. */
        on(type: "draw-end", listener: (event: {
            geometry: esri.geometry.Geometry;
            target: esri.toolbars.Draw;
        }) => void): esri.Handle;
        on(type: string, listener: (event: any) => void): esri.Handle;
        /**
         * Fired when the drawing tools are activated.
         */
        onActivate(): void;
        /**
         * Fired when the drawing tools are deactivated.
         */
        onDeactivate(): void;
        /**
         * Fired when the user has ended drawing.
         * @param result The event object has the following properties: geometry, geographicGeometry.
         * `geometry` represents the shape that was drawn. Coordinates of this geometry have the same spatial reference of the map.
         * `geographicGeometry` represents the drawn shape in geographic coordinates (latitude, longitude). Only available when the map's
         * spatial reference is Web Mercator or Geographic (4326)
         */
        onDrawComplete(result: {
            geographicGeometry: esri.geometry.Geometry;
            geometry: esri.geometry.Geometry;
        }): void;
        /**
         * Fired when drawing is complete.
         * @param geometry Geometry drawn on the client.
         */
        onDrawEnd(geometry: esri.geometry.Geometry): void;
        /**
         * Internal method that subclasses should override to provide keyboard handling.
         */
        onKeyboardStart(): void;
        /**
         * Internal method that subclasses should override to provide keyboard handling.
         * @param cancelled Whether the operation was cancelled.
         */
        onKeyboardStop(cancelled?: boolean): void;
        /**
         * Provides keyboard handling for the Draw component.
         */
        protected _onKeyDown(event: KeyboardEvent): void;
        /**
         * GVH measurement tools rely on private/unsupported methods of the Esri Draw object. This is one of them.
         * @private
         */
        protected _onClickHandler(event: esri.AGSMouseEvent): void;
        /** Whether keyboard input is supported for the specified geometry type. Keyboard input is not supported for freehand drawing. */
        protected _supportsKeyboardInput(geometryType: string): boolean;
        protected _finishKeyboardDrawing(raiseDrawEndEvent?: boolean): void;
        protected _clear(): void;
        /**
         * Fires the draw-end event.
         * @private
         */
        protected _drawEnd(geometry: esri.geometry.Geometry): void;
        protected _moveVertexAnchor(dx: number, dy: number): void;
        private _handleSnappingEvent(args);
        /** @private Updates the ghost line, displayed when moving vertices. Valid for polyline and polygon geometries. */
        protected _updateGhostLine(vertexLocation: esri.geometry.Point): void;
        protected _addVertex(vertex: esri.geometry.Point): void;
        /** Starts digitizing polygons, polylines or multi-points via the keyboard. Returns a promise that is fulfilled once the user completes the drawing. */
        protected _drawPolyGeometry(start: esri.geometry.Point, geometryType: string): Promise<esri.geometry.Geometry>;
        /** Handles keyboard input for plotting polygons, polylines and multipoints. */
        protected _drawPolyGeometry_handleKeyDown(resolve: (result: esri.geometry.Geometry | Promise.Thenable<esri.geometry.Geometry>) => void, reject: (error: any) => void): dojo.RemovableHandle;
        /** Plots a shape on the map. It will produce either a default shape (e.g. circle) or a shape digitized via the keyboard (e.g. polygon) */
        protected _plotShape(location: esri.geometry.Point, geometryType: string): Promise<esri.geometry.Geometry>;
        protected _editShape(geometry: esri.geometry.Geometry): void;
        /**
         * Raises the draw-end event after editing is completed.
         * @private
         */
        protected _onEditShapeCompleted(tool: number, graphic: esri.Graphic, info: {
            isModified: boolean;
            cancelled?: boolean;
        }): void;
        protected _toPolygon(ring: number[][], dx: number, dy: number): esri.geometry.Polygon;
        protected _syncPointsCollection(): void;
        protected _getEditMode(geometryType: string): {
            mode: number;
            options?: esri.EditOptions;
        };
        protected _vertexCount(g: esri.geometry.Geometry): number;
        /**
         * Esri's JavaScript API 3.8 have caused numerous problems with markup and measurement, resulting in the need for numerous hacks
         * and workarounds in the measurement, markup and printing modules, and possibly others as well.
         * This is a central placeholder for all hacks and workarounds needed by the WCAG accessible tools.
         *
         * See GVH-3523, GVH-3535, GVH-3516, GVH-4973
         */
        protected _twoClicksWithin300MsFixup(): void;
        protected _twoClicksWithin300MsFixup_handleClick(evt: esri.AGSMouseEvent, origOnClickHandler: () => void): void;
        protected _extraPointOnTouchDevicesFixup(): void;
    }
    module Draw {
        /**
         * Editing component used internally by the Draw component.
         * It explicitly overrides a few parent methods to avoid emitting events since this component is internal.
         */
        class EditInternal extends infrastructure.accessibility.Edit {
            protected raiseGraphicEditActivated(eventArgs?: infrastructure.eventArgs.GraphicEditActivatedEventArgs): void;
            protected raiseGraphicEditDeactivated(eventArgs?: infrastructure.eventArgs.GraphicEditDeactivatedEventArgs): void;
        }
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /**
     * A cancellation token allows you to check if an operation has been cancelled.
     * Additionally, you can subscribe to be notified when cancellation occurs.
     * CancellationTokens should only be obtained from the CancellationTokenSource.token property.
     */
    interface CancellationToken {
        /**
         * Specifies if cancellation has been requested. This value should never be set
         * explicitly. Instead, a CancellationToken should be cancelled using the CancellationTokenSource
         * that it was derived from.
         */
        isCancellationRequested: boolean;
        /**
         * Register a handler to be notified when cancellation occurs.
         */
        register(action: () => void): any;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /**
     * A source for generating CancellationTokens. First create a CancellationTokenSource, then
     * using the token property to obtain the cancellation token. The token can be cancelled by
     * calling cancel() on the CancellationTokenSource.
     */
    class CancellationTokenSource {
        private _tokenImpl;
        private static _none;
        constructor();
        /**
         * Gets the cancellation token.
         */
        token(): CancellationToken;
        /**
         * Cancels the CancellationToken, setting isCancellationRequested to true, and invoking any registered listeners.
         */
        cancel(): void;
        /**
         * Removes subscriptions that were created using register().
         */
        dispose(): void;
        /**
         * Creates a CancellationToken that does nothing.
         */
        static none(): CancellationToken;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    /**
     * Describes the arguments for the DownloadOfflineResources command.
     */
    interface DownloadOfflineResourcesArgs {
        /**
         * The ID to give to the offline resources downloaded.
         */
        id: string;
        /**
         * An optional callback for success.
         */
        successCallback?: () => void;
        /**
         * An optional callback on error.
         * @param error The error of the operation.
         */
        errorCallback?: (error: Error) => void;
        /**
         * Whether to activate the offline resources immediately upon completion.
         * Default is false.  Errors from activation will go to the errorCallback
         * if it is defined.
         */
        activateOnSuccess?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface EditAttachmentArgs {
        feature: esri.Graphic;
        layer: esri.layers.FeatureLayer;
        featureUrl: string;
        filename: string;
        contentType: string;
        payload: string;
        callback: (result: any) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface EditFeatureArgs {
        mapService: geocortex.essentials.MapService | string;
        layer: esri.layers.FeatureLayer;
        feature: esri.Graphic;
        successCallback?: (graphic?: esri.Graphic) => void;
        errorCallback?: (error: Error) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface EditRelatedRecordArgs extends EditFeatureArgs {
        relatedFeature?: esri.Graphic;
        relationshipOrigin?: esri.layers.Relationship;
        relationshipDestination?: esri.layers.Relationship;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface ContextMenuArgs {
        /**
         * The absolute X position in pixels of where to position the context menu in respect to the page
         */
        pageX: number;
        /**
         * The absolute Y position in pixels of where to position the context menu in respect to the page
         */
        pageY: number;
        /**
         * The view id to activate that is hosted in the ContextMenuContentRegion
         */
        viewId?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    interface Bookmark {
        name: string;
        extent: esri.geometry.Extent;
        source: BookmarkSource;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /**
     * Indicates where a bookmark was loaded from.
     */
    enum BookmarkSource {
        Site = 0,
        User = 1,
        Project = 2,
    }
    class BookmarkManager {
        app: ViewerApplication;
        /** Stores bookmarks that come from a project. */
        private _projectBookmarks;
        constructor(app: ViewerApplication);
        /**
         * Gets all bookmarks.
         */
        getAll(): Promise<Bookmark[]>;
        /**
         * Gets the user-defined bookmarks.
         */
        getUserBookmarks(): Promise<Bookmark[]>;
        /**
         * Gets the bookmarks that are defined in the site.
         */
        getSiteBookmarks(): Promise<Bookmark[]>;
        /**
         * Gets the bookmarks that were restored from a project.
         */
        getProjectBookmarks(): Promise<Bookmark[]>;
        /**
         * Adds a new bookmark.
         */
        add(bookmark: Bookmark): Promise<void>;
        /**
         * Removes a bookmark. Only user-defined bookmarks can be removed this way.
         * @param bookmark The bookmark to remove, or the name of the bookmark. In the latter case,
         *     if multiple bookmarks exist with the given name, then ALL user-defined bookmarks with
         *     the given name will be removed.
         */
        remove(bookmark: Bookmark | string): Promise<void>;
        /**
         * Exports bookmarks in web map format.
         */
        export(sourceTypes?: BookmarkSource[]): Promise<webMap.Bookmark[]>;
        private _save(bookmarks);
        private _serialize(bookmark);
        private _deserialize(serializedBookmark);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    /**
     * Describes the arguments for cutting graphics in memory.
     */
    interface CutGraphicsArgs extends EditInMemoryArgs {
        /**
         * The polyline used to cut the graphics.
         */
        polyline?: esri.geometry.Polyline;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    /**
     * Describes the arguments for commands that edit graphics in memory.
     */
    interface EditInMemoryArgs {
        /**
         * The graphics to edit.
         */
        graphics: esri.Graphic[];
        /**
         * The graphics layer to edit the graphics on.
         */
        graphicsLayer: esri.layers.GraphicsLayer;
        /**
         * A callback to execute upon successfully editing the graphics. Can be used to update attributes for edited graphics. The edits
         * will not be added to the undo manager until this callback has been resolved.
         */
        successCallback?: (addedGraphics: esri.Graphic[], updatedGraphics: esri.Graphic[], deletedGraphics: esri.Graphic[]) => Promise<void>;
        /**
         * A callback to execute when there is an error editing the graphics.
         */
        errorCallback?: (error: Error) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface ExportGraphicsLayerArgs {
        /** The Graphics Layer to be exported. */
        graphicLayer: esri.layers.GraphicsLayer;
        /** The format for exporting the graphics layer. */
        format: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    /**
     * Argument of the ShowOfflineMapEditor command.
     */
    interface ShowOfflineMapEditorArgs {
        /**
         * Optional existing OfflineMap to prepopulate the fields with.
         */
        existingOfflineMap?: infrastructure.offline.OfflineMap;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface FindAllSelectionMetadataArgs {
        /** A callback to execute upon success. */
        successCallback?: (results: geocortex.essentialsHtmlViewer.mapping.infrastructure.selection.SelectionMetadata[]) => void;
        /** A callback to execute when there is an error. */
        errorCallback?: (error: Error) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface FindSelectionArgs {
        /** The name of the selection. */
        name: string;
        /** A callback to execute upon success. */
        successCallback?: (results: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection) => void;
        /** A callback to execute when there is an error. */
        errorCallback?: (error: Error) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface UpdateMetadataForSelectionArgs {
        /** The metadata to set. */
        metadata: geocortex.essentialsHtmlViewer.mapping.infrastructure.selection.SelectionMetadata;
        /** A callback to execute upon success. */
        successCallback?: () => void;
        /** A callback to execute when there is an error. */
        errorCallback?: (error: Error) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface RenameSelectionArgs extends SelectionArgs {
        /** The new name to use for the selection. */
        newName: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface FindMetadataForSelectionArgs {
        /** The name of the selection. */
        name?: string;
        /** The feature set collection ID */
        featureSetCollectionId?: string;
        /** A callback to execute upon success. */
        successCallback?: (metadata: geocortex.essentialsHtmlViewer.mapping.infrastructure.selection.SelectionMetadata) => void;
        /** A callback to execute when there is an error. */
        errorCallback?: (error: Error) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface SelectionArgs {
        /** The name of the selection. */
        name: string;
        /** The {@link FeatureSetCollection} backing the results to save, modify or delete. */
        featureSetCollection?: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection | string;
        /** A callback to execute upon success. */
        successCallback?: () => void;
        /** A callback to execute when there is an error. */
        errorCallback?: (error: Error) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface CombineResultsArgs {
        /** Describes how the specified features should be combined with existing features in the collection of results. Valid values are: `replace`, `union`, `intersect`, `subtract` */
        combineMode: string;
        /** Array of IDs corresponding to the FeatureSetCollections to operate against the current set of results in the results view */
        featureSetCollectionIds: string[];
        currentResults?: infrastructure.FeatureSetCollection | string;
        /** A callback to execute upon successfully modifying the FeatureSetCollections. */
        successCallback?: (info: infrastructure.selection.CombineResultsResponse) => void;
        /** A callback to execute when there is an error modifying the FeatureSetCollections. */
        errorCallback?: (error: Error) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    /**
     * Describes the arguments for updating graphics in memory.
     */
    interface UpdateGraphicsArgs extends EditInMemoryArgs {
        /**
         * The geometries used to update the graphics. You must have the same number of geometries as graphics.
         */
        geometries?: esri.geometry.Geometry[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer {
    /**
     * The base interface for the "BufferGeometry" and "BufferGeometries" command arguments.
     * Note: Either the bufferDistance/buffeerUnit combination or the sourceCommand must be specified. Explicitly specifying buffer unit/distance will override source.
     */
    interface BufferArgsBase {
        /**
         * The distance to buffer.
         */
        bufferDistance?: number;
        /**
         * The unit to buffer in. Will accept any standard geometry service constant or "feet", "meter", "kilometer", "mile", "nauticalmile" or "yard".
         */
        bufferUnit?: string;
        /**
         * The source command that's calling this buffer request. If source command is specified settings as configured in the buffer module will be used for the buffer
         * operation unless bufferDisance and bufferUnit are explicitly set.
         */
        sourceCommand?: string;
        /**
         * The id for the buffer operation. Can be used to track buffer events and compare them with original requests.
         */
        bufferId?: string;
        /**
         * The spatial reference to buffer in.
         */
        bufferSpatialReference?: esri.SpatialReference;
        /**
         * The spatial reference to return the geometries in.
         */
        outSpatialReference?: esri.SpatialReference;
        /**
         * Whether or not geodesic measurements should be applied for buffering. If the input coordinate system is geographic, this must be set to true.
         */
        geodesic?: boolean;
        /**
         * Whether or not to union the results as a single geometry. Might be multipart.
         */
        unionResults?: boolean;
        /**
         * The callback to fire on successful completion of the buffer operation.
         */
        callback?: (results: BufferOperationResult) => void;
        /**
         * The callback to fire on buffering error.
         */
        errback?: (error: BufferOperationResult) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer {
    /**
     * Interface for the BufferDistanceChangedEvent event arguments
     */
    interface BufferDistanceChangedEventArgs {
        /**
         * The currently set distance for buffering.
         */
        distance: number;
        /**
         * The currently selected buffering unit description.
         */
        unit: BufferUnitDesc;
        /**
         * The target commands to which these buffer settings will apply.
         */
        targetCommands: string[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer {
    /**
     * interface for the BufferGeometriies command argument.
     */
    interface BufferGeometriesArgs extends BufferArgsBase {
        /**
         * The array of input geometries to buffer.
         */
        geometries: esri.geometry.Geometry[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer {
    /**
     * Interface for the BufferGeometry command argument.
     */
    interface BufferGeometryArgs extends BufferArgsBase {
        /**
         * The input geometry to buffer.
         */
        geometry: esri.geometry.Geometry;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer {
    /**
     * Interface for the error object returned on a buffer operation error.
     */
    interface BufferOperationError extends BufferResultBase {
        /**
         * The javascript error object returned on error.
         */
        error: Error;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer {
    /**
     * Interface for the results returned on a successful buffer operation.
     */
    interface BufferOperationResult extends BufferResultBase {
        /**
         * The buffered geometry returned on successful completion of a BufferGeometry operation.
         */
        geometry?: esri.geometry.Geometry;
        /**
         * The array of buffered geometries returned on successful completion of a BufferGeometries operation.
         */
        geometries?: esri.geometry.Geometry[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer {
    /**
     * Base interface for the results returned on either a succesful or unsuccesful BufferGeometry or BufferGeometries operation.
     */
    interface BufferResultBase {
        /**
         * The buffer id if defined in the BufferGeometry(ies) input argument object.
         */
        bufferId?: string;
        /**
         * The source command, if any, that invoked the buffer operation for which this object represents the result.
         */
        sourceCommand?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer {
    /**
     * Interface for the buffer unit descriptions used for buffering.
     */
    interface BufferUnitDesc {
        /**
         * The configured display name for this buffer unit.
         */
        displayName: string;
        /**
         * The string representing the configuration for this unit. Currently supported values are "feet", "meter", kilometer", "mile",
         * "nauticalmile" and "yard".
         */
        config: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer {
    /**
     * Interface representing the currently supported buffer units supported by the buffer module.
     */
    interface BufferUnits {
        /**
         * Unit description for 'Feet".
         */
        feet?: BufferUnitDesc;
        /**
         * Unit description for "Yard".
         */
        yard?: BufferUnitDesc;
        /**
        * Unit description for "Meter".
        */
        meter?: BufferUnitDesc;
        /**
         * Unit description for "Kilometer".
         */
        kilometer?: BufferUnitDesc;
        /**
         * Unit description for "Mile".
         */
        mile?: BufferUnitDesc;
        /**
         * Unit description for "Nautical Mile".
         */
        nauticalmile?: BufferUnitDesc;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    class AttributeGroup {
        /**
         * An attribute map that maps the name of an attribute to the value
         * @type Map object that represents a collection of attributes
         */
        attributes: {
            [key: string]: any;
        };
        /**
         * The source of this attribute group. Used if we need to resolve additional information, such as namings
         * @type Object the instance of the original owner of this set of attributes
         */
        owner: any;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    class DataLinkingResult {
        /** @private This is used for lazy loading of an attributes group. */
        private _attributeGroup;
        /**
         * This references the original datalink that was used to create this object
         * @type DataLink
         */
        dataLink: Observable<geocortex.essentials.DataLink>;
        /**
         * This is the raw data from a datalinking request. This contains columns and rows.
         * @type Object
         */
        table: Observable<any>;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.DataLinkingResult} class.
         */
        constructor();
        /**
         * Converts the table of the datalink to a basic attribute map.
         */
        toAttributes(): any;
        /**
         * Returns a copy of this datalink in an attribute group form.
         */
        asAttributeGroup(): AttributeGroup;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    class FeatureAttribute implements infrastructure.ui.components.Table.TableColumnViewModelInterface {
        /**
         * The name of the attribute.
         * @type String
         */
        name: Observable<string>;
        /**
         * The alias name of the attribute.
         * @type String
         */
        alias: Observable<string>;
        /**
         * The display name of the attribute.
         * @type String
         */
        displayName: Observable<string>;
        /**
         * The value of the attribute.
         * @type Number, String, or Date
         */
        value: Observable<any>;
        /**
         * The processed value that takes the type of the attribute into account for display purposes
         * @type String
         */
        presentableValue: framework.ui.LazyObservable<string>;
        /**
         * Specifies whether or not the attribute should be displayed (visible).
         * @type Boolean
         */
        visible: Observable<boolean>;
        /**
         * Specifies the incoming type that the value should be considered. A value of this type is available in the presentableValue property
         * @type String
         */
        type: Observable<string>;
        /**
         * Indicates whether this value should be rendered as a hyperlink.
         */
        displayAsUrl: boolean;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureAttribute} class.
         * @class
         * <p>Represents a Geocortex Essentials FeatureAttribute.</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure
         * @param value The value of the attribute.
         * @param name The name of the attribute.
         * @param alias The alias name of the attribute.
         * @param displayName The display name of the attribute.
         */
        constructor(value?: any, name?: string, alias?: string, displayName?: string, visible?: boolean, presenterDelegate?: (value: string) => () => string, dataType?: string);
        /**
         * Matches attribute names generated by SEP that should not be visible.
         */
        static ignoreAttribute(name: any): boolean;
        private static ignoreAttributeMatcher;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /**
     * Pre-defined format specifiers for use with formatDate().
     */
    class DateFormat {
        /**
         * A localized representation of a date (e.g. "09/04/1986" for en-US locale).
         */
        static DATE_SHORT: string;
        /**
         * A localized long representation of a date (e.g. "September 4 1986" for en-US locale).
         */
        static DATE_LONG: string;
        /**
         * A localized short representation of the time (e.g. "8:30 PM" for en-US locale).
         */
        static TIME_SHORT: string;
        /**
         * A localized representation of the time including seconds (e.g. "8:30:25 PM" for en-US locale).
         */
        static TIME_LONG: string;
        /**
         * A localized representation of date and time (e.g. "Sep 4 1986 8:30 PM" for en-US locale).
         */
        static DATE_TIME_SHORT: string;
        /**
         * A localized long representation of date and time (e.g. "September 4 1986 8:30 PM" for en-US locale).
         */
        static DATE_TIME_LONG: string;
        /**
         * A localized full representation of date and time, including day of week (e.g. "Thursday, September 4 1986 8:30 PM" for en-US locale).
         */
        static FULL: string;
        /**
         * The date and time in ISO-8601 format (e.g. "2014-09-08T08:02:17-05:00"). Invariant.
         */
        static ISO_8601: string;
        /**
         * An invariant representation of a date. Guarantees that the date can be parsed back into the same date, regardless of locale.
         * Equivalent to ISO-8601.
         */
        static ROUND_TRIP: string;
        /**
         * The default representation for date values (equivalent to DATE_TIME_SHORT).
         */
        static DEFAULT: string;
        /**
         * The default set of formats used for parsing date values.
         */
        static DEFAULT_PARSING_FORMATS: string[];
    }
    /**
     * Pre-defined format specifiers for use with formatNumber().
     */
    class NumberFormat {
        /**
         * A localized representation of a number with a decimal separator and group separators (e.g. "12,345.67", "-42" for en-US locale).
         */
        static NUMBER: string;
        /**
         * A localized representation of a number with a decimal separator (e.g. "12345.67", "-42" for en-US locale).
         */
        static FIXED_POINT: string;
        /**
         * A localized representation of a monetary amount in a specific currency (e.g. "$123.45" for USD, "£123.45" for GBP for en-US locale).
         */
        static CURRENCY: string;
        /**
         * Same as CURRENCY, except that negative values are displayed in parentheses instead of using a "-" sign.
         */
        static ACCOUNTING: string;
        /**
         * A localized representation of a percentage (e.g. 0.99 -> "99%" in the en-US locale).
         */
        static PERCENT: string;
        /**
         * An invariant representation of a number (e.g. "12345.67"). Guarantees that the number can be parsed back
         * into the same number, regardless of locale.
         */
        static ROUND_TRIP: string;
        /**
         * The default representation for number values (equivalent to FIXED_POINT).
         */
        static DEFAULT: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.FormatUtils {
    /**
     * Formats a value for display in the current locale.
     * @param value The value to format.
     */
    function format(value: any): string;
    /**
     * Formats a date for display in the current locale.
     * @param date The date to format.
     * @param format One of the {@link DateFormat} constants, or a custom format string.
     *     The format string syntax is similar to this: https://msdn.microsoft.com/en-us/library/8kb3ddd4.aspx,
     *     with the following exceptions:
     *         - "/", and ":" are treated as literal characters.
     *         - "y" is treated as "yy", and "yyy" is treated as "yyyy".
     *         - "z" and "zz" are treated the same as "zzz".
     *         - "t" is treated the same as "tt".
     *         - "F", "FF", "FFF" etc. will behave the same as "f", "ff", "fff", etc.
     *           Additionally, a maximum of 3 digits (milliseconds) is supported. Longer
     *           formatters like "fffff" are truncated to 3 digits, rather than padded with zeros.
     *         - "g", "gg", and "K" are not supported at all and will be ignored.
     *     The default format is DATE_TIME_SHORT.
     */
    function formatDate(date: Date, format?: string): string;
    /**
     * Formats a date for display in the current locale using relative time.
     * @param date The date to format.
     */
    function formatDateFromNow(date: Date): string;
    /**
      * Formats a number for display using the application's current locale.
      * @param num The number to format.
      * @param format One of the {@link NumberFormat} constants, or a custom format string.
      *     The format string syntax is similar to this: https://msdn.microsoft.com/en-us/library/0c899ak8.aspx,
      *     with the following exceptions:
      *         - The per-mille placeholder (‰) is not supported.
      *         - Exponential notation is not supported.
      *         - Literal characters appearing in the middle of a number will not work properly (e.g "00ABC0.##").
      * @param options Additional options that further control how numbers are formatted. These only apply
      *     when using one of the pre-defined constants, NOT for custom formats. Options are:
      *         - currency: The 3-letter ISO 4217 currency code (e.g "USD", "CAD"). Required when formatting
      *           a number using NumberFormat.CURRENCY or NumberFormat.ACCOUNTING.
      *         - fractionalDigits: The number of digits to show after the decimal point. If unspecified, an
      *           appropriate value is determined based on the locale and currency.
      */
    function formatNumber(num: number, format?: string, options?: {
        currency?: string;
        fractionalDigits?: number;
    }): string;
    /**
     * Parses a value into a Date object, using the application's current locale. The input is assumed to be in local time.
     * See also {@link parseUtcDate()}.
     * @param input The input to parse. Numbers are treated as UNIX timestamps (always UTC).
     * @param format The format that string input is expected to be in. Can be either a single format, or one of several
     *     possible formats. Formats are either one of the {@link DateFormat} constants, or custom format strings
     *     (as per {@link formatDate()}).
     * @return A Date object corresponding to the input, which might be an Invalid Date (i.e. getTime() will be NaN).
     */
    function parseDate(input: any, format?: string | string[]): Date;
    /**
     * Parses a value into a Date object, using the application's current locale. The input is assumed to be in UTC.
     * See also {@link parseDate()}.
     * @param input The input to parse. Numbers are treated as UNIX timestamps.
      * @param format The format that string input is expected to be in. Can be either a single format, or one of several
     *     possible formats. Formats are either one of the {@link DateFormat} constants, or custom format strings
     *     (as per {@link formatDate()}).
     * @return A Date object corresponding to the input, which might be an Invalid Date (i.e. getTime() will be NaN).
     */
    function parseUtcDate(input: any, format?: string | string[]): Date;
    /**
     * Parses a value into a number, using the application's current locale.
     * @param input The input to parse.
     */
    function parseNumber(input: any): number;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    class PresentableDelegateFactory {
        static typeIdForLayerAndAttributes(layer: esri.layers.FeatureLayer, attributes: any): any;
        static typeFromLayerAndId(layer: esri.layers.FeatureLayer, id: any): esri.layers.FeatureType;
        static makeValueTruthy(value: any): any;
        static valuePresenterDelegate(field: string | essentials.Field | gis.FieldInfo, feature: Feature): (value: any) => () => string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    class AttachmentInfo {
        /**
         * The id of the attachment.
         * @type Number
         */
        id: Observable<number>;
        /**
         * The content type of the attachment file.
         * @type String
         */
        contentType: Observable<string>;
        /**
         * The size of the attachment.
         * @type Number
         */
        size: Observable<number>;
        /**
         * The name of the attachment.
         * @type String
         */
        name: Observable<string>;
        /**
         * The url to retrieve the attachment.
         * @type String
         */
        url: Observable<string>;
        /**
         * Initializes a new instance of the {@link AttachmentInfo} class.
         */
        constructor();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    class ProjectArgs {
        /**
         * The spatial reference of the output object.
         * @type SpatialReference
         */
        outputSpatialReference: esri.SpatialReference;
        /**
        * The array of geometries that need to be projected.
        * @type Geometry[]
        */
        geometries: esri.geometry.Geometry[];
        /**
         * The well-known id {wkid:number} or well-known text {wkt:string} or for the datum transformation to be applied on the projected geometries.
         * If a transformation is specified a value must also be specified for the transformForward property.
         * If a transformation is not specified, a default GeoTransformation is used.
         * @type Object
         */
        transformation: {
            wkid?: number;
            wkt?: string;
        };
        /**
         * The function to call when the method has completed. The arguments in the function are the same as the onProjectComplete event.
         * @type Function
         */
        callback: (geometries: esri.geometry.Geometry[]) => void;
        /**
         * An error object is returned if an error occurs on the Server during task execution.
         * @type Function
         */
        errback: (error: Error) => void;
        /**
          * Initializes a new instance of the {@link ProjectArgs} class.
          * @param geometries The geometries.
          * @param outputSpatialReference The Spatial Reference for the output.
          * @param callback The success handler.
          * @param errback The error handler.
          * @param transformation The optional transformation.
          */
        constructor(geometries: esri.geometry.Geometry[], callback: (geometries: esri.geometry.Geometry[]) => void, errback: (error: Error) => void, outputSpatialReference?: esri.SpatialReference, transformation?: {
            wkid?: number;
            wkt?: string;
        });
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.MapUtils {
    /**
     * Scales the ESRI map's extent by the given factor
     * @param map The ESRI map
     * @param factor The factor by which the map's extent need to be scaled
     * @param zoomFromExtent Value of initial extent of the map
     * @return Value of the new scaled extent
     */
    function stepZoom(map: esri.Map, factor: number, zoomFromExtent: esri.geometry.Extent): esri.geometry.Extent;
    /**
     * Safely scales the ESRI map's extent by the given factor with the given priority and name
     * @param map The Essentials map
     * @param factor The factor by which the map's extent need to be scaled
     * @param zoomFromExtent Value of initial extent of the map
     * @param startupPriority The priority of this extent change if called while the map is still loading
     * @param generalPriority The priority of this extent change if called after the map has loaded
     * @return Value of the new scaled extent
     */
    function stepZoomWithPriority(site: geocortex.essentials.Site, factor: number, zoomFromExtent: esri.geometry.Extent, startupPriority?: number): esri.geometry.Extent;
    /**
     * Gets the current extent of the given geometry
     * @param geometry The ESRI geometry whose extent is to be returned
     * @return Extent of the given geometry
     */
    function getExtent(geometry: esri.geometry.Geometry): esri.geometry.Extent;
    /**
     * Pans to the given geometry after apply a projection if required.
     * @param app The application which contains the map to pan
     * @param geometry The ESRI geometry which the map should be panned to
     * @param startupPriority The priority of this extent change if called while the map is still loading
     * @param generalPriority The priority of this extent change if called after the map has loaded
     */
    function panToPointWithPriority(app: geocortex.essentialsHtmlViewer.ViewerApplication, geometry: esri.geometry.Geometry, startupPriority: number, showMap: boolean): void;
    /**
     * Zooms to the given extent after applying a projection if required.
     * @param app The application which contains the map
     * @param extent The ESRI extent which the map should zoom to
     * @param showMap A boolean indicating if the map should be shown before performing the extent change
     */
    function zoomToExtent(app: geocortex.essentialsHtmlViewer.ViewerApplication, extent: esri.geometry.Extent, showMap: boolean): void;
    /**
     * Zooms to the given extent with the specified priority after applying a projection if required.
     * @param app The application which contains the map to pan
     * @param extent The ESRI extent which the map should zoom to
     * @param startupPriority The priority of this extent change if called while the map is still loading
     */
    function zoomToExtentWithPriority(app: geocortex.essentialsHtmlViewer.ViewerApplication, extent: esri.geometry.Extent, startupPriority: number, showMap: boolean): void;
    /**
     * This function will only be effective when the map has a tiled base map layer. In such cases, simply determining the scale at which a
     * layer is visible may not be sufficient as this scale may fall between two LOD scale ranges. In such cases, esri will choose the LOD with the nearest scale
     * to zoom to - but the layer may NOT be visible at that scale. This function fetches the scale of the nearest LOD (either less than or more than the specified scale)
     * at which the layer will be visible.
     * @param mode An enum which can be either "lessThan" or "greaterThan"
     * @param scale The target scale
    *  @return The nearest LOD with scale less than or more than (depending on mode) the target scale OR the input scale if a tiled base map is not added to the map
    */
    function getClosestScale(map: esri.Map, mode: ScaleChangeMode, scale: number): number;
    enum ScaleChangeMode {
        LessThan = 0,
        GreaterThan = 1,
    }
    function cloneEsriFeature(feature: esri.Graphic): esri.Graphic;
    function esriFeatureAttributesEqual(attributes1: any, attributes2: any, fieldsToIgnore?: string[]): boolean;
    function esriFeaturesEqual(graphic1: esri.Graphic, graphic2: esri.Graphic): boolean;
    function esriGeometriesEqual(g1: esri.geometry.Geometry, g2: esri.geometry.Geometry): boolean;
    function compareTypeSR(g1: esri.geometry.Geometry, g2: esri.geometry.Geometry): boolean;
    function esriPointsEqual(thisGeom: esri.geometry.Point, oGeom: esri.geometry.Point): boolean;
    function esriMultipointsEqual(thisGeom: esri.geometry.Multipoint, oGeom: esri.geometry.Multipoint): boolean;
    function esriPolylinesEqual(thisGeom: esri.geometry.Polyline, oGeom: esri.geometry.Polyline): boolean;
    function esriPolygonsEqual(thisGeom: esri.geometry.Polygon, oGeom: esri.geometry.Polygon): boolean;
    function esriExtentsEqual(thisGeom: esri.geometry.Extent, oGeom: esri.geometry.Extent): boolean;
    /**
     * Finds a feature on a given layer using structural comparison.
     * @param feature The esri.Graphic to find.
     * @param layer The feature layer to search.
     */
    function findFeatureInLayer(feature: esri.Graphic, layer: esri.layers.FeatureLayer): esri.Graphic;
    /**
     * Finds a feature on the map. This method is crucial for dealing with OnDemand layers, as feature instances
     * obtanined from OnDemand layers becomed detached from the map and we often need to re-attach to the "fresh"
     * instance of a feature.
     * @param feature The esri.Graphic to find.
     * @param site The Site, containing the map.
     * @param layerHint A layer possibly containing the feature, to search first.
     */
    function findFeatureInMap(feature: esri.Graphic, site: geocortex.essentials.Site, layerHint?: esri.layers.FeatureLayer): esri.Graphic;
    /**
     * Get an image URI for the thumbnail. Can be a hosted image or a data URI.
     * @param app The application which contains the map to create a thumbnail for.
     * @param extent The extent to create the thumbnail for. Defaults to the maps current extent.
     * @param width The width of the thumbnail.
     * @param height The height of the thumbnail.
     * @param dpi The DPI to use for the thumbnail resolution.
     * @return A promise of the thumbnail.
     */
    function getThumbnailUri(app: ViewerApplication, extent?: esri.geometry.Extent, width?: number, height?: number, dpi?: number): Promise<string>;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    interface FeatureOptions {
        graphic?: esri.Graphic;
        layer?: geocortex.essentials.Layer;
        featureLayer?: esri.layers.FeatureLayer;
        resolveLayerFields?: boolean;
        allowUnsafeContent?: boolean;
        timeZoneId?: string;
        displayTimeZoneId?: string;
    }
    interface NameValueProperty {
        name: string;
        value: any;
    }
    /**
     * Observable view model for an ESRI Feature.
     */
    class Feature implements infrastructure.ui.components.Table.TableRowViewModelInterface {
        private _graphic;
        /**
         * Indicate if attachment infos are initialized
         * @private
         */
        private _isAttachmentInfosLoaded;
        /**
         * Default format to render the fields
         * @private
         */
        private _defaultFieldFormatString;
        /**
        * The token that should uniquely identify this feature for a specific application instance and run
        * @type AlphaNumeric token that *should* uniquely identify this feature
        */
        token: string;
        /**
         * The Layer this Feature is a part of.
         * @type geocortex.essentials.Layer
         */
        layer: geocortex.essentials.Layer;
        /**
         * The esri feature layer associated with the feature.
         */
        featureLayer: esri.layers.FeatureLayer;
        /**
         * The FeatureSet this Feature is a part of.
         * @type FeatureSet
         */
        featureSet: FeatureSet;
        /**
         * The label format this Feature uses to render a label.
         * @type String
         */
        labelFormat: framework.ui.LazyObservable<string>;
        /**
         * The configured min scale of the Feature.
         * @type Number
         */
        minScale: framework.ui.LazyObservable<number>;
        /**
         * The configured max scale of the Feature.
         * @type Number
         */
        maxScale: framework.ui.LazyObservable<number>;
        /**
         * The zoom scale of the Feature.
         * @type Number
         */
        zoomScale: framework.ui.LazyObservable<number>;
        /**
         * The zoom factor of the Feature.
         * @type Number
         */
        zoomFactor: framework.ui.LazyObservable<number>;
        /**
         * The zoom extent of the Feature.
         * @type Extent
         */
        zoomExtent: Observable<esri.geometry.Extent>;
        /**
         * The border color of the Feature.
         * @type String
         */
        borderColor: framework.ui.LazyObservable<number[]>;
        /**
         * The fill color of the Feature.
         * @type String
         */
        fillColor: framework.ui.LazyObservable<number[]>;
        /**
         * The id of the Feature.
         * @type Number
         */
        id: framework.ui.LazyObservable<string>;
        /**
         * The attributes for the Feature.
         * @type FeatureAttribute[]
         */
        attributes: ObservableCollection<FeatureAttribute>;
        /**
         * The label for the Feature.
         * @type String
         */
        label: framework.ui.LazyObservable<string>;
        /**
         * The plain label for the Feature, stripped of any HTML.
         * @type String
         */
        plainLabel: framework.ui.LazyObservable<string>;
        /**
         * The description for the Feature.
         * @type String
         */
        description: framework.ui.LazyObservable<string>;
        /**
         * The description format this Feature uses to render a description.
         * @type String
         */
        descriptionFormat: framework.ui.LazyObservable<string>;
        /**
         * The long description for the Feature.
         * @type String
         */
        longDescription: framework.ui.LazyObservable<string>;
        /**
         * The long description format this Feature uses to render a long description.
         * @type String
         */
        longDescriptionFormat: framework.ui.LazyObservable<string>;
        /**
         * The hyperlinks associated with the feature (if any)
         * @type FeatureHyperlink[]
         */
        hyperlinks: ObservableCollection<geocortex.essentials.FeatureHyperlink>;
        /**
         * The extended properties for the Feature.
         * @type Array
         */
        extendedProperties: ObservableCollection<NameValueProperty>;
        /**
         * Get the attachment infos associated with the feature.
         * @type ObservableCollection
         */
        attachmentInfos: ObservableCollection<AttachmentInfo>;
        /**
         * Indicates that the attachmentInfos collection has been initialized.
         * @type Observable
         */
        attachmentInfosInitialized: Observable<boolean>;
        /**
         * Gets a value indicating whether the feature has attachments.
         * @type Boolean
         */
        hasAttachments: Observable<boolean>;
        /**
         * Gets a value indicating whether the feature has relationships.
         * @type Boolean
         */
        hasRelationships: Observable<boolean>;
        /**
         * Gets a value indicating whether the feature has visible relationships.
         * @type Boolean
         */
        hasVisibleRelationships: Observable<boolean>;
        /**
         * Gets a value indicating whether the feature has geometry attached.
         * @type Boolean
         */
        hasGeometry: framework.ui.LazyObservable<boolean>;
        /**
         * Gets a value indicating whether the feature has a valid geometry attached.
         * @type Boolean
         */
        hasValidGeometry: framework.ui.LazyObservable<boolean>;
        /**
         * Gets the Esri feature attached to the Geocortex feature.
         * @type esri.Graphic
         */
        esriFeature: Observable<esri.Graphic>;
        /** Observable public members - Layer config overrides */
        iconUri: framework.ui.LazyObservable<string>;
        /** linked data associated with a feature's linked attributes */
        linkedAttributes: ObservableCollection<AttributeGroup>;
        /** the features related data links */
        dataLinkingResults: ObservableCollection<DataLinkingResult>;
        /** The default format to use for displaying number fields that have no explicit format. */
        defaultNumberFormat: string;
        /** The default format to use for displaying date fields that have no explicit format. */
        defaultDateFormat: string;
        /** Whether the feature attribute data has been locally modified. */
        isModified: boolean;
        /** The IANA ID of the time zone in which this feature's field data are current.
          * Primarily used as a fallback when the FieldInfo object cannot access the appropriate ID.
          */
        timeZoneId: string;
        /** The IANA ID of the time zone in which this feature's field data will be displayed.
          * Primarily used as a fallback when the FieldInfo object cannot access the appropriate ID.
          */
        displayTimeZoneId: string;
        /**
         * Indicates if unsafe web content is allowed for rendering or not
         * @private
         */
        private _allowUnsafeContent;
        /**
         * Indicates if layer fields are to be resolved or not
         */
        private _resolveLayerFields;
        private _attributeValueBindingTokens;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature} class.
         * @class
         * <p>Represents a Geocortex Essentials Feature.</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure
         * @param options The options for the new Feature. (i.e. graphic / layer / resolveLayerFields / allowUnsafeContent)
         */
        constructor(options?: FeatureOptions);
        /**
         * Finds the extended property matching the specified name.
         * @param name The name of the property to find.
         */
        getExtendedPropertyByName(name: string): any;
        /**
         * Sets the extended property matching the specified name.
         * @param name The name of the property to update.
         * @param value The property value.
         */
        setExtendedProperty(name: string, value: any): void;
        /**
         * Connect the delegate functions that back the LazyObservables.  Most of
         * these don't cache but they could easily.
         */
        private connectDelegates();
        /**
         * Determines if the specified scale is within this layer's min and max scale.
         * @param scale The scale value to test if it is between this layer's min and max scale.
         * If a value is not provided for this parameter, then the map's current scale value will
         * be used.
         */
        withinScaleRange(scale: number): boolean;
        /**
         * Calculates a scale at which the layer would be visible if it's not already.
         * @param scale The scale
         * @return The scale at which the layer is visible, calculated to zoom in or out just enough such that the layer would be visible.  If the layer is already visible, the current map scale is returned.
         */
        calculateScaleToMakeVisible(scale: number): number;
        /**
         * Ensures that a field name can't be used for injection attacks when used to form a field token.
         * @param fieldName The field name to sanitize.
         */
        private _sanitizeFieldName(fieldName);
        /**
         * @private Returns the default field value
         */
        private _getDefaultFieldValue();
        /**
         * @private Prepare the attachments
         * @param resolveLayerFields Whether or not we should attempt to resolve the layers fields. Defaults to true.
         */
        private _prepAttachmentInfos();
        /**
         * Load the feature attributes with proper naming
         * @param resolveLayerFields Whether or not we should attempt to resolve the layers fields. Defaults to true.
         */
        loadAttributes(resolveLayerFields: boolean): void;
        /**
         * Takes a collection of attributes from an Esri Graphic (feature) and returns a collection of feature attributes with the proper naming.
         * @param attributes attribute Collection of name value pairs to which we will attempt to resolve names using this feature
         * @param resolveLayerFields Whether or not we should attempt to resolve the layers fields. Defaults to true.
         */
        getAttributesFromEsriFeature(attributes: any[], resolveLayerFields?: boolean): FeatureAttribute[];
        /**
         * Returns a set of all of the attributes associated with this feature
         * @param resolveLayerFields boolean: Whether we should look at the layers fields to resolve the names.
         * @return array an of FeatureAttribute objects where we have attempted to resolve the names using this feature
         */
        getAttributes(resolveLayerFields?: boolean): FeatureAttribute[];
        /**
         * Gets the value of the primary key field (ObjectID)
         * @return {Object} Value of the primary key field.
         */
        getPrimaryKeyValue(): string;
        /**
         * Gets the Url to the feature.
         * @return {String} Url to the Esri feature.
         */
        getFeatureUrl(): string;
        /**
         * Gets the feature's type as defined by its feature layer.
         */
        getType(): esri.layers.FeatureType;
        /**
         * Determines whether a Geocortex essentials feature is structurally equal to the current instance.
         *
         *     Structural equality means that two objects are equal because they have equal values.
         *     It differs from reference equality, which indicates that two object references are equal because they reference the same physical object.
         *     Note: This comparison does not take geometry into account
         *
         * @param o: The Geocortex essentials feature to compare with the current instance.
         * @returns `true` if the two objects are equal; otherwise, `false`.
         */
        structurallyEquals(o: Feature): boolean;
        /**
         * Checks if the given Geocortex essentials feature is equal to this feature
         * @param o: A Geocortex essentials feature to be compared
         */
        equals(o: Feature): boolean;
        /** @private Load the attachment infos asynchronously */
        private _loadAttachmentsInfos();
        /** The method formatTemplateString was made public to be consistent with silverlight viewer.
        * It is used by Hyperlink class "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.Hyperlink". */
        formatTemplateString(template: string): string;
        /**
         * Process the fieldName into a dataLink/attributeName pair
         * @param fieldName String containing the value of datalink ID and attribute name
         * @param result Empty map object used to store the datalink ID and attribute name
         */
        parseDataLinkId(fieldName: string, result: any): boolean;
        /**@private */
        protected _getLayerUniqueId(): string;
        private _setupLinkedAttributes();
        private _refreshPresentableValues();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /** A special property added to an esri feature to indicate that it came from a KML service. */
    const isKmlProperty: string;
    /**
     * A {@link Feature} belonging to a KML service.
     */
    class KmlFeature extends Feature {
        constructor(options?: FeatureOptions);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    enum DataLinksState {
        Unresolved = 0,
        Resolving = 1,
        Resolved = 2,
    }
    interface FeatureSetOptions {
        esriFeatureSet?: esri.tasks.FeatureSet;
        layer?: geocortex.essentials.Layer;
        featureLayer?: esri.layers.FeatureLayer;
        allowUnsafeContent?: boolean;
        app?: geocortex.framework.application.Application;
        defaultNumberFormat?: string;
        defaultDateFormat?: string;
    }
    class FeatureSet {
        /**
         * The {@link geocortex.framework.application.Application} that this module belongs to.
         */
        app: geocortex.framework.application.Application;
        /**
         * An id of this feature set
         * @type String
         */
        id: string;
        /**
         * Set of ESRI features
         * @type esri FeatureSet
         */
        esriFeatureSet: esri.tasks.FeatureSet;
        /**
         * The Layer this FeatureSet is a part of.
         * @type geocortex.essentials.Layer
         */
        layer: geocortex.essentials.Layer;
        /**
        * The esri feature layer containing metadata about the feature attributes.
        */
        featureLayer: esri.layers.FeatureLayer;
        /**
         * An id guaranteed to be unique (auto-generated).
         * @type String
         */
        uniqueId: string;
        /**
         * The display name to be associated with this FeatureSet. Get display name from layer if not explicitly set.
         * @type String
         */
        displayName: framework.ui.LazyObservable<string>;
        /**
         * The collection of Geocortex Features.
         * @type ObservableCollection
         */
        features: ObservableCollection<Feature>;
        /**
         * The collection of feature attributes
         * @type ObservableCollection
         */
        attributes: ObservableCollection<FeatureAttribute>;
        /**
         * The icon associated with this featureSet. If not explicitly set, obtain from layer if available
         * @type String
         */
        iconUri: framework.ui.LazyObservable<string>;
        /**
         * More properties of feature set
         * @type ObservableCollection
         */
        extendedProperties: ObservableCollection<NameValueProperty>;
        /**
         * Only used by a particular view model.  This should be refactored out.
         */
        isSelectedInCollection: Observable<boolean>;
        /**
         * Whether the datalinks (if any) for this feature set have been resolved.
         */
        dataLinksResolved: Observable<boolean>;
        /** The default format to use for displaying number fields that have no explicit format. */
        defaultNumberFormat: string;
        /** The default format to use for displaying date fields that have no explicit format. */
        defaultDateFormat: string;
        /**
         * @private Indicates if unsafe web content is allowed for rendering or not
         * @type boolean
         */
        private _allowUnsafeContent;
        /** Keeps track of objectIds to ensure we there aren't duplicate features in this FeatureSet */
        private _objectIds;
        private _watchHandles;
        private _dataLinksState;
        /**
         * Indicates the current state with regard to resolving data links.
         */
        dataLinksState: DataLinksState;
        protected setDataLinksState(value: DataLinksState): void;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSet} class.
         * @class
         * <p>Represents a Geocortex Essentials FeatureSet.</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure
         * @param options The options for the new FeatureSet (i.e. esriFeatureSet / layer / allowUnsafeContent).
         */
        constructor(options?: FeatureSetOptions);
        /**
         * Finds the extended property matching the specified name.
         * @param name The name of the property to find.
         */
        getExtendedPropertyByName(name: string): any;
        /**
         * Sets the extended property matching the specified name.
         * @param name The name of the property to update.
         * @param value The property value.
         */
        setExtendedProperty(name: string, value: any): void;
        /**
         * Adds a feature to this FeatureSet.
         * @param feature The feature to add to the featureSet.
         * @param doNotCheckForDuplicates When `true`, the supplied feature will be added to this set without checking for duplicates. The default value is `false`.
         */
        addFeature(feature: Feature, doNotCheckForDuplicates?: boolean): boolean;
        protected _addFeatureWithoutNotification(feature: Feature, doNotCheckForDuplicates?: boolean): boolean;
        /**
         * Removes a feature from this FeatureSet.
         *
         *     This method determines equality by using the default equality comparer for features, as defined in {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature.equals}().
         *     This method performs a linear search; therefore, this method is an O(n) operation, where n is the number of features.
         *
         * @param feature The feature to remove.
         * @return `true` if item was successfully removed; otherwise, `false`. This method also returns `false` if item is not found.
         */
        removeFeature(feature: Feature): boolean;
        protected _removeWithoutNotificationAt(index: number): boolean;
        /**
         * Determines whether a feature is in this FeatureSet.
         *
         *     This method determines equality by using the default equality comparer for features, as defined in {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature.equals}().
         *     This method performs a linear search; therefore, this method is an O(n) operation, where n is the number of features.
         *
         * @param feature The feature to locate in the FeatureSet.
         * @return `true` if feature is found in the FeatureSet; otherwise, `false`.
         */
        containsFeature(feature: Feature): boolean;
        /**
         * Removes all features from this FeatureSet.
         */
        clearFeatures(): void;
        /**
         * Load the geometries for the specified features (if not already loaded).
         * If null is passed in, the geometries for all features will be fetched.
         * @param features An array of features to load geometries for.
         * @param successCallback Function to be called when the geometries have been loaded.
         * @param errorCallback A function that is called if an error occurred.
         * @return {dojo.Deferred}
         */
        loadGeometries(features: Feature[], successCallback?: () => void, errorCallback?: (error: Error) => void): dojo.Deferred;
        /**
         * Finds the Geocortex feature having the given ID (primary key value).
         * @param id The ID to search for.
         * @return The Geocortex feature corresponding to the given ID if it exists, or null.
         */
        findFeatureById(id: any): Feature;
        /**
         * Finds the Geocortex feature corresponding to the given ESRI feature if it exists in the feature set.
         * There is an inherent assumption here that a Geocortex feature instance will be unique in a feature set.
         * @param esriFeature The esri graphic for which the corresponding Geocortex feature needs to be retrieved.
         * @return The Geocortex feature corresponding to the given ESRI feature, if it exists, or null.
         */
        findFeatureByEsriFeature(esriFeature: esri.Graphic): Feature;
        /**
         * Finds the ESRI features with given value of specified attribute in the given feature collection
         * @param key The value against which the features are to be checked.
         * @param keyName The name of the attribute whose value is to be compared.
         * @param collection An array of ESRI features which needs to be checked against the given value.
         * @return ESRI feature whose specified attribute's value is equal to the specified value
         * @private
         */
        private _findFeature(key, keyName, collection);
        /**
         * Loads the features from ESRI feature set
         */
        loadFeatures(): void;
        /**
         * Loads the feature attributes.
         */
        loadAttributes(): void;
        /**
         * Updates the current collection of features.
         * @params args Type of operation done on feature set.
         */
        featureSetChanged(args: framework.events.CollectionChangedArgs): void;
        /**
         * Apply the datalinks with the given featureSet, datalinks and results collection
         * @param featureSet
         * @param dataLinks The datalinks to be applied
         * @param resultsCollection
         * @param onDataLinkAddedToFeature
         * @private
         */
        protected _applyDataLinks(featureSet: FeatureSet, features: Feature[], dataLinks: any[], resultsCollection: any[], onDataLinkAddedToFeature?: (feature: Feature) => void): void;
        /**
         * Resolves the datalinks (if any) for this feature set
         * @param onDataLinkAddedToFeature Function to be called when a datalink is resolved for a given feature
         * @param honorVisible Boolean of whether or not we should only resolve visible datalinks. By default this is true.
         * @param userState A User State that will be returned to the complete and fail callbacks
         * @param onDataLinkingComplete a function that is called if the operation completes successfully
         * @param onDataLinkingFailed a function that is called if an error occurs
         */
        resolveDataLinks<T>(onDataLinkAddedToFeature?: (feature: Feature) => void, honorVisible?: boolean, userState?: T, onDataLinkingComplete?: (featureSet: FeatureSet, userState: T) => void, onDataLinkingFailed?: (featureSet: FeatureSet, error: Error, userState: T) => void): void;
        /**
         * Executes the specified callback function when the datalinking operation is completed, or immediately if the
         * datalinks are already resolved.
         * @param callback The callback function to execute when the datalinks are resolved.
         */
        doWhenDataLinkingCompleted(callback: (featureSet: FeatureSet) => void): void;
        /**
         * Adds only those features to the feature set that are not already part of the feature set.
         */
        append(featureSet: FeatureSet): void;
        /**
         * Creates a new feature set that contains all elements that are present in either the current set or in the specified feature set.
         * @param other The feature set to add elements from.
         * @return A new feature set with the items added; or a copy of the original set if all the items were already in the set.
         */
        union(other: FeatureSet): FeatureSet;
        /**
         * Modifies the current set to produce the set union of two sequences of {@link Feature}s by using the default equality comparer.
         * In other words, it adds all of the elements in the second set to this set if they're not already present.
         * @param other Set containing elements to be added to this set.
         * @return `true` if this set changed as a result of the call; `false` otherwise.
         */
        unionInPlace(other: FeatureSet): boolean;
        /**
         * Creates a new feature set that contains elements of the current set that do not appear in the second set.
         * @param other The feature set whose elements that also occur in the first set will cause those elements to be removed from the returned set.
         * @return A new feature set that contains the set difference of the elements of two sets.
         */
        subtract(other: FeatureSet): FeatureSet;
        /**
         * Modifies the current set to produce the set difference of two sequences of {@link Feature}s by using the default equality comparer to compare values.
         * The set difference of two sets is defined as the elements of the first set that do not appear in the second set.
         * Note: This method modifies this set to only keep those elements that do not appear in the second set. It does not also include those elements in the second set that do not appear in this set.
         * @param other Set containing elements to be removed from this set.
         * @return `true` if this set changed as a result of the call; `false` otherwise.
         */
        subtractInPlace(other: FeatureSet): boolean;
        /**
         * Creates a new feature set that contains elements that exist in both this set and the specified set.
         * @param other The feature set to compare to the current set.
         * @return A new feature set that contains any elements that exist in both sets.
         */
        intersect(other: FeatureSet): FeatureSet;
        /**
         * Modifies the current set to produce the set intersection of two sequences of {@link Feature}s by using the default equality comparer to compare values.
         * The intersection of two sets A and B is defined as the set that contains all the elements of A that also appear in B, but no other elements.
         * @param other Set containing elements to be retained in this set.
         * @return `true` if this set changed as a result of the call; `false` otherwise.
         */
        intersectInPlace(other: FeatureSet): boolean;
        /**
         * Performs a shallow copy of this FeatureSet, returning the cloned value.
         */
        clone(): FeatureSet;
        /**
         * Given a FeatureSet, creates a new empty one just like the original (same layer, name etc)
         * Note: This method will not copy the features within the original FeatureSet.
         */
        cloneStructure(): FeatureSet;
        protected _cloneEsriStructure(esriFeatureSet: esri.tasks.FeatureSet): esri.tasks.FeatureSet;
        protected _watchFeatureSetChanges(): dojo.RemovableHandle;
        protected _unwatchFeatureSetChanges(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    class FeatureSetCollection {
        /**
         * The id of the feature set collection.
         * @type Number
         */
        id: string;
        /**
         * The displayName for the feature set collection.
         * @type String
         */
        displayName: Observable<string>;
        /**
         * Whether the feature set collection has been modified.
         */
        isModified: Observable<boolean>;
        /**
         * The collection of feature set objects constituting the collection.
         * @type ObservableCollection<FeatureSet>
         */
        featureSets: ObservableCollection<FeatureSet>;
        /**
         * The source of the feature set collection.
         * @type String
         */
        sourceName: string;
        /**
         * The tag for the feature set collection.
         * @type String
         */
        tag: any;
        /**
         * The extended collection for the feature set collection.
         * @type Array
         */
        extendedProperties: ObservableCollection<NameValueProperty>;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection} class.
         * @class
         * <p>Represents a Geocortex Essentials FeatureSetCollection.</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure
         */
        constructor();
        /**
         * Finds the extended property matching the specified name.
         * @param name The name of the property to find.
         */
        getExtendedPropertyByName(name: string): any;
        /**
         * Sets the extended property matching the specified name.
         * @param name The name of the property to update.
         * @param value The property value.
         */
        setExtendedProperty(name: string, value: any): void;
        /**
         * Returns the FeatureSet having the specified ID, or null if none exists.
         * @param id The id of the FeatureSet to return.
         * @return FeatureSet The FeatureSet with the specified ID.
         */
        getFeatureSetById(id: string): FeatureSet;
        /**
         * Returns the FeatureSet having the specified {@link geocortex.essentials.Layer}, or null if none exists.
         * @param layer The Geocortex Layer of the FeatureSet to return.
         * @return FeatureSet The FeatureSet found, if any.
         */
        getFeatureSetByLayer(layer: geocortex.essentials.Layer): FeatureSet;
        /**
         * Searches all contained feature sets for a Geocortex feature corresponding to the specified ESRI feature, and returns it if found.
         * There is an inherent assumption here that a Geocortex feature instance will be unique among all feature sets in a feature set collection.
         * @param esriFeature The esri graphic for which the corresponding Geocortex feature needs to be retrieved.
         * @return The Geocortex feature corresponding to the given ESRI feature, if it exists, or null.
         */
        findFeatureByEsriFeature(esriFeature: esri.Graphic): Feature;
        /**
         * Returns the first Feature of the first FeatureSet, or null if none exists.
         * @return Feature The first Feature in the collection.
         */
        firstFeature(): Feature;
        /**
         * Get the number of features contained in all feature sets in this collection.
         */
        countFeatures(): number;
        /**
         * Clears the feature collection within each FeatureSet, before clearing the FeatureSet collection.
         */
        clear(): void;
        /**
         * Performs a shallow copy of this FeatureSetCollection, returning the cloned value.
         * @param deepCopy Whether to clone the FeatureSets belonging to this collection. Defaults to `false`
         */
        clone(deepCopy?: boolean): FeatureSetCollection;
        /**
         * Given a FeatureSetCollection, creates a new empty one just like the original (same layer, name etc)
         * Note: This method will not copy the feature sets within the original collection.
         */
        cloneStructure(): infrastructure.FeatureSetCollection;
        /**
         * Produces the set union of two sequences of {@link Feature}s by using the default equality comparer.
         * In other words, it adds all of the elements in the second set to this set if they're not already present.
         * @param fsc Set containing elements to be added to this set.
         * @return `true` if this set changed as a result of the call; `false` otherwise.
         */
        unionInPlace(other: FeatureSetCollection): boolean;
        unionManyInPlace(collections: FeatureSetCollection[]): boolean;
        /**
         * Produces the set difference of two sequences of {@link Feature}s by using the default equality comparer to compare values.
         * The set difference of two sets is defined as the members of the first set that do not appear in the second set.
         * Note: This method modifies this set to only keep those elements that do not appear in the second set. It does not also include those elements in the second set that do not appear in this set.
         * @param featureSet Set containing elements to be removed from this set.
         * @return `true` if this set changed as a result of the call; `false` otherwise.
         */
        subtractInPlace(other: FeatureSetCollection): boolean;
        subtractManyInPlace(collections: FeatureSetCollection[]): boolean;
        /**
         * Produces the set intersection of two sequences of {@link Feature}s by using the default equality comparer to compare values.
         * The intersection of two sets A and B is defined as the set that contains all the elements of A that also appear in B, but no other elements.
         * @param featureSet Set containing elements to be retained in this set.
         * @return `true` if this set changed as a result of the call; `false` otherwise.
         */
        intersectInPlace(other: FeatureSetCollection): boolean;
        intersectManyInPlace(collections: FeatureSetCollection[]): boolean;
        protected _generateLayerKey(mapServiceId: string, layerId: string): string;
        protected _buildLayerLookup(): Dictionary<FeatureSet>;
        protected _buildFeatureSetLookup(): Dictionary<FeatureSet>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    class FeatureSetManagerEventArgs {
        /**
         * Reference of the sender
         */
        sender: any;
        /**
         * Collection of feature sets
         */
        featureSetCollection: FeatureSetCollection;
        /**
         * ID of collection of feature sets
         */
        featureSetCollectionId: string;
        /**
         * Describes the change to the collection of feature set objects
         */
        collectionChangedEventArgs: geocortex.framework.events.CollectionChangedArgs;
        /**
         * Initializes a new instance of the {@link FeatureSetManagerEventArgs} class.
         * @param args An object consisting of 3 members: `sender`, `featureSetCollection`, and `featureSetCollectionId`.
         */
        constructor(args: {
            sender: any;
            featureSetCollection: FeatureSetCollection;
            featureSetCollectionId: string;
        });
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    class FeatureSetManager {
        /**
         * The {@link geocortex.framework.application.Application} that this module belongs to.
         */
        app: geocortex.framework.application.Application;
        /**
         * The feature set collections being managed.
         * @type FeatureSetCollection[]
         */
        featureSetCollections: ObservableCollection<FeatureSetCollection>;
        /**
         * Map of ID -> FSC.
         * @private
         */
        _featureSetCollectionsMap: {
            [id: string]: FeatureSetCollection;
        };
        /**
         * Map of FSC ID -> event token for the collection changed event.
         * @private
         */
        _collectionChangedEventMap: {
            [id: string]: string;
        };
        /**
         * Map of ID -> Open count.
         * @private
         */
        _collectionOpenCount: {
            [id: string]: number;
        };
        /**
         * Map of FSC source name -> search suggestion.
         */
        _searchSuggestions: {
            [sourceName: string]: string;
        };
        /**
         * Initializes a new instance of an {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetManager} object.
         * @class
         * <p>The central clearing-house for all system activities that create and want to expose FeatureSet instances to other areas of the system.</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure
         * @param app The {@link geocortex.framework.application.Application} that this module belongs to.
         */
        constructor(app: geocortex.framework.application.Application);
        /** @private Registers some view-related commands. */
        private _registerCommands();
        /**
         * Opens the specified collection.
         * Opening and closing a feature set collection does not actually change the behavior of the collection.  It is
         * used internally to keep track of multiple clients concurrently accessing a collection for the purposes of raising an event
         * when the collection is first opened and finally closed.
         * @param id The ID of the collection to open.
         * @return FeatureSetCollection The opened FeatureSetCollection for the id specified, or null if the FeatureSetCollection does not exist or could not be opened.
         */
        openCollection(id: string): FeatureSetCollection;
        /**
         * Closes the specified collection.
         * Opening and closing a feature set collection does not actually change the behavior of the collection.  It is
         * used internally to keep track of multiple clients concurrently accessing a collection for the purposes of raising an event
         * when the collection is first opened and finally closed.
         * @param id The ID of the collection to close.
         * @return Boolean True if the collection was successfully closed, False otherwise.
         */
        closeCollection(id: string): boolean;
        /**
         * Closes the specified collection if it's open.
         * Opening and closing a feature set collection does not actually change the behavior of the collection.  It is
         * used internally to keep track of multiple clients concurrently accessing a collection for the purposes of raising an event
         * when the collection is first opened and finally closed.
         * @param id The ID of the collection to close.
         * @return Boolean True if the collection was successfully closed (or is already closed), False otherwise.
         */
        tryCloseCollection(id: string): boolean;
        /**
         * Determines whether the specified collection is open.
         * @param id The ID of the collection to open.
         * @returns Boolean True if the collection is open, False otherwise.
         */
        isCollectionOpen(id: string): boolean;
        /**
         * Adds the specified collection to the feature set manager.
         * @param fsc The FeatureSetCollection to add.
         * @return Boolean, True if the operation was successful, false otherwise.
         */
        addCollection(fsc: FeatureSetCollection): boolean;
        /**
         * Adds the specified collection to the feature set manager.
         * @param fsc The FeatureSetCollection to add.
         * @return Boolean, True if the operation was successful, false otherwise.
         * @private
         */
        _addCollectionImpl(fsc: FeatureSetCollection): boolean;
        /**
         * Raises an event when a feature set collection is changed in feature set manager
         * @param args
         */
        handleCollectionChanged(fsc: FeatureSetCollection, args: any): void;
        /**
         * Removes the specified collection from the feature set manager.
         * @param fsc The FeatureSetCollection to remove.
         * @return Boolean, True if the operation was successful, false otherwise.
         */
        removeCollection(fsc: FeatureSetCollection): boolean;
        /**
         * Removes the specified collection from the feature set manager.
         * @param id The ID of the FeatureSetCollection to remove.
         * @return Boolean, True if the operation was successful, false otherwise.
         */
        removeCollectionById(id: string): boolean;
        /**
         * Determine whether the specified FeatureSetCollection can be removed from the manager.
         * @param fsc The FeatureSetCollection to remove.
         * @return Boolean, True if the specified FeatureSetCollection is currently managed, false otherwise.
         */
        canRemoveCollection(fsc: FeatureSetCollection): boolean;
        /**
         * Gets the specified feature set collection.
         * @param id The ID of the FeatureSetCollection to retrieve.
         * @return FeatureSetCollection, The retrieved FeatureSetCollection.
         */
        getCollectionById(id: string): FeatureSetCollection;
        /**
         * Get all feature collection ids managed by this class.
         */
        getCollectionIds(): string[];
        /**
         * Searches all contained feature set collections for Geocortex feature(s) corresponding to the specified ESRI feature, and returns all existing instances.
         * @param esriFeature The esri graphic for which the corresponding Geocortex feature(s) needs to be retrieved.
         * @return The array Geocortex features corresponding to the given ESRI feature, if they exist, or an empty array.
         */
        findFeaturesByEsriFeature(esriFeature: esri.Graphic): Feature[];
        /**
         * Adds the specified search suggestions to the feature set manager.
         * @param searchSuggestions The object containing a map of FSC source name -> search suggestion.
         */
        addSearchSuggestions(searchSuggestions: {
            [sourceName: string]: string;
        }): void;
        /**
         * Gets the specified search suggestion.
         * @param sourceName The source name of the FeatureSetCollection suggestion to retrieve.
         * @return string The retrieved search suggestion.
         */
        getSearchSuggestion(sourceName: string): string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ColorUtils {
    /**
     * Creates a color with the provided number array representation of the color, or null if one can not be created.
     * @param {Number[]} colorList A 3 or 4 element list in the order RGB or RGBA.
     * @returns {dojo.Color} color
     */
    function getColorFromList(colorList: number[]): dojo.Color;
    /**
     * Creates a color with the provided hex string of the color, or null if one can not be created.
     * @param {String} color A 6 or 8 digit hex in RGB or ARGB form.
     * @returns {dojo.Color} color
     */
    function getColorFromString(color: string): esri.Color;
    /**
     * Creates a CSS color string with the provided number array representation of the color.
     * @param colorList A 3 or 4 element list in the order RGB or RGBA.
     * @return The CSS color string or null.
     */
    function getStringFromList(colorList: number[]): string;
    /**
     * Creates a CSS color string with the provided hex string of the color.
     * @param hexColor The 6 or 8 digit hex string in RGB or ARGB form.
     * @return The CSS color string or null.
     */
    function getStringFromHex(hexColor: string): string;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /**
     * A facsimile of {@link esri.renderer.Renderer}.
     * @private
     */
    class SimpleRenderer {
        /**
         * The color scheme to fill the graphics.
         */
        fillColor: esri.Color;
        /**
         * The color scheme to draw the border of the graphics.
         */
        borderColor: esri.Color;
        /**
         * Matches a member in {@link esri.renderer.Renderer}.
         */
        defaultSymbol: esri.symbol.Symbol;
        private _pictureMarkerSymbolCache;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.SimpleRenderer} class.
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure.SimpleRenderer
         */
        constructor();
        /**
         * Returns the clone of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.SimpleRenderer} object
         * @return {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.SimpleRenderer}
         */
        clone(): SimpleRenderer;
        /**
         * Returns the ESRI symbol corresponding to the geometry of given graphic.
         * @param graphic The ESRI graphic
         * @return The ESRI symbol
         */
        getSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
        /**
         * Some feature layer graphics have a hidden GraphicsLayer that
         * can be used to better inform the highlight shape.  This is pretty hacky.
         */
        getSymbolWithHacks(graphic: esri.Graphic, layer: esri.layers.GraphicsLayer): esri.symbol.Symbol;
        private _getPictureMarkerSymbolHighlight(symbol);
        toJson(): any;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /**
     * Represents the saved project state for the highlight manager.
     */
    interface HighlightManagerState extends project.ModuleState {
        /**
         * The set of highlight layers, keyed by name (as passed to createHighlightLayer(), not the esri layer ID).
         */
        highlightLayers: {
            [name: string]: project.OperationalLayer;
        };
        /** The name of the active highlight layer. */
        activeHighlightLayerName: string;
        /** A set of feature/highlight layer pairs indicating which features have been highlighted on which layer(s). */
        highlights: [{
            /** The feature that is being highlighted. */
            feature: project.Feature;
            /** The highlight layer where this feature is being highlighted (there can be more than one). */
            highlightLayer: project.OperationalLayer;
        }];
    }
    class HighlightManager {
        /**
         * The {@link ViewerApplication} that this module belongs to.
         */
        app: ViewerApplication;
        /**
         * ID of the currently active highlight layer
         * @private
         */
        private _activeHighlightLayerName;
        /**
         * Collection of named highlight layers
         * @private
         */
        private _highlightLayers;
        /**
         * The collection of object id of the original graphic to mapping objects that contain the managed (original) graphic, and the cloned graphic, and layer
         * @private
         */
        private _managedGraphics;
        /**
         *  The collection of object id of the cloned to graphic to mapping objects that contain the cloned graphic, the managed graphic it was made from, and layer
         * @private
         */
        private _clonedGraphics;
        /**
         *   The next number to be used in the id of one of the managed or clone objects
         * @private
         */
        private _nextHighlightId;
        /**
         * The renderer that should be used to create the symbol for a graphic
         * @private
         */
        private _defaultRenderer;
        /**
         * The name of the default highlight layer.  Only the HighlightModule has good reason to access this.
         * @private
         */
        _defaultHighlightLayerName: string;
        /**
         * Initializes a new instance of an {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.HighlightManager} object.
         * @class
         * <p>The central system for highlighting features.</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure
         * @param app The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this module belongs to.
         */
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication);
        /**
         * Creates a new highlighting layer with the specified name. This will throw an error if a layer with the specified name exists.
         * @param {String} layerName The name of the layer to create.
         * @param {String|number} fillColor The color to fill with, leave as null for default
         * @param {String|number} borderColor The color to color the border with, leave as null for default
         */
        createHighlightLayer(layerName: string, fillColor?: any, borderColor?: any): esri.layers.GraphicsLayer;
        /**
         * Sets the active highlight layer.
         * This is the layer that new features will be added to, or cleared from.
         * @param {String} layerName The name of the layer to set as Active.
         */
        setActiveHighlightLayer(layerName: string): void;
        /**
         * Highlights the features in the Esri Feature Set provided, and adds them to the active highlight later, or the layer specified layer.
         * Features added will take the fill and border color that are currently set.
         * @param {esri.tasks.FeatureSet} esriFeatureSet The Esri feature set to highlight.
         * @param {String} [highlightLayerId] The highlight layer to add the highlights to.
         */
        highlightEsriFeatureSet(esriFeatureSet: esri.tasks.FeatureSet, highlightLayerId?: string): void;
        /**
        * Highlights the features in the list of features provided, and adds them to the active highlight later, or the layer specified layer.
        * Features added will take the fill and border color that are specified in the feature, or the current highlight colors if one is not specified.
        * @param {geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature[]} features The list of features to highlight.
        * @param {String} [highlightLayerId] The highlight layer to add the highlights to.
        */
        highlightFeatures(features: mapping.infrastructure.Feature[], highlightLayerId?: string): void;
        highlightGraphics(graphics: esri.Graphic[], highlightLayerId?: string): void;
        /**
         * Removes the layer with the specified name, and any associated highlights.
         * @param {String} layerName The name of the layer to remove.
         */
        removeHighlightLayer(layerName: string): void;
        /**
         * Clears the highlights from the active layer, or the named or provided layer if one is named or provided.
         * @param {String|esri.layers.GraphicsLayer} [layerName] The name of or layer to clear.
         */
        clearHighlights(graphicsLayer: esri.layers.GraphicsLayer): void;
        clearHighlights(layerName?: string): void;
        /**
         * Gets the current fill color.
         * Returns the 6 or 8 digit hex color in RGB or ARGB form.
         */
        getHighlightFillColor(): string;
        /**
         * Gets the current border color.
         * Returns the 6 or 8 digit hex color in RGB or ARGB form.
         */
        getHighlightBorderColor(): string;
        /**
         * Sets the fill color to the one specified.
         * @param {String} color The 6 or 8 digit hex color in RGB or ARGB form.
         */
        setHighlightFillColor(color: string): void;
        /**
         * Sets the border color to the one specified..
         * @param {String} color The 6 or 8 digit hex color in RGB or ARGB form.
         */
        setHighlightBorderColor(color: string): void;
        /**
         * Gets a highlight layer with the specified name.
         * @param {String} layerName The name of the layer to get.
         * @returns {esri.layer.GraphicsLayer} highlight layer
         */
        getHighlightLayer(layerName: string): esri.layers.GraphicsLayer;
        /**
         * Gets the set of highlight layers, keyed by name.
         */
        getHighlightLayers(): {
            [name: string]: esri.layers.GraphicsLayer;
        };
        /**
         * Gets a highlight layer with the specified name, or the active layer if one is not specified.
         * @param {String} [layerName] The name of the layer to get.
         * @returns {esri.layer.GraphicsLayer} highlight layer
         */
        getHighlightLayerOrActive(layerName?: string): esri.layers.GraphicsLayer;
        /**
         * Returns the graphics currently in the active highlight layer.
         * @returns {esri.Graphic[]} active layer highlighted graphics.
         */
        activeHighlightLayerGraphics(): esri.Graphic[];
        /**
         * Returns the graphics currently in the default highlight layer.
         * @returns {esri.Graphic[]} default layer highlighted graphics.
         */
        defaultHighlightLayerGraphics(): esri.Graphic[];
        exportState(): Promise<HighlightManagerState>;
        applyState(state: HighlightManagerState): Promise<void>;
        /**
         * Draws the graphic to the specified esri.layer.GraphicsLayer.
         * @param The graphic to be drawn
         * @param The specified graphic layer
         */
        private _drawGraphic(graphic, layer);
        /** @private  Returns the dojo.Color currently set to fill */
        private _getFillColor();
        /** @private  Sets the dojo.Color that should be used to fill graphics by default */
        private _setFillColor(color);
        /** @private Returns the dojo.Color currently set for borders */
        private _getBorderColor();
        /** @private  Sets the dojo.Color that should be used for the borders of graphics */
        private _setBorderColor(color);
        private _toARGBHex(color);
        /** @private  Returns the next integer that should be used for keying into the layers, if a graphic doesn't already have one. */
        private _nextId();
        private _getHighlightId(graphic);
        private _setHighlightId(graphic, id);
        private _showHighlightLayer(layer);
        /** @private Adds the specified layer to the map. This is a convenience method, because it's long, and had to be done lots. */
        private _addLayerToMap(layer);
        /** @private  Returns the esri.layers.GraphicsLayer that is currently set as the active highlight layer. */
        private _activeHighlightLayer();
        /** @private Removes the specified {esri.Graphic} clone from the system, and cleans up the managed graphic map associated with it. */
        private _removeClonedGraphic(graphic);
        /**
         * Removes the specified original graphic from the specified layer, as well as it's clone and the mapping objects associated with the clone and the layer
         * @param graphic The specified orignal graphic to be removed from a specific layer
         * @param graphicsLayer The specified layer from which the graphic needs to be removed
         * @private
         */
        private _removeManagedGraphic(graphic, graphicsLayer);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.search {
    class SearchProviderBase {
        /**
         * The {@link geocortex.framework.application.Application} that this view belongs to.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        libraryId: string;
        /**
         * The ID of the provider.
         * @type String
         */
        id: string;
        /**
         * The name of the provider - may be displayed in the viewer.
         * @type String
         */
        name: string;
        /**
         * The description of the provider.
         * @type String
         */
        description: string;
        /**
         * Indicates that the provider can support offline searching.
         * @type Boolean
         */
        supportsOffline: boolean;
        /**
         * Indicates whether or not this layer supports the search hints.
         * @type Boolean
         */
        supportsHints: boolean;
        /**
         * Indicates whether the provider is enabled or not.
         * @type Boolean
         */
        isEnabled: boolean;
        /**
         * Current search status.
         * @type geocortex.essentialsHtmlViewer.mapping.infrastructure.search.Status
         */
        status: string;
        /**
         * Create a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.search.SearchProviderBase} class.
         * @class
         * <p>The base class for all search provider.</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure.search
         * @param app The {@link geocortex.framework.application.Application} that this base class belongs to.
         */
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string);
        /**
         * Initialize the provider.
         * @param config The configuration object.
         */
        initialize(config: any): void;
        /**
         * Performs the search.
         * @param targetFsc Where search results are to go.
         * @param searchText What to search for.
         */
        search(targetFsc: FeatureSetCollection, searchText: string): void;
        /**
         * Cancel a search.
         */
        cancelSearch(): void;
        /**
         * Gets a language resource from the Application's resource dictionary, given a key, and optional locale.
         * Returns null if the resource does not exist.
         * @param key The resource key.
         * @param locale The locale of the resource to fetch. Defaults to the current application locale.
         */
        getResource(resourceKey: string, locale?: string): string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    class SearchProgressEventArgs {
        /**
         * The status of the executing search.
         * @type geocortex.essentialsHtmlViewer.mapping.infrastructure.search.Status
         */
        status: string;
        /**
         * The type of search that is being performed (eg. Instant Search, Geocode, etc.).
         * @type String
         */
        searchType: string;
        /**
         * The URL to the search endpoint.
         * @type String
         */
        endpointUrl: string;
        /**
         * Any error that might have been thrown.
         * @type Error
         */
        error: Error;
        /**
         * A message that might be displayed to the user. In the event of an error, then usually error.message
         * @type String
         */
        message: string;
        /**
          * The results of the search.
          * @type geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection
          */
        results: FeatureSetCollection;
        /**
         * The full search query that was used for the search. Only relevant for text-based searches.
         * @type String
         */
        query: string;
        /**
         * Initializes a new instance of the {@link SearchProgressEventArgs} class.
         */
        constructor();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.search {
    module Status {
        var IDLE: string;
        var SEARCHING: string;
        var ERROR: string;
    }
    class SearchManager {
        /**
         * The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this search manager instance belongs to.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** @private */
        private _searchProviders;
        /** @private */
        private _fscRootID;
        /** @private */
        private _fsc;
        /** @private */
        private _count;
        /** @private */
        private _fscSourceName;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.search.SearchManager} class.
         * @class
         * <p>The search manager is the central access point for all things search within the viewer.
         * The idea is that various search providers will be registered with the search manager
         * and will all be used when a search takes place (if enabled).</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure.search
         * @param app The {@link geocortex.framework.application.Application} instance that this SearchManager belongs to.
         */
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication);
        _resetFeatureSetCollection(): void;
        /**
         * Returns a collection of strings that match or are related to the provided search text.
         * This is typically used for auto-complete dropdown boxes.
         * @param hints The collection of hints. This collection should be manipulated (added) to by the implementation.
         * @param searchText The text the user is searching on.
         */
        getSearchHints(hints: ObservableCollection<SearchHintItem>, searchText: string): void;
        /** @private Registers some view-related commands. */
        private _registerCommands();
        /** @private Registers a provider if not already registered.
        * @param searchProvider An array of search providers
        */
        private _registerProvider(searchProvider);
        /** @private Return an array of providers that are currently enabled and if offline, that support offline searches. */
        private _enabledProviders();
        /** @private Indicates if any of the registered provider is currently searching. */
        private _isSearching();
        /** @private Handler to cancel a search */
        private _cancelSearch();
        /** @private Clear all the search results */
        private _clearSearch();
        /**
         * @private Handler to start a search
         * @param searchText Text to be searched
         */
        private _search(searchText);
        /**
         * @private Handles the search progress event
         * @param searchProgress Indicates the status of search operation
         */
        _searchProgress(searchProgress: infrastructure.eventArgs.SearchProgressEventArgs): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * BatchItemModel provides a general purpose, loosely coupled model for individual batch items within a batch.
     */
    class BatchItemModel {
        /** The Application that this batch item instance belongs to. */
        app: geocortex.framework.application.Application;
        /** The command associated with this batch item. */
        command: geocortex.framework.commands.TypedCommand<any>;
        /** The command parameter (if any) being passed to the command associated with this batch item. */
        commandParameter: any;
        /** Whether or not failure to execute this batch item should prevent subsequent items from executing. */
        abortBatchOnFailure: boolean;
        /**
         * Initializes a new instance of the BatchItemModel class.
         * @param app The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this batch item belongs to.
         * @param config A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.BatchItemConfig} object to configure this batch item.
         */
        constructor(app: geocortex.framework.application.Application, config: BatchItemConfig);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * MenuItemModel provides a general purpose, loosely coupled model for an individual menu item contained in a menu.
     */
    class MenuItemModel {
        /** The ViewerApplication that this menu item instance belongs to. */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuModel} that this MenuItemModel is a member of. */
        menuModel: MenuModel;
        /** The name of this menu item. */
        text: string;
        /** Short Description of this menu item. */
        description: string;
        /** URI of the icon associated with this menu item (if any). */
        iconUri: string;
        /** Visibility status of menu item when disabled. */
        hideOnDisable: boolean;
        /** An array of BatchItemModel's constituting a batch (if applicable). */
        batchItems: BatchItemModel[];
        /** The executable command object associated with this menu item. */
        command: geocortex.framework.commands.TypedCommand<any>;
        /** The command Parameter associated with the menu item. This could be a string or a complex object. */
        commandParameter: any;
        /**
         * Initializes a new instance of the MenuItemModel class.
         * @param menuModel The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuModel} that this MenuItemModel is a member of.
         * @param config The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuItemConfig} configuration for this MenuItemModel.
         */
        constructor(menuModel: MenuModel, config: MenuItemConfig);
        /**
         * Sets the batch items for the menu item.
         * @param batch A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.BatchItemConfig} object to provide configuration details for
         *              the batch commands (if any) associated with this menu item.
         */
        protected _setBatchItems(batch: BatchItemConfig[]): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * MenuModel provides a general purpose, loosely coupled model for defining menus that can be accessed by any module.
     */
    class MenuModel {
        /** The ViewerApplication that this menu model instance belongs to. */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** The unique id of this menu. */
        id: string;
        /** Array of menu items contained in this menu. */
        items: MenuItemModel[];
        /** Title (if any) of this menu. */
        title: string;
        /** Description (if any) of this menu. */
        description: string;
        /** Default URI for an icon (if any), used if a menu item does not have one defined. */
        defaultIconUri: string;
        /**
         * Initializes a new instance of the MenuModel class.
         * @param app The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this menu belongs to.
         * @param entry A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuEntryConfig} object to configure this menu.
         */
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, entry: MenuEntryConfig);
        /**
         * Create menu items and populate the menu model based on the given configuration.
         * @param items An array of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuItemConfig} objects to configure the menu items.
         * @return An array of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuItemModel}  objects created based on the provided configuration.
         */
        protected _createMenuItems(items: MenuItemConfig[]): MenuItemModel[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * MenuRegistry is a central management component for creating and accessing menu's from any module across the viewer.
     */
    class MenuRegistry {
        /** The ViewerApplication that this menu registry belongs to. */
        app: essentialsHtmlViewer.ViewerApplication;
        /** An array containing references to all the menus registered in the system. */
        menuList: MenuModel[];
        /** Array of viewId's mapped to their contained menu widget parameters. */
        protected _viewMenuEntries: {
            [viewId: string]: MenuWidgetParameters[];
        };
        /** Array of configurations for each Menu. */
        protected _menuConfig: MenuEntryConfig[];
        /**
         * Initializes a new instance of the MenuRegistry class.
         * @param app The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this menu registry belongs to.
         */
        constructor(app: essentialsHtmlViewer.ViewerApplication);
        /**
        * Creates and registers menu's based on the passed in configuration.
        * @param config A {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuConfig} configuration object.
        */
        loadMenus(config: MenuConfig): void;
        /**
        * Registers a menu, given from either a MenuEntryConfig or MenuModel object.
        * @param menu The instance of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuModel} or {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuEntryConfig} to be registered.
        */
        register(menu: MenuModel | MenuEntryConfig): void;
        /**
         * Unregisters a menu.
         * @param menuId The ID of the menu to be unregistered.
         */
        unregister(menuId: string): void;
        /**
         * Fetches a menu by id.
         * @param {string} Unique id of the menu.
         * @return The requested {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuModel} object or null if not found.
         */
        getMenu(id: string): MenuModel;
        /**
         * Fetches the default icon URI for a given menu.
         * @param {string} Id of the menu.
         * @return the URI of default icon for given menu.
         */
        getDefaultIconUri(id: string): string;
        /**
         * Given a view, returns descriptors of any menu widgets created by that view.
         * @param view The {@link framework.ui.ViewBase} object whose associated menu widget(s) we want to retrieve.
         * @return An array of {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuWidgetParameters} objects containing the requested widget(s).
         */
        getMenuWidgetsForView(view: framework.ui.ViewBase): MenuWidgetParameters[];
        /**
         * Generates a menu view based on dom attributes. The attributes that should be present on the DOM element being passed in are:
         * - data-menu-id: (Required) This defines the menu to populate within the created menu view
         * - data-menu-template: (Optional) If provided, this will be used as the template for the menu view being created. Default is Mapping/infrastructure/menus/MenuView.html
         * - data-menu-type: (Optional) If provided, this will be used as the code behind for the menu view being created. Default is geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuView
         * - data-menu-library-id: (Optional) If provided, this will be used as the library id for this menu View. This will override the manual libraryId input parameter if specified.
         * - data-menu-hoist-disabled: (Optional) If present, the menu will not be hoisted.
         * @param view The view that is requesting the menu widget.
         * @param context The current context of the widget, if available.
         * @param binding The binding expression passed in to the 'resolveWidget' method from which this method will typically be called.
         * @param libraryId The library ID for the created menu widget.
         * @return A {@link geocortex.framework.ui.ViewBase}, bound, view widget object.
         */
        createMenuWidget(view: framework.ui.ViewBase, context: any, binding: geocortex.framework.ui.BindingExpression, libraryId?: string): geocortex.framework.ui.ViewBase;
        /**
         * Destroys the menu widget and all it's associated view model bindings and subscriptions. Automatically called when the widget view is destroyed.
         * @param menuWidgetView The menu widget view to destroy.
         */
        destroyMenuWidget(menuWidgetView: MenuView): void;
        /**
         * Checks if a given menu id is valid or not. For a menu id to be valid, it should be unique i.e. there should be no exisiting menu's registered with the same name.
         * @param id The menu ID to check for validity.
         * @return A boolean which returns true if the given menu ID is valid; false otherwise.
         */
        protected _validMenuId(id: string): boolean;
        /**
         * Validates a given menu model to ensure that it meets the minimum requirements for a valid menu.
         * @param menuModel The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuModel} object to validate.
         * @return A boolean that returns true if the given MenuModel is valid; false otherwise.
         */
        protected _validateMenuModel(menuModel: MenuModel): boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.tools {
    class ToolBase implements ToolConfig {
        /**
         * The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this tool instance belongs to.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /**
         * The name of this tool.
         * @type {string}
         */
        name: string;
        /**
         * Whether this tool is active.
         * @type {boolean}
         */
        isActive: boolean;
        /**
         * Status text to display while the tool is active.  Can be i18ned.
         */
        statusText: string;
        /**
         * Optional, alternate status text to display for keyboard users.  Can be i18ned.
         */
        keyboardStatusText: string;
        /**
         * Library to look up i18n string keys from.  Required to display i18n strings.
         */
        libraryId: string;
        /**
         * Optional URI of the icon to display with the status.
         */
        iconUri: string;
        /**
         * Optional title for the close tool UI element.  Defaults to "Deactivate Tool".
         */
        closeTitle: string;
        /**
         * Optional CSS class for the status displayed for this tool.
         */
        statusClass: string;
        /**
         * Whether the tool is enabled (can be used).  The tool will be assumed to not support disabling
         * if left undefined.
         */
        enabled: Observable<boolean>;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.tools.ToolBase} class.
         * @class
         * <p>ToolBase provides a general purpose, loosely coupled model for creating components that have tool-like behavior.</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure.tools
         * @param app The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this tool belongs to.
         * @param mixin An object to provide additional configuration of this tool.
         */
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, mixin: ToolConfig);
        /**
         * Sets the active state of the tool.
         * @param {boolean} active The desired active state of the tool.
         */
        setActive(active: boolean): void;
        /**
         * Called when the tool is activated.
         */
        onActivated(): void;
        /**
         * Called when the tool is deactivated.
         */
        onDeactivated(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.tools {
    class ToolRegistry {
        /**
         * The {@link geocortex.framework.application.Application} that this tool registry belongs to.
         * @private
         */
        private app;
        /**
         * An object map of all referenced tools.
         */
        tools: {
            [name: string]: ToolBase;
        };
        /**
         * An object map of all event subscriptions for tools.
         * @private
         */
        private _subscriptions;
        /**
         * A map of commands and their associated commands.
         * @private
         */
        private _toolTypes;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.tools.ToolRegistry} class.
         * @class
         * <p>ToolRegistry provides safe, loosely-coupled access to tools.</p>
         * <p>A ToolRegistry instance should always be used when referencing tools.</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure.tools
         * @param app The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this tool registry belongs to.
         */
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication);
        /**
         * Registers the tool registry command implementations.
         * @private
         */
        private _registerCommands();
        protected _setActiveToolCanExecute(toolName: any): boolean;
        /**
         * Clears the active tool.
         */
        clearActiveTool(): void;
        /**
         * Gets the active tool.
         */
        getActiveTool(): ToolBase;
        /**
         * Sets the active tool.
         * @param {string} name The name of the tool to activate.
         */
        setActiveTool(name: string): void;
        /**
         * Fetches a tool by name.
         * @param {string} name The name of the tool to fetch.
         */
        tool(name: string): ToolBase;
        /**
         * Registers a tool. The tool must specify a name.
         * @param tool The tool to register.
         */
        register(tool: ToolBase): void;
        /**
         * Unregisters a tool.
         * @param tool The tool to unregister.
         */
        unregister(tool: ToolBase): void;
        /**
         * Unregisters all tools in the registry.
         */
        clear(): void;
        /**
         * Creates and optionally registers the tools specified by a configuration block. Only named tools will be registered.
         * @param config An array of tool configuration objects.
         * @param {boolean} registerTools A flag indicating whether to register the tool with the registry.
         * @return An array of tool objects.
         */
        createTools(config: ToolConfig[], registerTools: boolean): ToolBase[];
        /**
         * Associates a command with a tool type, allowing tool subtypes to be created and invoked for certain tool commands.
         * @param commandName The name of the command to associate with a tool subtype.
         * @param toolTypeName The name of the tool type to associate with the command.
         */
        registerToolTypeForCommand(commandName: string, toolTypeName: string): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /**
     * Note: This is for single argument commands only. Multiple argument commands should be phased out and avoided.
     * @docs-hide-from-nav
     * @private
     */
    class CommandViewModel extends geocortex.framework.ui.ViewModelBase {
        /** Name of the command. */
        commandName: string;
        /** The command parameter, as configured. */
        commandParameter: any;
        /** Indicates whether the command can currently execute or not. */
        canExecute: Observable<boolean>;
        notExecuteHidden: Observable<boolean>;
        protected _canExecuteChangedBindingToken: string;
        protected _command: geocortex.framework.commands.TypedCommand<any>;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.command.CommandViewModel} class.
         * @class
         * <p> CommandViewModel presents the generic commands along with its attributes such as command parameters.</p>
         * @constructs
         * @param app The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this command belongs to.
         * @param libraryId The ID of the library this component belongs to.
         * @param commandName The name of the command
         * @param commandParameter The parameter associated with this command.
         */
        constructor(app: geocortex.framework.application.Application, libraryId: string, commandName: string, commandParameter: string);
        /**
         * Applies a new contextual parameter to this command.
         * @param context
         */
        applyContext(context: any): void;
        /**
         * @private
         * Binds to a command by name.
         */
        private _bindToCommand(commandName, commandParameter?);
        /**
         * @private
         * Handles a "CanExecuteChanged" event for non batch commands.
         */
        private _handleCanExecuteChanged();
    }
}
/**
/* Namespace for CommandViewModel changed from geocortex.essentialsHtmlViewer.mapping.modules.command.CommandViewModel
 * to geocortex.essentialsHtmlViewer.mapping.infrastructure.CommandViewModel
 * The namespace is duplicated below to be backwards compatible with third party code.
 * @private
 * @deprecated 2.4
 */
declare module geocortex.essentialsHtmlViewer.mapping.modules.command {
    var CommandViewModel: typeof infrastructure.CommandViewModel;
}
/** @private */
declare module geocortex.essentialsHtmlViewer.mapping.modules {
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.toolbarGroup {
    interface ToolbarGroupItemBaseEntry {
        id: string;
        type: string;
        name: string;
        tooltip?: string;
        libraryId?: string;
        hideOnDisable?: boolean;
    }
    class ToolbarGroupItemBase {
        type: string;
        name: Observable<string>;
        id: string;
        /**
         * The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this menu instance belongs to.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /**
         * The library used for resource obtaining.
         */
        libraryId: string;
        /**
         * True if the item is active
         */
        isActive: Observable<boolean>;
        /**
         * True if the item has an associated transient that is currently visible.
         */
        activeTransient: Observable<boolean>;
        /**
         * True if disabled
         */
        disabled: Observable<boolean>;
        /**
          * True if disabled and hideOnDisable = true
        */
        hidden: Observable<boolean>;
        /**
         * Hide this item entirely if disabled.
         */
        hideOnDisable: Observable<boolean>;
        /**
         * Tooltip for mouseover.
         */
        tooltip: Observable<string>;
        /**
         * Associated css class.
         */
        cssClass: Observable<string>;
        subscriptionToken: string;
        /*************************************************************************************************
         * Below variables are associated with subclasses but not used by this class.
         * They are here as sometimes a ToolbarItemBase will be a button, so it will need 'command', etc.
         *************************************************************************************************/
        /**
         * Associated command to execute.
         */
        command: geocortex.essentialsHtmlViewer.mapping.infrastructure.CommandViewModel;
        /**
         * Icon for display in toolbar.
         */
        iconUri: Observable<string>;
        /**
         * The actual tool stored.
         */
        tool: tools.ToolBase;
        /**
         * Name of the ToolbarRegion Region.
         */
        regionName: string;
        /**
         * Collection of items for the Toolbar.
         */
        items: ObservableCollection<ToolbarGroupItemBase>;
        /**
         * Whether the tool has the ability to be displayed as small..
         */
        hasSmallLayout: Observable<boolean>;
        /**
         * Currently selected tool. (Flyout specific)
         */
        selectedTool: Observable<ToolbarGroupItemBase>;
        /**
         * Whether the multitool flyout is open. (Flyout specific)
         */
        toolChangeActive: Observable<boolean>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string, entry?: ToolbarGroupItemBaseEntry);
        areAllHidden(items: ObservableCollection<ToolbarGroupItemBase>): boolean;
        setHidden(): void;
        execute(): void;
        activate(): void;
        deactivate(): void;
        onDestroy(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.toolbarGroup {
    interface ToolbarGroupBaseEntry {
        name: string;
        id: string;
        type?: string;
        tooltip?: string;
        isDefault?: boolean;
        libraryId?: string;
        items?: ToolbarGroupItemBaseEntry[];
    }
    class ToolbarGroupBase {
        items: ObservableCollection<ToolbarGroupItemBase>;
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        libraryId: string;
        id: string;
        name: Observable<string>;
        tooltip: Observable<string>;
        type: string;
        isDefault: boolean;
        isActive: Observable<boolean>;
        disabled: Observable<boolean>;
        cssClass: Observable<string>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string, entry?: ToolbarGroupBaseEntry);
        getToolbarGroupItems(items: ToolbarGroupItemBaseEntry[]): ObservableCollection<ToolbarGroupItemBase>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.toolbarGroup {
    class ToolbarGroupRegistry {
        /**
         * The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this toolbargroup instance belongs to.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /**
         * An array consisting of all referenced toolbargroups
         * @type {geocortex.essentialsHtmlViewer.mapping.infrastructure.toolbar.toolbarGroupBase}
         */
        toolbarGroupList: ObservableCollection<ToolbarGroupBase>;
        /**
         * Config object containing toolbar groups configuration
         * @private
         */
        private _toolbarGroupsConfig;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication);
        /**
         * Fetch a new instance of toolbar group instance by id
         * @param id Id of the toolbarGroup
         */
        getToolbarGroupById(id: string): ToolbarGroupBase;
        /**
         * Registers a toolbar group
         */
        registerToolbarGroups(toolbarGroups: ToolbarGroupBaseEntry[], libraryId?: string): void;
        /**
         * Unregister the group with the given id if it is registered.
         * @param id {String} Id of the toolbar group to be unregistered
         */
        unregisterToolbarGroup(id: string): void;
        /**
         * Fetches the position of toolbar group in the list
         * @param id {String} Id of the toolbar group whose position is to be determined
         */
        getPosition(id: string): number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.undo {
    /** Indicates the status of the {@link UndoManager} */
    module Status {
        /** The {@link UndoManager} is idle. */
        var IDLE: string;
        /** The {@link UndoManager} is undoing. */
        var UNDOING: string;
        /** The {@link UndoManager} is redoing. */
        var REDOING: string;
        /** The {@link UndoManager} is committing an open transaction. */
        var COMMITTING: string;
        /** The {@link UndoManager} is rolling back an open transaction. */
        var ROLLINGBACK: string;
    }
    interface UndoManagerOptions {
        /** The maximum number of operations the {@link UndoManager} can perform. If a number less than or equal to zero is provided the number of operations is unlimited. */
        maxOperations?: number;
    }
    /**
     * The UndoManager is a utility object that allows you to easily build applications with undo/redo functionality.
     * Use the UndoManager to add actions (edits, navigation changes, graphics drawing) to the stack. The API includes
     * a set of edit operations (add, delete, update, cut and union), created by inheriting from the {@link Undoable} class.
     * You can inherit from the {@link Undoable} class to create custom operations that take advantage of undo/redo.
     */
    class UndoManager implements TransactionManager {
        /** The {@link framework.application.Application} that this undo manager instance belongs to. */
        app: framework.application.Application;
        /** The maximum number of operations the {@link UndoManager} can perform. If a number less than or equal to zero is provided the number of operations is unlimited. */
        maxOperations: number;
        /** Whether the recording of {@link Undoable} instances in the undo history has been suspended using the Suspend method. */
        isSuspended: boolean;
        /** Whether the {@link UndoManager} is undoing. */
        isUndoing: boolean;
        /** Whether the {@link UndoManager} is redoing. */
        isRedoing: boolean;
        /** When true, there are redo operations available on the stack. */
        canRedo: boolean;
        /** When true, there are undo operations available on the stack. */
        canUndo: boolean;
        /** The number of operations stored in the history stack. */
        length: number;
        /** The current operation position. */
        position: number;
        /** Returns the outermost current open transaction or null if there is currently no transaction open. */
        rootTransaction: UndoTransaction;
        protected _status: string;
        protected _historyStack: Undoable[];
        /**
         * Initializes a new instance of the {@link UndoManager} class.
         * @param app The {@link framework.application.Application} that this instance belongs to.
         * @param options Optional configuration settings for this instance.
         */
        constructor(app: geocortex.framework.application.Application, options?: UndoManagerOptions);
        registerCommands(): void;
        /** Suspends the recording of {@link Undoable} instances in the undo history. */
        suspend(): void;
        /** Resumes the recording of {@link Undoable} instances in the undo history. */
        resume(): void;
        /**
         * Sets the maximum number of operations the {@link UndoManager} can perform.
         * If a number less than or equal to zero is provided the number of operations is unlimited.
         * @param limit The operation limit
         */
        setMaxOperations(limit: number): void;
        /**
         * Returns an object with the following properties that describe the current state of the {@link UndoManager}: `historyStack`, `position`.
         */
        getCurrentState(): UndoManagerState;
        /**
         * Adds an undo operation to the stack and clears the redo stack.
         * The redo stack’s contents last as long as undo and redo are performed successively.
         * However, because applying a new change to an object invalidates the previous changes,
         * as soon as a new undo operation is registered, any existing redo stack is cleared.
         * This prevents redo from returning objects to an inappropriate prior state.
         * @param operation An operation to add to the stack.
         */
        add(operation: Undoable): void;
        /**
         * Moves the current position to the next undo operation and calls the operation's `performUndo` method.
         */
        undo(): Promise<void>;
        /**
         * Moves the current position to the next redo operation and calls the operation's `performRedo` method.
         */
        redo(): Promise<void>;
        /**
         * Gets the next undo operation from the stack.
         */
        peekUndo(): Undoable;
        /**
         * Gets the next redo operation from the stack.
         */
        peekRedo(): Undoable;
        /**
         * Clears the undo stack.
         */
        clearUndo(): void;
        /**
         * Clears the redo stack.
         */
        clearRedo(): void;
        /**
         * Gets the specified operation from the stack.
         * @param index The index of the operation to return.
         */
        getAt(index: number): Undoable;
        /**
         * Removes the specified operation from the stack.
         * If the index is not valid or out of bounds, then nothing happens.
         * @param index The index of the operation to remove.
         */
        removeAt(index: number): void;
        /**
         * Starts a transaction for recording undo operations. Undo operations recorded while a {@link UndoTransaction} is open, are added
         * to the {@link UndoManager} only if the transaction is committed. A rollback will undo, then discard the changes which where registered
         * while the transaction was open.
         * @param name A short string describing the transaction.
         * @param parent The parent transaction (for nested transactions)
         */
        beginTransaction(name?: string, parent?: UndoTransaction): UndoTransaction;
        /**
         * Commits the provided transaction. Undo operations recorded while the {@link UndoTransaction} is open,
         * are added to the {@link UndoManager} only if the transaction is committed. Committing a transaction will
         * commit all transactions nested below it as well.
         * You cannot roll back a transaction once it has been committed.
         * @param transaction The transaction to commit.
         */
        commitTransaction(transaction?: UndoTransaction): Promise<void>;
        /**
         * Rolls back (aborts) a transaction from a pending state. A rollback will undo, then discard the changes which where registered
         * while the transaction was open. Rolling back a nested transaction will roll back its parent transaction as well.
         * A transaction can only be rolled back from a pending state (after `beginTransaction` has been called, but before `commitTransaction` is called).
         * @param transaction The transaction to roll back.
         */
        rollbackTransaction(transaction?: UndoTransaction): Promise<void>;
        /**
         * Destroys this instance. Sets the history stack to null and cleans up all references.
         */
        destroy(): void;
        /** Save changes into undo redo stack for top-level transactions. */
        protected _onTransactionCommitted(tx: UndoTransaction): void;
        /** Undo the transaction changes, then remove it from the parent. */
        protected _onTransactionAborted(tx: UndoTransaction): void;
        protected _checkAvailability(): void;
        protected _updateStatus(status: string): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * A Color is an array of numbers specifying R,G,B, and A.
     */
    type Color = number[];
    module SymbolType {
        const SIMPLE_MARKER: string;
        const SIMPLE_LINE: string;
        const SIMPLE_FILL: string;
        const PICTURE_MARKER: string;
        const PICTURE_FILL: string;
        const TEXT: string;
    }
    module SimpleMarkerStyle {
        const CIRCLE: string;
        const CROSS: string;
        const DIAMOND: string;
        const SQUARE: string;
        const X: string;
        const TRIANGLE: string;
        const PATH: string;
    }
    module SimpleLineStyle {
        const DASH: string;
        const DASH_DOT: string;
        const DASH_DOT_DOT: string;
        const DOT: string;
        const NONE: string;
        const SOLID: string;
    }
    module SimpleFillStyle {
        const BACKWARD_DIAGONAL: string;
        const CROSS: string;
        const DIAGONAL_CROSS: string;
        const FORWARD_DIAGONAL: string;
        const HORIZONTAL: string;
        const NONE: string;
        const SOLID: string;
        const VERTICAL: string;
    }
    module VerticalAlignment {
        const BASELINE: string;
        const TOP: string;
        const MIDDLE: string;
        const BOTTOM: string;
    }
    module HorizontalAlignment {
        const LEFT: string;
        const RIGHT: string;
        const CENTER: string;
        const JUSTIFY: string;
    }
    module FontStyle {
        const ITALIC: string;
        const NORMAL: string;
        const OBLIQUE: string;
    }
    module FontWeight {
        const BOLD: string;
        const BOLDER: string;
        const LIGHTER: string;
        const NORMAL: string;
    }
    module TextDecoration {
        const LINE_THROUGH: string;
        const UNDERLINE: string;
        const NONE: string;
    }
    /**
     * A symbol representing a feature on the map.
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/symbol.html).
     */
    interface Symbol {
        /** The type of symbol. One of the SymbolType constants. */
        type: string;
    }
    /**
     * Simple marker symbols can be used to symbolize point geometries.
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/symbol.html).
     */
    interface SimpleMarkerSymbol extends Symbol {
        /** One of the SimpleMarkerStyle constants. */
        style: string;
        color: Color;
        size: number;
        angle: number;
        path?: string;
        xoffset: number;
        yoffset: number;
        outline?: {
            color: Color;
            width: number;
        };
    }
    /**
     * Simple line symbols can be used to symbolize polyline geometries or outlines for polygon fills.
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/symbol.html).
     */
    interface SimpleLineSymbol extends Symbol {
        /** One of the SimpleLineStyle constants. */
        style: string;
        color: Color;
        width: number;
    }
    /**
     * Simple fill symbols can be used to symbolize polygon geometries.
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/symbol.html).
     */
    interface SimpleFillSymbol extends Symbol {
        /** One of the SimpleFillStyle constants. */
        style: string;
        color: Color;
        outline?: SimpleLineSymbol;
    }
    /**
     * Picture marker symbols can be used to symbolize point geometries.
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/symbol.html).
     */
    interface PictureMarkerSymbol extends Symbol {
        /** Relative URL for static layers and full URL for dynamic layers. Access relative URL using http://<mapservice-url>/<layerId1>/images/<imageUrl11> */
        url: string;
        /** Base64 encoded. */
        imageData: string;
        contentType: string;
        width: number;
        height: number;
        angle: number;
        xoffset: number;
        yoffset: number;
    }
    /**
     * Picture fill symbols can be used to symbolize polygon geometries.
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/symbol.html).
     */
    interface PictureFillSymbol extends Symbol {
        /** Relative URL for static layers and full URL for dynamic layers. Access relative URL using http://<mapservice-url>/<layerId1>/images/<imageUrl11> */
        url: string;
        /** Base64 encoded. */
        imageData: string;
        contentType: string;
        outline?: SimpleLineSymbol;
        width: number;
        height: number;
        angle: number;
        xoffset: number;
        yoffset: number;
        xscale: number;
        yscale: number;
    }
    /**
     * Text symbols are used to add text to a feature (labeling).
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/symbol.html).
     */
    interface TextSymbol extends Symbol {
        color: Color;
        backgroundColor: Color;
        borderLineSize: number;
        borderLineColor: Color;
        haloSize: number;
        haloColor: Color;
        /** One of the VerticalAlignment constants. */
        verticalAlignment: string;
        /** One of the HorizontalAlignment constants. */
        horizontalAlignment: string;
        rightToLeft: boolean;
        angle: number;
        xoffset: number;
        yoffset: number;
        kerning: boolean;
        font: {
            family: string;
            size: number;
            /** One of the FontStyle constants. */
            style: string;
            /** One of the FontWeight constants. */
            weight: string;
            /** One of the TextDecoration constants. */
            decoration: string;
        };
        /** Only applicable when specified as a client-side graphic. */
        text?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    const CONVERSION_TYPE_PROPERTY: string;
    /**
     * Constants for target types that are handled by WebMapConverter.
     */
    module ConversionType {
        const WEB_MAP_SERVICE_LAYER: string;
        const WEB_MAP_LAYER: string;
        const WEB_MAP_FEATURE_SET: string;
        const WEB_MAP_FEATURE: string;
        const WEB_MAP_GEOMETRY: string;
        const WEB_MAP_SYMBOL: string;
        const WEB_MAP_RENDERER: string;
        const WEB_MAP_SPATIAL_REFERENCE: string;
        const WEB_MAP_COLOR: string;
        const WEB_MAP_DATA: string;
        const GCX_MAP_SERVICE: string;
        const GCX_LAYER: string;
        const GCX_FEATURE_SET: string;
        const GCX_FEATURE: string;
        const ESRI_LAYER: string;
        const ESRI_FEATURE_SET: string;
        const ESRI_GRAPHIC: string;
        const ESRI_GEOMETRY: string;
        const ESRI_SYMBOL: string;
        const ESRI_RENDERER: string;
        const ESRI_SPATIAL_REFERENCE: string;
        const ESRI_COLOR: string;
        const OBJECT: string;
    }
    /**
     * Provides methods for converting between Geocortex/Esri API objects and their ArcGIS web map equivalents.
     *
     * Note that once an input object has been converted, any additional attempts to convert it again will always return
     * a reference to the same result object (this is a form of the Identity Map pattern). To reset this mapping, use clearCache().
     */
    class WebMapConverter {
        app: ViewerApplication;
        /**
         * Maps a result type to a cache of conversion results for that type. Each cache in turn maps input objects to result objects.
         * Note that it's possible for the same input object to convert to different result types, which is why the cache has this structure.
         */
        private _resultCache;
        /**
         * The next available unique ID to assign to a symbol object.
         */
        private _nextSymbolId;
        private _nestingLevel;
        private _hasReferences;
        private _converting;
        constructor(app: ViewerApplication);
        fromGcxMapService(mapService: essentials.MapService): webMap.ServiceLayer;
        fromGcxLayer(layer: essentials.Layer): webMap.Layer;
        fromGcxFeatureSet(featureSet: infrastructure.FeatureSet): webMap.FeatureSet;
        fromGcxFeature(feature: infrastructure.Feature): webMap.Feature;
        fromEsriLayer(layer: esri.layers.Layer): webMap.ServiceLayer;
        fromEsriFeatureSet(featureSet: esri.tasks.FeatureSet): webMap.FeatureSet;
        fromEsriGraphic(graphic: esri.Graphic): webMap.Feature;
        fromEsriGeometry(geometry: esri.geometry.Geometry): webMap.Geometry;
        fromEsriSymbol(symbol: esri.symbol.Symbol): webMap.Symbol;
        fromEsriRenderer(renderer: esri.renderer.Renderer): webMap.Renderer;
        fromEsriSpatialReference(spatialReference: esri.SpatialReference): webMap.SpatialReference;
        fromEsriColor(color: esri.Color): webMap.Color;
        /**
         * Converts an arbitrary object graph to a format that can be stored in a web map.
         */
        fromObject(object: any): any;
        toGcxMapService(serviceLayer: webMap.ServiceLayer): Promise<essentials.MapService>;
        toGcxLayer(layer: webMap.Layer, service: webMap.ServiceLayer): Promise<essentials.Layer>;
        toGcxFeatureSet(featureSet: webMap.FeatureSet): Promise<infrastructure.FeatureSet>;
        toGcxFeature(feature: webMap.Feature): Promise<infrastructure.Feature>;
        toEsriLayer(serviceLayer: webMap.ServiceLayer): Promise<esri.layers.Layer>;
        toEsriFeatureSet(featureSet: webMap.FeatureSet): Promise<esri.tasks.FeatureSet>;
        toEsriGraphic(feature: webMap.Feature): Promise<esri.Graphic>;
        toEsriGeometry(geometry: webMap.Geometry): esri.geometry.Geometry;
        toEsriSymbol(symbol: webMap.Symbol): esri.symbol.Symbol;
        toEsriRenderer(renderer: webMap.Renderer): esri.renderer.Renderer;
        toEsriSpatialReference(spatialReference: webMap.SpatialReference): esri.SpatialReference;
        toEsriColor(color: webMap.Color): esri.Color;
        /**
         * Converts serialized web map data back into the original API objects wherever possible. This only
         * works if the object graph was serialized using fromObject(). Note that prototype chains for object
         * types other than the specific Geocortex/Esri types handled by this class will NOT be preserved by
         * toObject(fromObject(someObject)).
         */
        toObject(data: any): Promise<any>;
        clearCache(): void;
        /**
         * A wrapper for conversion methods that implements the Identity Map behaviour.
         */
        protected _convert(source: any, destType: string, doConversion: (any) => any, args?: any[]): any;
        /**
         * Resolves references that were added by _convert() due to cycles in the conversion input.
         */
        private _resolveReferences(object);
        protected _getWebMapLayerDefinitionFromDynamicLayer(dynamicServiceLayer: esri.layers.ArcGISDynamicMapServiceLayer, layerId: number): webMap.LayerDefinition;
        /**
         * Applies a web map service layer configuration to an Essentials map service.
         */
        protected _applyWebMapServiceLayerToMapService(serviceLayer: webMap.ServiceLayer, mapService: essentials.MapService): Promise<void>;
        /**
         * Applies web map layer configuration to a map service's layers. Returns a boolean indicating whether the map service
         * will need to be refreshed as a result.
         */
        protected _applyWebMapLayersToGcxLayers(serviceLayer: OperationalLayer, mapService: essentials.MapService): Promise<boolean>;
        /**
         * Applies web map configuration to an Essentials layer. Returns a boolean indicating whether the map service
         * will need to be refreshed as a result.
         */
        protected _applyWebMapLayerToGcxLayer(layer: webMap.Layer, index: number, gcxLayer: essentials.Layer): Promise<boolean>;
        protected _applyDrawingInfo(drawingInfo: DrawingInfo, mapService: essentials.MapService): Promise<void>;
        protected _findMatchingGcxMapService(serviceLayer: webMap.ServiceLayer): essentials.MapService;
        protected _findMatchingGcxLayer(layer: webMap.Layer | number | string, mapService: essentials.MapService): essentials.Layer;
        protected _findOrCreateMatchingGcxLayer(layer: webMap.Layer, mapService: essentials.MapService): Promise<essentials.Layer>;
        protected _findOrCreateMatchingGcxMapService(serviceLayer: webMap.ServiceLayer): Promise<essentials.MapService>;
        /**
         * Determines whether a new Essentials Layer object can be created for the given web map layer if
         * no existing layer matches.
         */
        protected _canCreateGcxLayer(layer: webMap.Layer, mapService: essentials.MapService): boolean;
        /**
         * Invoked when a new Essentials Layer object needs to be created from the given web map layer.
         */
        protected _createGcxLayer(layer: webMap.Layer, mapService: essentials.MapService): Promise<essentials.Layer>;
        /**
         * Determines whether a new Essentials MapService object can be created for the given web map service
         * layer if no existing map service matches.
         */
        protected _canCreateGcxMapService(serviceLayer: webMap.ServiceLayer): boolean;
        /**
         * Invoked when a new Essentials MapService object needs to be created from the given web map service layer.
         */
        protected _createGcxMapService(serviceLayer: webMap.ServiceLayer): Promise<essentials.MapService>;
        /** Gets the Essentials map service definition from a service layer for use with _createGcxMapService(). */
        protected _getMapServiceDefinition(serviceLayer: webMap.ServiceLayer): any;
        protected _isFeatureCollection(serviceLayer: webMap.ServiceLayer): boolean;
        protected _isKmlLayer(serviceLayer: webMap.ServiceLayer): boolean;
        protected _isGraphicsLayer(serviceLayer: webMap.ServiceLayer): boolean;
        /**
         * Adds a property to a converted object that identifies the type of the original source object.
         */
        protected _addSourceType(sourceType: string, object: any): any;
        /**
         * Get the value to use for the "layerType" property on a service layer. This property is not part of the
         * web map specification, but is used by AGOL.
         */
        private _getWebMapLayerType(layer);
        /**
         * Infers the type of an attribute from a given set of Graphic objects.
         */
        protected _inferAttributeType(graphics: esri.Graphic[], attributeName: string): string;
        /**
         * Sets a map service's visible layers based on the settings in a web map operational layer. Returns a
         * boolean indicating whether the service needs to be refreshed, i.e. whether any layer visibilities
         * have changed.
         */
        protected _setVisibleLayers(serviceLayer: webMap.OperationalLayer, mapService: essentials.MapService): boolean;
        protected _toGcxMapService(serviceLayer: webMap.ServiceLayer): Promise<essentials.MapService>;
        protected _toGcxLayer(layer: webMap.Layer, serviceLayer: webMap.ServiceLayer): Promise<essentials.Layer>;
        protected _toGcxFeatureSet(featureSet: webMap.FeatureSet): Promise<infrastructure.FeatureSet>;
        protected _toEsriLayer(serviceLayer: webMap.ServiceLayer): Promise<esri.layers.Layer>;
        protected _toEsriGraphicsLayer(serviceLayer: webMap.OperationalLayer): Promise<esri.layers.Layer>;
        protected _toEsriFeatureLayer(serviceLayer: webMap.OperationalLayer): Promise<esri.layers.Layer>;
        protected _toEsriFeatureSet(featureSet: webMap.FeatureSet): Promise<esri.tasks.FeatureSet>;
        protected _toGcxFeature(feature: webMap.Feature): Promise<infrastructure.Feature>;
        protected _toEsriGraphic(feature: webMap.Feature): Promise<esri.Graphic>;
        protected _toEsriGeometry(geometry: webMap.Geometry): esri.geometry.Geometry;
        protected _toEsriSymbol(symbol: webMap.Symbol): esri.symbol.Symbol;
        protected _toEsriRenderer(renderer: webMap.Renderer): esri.renderer.Renderer;
        protected _toEsriSpatialReference(spatialReference: webMap.SpatialReference): esri.SpatialReference;
        protected _toEsriColor(color: webMap.Color): esri.Color;
        protected _toObject(object: any): Promise<any>;
        protected _fromGcxMapService(mapService: essentials.MapService): webMap.ServiceLayer;
        protected _esriFeatureLayerToFeatureCollection(featureLayer: esri.layers.FeatureLayer): FeatureCollection;
        protected _fromGcxlayer(layer: essentials.Layer): webMap.Layer;
        protected _fromGcxFeatureSet(featureSet: infrastructure.FeatureSet): webMap.FeatureSet;
        protected _fromEsriLayer(layer: esri.layers.Layer): webMap.ServiceLayer;
        protected _fromEsriGraphicsLayer(layer: esri.layers.GraphicsLayer): webMap.ServiceLayer;
        protected _fromEsriFeatureLayer(layer: esri.layers.FeatureLayer): webMap.ServiceLayer;
        protected _fromEsriFeatureSet(featureSet: esri.tasks.FeatureSet): webMap.FeatureSet;
        protected _fromGcxFeature(feature: infrastructure.Feature): webMap.Feature;
        protected _fromEsriGraphic(graphic: esri.Graphic): webMap.Feature;
        protected _fromEsriGeometry(geometry: esri.geometry.Geometry): webMap.Geometry;
        protected _fromEsriSymbol(symbol: esri.symbol.Symbol): webMap.Symbol;
        protected _fromEsriRenderer(renderer: esri.renderer.Renderer): webMap.Renderer;
        protected _fromEsriSpatialReference(spatialReference: esri.SpatialReference): webMap.SpatialReference;
        protected _fromEsriColor(color: esri.Color): webMap.Color;
        protected _fromObject(object: any): any;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    const PROPERTY_MEASUREMENT_ID: string;
    const PROPERTY_HIGHLIGHT_ID: string;
    /**
     * Provides methods for converting between Geocortex/Esri API objects and their project equivalents.
     *
     * Note that once an input object has been converted, any additional attempts to convert it again will always return
     * a reference to the same result object (this is a form of the Identity Map pattern). To reset this mapping, use clearCache().
     */
    class ProjectConverter extends webMap.WebMapConverter {
        /**
         * A filter that determines which properties to save and restore for user-added layers.
         */
        protected _gcxLayerDefinitionFilter: Object;
        /**
         * A filter that determines which properties to save and restore for user-added map services.
         */
        protected _gcxMapServiceDefinitionFilter: Object;
        fromGcxMapService(mapService: essentials.MapService): project.ServiceLayer;
        fromGcxLayer(layer: essentials.Layer): project.Layer;
        fromGcxFeatureSetCollection(fsc: infrastructure.FeatureSetCollection): project.FeatureSetCollection;
        fromGcxFeatureSet(featureSet: infrastructure.FeatureSet): project.FeatureSet;
        fromEsriFeatureSet(featureSet: esri.tasks.FeatureSet): project.FeatureSet;
        fromEsriLayer(layer: esri.layers.Layer): project.ServiceLayer;
        fromGcxFeature(feature: infrastructure.Feature): project.Feature;
        fromEsriGraphic(graphic: esri.Graphic): project.Feature;
        toGcxFeatureSetCollection(fsc: project.FeatureSetCollection): Promise<infrastructure.FeatureSetCollection>;
        protected _canCreateGcxLayer(layer: webMap.Layer, mapService: essentials.MapService): boolean;
        protected _canCreateGcxMapService(serviceLayer: webMap.ServiceLayer): boolean;
        protected _createGcxMapService(serviceLayer: webMap.ServiceLayer): Promise<essentials.MapService>;
        protected _createGcxLayer(layer: webMap.Layer, mapService: essentials.MapService): Promise<essentials.Layer>;
        protected _getMapServiceDefinition(serviceLayer: webMap.ServiceLayer): any;
        protected _getWebMapLayerDefinitionFromDynamicLayer(dynamicServiceLayer: esri.layers.ArcGISDynamicMapServiceLayer, layerId: number): webMap.LayerDefinition;
        protected _applyDynamicLayerInfo(layer: project.Layer, index: number, gcxLayer: essentials.Layer): void;
        protected _applyDrawingInfo(drawingInfo: DrawingInfo, mapService: essentials.MapService): Promise<void>;
        protected _applyWebMapLayerToGcxLayer(layer: webMap.Layer, index: number, gcxLayer: essentials.Layer): Promise<boolean>;
        protected _toGcxLayer(layer: webMap.Layer, serviceLayer: webMap.ServiceLayer): Promise<essentials.Layer>;
        protected _toGcxFeatureSetCollection(fsc: project.FeatureSetCollection): Promise<infrastructure.FeatureSetCollection>;
        protected _toGcxFeatureSet(featureSet: project.FeatureSet): Promise<infrastructure.FeatureSet>;
        protected _toGcxFeature(feature: project.Feature): Promise<infrastructure.Feature>;
        protected _createGcxFeature(feature: project.Feature): Promise<infrastructure.Feature>;
        protected _applyFeatureToGcxFeature(feature: project.Feature, gcxFeature: infrastructure.Feature): Promise<void>;
        protected _findMatchingGcxFeature(feature: project.Feature, gcxFeatureSet: infrastructure.FeatureSet): Promise<infrastructure.Feature>;
        protected _queryFeatures(features: project.Feature[], featureSet: project.FeatureSet): Promise<esri.Graphic[]>;
        protected _toEsriGraphic(feature: webMap.Feature): Promise<esri.Graphic>;
        protected _toEsriFeatureSet(featureSet: project.FeatureSet): Promise<esri.tasks.FeatureSet>;
        protected _fromGcxMapService(mapService: essentials.MapService): project.ServiceLayer;
        protected _fromGcxlayer(layer: essentials.Layer): project.Layer;
        protected _fromGcxFeatureSetCollection(fsc: infrastructure.FeatureSetCollection): project.FeatureSetCollection;
        protected _fromGcxFeatureSet(featureSet: infrastructure.FeatureSet): project.FeatureSet;
        protected _fromGcxFeature(feature: infrastructure.Feature): project.Feature;
        protected _fromEsriGraphic(graphic: esri.Graphic): webMap.Feature;
        protected _toGcxExtendedProperties(extendedProperties: {
            [name: string]: any;
        }, owner: string): Promise<NameValueProperty[]>;
        protected _fromGcxExtendedProperties(extendedProperties: ObservableCollection<NameValueProperty>): {
            [name: string]: any;
        };
        /**
         * Determines whether a feature can be serialized using only its ID, rather than storing all of
         * its attribute and geometry data. In this case, the original layer will be re-queried during
         * deserialization to restore the data.
         */
        protected _canRequeryFeatureData(feature: infrastructure.Feature): boolean;
    }
}
/**
 * Contains infrastructural components used for authoring and extending the Geocortex Viewer for HTML5.
 */
declare module geocortex.essentialsHtmlViewer {
    class ViewerApplication extends geocortex.framework.application.Application {
        version: string;
        map: esri.Map;
        site: geocortex.essentials.Site;
        markupLayer: Observable<esri.layers.GraphicsLayer>;
        accessibilityManager: mapping.infrastructure.accessibility.AccessibilityManager;
        coordinatesManager: mapping.infrastructure.coordinates.CoordinatesManager;
        featureSetManager: mapping.infrastructure.FeatureSetManager;
        searchManager: mapping.infrastructure.search.SearchManager;
        highlightManager: mapping.infrastructure.HighlightManager;
        nativeManager: mapping.infrastructure.nativeIntegration.NativeManager;
        offlineManager: mapping.infrastructure.offline.OfflineManager;
        stateManager: mapping.infrastructure.applicationState.StateManager;
        undoManager: mapping.infrastructure.undo.UndoManager;
        menuRegistry: mapping.infrastructure.menus.MenuRegistry;
        toolRegistry: mapping.infrastructure.tools.ToolRegistry;
        toolbarGroupRegistry: mapping.infrastructure.toolbarGroup.ToolbarGroupRegistry;
        shellName: string;
        isArcGisWebApp: boolean;
        viewerConfigPath: string;
        project: mapping.infrastructure.project.ProjectManager;
        webMap: mapping.infrastructure.webMap.WebMapManager;
        bookmarks: mapping.infrastructure.BookmarkManager;
        private _applicationContentPolicy;
        private _workflowActivityDispatcher;
        private _activityTypeHandlerQueue;
        private _activityIdHandlerQueue;
        private _localeResourcesLoaded;
        private _initialProjectPromise;
        constructor(configObject: any, hostElement?: HTMLElement, id?: string, configTokens?: {
            [token: string]: string;
        });
        defaultContentPolicy: mapping.infrastructure.ContentPolicy;
        followNavigationLink(args: {
            url: string;
            element: HTMLAnchorElement;
        }): boolean;
        protected _registerApplicationLevelCommands(): void;
        protected _executeOpenWebPage(argument: string | {
            url: string;
            element: HTMLAnchorElement;
        }): boolean;
        initialize(): void;
        /**
         * Returns a promise that is fulfilled when the Essentials site is initialized.
         */
        waitUntilSiteInitialized(): Promise<void>;
        /**
         * Returns a promise that is fulfilled when the Document Store is initialized.
         */
        waitUntilDocumentStoreInitialized(): Promise<void>;
        /**
         * Returns a promise that is fulfilled when the esri map is loaded (i.e., the first service layer has been
         * added to the map and its spatial reference set).
         */
        waitUntilMapLoaded(): Promise<void>;
        /**
         * Returns a promise that is fulfilled when the given service layer has finished loading.
         */
        waitUntilServiceLayerLoaded(serviceLayer: esri.layers.Layer): Promise<void>;
        /**
         * Returns a promise that is fulfilled when all service layers in the site have finished loading.
         */
        waitUntilSiteServiceLayersLoaded(): Promise<void>;
        /**
         * Returns a promise that is fulfilled when the all libraries are loaded.
         */
        waitUntilAllLibrariesLoaded(): Promise<void>;
        /**
         * Returns a promise that is fulfilled when the view with the given ID is initialized.
         */
        waitUntilViewInitialized(viewId: string): Promise<framework.ui.ViewBase>;
        registerActivityTypeHandler(typeName: string, handler: Function): void;
        registerActivityIdHandler(id: string, handler: Function): void;
        getWorkflowActivityDispatcher(): geocortex.workflow.ActivityDispatcher;
        setWorkflowActivityDispatcher(dispatcher: geocortex.workflow.DefaultActivityDispatcher): void;
        /**
         * Shuts down the application, releasing all modules, views, bindings, view models, regions, commands, and events.
         */
        shutdown(state: any): void;
        /**
         * Called immediately after the configuration object has been loaded from JSON, and before any libraries are downloaded.
         * have been downloaded.
         * @protected
         */
        onConfigurationLoaded(configObject: any): void;
        protected getInitialState(moduleName: string, libraryId: string): Promise<any>;
        private _locale;
        locale: string;
        doWhenMapInitialized(action: () => void): void;
        /**
         * Loads necessary locale resources for 3rd party libraries once the application locale is known.
         */
        private _loadThirdPartyLocaleResources();
        private _loadMomentLocaleData();
        private _loadGlobalizeLocaleData();
        /**
         * A list of locales that are supported by Moment.js.
         */
        private _momentLocales;
        /**
         * A list of locales that are supported by Globalize.js.
         */
        private _globalizeLocales;
        /**
         * Maps a locale code to one of the available locales for Moment.js.
         */
        private _getMomentLocaleForLocale(locale);
        /**
         * Maps a locale code to one of the available locales for Globalize.js.
         */
        private _getGlobalizeLocaleForLocale(locale);
        /**
         * Given a list of available locales, chooses the most appropriate match for a target locale.
         */
        private _getBestMatchLocale(locale, availableLocales);
        /**
         * Parses a locale code into its component parts.
         */
        private _parseLocale(locale);
        /**
         * Converts a locale code to its canonicalized form, e.g. "de-ch" becomes "de-CH", "ZH-HANS-CN" becomes "zh-Hans-CN").
         */
        private _canonicalizeLocale(locale);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.GeometryUtils {
    var DEFAULT_GEOMETRY_SERVICE_URI: string;
    /**
     *
     */
    function isValidGeometry(geometry: esri.geometry.Geometry): boolean;
    /**
     * Returns an approximation of the center point of the given geometry, as measured in Cartesian space.
     * @param geometry The geometry whose center needs to be returned
     */
    function getMiddle(geometry: esri.geometry.Geometry): esri.geometry.Point;
    /**
     * Returns the midpoint of the line segment defined by two endpoints.
     * @param pointA The beginning point of the line segment.
     * @param pointB The ending point of the line segment.
     */
    function getMidpoint(pointA: esri.geometry.Point, pointB: esri.geometry.Point): esri.geometry.Point;
    /**
     * Returns the type of ESRI geometry
     * @param typeName
     * @param defaultType
     */
    function getEsriGeometryType(typeName: string, defaultType?: string): string;
    /**
     * This "protected" method is deprecated. Use the public "getGeometryService" instead. This is being retained in order to avoid breaking external/services
     *  code that may be using it.
     */
    function _getGeometryService(app: geocortex.framework.application.Application): esri.tasks.GeometryService;
    /**
     * Returns the ESRI geometry service
     * @param app The {@link geocortex.framework.application.Application}
     */
    function getGeometryService(app: geocortex.framework.application.Application): esri.tasks.GeometryService;
    /**
     * Determines if there requires a projection to go between a given Spatial Reference and the current application instance.
     * @param geometry The geometry we would like to determine if it needs to be projected
     * @param app An instance of the application (used to get the current map spatial reference).
     */
    function needsProjection(geometry: esri.geometry.Geometry, app: geocortex.essentialsHtmlViewer.ViewerApplication): boolean;
    /**
    * Projects a geometry from one coordinate system to another (well-known) coordinate system, firing a failure callback on error.
    * @param geometry The geometry to project.
    * @param outSR The spatial reference of the target coordinate system.
    * @param callback The callback function for success (http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi/geometryservice.htm#onProjectComplete).
    * @param errback The error callback function.
    * @param app An instance of the application (used to get the url to the geometry service).
    */
    function projectGeometry(geometry: esri.geometry.Geometry, outSR: esri.SpatialReference, callback: (projected: esri.geometry.Geometry) => void, errback: (error: Error) => void, app: geocortex.framework.application.Application): void;
    /**
    * Projects a geometry from one coordinate system to another (well-known) coordinate system with a transformation, firing a failure callback on error.
    * @param geometry The geometry to project.
    * @param outSR The spatial reference of the target coordinate system.
    * @param transformationWkid The WKID for the transformation to be applied.
    * @param callback The callback function for success (http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi/geometryservice.htm#onProjectComplete).
    * @param errback The error callback function.
    * @param app An instance of the application (used to get the url to the geometry service).
    */
    function projectGeometryWithTransform(geometry: esri.geometry.Geometry, outSR: esri.SpatialReference, transformationWkid: number, callback: (projected: esri.geometry.Geometry) => void, errback: (error: Error) => void, app: geocortex.framework.application.Application): void;
    /**
    * Projects the geometries provided in the projectParameters.
    * @param projectParameters The project parameters (see http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi/projectparameters.htm).
    * @param callback The callback function for success (http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi/geometryservice.htm#onProjectComplete).
    * @param errback The error callback function.
    * @param app An instance of the application (used to get the url to the geometry service).
    */
    function project(projectParameters: esri.tasks.ProjectParameters, callback: Function, errback: (error: Error) => void, app: geocortex.framework.application.Application): void;
    /**
     * Simplify the polygons.
     * @param polygons An array of esri.geometry.Polygons.
     * @param callback A function to be called with the set of simplified polygons once completed.
     * @param errback The error callback function.
     * @param app An instance of the application (used to get the url to the geometry service).
     */
    function simplifyPolygons(polygons: esri.geometry.Polygon[], callback: Function, errback: (error: Error) => void, app: geocortex.framework.application.Application): void;
    /**
     * Simplify a polygon.
     * @param polygon A single esri.geometry.Polygon.
     * @param callback A function to be called with a simplified polygon once completed.
     * @param errback The error callback function.
     * @param app An instance of the application (used to get the url to the geometry service).
     */
    function simplifyPolygon(polygon: esri.geometry.Polygon, callback: (poly: esri.geometry.Polygon) => void, errback: (error?: Error) => void, app: geocortex.framework.application.Application): void;
    /**
     * Projects the geometries locally.
     * @param geometries An array of geometries which needs to be projected.
     * @param outSR {esri.SpatialReference} outSR The spatial reference to which the geometries should be converted
     * @param callback A function to be called after the geometries have been projected.
     * @param errback The error callback function.
     * @private
     */
    function _projectLocally(geometries: esri.geometry.Geometry[], outSR: esri.SpatialReference, callback: (geometries: esri.geometry.Geometry[]) => void, errback: (error: Error) => void): void;
    /**
     * Creates and returns a circle with given specifications
     * @params
     * spatialReference Spatial Reference of the map
     * centerPoint Center point of the circle
     * radius Radius of the circle in meters
     * ringSize Number of points in the ring that proximate the circle
     */
    function createCircle(spatialReference: esri.SpatialReference, centerPoint: esri.geometry.Point, radius: number, ringSize: number): esri.geometry.Polygon;
    /**
     * Fixes the aspect ratio, such that the width or height of the envelope is expanded
     * so that the aspect ratio of the envelope matches that of the reference envelope.
     * @param envelope The envelope, whose aspect ratio should be fixed.
     * @param reference The reference envelope, to match the aspect ratio to.
     * @returns A new envelope with the width or height adjusted to match the aspect ratio of the reference envelope.
     */
    function fixAspectRatio(newExtent: esri.geometry.Extent, referenceExtent: esri.geometry.Extent): esri.geometry.Extent;
    /**
     * Converts an extent to a polygon.
     */
    function extentToPolygon(envelope: esri.geometry.Extent): esri.geometry.Polygon;
    /**
     * Compares two point geometries for equality. Returns true if both Point structures contain the same X, Y values and spatial reference; otherwise, false.
     */
    function pointsAreEqual(a: esri.geometry.Point, b: esri.geometry.Point): boolean;
    /**
     * Registers default datum transforms. This includes RD New (28992), British National Grid (27700), and Czech S-JTSK(102067).
     */
    function registerDefaultDatumTransforms(): void;
    /**
     * Registers the datum transform to be used when projecting geometries between the specified spatial references.
     * @param datumTransforms An array of datum transforms to add to the registry
     */
    function registerDatumTransforms(datumTransforms: gis.DatumTransform[]): void;
    /**
     * Retrieves the datum transform to be used when projecting geometries between the specified spatial references, and whether to transform forward.
     * @param from The spatial reference you are projecting from.
     * @param to The spatial reference you are projecting to.
     * @returns An object with the properties `transformation` and `transformForward`, relating to the datum transform for the given spatial reference parameters.
     */
    function getDatumTransformParameters(from: esri.SpatialReference, to: esri.SpatialReference): DatumTransformParameters;
    /**
     * Determines whether or not the geometries intersect.
     * @param geometry1 The geometry that is tested for the intersects relationship to the other geometry.
     * @param geometry2 The geometry being intersected.
     * @return A promise for whether or not the geometries intersect.
     */
    function intersects(geometry1: esri.geometry.Geometry, geometry2: esri.geometry.Geometry): Promise<boolean>;
    function unionGeometries(geometries: esri.geometry.Geometry[]): Promise<esri.geometry.Geometry>;
    /**
     * Separate a multi-part geometry into a list of individual geometries.
     * @param geometry The geometry to separate.
     */
    function explodeGeometry(geometry: esri.geometry.Geometry): esri.geometry.Geometry[];
    /**
     * Split polyline or polygon geometries where they cross the cutter polyline.
     * @param geometries The polyline or polygon geometries to cut.
     * @param cutter The polyline used to cut the geometries.
     * @param app The {@link geocortex.framework.application.Application}.
     */
    function cutGeometries(geometries: esri.geometry.Geometry[], cutter: esri.geometry.Polyline, app: geocortex.framework.application.Application): Promise<esri.geometry.Geometry[][]>;
    /**
     * Converts an envelope to a ring.
     */
    function toRing(env: esri.geometry.Extent): number[][];
}
/**
 * Static utility class for the buffer module.
 */
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer.BufferUtils {
    /**
     * The buffer units that the Buffer Module supports along with their descriptions. This static object will
     * be populated with the configured language resources when the buffer module initializes.
     */
    var SUPPORTED_BUFFER_UNITS: infrastructure.buffer.BufferUnits;
    /**
     * The geometry service has no inherent support for yards. Defining our own constant here so we can support it.
     */
    var GCX_UNIT_YARDS: number;
    /**
     * Buffers a given geometry and returns a promise containing the Buffer Results.
     * @param app The application that's requesting the buffer operation.
     * @param bufferGeometryArgs The {@link infrastructure.buffer.BufferGeometryArgs} object containing the buffer configuration.
     * @returns A Promise returning a {@link infrastructure.buffer.BufferOperationResult} object on success and a {@link infrastructure.buffer.BufferOperationError} object on failure.
     */
    function bufferGeometry(app: geocortex.essentialsHtmlViewer.ViewerApplication, bufferGeometryArgs: BufferGeometryArgs): Promise<BufferResultBase>;
    /**
     * Buffers an array of given geometries and returns a promise containing the Buffer Results. The input geometries need not be of the same type. However, multiple buffer requests may
     * be issued if geometries are of different types.
     * @param app The application that's requesting the buffer operation.
     * @param bufferGeometriesArgs The {@link infrastructure.buffer.BufferGeometriesArgs} object containing the buffer configuration.
     * @returns A Promise returning a {@link infrastructure.buffer.BufferOperationResult} object on success and a {@link infrastructure.buffer.BufferOperationError} object on failure.
     */
    function bufferGeometries(app: geocortex.essentialsHtmlViewer.ViewerApplication, bufferGeometriesArgs: BufferGeometriesArgs): Promise<BufferResultBase>;
    /**
    * Buffers an array of given geometries and returns a promise containing the Buffer Results. Note that all input geometries must be of the same type.
    * @param app The application that's requesting the buffer operation.
    * @param bufferParameters The {@link esri.tasks.BufferParameters} object containing the buffer configuration.
    * @returns A Promise returning a {@link infrastructure.buffer.BufferOperationResult} object on success and a {@link infrastructure.buffer.BufferOperationError} object on failure.
    */
    function buffer(app: geocortex.essentialsHtmlViewer.ViewerApplication, bufferParameters: esri.tasks.BufferParameters): Promise<BufferResultBase>;
    /**
     * Checks to see if a given WKID is geographic or not.
     */
    function isGeographicWkid(wkid: string | number): boolean;
    /**
    * Retrieves the unit description from the configuration string used by the Buffer Module.
    * @param config A string containing the configuration value for which the unit description is required. Can be any SUPPORTED_BUFFER_UNITS property value.
    * @return A {@link infrastructure.buffer.BufferUnitDesc} object with details about the configured language resources for the config string.
    */
    function getUnitDescFromConfig(config: string): infrastructure.buffer.BufferUnitDesc;
    /**
    * Returns the type of ESRI Geometry Service unit constant. Works for standard abbreviations, display text and esri.Unit constants. Will also work to convert between
    * string representations of esri's geometry service unit constants and the constants themselves.
    * @param typeName
    * @param defaultType
    * @return esri.tasks.GeometryService unit constant
    */
    function getGeometryServiceUnitConstant(typeName: string, defaultUnit?: any): any;
    function convertLength(length: number, fromUnit: number, toUnit: number): number;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.buffer {
    /**
     * Interface for the arguments passed to the DisplayBufferOptions command. The command can also take in a simple string specifying the target command.
     */
    interface DisplayBufferOptionsArgs {
        /**
         * The target command for which the buffer options display is requested.
         */
        targetCommand: string;
        /**
         * The delegate function, if any, that executes when the user hits the continue button on the DisplayBufferOptions dialog
         */
        delegateFunction?: (args?: BufferDistanceChangedEventArgs) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    /**
     * Options for the `CreateOrEditFeatureFromBarcodeScan` command.
     */
    interface CreateOrEditFeatureFromBarcodeScanArgs {
        /** The ID of the feature map service on which to place a new feature or find an existing one. */
        featureServiceId: string;
        /** The field name to set (when creating a feature) or search for (when looking to edit an existing feature). */
        scanResultFieldName: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    /**
     * Options that are relevant to a single-point geolocation (Find Me).
     */
    interface SingleGeolocationProfile {
        accuracyThreshold?: number;
        timeLimit?: number;
    }
    /**
     * Arguments for the `Geolocate` command.
     */
    interface GeolocateArgs extends SingleGeolocationProfile {
        /** The name of the singleGeolocationProfile to use. */
        profile?: string;
        /** If true, the geolocate command will tolerate an active tool. If false, the active tool will be cleared away. Defaults to false. */
        toolFriendly?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    interface Cluster {
        x: number;
        y: number;
        attributes: ClusterAttributes;
    }
    interface ClusterAttributes {
        clusterCount: number;
        clusterId: number;
        extent: Array<number>;
    }
    interface GcxEventHandler {
        eventName: string;
        token: string;
    }
    interface RendererInformation {
        rangeString: Observable<string>;
        isVisible: Observable<boolean>;
    }
    /**
     * Representation of a ClusterLayer.
     */
    class ClusterLayer extends esri.layers.GraphicsLayer {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** The Geocortex Layer that is used as the basis for the cluster layer. */
        gcxLayer: geocortex.essentials.Layer;
        /** The Feature Layer that is used as the basis for the cluster layer. */
        featureLayer: esri.layers.FeatureLayer;
        /** Layer to represent the individual graphics within an expanded cluster. */
        singleFeatureLayer: esri.layers.GraphicsLayer;
        /** The radius of each cluster. */
        clusterRadius: Observable<number>;
        /** The maximum number of features to include in a cluster. */
        maxFeaturesInCluster: Observable<number>;
        /** Retyping of the renderer to show that we're using a ClassBreaksRenderer */
        renderer: esri.renderer.ClassBreaksRenderer;
        /** Observale information about the renderer currently in use. Used by the legend. */
        rendererInformation: RendererInformation[];
        /** The renderer for the Feature Layer that is passed in on object construction. */
        featureLayerRenderer: esri.renderer.Renderer;
        /** All of the graphics from the feature layer. */
        protected _featureLayerGraphics: esri.Graphic[];
        /** Collection of information for all clusters. */
        protected _clusters: Cluster[];
        /** The clusters that are currently being hidden when a cluster is focused upon/exploded. */
        protected _hiddenClusters: esri.Graphic[];
        /** Color of the label on clusters. */
        protected _clusterLabelColor: esri.Color;
        /** Background color of clusters. */
        protected _clusterBackgroundColor: esri.Color;
        /** The name of the FeatureSet that the features inside of exploded clusters will be placed into. */
        protected _featureSetName: string;
        /** Event handlers that are handled by esri/dojo. */
        protected _esriEventHandlers: esri.Handle[];
        /** Event handlers that are handled by geocortex/Framework*/
        protected _gcxEventHandlers: GcxEventHandler[];
        /** The font size */
        protected _fontSize: string;
        /** The font family */
        protected _fontFamily: string;
        /** Event handler for map clicks after a cluster has been exploded. */
        protected _mapClickHandler: esri.Handle;
        constructor(gcxLayer: geocortex.essentials.Layer, app: essentialsHtmlViewer.ViewerApplication);
        /**
         * Called whenever clusters need to be recalculated.
         */
        recluster(): void;
        /**
         * Clears all of the event handlers, layers, and other persistent things that are associated with this cluster.
         */
        destroy(): void;
        /**
         * Used to detect when a cluster is clicked by the user.
         * If a valid click is detected, then all other clusters are hidden and the selected cluster has its graphics displayed.
         * @param event The ArcGIS MouseEvent that triggered the cluster's click action.
         */
        onFeatureClicked(event: esri.AGSMouseEvent): void;
        /**
         * Assigns values and event listeners concerned with the map.
         * @param map The esri map that is associated with this layer.
         */
        protected _setupEventListeners(map: esri.Map): void;
        /**
         * Runs after a geometry edit/feature editor is closed to ensure what is represented is proper.
         */
        protected _handleGeometryChange(): void;
        /**
         * Runs after the Feature Editor is closed.
         */
        protected _handleEditorClosedEvent(): void;
        /**
         * Run whenever the map is clicked and the cluster layer is active.
         * @param event The MouseEvent/TouchEvent that triggered this.
         */
        protected _mapClickedEvent(event: any): void;
        /**
         * Run whenever the map's extent is changed and clustering is active.
         * @param extent The new extent of the map.
         * @param args Arguments involving the map's new extent.
         */
        protected _mapExtentChangedEvent(extent: any, args: any): void;
        /**
         * Clears the data from the cluster that has been exploded when a maptip is closed.
         */
        protected _mapTipClosedEvent(): void;
        /**
         * Cleans up the cluster layer that has been removed.
         * @param clusterLayer The ClusterLayer that is being disabled/removed.
         */
        protected _clusterLayerRemovedEvent(clusterLayer: ClusterLayer): void;
        /**
         * Raised whenever a layer's visibility changes. Used to make it so clusters are invisible when a layer is disabled at
         * the layer list level.
         * @param result An object with an Essentials Layer, MapService, and visibility boolean.
         */
        protected _layerVisibilityChangedEvent(result: {
            layer: essentials.Layer;
            mapService: essentials.MapService;
            visibility: boolean;
        }[]): void;
        /**
         * Sets up the renderer and the various breaks that are used to represent clusters at different sizes.
         * This can be called dynamically as the size of the clusters change depending on the number of features in the largest cluster.
         */
        protected _loadRenderer(): void;
        /**
         * Checks to see if a valid break can be generated from the passed in information. If so, then generates a break on the passed renderer.
         * @param renderer The ClassBreaksRenderer that will have a new break added to it.
         * @param symbolSize The size in pixels of the circle to be generated.
         * @param rangeStart The start of the range.
         * @param rangeEnd The end of the range.
         * @param largestClusterSize The number of features in the largest cluster on screen.
         * @param rendererInformationPosition RendererInformation tracks visibility/values on a 0-3 scale to communicate to the legend.
         */
        protected _addBreak(renderer: esri.renderer.ClassBreaksRenderer, symbolSize: number, rangeStart: number, rangeEnd: number, largestClusterSize: number, rendererInformationPosition: number): void;
        /**
         * Used to make the passed color arrray slightly transparent.
         * @param color An array of RGBA color values.
         */
        protected _makeTransparent(color: Array<number>): Array<number>;
        /**
         * Checks to see if the passed point is within the tolerance (pixels) of the current cluster.
         * @param point The point to compare to the cluster.
         * @param cluster The cluster to compare to the point.
         */
        protected _isValidCluster(point: esri.geometry.Point, cluster: Cluster, resolution: number): boolean;
        /**
         * Checks to see if the current cluster has exceeded the configured maximum cluster size.
         * Returns false if no maximum cluster size is configured.
         * @param cluster The cluster to evaluate.
         */
        protected _isClusterFull(cluster: Cluster): boolean;
        /**
         * Generates the clusters by going through the graphics stored in _featureLayerGraphics.
         */
        protected _generateClusters(): void;
        /**
         * Matches up graphics with clusters and associates them.
         * @param preserveClusterLocation Whether the addition of a point to a cluster should adjust where the cluster is located.
         */
        protected _addGraphicsToClusters(preserveClusterLocation: boolean): void;
        /**
         * Adds all generated clusters to the layer.
         * Before doing so, it checks to see what the breaks should be for graphically representing cluster size.
         */
        protected _showAllClusters(): void;
        /**
         * Adds an individual cluster to the layer.
         * @param cluster The cluster to add to the layer.
         */
        protected _showCluster(cluster: Cluster): void;
        /**
         * Retrieves the symbology associated with the passed esri graphic.
         * @param graphic The Esri graphic to retrieve the feature symbology for.
         */
        protected _getRenderedSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
        /**
         * Adds a point to an existing cluster.
         * @param graphic The graphic to be associated with the cluster.
         * @param p The point/graphic that will readjust the cluster location.
         * @param cluster The cluster to be associated with.
         * @param preserveClusterLocation Whether the cluster's location should be adjusted when the point is added.
         */
        protected _clusterAddPoint(graphic: esri.Graphic, p: any, cluster: Cluster, preserveClusterLocation: boolean): void;
        /**
         * Called when there is no cluster within range of the point. Creates a new cluster in that location.
         * @param graphic The graphic to use as a reference for the beginning of the cluster.
         * @param graphic p The point specifying where the cluster is to be created.
         */
        protected _createCluster(graphic: esri.Graphic, point: esri.geometry.Point): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface HeatMapArgs {
        /** The Geocortex Layer to visualize with a heat map. */
        gcxLayer: geocortex.essentials.Layer;
        /** Whether or not the visualization is being applied on application startup. */
        onStartUp?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    /**
     * Arguments for the `RunReport` command.
     */
    interface RunReportArgs {
        /** The report to run. */
        report: essentials.Report;
        /** The group of features that the report shall be run upon. */
        reportable: FeatureSetCollection | FeatureSet | Feature | Feature[];
        /** ReportParameters passed along to the REST endpoint. FYI: If this is provided, the `RunReport` command implementation will impose some forced and default values overwriting onto its properties. */
        reportParameters?: essentials.ReportParameters;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.documents {
    import Grant = geocortex.core.documents.Grant;
    /**
     * Model for a Moniker which has grants on a document.
     */
    class MonikerModel {
        /**
         * The grants that this moniker has on the document.
         */
        grants: Grant[];
        /**
         * The ID of the moniker.
         */
        id: string;
        /**
         * The name of the moniker.
         */
        name: string;
        /**
         * The icon URI for the moniker.
         */
        iconUri: string;
        /**
         * Whether or not this moniker represents a global grant.
         */
        isGlobal: boolean;
        /**
         * Whether or not this moniker represents a public grant.
         */
        isPublic: boolean;
        /**
         * Whether or not this moniker has its grants revoked.
         */
        isRevoked: Observable<boolean>;
        /**
         * Whether or not this moniker has a reader grant.
         */
        canRead: boolean;
        /**
         * Whether or not this moniker has a writer grant.
         */
        canWrite: boolean;
        /**
         * Whether this widget is enabled.  All contained controls will take this value.
         */
        enabled: Observable<boolean>;
        constructor(config: MonikerModelConfig);
        addGrant(grant: Grant): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.documents {
    import Grant = geocortex.core.documents.Grant;
    /**
     * Configuration for a Moniker Model. Either a grant or ID is required.
     */
    interface MonikerModelConfig {
        /**
         * The grant the moniker view model was constructed from.
         */
        grant?: Grant;
        /**
         * The ID of the moniker.
         */
        id?: string;
        /**
         * The name of the grant.
         */
        name?: string;
        /**
         * The icon URI for the grant.
         */
        iconUri?: string;
        /**
         * Whether or not this grant is a global grant.
         */
        isGlobal?: boolean;
        /**
         * Whether or not this grant is a public grant.
         */
        isPublic?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    /**
     * Payload of the OfflineMapEditorFinishedEvent.
     */
    interface OfflineMapEditorFinishedEventArgs {
        canceled: boolean;
        /**
         * The existing OfflineMap the editor was started with, if any.
         */
        existingOfflineMap?: infrastructure.offline.OfflineMap;
        /**
         * The new values for the OfflineMap, unless editing was canceled.
         */
        newOfflineMap?: infrastructure.offline.OfflineMap;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates.AngleDirectionSystem {
    /**
    * Polar coordinates. 0 degrees points East, angles are measured counter-clockwise.
    */
    const POLAR: string;
    /**
    * North azimuth. 0 degrees points North, angles are measured clockwise.
    */
    const NORTH_AZIMUTH: string;
    /**
    * South azimuth. 0 degrees points South, angles are measured clockwise.
    */
    const SOUTH_AZIMUTH: string;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates.AngleFormat {
    /**
    * Decimal degrees.
    */
    const DD: string;
    /**
    * Whole degrees with decimal minutes.
    */
    const DDM: string;
    /**
    * Degrees, minutes, seconds.
    */
    const DMS: string;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates {
    /**
     * This interface represents a processed base coordinate, projected and formatted in the target coordinate system.
     */
    interface Coordinate extends CoordinateBase {
        /**
         * The target coordinate system for this coordinate.
         */
        targetCoordinateSystem: CoordinateSystem;
        /**
         * Formatted X or Latitude depending on the target coordinate system
         */
        formattedLatitudeOrX: string;
        /**
        * Formatted Y or Longitude depending on the target coordinate system
        */
        formattedLongitudeOrY: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates {
    /**
     * The base input coordinate. This could be a {@link esri.geometry.Point} object.
     */
    interface CoordinateBase {
        /**
         * The 'x' coordinate of the input point.
         */
        x: number;
        /**
         * The 'y' coordinate of the input point.
         */
        y: number;
        /**
         * The spatial reference of the coordinates.
         */
        spatialReference: esri.SpatialReference;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates {
    /**
     * Configuration options for the {@link CoordinatesModel}.
     */
    interface CoordinatesModelConfig {
        /**
         * Optional string specifying the id of the CoordinatesModel. If initialized as a view model from the desktop/tablet/handheld json config files, the view model ID will be used. If not, it needs to be specified here.
         */
        id?: string;
        /**
         * An array defining which unit(s) the primary map coordinates should be displayed in. The options are "xy" - projected, "dd" - decimal degrees, "ddm" - decimal degrees & minutes and "dms" - decimal degrees, minutes, seconds.
         */
        defaultCoordinateDisplayTypes: string[];
        /**
         * An array of custom coordinate systems defined by the user.
         */
        customCoordinateSystems: CoordinateSystem[];
        /**
         * An integer denoting the number of fractional digits to round the coordinates to. Defaults to 5 if not specified.
         */
        fractionalDigits?: number;
        /**
         * The default geographic coordinate system to use. Defaults to 4326 (WGS 1984) if not specified.
         */
        defaultGcsWkid?: number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates {
    const featureSetExtendedProperty: string;
    const coordinateIdentifierProperty: string;
    /**
     * The Coordinates Manager manages all the coordinate models registered in the system.
     * Not only does it act as the central repository for coordinate systems, it is also responsible for mapping between the input source
     * coordinate stream and the output coordinate stream when needed - i.e. when there are subscribers to the output coordinate stream.
     */
    class CoordinatesManager {
        /**
        * The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this accessibility manager instance belongs to.
        */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** protected variables */
        protected _defaultCoordinatesModel: CoordinatesModel;
        protected _registeredCoordinateModels: string[];
        protected _prevCoord: CoordinateBase;
        /**
        * Initializes a new instance of the {@link CoordinatesManager} class.
        * @param app The {@link framework.application.Application} that this instance belongs to.
        */
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication);
        /**
         * Registers a new {@link CoordinatesModel}
         * @param setDefault If this is true then the currently registered model will be set as default. Please note that if there is only one model registered in hte system, it will automatically
         * be set as default, regardless of this setting.
         * @return The newly created {@link CoordinatesModel} or null on error.
         */
        registerModel(model: CoordinatesModel, setDefault?: boolean): boolean;
        /**
         Retrieves the coordinates for the provided mapPoint or the current mouse pointer location one time in either the specified Coordinate System or in the currently active one
         @return Promise<CoordinateInfo> Returns a promise for the coordinate information.
         */
        getCoordinate(inputCoordinate: CoordinateBase, targetCoordinateSystem?: CoordinateSystem, coordinateModelId?: string): Promise<Coordinate>;
        /**
        * Get the specified coordinate model by id. This function will return valid coordinate model instances, whether or not they have been registered with the coordinates manager.
        * @param modelId The unique identifier for the coordinate model.
        * @return Promise<CoordinateModel> A promise for the requested coordinate model, whenever it is registered as a framework object.
        */
        getCoordinatesModel(modelId: string): Promise<CoordinatesModel>;
        protected _validateModelRegistration(coordinatesModel: CoordinatesModel): boolean;
        protected _validateCoordinateSystem(coordSystem: CoordinateSystem): boolean;
        protected _processCoordinatesModel(coordsModel: CoordinatesModel): void;
        /**
         * We'll need to monitor when subscribers subscribe/unsubscribe to the outputStream observable so we can stop unnecessary coordinate tracking when it's no longer needed. This could be done with a
         * modification to Events.ts but that will involve an increased memory footprint for functionality that's currently not used anywhere else in the system. After a discussion with <jscharf>, we've
         * decided to hook into the outputStream bindingEvent subscribe and unsubscribe functions for the time being rather than modify Events.ts to support this. - <sabubaker>
         */
        protected _addModelSubscriptionHooks(coordsModel: CoordinatesModel): void;
        protected _handleModelSubscriptionsChanged(coordsModel: CoordinatesModel, subscriptions: {}): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates {
    /**
     * Represents a coordinate model. A system can contain multiple coordinate models, each with its own coordinate systems. This model must be processed and registered with the {@link CoordinatesManager}.
     */
    class CoordinatesModel extends geocortex.framework.ui.ViewModelBase {
        /**
         * An observable boolean indicating whether or not this coordinates model is currently active. Automatically activated when there are subscribers to the output stream.
         */
        isActive: Observable<boolean>;
        /**
         * The coordinate systems supported by this coordinate model.
         */
        coordinateSystems: ObservableCollection<CoordinateSystem>;
        /**
         * The currently selected coordinate system.
         */
        currentCoordinateSystem: Observable<CoordinateSystem>;
        /**
         * The number of fractional digits the output coordinates should be rounded off to.
         */
        fractionalDigits: number;
        /**
         * The default geographic coordinate system to use.
         */
        defaultGcsWkid: number;
        /**
         * A stream of input base (read raw) coordinates. These can be mapPoints.
         */
        inputStream: Observable<CoordinateBase>;
        /**
         * Processed output coordinate stream. The coordinateManager will automatically convert the input stream to output when this model is active.
         */
        outputStream: Observable<Coordinate>;
        /**
         * The configuration settings for this coordinate model. Configuration must be set up by the CoordinateController for the input stream.
         */
        configuration: CoordinatesModelConfig;
        /**
        * A boolean indicating whether or not this coordinates model has been initialized and registered with the Coordinates Manager.
        */
        isRegistered: boolean;
        /**
         * Application of configuration settings will be handled by the (@link mapping.modules.Map.MapCoordinatesController} once the map is initialized. This function is simply provided to enable a CoordinatesModel object to be
         * specified as a view model in the configuration files. In such cases, the initialize function will automatically be invoked with the configuration settings.
         */
        initialize(config: CoordinatesModelConfig): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates {
    /**
     * Interface representing a coordinate system configured for a specific {@link CoordinatesModel}.
     */
    interface CoordinateSystem {
        /**
         * What is displayed to the user in the coordinate selection menu.
         */
        displayName: string;
        /**
         * The output type for this coordinate system. Can be one of "dd", "dms", "ddm" or "xy".
         */
        output: string;
        /**
         * The WKID for the coordinate system (if spatial reference is WKID based).
         */
        wkid?: number;
        /**
         * The WKT for the coordinate system (if spatial reference is WKT based).
         */
        wkt?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates.CoordinateUtils {
    /**
    * Retrieves the coordinates for the provided mapPoint in the target coordinate system.
    * fracDigits Optional Parameter lets you specify the number of digits the resulting formatted coordinate values should be rounded to.
    * geographicCoordSys Optional Parameter lets your specify the default geographic coordinate system to use. Defaults to GCS_WGS_1984 (4326)
    * @return Promise<Coordinate> Returns a promise for the requested Coordinate.
    */
    function getCoordinate(app: geocortex.essentialsHtmlViewer.ViewerApplication, mapPoint: esri.geometry.Point, targetCoordSys: CoordinateSystem, fracDigits?: number, geographicCoordSys?: number): Promise<Coordinate>;
    /**
     * Convert DMS to Decimal Degrees for deciphering manual user input.
     */
    function convertDmsToDecimalDegrees(app: geocortex.essentialsHtmlViewer.ViewerApplication, deg: string, min: string, sec: string, bearing: string): number;
    /**
    * Formats an angle for display.
    * @param angle The angle to format, in decimal degrees.
    * @param format The format to use. One of the AngleFormat constants.
    * @param app The Geocortex application.
    * @param fractionalDigits The number of digits to display after the decimal point, for formats that display
    *     fractional values.
    */
    function formatAngle(angle: number, format: string, app: geocortex.framework.application.Application, fractionalDigits?: number): string;
    /**
    * Formats latitude and longitude numbers for display.
    * @param latitude The degrees of latitude.
    * @param longitude The degrees of longitude.
    * @param format The format to use. One of the AngleFormat constants.
    * @param app The Geocortex application.
    * @param fractionalDigits The number of digits to display after the decimal point, for formats that display
    *     fractional values.
    */
    function formatLatLon(latitude: number, longitude: number, format: string, app: geocortex.framework.application.Application, fractionalDigits?: number): {
        latitude: string;
        longitude: string;
    };
    /**
    * Formats a projected coordinate (X/Y value) for display.
    * @param coordinate The coordinate to format.
    * @param app The Geocortex application.
    * @param fractionalDigits The number of digits to display after the decimal point.
    */
    function formatXYCoordinate(coordinate: number, app: geocortex.framework.application.Application, fractionalDigits?: number): string;
    /**
    * Formats an angle in quadrant bearing notation, e.g. "N 48.5° E".
    * @param angle The angle to format, specified in decimal degrees using the North azimuth direction system.
    * @param format The format to use. One of the AngleFormat constants.
    * @param app The Geocortex application.
    * @param fractionalDigits The number of digits to display after the decimal point, for formats that display
    *     fractional values.
    */
    function formatBearing(angle: number, format: string, app: geocortex.framework.application.Application, fractionalDigits?: number): string;
    /**
     * Retrieves coordinate string resources from the infrastructure library.
     * @param app The application that this utilities class belongs to.
     * @param resource Input resource name. Can be of the form "language-coordinates-xxx" or simply "xxx".
     */
    function getResource(app: geocortex.framework.application.Application, resource: string): string;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.documents {
    import Filter = geocortex.core.documents.Filter;
    import FrameworkObject = geocortex.framework.FrameworkObject;
    import QueryParameters = geocortex.essentials.documents.QueryParameters;
    import QueryResult = geocortex.essentials.documents.QueryResult;
    import Result = geocortex.essentials.documents.Result;
    class DocumentCollection<T> extends FrameworkObject {
        protected _pageSize: number;
        protected _queryParams: QueryParameters;
        protected _mapCallback: (result: Result, index: number, array: Result[]) => T;
        app: ViewerApplication;
        /**
         * Whether or not the document collection is successfully initialized.
         */
        isInitialized: boolean;
        /**
         * Whether or not this collection should stop fetching items from the server.
         */
        stopFetching: boolean;
        /**
         * The items of the current page.
         */
        items: ObservableCollection<T>;
        /**
         * The total number of items in the collection.
         */
        numberOfItems: Observable<number>;
        currIndexStart: Observable<number>;
        currIndexStartFromOne: Observable<number>;
        currIndexEnd: Observable<number>;
        currPageNumber: Observable<number>;
        firstPageNumber: Observable<number>;
        lastPageNumber: Observable<number>;
        statusFetching: Observable<boolean>;
        statusOffline: Observable<boolean>;
        constructor(app: ViewerApplication, libraryId: string, mapCallback: (result: Result, index: number, array: Result[]) => T);
        initialize(config?: DocumentCollectionConfig): void;
        /**
         * Get the total length of the collection.
         */
        getLength(): number;
        /**
         * Increments the page number.
         */
        nextPage(): void;
        /**
         * Decrements the page number.
         */
        prevPage(): void;
        /**
         * Refreshes the collection.
         */
        refresh(): void;
        /**
         * Disposes any bindings tracked by this object.
         */
        destroy(): void;
        /**
         * Set the query parameters used to populate the items.
         * @param queryParams The query parameters.
         */
        setQueryParameters(queryParams: QueryParameters): void;
        /**
         * Get the query parameters being used to populate the items.
         */
        getQueryParameters(): QueryParameters;
        /**
         * Adds a filter to the query. Removes any previous filters with the same filter.
         * @param filter The filter to add.
         * @param filterType The type of filter.
         */
        addFilter(filter: Filter, filterType?: string): void;
        /**
         * Remove filters using a given field.
         * @param field The field of the filters to remove.
         * @param filterType The type of filter.
         */
        removeFilter(field: string, filterType?: string): void;
        /**
         * Sort the documents.
         * @param sorter The sorter that describes how to sort the documents.
         */
        sortBy(sorter: DocumentFieldSorter): void;
        protected _handlePageChanged(): void;
        protected _populateFromDocStore(): void;
        /**
         * Build the query parameters with paging related properties.
         */
        protected _buildQueryParams(): QueryParameters;
        protected _handleQueryResult(queryResult: QueryResult): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.documents {
    import QueryParameters = geocortex.essentials.documents.QueryParameters;
    /**
     * Configuration for a Document Collection.
     */
    interface DocumentCollectionConfig {
        /**
         * The file type to filter the documents by.
         */
        fileType?: string;
        pageSize?: number;
        /**
         * The initial query parameters used to search for documents.
         */
        queryParams?: QueryParameters;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.documents {
    class GrantEditorView extends framework.ui.ViewBase {
        app: ViewerApplication;
        viewModel: GrantEditorViewModel;
        autoCompleteInput: HTMLElement;
        autoCompleteMinLength: number;
        autoCompleteMaxEntries: number;
        added(widgetViewHost?: framework.ui.ViewBase): void;
        /**
         * Called on search input.
         */
        handleInputChanged(evt: KeyboardEvent, el: HTMLElement, ctx: any): void;
        handleAddMonikerButtonClick(evt: Event, el: HTMLElement, ctx: any): void;
        handleUpdateMoniker(evt: Event, el: HTMLInputElement, ctx: MonikerModel): boolean;
        handleAutoCompleteBlur(evt: FocusEvent, el: HTMLElement, ctx: any): void;
        getSuggestions(request: {
            term: string;
        }, response: (data: any[]) => void): void;
        protected _processMonikers(monikers: any[]): Promise<any[]>;
        protected _setupJQueryAutocomplete(): void;
        protected _handleAutoCompleteSelect(event: any, ui: any): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.documents {
    import Document = geocortex.essentials.documents.Document;
    import Grant = geocortex.core.documents.Grant;
    import Moniker = geocortex.core.documents.Moniker;
    class GrantEditorViewModel extends framework.ui.ViewModelBase {
        protected _supportedGrantKinds: string[];
        protected _globalGrantIds: string[];
        protected _allowPublicAccess: boolean;
        protected _lastSearchResults: Moniker[];
        app: ViewerApplication;
        defaultGrantKind: string;
        userIconUri: string;
        roleIconUri: string;
        /**
         * The underlying document whose grants are being edited.
         */
        document: Document;
        /**
         * The configured grants.
         */
        grants: Grant[];
        /**
         * The monikers that have grants on the current document.
         */
        monikers: ObservableCollection<MonikerModel>;
        /**
         * Whether or not the current search text maps to a valid moniker.
         */
        isValidMoniker: Observable<boolean>;
        monikerKinds: ObservableCollection<MonikerKindDesc>;
        selectedMonikerKind: Observable<string>;
        selectedMoniker: Observable<Moniker>;
        searchText: Observable<string>;
        enabled: Observable<boolean>;
        constructor(app: ViewerApplication, libraryId?: string);
        onSiteInitialized(): void;
        /**
         * Load a document's grants from the document store and updates the view model state.
         * @param id The ID of the document to load.
         */
        loadById(id: string): Promise<void>;
        /**
         * Add a moniker, updating the document with a grant for the moniker.
         */
        addMoniker(): void;
        /**
         * Add a grant to the document.
         * @param id The global ID of the grant
         * @param kind The kind of grant.
         * @return The grant that was added
         */
        addGrant(id: string, kind: string): Grant;
        /**
         * Update the moniker by updating the document grants.
         * @param moniker The model of the moniker being updated.
         * @param grantKind The kind of grant to add to the document for the given moniker.
         */
        updateMoniker(moniker: MonikerModel, grantKind: string): void;
        /**
         * Search for monikers using a given search term. These results will
         * be limited by the currently selected moniker kind (users or roles).
         * @param searchTerm The search term to search monikers with.
         * @return A promise containing a list of monikers.
         */
        searchMonikers(searchTerm: string): Promise<Moniker[]>;
        /**
         * Validates the search input.
         */
        validateSearchInput(): void;
        /**
         * Reset the search options.
         */
        resetOptions(): void;
        /**
         * Set the view model state to defaults.
         */
        reset(): void;
        /**
         * Gets the selected moniker based off the current search text.
         * If the text does not match the selected moniker, it will search
         * through the last search results for monikers.
         */
        protected _getSelectedMoniker(): Moniker;
        /**
         * Whether a given moniker kind is a user kind.
         * @param monikerKind The moniker kind.
         * @return Whether or not the kind is a user kind.
         */
        protected _isUserKind(monikerKind: string): boolean;
        /**
         * Update the view model with the document of the given ID.
         * @param id The ID of the document to update this model with.
         */
        protected _updateModel(document: Document): void;
        /**
         * Updates the monikers list based off the given grants.
         * @param grants The grants to build the monikers from.
         */
        protected _updateMonikers(grants: Grant[]): void;
        /**
         * Checks whether or not the moniker already exists based off its ID and aliases.
         * @param moniker The moniker to check whether it exists.
         * @return Whether or not the moniker exists.
         */
        protected _monikerExists(moniker: Moniker): boolean;
        protected _setMonikerKinds(): void;
        private _setMonikerEnableds();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.documents {
    /**
     * Describes how to sort documents by a field.
     */
    interface DocumentFieldSorter {
        /**
         * The document field names used to sort the documents by, in order of relevance.
         */
        fields: string[];
        /**
         * The configured display name for this field sorter.
         */
        displayName?: string;
        /**
         * Whether or not to sort the documents in descending order.
         */
        descending?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.documents {
    import Grant = geocortex.core.documents.Grant;
    /**
     * Model for a single guest link of a document.
     */
    class GuestLinkModel {
        /**
         * The name of the guest link.
         */
        name: Observable<string>;
        /**
         * The grant kind of this guest link.
         */
        kind: string;
        /**
         * The grant providing access for this guest link.
         */
        grant: Grant;
        /**
         * The link parameter used to grant access to the document.
         */
        link: string;
        /**
         * The URL for this guest link.
         */
        linkUrl: Observable<string>;
        constructor(config: GuestLinkModelConfig);
        reset(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.documents {
    /**
     * Configuration for a Guest Link Model.
     */
    interface GuestLinkModelConfig {
        /**
         * The grant kind of the guest link.
         */
        kind?: string;
        /**
         * The name of the guest link.
         */
        name?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.documents {
    /**
     * Interface for a describing a moniker kind.
     */
    interface MonikerKindDesc {
        /**
         * The moniker kind.
         */
        kind: string;
        /**
         * The display name representing this moniker kind.
         */
        displayName: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface MapServiceLayersChangedEventArgs {
        mapService: geocortex.essentials.MapService | infrastructure.gis.ServiceLayerInfo;
        newItems: geocortex.essentials.Layer[];
        oldItems: geocortex.essentials.Layer[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface OfflineMapsLoadedEventArgs {
        offlineMaps: infrastructure.offline.OfflineMap[];
        activeOfflineMap: infrastructure.offline.OfflineMap;
    }
    interface OfflineMapAddedEventArgs {
        offlineMap: infrastructure.offline.OfflineMap;
    }
    interface OfflineMapSyncedEventArgs {
        offlineMap: infrastructure.offline.OfflineMap;
    }
    interface OfflineMapRemovedEventArgs {
        offlineMap: infrastructure.offline.OfflineMap;
    }
    interface OfflineMapActivatedEventArgs {
        offlineMap: infrastructure.offline.OfflineMap;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface PlotCoordinatesIdUpdatedEventArgs {
        sender: any;
        oldId: string;
        updatedId: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface PlotCoordinatesEventArgs {
        sender: any;
        coordinateId: string;
        coordinate: infrastructure.coordinates.Coordinate;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    import Project = project.Project;
    /**
     * Describes the arguments for project editor finishing event.
     */
    interface ProjectEditorFinishedEventArgs {
        /**
         * Whether or not editing the project was canceled.
         */
        canceled: boolean;
        /**
         * The project the editor started with.
         */
        existingProject: Project;
        /**
         * The new values for the Project, unless editing was canceled.
         */
        newProject: Project;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    /**
     * The result of a successfully run report.
     */
    interface ReportResultEventArgs {
        /** Whether or not the Report result was asynchronous. */
        isAsync: boolean;
        /** The download URL for the resultant Report file. In async mode, this is the URL to the report progress/download page. */
        href: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ExportTilesUtils {
    interface ExportTilesParameters {
        /**
         * Allows exporting either a tile package or a cache raster data set. If the value is true,
         * output will be in tile package format, and if the value is false, a cache raster data set
         * is returned. The default value is false
         */
        tilePackage?: boolean;
        /**
         * The extent (bounding box) of the tile package or the cache dataset to be exported. If extent
         * does not include a spatial reference, the extent values are assumed to be in the spatial
         * reference of the map. The default value is full extent of the tiled map service.
         */
        exportExtent?: string;
        /**
         * Use this parameter to enable compression of JPEG tiles and reduce the size of the downloaded tile
         * package or the cache raster data set. Compressing tiles slightly compromises the quality of tiles
         * but helps reduce the size of the download.
         */
        optimizeTilesForSize?: boolean;
        /**
         * When optimizeTilesForSize=true, you can specify a compression factor. The value must be between 0 and 100.
         */
        compressionQuality?: number;
        /**
         * The criteria that will be used to select the tile service levels to export. The values can be Level IDs,
         * cache scales. or the resolution (in the case of image services).
         * Values: LevelID | Resolution | Scale
         */
        exportBy?: string;
        /**
         * Specifies the tiled service levels to export. The values should correspond to Level IDs, cache scales.
         * or the resolution as specified in exportBy parameter. The values can be comma separated values or a range.
         * Example 1: 1,2,3,4,5,6,7,8,9
         * Example 2: 1-4,7-9
         */
        levels?: string;
        /**
         * The areaOfInterest polygon allows exporting tiles within the specified polygon areas. This parameter
         * supersedes the exportExtent parameter.
         */
        areaOfInterest?: string;
    }
    interface ExportTilesEstimate {
        totalSize: number;
        totalTilesToExport: number;
    }
    interface DownloadableFile {
        name: string;
        url: string;
    }
    /**
     * Export tiles from a map service supporting the operation.
     * @param service The map service to export tiles from.
     * @param params Operation parameters.
     * @returns A promise of the URL(s) the newly exported tiles can be downloaded from.
     */
    function exportTiles(service: string | esri.layers.Layer, params: ExportTilesParameters): Promise<DownloadableFile[]>;
    /**
     * Extimate the size of exported tiles from a map service supporting the operation.
     * @param service The map service to export tiles from.
     * @param params Operation parameters.
     * @returns A promise of an estimate of the size of the exported tiles.
     */
    function estimateExportTilesSize(service: string | esri.layers.Layer, params: ExportTilesParameters): Promise<ExportTilesEstimate>;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.FilterUtils {
    /**
     * Options for {@link sanitize}.
     */
    interface SanitizeOptions {
        allowArbitraryHyperlinks?: boolean;
        allowFrames?: boolean;
        /** Function that transforms URIs during the sanitization. */
        uriTransformer?: (uri: string, details: UriDetails) => string;
    }
    /**
     * Sanitize a string of unsafe HTML to eliminate XSS (cross-site scripting) security risks.
     * This method allows tags and standard attributes, however `data-` attributes are not allowed.
     * Script tags are not allowed either.
     * Note that you must pass a {@link SanitizeOptions.uriTransformer} function in the options
     * if you wish to allow URIs in your content.
     * @param unsafeHtml String of HTML to be scrubbed clean.
     * @param options {@link SanitizeOptions}.
     * @return Safe HTML that has been sanitized.
     */
    function sanitize(unsafeHtml: string, options?: SanitizeOptions): string;
    /**
     * Strip all HTML out of a string.
     * @param unsafe String of text which will have its HTML stripped away.
     * @return A plain text string without any HTML markup.
     */
    function stripHtml(unsafe: string): string;
    /**
     * Interfaces and implementation details specific to sanitization.
     */
    enum UriType {
        Markup = 0,
        Css = 1,
        NavigableLink = 2,
    }
    interface UriDetailsBase {
        uri: string;
        type: UriType;
    }
    interface MarkupUriDetails extends UriDetailsBase {
        tag: string;
        attribute: string;
    }
    interface CssUriDetails extends UriDetailsBase {
        property: string;
    }
    interface NavigableLinkUriDetails extends MarkupUriDetails {
        linkChallengeCallback?: Function;
        target?: string;
        forcePrompt?: boolean;
    }
    type UriDetails = NavigableLinkUriDetails | MarkupUriDetails | CssUriDetails;
    /**
     * A container for HTML content that is not trusted to be safe.
     * Has getters for accessing either the originally-provided unsafe HTML string, or a safely sanitized version.
     * Simplifies XSS security matters by making the handling of unsafe HTML obvious and clear.
     */
    class UnsafeHtml {
        /** The unsafe HTML. */
        protected _unsafeHtml: string;
        /** The safely sanitized version of the HTML. */
        protected _safeHtml: string;
        /**
         * Create a new container for unsafe HTML.
         */
        constructor(unsafeHtml: string, sanitizeOptions?: SanitizeOptions);
        /**
         * Update the HTML.
         */
        sanitize(unsafeHtml: string, sanitizeOptions?: SanitizeOptions): void;
        /**
         * Get the original unsafe HTML.
         */
        unsafeHtml: string;
        /**
         * Get the safely sanitized version of the HTML.
         */
        safeHtml: string;
    }
    /**
     * Utilities for parsing and assessing data URIs.
     */
    module DataUri {
        /** Whitelist for media types (MIME types without parameters like charset) which are allowed in safe data URI's. */
        var dataUriMediaTypeWhitelist: string[];
        /**
         * Data URI sub-components.
         */
        interface DataUriComponents {
            /** Original data URI that has been parsed. */
            uri: string;
            /** Meta data preamble of the data URI. */
            meta: string;
            /** Media type portion of the meta preamble. If undefined, assume "text/plain". */
            mediaType: string;
            /** Character set portion of the meta preamble. Starts with "charset=", or is undefined. */
            charset: string;
            /** Extension portion of the meta preamble. Can be 'base64', or undefined. */
            extension: string;
            /** Index of the first character of the payload. */
            payloadIndex: number;
        }
        /**
         * Break a data URI string down into its sub-components.
         * @param uri Data URI to parse.
         * @return {@link DataUriComponents} as seen in the URI (no defaults are provided, omitted optionals will be undefined).
         */
        function parseDataUri(uri: string): DataUriComponents;
        /**
         * Check if a data URI is safe, in that it cannot be used as an XSS attack vector.
         * The data URI is considered safe when its detected media type (MIME type) is present in the data URI media type whitelist.
         * @param uri Data URI to scrutinize for XSS safety.
         * @return True when the data URI is safe, false when the data URI is unsafe or invalid.
         */
        function isDataUriSafe(uri: string): boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.highlightedLabel {
    /**
     * Interface for the {@link HighlightedLabelGraphic} configuration settings.
     */
    interface HighlightedLabelConfig {
        /**
         * The id for the layer to which the highlighted label should be added.
         */
        layerId: string;
        /**
         * The map point associated with this highlighted label.
         */
        mapPoint: esri.geometry.Point;
        /**
         * The text for the highlighted label. May be separated by a "\n" to span across multiple lines.
         */
        text?: string;
        /**
         * The x-offset for the highlighted label if required.
         */
        labelXoffset?: number;
        /**
         * The y-offset for the highlighted label if required.
         */
        labelYoffset?: number;
        /**
         * The font family to use in the highlighted label. Defaults to "Arial".
         */
        fontFamily?: string;
        /**
         * The font size for the highlighted label text. Defaults to "12px".
         */
        fontSize?: string;
        /**
         * The corner radius if the highlight label is required to have rounded corners.
         */
        cornerRadius?: number;
        /**
         * The angle at which to place the highlighted label.
         */
        angle?: number;
        /**
         * The position to anchor the label in.
         */
        anchor?: HighlightedLabelAnchor;
        /**
         * The text color of the text on the highlight label.
         */
        textColor?: esri.Color;
        /**
         * The highlight color of the highlight label.
         */
        highlightColor?: esri.Color;
        /**
         * An outline symbol if needed for the highlighted label.
         */
        highlightOutlineSymbol?: esri.symbol.SimpleLineSymbol;
        /**
         * A boolean indicating whether this highlighted label will be in the style of a rectangular box or a callout with a circular id tag on the left and with an arrow pointing at the mapPoint.
         */
        calloutWithIdTag?: boolean;
        /**
         * The text that will appear in the id tag placeholder, if this highlight label is a calloutWithIdTag.
         */
        idTagText?: string;
        /**
         * The size (in pixels) of the callout arrow (width) for the highlight label if in callout mode.
         */
        calloutPixelSize?: number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.highlightedLabel {
    /**
     * The highlight label anchor modes. The label can be anchored at the bottom left, the center or as a callout.
     */
    enum HighlightedLabelAnchor {
        BOTTOM_LEFT = 0,
        MIDDLE = 1,
        CALLOUT = 2,
    }
    /**
     * Creates a highlighted label and adds it to a specified graphics layer on the map. The label could be a simple rectangle or a callout with an id text tag and a pointer pointing to the map point associated with this label.
     */
    class HighlightedLabelGraphic {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        highlightGraphic: esri.Graphic;
        highlightIdTagGraphic: esri.Graphic;
        highlightSymbol: esri.symbol.SimpleMarkerSymbol;
        highlightIdTagSymbol: esri.symbol.SimpleMarkerSymbol;
        textGraphics: esri.Graphic[];
        textSymbols: esri.symbol.TextSymbol[];
        graphicsLayer: esri.layers.GraphicsLayer;
        protected _config: HighlightedLabelConfig;
        protected _key: string;
        protected _height: number;
        protected _width: number;
        protected _padding: number;
        protected _calloutSizeWidthFraction: number;
        protected _tagHeightPercentage: number;
        constructor(config: HighlightedLabelConfig, app: geocortex.essentialsHtmlViewer.ViewerApplication);
        getTextFontFamily(): string;
        getTextFontSize(): string;
        getWidth(): number;
        getTotalWidth(): number;
        getHeight(): number;
        getTotalHeight(): number;
        getMapPoint(): esri.geometry.Point;
        getConfig(): HighlightedLabelConfig;
        addToLayer(show?: boolean): void;
        removeFromLayer(destroy?: boolean): void;
        isVisible(): boolean;
        show(): HighlightedLabelGraphic;
        hide(): HighlightedLabelGraphic;
        update(mapPoint: esri.geometry.Point, text: string): void;
        refresh(newLabelText: string): void;
        moveToTop(): void;
        assignGraphicIdentifierKey(key: string, value: string): void;
        updateIdTagText(newId: string): void;
        setHighlightColor(color: esri.Color): void;
        setTextColor(color: esri.Color): void;
        /**
         * Exports the state of the label graphic, which can be used to recreate it later.
         */
        exportState(app: ViewerApplication): HighlightedLabelState;
        /**
         * Creates a HighlightedLabelGraphic from exported state (see exportState()).
         */
        static fromExportedState(state: HighlightedLabelState, app: ViewerApplication, prototype?: HighlightedLabelGraphic): Promise<HighlightedLabelGraphic>;
        protected _executeSetupRoutine(): void;
        protected setHighlightAnchor(): void;
        protected setTextAnchor(textLineIndex: number, verticalOffset: number): void;
        protected initializeHighlightDimensions(): void;
        protected initializeHighlightGraphic(): void;
        protected initializeHighlighteIdTagGraphic(): void;
        protected configureHighlightSymbol(highlightColor: esri.Color, highlightOutlineSymbol: esri.symbol.SimpleLineSymbol, fontSize: string): void;
        protected configureHighlightIdTagSymbol(highlightColor: esri.Color, fontSize: string): void;
        protected initializeTextGraphicsAndSymbols(): void;
        protected configureTextSymbol(textLineIndex: number, lineText: string, textColor: esri.Color, font: esri.symbol.Font, angle: number, verticalOffset: number): void;
        protected _processConfig(config: HighlightedLabelConfig): boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface SelectionChangedEventArgs extends SelectionEventArgs {
        previousName?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface SelectionEventArgs {
        name: string;
        featureSetCollection?: essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.highlightedLabel {
    /**
     * A serializable representation of a highlighted label.
     */
    interface HighlightedLabelState {
        highlightGraphic: infrastructure.webMap.Feature;
        highlightSymbol: infrastructure.webMap.SimpleMarkerSymbol;
        textGraphics: infrastructure.webMap.Feature[];
        textSymbols: infrastructure.webMap.TextSymbol[];
        layerId: string;
        mapPoint: infrastructure.webMap.Point;
        text?: string;
        labelXoffset?: number;
        labelYoffset?: number;
        fontFamily?: string;
        fontSize?: string;
        cornerRadius?: number;
        angle?: number;
        anchor?: infrastructure.highlightedLabel.HighlightedLabelAnchor;
        textColor?: infrastructure.webMap.Color;
        highlightColor?: infrastructure.webMap.Color;
        highlightOutlineSymbol?: infrastructure.webMap.SimpleLineSymbol;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.LayerIntegrationUtils {
    /**
     * Queries the provided map service URL, and returns an array of feature service URLs that were found.
     * @param url Map service URL to interrogate for feature services.
     * @returns The promise of an array of feature service URLs.
     */
    function discoverFeatureServices(url: string): Promise<string[]>;
    /**
     * Build and initialize a populated Geocortex feature layer map service based on the provided feature service URL.
     * The returned feature layer service will come with a service layer and a single Geocortex layer.
     * @param url The URL to the feature service endpoint.
     * @returns The promise of a Geocortex feature layer map service.
     */
    function buildFeatureLayerService(serviceUrl: string): Promise<essentials.FeatureLayerService>;
    /**
     * Build and initialize a KML map service based on the provided KML service URL.
     * @param serviceUrl The URL to the esri KML service layer.
     * @param serviceDefinition A map service definition object containing the properties for the new map service (optional).
     * @returns The promise of a Geocortex KmlService.
     */
    function buildKmlService(serviceUrl: string, serviceDefinition?: any): Promise<essentials.KmlService>;
    /**
     * Create a local map service from a serialized feature layer (JSON data called a 'Feature Collection').
     * @param featureCollection An esri `FeatureCollection`, which is a serialized representation of a feature layer.
     * @param serviceDefinition A map service definition object containing the properties for the new map service (optional).
     * @returns A Promise of a local feature layer service that exists in a disconnected state (does not have a valid URL).
     */
    function buildLocalFeatureLayerService(featureCollectionObject: webMap.Layer, serviceDefinition?: any): Promise<LocalFeatureLayerService>;
    /**
     * Specialized esri feature layer that exists in a disconnected state (no URL).
     */
    class LocalFeatureLayer extends esri.layers.FeatureLayer {
        /**
         * Create a LocalFeatureLayer from a feature layer that is serialized as a FeatureCollection.
         * @param options: `LocalFeatureLayerConstructorOptions`.
         */
        constructor(featureCollectionObject: webMap.Layer);
        /**
         * Special query handling for local feature layers, overriding `queryFeatures` of the Esri API.
         * The Esri API allows only simple extent-based queries to be performed clientside. For more complex queries (involving polygons, for example), the Esri API will query the server.
         * Local feature layers, which exist in a disconnected state (no URL), have no associated server endpoint available to query.
         * In order to perform queries with complex geometry on local feature layers, this method performs the query with a simplified version of the geometry (an extent) which yields false positives, which we then manually filter out by using the Esri geometry engine.
         */
        queryFeatures(originalQuery: esri.tasks.Query, callback?: Function, errback?: Function): any;
    }
    /**
     * Specialized Geocortex feature layer map service that exists in a disconnected state (no URL).
     */
    class LocalFeatureLayerService extends essentials.FeatureLayerService {
    }
    /**
     * Specialized Geocortex layer that exists in a disconnected state (no URL).
     */
    class LocalLayer extends essentials.Layer {
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerSelector {
    class LayerSelectorViewBase extends geocortex.framework.ui.ViewBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        viewModel: LayerSelectorViewModelBase;
        selectAllLayers(evt: MouseEvent, el: HTMLElement, context: any): void;
        clearAllLayers(evt: MouseEvent, el: HTMLElement, context: any): void;
        handleExpanderClick(evt: MouseEvent, el: HTMLElement, context: LayerSelectorLayerItem): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerSelector {
    class LayerSelectorViewModelBase extends geocortex.framework.ui.ViewModelBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        appInfo: infrastructure.gis.AppInfo;
        layerSelector: infrastructure.layerSelector.LayerSelector;
        items: ObservableCollection<infrastructure.layerSelector.LayerSelectorItem>;
        selectAllButtonText: Observable<string>;
        clearAllButtonText: Observable<string>;
        selectAllButtonTitle: Observable<string>;
        clearAllButtonTitle: Observable<string>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId?: string);
        initialize(config: any): void;
        /**
         * This handler fires exactly once when the layer selector is initialized. Override this method in a sub class to define the handler.
         */
        onInitialized(layerSelector: infrastructure.layerSelector.LayerSelector): void;
        /**
         * Called when a new LayerSelectorFolderItem is created.
         * Override this method in a sub class to define the handler.
         * @param folderItem The item created.
         */
        onLayerSelectorFolderItemCreated(folderItem: LayerSelectorFolderItem): void;
        /**
         * Called when a new LayerSelectorLayerItem is created.
         * Override this method in a sub class to define the handler.
         * @param layerItem The item created.
         */
        onLayerSelectorLayerItemCreated(layerItem: LayerSelectorLayerItem): void;
        /**
         * Called when a new LayerSelectorServiceLayerItem is created.
         * Override this method in a sub class to define the handler.
         * @param layerItem The item created.
         */
        onLayerSelectorServiceLayerItemCreated(layerItem: LayerSelectorServiceLayerItem): void;
        /**
         * The filter based on which the layers are included in the 'items' collection. Can be modified at runtime. Override this
         * method in a sub class to define the filter.
         */
        filter(layerSelectorLayerItem: infrastructure.layerSelector.LayerSelectorLayerItem | infrastructure.layerSelector.LayerSelectorServiceLayerItem): boolean;
        /**
         * The handler for a layer state change event. Override this method in a sub class to define the handler.
         */
        handleLayerStateChange(layerSelectorLayerItem: infrastructure.layerSelector.LayerSelectorLayerItem | infrastructure.layerSelector.LayerSelectorServiceLayerItem): void;
        /**
         * The handler that is invoked when all layers are set to enabled. Override this method in a sub class to define the handler.
         */
        handleAllLayersEnabled(): void;
        /**
         * The handler that is invoked when all layers are disabled. Override this method in a sub class to define the handler.
         */
        handleAllLayersDisabled(): void;
        /**
         * Recursively walks the tree of items and returns a flat array of all items.
         * @returns all LayerSelectorItems of any depth.
         */
        getAllItems(): LayerSelectorItem[];
        /**
         * Recursively walks the tree of the given items and returns a flat array of all items.
         * @returns all LayerSelectorItems of any depth.
         */
        private static _expandItems(items);
        protected _setupLayerSelector(): void;
        protected _subscribeEvents(): void;
        protected _handleMapServicesAdded(ms: essentials.MapService): void;
        protected _handleMapServiceRemoved(ms: essentials.MapService): void;
        protected _handleMapServiceLayersChanged(args: eventArgs.MapServiceLayersChangedEventArgs): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    /**
     * Provides a set of filters for use with {@link: ObjectFilter.filter} corresponding to common project interfaces.
     */
    class ProjectFilter {
        app: ViewerApplication;
        private _baseMapLayer;
        private _coordinateSystem;
        private _drawingInfo;
        private _feature;
        private _featureCollection;
        private _featureSet;
        private _featureSetCollection;
        private _graphic;
        private _layer;
        private _layerDefinition;
        private _operationalLayer;
        private _serviceLayer;
        protected _webMapFilter: webMap.WebMapFilter;
        private _numberValidator;
        private _urlValidator;
        private _xssHtmlValidator;
        constructor(app: ViewerApplication);
        baseMap: any;
        baseMapLayer: any;
        bookmark: any;
        color: any;
        coordinateSystem: any;
        domain: any;
        inheritedDomain: any;
        rangeDomain: any;
        codedValueDomain: any;
        drawingInfo: any;
        feature: any;
        featureCollection: any;
        featureSet: any;
        featureSetCollection: any;
        field: any;
        geometry: any;
        graphic: any;
        point: any;
        multiPoint: any;
        polyline: any;
        polygon: any;
        extent: any;
        layer: any;
        layerDefinition: any;
        operationalLayer: any;
        renderer: any;
        serviceLayer: any;
        simpleRenderer: any;
        uniqueValueRenderer: any;
        classBreaksRenderer: any;
        heatmapRenderer: any;
        spatialReference: any;
        symbol: any;
        simpleMarkerSymbol: any;
        simpleLineSymbol: any;
        simpleFillSymbol: any;
        pictureMarkerSymbol: any;
        pictureFillSymbol: any;
        textSymbol: any;
        template: any;
        type: any;
        /**
         * A generic filter for objects whose schema is unknown.
         */
        object: any;
        protected _serviceLayerCommon: any;
    }
}
/**
 * Viewer Shell (Desktop, Tablet, Handheld) Utilities.
 */
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ShellUtils {
    /**
     * Debounces a given function and runs it once all view related events have settled for a specified timeout (defaults to 400ms). This function cannot guarantee deterministic results and we don't recommend
     * you use it unless absolutely necessary. There may be points of failure introduced if, for instance, a large number of modules use it and activate views of their own. This may lead to unintended
     * behavior.
     * @param app The {@link ViewerApplication} invoking this function.
     * @param delegate The function to execute after debouncing.
     * @param settleThreshold Optional parameter that can be used to set the settle threshold. Defaults to 400ms.
     */
    function debounceViewEvents(app: ViewerApplication, delegate: Function, settleThresholdMs?: number): void;
    /**
     * Debounces a given function and runs it once all target events have settled for a specified timeout (defaults to 200ms). This function cannot guarantee deterministic results and we don't recommend
     * you use it unless absolutely necessary.
     * @param app The {@link ViewerApplication} invoking this function.
     * @param delegate The function to execute after debouncing.
     * @param targetEvents The list of events that will cause the given delegate to get debounced.
     * @param settleThreshold Optional parameter that can be used to set the settle threshold. Defaults to 400ms.
     */
    function debounceEvents(app: ViewerApplication, delegate: Function, targetEvents: string[], settleThresholdMs?: number): void;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.nativeIntegration {
    class NativeManager {
        app: ViewerApplication;
        private _nativeInitializedPromise;
        private _nativeInitializedResolve;
        private _ws;
        /**
         * Indicates whether native is initialized.  For a check with an asynchronous
         * callback use onNativeInitialized().
         */
        nativeInitialized: boolean;
        constructor(app: ViewerApplication);
        xhrGet(dojoArgs: any): Promise<any>;
        xhrPost(dojoArgs: any): Promise<any>;
        appendAuthorizationHeader(dojoArgs: any): void;
        /**
         * Communication method subject to change.
         * @private
         */
        command(name: string): webSocket.NativeCommand;
        /**
         * Communication method subject to change.
         * @private
         */
        event(name: string): webSocket.NativeEvent;
        /**
         * Gets a promise that will be resolved when the "native ready" message has been received from the native
         * layer, which indicates that the native infrastructure has been initialized.
         */
        onNativeInitialized(): Promise<void>;
        /**
         * To be called once by the module that handles the native initialize to indicate that native initialization
         * is complete. Causes the promise returned by onNativeInitialized() to be resolved.
         */
        signalNativeInitialized(): void;
        /**
         * Gets the resource info for a viewer resource.
         * @param fileName The name of the file on the server to get the resource info for.
         */
        getViewerResourceInfo(fileName: string): Promise<ResourceInfo>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.nativeIntegration {
    interface ResourceInfo {
        name: string;
        exists: boolean;
        length?: number;
        lastAccessTime?: Date;
        lastWriteTime?: Date;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.nativeIntegration.webSocket {
    class NativeCommand {
        app: geocortex.framework.application.Application;
        name: string;
        private outgoing;
        /**
         * @private
         */
        _localImplementations: geocortex.framework.commands.Command;
        constructor(app: geocortex.framework.application.Application, name: string, outgoing: (args: Object) => void);
        execute(args: Object): void;
        register(scope: any, implementation: (args: Object) => void): string;
        unregister(token: string): boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.nativeIntegration.webSocket {
    class NativeEvent {
        app: geocortex.framework.application.Application;
        name: string;
        private outgoing;
        /**
         * @private
         */
        _localHandlers: geocortex.framework.events.Event;
        constructor(app: geocortex.framework.application.Application, name: string, outgoing: (args: Object) => void);
        publish(args: Object): void;
        subscribe(scope: any, handler: (args: Object) => void): string;
        once(scope: any, handler: (args: Object) => void): string;
        unsubscribe(token: string): boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.nativeIntegration.webSocket {
    class NativeWebSocket {
        app: geocortex.framework.application.Application;
        private _connectDelay;
        private _wsUri;
        private _ws;
        private _sessionId;
        private _nextPayload;
        private _nextMessageIx;
        private _outgoingMessage;
        private _lastMessageIx;
        private _commands;
        private _events;
        constructor(app: geocortex.framework.application.Application);
        private _createWebSocket();
        private _pump();
        private _sendMessage(msg);
        private _fixUnserializableMessge(msg);
        private _processMessage(msg);
        private _queueMessage(msg);
        command(name: string): NativeCommand;
        event(name: string): NativeEvent;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.nativeIntegration.webSocket {
    interface NativeWebSocketMessage {
        type: string;
        payload: any;
    }
    module NativeWebSocketMessage {
        var type: {
            Command: string;
            Event: string;
        };
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.nativeIntegration.webSocket {
    interface UnreliableMessage<T> {
        payloads?: T[];
        error?: any;
        type: string;
        messageIx: number;
    }
    module UnreliableMessage {
        var type: {
            Content: string;
            Completed: string;
            Ack: string;
        };
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline {
    /**
     * Delete basemaps from the device.  Takes an OfflineMapBasemap array instead of an OfflineMap because
     * the geometry isn't needed and it makes sense to delete a subset of the basemaps.
     * @param app
     * @param basemaps
     * @param cancellationToken
     * @param progress
     */
    function deleteBasemaps(app: ViewerApplication, basemaps: OfflineMapBasemap[]): Promise<void>;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline {
    /**
     * Downloads all OfflineBasemaps in the OfflineMap as necessary.
     * @param offlineMap
     * @param progress
     * @private
     */
    function downloadBasemaps(app: ViewerApplication, offlineMap: OfflineMap, cancellationToken: CancellationToken, progress?: (progress: Progress) => void): Promise<void>;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * The Bundle contains the RoutingRules and some resources for an offline
     * profile.
     */
    interface Bundle {
        /**
         * The ID of the bundle.
         */
        id: string;
        /**
         * Local time that the bundle was generated.
         */
        timestamp: number;
        /**
         * Routing rules that redirect requests to resources in this bundle.
         */
        routingRules: RoutingRule[];
        /**
         * The resources that make up this bundle.
         */
        resources: BundleResourceEntry[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * Builds an offline Bundle.
     * @return a promise of the Bundle.
     * @private
     */
    function buildBundle(context: BundleBuilderContext): Promise<Bundle>;
    function cleanUpMapServiceUrl(context: BundleBuilderContext, mapService: geocortex.essentials.MapService): string;
    function cleanUpRestUrl(context: BundleBuilderContext, url: string): string;
    /**
     * Turns a well-formed URL into a regex pattern, which could also be a key for a resource.
     */
    function urlToPattern(url: string): string;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * Context passed in to the BundleBuilder.
     */
    interface BundleBuilderContext {
        /**
         * The application.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /**
         * The ID that will be given to the bundle being generated.
         */
        bundleId: string;
        /**
         * Mapping of requests URL to how to fetch it locally.
         */
        basemaps: BundleBuilderContextBasemap[];
        /**
         * Information about the data synced to the device.
         */
        featureLayerSyncInfo: infrastructure.offline.SyncInfo;
    }
    interface BundleBuilderContextBasemap {
        url: string;
        localServicePath: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * Builds a bundle of rules on what to do while an offline map is active and applies
     * them to outgoing network traffic.
     */
    class BundleManager {
        app: ViewerApplication;
        libraryId: string;
        private _router;
        private _esriRequestHacker;
        private _esriLayerHacker;
        private _serveResourceHandler;
        constructor(app: ViewerApplication, libraryId: string);
        /**
         * Download Offline Resources.
         * @param bundleId the ID that will be given to this bundle.
         * @param basemaps information on how to direct basemap requests.
         */
        createBundle(bundleId: string, basemaps: BundleBuilderContextBasemap[]): Promise<void>;
        /**
         * Does the actual work of creating the bundle. This is private so that the Bundle object is not exposed publicly.
         * @private
         */
        private _createBundle(bundleId, basemaps);
        /**
         * Delete all resources stored for the given bundle.
         * @param bundleId The ID of the existing bundle.
         */
        deleteBundle(bundleId: string): Promise<void>;
        /**
         * Update all resources stored for the given bundle.
         * @param bundleId The ID of the existing bundle.
         * @param basemaps information on how to direct basemap requests.
         */
        updateBundle(bundleId: string, basemaps: BundleBuilderContextBasemap[]): Promise<void>;
        /**
         * Make the bundle with the given ID the active bundle.  After the returned promise
         * resolves future offline routing and resources will come from the bundle.
         * @param bundleId
         */
        loadBundle(bundleId: string): Promise<void>;
        /**
         * Return to a default state with no active bundle available.
         * This should always be safe.
         */
        unloadBundle(): Promise<void>;
        /**
         * Generate the bundle for this viewer.
         * @param bundleId the ID that will be given to this bundle.
         * @param basemaps information on how to direct basemap requests.
         */
        private _buildBundle(bundleId, basemaps);
        /**
         * Adds bundle resources to the offline store.  Does not activate it.
         * @param bundle The bundle to store.
         */
        private _storeBundle(bundle);
        /**
         * Get the bundle with the given ID from storage.  Does not make it active.
         * @param bundleId The ID of the bundle to retrieve.
         */
        private _getBundle(bundleId);
        /**
         * Get the storage key for the given bundle or bundle ID.
         * @param bundle
         */
        private _getBundleKey(bundle);
        /**
         * Get from the store in promise form.  This will hopefully be moved into Store in 3.0.
         * @param key
         */
        private _appStoreGetPromise(key);
        /**
         * Set to the store in promise form.  This will hopefully move into Store in 3.0.
         * @param key
         * @param value
         */
        private _appStoreSetPromise(key, value);
        /**
         * Remove from the store in promise form.  This will hopefully move into Store in 3.0.
         * @param key
         */
        private _appStoreRemovePromise(key);
        getResource(key: string): string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * A resource that is stored and can be served while offline.  Typically these
     * are responses from REST endpoints served by the "ServeResource" routing rule.
     */
    class BundleResourceEntry {
        /**
         * Is the value base64 encoded.
         */
        isEncoded: boolean;
        /**
         * Is the value JSON.stringified.
         */
        isJson: boolean;
        /**
         * The key for the resource.  For the "ServeResource" routing rule this matches the
         * "key" parameter.
         */
        key: string;
        /**
         * The resource, possibly base64 encoded, possibly JSON.stringified.
         */
        value: string;
        constructor(mixin: BundleResourceEntry);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * Applies dirty hacks to the Esri layers to make requests work offline.
     * This relies upon undocumented functionality and may break between releases.
     * (But rarely has!  Whew.)
     */
    class EsriLayerHacker {
        app: ViewerApplication;
        urlRewriter: (url: string) => string;
        /**
         * Callback for errors produced by invalid requests.
         */
        errorReporter: (error: string) => void;
        private _hooked_BingMaps_getTileUrl;
        private _hooked_esri_getTileUrl;
        private _hooked_esri_getImageUrl;
        private _hooked_ogc_getImageUrl;
        private _hooked_ogc_getWMTSTileUrl;
        private _hooked_WebTiledLayer_getTileUrl;
        private _bingMaps__tileLoadHandler;
        private _ogc__tileLoadHandler;
        private _webTiledLayer__tileLoadHandler;
        /**
         * Constructor.
         * @param urlRewriter The function that rewrites tile requests, or returns null to not rewrite it.
         *                    Can be set on the fly.
         */
        constructor(app: ViewerApplication, urlRewriter: (url: string) => string);
        private _captureHooks();
        /**
         * @private Extend ESRI layers for offline functionality
         */
        private _extendEsriLayers();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * Applies dirty hacks to esri.request to make requests work offline.
     * This may break between esi API releases.
     */
    class EsriRequestHacker {
        app: ViewerApplication;
        requestHandler: (request: EsriRequest, options: EsriRequestOptions) => dojo.Deferred;
        private _hooked_esri_request;
        private _isEnabled;
        /**
         * Calls to esri.request will be redirected to the given requestHandler while enabled.
         * @param app
         * @param requestHandler
         */
        constructor(app: ViewerApplication, requestHandler: (request: EsriRequest, options: EsriRequestOptions) => dojo.Deferred);
        unhackedRequest(request: EsriRequest, options: EsriRequestOptions): dojo.Deferred;
        /**
         * Bypass the hack and allow traffic to flow through normally.
         */
        disable(): void;
        /**
         * Re-engage the hack.
         */
        enable(): void;
        /**
         * @private Hook into esri.request. This is for REST requests.
         */
        private _setupEsriRequestHooks();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle.offlineHandlers {
    /**
     * Doesn't actually handle anything and just pushes it through to online.
     */
    class PassthroughHandler implements OfflineHandler {
        app: ViewerApplication;
        unhackedRequesthandler: (request: EsriRequest, options: EsriRequestOptions) => dojo.Deferred;
        name: string;
        constructor(app: ViewerApplication, unhackedRequesthandler: (request: EsriRequest, options: EsriRequestOptions) => dojo.Deferred);
        handle(request: bundle.RequestContext, rule: bundle.RoutingRule, matches: RegExpExecArray): boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle.offlineHandlers {
    /**
     * The OfflineModule has traditionally been excellent at serving fail.
     */
    class FailHandler implements OfflineHandler {
        name: string;
        handle(request: RequestContext, rule: RoutingRule, matches: RegExpExecArray): boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle.offlineHandlers {
    /**
     * A handler for offline requests.
     */
    interface OfflineHandler {
        /**
         * The name of the handler.
         */
        name: string;
        /**
         * Applies a routing rule to the given request.  The rule will have a name
         * matching the name passed in to OfflineRouter.addHandler() and the rule
         * pattern will match the request.
         * @param request The request to handle.
         * @param rule The rule matching the request.
         * @param matches Regexp capturing groups from the rule pattern.
         * @return Whether the rule successfully handled the request.
         */
        handle(request: RequestContext, rule: RoutingRule, matches: RegExpExecArray): boolean;
    }
    /**
     * A useful util function.  Sets the load and error callbacks onto the deferred
     * object used by request. This is due to the change from _request
     * to request. _serveResourceImpl does not hook load and errors itself.
     */
    function hookDeferredCallbacks(request: RequestContext): void;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle.offlineHandlers {
    /**
     * Rewrites requests and then passes them through the unhackedRequesthandler.
     */
    class RewriteHandler implements OfflineHandler {
        app: ViewerApplication;
        unhackedRequesthandler: (request: EsriRequest, options: EsriRequestOptions) => dojo.Deferred;
        constructor(app: ViewerApplication, unhackedRequesthandler: (request: EsriRequest, options: EsriRequestOptions) => dojo.Deferred);
        name: string;
        handle(request: bundle.RequestContext, rule: bundle.RoutingRule, matches: RegExpExecArray): boolean;
        /**
         * Rewrites a request's URL.
         */
        rewriteRequest(ctx: RequestContext, rule: RoutingRule, matches: RegExpExecArray): string;
        /**
         * Takes a url, and appends the local server token as a URL parameter to create a new URL.
         */
        private _appendLocalServerToken(url);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle.offlineHandlers {
    /**
     * Serves resources stored in the bundle.  Some resources are removed from the bundle
     * and stored separately to shrink what needs to be kept in memory.
     */
    class ServeResourceHandler implements OfflineHandler {
        app: ViewerApplication;
        resourceGetter: (key: string) => Promise<string>;
        resourceSetter: (key: string, value: string) => Promise<void>;
        resourceRemover: (key: string) => Promise<void>;
        /** The resource length at which it will be put in storage rather than kept in memory. */
        private static _resourceCachingLength;
        name: string;
        isReady: Observable<boolean>;
        private _bundle;
        constructor(app: ViewerApplication, resourceGetter: (key: string) => Promise<string>, resourceSetter: (key: string, value: string) => Promise<void>, resourceRemover: (key: string) => Promise<void>);
        /**
         * Serve the request using the given rule from the bundle.
         * @param request The request to serve.
         * @param rule The rule from the bundle that matches the request.
         * @param matches Regex capturing groups.
         * @return Whether the request was successfully handled.
         */
        handle(request: RequestContext, rule: RoutingRule, matches: RegExpExecArray): boolean;
        /**
         * Serve all future requests with resources from the given bundle.
         * @param bundle The bundle to serve from.
         */
        loadBundle(bundle: Bundle): void;
        /**
         * Clear all known resources.
         */
        clear(): void;
        /**
         * Strip large values out of the bundle and store them separately.  This does not make the
         * bundle active.  That is done with loadBundle.
         * @param bundle The bundle to process.
         * @return a promise of the bundle that was passed in, after it is processed.
         */
        stripAndStoreBundle(bundle: Bundle): Promise<Bundle>;
        /**
         * Unstore all entries stored by stripAndStoreBundle.  The values are not returned to
         * the bundle.  It's assumed we're just going to throw it away.
         * @param bundle The bundle to process.
         * @return a promise of the bundle that was passed in, after it is processed.
         */
        unstoreBundle(bundle: Bundle): Promise<Bundle>;
        /**
         * Get the resouce for the given key.
         * @param key
         */
        getResourceValue(key: string): Promise<any>;
        /**
         * Get the resource from the given entry.
         * @param entry
         */
        private _getResourceValue(entry);
        private static _getResourceStorageKey(bundle, entry);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle.offlineHandlers {
    /**
     * Handles requests for the site specially to inject the true principal if the user is authed.
     */
    class SiteHandler implements OfflineHandler {
        siteJsonGetter: (key: string) => Promise<any>;
        unhackedRequesthandler: (request: EsriRequest, options: EsriRequestOptions) => dojo.Deferred;
        name: string;
        /**
         * @param siteJsonGetter Gets the stored site JSON.
         * @param unhackedRequesthandler Unhacked esri.request.
         */
        constructor(siteJsonGetter: (key: string) => Promise<any>, unhackedRequesthandler: (request: EsriRequest, options: EsriRequestOptions) => dojo.Deferred);
        handle(request: RequestContext, rule: RoutingRule, matches: RegExpExecArray): boolean;
        private _hasToken(request);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * Routes offline requests through request handlers.  This is done by hacking esri.request.
     * The "Rewrite" request handler is the only handler installed by default.
     */
    class OfflineRouter {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        isReady: Observable<boolean>;
        private _handlers;
        private _rules;
        private _defaultHandler;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication);
        /**
         * Add a request handler.  The handler function will be called to handle requests
         * when a rule matching the given name has a pattern matching the request.
         * @param handlerName The name of the handler.  This matches the RoutingRule handlerName.
         * @param handler The handling function for the rule.
         */
        addHandler(handler: offlineHandlers.OfflineHandler): void;
        /**
         * Remove a request handler.
         * @param handlerName The name of the handler.
         * @return Whether a handler was found and removed.
         */
        removeHandler(handlerName: string): boolean;
        /**
         * Set the handler to use when no other handlers match.  The handler will be called with
         * rule and matches as null, as there is no rule that matched.
         * @param handler
         */
        setDefaultHandler(handler: offlineHandlers.OfflineHandler): void;
        /**
         * Set the rules that determine how (offline) requests are routed.
         * @param rules
         */
        setRoutingRules(rules: RoutingRule[]): void;
        /**
         * Set the rules that determine how (offline) requests are routed from a promise.
         * @param routingRulesJsonStringPromise
         */
        setRoutingRulesFromPromise(routingRulesJsonStringPromise: Promise<string>): void;
        /**
         * Remove all routing rules.
         */
        clearRoutingRules(): void;
        /**
         * Check the tile URL against any "Rewrite" rules in the offline manifest and return
         * the rewritten URL if there is a match.  Return null otherwise.
         * @param url The URL to rewrite.
         * @return The rewritten URL or null.
         */
        rewriteUrl(url: string): string;
        /**
         * Handles (routes) an offline request.
         */
        handle(request: EsriRequest, options: EsriRequestOptions): dojo.Deferred;
        _whenReady(callback: () => void): void;
        /**
         * Strips out possible proxy prefix from an offline request.
         */
        private _stripOutProxy(url);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * Not included in esri's d.ts file.
     */
    interface EsriRequest {
        callbackParamName: string;
        content?: any;
        form?: any;
        handleAs?: string;
        timeOut?: number;
        url: string;
    }
    /**
     * Not included in esri's d.ts file.
     */
    interface EsriRequestOptions {
        disableIdentityLookup?: boolean;
        usePost?: boolean;
        useProxy?: boolean;
    }
    class RequestContext implements EsriRequest {
        dfd: dojo.Deferred;
        options: EsriRequestOptions;
        callbackParamName: string;
        content: any;
        form: any;
        handleAs: string;
        timeOut: number;
        url: string;
        constructor(mixin: EsriRequest, dfd: dojo.Deferred, options: EsriRequestOptions);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * A rule routing the handling of an offline request.
     */
    interface RoutingRule {
        /**
         * The name of the handler.  There can be (should be) many handlers with the same
         * name.  The difference in how they function is the parameters to this rule
         * and the matches captured from the pattern.
         */
        handlerName: string;
        /**
         * A pattern for when to attempt to apply the handler code to the rule.
         * The code may still refuse to handle the request so this is necessary
         * but not sufficient.
         */
        pattern: string;
        /**
         * A lookup for matching on the 'content' of a request - ie. request parameters.
         * The key is the name of the parameter, and the result is an object with a regex pattern for the match.
         */
        queryParameterPatterns?: {
            [name: string]: {
                pattern: string;
            };
        };
        /**
         * Parameters for this rule that dictate behaviour of the handler code.
         */
        parameters: {
            [key: string]: string;
        };
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline.bundle {
    /**
     * Builds an array of routing rules in the bundle.
     * @return a dojo.Deferred<RoutingRule[]>
     */
    function buildRoutingRules(context: BundleBuilderContext): RoutingRule[];
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /**
     * Masks everything outside of a certain area of interest (AOI).
     */
    class AreaOfInterestMask {
        app: ViewerApplication;
        private _originalMapBackground;
        private _aoi;
        private _enabled;
        /**
          * Whether to set the map background color to be the same as the fill color. This can be be useful because the
          * mask may not reach all the way to the outer edges of the map. Setting this to true will ensure full coverage.
          */
        matchMapBackground: boolean;
        /**
          * The color of the mask.
          */
        fillColor: any;
        /**
          * The color of the AOI outline.
          */
        boundaryColor: esri.Color;
        /**
          * The thickness of the AOI otuline.
          */
        boundaryWidth: number;
        /**
          * The style of the AOI otuline.
          */
        boundaryStyle: any;
        /**
          * The layer id to use for map graphics.
          */
        layerId: string;
        constructor(app: ViewerApplication, config?: AreaOfInterestMaskConfig);
        /**
         * Shows the mask. Will not be shown if the mask is disabled.
         * @param areaOfInterest The area of interest to to be visible. Everything outside of this will be hidden.
         */
        show(areaOfInterest: esri.geometry.Polygon): void;
        /**
         * Eliminates the mask.
         */
        hide(): void;
        /**
         * Enables the mask. If it was not enabled while show() was called, this method will actually show the mask.
         */
        enable(): void;
        /**
         * Disables the mask. If show() is called while disabled, it will not actually be shown.
         */
        disable(): void;
        /**
         * Configures this AreaOfInterestMask to match the properties specified in the config. Any properties that are null
         * or undefined will retain their existing values.
         */
        configure(config?: AreaOfInterestMaskConfig): void;
        private _getLayer();
        private _getMapNode();
    }
    /**
     * Configuration properties for the AreaOfInterestMask.
     */
    interface AreaOfInterestMaskConfig {
        /**
          * Whether the mask should be actually shown or not when the show() method is called.
          * If disabled, it will not be shown, even if show() is called.
          */
        enabled?: boolean;
        /**
          * The color of the mask.
          */
        fillColor?: string | number[];
        /**
          * The color of the AOI outline.
          */
        boundaryColor?: string | number[];
        /**
          * The style of the AOI outline ("null", "solid", "dash", "dot").
          */
        boundaryStyle?: string;
        /**
          * The thickness of the AOI otuline.
          */
        boundaryWidth?: number;
        /**
          * The layer id to use for map graphics.
          */
        layerId?: string;
        /**
          * Whether to set the map background color to be the same as the fill color. This can be be useful because the
          * mask may not reach all the way to the outer edges of the map. Setting this to true will ensure full coverage.
          */
        matchMapBackground?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline {
    /**
     * Manages offline state.  Chief among the offline state is the offline map
     * which defines what data will be available offline and how offline requests
     * are handled.  Offline profiles that are added may be activated when offline.
     */
    class OfflineManager {
        app: ViewerApplication;
        libraryId: string;
        /**
         * A promise for the last offline map operation.  Chain .finally() off this for all operations
         * that touch the list of profiles or storage to keep the list consistent.  Recursion will
         * cause deadlocks so keep it simple.
         */
        private _lastOperation;
        private _activeOfflineMapId;
        private _previousActiveOfflineMapId;
        private _cancellationTokenSource;
        private _offlineMaps;
        private _bundleManager;
        /** The mask that hides everything outside of the offline map area of interest. Can be configured. */
        aoiMask: AreaOfInterestMask;
        /** Information about the currently active offline map. */
        syncInfo: SyncInfo;
        /** Whether or not the current job can be canceled */
        canCancel: Observable<boolean>;
        /**
         * An indiciator of whether or not there is an active offline map.
         * This property is preferable to app.isOffline (which is deprecated) because it more accurately describes
         * the state of the application. There is no binary online/offline switch, so app.isOffline is misleading.
         * Even though an offline map is active, the device may still have internet connectivity.
         */
        isOfflineMapActive: Observable<boolean>;
        constructor(app: ViewerApplication, libraryId: string);
        /**
         * Add an offline map.  The site information and features are downloaded.
         * @param offlineMap The offline map to add.
         * @param progress An optional callback for a stream of progress messages.
         */
        addOfflineMap(offlineMap: OfflineMap, progress?: (progress: Progress) => void): Promise<void>;
        /**
         * Remove an offline map.  The site information and feature data is deleted.
         * @param offlineMap The offline map to remove, or its ID.
         * @param progress An optional callback for a stream of progress messages.
         */
        removeOfflineMap(offlineMap: string | OfflineMap, progress?: (message: string) => void): Promise<void>;
        /**
         * Remove an offline map right now, without waiting for the previous operation to complete.
         */
        private _removeOfflineMapNow(offlineMap, progress?);
        /**
         * Sync an offline map.  Edits are sent to the server, then feature data redownloaded,
         * then the site data is redownloaded.
         * @param offlineMap The offline map to sync, or its ID.
         * @param progress An optional callback for a stream of progress messages.
         */
        syncOfflineMap(offlineMap: string | OfflineMap, progress?: (progress: Progress) => void): Promise<void>;
        /**
         * Updates the bundle for an offline map without syncing.
         * @param offlineMap The offline map to sync, or its ID.
         */
        updateBundle(offlineMap: string | OfflineMap): Promise<void>;
        /**
         * Make an offline map active.  When offline this is the data from which offline
         * data is served.
         * @param offlineMap The offline map to make active, or its ID.
         */
        activateOfflineMap(offlineMap: string | OfflineMap): Promise<void>;
        /**
         * Make no offline map active.  This will succeed even if there is no
         * active profile.
         */
        deactivateOfflineMap(): Promise<void>;
        /**
         * Cancels the current sync or download.
         */
        cancel(): Promise<void>;
        /**
         * Clears out the last operation, so that the next operation can just go ahead without waiting for the last operation to complete.
         * This should be used with caution, only called in extreme circumstances - for example if the last operation is hung.
         */
        forgetLast(): void;
        /**
         * Get the offline map with the given ID or null if not found.
         * @param offlineMapId
         */
        getOfflineMapById(offlineMapId: string): OfflineMap;
        /**
         * Get all offline maps.
         */
        getOfflineMaps(): OfflineMap[];
        /**
         * Get the currently active offline map or null if none.
         */
        getActiveOfflineMap(): OfflineMap;
        /**
         * Refresh the sync info object.  This is automatically done when the active
         * offline map changes.
         */
        refreshSyncInfo(): Promise<void>;
        /**
         * Save the state of the OfflineManager to storage.  This goes in the promise chain of anything that
         * changes the state.
         */
        private _save();
        /**
         * Load the state of the OfflineManager from storage.  This should only be called on start up.
         */
        load(): void;
        /**
         * Creates a priority sequence of offline map ids whereby we should use the first one that is workable.
         */
        private _prioritizeOfflineMaps(state, offlineMaps);
        /**
         * Employs some intelligence to determine which offline map should be loaded, if any.
         * This method is recursive and will keep trying to initialize with the offline map ids
         * in the sequence provided until it finds one that is workable.
         */
        private _initializeMap(offlineMapIds);
        /**
         * Waits for the last operation to complete, absorbing any errors in the process, because we don't care
         * about errors from the last operation when starting a new operation.
         */
        private _waitForLast();
        /**
         * Throws an error if cancellation has been requested.
         */
        private _throwIfCanceled();
        private _throwIfNotNativeInitialized();
        /**
         * Load an OfflineMap from storage.  Offline profiles are kept in memory so this
         * is only necessary on start up.
         * @param offlineMapId
         */
        private _loadOfflineMapFromStorage(offlineMapId);
        /**
         * Get the index of the OfflineMap.  The index of an OfflineMap is never
         * exposed outside this class.
         * @param offlineMap The offline map or its ID.
         */
        private _getOfflineMapIx(offlineMap);
        /**
         * Get the array with information mapping map service URLs to downloaded tpk filename.
         * @param offlineMap
         */
        private _getOfflineMapBasemapMapping(offlineMap);
        /**
         * Get the key to retrieve the offline map content from the store.
         * @param offlineMap The offline map ID or the offline map itself.
         */
        private _getOfflineMapKey(offlineMap);
        /**
         * Get from the store in promise form.  This will hopefully be moved into Store in 3.0.
         * @param key
         */
        private _appStoreGetPromise(key);
        /**
         * Set to the store in promise form.  This will hopefully move into Store in 3.0.
         * @param key
         * @param value
         */
        private _appStoreSetPromise(key, value);
        /**
         * Remove from the store in promise form.  This will hopefully move into Store in 3.0.
         * @param key
         */
        private _appStoreRemovePromise(key);
        getResource(key: string): string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline {
    interface OfflineMap extends geocortex.essentials.documents.Document {
        content?: OfflineMapContent;
    }
    interface OfflineMapContent {
        /**
         * The geometry to include in the OfflineMap.  This is the JSON representation
         * of an esri Polygon.
         */
        geometry: {
            /**
             * Each ring is represented as an array of points. The first point of each ring is
             * always the same as the last point. And each point in the ring is represented as
             * a 2-element array. The 0-index is the x-coordinate and the 1-index is the y-coordinate.
             */
            rings: number[][][];
            /**
             * The spatial reference must be specified using a well-known ID (wkid) or well-known text (wkt).
             */
            spatialReference: {
                wkid?: number;
                wkt?: string;
            };
        };
        /**
         * The layers to include in the offline data.
         */
        layers: OfflineMapLayer[];
        /**
         * The basemaps to include in the offline data.
         */
        basemaps: OfflineMapBasemap[];
        /**
         * Whether to incluide attachments in the offline data.
         */
        includeAttachments: boolean;
    }
    interface OfflineMapLayer {
        /**
         * The identifier for the layer.
         * see: geocortex.essentialsHtmlViewer.mapping.infrastructure.gis.LayerInfo
         */
        layerInfoUniqueId: string;
        /**
         * An optional definition expression to be applied to the query that downloads data.
         * This is not the same
         */
        definitionExpression?: string;
    }
    interface OfflineMapBasemap {
        /**
         * The identifier for the BaseMap.
         * see: geocortex.essentials.BaseMap
         */
        baseMapId: string;
        /**
         * The type of the source of the TPK.  This determines how the TPK is downloaded.
         * see OfflineMapBasemap.Type.
         */
        sourceType: string;
        /**
         * The URL to download the TPK or exportTiles.
         */
        url: string;
        /**
         * The name of the file the basemap should be downloaded to.
         */
        filename: string;
        /**
         * The size of the basemap in bytes.  This is an estimate for dynamically created TPKs,
         * and an exact value for static.
         */
        size: number;
        /**
         * The minimum level to use in the basemap.  Doesn't apply to static type.
         */
        minLevel?: number;
        /**
         * The maximum level to use in the basemap.  Doesn't apply to static type.
         */
        maxLevel?: number;
        /**
         * Period in days a TPK is valid before it should be refreshed.
         */
        refreshInterval?: number;
    }
    module OfflineMap {
        /**
         * Perform basic verification on the OfflineMap.  Throws errors if the OfflineMap
         * is malformed.
         * @param offlineMap The OfflineMap to verify.
         */
        function verify(offlineMap: OfflineMap): void;
        /**
         * Compare the two offline maps and return an object containing only the values
         * that are different in offlineMapB.
         * @param offlineMapA The offline map to compare from.
         * @param offlineMapB The offline map to compare to, where differing values will come from.
         * @return An offline map-like object containing only the differences.
         */
        function diff(offlineMapA: OfflineMap, offlineMapB: OfflineMap): OfflineMap;
    }
    module OfflineMapBasemap {
        var Type: {
            EXPORT_TILES: string;
            PREGENERATED: string;
        };
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline {
    /**
     * A progress status update message, internal to the offline namespace.
     * @private
     */
    interface Progress {
        message: string;
        percentage: number;
        isWarning?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline {
    interface SyncInfoJson {
        servers: SyncServerInfo[];
    }
    interface SyncServerInfo {
        /** The URL of the server, not including the layer id - ie. up to /MapServer or /FeatureServer. */
        featureServiceUrl: string;
        /** A collection of layers *and* tables that are synced. */
        layers: SyncLayerInfo[];
        /** The local server URL that replaces the online feature server when offline. */
        localServerUrl: string;
        /** Whether attachments have been downloaded or not. */
        attachmentsDownloaded: boolean;
        /** Number of offline feature adds (new records). */
        numberOfAdds: number;
        /** Number of offline feature edits. */
        numberOfEdits: number;
        /** Number of offline deleted records. */
        numberOfDeletes: number;
        /** The size of the database used for storing this data offline. */
        totalSizeInBytes: number;
        /** The last sync time. */
        lastSyncTime: Date;
    }
    interface SyncLayerInfo {
        id: number;
        canAddAttachments: boolean;
        canEdit: boolean;
    }
    class SyncInfo implements SyncInfoJson {
        servers: SyncServerInfo[];
        constructor(syncInfo: SyncInfoJson);
        isSynced(url: string): boolean;
        findLayerOrTable(url: string): SyncLayerInfo;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline {
    import ViewerApplication = geocortex.essentialsHtmlViewer.ViewerApplication;
    class SyncEngine {
        static STATUS_IN_PROGRESS: string;
        static STATUS_SUCCESS: string;
        static STATUS_ERROR: string;
        static getSyncInfo(app: ViewerApplication, profileName: string): Promise<SyncInfo>;
        static sync(app: ViewerApplication, parameters: SyncParameters, cancellationToken: CancellationToken, progress: (progress: SyncProgress) => void): Promise<SyncProgress>;
        private static _sync(app, options, cancellationToken, progress);
        private static _cancel(app);
        static deleteData(app: ViewerApplication, profile: string): Promise<any>;
        private static _unregisterOfflineDeletedReplicas(app);
        private static _getFeatureServiceTokenInfo(app);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline {
    /**
     * Parameters to the SyncEngine.sync call.
     */
    interface SyncParameters {
        profile: string;
        featureServices: FeatureServiceParameters[];
        geometry: esri.geometry.Geometry;
        includeAttachments: boolean;
        mapSpatialReference: esri.SpatialReference;
    }
    /**
     * Feature service parameters in the SyncParameters object.
     */
    interface FeatureServiceParameters {
        url: string;
        layers: {
            id: number;
            where?: string;
        }[];
        capabilities: string[];
        token?: string;
    }
    module SyncParameters {
        /**
         * Builds a SyncParameters object from an OfflineMap.
         * @param app The app from which the map and appInfo are derived.
         * @param offlineMap The OfflineMap to build SyncParameters from.
         */
        function buildSyncParameters(app: ViewerApplication, offlineMap: OfflineMap): SyncParameters;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline {
    interface SyncProgress {
        state: string;
        text: string;
        serviceProgress?: number;
        overallProgress?: number;
        serviceUrl: string;
        editsSentToServer?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.offline {
    /**
     * @private
     */
    interface WorkDescription {
        saveProfileWork: number;
        bundleWork: number;
        featureLayerWork: number;
        basemapWork: number;
    }
    /**
     * Utility class to calculate work being done for sync.
     * @private
     */
    class WorkCalculator {
        static calculateFirstDownloadWork(profile: OfflineMap): WorkDescription;
        static calculateSyncWork(profile: OfflineMap): WorkDescription;
        static noWork(): WorkDescription;
        static calculatePercentageComplete(completedWork: WorkDescription, totalWork: WorkDescription): number;
        private static _calculateTotalWork(work);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.PortalUtils {
    /**
     * Get a arcgis.com or Portal identity if it exists.
     * @param app The current application instance
     */
    function getPortalIdentity(app: geocortex.essentialsHtmlViewer.ViewerApplication): essentials.Identity;
    /**
     * Check if the authenticated user has access to Portal.
     * @param app The current application instance
     */
    function hasAccessToPortal(app: geocortex.essentialsHtmlViewer.ViewerApplication): boolean;
    /**
     * Check if the authenticated user has create content privilege in Portal.
     * @param app The current application instance
     */
    function hasCreateContentPrivilege(app: geocortex.essentialsHtmlViewer.ViewerApplication): boolean;
    /**
     * Gets the Portal base URL.
     * @param app The current application instance
     */
    function getPortalBaseUrl(app: geocortex.essentialsHtmlViewer.ViewerApplication): string;
    /**
     * Gets the Portal My Content page URL.
     * @param app The current application instance
     */
    function getPortalMyContentUrl(app: geocortex.essentialsHtmlViewer.ViewerApplication): string;
    /**
     * Gets the Portal item page URL for the given item id.
     * @param itemId The item id
     * @param app The current application instance
     */
    function getPortalItemUrl(itemId: string, app: geocortex.essentialsHtmlViewer.ViewerApplication): string;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface BaseMapLayer extends webMap.BaseMapLayer, project.ServiceLayer {
        layers: project.Layer[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface CoordinateSystem {
        /** The WKID for the coordinate system. */
        wkid?: number;
        /** The WKT for the coordinate system. */
        wkt?: string;
        output: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface DrawingInfo extends webMap.DrawingInfo {
        /** Settings used for feature clustering visualization. */
        clustering?: {
            radius: number;
            backgroundColor: webMap.Color;
            labelColor: webMap.Color;
            maximumFeatures: number;
        };
        /** Whether labels for the layer are visible. The default is true. */
        showLabels?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface Feature extends webMap.Feature {
        /** The Essentials layer associated with the feature. Only necessary if {@link featureSet} is not specified. */
        layer?: project.Layer;
        /**
         * The primary key value for the feature. If specified, {@link layer} must also be specified.
         * In this case, the {@link webMap.Feature.attributes} and {@link webMap.Feature.geometry} should not be specified. Instead,
         * they will be fetched by querying the layer.
         */
        id?: any;
        /**
         * The Esri feature layer containing field metadata for formatting attribute data. Only necessary when
         * the feature is not associated with an Essentials Layer.
         */
        featureLayer?: project.ServiceLayer;
        featureSet: project.FeatureSet;
        allowUnsafeContent?: boolean;
        extendedProperties?: {
            [name: string]: any;
        };
        defaultNumberFormat?: string;
        defaultDateFormat?: string;
        timeZoneId?: string;
        displayTimeZoneId?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface FeatureCollection extends webMap.FeatureCollection {
        layers: project.Layer[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface FeatureSet extends webMap.FeatureSet {
        id?: string;
        features: project.Feature[];
        allowUnsafeContent?: boolean;
        extendedProperties?: {
            [name: string]: any;
        };
        layer?: project.Layer;
        displayName?: string;
        iconUri?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface FeatureSetCollection {
        id: string;
        displayName: string;
        featureSets: project.FeatureSet[];
        sourceName: string;
        tag: any;
        extendedProperties?: {
            [name: string]: any;
        };
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface Layer extends webMap.Layer {
        serviceLayer: project.ServiceLayer;
        layerDefinition?: project.LayerDefinition;
        featureSet?: project.FeatureSet;
        /** Whether the layer is a dynamic layer. If this is true, then layerDefinition should be specified as well. */
        isDynamic?: boolean;
        /** The geocortex layer definition as returned from essentials.Layer.toJson(). Used for user-added layers. */
        gcxLayerDefinition?: any;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface LayerDefinition extends webMap.LayerDefinition {
        drawingInfo: project.DrawingInfo;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    /**
     * Base interface for a module's persistent state.
     */
    interface ModuleState {
        /**
         * Identifies the version of the serialized project data. The default is 1.
         * Modules should increment this number whenever there are breaking changes to the
         * model that need special handling.
         */
        serialVersion?: number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface OperationalLayer extends webMap.OperationalLayer, project.ServiceLayer {
        layers: project.Layer[];
        featureCollection: project.FeatureCollection;
        layerDefinition: project.LayerDefinition;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface ApplicationState {
        /** The map's center point. */
        mapCenter?: infrastructure.webMap.Point;
        /** The map's scale. */
        mapScale?: number;
        /** The project state for each module. */
        moduleState: {
            [moduleName: string]: infrastructure.project.ModuleState;
        };
        /**
         * Determines whether special pointers within the project data have been decoded back into shared object references.
         * See {@link ProjectManager.encodeReferences} and {@link ProjectManager.decodeReferences}.
         */
        isDecoded?: boolean;
    }
    interface Project extends essentials.documents.Document {
        content?: ApplicationState;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    const PROJECT_TYPE: string;
    const SITE_ID_PROPERTY_NAME: string;
    const VIEWER_ID_PROPERTY_NAME: string;
    const PROJECT_QUERY_STRING_KEY: string;
    const VIEWER_QUERY_STRING_KEY: string;
    class ProjectManager {
        app: ViewerApplication;
        convert: ProjectConverter;
        filter: ProjectFilter;
        /** The project that is currently loaded (or in the process of loading). */
        current: Project;
        /** Whether project state is currently being applied. */
        isLoading: boolean;
        constructor(app: ViewerApplication);
        /**
         * Creates a new, empty project.
         */
        createEmpty(name: string): Project;
        /**
         * Creates a new project containing the current state of the application.
         */
        create(name: string): Promise<Project>;
        /**
         * Updates an existing project with the current state of the application.
         */
        update(project: Project): Promise<void>;
        /**
         * Removes a project.
         * @param project Either the project ID, or the actual project to remove.
         */
        remove(project: string | Project): Promise<void>;
        /**
         * Saves a project by updating the application state then writing to storage.
         * @param project The project to save.
         */
        save(project: Project, updateApplicationState?: boolean): Promise<void>;
        /**
         * Loads a project.
         * @param project Either the project ID, or the actual project to load.
         */
        load(project: string | Project): Promise<void>;
        /**
         * Writes a project file to storage.
         */
        write(project: Project): Promise<Project>;
        /**
         * Reads a project from storage.
         * @param id The project ID.
         * @param Whether or not to include the project content if retrieving it from the document store.
         */
        read(id: string, includeContent?: boolean): Promise<Project>;
        /**
         * Gets the given project.
         * @param project Either the project ID, or the actual project.
         * @param Whether or not to include the project content if retrieving it from the document store.
         * @return A promise containing the project.
         */
        getProject(project: string | Project, includeContent?: boolean): Promise<Project>;
        /**
         * Gets the ID of the given project.
         * @param project Either the project ID, or the actual project.
         * @return The project ID.
         */
        getProjectID(project: string | Project): string;
        /**
         * Gets the URL for the given project, or null if the project does not have an ID.
         * @param project The project to get the URL for.
         * @return The project URL or null.
         */
        getProjectUrl(project: Project): string;
        /**
         * Gets the Essentials site ID that the given project is associated with.
         */
        getSiteID(project: Project): string;
        /**
         * Gets the Essentials viewer ID that the given project is associated with.
         */
        getViewerID(project: Project): string;
        /**
         * Validates whether or not the given project is owned by the current user.
         * @param The project to verify ownership of.
         * @return A promise containing the project being validated.
         */
        validateProjectOwnership(project: Project): Promise<Project>;
        /**
         * Gets the current state of the application.
         */
        protected _exportState(): Promise<ApplicationState>;
        /**
         * Applies the given state to the viewer.
         */
        protected _applyState(state: ApplicationState): Promise<void>;
        /**
         * Applies the project's extent to the application's map.
         */
        protected _applyMapExtent(project: Project): void;
        protected _getResource(resource: string): string;
        /**
         * Gets all loaded the modules, keyed by name.
         */
        protected _getModules(): {
            [moduleName: string]: any;
        };
        _beginLoad(project: Project): Promise<void>;
        _finishLoad(): void;
        /**
         * Filters application state according to the filter defined by each module.
         * @param state The application state to filter.
         */
        _filterApplicationState(state: ApplicationState): Promise<ApplicationState>;
        /**
         * Replaces shared references within the object graph with special strings that act as "pointers" to
         * the shared object. When the object graph is serialized as JSON, this reduces the serialized footprint
         * and also allows cycles within the object graph, which would normally cause an error.
         * @param state The application state to encode.
         */
        protected encodeReferences(state: ApplicationState): void;
        /**
         * Performs the inverse of encodeReferences(), i.e. turns "pointers" back into shared object references.
         * @param state The application state to decode.
         */
        decodeReferences(state: ApplicationState): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.project {
    interface ServiceLayer extends webMap.ServiceLayer {
        layers: project.Layer[];
        gcxMapServiceDefinition?: any;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    import Thenable = geocortex.framework.Thenable;
    module PromiseUtils {
        /**
         * Similar to Promise.all(), except that any rejected promises are skipped, rather than causing the entire
         * promise to be rejected. As a result, the returned array might contain less elements than the original.
         */
        function allSkipRejected<R>(values: Thenable<Thenable<R>[]>): Promise<R[]>;
        function allSkipRejected<R>(values: Thenable<R[]>): Promise<R[]>;
        function allSkipRejected<R>(values: Thenable<R>[]): Promise<R[]>;
        function allSkipRejected<R>(values: R[]): Promise<R[]>;
        /**
         * Similar to Promise.map(), except that any rejected promises are skipped, rather than causing the entire
         * promise to be rejected. As a result, the returned array might contain less elements than the original.
         */
        function mapSkipRejected<R, U>(values: Thenable<Thenable<R>[]>, mapper: (item: R, index: number, arrayLength: number) => Thenable<U>, option?: {
            concurrency: number;
        }): Promise<U[]>;
        function mapSkipRejected<R, U>(values: Thenable<Thenable<R>[]>, mapper: (item: R, index: number, arrayLength: number) => U, option?: {
            concurrency: number;
        }): Promise<U[]>;
        function mapSkipRejected<R, U>(values: Thenable<R[]>, mapper: (item: R, index: number, arrayLength: number) => Thenable<U>, option?: {
            concurrency: number;
        }): Promise<U[]>;
        function mapSkipRejected<R, U>(values: Thenable<R[]>, mapper: (item: R, index: number, arrayLength: number) => U, option?: {
            concurrency: number;
        }): Promise<U[]>;
        function mapSkipRejected<R, U>(values: Thenable<R>[], mapper: (item: R, index: number, arrayLength: number) => Thenable<U>, option?: {
            concurrency: number;
        }): Promise<U[]>;
        function mapSkipRejected<R, U>(values: Thenable<R>[], mapper: (item: R, index: number, arrayLength: number) => U, option?: {
            concurrency: number;
        }): Promise<U[]>;
        function mapSkipRejected<R, U>(values: R[], mapper: (item: R, index: number, arrayLength: number) => Thenable<U>, option?: {
            concurrency: number;
        }): Promise<U[]>;
        function mapSkipRejected<R, U>(values: R[], mapper: (item: R, index: number, arrayLength: number) => U, option?: {
            concurrency: number;
        }): Promise<U[]>;
        /**
         * Similar to Promise.props(), except that any rejected promises are skipped, rather than causing the entire
         * promise to be rejected. As a result, the returned object might contain less properties than the original.
         */
        function propsSkipRejected(object: Thenable<Object>): Promise<Object>;
        function propsSkipRejected(object: Object): Promise<Object>;
        /**
         * Logs a warning if the given promise is rejected.
         * @param promise The promise that might be rejected.
         * @param app The application
         * @param warning The warning text to log. May contain a "{0}" placeholder that will be substituted with the actual error.
         */
        function warnOnReject<T>(promise: Thenable<T>, app: ViewerApplication, warning: string): Promise<T>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.reporting {
    /**
     * Returns an array of all Features within a given Reportable input (group of features).
     */
    function getAllFeaturesFromReportable(reportable: FeatureSetCollection | FeatureSet | Feature | Feature[]): Feature[];
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    /**
     * Describes the arguments for a marker.
     */
    interface MarkerArgs {
        /** The ID of the marker. */
        id: string;
        /** The symbol json object to represent the marker. Object syntax can be found at http://help.arcgis.com/en/arcgisserver/10.0/apis/rest/symbol.html. */
        symbolJson?: Object;
        /** The uri of the icon used to represent the marker. If a symbol json is also supplised the symbol will be preferred. */
        iconUri?: string;
        /** The width of the marker icon. Required if 'iconUri' is given. */
        iconWidth?: number;
        /** The height of the marker icon. Required if 'iconUri' is given. */
        iconHeight?: number;
        /** The geometry of the marker. */
        geometry?: esri.geometry.Geometry;
        /** The center point of the marker. If a geometry is also supplied the geometry will be preferred. */
        center?: esri.geometry.Point;
        /** The angle of the marker. */
        angle?: number;
        /** Whether or not the marker is visible. */
        visible?: boolean;
        /** Whether or not the marker is draggable. */
        draggable?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface EditVertexMovedEventArgs {
        /**
         * Reference to the sender.
         */
        sender: accessibility.EditCapabilityBase;
        /**
         * The coordinates of the mouse pointer in map coordinates.
         */
        mapPoint: esri.geometry.Point;
        /**
         * The coordinates of the mouse pointer in screen coordinates.
         */
        screenPoint: esri.geometry.ScreenPoint;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    class ClusterLayerArgs {
        /** The Geocortex Layer that the ClusterLayer is going to be based off of. */
        gcxLayer: geocortex.essentials.Layer;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface VisualizationArgs {
        /** The Geocortex Layer to remove visualizations from. */
        gcxLayer: geocortex.essentials.Layer;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface ToggleButtonStateChangedEventArgs {
        toggleButtonEntry: mapping.infrastructure.toolbarGroup.ToolbarToggleButtonEntry;
        state: mapping.infrastructure.toolbarGroup.ToggleButtonState;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface ToolbarButtonClickedEventArgs {
        commandName: string;
        commandParameter: string;
        id: string;
        name: string;
        libraryId: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface GraphicDrawDeactivatedEventArgs {
        /**
         * Reference to the sender.
         */
        sender: esri.toolbars.Draw;
        /**
         * The type of geometry drawn (e.g. "circle", "ellipse", "rectangle", "polyline", "polygon")
         */
        geometryType: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface GraphicDrawActivatedEventArgs {
        /**
         * Reference to the sender.
         */
        sender: esri.toolbars.Draw;
        /**
         * The type of geometry drawn (e.g. "circle", "ellipse", "rectangle", "polyline", "polygon")
         */
        geometryType: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    /**
     * Describes the arguments for an `EditVertexMovedEvent` event.
     */
    interface GraphicVertexMovedEventArgs {
        /**
         * Reference to the sender.
         */
        sender: esri.toolbars.Draw;
        /**
         * The coordinates of the mouse pointer in map coordinates.
         */
        mapPoint: esri.geometry.Point;
        /**
         * The coordinates of the mouse pointer in screen coordinates.
         */
        screenPoint: esri.geometry.ScreenPoint;
        /**
         * The coordinates of the snapping point.
         */
        snappingPoint: esri.geometry.Point;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface GraphicVertexAddedEventArgs {
        /**
         * Reference to the sender.
         */
        sender: esri.toolbars.Draw;
        /**
         * The coordinates of the mouse pointer in map coordinates.
         */
        mapPoint: esri.geometry.Point;
        /**
         * The coordinates of the mouse pointer in screen coordinates.
         */
        screenPoint: esri.geometry.ScreenPoint;
        /**
         * The coordinates of the snapping point.
         */
        snappingPoint: esri.geometry.Point;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    /**
     * Describes the arguments for a marker drag event.
     */
    interface MarkerDragEventArgs {
        /** The ID of the marker that triggered the event. */
        id: string;
        /** The center point of the graphic being dragged. */
        centerPoint: esri.geometry.Point;
        /** The coordinates of the mouse pointer in map coordinates. */
        mapPoint: esri.geometry.Point;
        /** The coordinates of the mouse pointer in screen coordinates. */
        screenPoint: esri.geometry.ScreenPoint;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    /**
     * Describes the arguments for a marker event.
     */
    interface MarkerPointerEventArgs {
        /** The ID of the marker that triggered the event. */
        id: string;
        /** The graphic of the marker that triggered the event. */
        graphic: esri.Graphic;
        /** The coordinates of the mouse pointer in map coordinates. */
        mapPoint: esri.geometry.Point;
        /** The coordinates of the mouse pointer in screen coordinates. */
        screenPoint: esri.geometry.ScreenPoint;
        /** Indicates which button was pressed on the mouse to trigger the event. */
        button: number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface StateChangedEventArgs {
        stateDefinition: applicationState.StateDefinition;
        activeStates: applicationState.ActiveState[];
        modalState: applicationState.StateDefinition;
        previousModalState: applicationState.StateDefinition;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    /**
     * Describes the arguments for a Snapping event.
     */
    class SnappingFeedbackEventArgs {
        /**
         * The snapping point, null if there is none.
         */
        snappingPoint: esri.geometry.Point;
        /**
         * The original input point.
         */
        inputPoint: esri.geometry.Point;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface ToolInputMethodChangedEvent {
        tool: essentialsHtmlViewer.mapping.infrastructure.tools.ToolBase;
        previousMethod: string;
        newMethod: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface TransientActivatedEventArgs {
        stateName: string;
        viewId?: string;
        regionId?: string;
        widgetId: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    /**
     * Describes the arguments for an undo/redo event.
     */
    interface UndoRedoEventArgs {
        /** Reference to the sender. */
        sender: essentialsHtmlViewer.mapping.infrastructure.undo.UndoManager;
        /** The operation that triggered the event. */
        operation?: essentialsHtmlViewer.mapping.infrastructure.undo.Undoable;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.featureDetails {
    interface FeatureProviderConfig {
        /**
         * The type for the feature provider.
         */
        type: string;
        /**
         * The type of view to create.
         */
        viewType: string;
        /**
         * The markup for the view. This could either be a string (if common for all view modes) or an object specifying markup for each view mode.
         */
        markup: FeatureProviderViewModeConfig | string;
        /**
         * Parameter which determines whether this provider is enabled or not.
         */
        enabled?: boolean;
        /**
         * View ID to assign to the view if the provider generates a single view only.
         */
        viewId?: string;
        /**
         * Library ID to assign to the view.
         */
        libraryId?: string;
        /**
         * Icon URI for an icon depicting the provider.
         */
        iconUri?: string;
        /**
         * Title for the provider.
         */
        title?: string;
        /**
         * Additional configuration for the provider.
         */
        config?: any;
        /**
         * Additional configuration for the provider views.
         */
        viewConfig?: any;
        /**
         * Region to target the provider views to. This will override the default configured region for the providers.
         * This is an object mapping each mode whose region needs to be overridden with the new target region.
         */
        targetRegion?: FeatureProviderViewModeConfig;
    }
    interface FeatureProviderViewModeConfig {
        [viewMode: string]: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /**
     * Describes an object that represents which spatial references require a specific datum transform.
     */
    interface DatumTransformRegistryItem {
        /** The spatial reference that the geometries are being projected from. */
        fromSR: esri.SpatialReference;
        /** The spatial reference that the geometries are being projected to. */
        toSR: esri.SpatialReference;
        /** The datum transform to apply when projecting. */
        transformation: esri.SpatialReference;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    /**
     * Describes an object that represents the projection parameters related to applying a datum transform.
     */
    interface DatumTransformParameters {
        /** The spatial reference for the datum transform to be applied on the projection geometry parameters. */
        transformation: esri.SpatialReference;
        /** Whether or not to transform forward. The direction of transformation is determined by the direction of the to/from spatial references for the transformation. */
        transformForward: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.gis {
    /**
     * Describes an object that represents a datum transform for projecting between different spatial references.
    * A valid datum tranform requires a parameter of each type (transform, from, and to).
     */
    interface DatumTransform {
        /** The well-known ID of the datum transform to use. */
        transformWkid?: number;
        /** The well-known text of the datum transform to use. This is ignored if `transformWkid` is also specified. */
        transformWkt?: string;
        /** The well-known ID of the spatial reference that you are projecting from. */
        fromWkid?: number;
        /** The well-known text of the spatial reference that you are projecting from. This is ignored if `fromWkid` is also specified. */
        fromWkt?: string;
        /** The well-known ID of the spatial reference that you are projecting to. */
        toWkid?: number;
        /** The well-known text of the spatial reference that you are projecting to. This is ignored if `toWkid` is also specified. */
        toWkt?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.identify {
    /**
     * Provides information about the identifiable layers in a map service, or indicates if the map service itself is identifiable.
     * @param mapServiceId The id for the map service in question.
     * @param layerIds An optional parameter which lists all layers within the mapService that are identifiable.
     * @param mapServiceIdentifiable An optional boolean which, if true, indicates that the map service itself is identifiable, which may be in case of image services and the like.
     */
    interface IdentifiableLayerInfo {
        mapServiceId: string;
        layerIds?: string[];
        mapServiceIdentifiable?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.identify {
    /**
     * Identifies a layer or a service layer (mapService) uniquely.
     * @param mapServiceId The id of the map service
     * @param layerId The id of the layer (if applicable). This will not be set in case we're describing a service layer (mapService).
     */
    interface LayerDescriptor {
        mapServiceId: string;
        layerId?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.integration {
    /**
     * Describes a remote component to listen to component messages from.
     */
    interface ComponentFrameInfo {
        /** The html element selector to target this specific component.  */
        elementSelector: string;
        /** The id of the integration provider that is hosted by this component. */
        name: string;
        /** The transport name of the messages, if applicable. */
        transportName?: string;
        /** The window hosting the component, if applicable. */
        contentWindow?: Window;
        /** The uri of the viewpoint indicator for 3rd party maps, if applicable. */
        viewpointIndicatorUri?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.integration {
    /**
     * Represents a message that the viewer can send to a component when it is initializing.
     */
    interface ComponentInitializationMessage {
        /** Whether or not this component has a previous state or it is opening for the first time. */
        hasPreviousState: boolean;
        /** The previous positional state of the 3rd-party component, provided when the component is not synced. */
        viewpoint: MapViewpointMessage;
        /** Whether or not the component is in sync with the viewer. */
        sync: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.integration {
    /**
     * Represents a message that a 3rd-party component can send to notify the viewer
     * of the component state when disconnecting.
     */
    interface ComponentStateMessage {
        /** The name of the component. */
        id: string;
        /** Whether or not the component is in sync with the viewer. */
        sync: boolean;
        /** The positional state of the 3rd-party component. */
        viewpoint: ComponentViewpointMessage;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.integration {
    /**
     * Describes a simple format for 2D or 3D positions to be transmitted in.
     */
    interface MapPosition {
        /** The `x` coordinate of the position. */
        x: number;
        /** The `y` coordinate of the position. */
        y: number;
        /** The `z` coordinate of the position, if applicable. */
        z?: number;
        /**
         * The {@link esri.SpatialReference} of the position.
         * Describes the coordinate system that the point is represented in.
         */
        spatialReference?: esri.SpatialReference;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.integration {
    /**
     * Represents the viewpoint of the viewer's map.
     */
    interface MapViewpointMessage {
        /** The component that last updated the viewpoint. */
        updaterName: string;
        /** The current extent of the viewer's map in its own {@link esri.SpatialReference}. */
        extent: esri.geometry.Extent;
        /** The 2- or 3- dimensional position of the viewpoint's center. */
        position: MapPosition;
        /** The scale of the current viewpoint. */
        scale: number;
        /** The heading of the current viewpoint. */
        heading: number;
        /** The pitch of the viewpoint. */
        pitch: number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.integration {
    /**
     * Represents a message that a 3rd-party component can send to notify the viewer (and other components)
     * of changes to positional state.
     */
    interface ComponentViewpointMessage {
        /** The name of the component doing the update. */
        updaterName: string;
        /** The centerpoint of the components viewpoint. */
        center: MapPosition;
        /** The scale of the current viewpoint. */
        scale: number;
        /** The 2-dimensional extent of the viewpoint, if applicable. */
        extent?: esri.geometry.Extent;
        /** Heading value for the current viewpoint, if applicable. */
        heading?: number;
        /** Pitch value for the current viewpoint, if applicable. */
        pitch?: number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    /** The visibility type of a layer list item's sub-items. */
    class LayerVisibilityType {
        /** Any number of items can be visible at a time. */
        static Default: string;
        /** Only one item can be visible at a time. */
        static MutuallyExclusive: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerSelector {
    class LayerSelector {
        appInfo: infrastructure.gis.AppInfo;
        layerFilter: (layerSelectorItem: LayerSelectorLayerItem | LayerSelectorServiceLayerItem) => boolean;
        layerStateChangeHandler: (layerSelectorItem: LayerSelectorLayerItem | LayerSelectorServiceLayerItem) => void;
        enableAllLayersHandler: () => void;
        disableAllLayersHandler: () => void;
        onInitializedHandler: (layerSelector: LayerSelector) => void;
        /**
         * Called when a new LayerSelectorFolderItem is created.
         * @param folderItem The item created.
         */
        onLayerSelectorFolderItemCreated: (folderItem: LayerSelectorFolderItem) => void;
        /**
         * Called when a new LayerSelectorLayerItem is created.
         * @param layerItem The item created.
         */
        onLayerSelectorLayerItemCreated: (layerItem: LayerSelectorLayerItem) => void;
        /**
         * Called when a new LayerSelectorServiceLayerItem is created.
         * @param layerItem The item created.
         */
        onLayerSelectorServiceLayerItemCreated: (layerItem: LayerSelectorServiceLayerItem) => void;
        items: ObservableCollection<LayerSelectorItem>;
        initialized: boolean;
        /**
         * A flat list of the filtered LayerSelectorServiceLayer and LayerSelectorLayer items.
         */
        filteredLayerSelectorLayerItems: (LayerSelectorLayerItem | LayerSelectorServiceLayerItem)[];
        /**
        * A flat list of the unfiltered LayerSelectorServiceLayer and LayerSelectorLayer items.
        */
        unfilteredLayerSelectorLayerItems: (LayerSelectorLayerItem | LayerSelectorServiceLayerItem)[];
        itemTypes: {
            FOLDER: string;
            LAYER: string;
            SERVICELAYER: string;
        };
        protected _infrastructureLibraryId: string;
        protected _unfilteredItems: LayerSelectorItem[];
        protected _suspendLayerStateChangeHandler: boolean;
        /** Placeholder folder for user-added layers */
        protected _userAddedLayersFolder: LayerSelectorFolderItem;
        /**
         * Creates a new instance of the (@link LayerSelector} class.
         * @param appInfo The {@link gis.AppInfo} that the layer selector belongs to
         * @param options Optional. An object containing options to configure the layer selector
         */
        constructor(appInfo: gis.AppInfo, options?: LayerSelectorConfiguration);
        initialize(): void;
        applyFilter(itemFilter?: (layerSelectorItem: LayerSelectorLayerItem | LayerSelectorServiceLayerItem) => boolean): void;
        /**
         * Reapply the last used layer filter.
         */
        reapplyFilter(): void;
        setLayerStateChangeHandler(layerStateChangeHandler?: (layerSelectorItem: LayerSelectorLayerItem | LayerSelectorServiceLayerItem) => void): void;
        setEnableAllLayersHandler(enableAllLayersHandler?: () => void): void;
        setDisableAllLayersHandler(disableAllLayersHandler?: () => void): void;
        enableAllLayers(): void;
        disableAllLayers(): void;
        addUserAddedServiceLayer(mapService: essentials.MapService | infrastructure.gis.ServiceLayerInfo): boolean;
        removeServiceLayer(mapService: essentials.MapService | infrastructure.gis.ServiceLayerInfo): boolean;
        updateServiceLayer(mapService: essentials.MapService | infrastructure.gis.ServiceLayerInfo, newItems?: geocortex.essentials.Layer[], oldItems?: geocortex.essentials.Layer[]): boolean;
        protected _removeItemFromUnfilteredCollections(item: LayerSelectorItem): void;
        protected _loadLayerSelectorItems(): void;
        protected _loadSelectorItemsNotInLayerList(): void;
        protected _createFolderItemFromRestItem(item: RestLayerListItem, isEnabled: boolean, isExpanded: boolean): LayerSelectorFolderItem;
        protected _creatFolderItemFromServiceLayer(srcItem: LayerSelectorServiceLayerItem, isEnabled: boolean, isExpanded: boolean): LayerSelectorFolderItem;
        protected _createLayerItemFromLayer(layer: gis.LayerInfo, isEnabled: boolean, isExpanded: boolean): LayerSelectorLayerItem;
        protected _createServiceLayerItemFromServiceLayer(serviceLayer: gis.ServiceLayerInfo, isEnabled: boolean, isExpanded: boolean): LayerSelectorServiceLayerItem;
        /**
         * Generates a clone of a folder or service layer item, set to enabled and minus its items. This is so we can filter items with children based on any filter that's applied
         * without actually modifying the original layer/folder item.
         */
        protected _generateItemCloneForFilter(srcItem: LayerSelectorFolderItem | LayerSelectorServiceLayerItem): LayerSelectorItem;
        protected _setTooltips(item: LayerSelectorItem): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerSelector {
    interface LayerSelectorConfiguration {
        layerFilter?: (layerSelectorLayerItem: LayerSelectorLayerItem | LayerSelectorServiceLayerItem) => boolean;
        layerStateChangeHandler?: (layerSelectorLayerItem: LayerSelectorLayerItem | LayerSelectorServiceLayerItem) => void;
        enableAllLayersHandler?: () => void;
        disableAllLayersHandler?: () => void;
        onInitializedHandler?: (layerSelector: LayerSelector) => void;
        onLayerSelectorFolderItemCreated?: (folderItem: LayerSelectorFolderItem) => void;
        onLayerSelectorLayerItemCreated?: (layerItem: LayerSelectorLayerItem) => void;
        onLayerSelectorServiceLayerItemCreated?: (layerItem: LayerSelectorServiceLayerItem) => void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerSelector {
    interface LayerSelectorFolderItem extends LayerSelectorItem {
        properties?: {
            [propName: string]: any;
        };
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerSelector {
    interface LayerSelectorItem {
        name: Observable<string>;
        iconUri: Observable<string>;
        iconTooltip: Observable<string>;
        isExpanded: Observable<boolean>;
        expanderTooltip: Observable<string>;
        isEnabled: Observable<boolean>;
        stateToggleTooltip: Observable<string>;
        isFolder: boolean;
        items: ObservableCollection<LayerSelectorItem>;
        itemType: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerSelector {
    interface LayerSelectorLayerItem extends LayerSelectorItem {
        layer: infrastructure.gis.LayerInfo;
        properties?: {
            [propName: string]: any;
        };
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerSelector {
    interface LayerSelectorServiceLayerItem extends LayerSelectorItem {
        serviceLayer: infrastructure.gis.ServiceLayerInfo;
        properties?: {
            [propName: string]: any;
        };
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    class AddStatusArgs {
        /**
         * The message text to display.
         * @type String
         */
        text: string;
        /**
         * The title to display on the close button.
         */
        closeTitle: string;
        /**
         * The URI of the image icon to show beside the text.
         * @type String
         */
        imageUri: string;
        /**
         * A callback function to invoke when the status message is dismissed by the user.
         * @type Function
         */
        userClosedCallback: () => void;
        /**
         * The css class name to apply so that an image can be shown using css.
         * @type String
         */
        imageClass: string;
        /**
         * The css class name to apply to the status message.
         * @type String
         */
        statusClass: string;
        /**
         * The ID of the status message. You can use this ID later on for the "PulseStatus" command and the "RemoveStatus" command.
         * If you do not supply a value, an ID will be created and assigned to id property so that you can use it later on.
         * @type String
         */
        id: string;
        /**
         * The timeout in milliseconds after which time the status message will go away.  A value of 0 or less than 0 means never time out.
         * @type Number
         */
        timeoutMS: number;
        /**
         * If set to true, then a busy icon will be used - likely an animation to shown activity.
         * @type Boolean
         */
        showBusyIcon: boolean;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.AddStatusArgs} class.

         * @param text The message text to display.
         * @param imageUri The URI of the image icon to show beside the text.
         * @param userClosedCallback A callback function to invoke when the status message is dismissed by the user.
         * @param imageClass The css class name to apply so that an image can be shown using css.
         * @param id The ID of the status message. You can use this ID later on for the "PulseStatus" command and the "RemoveStatus" command.
         *        If you do not supply a value, an ID will be created and assigned to id property so that you can use it later on.
         * @param timeoutMS The timeout in milliseconds after which time the status message will go away.  A value of 0 or less than 0 means never time out.
         * @param showBusyIcon If set to true, then a busy icon will be used - likely an animation to shown activity.
         */
        constructor(text: string, imageUri?: string, userClosedCallback?: () => void, imageClass?: string, id?: string, timeoutMS?: number, showBusyIcon?: boolean);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    class ShowMapElementArgs {
        /**
         * The caller assigned ID of the map element to show.  New map elements will be created for each
         * unique ID, so if you want to replace the contents of a map element, then use the ID of that element.
         * If you want to create a new map element, then use a new unique ID here.
         * @type String
         * @ignore
         */
        elementID: string;
        /**
         * The ESRI map point to show the content at.
         * @type esri.geometry.Point
         * @ignore
         */
        mapPoint: esri.geometry.Point;
        /**
         * The content to show on the map.  This can be be either an HTML Element, a String containing any valid HTML,
         * or a geocortex.framework.ui.ViewBase.
         * @type Object
         * @ignore
         */
        content: HTMLElement | framework.ui.ViewBase | string;
        /**
         * The title to show, if displaying in a map callout. This can either be a string, or a geocortex.framework.ui.ViewBase.
         * The title may also come from the geocortex.framework.ui.ViewBase specified for "content".
         * If this property is specified, it will take precedence.
         * @type Object
         * @ignore
         */
        title: HTMLElement | framework.ui.ViewBase | string;
        /**
         * Whether to destroy the child content view when this view is destroyed.  Leave this false if the view is going
         * to be reused (for instance as part of a module).  Set this to true if the view was created manually
         * with ViewManeger.createView() and then forgotten about.
         */
        destroyContentView: boolean;
        /** @private */
        delay: number;
        /**
         * Initializes a new instance of the {@link ShowMapElementArgs} class.
         * `ShowMapElementArgs` defines the arguments passed to a command relating to a showing an HTML view or element on the map.
         * This class can be used for showing content in a map tip, or for attaching arbitrary HTML content to the map.
         * The content property may be any of the following types:
         * - An HTML DOM Element.
         * - A framework view, inheriting from {@link framework.ui.ViewBase}.
         * - An HTML content string.
         * @param elementId The ID to use when referring to the newly created element, e.g. when updating or removing it.
         * @param mapPoint The point (in map space) to anchor the element to.
         * @param content Arbitrary content to display in the map element.
         * @param title Title of the element.
         */
        constructor(elementId: string, mapPoint?: esri.geometry.Point, content?: any, title?: any);
        /**
         * Gets the HTML element node, based on the content property.
         */
        getNode(): HTMLElement;
        /**
         * Gets the HTML element node, based on the title property.
         */
        getTitleNode(): HTMLElement;
        /**
         * Determines if the content property is a {@link geocortex.framework.ui.ViewBase}.
         */
        contentIsView(): boolean;
        /**
         * Determines if the title property is a {@link geocortex.framework.ui.ViewBase}.
         */
        titleIsView(): boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    class AuthenticationEventArgs {
        result: any;
        username: string;
        token: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface GraphicEditDeactivatedEventArgs {
        /**
         * Reference to the sender.
         */
        sender: esri.toolbars.Edit;
        /**
         * The editing type (e.g. Edit.MOVE | Edit.ROTATE | Edit.SCALE)
         */
        tool: number;
        /**
         * The graphic whose vertices were edited or moved.
         */
        graphic: esri.Graphic;
        /**
         * Whether the original graphic was modified.
         */
        isModified?: boolean;
        /**
         * Whether the editing operation has been cancelled.
         */
        cancelled?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface GraphicEditActivatedEventArgs {
        /**
         * Reference to the sender.
         */
        sender: esri.toolbars.Edit;
        /**
         * The editing type (e.g. Edit.MOVE | Edit.ROTATE | Edit.SCALE)
         */
        tool: number;
        /**
         * The graphic to edit whose vertices will be edited or moved.
         */
        graphic: esri.Graphic;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    class GeolocationEventArgs {
        /** A point in Web Mercator. */
        mapPoint: esri.geometry.Point;
        /** A point in the map's spatial reference. */
        projectedMapPoint: esri.geometry.Point;
        /** A location returned directly from the HTML5 geolocation event. */
        location: Position;
        /** Whether the current geolocation result was from a single geolocate, track, or a follow. */
        typeOfGeolocation: string;
        /** The accuracyThreshold goal that was initially specified for a single point geolocate command. */
        accuracyThreshold: number;
        /** Whether or not the single point geolocation process reached its time limit. */
        timedOut: boolean;
        /**
         * Initializes a new instance of the {@link GeolocationEventArgs} class.
         */
        constructor();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    class MapExtentEventArgs {
        /** Supplementary information for when we are able to project */
        /** to 4326 on the client-side (i.e. from Web Mercator) */
        centerLatLon: any;
        currentScale: number;
        currentResolution: number;
        /**
         * Initializes a new instance of the {@link MapExtentEventArgs} class.
         */
        constructor();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    class UserEventArgs {
        /**
         * Gets or sets whether the user sign-in/sign-out should be cancelled, or allowed to proceed.
         */
        isCancelled: boolean;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs.UserEventArgs} class.
         */
        constructor();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    class FeatureDescriptionPresenterView extends framework.ui.ViewBase {
        app: ViewerApplication;
        /** @private A collection of the commands we have seen so far. The position will be used as the ID Key */
        _uris: string[];
        /** @private An object used as a dictionary to cache known description formats. Compute once, serve many times. */
        _descFormats: {
            [descFormat: string]: string;
        };
        /**
         * A string for the name of the field that we will use for the template. This should be "description" or "longDescription"
         * If not specified, the system will default to the long description.
         */
        contentField: string;
        /** Validator which sanitizes HTML strings. */
        protected _xssHtmlValidator: validation.XssHtmlValidator;
        /**
         * Construct a feature description presenter view.
         */
        constructor(app: ViewerApplication, libraryId?: string);
        /** @inherited */
        attach(viewModel: Feature): Promise<void>;
        /**
         * Returns a description for the given feature capable of performing commands in hyperlinks.
         * To be used with features that do not have relationships.
         * @deprecated 2.6 Use {@link getDescriptionContent} instead.
         * @param feature The feature what we would like to get the description for
         */
        descriptionGet(feature: Feature): Promise<string>;
        getContentFieldFormat(feature: Feature): string;
        /**
         * Returns a description for the given feature.
         * The description is populated with unbound command hyperlinks and image load handlers for handling layout changes.
         * Consumers must bind this content themselves.
         * Note that all anchor tags are converted to command hyperlinks that open the URLs only after verification via a {@link ContentPolicy}.
         * @param feature The feature what we would like to generate the descriptive content for.
         * @param descriptionFormat Optional parameter. If provided, will override the descriptionFormat for the feature - to be used for eg. when relationship replacement tokens resolve asynchronously.
         */
        getDescriptionContent(feature: Feature, descriptionFormat?: string): Promise<string>;
        /**
         * Renders a feature description into the provided HTML element, injecting command hyperlinks and image loading handlers.
         * @deprecated 2.6 Use {@link applyDescriptiveTemplate} instead.
         * @param feature The feature what we would like to get the description for
         * @param viewRoot The HTML element to assign the description to.
         */
        descriptionApply(feature: Feature, viewRoot: HTMLElement): Promise<any>;
        /**
         * Renders a feature description into the provided HTML element, injecting command hyperlinks and image loading handlers.
         * @param feature The feature what we would like to get the description for
         * @param viewRoot The HTML element to assign the description to.
         */
        applyDescriptiveTemplate(feature: Feature, viewRoot: HTMLElement): Promise<any>;
        /**
         * Extract command hyperlinks and replace them with placeholders.
         */
        protected _extractCommandHyperlinks(html: string): CommandHyperlinkPlaceholderState;
        /**
         * Inject command hyperlinks back into the subject of a previous extraction.
         */
        protected _injectCommandHyperlinks(state: CommandHyperlinkPlaceholderState): string;
        /**
         * Sanitize a string of HTML.
         */
        protected _sanitizeHtml(html: string): Promise<string>;
        /**
         * Creates a cleansed copy of a format with any command hyperlinks replaced with click handlers
         * @deprecated 2.6 Use {@link insertLinkAndImageBindings} instead.
         * @param Format the format template for this feature
         */
        cleansedFormatForFormat(descFormat: string): string;
        /**
         * Inserts command hyperlinks and image load handlers, the latter for the purpose of handling layout changes.
         * @param Format the format template for this feature
         */
        insertLinkAndImageBindings(descFormat: string): string;
        /**
         * Override this method to add custom behavior on image load.
         */
        handleImgLoad(evt: HTMLImageElement): void;
        /**
         * Finds the id for the given command hyperlink. If one is not found, creates one and returns that.
         * @param Uri the uri you would like the key for
         * @return Number
         */
        keyForUri(uri: string): number;
        /**
         * Attempts to parse the parameter string given into one with the given type. Also performs Token replacements
         * @param parameter the parameter string you are attempting to parse
         * @param paramType the type that you would like to get the parameter in.
         * @param context the context to use for any token replacements
         * @return Object an array of the command parameters given the given format.
         */
        parseArguments(parameter: string, paramType: string, context: any): string[];
        /**
         * Replaces any instances of the given token string with the attributes of a given feature, and returns if we any such substitutions occurred.
         * @param token The token string you would like to replace
         * @param feature The feature that should be used as a context for the token replacements
         * @param output An object whose value parameter will contain the substituted output if the token substitution succeeds
         * @return Boolean
         */
        tryPerformTokenSubstitution(token: string, feature: Feature, output: any): boolean;
        /**
         * Returns Html encoded quotes to their non-html forms
         * @param input the string to replace the quotes to non html quotes
         * @return String
         */
        decodeHtmlQuotes(input: string): string;
        /**
         * Returns Html encoded ampersands to their non-html forms
         * @param input the string to replace the ampersands to non html ampersands
         * @return String
         */
        decodeHtmlAmpersands(input: string): string;
        /**
         * A click handler for hyperlinks embedded in the descriptions returned from descriptionGet/descriptionApply
         * @param event The event object that was fired with the click
         * @param el The element where the click occurred
         * @param context The feature that is related to the description the click occurred in
         * @return Boolean if the event should propogate up
         */
        handleHyperlinkClick(event: Event, element: HTMLAnchorElement, context: any): boolean;
        /**
         * An event handler handler designed to stop events from propagating to overzealous parent views.
         * @param event The event object that was fired with the click
         * @param el The element where the click occurred
         * @param context The feature that is related to the description the click occurred in
         * @return False. If this was embedded, we never want our parents notified
         */
        ignoreEvent(event: Event, el: HTMLElement, context: any): boolean;
        /**
         * Runs the command named with the given parameters and context
         * @param commandName The name of the command we would like executed
         * @param parameter The parameter to be fed to the command. Encoded in either JSON or Query String format.
         * @param context The feature context that should be used for token replacements
         */
        runCommand(commandName: string, parameter: any, context: any): void;
    }
    /**
     * Defines the relationship between a command hyperlink and its placeholder.
     */
    interface CommandHyperlinkPlaceholder {
        commandHyperlink: string;
        placeholder: string;
    }
    /**
     * Keeps state of a command hyperlink extraction so that the hyperlinks can be injected into the place of their placeholders.
     */
    interface CommandHyperlinkPlaceholderState {
        html: string;
        commandHyperlinkPlaceholders: CommandHyperlinkPlaceholder[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.FocusUtils {
    /**
     * Sets the focus on the first input control in a view (e.g. a textbox, drop-down, checkbox)
     * @param view The target view.
     */
    function focusOnFirstInput(view: framework.ui.ViewBase): void;
    /**
     * Sets the focus on the map control (if available)
     * @param map The map control to focus on.
     */
    function focusOnMap(map: esri.Map): void;
    /**
     * Sets the focus on the specified DOM element.
     * The focus is used to determine which element is the first to receive keyboard-related events.
     */
    function focus(domElement: HTMLElement): void;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.GraphicUtils {
    /**
     * Modifies the attributes array of the graphic so that it the keys are attribute
     * names instead of aliases (as defined in ArcGIS Server).  Those attributes
     * that are defined using attribute names will not be modified.
     * @param graphic The ESRI graphic
     * @param layer The Geocortex Essentials layer
     */
    function sanitizeAttributeNames(graphic: esri.Graphic, layer: geocortex.essentials.Layer): void;
    /** @private GVH-3473 Skip attribute names generated by SEP */
    function _isSEPCodedDomainField(field: geocortex.essentials.Field, layer: geocortex.essentials.Layer): boolean;
    /**
     * Utility method to execute the deleteMarkup function silently without any prompts even if multiple markup are being deleted
     * @param geometry The geometry defining the area within which to delete markup. Typically passed in by the MapTool
     * @param layerIds A string array of id's of layers to delete markup from
     * @param app The current application instance
     * @param callback An optional callback function which, if defined, will be passed the array of deleted graphics.
     * @param onlyMeasurementMarkup: An optional parameter which if true will only delete measurement markup and labels from the specified layers. Defaults to false.
     */
    function deleteMarkupSilently(geometry: esri.geometry.Geometry, layerIds: string[], app: geocortex.essentialsHtmlViewer.ViewerApplication, callback?: (deletedGraphics: esri.Graphic[]) => void, onlyMeasurementMarkup?: boolean): void;
    /**
     * Utility method for the "DeleteMarkup" and "DeleteMeasurement" commands, common to the Markup and Measurement modules. Placing it here ensures that there's no dependency between the two modules and no
     * duplication of code. This method will delete all graphics from the given layer(s) and will display a warning if multiple items are being deleted (if configured). It can be run in two modes - if
     * onlyMeasurementMarkup is true, it will delete only markup which is tagged by the measurement module - otherwise it will delete all markup.
     * @param geometry The geometry defining the area within which to delete markup. Typically passed in by the MapTool
     * @param layerIds A string array of id's of layers to delete markup from
     * @param app The current application instance
     * @param callback An optional callback function which, if defined, will be passed the array of deleted graphics.
     * @param onlyMeasurementMarkup: An optional parameter which if true will only delete measurement markup and labels from the specified layers. Defaults to false.
     * @param multipleMarkupWarnMsg An optional string defining the language resource for the warning to be displayed if more than one markup is being deleted. If not provided, will disable this warning.
     * @param multipleMarkupWarnTitle An optional string defining the language resource for the title for the aforementioned warning.
     * @param libraryId An optional string defining the library id to retrieve the aforementioned language resources from. Defaults to "Mapping"
     */
    function deleteMarkup(geometry: esri.geometry.Geometry, layerIds: string[], app: geocortex.essentialsHtmlViewer.ViewerApplication, callback?: (deletedGraphics: esri.Graphic[]) => void, onlyMeasurementMarkup?: boolean, multipleMarkupWarnMsg?: string, multipleMarkupWarnTitle?: string, libraryId?: string): void;
    /**
     * Retrieves graphics contained within an extent specified by the given geometry from a given layer on the map.
     * @param geometry The geometry defining the area on the specified layer from which to extract markup
     * @param graphicsLayer The esri layer from which to extract markup
     * @param app The current application instance
     * @param simpleMarkerSymbolBufferDiameter Optional. Represents the diameter of the circle to buffer for a graphic with a simple marker symbol. Defautls to the size of the symbol in pixels.
     * @param pointBufferDiameter Optional. Represents the diameter of a circle to buffer with the given point geometry as it's center. Defaults to 6.
     * @return An array of esri.Graphic objects contained within the specified geometry on the specified layer.
     */
    function getMarkupFromGeometry(geometry: esri.geometry.Geometry, graphicsLayer: esri.layers.GraphicsLayer, app: geocortex.essentialsHtmlViewer.ViewerApplication, simpleMarkerSymbolBufferDiameter?: number, pointBufferDiameter?: number): esri.Graphic[];
    /**
     * Function to rotate any given polygon by a specified angle. Returns a rotated copy of the original polygon.
     * @param degreesClockwise The angle to rotate the polygon in, specified in degrees, in a clockwise direction (as is standard for esri)
     * @param pivotMapPoint The "pivot" around which to rotate the polygon. Is not required to lie on or within the polygon
     * @param polygon The polygon to rotate.
     * @return A rotated copy of the original polygon
     */
    function rotatePolygon(degreesClockwise: number, pivotMapPoint: esri.geometry.Point, polygon: esri.geometry.Polygon): esri.geometry.Polygon;
    /** Function to generate a polygon containing a specified incircle with a given point as it's center.
     *  @param point The center of the specified incircle
     *  @param diameter The diameter of the specified incircle
     *  @param app The current application instance
     *  @return A polygon containing an incircle of the specified diameter, with the specified point as its center
     */
    function getPolygonFromPoint(point: esri.geometry.Point, diameter: number, app: geocortex.essentialsHtmlViewer.ViewerApplication): esri.geometry.Polygon;
    /**
     * Measures the actual rendered size of a text markup in pixels
     * @param labelStr: The text label to measure label size for
     * @param fontFamily The font family to be applied to the text
     * @param fontSize The size of the text in pixels
     * @param fontWeight Specifies weight of the font. Defaults to normal.
     * @return An object with the width and height of the specified label
     */
    function getRenderedTextMarkupSize(labelStr: string, fontFamily: string, fontSize: number, fontWeight?: string): {
        width: number;
        height: number;
    };
    function getRenderedTextMarkupSize(labelStr: string, fontFamily: string, fontSize: string, fontWeight?: string): {
        width: number;
        height: number;
    };
    /**
     * Add a graphic to the specified layer
     * @param graphic The graphic to be added
     * @param layerId The layer ID to add the graphic to
     * @app The app that this module belongs to
     * @return A boolean returning true on success and false otherwise
     */
    function addGraphicToLayer(graphic: esri.Graphic, layerId: string, app: geocortex.essentialsHtmlViewer.ViewerApplication): boolean;
    /**
     * Retrieve the graphic layer with the specified id if it exists. If 'create' is true, create it if it doesn't
     * @param id The layer ID to retrieve or to create
     * @param create Create the layer if it doesn't exist if this is true
     * @param app The application that this module belongs to
     * @return The retrieved or created Graphics layer
     */
    function getGraphicsLayer(id: string, create: boolean, app: geocortex.essentialsHtmlViewer.ViewerApplication): esri.layers.GraphicsLayer;
    /**
     * Gets the map's graphics layers that are neither associated with the Essentials site nor used internally by GVH.
     */
    function getUserGraphicsLayers(app: ViewerApplication): esri.layers.GraphicsLayer[];
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * Configuration interface for individual batch items contained within a batch in the menu item config.
     */
    interface BatchItemConfig {
        /** The name of the command associated with this batch item. */
        command: string;
        /** The command parameter for the command associated with this batch item. */
        commandParameter?: any;
        /** Boolean which determines whether or not the entire batch will be terminated if this batch item fails to execute. */
        abortBatchOnFailure?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * The main menu module configuration interface. Menus declared using this format can be registered with the MenuRegistry by any module.
     */
    interface MenuConfig {
        /** The menu entries contained in the viewer configuration files. */
        menus: MenuEntryConfig[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * Configuration interface for an individual menu.
     */
    interface MenuEntryConfig {
        /** The unique menu ID. */
        id: string;
        /** The menu items contained in this menu. */
        items: MenuItemConfig[];
        /** The menu title. */
        title?: string;
        /** The menu description. */
        description?: string;
        /** The default icon URI for this menu. */
        defaultIconUri?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * Configuration interface for an individual menu item within a menu.
     */
    interface MenuItemConfig {
        /** The name of the command associated with this menu item. */
        command: string;
        /** Command Parameter associated with the menu item. This could be a string or a complex object. */
        commandParameter?: any;
        /** Array of batch items to execute for this menu item. If specified, this will have precedence over the command and commandParameter combination. */
        batch?: BatchItemConfig[];
        /** The name of this menu item. */
        text?: string;
        /** Short Description for this menu item. */
        description?: string;
        /**
         * Optional value that if specified indicates the library the strings will be grabbed from.
         * If not specified the library of the module loading the strings will be used.
         */
        libraryId?: string;
        /** Visibility status of the menu item when disabled. Defaults to false if not specified. */
        hideOnDisable?: boolean;
        /** URI of the image associated to this menu item if any. */
        iconUri?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * Parameters associated with the menu widget created by the menu registry.
     */
    interface MenuWidgetParameters {
        /** The view that is hosting the menu widget. */
        view: framework.ui.ViewBase;
        /** The created and attached menu widget view. */
        widgetView: MenuView;
        /** The menu widget view model. */
        widgetViewModel: MenuViewModel;
        /** The source context to which the MenuViewModel context is sync'ed, if it's an observable, or the source context itself if it's not. */
        context: any;
        /** The ID of the menu represented by this menu widget. */
        menuId: string;
        /** Whether the menu should be hoisted. */
        hoistMenu: boolean;
        /** Reference to the DOM element where this menu widget is hosted. */
        domElement: HTMLElement;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.nativeIntegration {
    interface NativeMessage<T> {
        type: string;
        parameters: T;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.SecurityUtils {
    /**
     * Get an identity based on the authentication type.
     * @param authenticationType The authentication type of the identity to find
     * @param app The current application instance
     */
    function getIdentity(authenticationType: string, app: geocortex.essentialsHtmlViewer.ViewerApplication): essentials.Identity;
    /**
     * Get a claim based on the claim type.
     * @param identity The identity in which to search for claims
     * @param type The claim type to find
     */
    function getClaimsByType(identity: essentials.Identity, type: string): essentials.Claim[];
    /**
     * Get a claim based on the claim value.
     * @param identity The identity in which to search for claims
     * @param value The claim value to find
     */
    function getClaimsByValue(identity: essentials.Identity, value: string): essentials.Claim[];
    /**
     * Get a claim based on the claim type and value.
     * @param identity The identity in which to search for claims
     * @param type The claim type to find
     * @param value The claim value to find
     */
    function getClaimByTypeAndValue(identity: essentials.Identity, type: string, value: string): essentials.Claim;
    /**
     * Check if the identity has a given privilege.
     * @param identity The identity in which to search the claims for a specific privilege
     * @param value The privilege value to find
     */
    function hasPrivilegeClaim(identity: essentials.Identity, value: string): boolean;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.selection {
    /** Describes how features from one collection should be combined with existing features in another collection. */
    module CombineMode {
        /** Replaces the values in one collection with the values from another. */
        const REPLACE: string;
        /** Produces the set union, which means unique elements that appear in either of two collections. */
        const UNION: string;
        /** Produces the set difference, which means the elements of one collection that do not appear in a second collection. */
        const SUBTRACT: string;
        /** Produces the set intersection, which means elements that appear in each of two collections. */
        const INTERSECT: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.selection {
    interface CombineResultsResponse {
        updatedCollection: infrastructure.FeatureSetCollection;
        combineMode: string;
        modified: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.selection {
    interface SelectionMetadata {
        id: string;
        name: string;
        featureSetCollectionId?: string;
        count?: number;
        modified?: boolean;
        timeCreated?: number;
        timeModified?: number;
        timeExpiration?: number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.selection {
    /**
     * Represents a query that is passed in to the {@link SelectionMetadataStore} to search for selection metadata.
     */
    interface SelectionMetadataQuery {
        /**
         * The latest create date, inclusive, that all search results must match, unless the value is null.
         */
        dateCreatedMax?: Date;
        /**
         * The earliest create date, inclusive, that all search results must match, unless the value is null.
         */
        dateCreatedMin?: Date;
        /**
         * The latest expiration date, inclusive, that all search results must match, unless the value is null.
         */
        dateExpirationMax?: Date;
        /**
         * The earliest expiration date, inclusive, that all search results must match, unless the value is null.
         */
        dateExpirationMin?: Date;
        /**
         * The latest modified date, inclusive, that all search results must match, unless the value is null.
         */
        dateModifiedMax?: Date;
        /**
         * The earliest modified date, inclusive, that all search results must match, unless the value is null.
         */
        dateModifiedMin?: Date;
        /**
         * An array of IDs that all search results must match one of, unless the array is empty.
         */
        ids?: string[];
        /**
         * An array of feature set collection IDs that all search results must match one of, unless the array is empty.
         */
        featureSetCollectionIds?: string[];
        /**
         * A string that should be contained in the name of all search results, unless it is null.
         */
        name?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.selection {
    /**
     * Helper class that models a storage facility for selection metadata.
     */
    class SelectionMetadataStore {
        /**
         * The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this search manager instance belongs to.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** Internal state holding metadata about saved selections */
        protected _store: Dictionary<SelectionMetadata>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication);
        findByName(name: string): infrastructure.selection.SelectionMetadata;
        findByCollectionId(fscId: string): infrastructure.selection.SelectionMetadata;
        findById(id: string): infrastructure.selection.SelectionMetadata;
        findAll(): infrastructure.selection.SelectionMetadata[];
        find(queryParameters?: SelectionMetadataQuery): infrastructure.selection.SelectionMetadata[];
        add(metadata: infrastructure.selection.SelectionMetadata): string;
        updateById(id: string, values: infrastructure.selection.SelectionMetadata): void;
        removeById(id: string): void;
        clear(): void;
        protected _update(metadata: infrastructure.selection.SelectionMetadata, values: infrastructure.selection.SelectionMetadata): void;
        protected _generateId(): string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.results {
    interface ResultsState extends project.ModuleState {
        featureSetCollections: project.FeatureSetCollection[];
        /** The current results in the results view. */
        results?: project.FeatureSetCollection;
        /** One of "list" or "table". */
        viewMode?: string;
        /** The current page. */
        page?: number;
        tableOptions?: {
            /** Denotes the current tab. */
            selectedFeatureSet?: project.FeatureSet;
            /** The column index that the data is sorted by. */
            sortColumn?: number;
            /** One of "asc" or "desc". */
            sortDirection?: string;
        };
    }
}
/**
 * Time is a tricky business, made more tricky by local implementation of time zones. The two major concepts when dealing with time are that of an
 * "instant" and that of a "clock"; in general, an "instant" is the moment in the history of the Universe when an event precisely occurs (setting aside
 * concerns of relativity and the impossibility of simultinaety), and clocks around the world will say different things to describe this instant. By
 * convention, the "standard" clock is one which is set in Universal Coordinated Time (UTC). All local times (i.e., all other clock times) are offset by
 * some number of minutes from UTC, generally (though not always) in hour or half-hour increments. A "time zone", by definition, is an area of the world
 * in which all clocks agree with one another. Thus the same instant will have the same "clock time" inside a given time zone, but the "clock time" for
 * that same instant will generally differ across different time zones.
 *
 * Computers have tried to make this process as seamless as possible by communicating time via UTC timestamps, and then converting those timestamps to
 * the clock time of their local time zone. So in the viewer, when a user sees a date, that date has been consumed by JavaScript as a timestamp in UTC, and the
 * Date object converts itself to the system time of the client machine when it is presented to the user.
 *
 * TimeZoneUtils solves two problems associated with this behaviour. The first is ArcGIS Server generally communicates dates as UTC timestamps, while
 * administrators do not always store their times in UTC. This can lead to the wrong time showing up when JavaScript automatically converts the timestamp
 * from UTC time to local time, since the timestamp might not actually describe an instant in UTC time. The second problem is that administrators may
 * wish their dates to look the same for all of their users, regardless of the users' time zones; that is, they do not want the dates converted to the
 * users' clock times, but instead to the clock time of a preselected time zone, and they want this time to look the same no matter where the user is
 * located in the world. The various constants and methods in this module are designed with these problems in mind.
 */
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.TimeZoneUtils {
    const UTC_ZONE_ID: string;
    /**
     * Retrieves the time zone from a layer (or the layer's map service, or the site).
     * @param holder The layer whose time zone we are interrogating.
     */
    function getTimeZoneFromLayer(holder: geocortex.essentials.Layer): string;
    /**
     * Retrieves the time zone from a map service (or the site).
     * @param holder The map service whose time zone we are interrogating.
     */
    function getTimeZoneFromMapService(holder: geocortex.essentials.MapService): string;
    /**
     * Retrieves the display time zone from a map service's site.
     * @param holder The map service whose display time zone we are interrogating.
     */
    function getDisplayTimeZoneFromMapService(holder: geocortex.essentials.MapService): string;
    /**
     * This method offsets displayed dates to display to the user in a time zone defined by an administrator. JavaScript's native
     * Date objects automatically display themselves in the local time of the client machine. For example, if a date reads 3PM in
     * New York, in general that same date will read 12PM in Los Angeles. This is not appropriate for all applications; sometimes
     * we would like to make sure a date has the same display value to any user in any location. The current method accomplishes that.
     * @param date The date to modify for display.
     * @param databaseTimeZoneId The time zone of the date as stored in the database.
     * @param displayTimeZoneId The time zone in which the date should be displayed.
     */
    function correctDatesForDisplayInDisplayTimeZone(date: Date, databaseTimeZoneId: string, displayTimeZoneId: string): Date;
    /**
     * Many users store dates in their local time zones, and they may not advertise this fact to ArcGIS Server.
     * This may cause a mismatch when ArcGIS Server serializes the date field as a UNIX timestamp,
     * whose time zone is always UTC (also known as GMT). Thus the browser will offset the dates it displays in local time, assuming
     * that its Date objects are generated from UNIX timestamps; in this function, dates' presentable values are offset to their true
     * UTC values, depending on the time zone ID for the layer (or map service, or site) containing this date. If there is no time
     * zone ID, this function should not be called; if the time zone ID is a UTC equivalent (e.g., Etc/GMT, Etc/UCT, Etc/UCT), then
     * no offset should be applied.
     * @param date The date to potentially offset.
     * @param timeZoneId The IANA ID of the time zone in which the data are recorded in the database
     */
    function correctDatesForDisplayInLocalTime(date: Date, timeZoneId: string): Date;
    /**
     * Many users store dates in their local time zones, and they may not advertise this fact to ArcGIS Server.
     * This may cause a mismatch when ArcGIS Server serializes the date field as a UNIX timestamp,
     * whose time zone is always UTC (also known as GMT). Thus the browser will submit dates to the server in UTC, regardless of
     * which time zone the data are stored in; in this function, dates' submitted values are offset to their true
     * UTC values, depending on the time zone ID for the layer (or map service, or site) containing this date. If there is no time
     * zone ID, this function should not be called; if the time zone ID is a UTC equivalent (e.g., Etc/GMT, Etc/UCT, Etc/UCT), then
     * no offset should be applied.
     * @param date The date to offset
     * @param databaseTimeZoneId The IANA ID of the time zone in which the data are recorded in the database
     * @param displayTimeZoneId The IANA ID of the time zone in which the data are displayed to the user.
     */
    function correctDatesToSubmitInDatabaseTime(date: Date, databaseTimeZoneId: string, displayTimeZoneId?: string): Date;
    /**
     * The QueryBuilder takes date objects implicitly in local time (with respect to the browser) and parses them as strings, which
     * we then submit as a query. This is not always appropriate if, for example, the database is properly-configured in UTC, or if
     * it happens to be in another time zone. Hence this method corrects a date from the browser's time to the zone corresponding to
     * the given database and display time zone IDs.
     * @param date The date to offset
     * @param databaseTimeZoneId The IANA ID of the time zone in which the data are recorded in the database
     * @param displayTimeZoneId The IANA ID of the time zone in which the data are displayed.
     */
    function correctDatesToQueryInDatabaseTime(date: Date, databaseTimeZoneId: string, displayTimeZoneId?: string): Date;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.tools {
    interface MapToolConfig extends ToolConfig {
        /**
         * The command to execute after completing the tool.
         */
        command: string;
        /**
         * The mode for drawing on the map.
         */
        drawMode: string;
        /**
         * Whether the tool is sticky.  Defaults to false.
         */
        isSticky?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.tools {
    interface ToolConfig {
        /**
         * Optional type name for the tool being constructed.  The default is MapTool.
         */
        typeName?: string;
        /**
         * The command to execute after completing the tool.  Not all tools have a command.
         * The command may be associated with a tool type.
         */
        command?: string;
        /**
         * The name of the tool.
         */
        name: string;
        /**
         * Optional status text to display while the tool is active.  Can be i18ned.
         */
        statusText?: string;
        /**
         * Optional, alternate status text to display for keyboard users.  Can be i18ned.
         */
        keyboardStatusText?: string;
        /**
         * Library to look up i18n string keys from.  Required to display i18n strings.
         */
        libraryId?: string;
        /**
         * Optional URI of the icon to display with the status.
         */
        iconUri?: string;
        /**
         * Optional title for the close tool UI element.  Defaults to "Deactivate Tool".
         */
        closeTitle?: string;
        /**
         * Optional CSS class for the status displayed for this tool.
         */
        statusClass?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.PagingControls {
    class PagingControlsView extends geocortex.framework.ui.ViewBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        viewModel: geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.PagingControls.PagingControlsViewModel;
        libraryId: string;
        attach(viewModel?: geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.PagingControls.PagingControlsViewModel): void;
        handlePageFirst(evt: Event, el: HTMLElement, ctx: any): void;
        handlePagePrev(evt: Event, el: HTMLElement, ctx: any): void;
        handlePageNext(evt: Event, el: HTMLElement, ctx: any): void;
        handlePageLast(evt: Event, el: HTMLElement, ctx: any): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.PagingControls {
    class PagingControlsViewModel extends geocortex.framework.ui.ViewModelBase {
        collectionViewModel: any;
        presentableResults: framework.ui.PresentableCollection<Object>;
        numberOfItems: number;
        libraryId: string;
        constructor(app: essentialsHtmlViewer.ViewerApplication, collectionViewModel: any);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Table {
    enum SortState {
        UNSORTED = 0,
        ASCENDING = 1,
        DESCENDING = 2,
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.undo {
    /**
     * The {@link TransactionManager} interface defines methods to manage undo transactions.
     */
    interface TransactionManager {
        /** Commits the provided transaction. */
        commitTransaction(transaction: UndoTransaction): Promise<void>;
        /** Rolls back the provided transaction. */
        rollbackTransaction(transaction: UndoTransaction): Promise<void>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.undo {
    /** Indicates the status of the {@link UndoTransaction} */
    module TransactionStatus {
        var PENDING: string;
        var COMMITTING: string;
        var COMMITTED: string;
        var ABORTING: string;
        var ABORTED: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.undo {
    /**
     * A function signature for asynchronous undo redo operations that return a promise.
     * @docs-hide-from-nav
     */
    interface UndoRedoDelegate {
        (state?: any, transaction?: UndoTransaction): Promise<void>;
    }
    /**
     * The {@link Undoable} interface defines operations that can be added to the {@link UndoManager}. Implement this interface to create custom operations.
     */
    interface Undoable {
        state?: any;
        /** Re-performs the last undo operation. */
        performRedo: UndoRedoDelegate;
        /** Reverses the operation. */
        performUndo: UndoRedoDelegate;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.sharing {
    /** Describes the priority of link providers that modify the map extent. */
    enum ExtentLinkPriority {
        /**
         * Scale must be applied first, or else its value is lost
         * when scale is recalculated upon changing the center or extent.
        */
        SCALE = 0,
        CENTER = 1,
        EXTENT = 2,
    }
    /** Describes the priority of link providers that modify the layer list. */
    enum LayerListLinkPriority {
        /**
         * Layer theme must be applied first or it will override
         * changes from the layer url parameter.
         */
        LAYERTHEME = 0,
        LAYERS = 1,
    }
    /**
     * The base class for all sharing link providers.
     */
    class SharingLinkProviderBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        libraryId: string;
        /** The name of the sharing link provider to be used in the url. */
        name: string;
        /** Whether the sharing link provider will apply a url parameter on startup. */
        acceptParameter: boolean;
        /** Whether the sharing link provider will produce a parameter when generating a url. */
        generateParameter: boolean;
        /** The priority for this sharing link provider when being applying on startup. */
        priority: number;
        /**
         * Create a new instance of the {@link SharingLinkProviderBase} class.
         * @param app The {@link ViewerApplication} that this command belongs to.
         * @param libraryId The ID of the library this component belongs to.
         */
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string);
        /**
         * Initialize the provider.
         * @param config The configuration object.
         */
        initialize(config: any): void;
        /**
         * Generate the url parameter.
         */
        generate(): string;
        /**
         * Apply the url parameter.
         * @param urlParameter The url parameter to apply.
         */
        apply(urlParameter: string): void;
        /**
         * Gets a language resource from the Application's resource dictionary, given a key, and optional locale.
         * Returns null if the resource does not exist.
         * @param key The resource key.
         * @param locale The locale of the resource to fetch. Defaults to the current application locale.
         */
        getResource(resourceKey: string, locale?: string): string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * Holds information and state about an instance of a particular menu.
     */
    class MenuViewModel extends geocortex.framework.ui.ViewModelBase {
        /** The default menu context parameter name. */
        static DefaultParameterName: string;
        /** @inherited */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** The unique ID of the menu. */
        menuId: string;
        /** The title of this menu, which may be used for presentation purposes. */
        menuTitle: Observable<string>;
        /** The description of this menu. */
        menuDescription: Observable<string>;
        /** Menu items associated with this menu. */
        menuItems: ObservableCollection<MenuItemViewModel>;
        /** Menu items that are currently executable or are currently non-executable but have their "hideOnDisable" setting set to false. */
        visibleMenuItems: ObservableCollection<MenuItemViewModel>;
        /** A boolean which is`true` if the menu has any executable menu items, `false` if not. */
        hasExecutableMenuItems: Observable<boolean>;
        /** The source view which has currently invoked this menu, or the view to which this menu 'belongs. */
        menuSourceView: framework.ui.ViewBase;
        /**
         * Context associated with the menu. If `commandParameter` is not specified on a menu item, it is passed the `menuContext`
         * itself upon invocation. If `commandParameter` is specified, it is passed to the specified command.
         * If `commandParameter` has properties with string value tokens in the format of `{{SomeProperty}}`, these properties will
         * be resolved against properties of the `menuContext` itself.
         */
        menuContext: Observable<any>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId?: string);
        /**
         * Initializes this menu view model based on the provided configuration
         * @param config The configuration for this menu view model
         */
        initialize(config: any): void;
        /**
         * Retrieves the menu for this view model from the menu registry and sets it up. This is done only when the view requests it as part of it's attach routine.
         * @param id the id of the menu to set up this view model for
         */
        setupMenu(menuId?: string): void;
        /**
         * Clean up when this menu view model is destroyed
         */
        onDestroy(): void;
        /**
         * This function executes when the `canExecute` of any of the menu items changes, or a new element is added to the list.
         */
        protected _computeExecutableMenuItems(): void;
        /**
        * Applies menu context changes to all items in the menu.
        * @param context The new context to be applied to this menu.
        */
        protected _handleContextChanged(menuContext: any): void;
        /**
        * When the collection changes, we'll need to decide how to handle the elements. Removals and clears remove from the executable list,
        * Additions need only re execute canExecuteChanged to decide whether to display or not.
        * @param changedArgs Indicate the type of change made to the menu items.
        */
        protected _handleMenuItemsChanged(changedArgs: any): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.applicationState {
    /**
     * Represents a command/event that triggered a state.
     */
    interface CommandOrEventInstance {
        /**
         * The name of the command/event.
         */
        name: string;
        /**
         * The parameter associated with the execution of this command/event.
         */
        parameter?: string;
    }
    /**
     * Represents a currently active instance of a state.
     */
    class ActiveState {
        /**
         * The definition of the state that is active.
         */
        stateDefinition: StateDefinition;
        /**
         * Information about the command/event that caused the state to become active.
         */
        protected activatedBy: CommandOrEventInstance;
        constructor(stateDefinition: StateDefinition, activatedBy?: CommandOrEventInstance);
    }
    /**
     * Definition of a state that is placed into an ActiveState once it becomes active.
     * No variables within a StateDefinition should be changed after instantiation.
     */
    interface StateDefinition {
        /**
         * The name of the state. Used to reference it.
         */
        name: string;
        /**
         * The state that this state depends on. If the parent state is not active then this state is not active either.
         * However, if the parent state is reactivated and this state was sitting dormant (active but w/ no parent) then this
         * state will be considered active.
         */
        parentState?: string;
        /**
         * A human-readable description of what this state represents.
         */
        description: string;
        /**
         * If a state is modal than it means that no other modal states can be running at the same time.
         */
        isModal: boolean;
        /**
         * Events that will trigger the state as being active.
         */
        enterEvents?: CommandOrEventInstance[];
        /**
         * Events that will make the state become inactive.
         */
        exitEvents?: CommandOrEventInstance[];
        /**
         * Commands that will trigger the state as being active.
         */
        enterCommands?: CommandOrEventInstance[];
        /**
         * Commands that will make the state become inactive.
         */
        exitCommands?: CommandOrEventInstance[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.applicationState {
    /**
     * Used to associate a token with a command or event so that they can be unsubscribed on class destruction.
     */
    interface CommandOrEventToken {
        instance: CommandOrEventInstance;
        token: string;
    }
    class StateManager {
        app: geocortex.framework.application.Application;
        libraryId: string;
        registeredStates: StateDefinition[];
        protected activeStates: ActiveState[];
        protected modalState: StateDefinition;
        protected previousModalState: StateDefinition;
        protected commandTokens: CommandOrEventToken[];
        protected eventTokens: CommandOrEventToken[];
        constructor(app: geocortex.framework.application.Application, libraryId: string);
        /**
         * Used to load the states into the registry. Does not allow for duplicate states.
         * @param newState The state to add to the registry.
         */
        registerState(newState: StateDefinition): void;
        /**
         * Run when the State Manager is destroyed.
         */
        onDestroy(): void;
        /**
         * Returns an array of the currently active states. Does not return children that currently lack
         * an active parent.
         */
        getActiveStates(): ActiveState[];
        /**
         * Returns a state from the manager's registry.
         * @param stateName The name of the state to retrieve from the registry.
         */
        getStateByName(stateName: string): StateDefinition;
        /**
         * Returns the currently active modal state, if any. Returns null if there is no state.
         */
        getModalState(): StateDefinition;
        /**
         * Returns whether a modal state is currently active or not.
         */
        isModalStateActive(): boolean;
        /**
         * Returns whether a state is currently active or not.
         * @param stateName The name of the state that is being checked.
         */
        isCurrentlyActive(stateName: string): boolean;
        /**
         * Returns an array with the names of all states in the registry.
         */
        getAllStateNames(): string[];
        /**
         * Run whenever a state is entered.
         * @param state The state this is being entered.
         * @param commandOrEvent The command/event instance that is associated with this state.
         * @param commandOrEventArgs The command/event's arguments (if any). Only strings are supported.
         */
        protected _stateEntered(state: StateDefinition, commandOrEvent: CommandOrEventInstance, commandOrEventArgs: any): void;
        /**
         * Run whenever a state is exited.
         * @param state The state to exit.
         * @param commandOrEvent The command/event instance that is associated with this state.
         * @param commandOrEventArgs The command/event's arguments (if any). Only strings are supported.
         */
        protected _stateExited(state: StateDefinition, commandOrEvent: CommandOrEventInstance, commandOrEventArgs: any): void;
        /**
         * Deactivates the current state.
         * Needs to exist outside of _stateExited() as it is also called on state activation in case there is a modal state active.
         * @param state The state to deactivate.
         * @param commandOrEvent The command/event instance that is associated with this state.
         * @param commandOrEventParameter The command/event's arguments (if any). Only strings are supported.
         */
        protected _exitState(state: StateDefinition, commandOrEvent: CommandOrEventInstance, commandOrEventParameter: string): void;
        /**
         * Exits any child states that should be exiting on the same command/event as the parent state.
         * @param state The state to deactivate.
         * @param commandOrEvent The command/event instance that is associated with this state.
         * @param commandOrEventParameter The command/event's arguments (if any). Only strings are supported.
         */
        protected _exitChildStates(state: StateDefinition, commandOrEvent: CommandOrEventInstance, commandOrEventParameter: string): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.applicationState {
    var definedStates: StateDefinition[];
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.snapping {
    /**
     * Descrbes what type of geometry locations a layer can be snapped on.
     */
    interface SnappingLocations {
        /**
         * Can snap to the edge of a geometry.
         */
        edge: boolean;
        /**
         * Can snap to the point geometry.
         */
        point: boolean;
        /**
         * Can snap to the vertex of a geometry.
         */
        vertex: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.snapping {
    import gis = geocortex.essentialsHtmlViewer.mapping.infrastructure.gis;
    /**
     * An interface used to describe the required components to implement a {@link SnappingProvider} which provides snapping information to the application.
     */
    interface SnappingProvider {
        /**
         * The {@link geocortex.framework.application.Application} that this provider belongs to.
         */
        app: essentialsHtmlViewer.ViewerApplication;
        /**
         * The library that this provider belongs to.
         */
        libraryId: string;
        /**
         * The ID of the provider.
         */
        id: string;
        /**
         * The name of the provider - may be displayed in the viewer.
         */
        name: string;
        /**
         * The configuration used to load the snapping provider.
         */
        providerConfiguration: any;
        /**
         * Initializes the {@link SnappingProvider} with configuration options.
         * @param config A configuration object.
         */
        initialize(config?: any): void;
        /**
         * Activates the {@link SnappingProvider} with a radius.
         * @param radius The radius of snapping in pixels.
         */
        activate(radius: number): void;
        /**
         * Deactivates the {@link SnappingProvider}.
         */
        deactivate(): void;
        /**
         * Provides a snapping point for a given location.
         * @param screenPoint The location.
         * @returns A promise which when resolved will have a snapping point or `null` if not found.
         */
        provideSnappingPoint(screenPoint: esri.geometry.ScreenPoint): Promise<esri.geometry.Point>;
        /**
         * Registers a layer for snapping.
         * @param layer The layer to register.
         * @param options The snapping locations.
         * @returns A boolean if the layer was added or not.
         */
        registerLayer(layer: essentials.Layer, options?: SnappingLocations): boolean;
        /**
         * Unregisters a layer from the {@link SnappingProvider}.
         * @param layer The layer to unregister.
         */
        unregisterLayer(layer: essentials.Layer): void;
        /**
         * Signals the {@link SnappingProvider} that it must refresh for a new extent.
         * @param extent The new map extent.
         */
        loadForExtent(extent: esri.geometry.Extent): void;
        /**
         * Returns information about which layers can be snapped to.
         * @param appInfo The application info to parse.
         * @returns An array of layer info.
         */
        getSnappableLayers(appInfo: gis.AppInfo): gis.LayerInfo[];
        /**
         * Pauses snapping in the {@link SnappingProvider}.
         */
        pauseSnapping(): void;
        /**
         * Continues snapping in the {@link SnappingProvider}.
         */
        continueSnapping(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.taskUtils {
    /**
    * Gets the url that an esri.tasks.QueryTask can be run against for this layer. Suggested to use `getQueryTask` instead.
    * @param layer The Geocortex/Esri Layer that is to be queried.
    * @param mapService Required when passing an Esri Layer.
    * @returns The url for the query endpoint.
    * @deprecated 2.6 Use `getQueryTask` or `getIntersectTask` instead.
    */
    function getQueryTaskUrl(layer: essentials.Layer | esri.layers.Layer, mapService?: essentials.MapService): string;
    /**
    * Gets an esri.tasks.QueryTask that can be run against for this layer.
    * @param layer The Geocortex/Esri Layer that is to be queried.
    * @param mapService Required if using an esri.layers.Layer as the layer parameter.
    * @returns The constructed esri.tasks.QueryTask for the resource.
    */
    function getQueryTask(layer: essentials.Layer | esri.layers.Layer, mapService?: essentials.MapService): esri.tasks.QueryTask;
    /**
     * Get the service URL, or return null if we don't support identify operations for that service.
     */
    function getIdentifyTaskUrl(mapService: geocortex.essentials.MapService): string;
    /**
     * Gets an esri.tasks.IdentifyTask for a {@link geocortex.essentials.MapService}.
     * @param mapService The {@link geocortex.essentials.MapService}.
     * @returns The constructed esri.tasks.IdentifyTask for the resource.
     */
    function getIdentifyTask(mapService: geocortex.essentials.MapService): esri.tasks.IdentifyTask;
    /**
     * Takes a (presumably properly formatted) url string and associated MapService returns with an added token if needed.
     * @param url String for the URL that is going to be used in the Task.
     * @param mapService The MapService associated with the passed URL.
     */
    function getTokenizedUrl(url: string, mapService: geocortex.essentials.MapService): string;
    /**
     * Evaluates whether a provided Layer can be identified.
     * @param layer A Layer that is to be tested for its ability to be identified.
     */
    function canIdentifyLayer(layer: geocortex.essentials.Layer): boolean;
    /**
     * Evaluates whether a provided Layer can be queried.
     * @param layer A Layer that is to be tested for its ability to be queried.
     */
    function canQueryLayer(layer: geocortex.essentials.Layer): boolean;
    /**
     * Evaluates whether a provided MapService can be queried.
     * @param service A MapService that is to be tested for its ability to be queried.
     */
    function canQueryMapService(mapService: geocortex.essentials.MapService): boolean;
    /**
     * Creates a where clause that will search every provided fields with the search text provided.
     * @param layer The layer to create the where clause for
     * @param fields The fields that will be part of the where clause
     * @param searchText The search text to use in those fields
     * @param trace The trace object for logging purposes (optional)
     */
    function getSearchTextWhereClause(layer: geocortex.essentials.Layer, fields: infrastructure.gis.FieldInfo[], searchText: string, trace?: framework.utils.Trace): string;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.toolbarGroup {
    interface ToggleStateConfig {
        name?: string;
        command: string;
        commandParameter?: string;
        iconUri?: string;
        tooltip?: string;
        hideOnDisable?: boolean;
    }
    interface ToolbarToggleButtonEntry extends ToolbarGroupItemBaseEntry {
        iconUri?: string;
        toggleOn: ToggleStateConfig;
        toggleOff: ToggleStateConfig;
        /**
         * The name of the (optional) state that will alter the toggle state of the button.
         */
        toggleStateName?: string;
    }
    enum ToggleButtonState {
        TOGGLE_BUTTON_OFF = 0,
        TOGGLE_BUTTON_ON = 1,
    }
    class ToolbarToggleButton extends ToolbarGroupItemBase {
        toggleButtonEntry: ToolbarToggleButtonEntry;
        toggleOnCommand: infrastructure.CommandViewModel;
        toggleOffCommand: infrastructure.CommandViewModel;
        state: Observable<ToggleButtonState>;
        isToggledOn: Observable<boolean>;
        private _toggleOnCommandCanExecuteBindingToken;
        private _toggleOffCommandCanExecuteBindingToken;
        private _toggleOnCommandPostExecSubscriptionToken;
        private _toggleOffCommandPostExecSubscriptionToken;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string, entry: ToolbarToggleButtonEntry);
        execute(): void;
        setState(state: ToggleButtonState): void;
        onDestroy(): void;
        protected _setUpBindings(): void;
        protected _disconnectBindings(): void;
        protected _handleToggleOnCommandPostExecute(commandParameter: string): void;
        protected _handleToggleOffCommandPostExecute(commandParameter: string): void;
        protected _handleCommandCanExecuteChanged(source: infrastructure.CommandViewModel, state: boolean): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.toolbarGroup {
    interface ToolbarGroupEntry extends ToolbarGroupItemBaseEntry {
        items?: ToolbarGroupItemBaseEntry[];
        layout?: string;
    }
    class ToolbarGroup extends ToolbarGroupItemBase {
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string, entry?: ToolbarGroupEntry);
        getToolbarItemType(item: ToolbarGroupItemBaseEntry): ToolbarGroupItemBase;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.toolbarGroup {
    interface ToolbarFlyoutEntry extends ToolbarGroupItemBaseEntry {
        items?: ToolbarGroupItemBaseEntry[];
        layout?: string;
    }
    class ToolbarFlyout extends ToolbarGroup {
        flyoutButtonDescription: Observable<string>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string, entry: ToolbarFlyoutEntry);
        protected _seeIfActiveToolIsInFlyout(currentToolItemBase: infrastructure.toolbarGroup.ToolbarGroupItemBase, args: eventArgs.ActiveToolChangedEventArgs): boolean;
        toggleFlyout(): void;
        switchActiveFlyoutTool(ctx: infrastructure.toolbarGroup.ToolbarGroupItemBase): void;
        getToolbarItemType(item: ToolbarGroupItemBaseEntry): ToolbarGroupItemBase;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.toolbarGroup {
    interface ToolbarButtonEntry extends ToolbarGroupItemBaseEntry {
        command?: string;
        commandParameter?: string;
        iconUri?: string;
    }
    class ToolbarButton extends ToolbarGroupItemBase {
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string, entry: ToolbarButtonEntry);
        execute(): void;
        protected _raiseCommandCanExecuteChanged(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.toolbarGroup {
    interface ToolbarRegionEntry extends ToolbarGroupItemBaseEntry {
        regionName?: string;
    }
    class ToolbarRegion extends ToolbarGroupItemBase {
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string, entry?: ToolbarRegionEntry);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.toolbarGroup {
    interface ToolbarToolEntry extends ToolbarGroupItemBaseEntry {
        iconUri?: string;
    }
    class ToolbarTool extends ToolbarGroupItemBase {
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string, entry?: ToolbarToolEntry);
        execute(): void;
        private _initializeTool(formattedConfig);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.tools {
    interface MouseHoverCoordinates {
        clientX: number;
        clientY: number;
    }
    class MapTool extends ToolBase implements MapToolConfig {
        /**
         * The Esri drawing surface.
         */
        _drawObject: esri.toolbars.Draw;
        /**
         * The activate state of the Esri drawing surface.
         * The Esri drawing surface does not provide an indication of whether it is active or not. We'll keep
         * track of this state ourselves so that we don't call deactivate unnecessarily.
         */
        _drawIsActive: boolean;
        /**
         * The command name associated with this tool.
         * @type {string}
         */
        command: string;
        /**
         * The draw mode of this tool.
         */
        drawMode: string;
        /**
         * Whether this tool is sticky.
         * @type {boolean}
         */
        isSticky: boolean;
        /**
         * @private: Handler Tokens
         */
        private _drawEndHandlerToken;
        protected _inputMethodChangeHandle: dojo.RemovableHandle;
        /**
         * @private: Handle to map hover for auto panning.
         */
        private _mapMouseHoverToken;
        /**
         * @private: Handle to map right-click to auto-deactivate the tool.
         */
        private _mapMouseDownToken;
        /**
         * @private: Pixel area from edge of map to trigger auto pan.
         */
        private _autoPanPixelTolerance;
        /**
         * @private: Percentage of map to pan when triggering auto pan.
         */
        private _autoPanStep;
        /**
         * @private: Draw modes which don't support auto panning.
         */
        private _unsupportedAutoPanDrawModes;
        /**
         * @private: Whether the tool's draw end handler is suspended (see GVH-4732)
         */
        private _drawEndSuspended;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.tools.MapTool} class.
         * @class
         * <p>MapTool provides a general purpose, loosely coupled model for creating components that require map interaction.</p>
         * @constructs
         * @memberOf geocortex.essentialsHtmlViewer.mapping.infrastructure.tools
         * @param app The {@link geocortex.essentialsHtmlViewer.ViewerApplication} that this tool belongs to.
         * @param mixin An object to provide additional configuration of this tool.
         */
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, mixin: MapToolConfig);
        private _createDrawObject();
        private _activateToolbar();
        /**
         * Deactivates the drawing surface
         * @private
         */
        private _deactivateToolbar();
        /**
         * Called when the tool is activated.
         */
        onActivated(): boolean;
        /**
         * Called when the tool is deactivated.
         */
        onDeactivated(): void;
        /**
         * Called when drawing completes.
         */
        onDrawEnd(geometry: esri.geometry.Geometry): void;
        /**
         * Called when the input method (e.g. keyboard, mouse) for the drawing component has changed.
         */
        onInputMethodChange(result: {
            previousMethod: string;
            newMethod: string;
        }): void;
        onMapMouseDown(evt: MouseEvent): void;
        onMapMouseHover(mouseHoverCoords: MouseHoverCoordinates): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.tools {
    /**
     * An extension of MapTool that implements ToolBase's ```enabled: Observable<boolean>``` by calling
     * the command's canExecute with no arguments.  This is playing fast and loose with what 'canExecute'
     * means because of course the command can't actually execute without the geometry input.  However
     * we don't have that geometry until after the tool executes so it's a chicken and egg problem.
     * This functionality is not in MapTool because not all Commands do (should?) follow this convention.
     */
    class DisablingMapTool extends MapTool {
        enabled: Observable<boolean>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, mixin: any);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.featureDetails {
    class FeatureProviderBase extends geocortex.framework.ui.ViewModelBase {
        /**
         * The current Feature this provider is providing details for
         */
        currentFeature: Observable<geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature>;
        /**
         * Determines whether this provider can function currently or not. This is akin to the 'canExecute' function for commands.
         */
        providerEnabled: Observable<boolean>;
        constructor(app: geocortex.framework.application.Application, libraryId?: string);
        initialize(config: any): void;
        /**
         * This is called when the current feature changes, so that we might update our displays. This will likely change when
         * a new result is selected from one of the result views.
         * @param feature A Geocortex Feature that we are displaying.
         */
        handleCurrentFeatureChanged(feature: geocortex.essentialsHtmlViewer.mapping.infrastructure.Feature): void;
        /**
         * Convenience method to update the provider state only if the current feature is available and the state has changed.
         * @param value The current provider state. Provider will be set to enabled only if the current feature is available as well.
         */
        updateProviderState(value: boolean): void;
        /**
         * This method creates attached and data bound views for each markup type (compactView and expandedView - if configured separately) specified in config
         * Override this method if a provider needs to create more than one view (for e.g. DataLinks) for each markup type specified in config.
         * @param featureProviderConfig The configuration for this feature provider
         * @param viewModeRegionConfig: An object that specifies the target region for each view mode for which a view needs to be created. If a view is not specified in the view mode
         * config, it will simply be ignored. If a "default" parameter is supplied, then this will be used if only a single markup is supplied in featureProviderConfig as a string.
         * @param onViewsCreated Optional. A callback function which, if specified, is triggered after the views have been created, with the views as arguments. Useful for asynchronous providers like Datalinks.
         * @param customContext Optional. If provided, will be used as the context for the created views. Otherwise the FeatureProviderBase class will itself be used as the context/viewModel for the views
         */
        createAttachedViews(featureProviderConfig: FeatureProviderConfig, viewModeRegionConfig: FeatureProviderViewModeConfig, onViewsCreated?: (views: framework.ui.ViewBase[]) => void, customContext?: any): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.gis {
    class ServiceLayerInfo {
        layers: LayerInfo[];
        tables: LayerInfo[];
        id: string;
        displayName: string;
        serviceLayer: esri.layers.Layer;
        gcxMapService: geocortex.essentials.MapService;
        serviceLayerFunction: string;
        serviceType: string;
        isUserCreated: boolean;
        includeInLayerList: boolean;
        isExpanded: boolean;
        capabilities: string[];
        _esriLayerStateBackup: any[];
        private _delayedRefreshToken;
        constructor();
        static fromEsriLayer(layer: esri.layers.Layer): ServiceLayerInfo;
        static fromGcxMapService(mapService: geocortex.essentials.MapService): ServiceLayerInfo;
        findLayerById(id: string): LayerInfo;
        /**
         * Gets whether the serviceLayer represented by this ServiceLayerInfo object is currently visible.
         */
        isVisible(): boolean;
        setVisibility(visible: boolean): void;
        /**
         * Gets the opacity of the service.
         */
        opacity(): number;
        /**
         * Sets the opacity of this service.
         */
        setOpacity(opacity: number): void;
        /**
         * Refreshes the map service by making a new request to the server.
         * @param refreshTimeoutMs An optional parameter which if specified, will cause the map refresh to occur after the specified timeout. Any previous refresh timeouts
         * will be cancelled when a new refresh timeout is set - ensuring that only one request goes out within the speicfied threshold. If undefined, the map refreshes immediately.
         * @param disableClientCaching An optional parameter which, if set will disable client caching on the service layer (if supported) prior to refreshing it. Defaults to false.
         */
        refresh(refreshTimeoutMs?: number, disableClientCaching?: boolean): void;
        /**
         * Returns whether or not this service supports layer visibility.
         */
        supportsLayerVisibility(): boolean;
        private _loadedDeferred;
        loaded(): dojo.Deferred;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    /**
     * A node in the layer list hierarchy.
     * In addition to layer list items, the layer list itself is considered to be a node,
     * specifically it acts as the root node in the hierarchy.
     */
    class LayerListNode {
        /**
        * The unique identifier for this layer list item. Will be "GCXLayerListRootNode-[random string]" if this is the root node.
        */
        id: Observable<string>;
        /**
         * A {@link LayerListItemCollection} object, representing the current node's children
         */
        children: LayerListItemCollection;
        /**
         * The current node's parent - if any
         */
        parent: LayerListNode;
        /**
         * Visibility binding token (if any), used by the {@link LayerListItemCollection} class to manage visibilities
         */
        _visibilityBindingToken: string;
        /**
         * Binding token for {@link LayerListItem.displayItem} (if any), used by the {@link LayerListItemCollection} class.
         */
        _displayItemBindingToken: string;
        /**
         * Initializes a new instance of the {@link LayerListNode} class.
         * @param id The unique string identifier for this node
         * @param parentNode This node's parent node if any
         */
        constructor(id?: string, parentNode?: LayerListNode);
        /**
        * Gets the root node in the layer list hierarchy.
        */
        getRoot(): LayerListNode;
        /**
         * Gets the collection of ancestor nodes, ordered from nearest to farthest.
         */
        getAncestors(): LayerListNode[];
        /**
         * Gets this node, as well as it's ancestors, ordered from nearest to farthest
         */
        getSelfAndAncestors(): LayerListNode[];
        /**
         * Gets all of this node's siblings, in the order that they appear in the layer list.
         * @param includSelf A boolean which when set to true will return siblings with this node in the correct position. Defaults to false
         */
        getSiblings(includeSelf?: boolean): LayerListNode[];
        /**
         * Gets all of this node's descendant items, in depth-first traversal order.
         */
        getDescendants(): LayerListItem[];
        /**
         * Gets this node, as well as it's descendants, in depth-first traversal order
         */
        getSelfAndDescendants(): LayerListNode[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    /**
     * Represents the site's layer list, also known as table of contents.
     */
    class LayerList extends LayerListNode {
        /** Whether or not the layer list was successfully initialized. */
        layerListInitialized: boolean;
        /**
         * The exception that occurred if the layer list could not be initialized.
         */
        layerListInitializationFailure: Error;
        /**
         * Occurs when initialization of the layer list fails.
         * @event
         */
        onLayerListInitializationFailed: (error: Error) => void;
        /**
         * Occurs when initialization of the layer list succeeds with a response from the REST endpoint. Depending on the API,
         * this response may actually be an error message served as a correct HTTP response.
         * @event
         */
        onLayerListInitialized: (sender: LayerList) => void;
        /**
         * A boolean indicating whether legend integration should be enabled for this layer list
         */
        enableLegendIntegration: boolean;
        /**
         * A boolean indicating whether swatches are to be shown for invisible layers for this layer list
         */
        onlyShowSwatchesOnVisibleLayers: boolean;
        /**
         * A boolean indicating whether visibility all parent items should be automatically activated/set to true when the
         * visibility of an item is set to true. In effect, this setting ensures that an item when set to visible will necessarily
         * be effectively visible as well.
         */
        autoActivateAncestorVisibilities: boolean;
        /**
         * The icon Uri to be set if a layer fails to initialize. This is an optional property and will only be used if configured during initialization
         */
        serviceLoadFailureIconUri: string;
        /**
         * The icon tooltip to be set if a layer fails to initialize. This is an optional property and will only be used if configured during initialization
         */
        serviceLoadFailureIconTooltip: string;
        /**
         * The swatch element to be displayed if an item contains multiple legend items. If only one legend item exists, that will be used as the swatch element. If
         * multiple swatch elements exist but this parameter is not configured, the first legend item swatch element will be used.
         */
        multiLegendSwatchElement: string;
        /**
         * The legend icon tooltip to use when only a single legend item exists for a layer. This is optional and will be used only if set.
         */
        singleLegendIconTooltip: string;
        /**
        * The legend icon tooltip to use when only a single legend item exists for a layer. This is optional and will be used only if set.
        */
        multiLegendIconTooltip: string;
        /**
         * Determines whether layer icons are enabled or not. False by default. If true, layer icons will be populated for layer items which have them configured and
         * which do not have a legend
         */
        enableLayerIcons: boolean;
        /**
         * The intermediary application info object for the layer list. Compatible with WAB
         */
        appInfo: geocortex.essentialsHtmlViewer.mapping.infrastructure.gis.AppInfo;
        /**
         * The intermediary map info object for the layer list. Compatible with WAB.
         */
        mapInfo: geocortex.essentialsHtmlViewer.mapping.infrastructure.gis.MapInfo;
        /**
         * The url for the layer list rest endpoint. If null or undefined, the configurable layer list will default to standard simple layer list behaviour
         */
        url: string;
        /**
         * If set to true, then changing items' visibilities will not update the map until this setting is turned off,
         * at which point all the new visibility settings will be applied. This setting is useful when changing the
         * visibilities of mulitple items at once, since it avoid unnecessary map updates.
         */
        suspendMapUpdates: boolean;
        /** Internal members */
        _libraryId: string;
        _addedFolderReferences: LayerListFolderItem[];
        _handledMapServiceReferences: infrastructure.gis.ServiceLayerInfo[];
        _allMapServiceReferences: infrastructure.gis.ServiceLayerInfo[];
        _outOfFolderMapServiceReferences: gis.ServiceLayerInfo[];
        /** Private members */
        private _initializing;
        private _groupByOperationalAndBase;
        /** User added layers destination folder. */
        private _userAddedLayersFolder;
        private _userAddedLayersDestinationId;
        private _layerListRestEndpoint;
        private _suspendMapUpdates;
        /**
         * Creates a new instance of the (@link LayerList} class
         * @param map The {@link geocortex.essentials.models.MapInfo} that the layer list belongs to
         * @param url Optional. The URL for the essentials layer list rest endpoint if the layer list rest endpoint is not available
         * @param layerListRestEndpoint Optional. The layer list rest endpoint if available. If this is available, the url will not be used
         * @param options Optional. An object containing options to configure the layer list
         */
        constructor(appInfo: geocortex.essentialsHtmlViewer.mapping.infrastructure.gis.AppInfo, url?: string, layerListRestEndpoint?: RestLayerList, options?: LayerListConfigurationParams);
        /**
         * Initializes this instance of the {@link LayerList} class.
         * This is an asynchronous method, you may subscribe to the {@link onLayerListInitialized}
         * and {@link onLayerListInitializationFailed} events for completion information.
         */
        initialize(): void;
        /**
         * Adds a user-added layer to the Layer List. Returns true if the layer was added, false otherwise.
         */
        addUserAddedServiceLayer(serviceLayer: geocortex.essentials.MapService | esri.layers.Layer | gis.ServiceLayerInfo): boolean;
        /**
         * Removes the specified service layer from the layer list. Since the layer list is configurable, the sub layers of a particular service layer may be spread out across
         * the list so we need to check all items to ensure that the service layer is completely removed from the list. Returns true if the layer was found and removed, false otherwise.
         */
        removeServiceLayer(servicelayer: geocortex.essentials.MapService): boolean;
        removeServiceLayer(serviceLayer: esri.layers.Layer): boolean;
        removeServiceLayer(servicelayer: gis.ServiceLayerInfo): boolean;
        /**
         * Updates the layer list with the adds and removes for the given service. It will not add duplicate items.
         * @param mapService The {@link essentials.MapService} or {@link: infrastructure.gis.ServiceLayerInfo} that contains the updates.
         * @param newItems An array of {@link essentials.Layer} items that are being added to the layer list.
         * @param oldItems An array of {@link essentials.Layer} items that are being removed from the layer list.
         * @returns A boolean of whether or not the update was successful.
         */
        updateServiceLayer(mapService: essentials.MapService | infrastructure.gis.ServiceLayerInfo, newItems?: geocortex.essentials.Layer[], oldItems?: geocortex.essentials.Layer[]): boolean;
        /**
         * Updates the legend items in the layer list for a given map service. Returns true if the layer was added, false otherwise.
         * @param mapService That map service that needs to have its layer list item updated.
         */
        updateServiceLayerLegendSwatch(mapService: geocortex.essentials.MapService): boolean;
        /**
         * This is an internal function, though not private to this class. The configurable layer list initializes all layers and filters layer visibilities based on configuration settings
         * and preset rules. In order to avoid flickers on the map and excessive visibility requests, all visibilities are applied at once after processing is complete. This function
         * should be invoked in order to finally apply these visibilities after all processing is completed.
         * @private
         */
        _applyDeferredItemVisibilities(LLItemArray: LayerListItem[]): void;
        private _enableDeferredItemVisibilities(items);
        /** @private */
        private _layerListInitializationErrorHandler(error);
        /** @private */
        private _layerListInitializationHandler(result);
        /** @private */
        private _configureLayerListFromMapInfo(mapInfo, successCallback, errorCallback);
        /**
         * Apply configuration from the layer list's REST endpoint.
         * @param rest The serialized layer list configuration from the rest endpoint.
         * @param successCallback Called when the configuration is successfully applied to this layer list.
         * @param errorCallback Called when an error occurs while attempting to apply the configuration to this layer list.
         * @private
         */
        private _configureLayerListFromRestResponse(rest, successCallback, errorCallback);
        /**
         * Creates one or more layer list items from the service layer information for the item(s). Multiple items are possible only when the parent mapService is configured
         * to not be included in the layer list whereas it's children are included. This is an edge case we need to support for backwards compatibility.
         * @param jsonRestItem The JSON rest item.
         * @param parent The {@link LayerListNode} representing the parent of the created item. If provided, the item's parent will be set to this value.
         * @param isUserAddedLayer A boolean indicating if this is a user added layer. If it is then it will be included in all themes. Default is false.
         * @return A new {@link LayerList} item corresponding to the input.
         */
        private _generateLayerListItemsFromServiceLayer(serviceLayerInfo, parent?, isUserAddedLayer?);
        private _handleGraphicsLayerItem(serviceLayerInfo, listItem);
        /**
         * Creates a layer list item from the JSON representation of the item.
         * @param jsonRestItem The JSON rest item.
         * @param parent The {@link LayerListNode} representing the parent of the created item. If provided, the item's parent will be set to this value.
         * @return A new {@link LayerList} item corresponding to the input.
         */
        private _createLayerListItemFromRestResult(jsonRestItem, parent?);
        /** @private */
        private _subItemIncludedInLayerList(subItems);
        /**
         * @private Performs any processing that may be needed for items
         */
        private _processItem(item, jsonRestItem?);
        /**
         * @private Edge case: If a tiled map service has nested sublayers, then intermediary layers will be converted into folders. These folders should have "canNotAssignVisibility"
         * set to true because all their children will be layers for which we cannot assign visibility and which in effect, cannot be controlled by the parent.
         */
        private _disableFolderIfParentTiled(item);
        /** @private */
        private _generateThemeSettingsForCoreFolder(folder, isUserDefinedLayersFolder?);
        /** @private */
        private _applyInitialLayerTheme();
        private _processEligibleSingleMapServiceFolders();
        private _setupOpacityBindingsForParentsOfHiddenItemsWithOpacityBindings();
        /**
         * Indicates whether the given item is effectively visible in the layer list.
         */
        private isEffectivelyDisplayed(item);
        private _getFoldersContainingSingleMapService();
        private _filterEligibleSingleMsFolders(sourceFolders);
        private _selectDeepestLevelSingleMapServiceFolders(sourceFolders);
        private _allFoldersDescendantsOf(targetFolder, foldersToCheck);
        private _allFoldersAncestorsOf(targetFolder, foldersToCheck);
        private _noChildItemsWithMapService(ms, foldersToCheck);
        private _onlyFolderItems(items);
        /** See comments on GVH-4329 */
        private _processUnhandledMapServices();
        /**
         * Add layer list items to the top of the user added layers folder.
         * If the user added layers folder is not designated, items will just be added to the top of the layer list.
         * @private
         * @param items Array of layer list items.
         * @returns Boolean for whether or not all items were added successfully (passing validation).
         */
        private _addItemsToUserAddedFolder(items);
        private _createUserAddedLayerFolder(name?);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    interface LayerListConfigurationParams {
        /**
        * A boolean indicating whether legend integration should be enabled for this layer list
        */
        enableLegendIntegration: boolean;
        /**
        * A boolean indicating whether displaying swatches solely for visible layers should be enabled for this layer list
        */
        onlyShowSwatchesOnVisibleLayers: boolean;
        /**
         * A boolean indicating whether visibility all parent items should be automatically activated/set to true when the
         * visibility of an item is set to true. In effect, this setting ensures that an item when set to visible will necessarily
         * be effectively visible as well.
         */
        autoActivateAncestorVisibilities: boolean;
        /**
         * A boolean indicating whether to group items by operational and base maps. Only applicable for Essentials < v4.2 - i.e. in non 'configurable' mode
         */
        groupByOperationalAndBase: boolean;
        /**
         * A boolean which etermines whether layer icons are enabled or not. False by default. If true, layer icons will be populated for layer items which have
         * them configured and which do not have a legend
         */
        enableLayerIcons: boolean;
        /**
         * The icon uri to be set if a layer fails to initialize. This is an optional property and will only be used if configured during initialization
         */
        serviceLoadFailureIconUri: string;
        /**
         * The icon tooltip to be set if a layer fails to initialize. This is an optional property and will only be used if configured during initialization
         */
        serviceLoadFailureIconTooltip: string;
        /**
         * The legend icon tooltip to use when only a single legend item exists for a layer. This is optional and will be used only if set.
         */
        singleLegendIconTooltip: string;
        /**
        * The legend icon tooltip to use when only a single legend item exists for a layer. This is optional and will be used only if set.
        */
        multiLegendIconTooltip: string;
        /**
        * The swatch element to be displayed if an item contains multiple legend items. If only one legend item exists, that will be used as the swatch element. If
        * multiple swatch elements exist but this parameter is not configured, the first legend item swatch element will be used.
        */
        multiLegendSwatchElement: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    enum LayerListItemType {
        FOLDER = 0,
        MAPSERVICE = 1,
        LAYER = 2,
        GRAPHICSLAYER = 3,
        KMLFOLDER = 4,
    }
    /**
     * An item that appears in the {@link LayerList}
     */
    class LayerListItem extends LayerListNode {
        /**
         * The type of item this object represents
         */
        type: LayerListItemType;
        /**
         * The name of this item as it appears in the layer list.
         */
        name: Observable<string>;
        /**
        * Indicates whether this {@link LayerListItem} is currently set to visible or not.
        */
        isVisible: Observable<boolean>;
        /**
         * Indicates whether this {@link LayerListItem} is currently effectively visible. An item is only effectively visible if it, and all it's ancestors are set visible
         */
        isEffectivelyVisible: Observable<boolean>;
        /**
         * Indicates whether the legend swatch for this {@link LayerListItem} is visible when the "onlyShowSwatchesOnVisibleLayers" configuration option has been selected.
         */
        legendIsVisible: Observable<boolean>;
        /**
         * Indicates whether this item's parent is currently effectively visible or not
         */
        parentEffectivelyVisible: Observable<boolean>;
        /**
        * Indicates whether this {@link LayerListItem} is expanded or not.
        */
        isExpanded: Observable<boolean>;
        /**
         * Observable indicating whether this LayerListItem is in the active theme or not.
         */
        inActiveTheme: Observable<boolean>;
        /**
         * Observable indicating whether this LayerListItem is to be displayed in the layer list or not
         */
        displayItem: Observable<boolean>;
        /**
         * The icon Uri for this layer (if applicable). Will be set if available during mapService / layer addition.
         */
        iconUri: Observable<string>;
        /**
        * Tooltip for this Layer's icon, if any
        */
        iconTooltip: Observable<string>;
        /**
         * A collection of child items that are populated on the fly - only when the user expands a given folder. This is for memory and performance reasons
         */
        onDemandItemCollection: ObservableCollection<LayerListItem>;
        /**
        * Description of layer folder expand/collapse button w/ name of layer.
        */
        layerFolderToggleTooltip: Observable<string>;
        /**
        * Description of toggle button w/ name of layer.
        */
        layerToggleTooltip: Observable<string>;
        /**
        * Description of layer actions element w/ name of layer.
        */
        layerActionsTooltip: Observable<string>;
        /**
         * A Collection of legends associated with this Layer List item
         */
        legendItems: ObservableCollection<infrastructure.legend.LegendItem>;
        /**
         * The legend icon Uri or swatch element - if there is only one legend item associated with this item, then this will be the swatch element for that legend item
         */
        legendSwatch: Observable<string>;
        /**
        * Tooltip for the icon representing the legend item(s), if any
        */
        legendTooltip: Observable<string>;
        /**
        * Whether the legend has multiple items or not to display. Used to determine whether legend element should be tabbable or not.
        */
        legendHasMultipleItems: Observable<boolean>;
        /**
         * Indicates whether the legend items for this item are displayed or not
         */
        expandLegend: Observable<boolean>;
        /**
         * Indicates whether this item is mutually exclusive, i.e. whether toggling the visibility of this item on will
         * toggle off the visibility of its siblings.
         */
        isMutuallyExclusive: Observable<boolean>;
        /**
         * Indicates whether this item should have a radio toggle control next to it instead of a checkbox. In some rare cases,
         * an item may be configured as mutually exclusive (see {@link isMutuallyExclusive}), yet should still show with a
         * check box. For example, when there is only one visible item in a mutually exclusive group.
         */
        hasRadioToggle: Observable<boolean>;
        /**
         * The name of the mutually exclusive group that this item belongs to, if any. Toggling on an item within this
         * group will toggle off other mutually exclusive items that belong to the same group.
         */
        radioGroup: Observable<string>;
        /**
         * Indicates if all ancestors of this item are visible or not. This item will be effectively visible only if all its ancestors are visible as well.
         */
        allAncestorsVisible: boolean;
        /**
         * Indicates whether this item has one or more children that are displayed in the layer list.
         */
        hasDisplayedChildren: Observable<boolean>;
        /**
         * A reference to the {@link infrastructure.layerList.LayerList} object that contains this LayerListItem
         */
        layerList: infrastructure.layerList.LayerList;
        /**
        * The mapService associated with the current node - if any
        */
        mapService: geocortex.essentialsHtmlViewer.mapping.infrastructure.gis.ServiceLayerInfo;
        /**
         * Determines whether or not the visibility of a LayerList item can be controlled. False by default
         */
        canNotAssignVisibility: Observable<boolean>;
        /**
         * Determines if the opacity of this item can be adjusted or not.
         */
        canAdjustOpacity: Observable<boolean>;
        /**
         * Determines whether the item can be displayed in the layer list.
         */
        canDisplayItem: Observable<boolean>;
        /**
         * The current opacity of the associated mapService. This will remain undefined unless the opacity of this LayerList item can be adjusted.
         */
        opacity: Observable<number>;
        /**
         * A boolean which indicates whether this item should be setup to handle layer actions. False by default.
         */
        enableLayerActions: boolean;
        /**
         * A boolean indicating that this item is the originator of the current user click. It will remain false at all other times.
         */
        currentUserClickOriginator: boolean;
        /**
        * Indicates if this item is visible at the current map scale.
        */
        inVisibleScaleRange: Observable<boolean>;
        /**
        * The deferred visibility to be applied to this item after the complete layer list model is set up and ready - i.e. after processing all visibilities,
        * startup workflows, parameters etc. This will be applied and then the variable deleted, when the applyDeferredInitialVisibility function is called.
        */
        _deferredVisibilitySetting: boolean;
        /**
         * Creates a new instance of the {@link LayerListItem} class
         */
        constructor(id: string, type: LayerListItemType, layerList: infrastructure.layerList.LayerList);
        /**
         * Updates inActiveTheme when it changes in the underlying geocortex map service or layer (if available)
         */
        bindToActiveTheme(): void;
        /**
         * Removes the binding to the active theme
         */
        unbindFromActiveTheme(): void;
        notifyActiveThemeChanged(childrenInActiveTheme: boolean): void;
        /**
         * Set the visibility of this item in the layer list. This is a special function which should be called in preference to setting isVisible directly, since
         * it also keeps track of whether this item is the originator of the current user click.
         */
        setItemVisibility(visible: boolean): void;
        /**
         * Set the visibility of the service associated with this item in the layer list
         */
        setVisibility(visible: boolean): void;
        /**
         * Sets the ancestor visibility. This should be set to true only if all ancestors are set visible
         * NOTE: This function call will not check to see if all ancestors are actually visible or not. Use with caution.
         */
        setAncestorVisibility(ancestorVisibility: boolean): void;
        /**
         * Manages the on demand item collection. This collection is only populated when the needed - i.e. when the respective layer list folder is expanded. When not
         * needed, it's pulled out from the collection and from the dom. This has a slight insignificant penalty for smaller layer lists but a huge benefit for large ones
         */
        refreshOnDemandItemCollection(expanded?: boolean): void;
        /**
        * Populates the containedMapServices array of any parent folder. This method must be invoked manually when needed.
        */
        populateMapServicesInParentFolders(): void;
        /**
         * Applies the previously deferred visibility (if any) to this item after the complete layer list model is set up and ready
         */
        _applyDeferredInitialVisibility(): void;
        _setupOpacityBindings(): void;
        /** @private */
        private _notFolderOrContainsAtLeastOneChildLayer(item);
        /** @private */
        private _handleLayerThemeChangingEvent(args);
        private _updateDisplayItem();
        private _onActiveThemeChanged(value);
        private _processLegendVisibility();
        protected _setTooltips(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    /**
     * A item in the layer list representing a folder in a KML service.
     */
    class LayerListKmlFolderItem extends LayerListItem {
        /**
         * The esri KMLLayer that this folder belongs to.
         */
        private _kmlLayer;
        /**
         * The esri KMLFolder object that this layer list item is associated with.
         */
        private _kmlFolder;
        /**
         * Initializes a new instance of the {@link LayerListKmlFolderItem} class.
         * @param id The unique ID for the item.
         * @param layerList The layer list
         * @param kmlLayer The {@link esri.layers.KMLLayer} object that contains the folder.
         * @param kmlFolder The {@link esri.layers.KMLFolder} object that this layer list item is associated with.
         */
        constructor(id: string, layerList: infrastructure.layerList.LayerList, kmlLayer: esri.layers.KMLLayer, kmlFolder: esri.layers.KMLFolder);
        /**
         * Set the visibility of this item in the layer list. This is a special function which should be called in preference to setting isVisible directly, since
         * it also keeps track of whether this item is the originator of the current user click.
         */
        setItemVisibility(visible: boolean): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    class ArrayUtils {
        /**
         * Sorts an array based on a particular property or function value.
         */
        static sortBy<T>(items: Array<T>, selector: (item: T) => any): Array<T>;
        /**
         * Calculates the sum of all items based on a callback selector value.
         */
        static sum<T>(items: T[], callback: (item: T) => number): number;
        /**
         * Calculates the maximum of all items based on a callback selector value.
         */
        static max<T>(items: T[], callback: (item: T) => any): any;
        /**
         * Similar to Array.map, except that any time that an item in the input causes the callback function to throw an error,
         * an error handler will be invoked rather than aborting. These items will be skipped in the output, so unlike Array.map(),
         * it's possible that the output array may contain a different number of items from the input.
         */
        static mapWithErrorCallback<T, U>(array: T[], callback: (T) => U, errCallback: (item: T, error: Error, result: U[]) => void, thisArg?: any): U[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    class Dictionary<TValue> {
        private _backingStore;
        /**
        An implementation of a dictionary. This is really similar to a plain old object
        in JavaScript except that it's typed for TypeScript.
        @class
         */
        constructor();
        containsKey(key: string): boolean;
        get(key: string): TValue;
        set(key: string, value: TValue): void;
        remove(key: string): boolean;
        clear(): void;
        values(): TValue[];
        keys(): string[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.results {
    class ResultsViewModel extends geocortex.framework.ui.ViewModelBase {
        private _emptyFeatureSetCollection;
        private _count;
        /** Stores binding event subscription tokens so we can unsubscribe later */
        private _watchHandles;
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        headerText: Observable<string>;
        searchSuggestion: Observable<string>;
        featureSetCollection: Observable<infrastructure.FeatureSetCollection>;
        featureActions: ObservableCollection<menus.MenuItemModel>;
        currentFeature: Observable<Feature>;
        hasFeatureSets: Observable<boolean>;
        isBusy: Observable<boolean>;
        presentableResults: geocortex.framework.ui.PresentableCollection<infrastructure.Feature>;
        /** Whether the feature set collection has been modified */
        isModified: Observable<boolean>;
        defaultIsPaged: boolean;
        defaultPageSize: number;
        constructor(app: geocortex.framework.application.Application, libraryId?: string);
        subscribeEvents(): void;
        handleCollectionChanged(collection: infrastructure.FeatureSetCollection): void;
        handleFeatureSetsChanged(changedArgs: geocortex.framework.events.CollectionChangedArgs): void;
        /** Updates the header text.  Can be overridden by subclasses. */
        updateHeaderText(count: number): void;
        private _featureSetsHaveFeatures(featureSets);
        private _openFSC(args);
        private _closeFSC(args);
        private _removeFSC(args);
        private _changeFSC(args);
        _getEmptyFeatureSetCollection(): geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection;
        registerCommand(): void;
        getResultsFeatureActions(): void;
        _pulseFeatureSetsInCollection(): void;
        protected _watchDisplayNameChanges(): dojo.RemovableHandle;
        protected _unwatchDisplayNameChanges(): void;
        protected _watchIsModifiedChanges(): dojo.RemovableHandle;
        protected _unwatchIsModifiedChanges(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.results {
    class FlatResultsViewModel extends ResultsViewModel {
        results: geocortex.framework.ui.ObservableCollectionAggregator<infrastructure.Feature>;
        resultsPage: ObservableCollection<infrastructure.Feature>;
        pageControlsEnabled: Observable<boolean>;
        resultsList: Observable<string>;
        pagingControlClassName: Observable<string>;
        contentField: Observable<string>;
        private _featureSetsBindingToken;
        private _boundFeatureSetCollection;
        private _featureViewMap;
        /**
         * FlatResultsViewModel flattens the feature set collections and presents the data as a single
         * ObservableCollection.
         */
        constructor(app: geocortex.framework.application.Application, libraryId?: string);
        subscribeEvents(): void;
        handleCollectionChanged(collection: infrastructure.FeatureSetCollection): void;
        handleFeatureSetsChanged(changedArgs: geocortex.framework.events.CollectionChangedArgs): void;
        /**
        * Handles changes in the Results Page.  This is intended to keep the FeatureViewMap from getting overloaded
        * with deprecated views.
        */
        handlePageResultsChange(changeArgs?: geocortex.framework.events.CollectionChangedArgs): void;
        /**
        * Handles a dataLink resolved event to update the display for the given feature.
        * This was done so that tokens would be added asynchronously as they arrive
        * @param context The feature that was updated
        */
        handleFeatureChanged(context: infrastructure.Feature): void;
        protected _destroyViewForToken(token: string): void;
        showResultsList(fsc: infrastructure.FeatureSetCollection): void;
        showResultsList(fscId: string): void;
        protected _switchToTabularResultsViewImpl(): void;
        protected _canExecuteSwitchToTabularResultsView(): boolean;
        getFeatureView(token: string): geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureDescriptionPresenterView;
        setFeatureView(token: string, view: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureDescriptionPresenterView): void;
        unbindFeatureSet(): void;
        exportState(resultsState: ResultsState): void;
        applyState(args: ApplyResultsViewStateArgs): void;
        _pulseFeatureSetsInCollection(): void;
        protected _clearResetUnderlyingCollection(unbindFeatureSet: boolean): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.results {
    class ResultsAttributeHeaderViewModel {
        displayName: Observable<string>;
        sortState: Observable<number>;
        sortClass: Observable<string>;
        _sharedState: geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsAttributeHeaderViewModel.SharedState;
        _sortingPredicate: (a: any, b: any) => number;
        _reverseSortingPredicate: (a: any, b: any) => number;
        constructor(sharedState: geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsAttributeHeaderViewModel.SharedState, attribute: infrastructure.FeatureAttribute, type: string, index: number);
        buildSortingFunction(index: number): (a: any, b: any) => number;
        buildReverseSortingFunction(index: number): (a: any, b: any) => number;
        buildDateSortingFunction(index: number): (a: any, b: any) => number;
        buildReverseDateSortingFunction(index: number): (a: any, b: any) => number;
        onSortStateChange(state: number): void;
    }
    module ResultsAttributeHeaderViewModel {
        /**
         * Manual comparison function. Slower than native.
         */
        var manualCollator: (a: any, b: any) => number;
        /**
         * The fastest comparison function available.
         */
        var collator: (x: string, y: string) => number;
        /**
         * Holds state shared between columns.
         */
        class SharedState {
            ignoreStateChange: boolean;
            lastSortedColumn: any;
            presentableResults: geocortex.framework.ui.PresentableCollection<infrastructure.Feature>;
            unsortedClass: string;
            sortedClass: string;
            reverseSortedClass: string;
            constructor(presentableResults: geocortex.framework.ui.PresentableCollection<infrastructure.Feature>, unsortedClass: string, sortedClass: string, reverseSortedClass: string);
            reset(): void;
        }
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.results {
    class ResultsFeatureActionsView extends geocortex.framework.ui.ViewBase {
        handleMenuItemClick(event: any, element: any, context: any): void;
        handleGetDescription(event: any, element: any, context: any): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.results {
    class ResultsViewBase extends geocortex.framework.ui.ViewBase {
        featureClickedEventName: string;
        featurePressedEventName: string;
        isCollapsed: boolean;
        isContainerCollapsed: boolean;
        private _longPressTimer;
        private _pressStartTime;
        private _pressLengthMs;
        private _firedTouchOrPress;
        private _ignoreMouseEventFlag;
        private _pressYStart;
        private _lastTouchY;
        private _scrollYDeltaThreshold;
        private _firstEvent;
        constructor(app: geocortex.framework.application.Application, libraryId?: string);
        activated(): void;
        deactivated(): void;
        handleTouchStart(evt: Event, el: HTMLElement, ctx: any): boolean;
        handleTouchMove(evt: Event, el: HTMLElement, ctx: any): boolean;
        handleTouchEnd(evt: Event, el: HTMLElement, ctx: any): boolean;
        handleTouchCancel(evt: Event, el: HTMLElement, ctx: any): boolean;
        handleMouseDown(evt: Event, el: HTMLElement, ctx: any): boolean;
        handleClick(evt: Event, el: HTMLElement, ctx: any): boolean;
        handleMouseUp(evt: Event, el: HTMLElement, ctx: any): boolean;
        handleMouseOut(evt: Event, el: HTMLElement, ctx: any): void;
        private _beginLongPress(ctx);
        private _cancelLongPress();
        /**
         * If this view is hosted within a ViewContainer (and it's currently active), we want to notify listeners that
         * the container has been activated or deactivated.
         * NOTE: Child views hosted within a ViewContainerView are not activated/deactivated when the container is
         * activated/deactivated so this gives someone a chance to know that a view has been "hidden" because its
         * container was deactivated.
         */
        private _isViewHostedInContainer(container);
        scrollView(pos: number): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.results {
    class ResultsListView extends ResultsViewBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        viewModel: FlatResultsViewModel;
        featureClickedEventName: string;
        featurePressedEventName: string;
        private _subscriptions;
        private _scrollTop;
        constructor(app: geocortex.framework.application.Application, libraryId?: string);
        activated(): void;
        deactivated(): void;
        attach(viewModel?: any): void;
        showResultsList(fsc: essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection): void;
        handlePageFirst(evt: Event, el: HTMLElement, ctx: any): void;
        handlePagePrev(evt: Event, el: HTMLElement, ctx: any): void;
        handlePageNext(evt: Event, el: HTMLElement, ctx: any): void;
        handlePageLast(evt: Event, el: HTMLElement, ctx: any): void;
        handleScrollChange(evt: Event, el: HTMLElement, ctx: any): void;
        getDescription(evt: Event, el: HTMLElement, ctx: any): void;
        scrollViewTop(position?: number): void;
        resolveWidget(widgetId: string, context: any, binding: geocortex.framework.ui.BindingExpression): geocortex.framework.ui.ViewBase;
        protected _handleShowResultsTable(): void;
        protected _switchToTabularResultsViewImpl(): void;
        protected _canExecuteSwitchToTabularResultsView(): boolean;
        /** Fire event only if the view container is active in the data frame */
        protected _dataFrameOpenedEventHandler(): void;
        /** Fire event only if the view container is active in the data frame */
        protected _dataFrameClosedEventHandler(): void;
        /** Invokes the stored delegates to unsubscribe from events. */
        protected _unsubscribeFromEvents(): void;
        protected _exportState(resultsState: ResultsState): void;
        protected _applyState(args: ApplyResultsViewStateArgs): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.results {
    interface ApplyResultsViewStateArgs {
        state: ResultsState;
        promises: Promise<void>[];
    }
    class ResultsModule extends geocortex.framework.application.ModuleBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        resultMappings: any;
        schema: any;
        _lastCommand: any;
        _supportedFormats: string[];
        _showInvisibleAttributes: boolean;
        initialize(config: any): void;
        getStateFilter(): any;
        exportState(): Promise<ResultsState>;
        applyState(state: ResultsState): Promise<void>;
        wireUpResultMapping(): void;
        fsmCollectionOpenedHandler(args: infrastructure.eventArgs.FeatureSetManagerEventArgs): void;
        fsmCollectionSetCommand(sourceName: string, command: string): void;
        exportTo(params: {
            fsc: FeatureSetCollection;
            format: string;
        }): void;
        exportToSuccess(data: any, format: string): void;
        exportToCanExecute(args: any): boolean;
        private getFields(gcxFs);
        private getFieldsFromEsriLayer(esriLayer, gcxFs?);
        private getFieldsFromEssentialsLayer(essentialsLayer);
        private getFieldsFromGcxFeatureSetAttributes(gcxFeatureSetAttributes, gcxFs);
        private getFieldsFromGcxFeatureAttributes(gcxFeatureAttributes, gcxFs);
        private getFieldsFromEsriFeatureAttributeValues(esriFeatures);
        private getFieldsFromGcxFeatureAttributeValues(gcxFeatures);
        private getTypeFromEsriFeatures(features, attributeIndex);
        private getTypeFromGcxFeatures(features, attributeIndex);
        private getEsriTypeFromValue(value);
        private getFeatureSets(fsc);
        private fscToJson(fsc);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.results {
    class ResultsTableView extends ResultsViewBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        viewModel: TabbedResultsViewModel;
        featureClickedEventName: string;
        featurePressedEventName: string;
        scrollContainerElement: HTMLDivElement;
        tabContainerElement: HTMLDivElement;
        tabElements: HTMLElement;
        scrollTabLeftElement: HTMLElement;
        scrollTabRightElement: HTMLElement;
        private _fsBindingToken;
        private _boundFs;
        constructor(app: geocortex.framework.application.Application, libraryId?: string);
        attach(viewModel?: any): void;
        resolveWidget(widgetId: string, context: any, binding: geocortex.framework.ui.BindingExpression): any;
        showResultsTable(fsc: essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection): void;
        private _refreshTabControlVisibility();
        handleTabClick(evt: Event, el: HTMLElement, ctx: any): void;
        handlePageFirst(evt: Event, el: HTMLElement, ctx: any): void;
        handlePagePrev(evt: Event, el: HTMLElement, ctx: any): void;
        handlePageNext(evt: Event, el: HTMLElement, ctx: any): void;
        handlePageLast(evt: Event, el: HTMLElement, ctx: any): void;
        handleTabScrollBack(evt: Event, el: HTMLElement, ctx: any): void;
        handleTabScrollForward(evt: Event, el: HTMLElement, ctx: any): void;
        handleClickFeature(evt: Event, el: HTMLElement, ctx: any): void;
        handleColumnHeadClick(evt: Event, el: HTMLElement, ctx: any): void;
        protected _handleShowResultsList(): void;
        protected _switchToListResultsViewImpl(): void;
        protected _canExecuteSwitchToListResultsView(): boolean;
        protected _updateScrollTabDisabledStatus(): void;
        protected _unbindFromPrevFeatureSet(): void;
        protected _exportState(resultsState: ResultsState): void;
        protected _applyState(args: ApplyResultsViewStateArgs): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.results {
    class TabbedResultsViewModel extends ResultsViewModel {
        curFeatureSet: Observable<infrastructure.FeatureSet>;
        currPageWithinTab: {
            [featureSetId: string]: number;
        };
        currScrollPosWithinTab: {
            [featureSetId: string]: number;
        };
        presentableResults: framework.ui.PresentableCollection<Feature>;
        resultsPage: ObservableCollection<infrastructure.Feature>;
        pageControlsEnabled: Observable<boolean>;
        tabControlsEnabled: Observable<boolean>;
        resultsTable: Observable<string>;
        columnSharedState: infrastructure.ui.components.Table.TableColumnHeaderViewModel.SharedState;
        columnHeaders: ObservableCollection<infrastructure.ui.components.Table.TableColumnHeaderViewModel>;
        leftScrollTabDisabled: Observable<boolean>;
        rightScrollTabDisabled: Observable<boolean>;
        _firstVisibleTab: number;
        private _emptyFeatureSet;
        private _boundFeatureSets;
        private _featureSetsBindingToken;
        /**
         * TabbedResultsViewModel leaves the feature set collections separate to be
         * presented as tabs (or whatever).
         */
        constructor(app: geocortex.framework.application.Application, libraryId?: string);
        handleCollectionChanged(collection: infrastructure.FeatureSetCollection): void;
        handleCurrentFeatureSetChanged(featureSet: infrastructure.FeatureSet): void;
        handleFeatureSetsChanged(changedArgs: geocortex.framework.events.CollectionChangedArgs): void;
        showResultsTable(fsc: infrastructure.FeatureSetCollection): void;
        showResultsTable(fscId: string): void;
        protected _switchToListResultsViewImpl(): void;
        protected _canExecuteSwitchToListResultsView(): boolean;
        setCurrentSelectedFeatureSet(featureSet: infrastructure.FeatureSet): void;
        unbindFeatureSets(): void;
        buildColumnHeaders(featureSet: infrastructure.FeatureSet): void;
        setCurrentPageWithinTab(featureSetId: string): void;
        updateCurrentPageAndScrollPosWithinTab(page: number, pos: number): void;
        exportState(resultsState: ResultsState): void;
        applyState(args: ApplyResultsViewStateArgs): void;
        protected _handlePageResultsChange(changeArgs?: geocortex.framework.events.CollectionChangedArgs): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.search {
    class SearchHintItem {
        /**
         * Unsafe HTML that must be sanitized before being injected into the DOM.
         * @type {String}
         */
        text: Observable<string>;
        /**
         * Sanitized plain-text version of the unsafe HTML.
         * @type {String}
         */
        plainText: Observable<string>;
        /**
         * Sanitized version of the unsafe HTML.
         * @type {String}
         */
        safeText: Observable<string>;
        /**
         * The {@link Observable} icon URI associated with this search hint.
         * Can be null if no icon is available.
         * @observable
         * @type {String}
         */
        iconUri: Observable<string>;
        /**
         * Initializes a new instance of the {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.search.SearchHintItem} class.
         * @class
         * The text that comes back from a search hint provider might have embedded markup.
         * We bind these highlights to an items source on an autocomplete box.
         * We however want the selection from the autocomplete to not contain
         * embedded markup.
         * That is the purpose of this class - to provide two views of the hints - with and without markup.
         * @param text The text (with markup) to initialize
         * @param options Optional parameter that sets the options for emphasizing text that might also contain unsafe HTML content.
         */
        constructor(text: string, options?: {
            emphasisBeginTag?: string;
            emphasisEndTag?: string;
        });
        sanitizeText(value: string): string;
        toString(): string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.search {
    /**
     * Interface for providing search hints given a search string. Not to be confused with actual
     * search results, search hints are simply strings of things that are related to or match the
     * provided search text. A typical use of search hints is in an auto-complete drop down box.
     *
     * This interface is a companion to SearchProviderBase. If a class extends SearchProviderBase,
     * then it might optionally implement this interface to provide search hints. It's up to the
     * consumer of the search provider to actually make use of this functionality. In the
     * HTML5 viewer, SearchManager manages the search providers and exposes the associated
     * SearchHintProvider implementations.
     */
    interface SearchHintProvider {
        /**
         * Returns a collection of strings that match or are related to the provided search text.
         * This is typically used for auto complete dropdown boxes.
         * @param hints The collection of hints. This collection should be manipulated (added) to by the implementation.
         * @param searchText The text the user is searching on.
         */
        getSearchHints(hints: ObservableCollection<SearchHintItem>, searchText: string): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.tools {
    class DrawMode {
        static POINT: string;
        static MULTI_POINT: string;
        static LINE: string;
        static POLYGON: string;
        static FREEHAND_POLYGON: string;
        static POLYLINE: string;
        static FREEHAND_POLYLINE: string;
        static RECTANGLE: string;
        static TRIANGLE: string;
        static CIRCLE: string;
        static ELLIPSE: string;
        static ARROW: string;
        static LEFT_ARROW: string;
        static RIGHT_ARROW: string;
        static UP_ARROW: string;
        static DOWN_ARROW: string;
        static EXTENT: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel {
    /**
     * Default view model for a {@link SmartPanelView}.
     */
    class SmartPanelViewModel extends geocortex.framework.ui.ViewContainer.ViewContainerViewModel {
        /** An empty menu view model to use when no hoisted menu is available. */
        static emptyMenuViewModel: menus.MenuViewModel;
        /**
         * The view model for the currently hoisted menu.
         * When there is no hoisted menu present, this should be set to {@link emptyMenuViewModel}.
         */
        hoistedMenuViewModel: Observable<menus.MenuViewModel>;
        /** Whether or not a menu is available for presentation as a hoisted menu. */
        hasHoistedMenu: Observable<boolean>;
        /** Whether or not the currently hoisted menu (if present) has any executable menu items. */
        hasExecutableMenuItems: Observable<boolean>;
        /**
         * An option region name specifying a region to activate menu views in.
         * If specified in configuration, new menu views will be created and activated in this region rather than being dropdowns.
         */
        menuRegion: string;
        /** Whether or not the inline menu is open. */
        inlineMenuIsOpen: Observable<boolean>;
        /** Whether or not this panel is currently maximized */
        panelMaximized: Observable<boolean>;
        /** Whether to display the maximize button on this smart panel. Defaults to false */
        showingMaximizeButton: Observable<boolean>;
        /** Whether the views that are linked to this are able to be resized on the x axis */
        resizeX: boolean;
        /** Whether the views that are linked to this are able to be resized on the y axis */
        resizeY: boolean;
        /**
         * Optional region where status messages related to this smart panel are to be shown.
         * If specified in configuration, the status messages will be created and activated in this region.
         */
        statusRegion: string;
        /** The region type for status messages. Defaults to `geocortex.framework.ui.DivRegionAdapter` */
        statusRegionType: string;
        /** @inherited */
        constructor(app: essentialsHtmlViewer.ViewerApplication, libraryId: string);
        /** @inherited */
        initialize(config: any): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.MultiPane {
    class MultiPaneViewModel extends geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel {
        /**
         * The collection of available pane items.
         */
        paneItems: ObservableCollection<any>;
        /**
         * The collection of pane items to display by default whenever the multi pane view is activated.
         */
        defaultPaneItems: ObservableCollection<any>;
        /**
         * The collection of pane items currently being displayed in the multi pane view.
         */
        displayedPaneItems: ObservableCollection<any>;
        /**
         * Whether the multi pane view is expanded (active).
         */
        expanded: Observable<boolean>;
        headerIsVisible: Observable<boolean>;
        showXButton: Observable<boolean>;
        selectorIconUri: Observable<string>;
        selectorText: Observable<string>;
        initialize(config: MultiPaneViewModelConfig): void;
        findPaneItemById(paneItemId: string): any;
        findDisplayedPaneItemById(paneItemId: string): any;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.MultiPane {
    class PaneViewModel extends framework.ui.ViewModelBase {
        /**
         * The panel item being displayed in this container view.
         */
        currentPaneItem: Observable<any>;
        headerIsVisible: Observable<boolean>;
        showXButton: Observable<boolean>;
        initialize(config: PaneViewModelConfig): void;
        onDestroy(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.MultiPane {
    /**
     * This class provides a single container view designed to host a pane.
     */
    class PaneView extends framework.ui.ViewBase {
        protected _isDestroyed: boolean;
        /**
         * The ViewModel backing this view.
         */
        viewModel: PaneViewModel;
        /**
         * Clean up the pane item while destroying this view.
         */
        destroy(): void;
        /**
         * Invoked when the pane is closed.
         * @event
         */
        onClose(paneItem: any): void;
        handleClickClose(evt: Event, el: HTMLElement, ctx: any): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel {
    /**
     * Interface that contains all relevant information when a panel is being resized.
     */
    interface ResizeInformation {
        initialPanelWidth?: number;
        initialPanelHeight?: number;
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        initialX?: number;
        initialY?: number;
        currentX?: number;
        currentY?: number;
    }
    /**
     * A Smart Panel is an extension of {@link framework.ui.ViewContainer.ViewContainerView} that adds the ability to "hoist" menu widgets
     * from views within the panel's managed region.
     * When a menu is "hoisted" from a view, a new menu view is created for the same menu, and a button appears in the panel's header that
     * will activate the menu view.
     * While a menu is hoisted, it is hidden in the originating view.
     * Any menu created via {@link menus.MenuRegistry.createMenuWidget} can be hoisted.
     */
    class SmartPanelView extends geocortex.framework.ui.ViewContainer.ViewContainerView {
        static HoistedClassName: string;
        /** @inherited */
        app: essentialsHtmlViewer.ViewerApplication;
        /** @inherited */
        viewModel: SmartPanelViewModel;
        /** The ID of the menu most recently hoisted. */
        hoistedMenuId: string;
        /** The view of the currently hoisted menu. */
        hoistedMenuOwnerView: menus.MenuView;
        /** The menu button element. */
        menuButtonElement: HTMLElement;
        /** The container area */
        containerElement: HTMLElement;
        /** The header area */
        headerElement: HTMLElement;
        /** The optional status message region */
        statusRegionElement: HTMLElement;
        /** The scroll area */
        scrollRegionElement: HTMLElement;
        /** The footer area */
        footerElement: HTMLElement;
        /** The parent region that is actually resized when the panel is resized */
        resizableRegion: HTMLElement;
        /** An element used to show the changing dimensions panel during resizing */
        resizePreviewElement: HTMLElement;
        /** Whether the panel is able to be resized vertically */
        resizeY: boolean;
        /** Whether the panel is able to be resized horizontally */
        resizeX: boolean;
        /** Set to `true` if the currently active view in the managed region is itself an instance of {@link SmartPanelView}. */
        protected _activeViewIsASmartPanel: boolean;
        /** The parent panel of this one, if this view is hosted in a region controlled by another instance of {@link SmartPanelView}. */
        protected _parentPanel: SmartPanelView;
        /** Menu views created by this component, tracked to ensure we don't "leak" any instances of {@link MenuView}. */
        protected _menuViews: {
            [viewId: string]: menus.MenuView;
        };
        /** Subscription token for the binding event for the menu item invoked event */
        protected _menuItemInvokedSubscriptionToken: string;
        /** @inherited */
        attach(viewModelArg?: any): void;
        protected _initializeEvents(): void;
        /** When status messages are shown (or dismissed), the position of the scroll region element should be recalculated */
        protected _handleRegionActivatedOrDeactivated(region: framework.ui.RegionAdapterBase): void;
        protected _togglePanelMaximized(viewId: String, operation: String): void;
        protected _canExecuteMaximizeRestoreOperations(): boolean;
        /** @inherited */
        protected _handleViewActivatedInContainerEvent(view: framework.ui.ViewBase): void;
        /** @inherited */
        activated(): void;
        /** @inherited */
        deactivated(): void;
        /** @inherited */
        destroy(): void;
        /**
         * Opens the hoisted menu as its own view in a particular region.
         * @param regionName The name of the region to activate the menu view in.
         */
        openHoistedMenuInRegion(regionName: string): void;
        /** @inherited */
        resolveWidget(widgetId: string, context: any, binding: framework.ui.BindingExpression): any;
        /**
         * Creates a new instance of {@link menus.MenuView} with the default menu template.
         * @param viewModel The view model for the new menu view.
         */
        createMenuView(viewModel: menus.MenuViewModel): menus.MenuView;
        /**
         * Handles a click or a tap on the hoisted menu button and opens the menu either as a popup, or as a new view in a region
         * whose name provided in configuration for the view model.
         */
        handleTapMenuButton(): void;
        /**
         * "Hoists" the first menu found in a given view, hosting a copy of the menu either as a popup/dropdown menu in the header,
         * or as a new view that will be activated in a region specified in view model configuration.
         * @param view The view to try hoisting a menu from.
         */
        hoistMenuForView(view: framework.ui.ViewBase): void;
        /**
         * Sets the parent panel of this one. This allows for nested panels to perform hoisting.
         * @param parentPanel The panel considered the parent of this one.
         */
        setParentPanel(parentPanel: SmartPanelView): void;
        /**
         * Handles the maximize or minimize click events
         * @param evt The triggering event.
         * @param el The targeted element.
         * @ctx ctx The current context.
         */
        handleMaximizeToggleClick(evt: Event, el: HTMLElement, ctx: any): void;
        /**
         * Maximizes the panel.
         */
        maximizePanel(): void;
        /**
         * Minimizes the panel.
         */
        minimizePanel(): void;
        private _unsubscribeMenuItemInvokedSubscription();
        handleHeaderMouseDown(evt: MouseEvent, el: HTMLElement, ctx: any): boolean;
        handleHeaderTouchStart(evt: any, el: HTMLElement, ctx: any): boolean;
        /** @inherited */
        resize(): void;
        resizeSmartPanel(initialX: number, initialY: number): void;
        protected _handleResizeEnd(evt: JQueryEventObject, resizeInformation: ResizeInformation): void;
        protected _resizeAccordingToSizeConstraints(resizeInformation: ResizeInformation, elementToResize: HTMLElement): void;
        protected _destroyHoistedMenuOwnerViewIfExists(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.MultiPane {
    class MultiPaneView extends geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView {
        protected _panes: PaneView[];
        protected _selectorView: framework.ui.ViewBase;
        viewModel: MultiPaneViewModel;
        selector: framework.ui.Selector.SelectorViewModel<any>;
        containerElement: HTMLElement;
        headerElement: HTMLElement;
        constructor(app: framework.application.Application, libraryId?: string);
        /**
         * Called when the view has been activated.
         */
        activated(): void;
        /**
         * Called when the view has been deactivated.
         */
        deactivated(): void;
        /**
         * Displays the default panes on the container view.
         * Only runs if no other panes are currently shown.
         */
        addDefaultPanes(): void;
        /**
         * Add a pane item with the specified ID to the layout by creating a new pane and loading the specified pane item.
         * @param paneItemId The ID of the pane item to add.
         */
        addPaneItemById(paneItemId: string): void;
        /**
         * Add a pane item to the layout by creating a new pane and loading the specified pane item.
         * @param paneItem The pane item to be added to the layout.
         */
        addPaneItem(paneItem: any): PaneView;
        canAddPaneItem(paneItem: any): boolean;
        /**
         * Removes a pane item with the specified ID from the layout.
         * @param paneItemId The ID of the pane item to remove.
         */
        destroyPaneItemById(paneItemId: string): void;
        /**
         * Remove a pane item from the layout.
         * @param paneItem The pane item to remove from the layout.
         */
        destroyPaneItem(paneItem: any): boolean;
        canDestroyPaneItem(paneItem: any): boolean;
        /**
         * Removes all pane items from the multi pane view.
         */
        clearPaneItems(): void;
        handleSelectPane(paneItem: any): void;
        handleUnSelectPane(paneItem: any): void;
        handleClickClose(): void;
        handleApplicationResizedEvent(): void;
        handleViewDeactivatedEvent(view: framework.ui.ViewBase): void;
        findPaneForPaneItem(paneItem: any): PaneView;
        protected _executeShowMultiPaneView(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.MultiPane {
    /**
     * Configuration for the Multi Pane view model.
     */
    interface MultiPaneViewModelConfig {
        /** Whether or not to show the header at the top of the multi pane view. */
        headerIsVisible?: boolean;
        /** Whether or not to display a button to close the multi pane view. */
        showXButton?: boolean;
        /** The text to label the drop-down list of pane items. */
        selectorText?: string;
        /** An image URI for an icon to display at the left side of the drop-down selector. */
        selectorIconUri?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.MultiPane {
    /**
     * Configuration for the Pane view model.
     */
    interface PaneViewModelConfig {
        /** Whether or not to show the header at the top of the pane view. */
        headerIsVisible?: boolean;
        /** Whether or not to display a button to close the pane view. */
        showXButton?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Table {
    /**
     * Default view model for a {@link TableView}.
     */
    class TableColumnHeaderViewModel implements TableColumnHeaderViewModelInterface {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        libraryId: string;
        visible: Observable<boolean>;
        value: Observable<any>;
        presentableValue: Observable<string>;
        displayAsUrl: boolean;
        columnDescriptor: Observable<string>;
        sortState: Observable<number>;
        sortClass: Observable<string>;
        _sharedState: geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsAttributeHeaderViewModel.SharedState;
        _sortingPredicate: (a: any, b: any) => number;
        _reverseSortingPredicate: (a: any, b: any) => number;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string, sharedState: geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Table.TableColumnHeaderViewModel.SharedState, displayName: string, type: string, index: number);
        private buildSortingFunction(index);
        private buildReverseSortingFunction(index);
        private buildDateSortingFunction(index);
        private buildReverseDateSortingFunction(index);
        private onSortStateChange(state);
    }
    module TableColumnHeaderViewModel {
        /**
         * Manual comparison function. Slower than native.
         */
        var manualCollator: (a: any, b: any) => number;
        /**
         * The fastest comparison function available.
         */
        var collator: (x: string, y: string) => number;
        /**
         * Holds state shared between columns.
         */
        class SharedState {
            ignoreStateChange: boolean;
            lastSortedColumn: any;
            presentableResults: geocortex.framework.ui.PresentableCollection<any>;
            unsortedClass: string;
            sortedClass: string;
            reverseSortedClass: string;
            constructor(presentableResults: geocortex.framework.ui.PresentableCollection<any>, unsortedClass: string, sortedClass: string, reverseSortedClass: string);
            reset(): void;
        }
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Table {
    class TableColumnViewModelInterface {
        /**
        * A boolean observable indicating whether this column is visible or not. Defaults to true
        */
        visible: Observable<boolean>;
        /**
         * An observable containing the value of this column.
         */
        value: Observable<any>;
        /**
         * An obervable string containing the presentable value of this column.
         */
        presentableValue: Observable<string>;
        /**
         * Indicates whether this value should be rendered as a hyperlink in the table.
         */
        displayAsUrl: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Table {
    class TableColumnHeaderViewModelInterface extends TableColumnViewModelInterface {
        /**
         * The CSS class to be applied depending on which sorting state is selected for the columns
         */
        sortClass: Observable<string>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Table {
    interface TableRowViewModelInterface {
        /**
         * An observable collection containing the columns for this row. This should match the number of defined column headers
         */
        attributes: ObservableCollection<TableColumnViewModelInterface>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Table {
    class TableView extends geocortex.framework.ui.ViewBase {
        /** @inherited */
        app: essentialsHtmlViewer.ViewerApplication;
        /** @inherited */
        viewModel: TableViewModel;
        /** The reference to the element containing this table */
        tableContainerElement: HTMLDivElement;
        private _longPressTimer;
        private _pressStartTime;
        private _firedTouchOrPress;
        private _ignoreMouseEventFlag;
        private _pressYStart;
        private _lastTouchY;
        private _scrollYDeltaThreshold;
        private _firstEvent;
        handleColumnHeadClick(evt: Event, el: HTMLElement, ctx: TableColumnHeaderViewModel): void;
        handleMouseDown(evt: Event, el: HTMLElement, ctx: TableRowViewModelInterface): boolean;
        handleMouseUp(evt: Event, el: HTMLElement, ctx: TableRowViewModelInterface): boolean;
        handleTouchStart(evt: Event, el: HTMLElement, ctx: TableRowViewModelInterface): boolean;
        handleTouchMove(evt: Event, el: HTMLElement, ctx: TableRowViewModelInterface): boolean;
        handleTouchEnd(evt: Event, el: HTMLElement, ctx: TableRowViewModelInterface): boolean;
        handleClick(evt: Event, el: HTMLElement, ctx: TableRowViewModelInterface): boolean;
        handleClickAttributelink(event: Event, element: HTMLAnchorElement, attribute: infrastructure.FeatureAttribute): boolean;
        private _beginLongPressIfNoEventsInProgress(ctx, eventName);
        private _cancelLongPressIfEventInProgress(eventName);
        private _beginLongPress(ctx);
        private _cancelLongPress();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Table {
    /**
     * Default view model for a {@link TableView}.
     */
    class TableViewModel extends geocortex.framework.ui.ViewModelBase {
        /**
         * An observable collection of column headers for the table
         */
        columnHeaders: ObservableCollection<TableColumnHeaderViewModel>;
        /**
         * The various records (rows) contained in this table
         */
        records: ObservableCollection<TableRowViewModelInterface>;
        /**
         * The Presentable Collection, if any, backing this table. This is optional and a module may choose to manipulate the 'records' parameter directly as well.
         */
        presentableRecordCollection: geocortex.framework.ui.PresentableCollection<TableRowViewModelInterface>;
        /**
         * The events to fire when a particular record is clicked with the particular record as context parameter
         */
        recordClickEvents: string[];
        /**
        * The events to fire when a particular record is pressed for a preset duration (1000ms default) with the particular record as context parameter
        */
        recordLongPressEvents: string[];
        /**
         * The amount of time (in milliseconds) after which a press on a record is considered a long press. Defaults to 1000ms.
         */
        recordLongPressDuration: number;
        /** @inherited */
        constructor(app: essentialsHtmlViewer.ViewerApplication, libraryId: string);
        /** Optional */
        attachToPresentableCollection(source: geocortex.framework.ui.PresentableCollection<TableRowViewModelInterface>): void;
        addRecordClickEvents(eventName: string[]): void;
        addRecordClickEvents(eventName: string): void;
        addRecordLongPressEvents(eventName: string[]): void;
        addRecordLongPressEvents(eventName: string): void;
        /**
         * Mode: 0 adds click events. Mode 1 adds long press events
         */
        private _executeAddEvents(eventName, mode);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.undo {
    /**
     * An {@link UndoTransaction} is used to group one or more undo operations into a single item in the undo/redo history.
     * Multiple undo operations can be added to a transaction's private stack. When a transaction is committed, the whole transaction
     * will be pushed to the top of the undo stack of the {@link UndoManager}. Rolling back a transaction will invoke all contained
     * undo operations, but they won't be pushed to the undo history of the {@link UndoManager}.
     */
    class UndoTransaction implements Undoable {
        /** Details about the operation, for example: "Update" may be the display name for an edit operation that updates features. */
        displayName: string;
        /** The {@link TransactionManager} for this transaction. */
        owner: TransactionManager;
        /** The parent transaction containing this instance. The value will be null for top-level transactions. */
        parentTransaction: UndoTransaction;
        /** The status of this transaction (e.g. None, Committed, Aborted) */
        transactionStatus: string;
        /** The list of changes collected during a transaction. The changes are stored in order of occurrence. You should not modify this list. */
        changes: Undoable[];
        /** User state object */
        state: any;
        constructor(owner: TransactionManager, name?: string, state?: any);
        /** Whether this is a top-level transaction. Top-level transactions have no parent and thus are not nested. */
        isTopLevel(): boolean;
        /** Whether we can add more undo operations to the list of changes for this transaction. */
        isComplete(): boolean;
        /** Whether this transaction was aborted (rolled back) */
        isAborted(): boolean;
        /** Whether this transaction was committed. */
        isCommitted(): boolean;
        /**
         * Records an undo operation as part of this transaction. Transactions are undone (or redone) as a single atomic operation.
         * @param undoable The undo operation to record within this transaction.
         */
        add(name: string, undoable: Undoable, state?: any): void;
        protected _wrapInTransaction(name: string, undoable: Undoable, state?: any): UndoTransaction;
        /** Returns a boolean value indicating whether any undo operations have been recorded for this transaction. */
        hasChanges(): boolean;
        /** Commits the undo operation of this {@link UndoTransaction} */
        commit(): Promise<void>;
        /** Rolls back (aborts) the transaction and calls the undo operations to recover the state before the {@link UndoTransaction} was created. */
        rollback(): Promise<void>;
        /** Invokes the `performUndo` method for all contained {@link Undoable}s in the reverse of the order in which they were added. */
        performUndo(state?: any, transaction?: UndoTransaction): Promise<void>;
        /** Invokes the `performRedo` method for all contained {@link Undoable}s in the order in which they were added. */
        performRedo(state?: any, transaction?: UndoTransaction): Promise<void>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.undo {
    interface UndoManagerState {
        historyStack: Undoable[];
        position: number;
        rootTransaction: UndoTransaction;
        status: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.UrlUtils {
    /**
     * Convert a dictionary of query parameters into a string.
     * @param queryStrings The query string dictionary
     * @return The string of all the query parameters
     */
    function queryStringDictionaryToString(queryStrings: Dictionary<string>): string;
    /**
     * Parses a URL query string into a dictionary of key/value pairs.
     */
    function queryStringToDictionary(queryString: string): Dictionary<string>;
    /**
     * Parses a URL into its component parts.
     * @param url The URL to parse.
     */
    function parseUrl(url: string): Location;
    /**
     * Adds (or updates) a query parameter in a URL.
     * @param url The URL to add a parameter to.
     * @param parameter The name of the query parameter to add. If it already exists, the value will be updated.
     * @param value The value for the query parameter.
     */
    function addQueryParameter(url: string, parameter: string, value: string): string;
    /**
     * Removes a query parameter from a URL, if it exists.
     * @param url The URL to add a parameter to.
     * @param parameter The name of the query parameter to remove.
     */
    function removeQueryParameter(url: string, parameter: string): string;
    /**
     * Gets the URL to the containing "folder" for the given URL. For exmple:
     * getFolder("http://server.com/foo/bar/img.jpeg") -> "http://server.com/foo/bar/"
     * getFolder("http://server.com/foo/bar") -> "http://server.com/foo/bar/"
     * Note that the query string and fragment are discarded in the result.
     * @param url The URL to extract the folder from.
     */
    function getFolder(url: string | Location): Location;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.validation {
    /**
     * Validates that a value is a number. The context may specify a flag "invalidNumbersAsNaN", in which
     * case values that aren't numbers will be converted to NaN instead of being rejected.
     */
    class NumberValidator implements Validator<number> {
        validate(value: number, context?: any): Promise<ValidationResult<number>>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.validation {
    /**
     * Validator which sanitizes HTML content to eliminate XSS (cross-site scripting) security risks.
     * This validator has some special functionality surrounding the handling of URIs as they are sanitized:
     *  - When the HTML is sanitized, we place all URIs into an array, replacing them in the HTML with replacement tokens.
     *  - The URIs are then run through the Content Policy instance, which asynchronously determines the fate of each URI. At this point, the user might be prompted about allowing dangerous URIs. The Content Policy overwrites the URIs in-place.
     *  - The manipulated URIs are then injected back into the sanitized HTML, and in the correct locations (token replacement).
     *  - The final sanitized HTML string is returned in the ValidationResult.
     */
    class XssHtmlValidator implements Validator<string> {
        /**
         * Overriding content policy for this validator.
         * Takes precedence over the content policy specified as context to validate().
         */
        protected _contentPolicy: ContentPolicy;
        protected _tokenLeft: string;
        protected _tokenRight: string;
        protected _tokenLeftEscaped: string;
        protected _tokenRightEscaped: string;
        /**
         * Construct an XSS HTML Validator.
         * @param options {@link XssHtmlValidatorOptions}
         */
        constructor(options?: XssHtmlValidatorConstructorOptions);
        /**
         * Sanitize a string of HTML to eliminate XSS risks.
         *  - Use FilterUtils to sanitize the HTML. Compile all URIs into an array, and replace them in the HTML with replacement tokens.
         *  - Pass URIs through the Content Policy (which rewrites them), and insert them back into the HTML (token replacement).
         *  - Return the sanitized HTML.
         * @param html The string HTML which needs to be sanitized.
         * @return String of sanitized HTML.
         */
        validate(html: string, context?: XssHtmlValidatorContext): Promise<ValidationResult<string>>;
        /**
         * Escape the HTML prior to the upcoming insertion of token replacements.
         */
        protected _escape(process: XssHtmlValidatorProcess): XssHtmlValidatorProcess;
        /**
         * Sanitize the HTML.
         * Compile all URIs into an array.
         * Replace all URIs in the HTML with replacement tokens.
         */
        protected _sanitize(process: XssHtmlValidatorProcess, sanitizeOptions?: FilterUtils.SanitizeOptions): XssHtmlValidatorProcess;
        /**
         * Pass URIs through the Content Policy.
         */
        protected _runUrisThroughContentPolicy(process: XssHtmlValidatorProcess): Promise<XssHtmlValidatorProcess>;
        /**
         * Insert the rewritten URIs into the HTML (token replacement).
         */
        protected _applyUris(process: XssHtmlValidatorProcess): XssHtmlValidatorProcess;
        /**
         * Unescape data after replacing tokens.
         */
        protected _unescape(process: XssHtmlValidatorProcess): XssHtmlValidatorProcess;
        /**
         * Turn an index number into a replacement token.
         */
        protected _tokenize(index: number): string;
    }
    /**
     * State involved with performing an XSS HTML validation.
     */
    interface XssHtmlValidatorProcess {
        /** HTML being sanitized. */
        html: string;
        /** Collection of details about each URI. */
        uris: FilterUtils.UriDetails[];
        /** Content policy that will be used. */
        contentPolicy: ContentPolicy;
    }
    /**
     * Filter context provided to the validate() method.
     */
    interface XssHtmlValidatorContext {
        sanitizeOptions?: FilterUtils.SanitizeOptions;
        XssHtmlValidator?: {
            /** Content policy to be used if one hasn't been provided in the validator's constructor. */
            defaultContentPolicy?: ContentPolicy;
        };
    }
    /**
     * Options for the {@link XssHtmlValidator} constructor.
     */
    interface XssHtmlValidatorConstructorOptions {
        /** Content policy that is specific to this validator, overriding the content policy given as context to validate(). */
        contentPolicy?: ContentPolicy;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.validation {
    /**
     * A validator that determines whether the input is a URL that is defined by the Essentials site
     * (i.e. the URL either matches the site endpoint or one of its services).
     */
    class SiteUrlValidator implements Validator<string> {
        app: ViewerApplication;
        private _allowedUrls;
        constructor(app: ViewerApplication);
        validate(value: string, context?: any): Promise<ValidationResult<string>>;
        tryValidateSynchronously(value: string): boolean;
        protected _isMatch(allowedUrl: Location, testUrl: Location): boolean;
        protected _initializeAllowedUrls(): Promise<void>;
        protected _allowUrl(url: string): void;
        protected _extractUrls(text: string): string[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.validation {
    interface ValidationResult<T> {
        /**
         * The result of validation. Generally the validated value will be the same as the input value, however
         * the validator is free to process the original value in some way. For example, an HTML validator may
         * accept an input string as valid HTML, but may strip out <script> tags.
         */
        validatedValue: T;
    }
    /**
     * An object that performs validation on a set of input values.
     */
    interface Validator<T> {
        /**
         * Determines whether a given value is valid.
         * @param value The input value to validate
         * @param context Arbitrary data that provides context for the validation. Some validators may
         *   change their behaviour based on the context.
         * @return A promise of a validation result. If the input is invalid, this will be a rejected promise.
         */
        validate(value: T, context?: any): Promise<ValidationResult<T>>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.VisualizationUtils {
    /**
     * Gets the feature heat map settings for a geocortex layer.
     * @param gcxLayer the layer to get the feature heat map from.
     * @returns The feature heat map or null.
     */
    function getFeatureHeatMap(gcxLayer: essentials.Layer): essentials.FeatureHeatMap;
    /**
     * Gets the heat map renderer for a geocortex layer.
     * @param gcxLayer The layer to get the heat map renderer from.
     * @returns The heat map renderer or null.
     */
    function getHeatMapRenderer(gcxLayer: essentials.Layer): esri.renderer.HeatmapRenderer;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.visualization {
    /**
     * Base implementation of a {@link VisualizationProviderBase}.
     * Not implemented.
     */
    class VisualizationProviderBase {
        /**
         * The {@link geocortex.framework.application.Application} that this provider belongs to.
         */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /**
         * The ID of the library that this provider belongs to.
         */
        libraryId: string;
        /**
         * The ID of the view handling the visualization options for this provider.
         */
        viewId: string;
        /**
         * The display name for this provider in the visualization options.
         */
        displayName: string;
        /**
         * The current geocortex layer this provider is providing visualization options for.
         */
        currentLayer: Observable<essentials.Layer>;
        /**
         * Whether or not this provider is enabled for the current layer.
         */
        isEnabled: Observable<boolean>;
        /**
         * Whether or not this provider is supported for the current layer.
         */
        isSupported: Observable<boolean>;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string);
        /**
         * Initialize the provider.
         * @param config The configuration object.
         */
        initialize(config: VisualizationProviderConfig): void;
        /**
         * Whether or not the given layer supports this visualization provider.
         * @param gcxLayer The layer to check if it supports this visualization.
         */
        canSupport(gcxLayer: essentials.Layer): boolean;
        /**
         * Handles updating the provider settings for the layer being set. This involves
         * setting whether this visualization is enabled and supported for the given layer.
         * @param gcxLayer The current layer.
         */
        handleCurrentLayerChanged(gcxLayer: essentials.Layer): void;
        /**
         * Handles how to activate the visualization for the current layer.
         */
        handleActivate(): void;
        /**
         * Handles how to apply the visualization settings for the current layer.
         */
        handleApply(): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.visualization {
    /**
     * Configuration for the {@link VisualizationProviderBase}.
     */
    interface VisualizationProviderConfig {
        /**
          * The type of the visualization provider.
          */
        type: string;
        /**
         * The ID of the library that this provider belongs to.
         */
        libraryId?: string;
        /**
         * The ID of the view handling the visualization options for this provider.
         */
        viewId?: string;
        /**
         * The display name for this provider in the visualization options.
         */
        displayName?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.highlightedLabel.HighlightedLabelUtils {
    /**
     * Measures the actual rendered size of a text label in pixels. Adding an actual element to the document is expensive, and since the measurement tool will always ask for dimensions of
     * one single fixed font family and size, we cache dimensions for each letter of a font in a dictionary for later reuse. This ensures  only a limited number of page element additions
     * and removals no matter how many labels are measured (this may be a large number if we're measuring actual features on the map using layer actions).
     * @param labelStr The text label to measure label size for
     * @param fontFamily The font family to be applied to the text
     * @param size The size of the text in pixels
     * @return An object with the width and height of the speciified label
     */
    function getLabelSize(labelStr: string, fontFamily: string, fontSize: string, layerId: string): {
        width: number;
        height: number;
    };
    function getTextLines(text: string): string[];
    function generateSvgHighlightLabelPath(width: any, height: any, radius: any, showPointer?: boolean, pointerWidth?: number): string;
    function generateSvgCirclePath(radius: number): string;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Defines the basemap for the map.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface BaseMap {
        /** An array of BaseMapLayer objects defining the basemaps used in the web map. */
        baseMapLayers: BaseMapLayer[];
        /** A string title for the basemap that can be used in a table of contents. */
        title: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Base class for web map operational layers and basemap layers.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface ServiceLayer {
        /** A unique identifying string for the layer. */
        id: string;
        /** The URL to the layer. For well-known basemap types such as Bing Aerial, the URL should be empty. */
        url?: string;
        /** Determines whether the layer is initially visible in the web map. */
        visibility?: boolean;
        /** The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency. */
        opacity?: number;
        /** Not in official spec, but present in some newer web maps. */
        layerType?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Constants for well-known basemap types.
     */
    module BaseMapType {
        const OPEN_STREET_MAP: string;
        const BING_AERIAL: string;
        const BING_ROAD: string;
        const BING_HYBRID: string;
        const WEB_TILED: string;
    }
    /**
     * A layer within a basemap.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface BaseMapLayer extends ServiceLayer {
        /**
         * A special string identifier used when the basemap is from Bing Maps or OpenStreetMap.
         * When this property is included, the url property is not required. One of the BaseMapType constants.
         */
        type?: string;
        /**
         * Determines whether the basemap layer appears on top of all operational layers (true) or beneath all operational layers (false).
         * Typically, this value is set to true on reference layers such as road networks, labels, or boundaries. The default value is false.
         */
        isReference?: boolean;
        /** Not defined in the official spec, but used by AGOL for web tiled layers. */
        templateUrl?: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * A saved geographic extent within a webmap.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface Bookmark {
        /** A string name for the bookmark. */
        name: string;
        /** An extent defining the rectangular area of the bookmark. */
        extent: Extent;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    module OperationalLayerType {
        const CSV: string;
        const WMS: string;
        const KML: string;
    }
    /**
     * An operational layer in a web map.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface OperationalLayer extends ServiceLayer {
        /**
         * If the layer is referenced through a URL, but is not an ArcGIS web service, then this parameter can be supplied to denote the layer type.
         * One of the OperationalLayerType constants.
         */
        type?: string;
        /**
         * A comma-separated string listing which editing operations are allowed on an editable feature service.
         * Available operations include: Create | Delete | Query | Update | Editing.
         */
        capabilities?: string;
        /**
         * A featureCollection object defining a layer of features whose geometry and attributes will be stored directly within the web map.
         * This is only used when no url property is supplied.
         */
        featureCollection?: FeatureCollection;
        /**
         * Optional string containing the item ID of the service if it is registered on ArcGIS Online or your organization's portal.
         * The web map applies any styling and pop-up information contained in the saved item.
         */
        itemId?: string;
        /** A LayerDefinition object defining the attribute schema and drawing information for the layer. Used with CSV and feature layers. */
        layerDefinition?: LayerDefinition;
        /** An array of Layer objects, allowing overrides on pop-up content and drawing behavior for the individual layers of a map service. Used with map services. */
        layers?: Layer[];
        /**
         * A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator; thus,
         * a value of 2400 represents a scale of 1/2,400. A value of 0 indicates that the layer will be visible no matter how far
         * you zoom in.
         */
        maxScale?: number;
        /**
         * A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator; thus,
         * a value of 2400 represents a scale of 1/2,400.
         */
        minScale?: number;
        /**
         * Used with ArcGIS feature services and individual layers in ArcGIS map services, this property determines how the features
         * are retrieved from the server. This property is represented as 0, 1, or 2.
         *
         *   0—Snapshot mode. Immediately retrieves all features when the map is loaded.
         *   1—On-demand mode. Features within the current view extent are retrieved as the user navigates the map. This is the default and the most common way to use feature services in web maps.
         *   2—Selection-only mode. No features are initially retrieved. This mode is used when you have a map service and a feature service from the same parent URL that are working together in the same map, with the map service being used for display and the feature service used for editing.
         */
        mode?: number;
        /**
         * A PopupInfo object defining the content of pop-up windows when you click or query a feature.
         */
        popupInfo?: PopupInfo;
        /** A user-friendly title for the layer that can be used in a table of contents. If this is not included, then a title is derived from the service. */
        title: string;
        /**
         * An array of layers that should appear visible. Used with ArcGIS map services that are not tiled and WMS layers.
         * Will be an array of numbers for ArcGIS map services, and an array of strings for WMS.
         */
        visibleLayers?: any[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * A CSV web map layer.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface CsvLayer extends OperationalLayer {
        /**
         * A string defining the character used to separate columns in a CSV file. You can set this property
         * using any of the following: ",", " ", ";", "|", "\t". Used with CSV layers only.
         */
        columnDelimiter: string;
        /**
         * A LocationInfo object defining how location information will be retrieved from a CSV file. Used with CSV layers only.
         */
        locationInfo: LocationInfo;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Defines how location information will be retrieved from a CSV file referenced through the web.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface LocationInfo {
        /** A string whose value is always "coordinates". */
        locationType: string;
        /** A string defining the field name that holds the latitude (Y) coordinate. */
        latitudeFieldName: string;
        /** A string defining the field name that holds the longitude (X) coordinate. */
        longitudeFieldName: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    module RendererType {
        const SIMPLE: string;
        const UNIQUE_VALUE: string;
        const CLASS_BREAKS: string;
        const HEATMAP: string;
    }
    module NormalizationType {
        const BY_FIELD: string;
        const BY_LOG: string;
        const BY_PERCENT_OF_TOTAL: string;
    }
    module ClassificationMethod {
        const NATURAL_BREAKS: string;
        const EQUAL_INTERVAL: string;
        const QUANTILE: string;
        const STANDARD_DEVIATION: string;
        const GEOMETRICAL_INTERVAL: string;
    }
    /**
     * Defines how features are rendered on the map.
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/renderer.html).
     */
    interface Renderer {
        /** The type of renderer. One of the RendererType constants. */
        type: string;
    }
    /**
     * A renderer that uses one symbol only.
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/renderer.html).
     */
    interface SimpleRenderer extends Renderer {
        symbol: Symbol;
        label: string;
        description: string;
    }
    /**
     * A unique value renderer symbolizes groups of features that have matching field values.
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/renderer.html).
     */
    interface UniqueValueRenderer extends Renderer {
        field1: string;
        field2?: string;
        field3?: string;
        fieldDelimiter?: string;
        defaultSymbol?: Symbol;
        defaultLabel?: string;
        uniqueValueInfos: UniqueValueInfo[];
    }
    interface UniqueValueInfo {
        value: any;
        label?: string;
        description?: string;
        symbol: Symbol;
    }
    /**
     * A class breaks renderer symbolizes each feature based on the value of some numeric field.
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/renderer.html).
     */
    interface ClassBreaksRenderer extends Renderer {
        field: string;
        /** One of the ClassificationMethod constants. */
        classificationMethod: string;
        /** One of the NormalizationType constants. */
        normalizationType?: string;
        /** Used when normalizationType is NormalizationType.BY_FIELD. */
        normalizationField?: string;
        /** Used when normalizationType is NormalizationType.BY_FIELD. */
        normalizationTotal?: number;
        defaultSymbol: Symbol;
        defaultLabel: string;
        /** Supported only for polygon features. */
        backgroundFillSymbol?: SimpleFillSymbol;
        minValue?: number;
        classBreakInfos: ClassBreakInfo[];
    }
    interface ClassBreakInfo {
        classMinValue?: number;
        classMaxValue: number;
        label?: string;
        description?: string;
        symbol: Symbol;
    }
    interface HeatmapRenderer extends Renderer {
        blurRadius: number;
        field?: string;
        maxPixelIntensity: number;
        minPixelIntensity: number;
        colorStops: ColorStop[];
    }
    interface ColorStop {
        ratio: number;
        color: Color;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    module DomainType {
        const INHERITED: string;
        const RANGE: string;
        const CODED_VALUE: string;
    }
    /**
     * A domain specifies the set of valid values for a field.
     *
     * Part of the Esri ArcGIS Server REST API (see http://resources.arcgis.com/en/help/rest/apiref/).
     */
    interface Domain {
        /** One of the DomainType constants. */
        type: string;
    }
    interface InheritedDomain extends Domain {
    }
    /**
     * Range domain specifies a range of valid values for a field.
     */
    interface RangeDomain extends Domain {
        /** The name of the domain. */
        name: string;
        /** An array in the format [<minValue>, <maxValue>]. */
        range: number[];
    }
    /**
     * Coded value domain specifies an explicit set of valid values for a field. Each valid value is assigned a unique name.
     */
    interface CodedValueDomain extends Domain {
        /** The name of the domain. */
        name: string;
        /** The set of valid coded values. */
        codedValues: CodedValue[];
    }
    interface CodedValue {
        /** The human-readable name for the coded value. */
        name: string;
        /** The unique code for the coded value. */
        code: any;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * The drawingInfo object contains drawing information for a feature collection or a single layer in a map service. This object is used in LayerDefinition.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface DrawingInfo {
        /** A renderer object that provides the symbology for the layer. */
        renderer?: Renderer;
        /**
         * Indicates whether symbols should stay the same size in screen units as you zoom in.
         * A value of true means the symbols stay the same size in screen units regardless of the map scale.
         */
        fixedSymbols?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * A feature of the map.
     *
     * Part of the Esri ArcGIS Server REST API. See http://resources.arcgis.com/en/help/rest/apiref/.
     */
    interface Feature {
        /**
         * The feature attributes. It is a JSON object that contains a dictionary of name-value pairs.
         * The names are the feature field names. The values are the field values and they can be any of the
         * standard JSON types - string, number and boolean. Note that date values are encoded as numbers.
         * The number represents the number of milliseconds since epoch (January 1, 1970) in UTC.
         */
        attributes?: {
            [name: string]: any;
        };
        /** The feature geometry. */
        geometry?: Geometry;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Defines a layer of features whose geometry and attributes will be stored directly within the web map.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface FeatureCollection {
        /** An array of Layer objects defining all the styling, geometry, and attribute information for the features. */
        layers: Layer[];
        /**  Indicates if this layer should be shown in the legend in client applications. The default is true. */
        showLegend: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Contains the geometry and attributes of features in a layer. This object is used with feature collections only. For more information, see Layer.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface FeatureSet {
        /** An array of Feature objects, each one containing geometry and a set of attributes. */
        features: Feature[];
        /** One of the GeometryType constants. */
        geometryType: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Contains information about an attribute field. This field could come from a feature collection or a single layer in a map service. Used in layerDefinition.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface Field {
        /** The field alias (human-readable name). */
        alias: string;
        /** A domain object that provides the attribute domain information for the field, if a domain exists. */
        domain?: Domain;
        /** Whether this field is editable. */
        editable: boolean;
        /** A number defining how many characters are allowed in a string field. */
        length?: number;
        /** A string defining the field name. */
        name: string;
        /** Whether this field can have a null value. */
        nullable: boolean;
        /** One of the EsriFieldTypes constants defined in the Essentials API. */
        type: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Geometry type constants used in ArcGIS REST API and web map specifications.
     */
    module GeometryType {
        const POINT: string;
        const MULTIPOINT: string;
        const POLYLINE: string;
        const POLYGON: string;
        const EXTENT: string;
        /**
         * Converts from geometry type constants used in the esri JavaScript API to their web map equivalents.
         */
        function fromEsriGeometryType(type: string): string;
    }
    /**
     * A geometry as defined in the ArcGIS REST API and web map specifications.
     *
     * See http://resources.arcgis.com/en/help/rest/apiref/geometry.html.
     */
    interface Geometry {
        spatialReference?: SpatialReference;
    }
    interface Point extends Geometry {
        x: number;
        y: number;
        z?: number;
        m?: number;
    }
    interface MultiPoint extends Geometry {
        hasM?: boolean;
        hasZ?: boolean;
        points: number[][];
    }
    interface Polyline extends Geometry {
        hasM?: boolean;
        hasZ?: boolean;
        paths: number[][][];
    }
    interface Polygon extends Geometry {
        hasM?: boolean;
        hasZ?: boolean;
        rings: number[][][];
    }
    interface Extent extends Geometry {
        xmin?: number;
        xmax?: number;
        ymin?: number;
        ymax?: number;
        zmin?: number;
        zmax?: number;
        mmin?: number;
        mmax?: number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * This object allows overrides on pop-up content and drawing behavior for individual layers of a web service.
     * When used with a feature collection, this object also contains geographic features and their attributes.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface Layer {
        /** A featureSet object containing the geometry and attributes of the features in the layer.Used with feature collections only. */
        featureSet?: FeatureSet;
        /** A number indicating the index position of the layer in the WMS or map service. */
        id?: number;
        /** An array of LayerDefinition objects defining the attribute schema and drawing information for the layer. */
        layerDefinition?: LayerDefinition;
        /**
         * A URL to a service that should be used for all queries against the layer. Used with hosted tiled map services on
         * ArcGIS Online when there is an associated feature service that allows for queries.
         */
        layerUrl?: string;
        /** A URL to a legend graphic for the layer.Used with WMS layers.The URL usually contains a GetLegendGraphic request. */
        legendUrl?: string;
        /** A unique name for the layer. Used with WMS layers, where it can sometimes be derived from the layer's index position. */
        name?: string;
        /** A user-friendly title for the layer that can be used in a table of contents. Used with WMS layers. */
        title?: string;
        /** A popupInfo object defining the pop-up window content for the layer. */
        popupInfo?: PopupInfo;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * The LayerDefinition object defines the attribute schema and drawing information for a layer drawn using
     * client-side graphics. This could include a feature collection, a CSV file referenced through the web, or
     * a single layer in an ArcGIS map service. Also used for dynamic layers.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface LayerDefinition {
        /** An optional SQL-based definition expression that narrows down the data to be displayed in the layer. Used with ArcGIS Server map services. */
        definitionExpression?: string;
        /** The name of the field that best summarizes the feature. Values from this field are used by default as the titles for pop-up windows. */
        displayField?: string;
        /** A drawingInfo object containing drawing, labeling, and transparency information for the layer. */
        drawingInfo?: DrawingInfo;
        /** An array of Field objects containing information about the attribute fields for the feature collection or layer. */
        fields?: Field[];
        /** The type of geometry used in the layer definition. One of the GeometryType constants. */
        geometryType?: string;
        /** Indicates whether attachments should be loaded for the layer. */
        hasAttachments?: boolean;
        /**
         * A number representing the maximum scale at which the layer definition will be applied. The number is the scale's
         * denominator; thus, a value of 2400 represents a scale of 1/2,400. A value of 0 indicates that the layer definition
         * will be applied no matter how far you zoom in.
         */
        maxScale?: number;
        /**
         * A number representing the minimum scale at which the layer definition will be applied. The number is the scale's
         * denominator; thus, a value of 2400 represents a scale of 1/2,400.
         */
        minScale?: number;
        /**
         * A string containing a unique name for the layer that could be displayed in a legend.
         */
        name?: string;
        /**
         * Indicates the name of the object ID field in the dataset.
         */
        objectIdField?: string;
        /**
         * An array of template objects describing features that can be created in this layer.
         * Templates are used with map notes, other feature collections, and editable web-based CSV layers.
         * They are not used with ArcGIS feature services, which already have feature templates defined in the service.
         *
         * Templates are defined as a property of the layer definition when there are no types defined; otherwise, templates
         * are defined as properties of the types.
         */
        templates?: Template[];
        /** Indicates whether the layerDefinition applies to a "Feature Layer" or a "Table". */
        type?: string;
        /**
         * The name of the field holding the type ID for the features, if types exist for the dataset. Each available type has an ID,
         * and each feature's typeIdField can be read to determine the type for each feature.
         */
        typeIdField?: string;
        /**
         * An array of Type objects available for the dataset. This is used when the typeIdField is populated.
         *
         * Types contain information about the combinations of attributes that are allowed for features in the dataset. Each feature
         * in the dataset can have a type, indicated in its typeIdField.
         */
        types?: Type[];
        /** Not documented in spec, but supported by ArcGIS online. Used for dynamic layers. */
        source?: {
            type: string;
            mapLayerId?: number;
        };
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Defines the look and feel of pop-up windows when users click or query a feature.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface PopupInfo {
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Spatial references are defined using a well-known ID (wkid) or well-known text (wkt).
     *
     * Part of the Esri ArcGIS REST API (see http://resources.arcgis.com/en/help/rest/apiref/geometry.html).
     */
    interface SpatialReference {
        wkid: number;
        wkt: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Templates describe features that can be created in a layer. Templates are used with
     * map notes, other feature collections, and editable web-based CSV layers. They are not
     * used with ArcGIS feature services, which already have feature templates defined in the service.
     *
     * Templates are defined as a property of the layer definition when there are no types defined;
     * otherwise, templates are defined as properties of the types.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface Template {
        /** A detailed description of the template. */
        description?: string;
        /** An optional string that can define a client-side drawing tool to be used with this feature. See the web map specification for more details. */
        drawingTool?: string;
        /** A string containing a user-friendly name for the template. This name could appear on a menu of feature choices displayed in the client editing environment. */
        name: string;
        /** A feature object representing a prototypical feature for the template. */
        prototype: Feature;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Types contain information about the combinations of attributes allowed for features in the dataset.
     * Each feature in the dataset can have a type, indicated in its typeIdField, which is used in LayerDefinition.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface Type {
        /** A set of domain objects for each domain in the type. */
        domains: {
            [fieldName: string]: Domain;
        };
        /** A unique numerical ID for the type. */
        id: number;
        /** A string containing a user-friendly name for the type. This might be shown on a menu of feature types that editors can create in the collection. */
        name: string;
        /**
         * An array of template objects describing features that can be created in this layer. Templates are used with map notes,
         * other feature collections, and editable web-based CSV layers. They are not used with ArcGIS feature services, which
         * already have feature templates defined in the service.
         *
         * Templates are defined as a property of the layer definition when there are no types defined; otherwise, templates are
         * defined as properties of the types.
         *
         * You might have more than one template per type if the attributes of available features vary slightly. For example,
         * you might have a type named Copper pipe containing two templates: one whose DIAMETER property is 12 and another whose
         * DIAMETER property is 10.
         */
        templates: Template[];
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * An Esri web map.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface WebMap {
        /**
         * The set of operational layers in the web map.
         * Layers are drawn based on the index position in the array; The first layer in the array is
         * the first layer drawn, the next layer in the array is drawn on top of it, and so on.
         */
        operationalLayers: OperationalLayer[];
        /**
         * The map's basemap layer(s).
         * Layers are drawn based on the index position in the array; The first layer in the array is
         * the first layer drawn, the next layer in the array is drawn on top of it, and so on.
         */
        baseMap: BaseMap;
        /**
         * Bookmarks that are saved with the map.
         */
        bookmarks?: Bookmark[];
        /** The web map specification version. At the time of this writing, this should be "1.7". */
        version: string;
        /**
         * An arbitrary collection of name/value pairs used to store application data.
         * Not part of the official web map specification, but used with AGOL.
         */
        applicationProperties?: {
            [name: string]: any;
        };
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * Provides a set of filters for use with {@link: ObjectFilter.filter} corresponding to web map interfaces.
     */
    class WebMapFilter {
        app: ViewerApplication;
        private _numberValidator;
        private _urlValidator;
        private _baseMap;
        private _baseMapLayer;
        private _bookmark;
        private _color;
        private _csvLayer;
        private _domain;
        private _inheritedDomain;
        private _rangeDomain;
        private _codedValueDomain;
        private _drawingInfo;
        private _feature;
        private _featureCollection;
        private _featureSet;
        private _field;
        private _geometry;
        private _point;
        private _multipoint;
        private _polyline;
        private _polygon;
        private _extent;
        private _layer;
        private _layerDefinition;
        private _locationInfo;
        private _operationalLayer;
        private _renderer;
        private _simpleRenderer;
        private _uniqueValueRenderer;
        private _classBreaksRenderer;
        private _heatmapRenderer;
        private _serviceLayer;
        private _spatialReference;
        private _symbol;
        private _simpleMarkerSymbol;
        private _simpleLineSymbol;
        private _simpleFillSymbol;
        private _pictureMarkerSymbol;
        private _pictureFillSymbol;
        private _textSymbol;
        private _template;
        private _type;
        private _webMap;
        private _wmsLayer;
        private _unknown;
        constructor(app: ViewerApplication);
        baseMap: any;
        baseMapLayer: any;
        bookmark: any;
        color: any;
        csvLayer: any;
        domain: any;
        inheritedDomain: any;
        rangeDomain: any;
        codedValueDomain: any;
        drawingInfo: any;
        feature: any;
        featureCollection: any;
        featureSet: any;
        field: any;
        geometry: any;
        point: any;
        multiPoint: any;
        polyline: any;
        polygon: any;
        extent: any;
        layer: any;
        layerDefinition: any;
        locationInfo: any;
        operationalLayer: any;
        popupInfo: any;
        renderer: any;
        serviceLayer: any;
        simpleRenderer: any;
        uniqueValueRenderer: any;
        classBreaksRenderer: any;
        heatmapRenderer: any;
        protected _serviceLayerCommon: any;
        spatialReference: any;
        symbol: any;
        simpleMarkerSymbol: any;
        simpleLineSymbol: any;
        simpleFillSymbol: any;
        pictureMarkerSymbol: any;
        pictureFillSymbol: any;
        textSymbol: any;
        template: any;
        type: any;
        webMap: any;
        wmsLayer: any;
        /**
         * A generic filter for objects whose schema is unknown.
         */
        object: any;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    class WebMapManager {
        app: ViewerApplication;
        convert: WebMapConverter;
        filter: WebMapFilter;
        constructor(app: ViewerApplication);
        /**
         * Exports the current state of the viewer to ArcGIS web map format.
         */
        create(): Promise<WebMap>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.webMap {
    /**
     * A WMS web map layer.
     *
     * Part of the Esri web map specification. See http://resources.arcgis.com/en/help/arcgis-web-map-json/.
     */
    interface WmsLayer extends OperationalLayer {
        /** A string containing copyright and access information for a WMS layer. This is copied from the capabilities document exposed by the WMS. */
        copyright: string;
        /** The rectangular map extent that should be requested from the service, given in the format [[xmin, ymin],[xmax,ymax]]. */
        extent: Extent;
        /**
         * An optional string containing the image format to be requested from a WMS. The default is png,
         * and this property only needs to be specified if a different image format will be requested, such as jpg.
         */
        format: string;
        /** The URL of the WMS map. You should also supply the url property, which is the URL of the WMS capabilities document. */
        mapUrl: string;
        /** A number defining the maximum height, in pixels, that should be requested from the service. */
        maxHeight?: number;
        /** A number defining the maximum width, in pixels, that should be requested from the service. */
        maxWidth?: number;
        /** An array of numbers containing well-known IDs for spatial references supported by the service. */
        spatialReferences: [number];
        /** A string containing the version number of the service. */
        version: string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure {
    module ObjectFilter {
        const FILTERED: {};
        /**
         * Filters an object graph according to the rules defined in a filter.
         * Returns an object graph with the same structure as the original, minus any properties that were removed
         *     by the filter. Note that prototype chains are NOT preserved by this method -- the result will be a
         *     simple instance of Object. Cycles and shared object references within the input object will be
         *     preserved in the output (presuming that they pass the filter).
         * @param object The object graph to filter.
         * @param filter A value that determines which properties of the original object are kept in the
         * result. A filter can take on one of the following values:
         *   1. A boolean value. If true, then the value will be retained, otherwise it will be discarded.
         *   2. An object. Each property defined on the filter is itself a filter that is applied to the equivalent
         * property on the orginal object. Any properties that are not defined in the filter are automatically
         * excluded from the original object.
         *   3. An instance of {@link validation.Validator}. The value will be checked against
         * the validator's `validate()` method, and will be kept only if the validation is successful.
         *   4. A callback function. The function will be invoked with the value, and the result will be used to
         * perform further filtering.
         *
         * For array properties, the filter value can be an object containing a single property named `item`. In
         * this case, the value of the filter's `item` property will be used to filter each item in the array, using
         * the same rules as above.
         * @param context Arbitrary data that will be passed to validators and callbacks within the filter.
         */
        function filter(object: Object, filter: any, context?: any): Promise<Object>;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.legend {
    class LegendItem {
        templateType: string;
        numChildren: number;
        esriLayer: esri.layers.Layer;
        essLayer: essentials.Layer;
        sublayerId: string;
        swatchElement: string;
        isCluster: boolean;
        label: Observable<string>;
        description: Observable<string>;
        isVisible: Observable<boolean>;
        isVisibleInLayerListLegend: Observable<boolean>;
        expanded: Observable<boolean>;
        expanderClass: Observable<string>;
        children: ObservableCollection<LegendItem>;
        constructor(layer: esri.layers.Layer, useThrottledCollection?: boolean);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.legend {
    enum LegendItemProviderResponseCode {
        NotFound = 0,
        Rendered = 1,
        Show = 2,
        Hide = 3,
        Pending = 4,
        Error = 5,
    }
    class LegendItemProviderResponse {
        code: Observable<number>;
        item: LegendItem;
        constructor(code: LegendItemProviderResponseCode, item: LegendItem);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.legend {
    interface LegendItemProvider {
        supportsOffline(): boolean;
        provide(layer: esri.layers.Layer): LegendItemProviderResponse;
        useThrottledCollections?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.legend {
    interface LegendItemProviderConstructor {
        (layer: esri.layers.Layer): any;
    }
    class LegendItemProviderEntry {
        identifier: string;
        private _provider;
        constructor(identifier: string, provider: LegendItemProvider);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.legend {
    class LegendItemProviderFactory {
        private static _providers;
        private static _legendItemInfos;
        private static _legendItemCallbacks;
        static registerLegendItemProvider(provider: LegendItemProvider): void;
        static getProviders(): Array<LegendItemProvider>;
        /**
         * Convenience method to get legend item using a layerInfo object instance
         */
        static getLegendItemWhenAvailable(layer: infrastructure.gis.LayerInfo, callback: (legendItem: LegendItem) => void): void;
        /**
         * This function will invoke the provided callback only when (and if) the legend Item in question is retrieved. If it's not retrieved because of the legend
         * module not being loaded or in case of some unforeseen error, it will simply do nothing. Programmers should be aware of this while calling this function.
         * @param uniqueId A uniqueId parameter which is of the form <mapServiceId.layerId> for layers or simply the mapService id in case of map services
         * @param callback A callback function which will be invoked if, and when, the requested legend item becomes available.
         */
        static getLegendItemByIdWhenAvailable(uniqueId: string, callback: (legendItem: LegendItem) => void): void;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs {
    interface IdentifyArgs {
        geometry: esri.geometry.Geometry;
        source: string;
        extent?: esri.geometry.Extent;
        width?: number;
        height?: number;
        pixelTolerance?: number;
        polygonPixelTolerance?: number;
        topMostLayerOnly?: boolean;
        visibleLayersOnly?: boolean;
        visibleMapServicesOnly?: boolean;
        layersInVisibleScaleRangeOnly?: boolean;
        returnGeometry?: boolean;
        delayFSCOpen?: boolean;
        layerRestriction?: (layer: geocortex.essentials.Layer) => boolean;
        doNotBuffer?: boolean;
        identifiableLayerInfo?: infrastructure.identify.IdentifiableLayerInfo[];
        restrictRasterIdentifyToPoint?: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    class ResultsPageChangedEventArgs {
        /**
         * The collection of feature sets the event is occurring for.
         */
        featureSetCollection: FeatureSetCollection;
        /**
         * The new value of the results page.
         */
        newValue: ObservableCollection<Feature>;
        /**
         * Initializes a new instance of the {@link ResultsPageChangedEventArgs} class.
         */
        constructor();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface GeometryEditCompletedEventArg {
        editedGraphic: esri.Graphic;
        originalGraphic: esri.Graphic;
        cancelled: boolean;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.gis {
    class AppInfo {
        gcxApp: geocortex.essentialsHtmlViewer.ViewerApplication;
        /**
         * The URL of a geometry service to use for the application. For Geocortex Essentials viewer applications,
         * this value should be left blank.
         */
        geometryServiceUrl: string;
        urlParameters: {
            [key: string]: string;
        };
        mapInfo: MapInfo;
        map: esri.Map;
        essentialsVersion: number;
        private _geometryService;
        static fromGeocortexApp(app: geocortex.essentialsHtmlViewer.ViewerApplication): AppInfo;
        getGeometryService(): esri.tasks.GeometryService;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.gis {
    class FieldInfo {
        name: string;
        type: string;
        alias: string;
        isVisible: boolean;
        searchable: boolean;
        editable: boolean;
        nullable: boolean;
        length: number;
        esriField: esri.layers.Field;
        domainInfo: DomainInfo;
        domain: esri.layers.Domain;
        isTypeField: boolean;
        format: string;
        timeZoneId: string;
        displayTimeZoneId: string;
        /**
         * A list of the field's domains for each subtype, indexed by type ID.
         */
        subtypeDomains: {
            [typeID: string]: esri.layers.Domain;
        };
        subtypeDomainInfos: {
            [typeID: string]: DomainInfo;
        };
        constructor();
        static fromEsriField(esriField: esri.layers.Field, featureLayer?: esri.layers.FeatureLayer, gcxField?: geocortex.essentials.Field): FieldInfo;
        static fromGcxField(gcxField: geocortex.essentials.Field): FieldInfo;
        isNumeric(): boolean;
        isDate(): boolean;
        isText(): boolean;
        isCodedValueDomain(): boolean;
        hasSubtypeCodedValueDomains(): boolean;
        getCodedValueDomain(): esri.layers.CodedValueDomain;
        getSubtypeCodedValueDomains(): {
            [typeID: string]: esri.layers.CodedValueDomain;
        };
        resolveCodedDomainValue(code: any, typeID?: string): string;
        formatValue(value: any, typeID?: string): string;
        private _correctDatesForDisplay(date);
        /**
         * Determines if values should be formatted as a number.
         */
        private _isNumericFormat();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.gis {
    class LayerInfo {
        id: string;
        name: string;
        displayName: string;
        serviceLayerInfo: ServiceLayerInfo;
        esriLayerInfo: esri.layers.LayerInfo;
        gcxLayer: geocortex.essentials.Layer;
        uniqueId: string;
        url: string;
        queryable: boolean;
        fields: FieldInfo[];
        dataProvider: string;
        parentLayerId: string;
        subLayerIds: string[];
        isUserCreated: boolean;
        includeInLayerList: boolean;
        isExpanded: boolean;
        relationships: esri.layers.Relationship[];
        /**
        * Whether the layer represented by this layerInfo object is currently visible or not.
        */
        private _visible;
        private _fieldsRetrieved;
        private _featureLayer;
        constructor();
        static fromEsriLayerInfo(esriLayerInfo: esri.layers.LayerInfo, esriLayer: esri.layers.Layer): LayerInfo;
        static fromEsriFeatureLayer(featureLayer: esri.layers.FeatureLayer): LayerInfo;
        static fromGcxLayer(gcxLayer: geocortex.essentials.Layer): LayerInfo;
        getFields(): dojo.Deferred;
        getInitializedFeatureLayer(): Promise<esri.layers.FeatureLayer>;
        setDefinitionExpression(definition: string): void;
        getDefinitionExpression(): string;
        /**
         * Returns whether or not the layer represented by this layerInfo object is currently visible on the map. */
        isVisible(): boolean;
        /**
         * Gets a value representing whether or not all of this layer's ancestors are currently visible in the map. */
        areAllAncestorsVisible(): boolean;
        /**
         * Sets the visibility for this layer.
         * @param visible Specifies if the layer is visible or not
         * @param doNotRefresh An optional parameter which if true, will set the visible layers internally but will not refresh the map automatically. Only applicable for
         * mapServices that support layer visibility. Defaults to false.
         * @param applyDeferredRefresh An optional parameter which if true, will refresh the map after a specified timeout in ms. Only applicable for mapServices that support
         * layer visibility. 'applyDeferredRefresh' will ensure that only once refresh request is sent for all setVisibility requests within the given threshold. Defaults to false.
         * @param refreshTimeoutMs The timeout in ms after which to refresh the map if applyDeferredRefresh is true. Defaults to 150ms.
         */
        setVisibility(visible: boolean, doNotRefresh?: boolean, applyDeferredRefresh?: boolean, refreshTimeoutMs?: number): void;
        setEsriLayerVisibility(visible: boolean, doNotRefresh?: boolean): void;
        getMinScale(): number;
        getMaxScale(): number;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.gis {
    class MapInfo {
        serviceLayers: ServiceLayerInfo[];
        gcxMap: geocortex.essentials.Map;
        map: esri.Map;
        markupLayer: Observable<esri.layers.GraphicsLayer>;
        constructor();
        static fromEsriMap(map: esri.Map): MapInfo;
        static fromViewerApp(app: geocortex.essentialsHtmlViewer.ViewerApplication): MapInfo;
        static fromEssentialsMap(map: geocortex.essentials.Map): MapInfo;
        getLayerInfos(): LayerInfo[];
        getTableInfos(): LayerInfo[];
        getGraphicsLayers(): esri.layers.GraphicsLayer[];
        findMapServiceById(id: string): ServiceLayerInfo;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.gis {
    class DomainInfo {
        domain: esri.layers.Domain;
        constructor();
        static create(domain: esri.layers.Domain): DomainInfo;
        isCodedValueDomain(): boolean;
        getCodedValueDomain(): esri.layers.CodedValueDomain;
        getName(code: any): string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.eventArgs {
    interface ActiveToolChangedEventArgs {
        tool: essentialsHtmlViewer.mapping.infrastructure.tools.ToolBase;
        previousTool: essentialsHtmlViewer.mapping.infrastructure.tools.ToolBase;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.identify {
    /**
     * Very similar to the SearchProviderBase.
     */
    class IdentifyProviderBase {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        libraryId: string;
        isEnabled: boolean;
        constructor(app: geocortex.essentialsHtmlViewer.ViewerApplication, libraryId: string);
        /**
         * Initialize the provider.
         * @param config The configuration object.
         */
        initialize(config: any): void;
        /**
         * Performs the search.
         * @param fsc Where search results are to go.
         * @param searchText What to search for.
         */
        search(fsc: geocortex.essentialsHtmlViewer.mapping.infrastructure.FeatureSetCollection, args: infrastructure.commandArgs.IdentifyArgs): void;
        /**
         * Cancels the last search. May be called repeatedly.
         */
        cancelSearch(): void;
        /**
         * Gets a language resource from the Application's resource dictionary, given a key, and optional locale.
         * Returns null if the resource does not exist.
         * @param key The resource key.
         * @param locale The locale of the resource to fetch. Defaults to the current application locale.
         */
        getResource(resourceKey: string, locale?: string): string;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    /**
     * A category (a.k.a. folder) item in the layer list.
     */
    class LayerListFolderItem extends LayerListItem {
        /**
         * A collection containing the layer theme settings for this category. Theme settings for mapServices and layers will reside in their respective geocortex layers.
         */
        layerThemeSettings: essentials.LayerThemeSetting[];
        /**
         * An array of mapServices this folder contains. This information is important for establishing mapService visibility bindings and deciding if transparency sliders should be displayed
         */
        containedMapServices: gis.ServiceLayerInfo[];
        /**
         * A boolean indicating whether this folder item was originally configured visible or not. We need to know what state to return to while applying layer themes
         */
        configuredVisible: boolean;
        /**
         * Initializes a new instance of the {@link LayerListFolderItem} class.
         */
        constructor(id: string, name: string, layerList: infrastructure.layerList.LayerList);
        /**
         * Set the visibility of this category in the layer list
         */
        setVisibility(visible: boolean): void;
        refreshOnDemandItemCollection(expanded?: boolean): void;
        /**
         * Links the current folder with a mapService so we can perform specialized operations like listening for mapService visibility changes, showing transparency sliders etc.
         */
        linkWithMapService(mapService: gis.ServiceLayerInfo): void;
        /** @private */
        _setupOpacityBindings(): void;
        /** @private */
        private _handleLayerThemeChangedEvent(args);
        /**
         * When a layer theme is changed, all folder visibilities are initially set to true so the layer list will
         * respect the visibility change events fired by the javascript api on theme change.
         * The javascript api however, has no notion of folders. Subsequently, when folder settings are applied, the
         * correct state is activated by the layer list. This causes a problem when a folder is a mutually exclusive
         * radio item. The UI will only allow one item to remain checked.... so if there are two items A and B where
         * B is a folder and is turned on, the UI flicks off A though the layer list state may have it turned on.
         * Subsequently, due to theme settings, if the layer list turns B off, the UI does not update the state of A
         * automatically. We'll need to pulse A if it's visible.
         * @private
         */
        private _refreshMutuallyExclusiveItemVisibilities();
        /** @private */
        private _setInActiveThemeIfChildrenPresent();
        /** @private */
        private _recursivelyConfirmChildrenInActiveTheme(children);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    /**
     * An item in the layer list that corresponds to a layer.
     */
    class LayerListLayerItem extends LayerListItem {
        private _themeSyncHandle;
        private _deferRefreshTimeoutMs;
        _forceSetAncestorVisibilityOperationActive: boolean;
        layer: geocortex.essentialsHtmlViewer.mapping.infrastructure.gis.LayerInfo;
        /**
         * Creates a new instance of the {@link LayerListLayerItem} class.
         */
        constructor(id: string, layer: geocortex.essentialsHtmlViewer.mapping.infrastructure.gis.LayerInfo, layerList: infrastructure.layerList.LayerList, type?: LayerListItemType);
        /**
         * Set the visibility of this layer in the layer list
         */
        setVisibility(visible: boolean, forceSetAncestorVisibility?: boolean): void;
        /**
         * Updates the legend items including the legend swatch for a layer item.
         */
        updateLegendItems(): void;
        /**
         * Updates inActiveTheme when it changes in the underlying geocortex layer (if available)
         */
        bindToActiveTheme(): void;
        /**
         * Removes the binding to the active theme
         */
        unbindFromActiveTheme(): void;
        /** @private */
        private _subscribeEvents();
        /** @private */
        private _onServiceLayerProcessed();
        /** @private */
        private _handleLayerVisibilityChange(results);
        /** @private */
        private _populateLegendItem(item);
        /** @private */
        private _setupIconUri();
        /**
         * @private
         * Sets up geocortex layer bindings if the layer is available. The layer will not be available if we're operating in a WAB environment
         */
        private _setupGcxBindingsIfAvailable();
        /** @private */
        private _updateVisibilityAtCurrentScale();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    /**
     * An item in the layer list that corresponds to a layer.
     */
    class LayerListGraphicsLayerItem extends LayerListLayerItem {
        /**
         * Creates a new instance of the {@link LayerListLayerItem} class.
         */
        constructor(id: string, layer: gis.LayerInfo, layerList: infrastructure.layerList.LayerList);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    /**
     * A collection of child items belonging to a node in the layer list.
     */
    class LayerListItemCollection extends ObservableCollection<LayerListItem> {
        private _parent;
        layerList: LayerList;
        /**
         * Creates a new instance of the {@link LayerListItemCollection} class.
         */
        constructor(parent: LayerListItem, childItemArray?: LayerListItem[]);
        /**
         * Adds an item to the collection. Overriding base class method so parent can automatically be set while inserting
         */
        addItem(item: LayerListItem): void;
        /**
         * Adds an item after performing validation. Returns true if successful, false otherwise.
         */
        validateAndAddItem(item: LayerListItem): boolean;
        /**
         * Adds multiple items to the collection. Overriding base class method so parent can automatically be set while inserting
         */
        addItems(items: LayerListItem[]): void;
        /**
         * Adds multiple items after validating all of them. Will either add all or none. Returns true on success, false otherwise.
         */
        validateAndAddItems(items: LayerListItem[]): boolean;
        /**
         * Inserts an item into the collection at the specified index. Overriding base class method so parent can be automatically set while inserting
         */
        insertItem(position: number, item: LayerListItem): void;
        /**
         * Inserts multiple item into the collection at the specified index. Overriding base class method so parent can be automatically set while inserting
         */
        insertItems(position: number, items: LayerListItem[]): void;
        /**
         * Inserts an item into the collection at a specified index if the item passes validation.
         */
        validateAndInsertItem(position: number, newItem: LayerListItem): boolean;
        /**
         * Validates and inserts multiple items into the collection at a specified index. Will either insert all if validated, or none at all.
         */
        validateAndInsertItems(position: number, items: LayerListItem[]): boolean;
        /**
         * Remove item by reference. Overriding base class method so parent can automatically be set to null on removal
         */
        removeItem(item: LayerListItem): void;
        /**
         * Remove item by index. Overriding base class method so parent can automatically be set to null on removal
         */
        removeAt(position: number): void;
        /**
         * Removes a range of items from the collection. Overriding base class method so parent can automatically be set to null on removal
         */
        removeRange(from: number, to?: number): void;
        /**
         * Clears the collection after first setting the parents to null
         */
        clear(): void;
        /**
         * Private method that sets item properties like its parent and observable bindings before its added to this collection
         */
        private _prepItemForAddition(item);
        /**
         * Any processing that might be needed for an item post addition
         */
        private _processItemPostAddition(item);
        /**
         * Private method that removes/resets item properties like its parent and observable bindings before its removed from this collection
         */
        private _prepItemForRemoval(item);
        /**
         * Convenience method to prep multiple items for addition simultaneously
         */
        private _prepItemsForAddition(items);
        /**
         * Convenience method to process multiple items simultaneously post addition
         */
        private _processItemsPostAddition(items);
        /**
         * Convenience method to prep multiple items for removal simultaneously
         */
        private _prepItemsForRemoval(items);
        /**
         * Invoked just before adding an item as a child of this node. Validates if it can be added or not.
         */
        private _validateCanAdd(newItem);
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.layerList {
    /**
     * In case of the configurable Layer List this class represents a layer list item that corresponds directly to an "atomic" map service, i.e.
     * one whose visibility is toggled as a whole rather than changing the visibility of individual layers.
     * In case of a standard layer list or AWAB, this class will behave like a normal map service.
     */
    class LayerListMapServiceItem extends LayerListItem {
        private _themeSyncHandle;
        private _forceSetAncestorVisibilityOperationActive;
        /**
         * Creates a new instance of the {@link LayerListMapServiceItem} class.
         */
        constructor(id: string, mapService: gis.ServiceLayerInfo, layerList: infrastructure.layerList.LayerList);
        /**
         * Set the visibility of this mapService item in the layer list
         * @param visible The visibility of this map service item
         * @param forceSetAncestorVisibility If true, will force ancestor visibilities to sync up with this map service item
         */
        setVisibility(visible: boolean, forceSetAncestorVisibility?: boolean): void;
        /**
         * Updates inActiveTheme when it changes in the underlying geocortex map service (if available)
         */
        bindToActiveTheme(): void;
        /**
         * Removes the binding to the active theme
         */
        unbindFromActiveTheme(): void;
        /** @private */
        private _subscribeEvents();
        /** @private */
        private _setupIconUri();
        private _syncChildVisibilitiesIfApplicable(visible);
        /**
         * @private
         * Sets up bindings.
         */
        private _setupBindings();
        /**
         * For KML map services only. Called when the KML service layer is loaded.
         * @param kmlLayer The newly-loaded KML layer.
         */
        private _kmlLayerLoadHandler(kmlLayer);
        /**
         * Recursively creates KML folder layer list items from folders defined in a KML service.
         * @param item The layer list item to add the folder to.
         * @param folder The {@link esri.layers.KMLFolder} object representing the folder to add.
         * @param kmlLayer The root {@link esri.layers.KMLLayer} object that owns the folder.
         */
        private _createKmlFolders(item, folder, kmlLayer);
        private _updateVisibilityAtCurrentScale();
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.gis.GisUtils {
    function getServiceLayerType(serviceLayer: esri.layers.Layer): string;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.SymbolUtils {
    /**
     * Returns default color. If any modifications are provided, we will return a color with those modifications made
     * @param {Object} [options] modifications to make to the default color
     * @return {dojo.Color}
     */
    function defaultSymbolColor(options?: {
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    }): dojo.Color;
    /**
     * Returns the ESRI default marker symbol
     */
    function defaultMarkerSymbol(): esri.symbol.SimpleMarkerSymbol;
    /**
     * Returns the ESRI default line symbol
     */
    function defaultLineSymbol(): esri.symbol.SimpleLineSymbol;
    /**
     * Returns the ESRI default fill symbol
     */
    function defaultFillSymbol(): esri.symbol.SimpleFillSymbol;
    /**
     * Returns the ESRI default text symbol
     */
    function defaultTextSymbol(): esri.symbol.TextSymbol;
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * A general purpose, reusable and loosely coupled view model representing a menu item within a menu view model.
     */
    class MenuItemViewModel {
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** The name of this menu item. */
        text: Observable<string>;
        /** Short Description of this menu item. */
        description: Observable<string>;
        /** URI of the icon associated to this menu item (if any). */
        iconUri: Observable<string>;
        /** The main menu view model which contains this menu item. */
        menuViewModel: MenuViewModel;
        /** The MenuItemModel object for this menu item. */
        menuItem: MenuItemModel;
        /** Whether or not this menu item is executable or not. Factors in simple as well as batch menu items. */
        canExecute: Observable<boolean>;
        protected _canExecuteChangedBindingTokens: {
            canExecuteEvent: framework.events.Event;
            token: string;
        }[];
        protected _contextPropertyBindingTokens: {
            [contextPropertyKey: string]: string;
        };
        /**
        * Initializes a new instance of the MenuItemViewModel class.
        * @param menuVm The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel} that this MenuItemViewModel is a memeber of.
        * @param menuItem The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuItemModel} for this MenuItemViewModel.
        */
        constructor(menuVm: MenuViewModel, menuItem: MenuItemModel);
        /**
         * Execute this menu item if it can be executed. Could be a simple menu item or multiple batch menu items.
         */
        execute(): void;
        /**
         * Returns the canExecute status of the related menuItem in real time.
         * @return A boolean which returns true if the menu item backing this menu item view model can be executed.
         */
        computeCanExecute(): boolean;
        /**
        * Re-computes and resets the canExecute observable for this MenuItemViewModel.
        */
        refreshCanExecute(): void;
        /**
         * Unsubscribes from subscriptions and bindings tracked by this MenuItemViewModel
         */
        destroy(): void;
        /**
         * Sets up the canExecute changed bindings for both simple and batch menu items so the menu can update it's state automatically
         */
        protected _setupBindings(): void;
        /**
        * Static function that omputes a command parameter to pass to a menu item.
        * @param menuItemVm The {@link geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuItemViewModel} that's requesting the parameter to be resolved.
        * @param parameter The parameter to resolve against the menu context.
        * @return An object or string representing the resolved command parameter.
        */
        protected static _computeCommandParameter(menuItemVm: MenuItemViewModel, parameter: any): any;
    }
}
declare module geocortex.essentialsHtmlViewer.mapping.infrastructure.menus {
    /**
     * A generic and flexible menu view that binds to configured menus of commands and provides functionality to hide and show menu items
     * conditionally based on the `canExecute` status of the bound commands.
     */
    class MenuView extends geocortex.framework.ui.ViewBase {
        /** @inherited */
        app: geocortex.essentialsHtmlViewer.ViewerApplication;
        /** @inherited */
        viewModel: MenuViewModel;
        /** @inherited */
        attach(viewModel?: MenuViewModel): void;
        /**
         * Handles the click event of individual menu items.
         * @param evt The event.
         * @param element The element associated with this event.
         * @param menuItem The menu item that was clicked.
         */
        handleMenuItemClick(event: Event, element: HTMLElement, menuItem: MenuItemViewModel): void;
        /**
        * Handle showing the description, if the context has one.
        * @param evt The event.
        * @param element The element associated with this event.
        * @param context The context related to this event.
        */
        getDescription(event: Event, element: HTMLElement, context: any): void;
        /**
         * Destroy associated widget view model and bindings when this menu view is destroyed
         */
        onDestroy(): void;
    }
}
