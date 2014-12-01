DesignStudioSDK-Components
==========================

Design Studio SDK Components by Martin Pankraz.

Prerequisites
--------------------------
Design Studio, Release 1.3 SP1 or higher.

Content
--------------------------

•	IFrame
---
This component provides a customizable IFrame with default scroll bars. Just put in your favored URL and you’re good to go to flavor your Design Studio App with any website that’s available on the net. You can even change the IFrames source URL during runtime via Design Studio scripting. Just check out the available methods.

•	NewsFeedReader (RSS)
---
As an extension of the component mentioned above, the NewsFeedReader utilizes the IFrame-container to render the feed into. In order to retrieve the feed, Google feed API and jsonp are used to overcome common browsers CROSS ORIGIN request restrictions. Due to the fact that RSS feeds are XML documents, common browser's internal XSLT functionality (except for IE11 at the moment) is used to render the content as XHTML (Please note that the actual feed will not show up in Design Studio during design time at the moment because of an IE bug. I will update the component as soon as a fix is available).

Feed URL and XSL file URL are customizable (XSL, however, must reside within the same domain). The component provides a default stylesheet to transform XML (RSS) into XHTML. At first use of the component you might encounter an error, which is related to a Design Studio BUG when dropping an SDK component onto a blank app (Hopefully this will change with the next release). Just ignore the message, save and reload your app. One more configuration step is necessary so that the component works correctly. Put your application prefix in the components properties (default is "/aad/"). You can look it up in your URL while running a Design Studio App. It will be located next to \<web address\>:\<port\> and before "web.do".



martin.pankraz@convista.com for feedback, suggestions or just a chat about Design Studio SDK awesomeness if you like.
