/* 
 * @version 1.0
 * @copyright Martin Pankraz
 * @author Martin Pankraz
 *
 * @classdesc IFrame Plugin for SAP Design Studio 
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. 
 */
//Workaround to extract relative project path to address project ressources properly in local mode and bi-plattform
//@see http://scn.sap.com/community/businessobjects-design-studio/blog/2014/08/15/sdk-tips-and-tricks-resources-and-images
(function() {
var scriptSrc = $("script:last")[0].src;//.attr("src");

if(sap.zen.createStaticSdkMimeUrl != undefined) {
	scriptSrc = sap.zen.createStaticSdkMimeUrl("org.pankraz.newsfeedreader", "res/js/");
}
//tmp hack for local mode in DS15 (maybe BIP as well?)
if(scriptSrc === ""){
	scriptSrc = '/aad/zen/mimes/sdk_include/org.pankraz.newsfeedreader/res/js/';
}

sap.designstudio.sdk.Component.subclass("org.pankraz.newsfeedreader.reader", /** @memberOf org.pankraz.newsfeedreader.reader*/function() {

	var meta_data 					= null;
//	var runtime_data 				= null;
	var saveFeedUrlDimension 		= null;
	var saveXslUrlDimension			= null;
	var saveCSSUrlDimension			= null;
	var that						= this;
	
	var rss_container				= 'RSSContainerForIFrame.html?' + Math.random() + "&";	// Cache-busting
	
	/**
	 * @desc First function called during SAP Design Studio Plugin Lifecycle
	 * @memberOf init
	 */
	this.init = function() {
		
		this.projectLocationUrl = "";
		//Workaround to extract relative project path to address project resources properly in local mode and bi-plattform
		if(scriptSrc){
			this.projectLocationUrl = scriptSrc.substring(0, scriptSrc.indexOf("js/")+3);	
		}
		
	};
	/**
	 * @function beforeUpdate
	 */
	this.beforeUpdate = function(){};
	/**
	 * @function afterUpdate
	 */
	this.afterUpdate = function() {
		//Determin if user wants to use default XSL or not due to special internal path handling
		var xslLocation = this.projectLocationUrl;
		if(saveXslUrlDimension.indexOf("http://") !== -1 || saveXslUrlDimension.indexOf("https://") !== -1){
			xslLocation = saveXslUrlDimension;
		}
		else{
			xslLocation += saveXslUrlDimension;
		}
		
		var url_string = "";
		
		if(saveCSSUrlDimension !== undefined && saveCSSUrlDimension !== ""){
			url_string = encodeURI(this.projectLocationUrl+rss_container+'feed='+saveFeedUrlDimension+"&"+'xsl='+xslLocation+"&"+'css='+saveCSSUrlDimension);	
		}
		else{
			url_string = encodeURI(this.projectLocationUrl+rss_container+'feed='+saveFeedUrlDimension+"&"+'xsl='+xslLocation);
		}
		
		
		var html = '<iframe id="feed_container" src="'+url_string+'" width="auto" height="auto"></iframe>';			
		var t = this.$().html(html);
	};
	
	/**
	 * @function componentDeleted
	 */
	this.componentDeleted = function(){};
	
	// property setter/getter functions. Names have to match .ztl file defintions and
	// vice versa if intended to expose to other Design Studio components	
	this.metadata = function(value) {
		if (value === undefined) {
			return meta_data;
		} else {
			meta_data = value;
			return this;
		}
	};
	
	this.feedurldimension = function(value) {
		if (value === undefined) {
			return saveFeedUrlDimension;
		} else {
			saveFeedUrlDimension = encodeURI(value);
			return this;
		}
	};
	
	this.xslurldimension = function(value) {
		if (value === undefined) {
			return saveXslUrlDimension;
		} else {
			saveXslUrlDimension = encodeURI(value);
			return this;
		}
	};
	
	this.cssurldimension = function(value) {
		if (value === undefined) {
			return saveCSSUrlDimension;
		} else {
			saveCSSUrlDimension = encodeURI(value);
			return this;
		}
	};
	
});

})();