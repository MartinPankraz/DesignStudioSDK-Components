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
sap.designstudio.sdk.Component.subclass("org.pankraz.iframe.frame", /** @memberOf org.pankraz.iframe.frame*/function() {

	var meta_data 				= null;
//	var runtime_data 			= null;
	var saveUrlDimension 		= null;
	
//	var that 					= this;
	
	/**
	 * @desc First function called during SAP Design Studio Plugin Lifecycle
	 * @memberOf init
	 */
	this.init = function() {
		
	};
	/**
	 * @function beforeUpdate
	 */
	this.beforeUpdate = function(){};
	/**
	 * @function afterUpdate
	 */
	this.afterUpdate = function() {
		var html = '<iframe src="'+saveUrlDimension+'" width="auto" height="auto"></iframe>';			
		this.$().html(html);
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
	
	this.urldimension = function(value) {
		if (value === undefined) {
			return saveUrlDimension;
		} else {
			saveUrlDimension = encodeURI(value);
			return this;
		}
	};
});