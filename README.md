DesignStudioSDK-Components
==========================

Design Studio SDK Components by Martin Pankraz.

Prerequisites
--------------------------
Design Studio, Release 1.6 SP0 or higher.

Content
--------------------------

<b>IFrame</b>

This component provides a customizable IFrame with default scroll bars. Just put in your favored URL and you’re good to go to flavor your Design Studio App with any website that’s available on the net. You can even change the IFrames source URL during runtime via Design Studio scripting. Just check out the available methods.

<b>NewsFeedReader (RSS)</b>

As an extension of the component mentioned above, the NewsFeedReader utilizes the IFrame-container to render the feed into. In order to retrieve the feed, Google feed API and jsonp are used to overcome common browsers CROSS ORIGIN request restrictions. Due to the fact that RSS feeds are XML documents, common browser's internal XSLT functionality is used to render the content as XHTML.

Feed URL and XSL file URL are customizable (XSL, however, must reside within the same domain). The component provides a default stylesheet to transform XML (RSS) into XHTML.

If you want to apply custom CSS styling to the IFrame holding the feed just use the property "Custom CSS URL".

<b>MapsExampleDataSource (only DS 1.4+)</b>

This custom data source contains geo referencable data to enable immediate use of the <i>ConVista Maps extensions</i> for SAP Design Studio (https://github.com/MartinPankraz/ConVista-DS-SDK-Visualizations) without any need for a SAP backend system.

Necessary ConVista maps properties settings:

- Address Dimension: ZADDRESS
- Marker-Content Dimension: 0NOTIFICATN
- Date Dimension: 0DATE
- Keyfigure1 Name: Number of Notifications
- Keyfigure1 Name (t-1): Number of Notifications (last year)
- Keyfigure2 Name: Current Cost
- Keyfigure2 Name (t-1): Current Cost (last year)

Please note that you will need at least SAP Design Studio 1.4 to use my custom data source.

<b>OpenStreetMap Requirejs example</b>

This OpenStreetMap implementation shows how to integrate external libraries into DesignStudio SDK extensions using Requirejs. See also my blog entry on SCN:
http://scn.sap.com/community/businessobjects-design-studio/blog/2015/05/17/requirejs-demystified 


Installation
------------
- Download DesignStudioSDKComponentsPack_14.zip (only DS 1.4+)
- Click Tools in Design Studio > install Extension to Design Studio…
- Choose “archive” as installation source (navigate to ZIP file) in Dialogue
- Accept license and restart Design Studio
- Have fun using my extensions

___________________________________________________________________________________________
martin.pankraz@convista.com for feedback, suggestions or just a chat about the awesomness of Design Studio SDK if you like.
