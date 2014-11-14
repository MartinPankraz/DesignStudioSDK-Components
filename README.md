DesignStudioSDK-Components
==========================

Design Studio SDK Components by Martin Pankraz.

Prerequisites
--------------------------
Design Studio, Release 1.3 SP1 is required.

Content
--------------------------

•	IFrame
---
This component provides a customizable IFrame with default scroll bars. Just put in your favoured URL and you’re good to go to flavour your Design Studio App with any Website that’s available on the net. You can even change the IFrames source URL during runtime via Design Studio scripting.

•	NewsFeedReader (RSS)
---
As an extension of the component mentioned above the NewsFeedReader utilizes the IFrame-container to render the feed into. In order to retrieve the feed googles feed API and jsonp is used to overcome browsers CROSS-ORIGIN request restrictions. Due to the fact that RSS-Feeds are XML documents, common browsers (except for IE11 at the moment) internal XSLT functionality is used to render the content as XHTML (Please note that the actual feed will not show up in Design Studio during design time at the moment due to a IE-Bug).

Feed-URL as well as XSL-File-URL are customizable (XSL however must reside within same domain). The component provides a default stylesheet to transform XML (RSS) to XHTML. At first use of the component you might encounter an error which relates to a Design Studio BUG when dropping an SDK component onto a blank app (Hopefully this changes with the next release). Just ignore the message save and reload your app. For the component to work correctly one more configuration step is necessary. Put in your application prefix in the components properties configuration (default is "/aad/"). You can look it up in your URL while running a Design Studio App. It will be located next to \<web address\>:\<port\> and before “web.do”.



martin.pankraz@convista.com for feedback, suggestions or just a chat about Design Studio SDK awesomeness if you like.
