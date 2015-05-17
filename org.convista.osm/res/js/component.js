/* 
 * @version 1.0
 * @copyright ConVista
 * @author Martin Pankraz
 *
 * @classdesc OSM Maps Plugin for SAP Design Studio 
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
(function() {
	/** path recognition **/
	 var myScript = $("script:last")[0].src;
	 if(myScript === ""){
		 myScript = '/aad/zen/mimes/sdk_include/org.convista.osm/res/js/';
	 }
	 /** RequireJS Config **/
	 sap.zen.Dispatcher.instance.pauseDispatching();
	 /** configure require to work with leaflet **/
	 var sdkReqs = require.config({
		 context : "sdk",
		 paths: {
			leaflet :	myScript.substring(0, myScript.indexOf("js/")) + "js/leaflet",
			prv :		myScript.substring(0, myScript.indexOf("js/")) + "js/leaflet-providers.min"
		 },
		 shim: {
			 prv: {
				 deps: ['leaflet'] //dependancy array for providers plugin. Ensures loading global var 'L'
		     },
		 },
	 	 rlArgs: "v=20140515", //cache busting
	 });

	 sdkReqs(["require", "leaflet", "prv"], function(require, L) { //use loaded libs
		
		sap.designstudio.sdk.Component.subclass("org.convista.osm.DataMap", /** @memberOf org.convista.osm.DataMap*/function() { 
			//Cologne
			var DEFAULT_LATITUDE 		= 50.938405;
			var DEFAULT_LONGITUDE 		= 6.953648;
			
			var meta_data 				= null;
			
			var that 					= this;

			this.init = function() {

				this.map = L.map(this.$()[0]).setView([DEFAULT_LATITUDE, DEFAULT_LONGITUDE], 8);
			
				var defaultLayer = L.tileLayer.provider('OpenStreetMap.DE').addTo(this.map);
				
				var overlayLayers = {
					'OpenSeaMap': L.tileLayer.provider('OpenSeaMap'),
					'OpenWeatherMap Clouds': L.tileLayer.provider('OpenWeatherMap.Clouds'),
					'OpenWeatherMap PrecipitationClassic': L.tileLayer.provider('OpenWeatherMap.PrecipitationClassic'),
					'OpenWeatherMap RainClassic': L.tileLayer.provider('OpenWeatherMap.RainClassic'),
					'OpenWeatherMap PressureContour': L.tileLayer.provider('OpenWeatherMap.PressureContour'),
					'OpenWeatherMap Wind': L.tileLayer.provider('OpenWeatherMap.Wind'),
					'OpenWeatherMap Temperature': L.tileLayer.provider('OpenWeatherMap.Temperature'),
					'OpenWeatherMap Snow': L.tileLayer.provider('OpenWeatherMap.Snow')
				};
				
				var baseLayers = {
						'OpenStreetMap Default': defaultLayer,
						'OpenStreetMap German Style': L.tileLayer.provider('OpenStreetMap.DE'),
						'OpenStreetMap Black and White': L.tileLayer.provider('OpenStreetMap.BlackAndWhite'),
						'MapQuest OSM': L.tileLayer.provider('MapQuestOpen.OSM'),
						'MapQuest Aerial': L.tileLayer.provider('MapQuestOpen.Aerial'),
						'MapBox Example': L.tileLayer.provider('MapBox.examples.map-zr0njcqy'),
						'Stamen Terrain': L.tileLayer.provider('Stamen.Terrain'),
						'Esri WorldStreetMap': L.tileLayer.provider('Esri.WorldStreetMap'),
						'Esri DeLorme': L.tileLayer.provider('Esri.DeLorme'),
						'Esri WorldTopoMap': L.tileLayer.provider('Esri.WorldTopoMap'),
						'Esri WorldImagery': L.tileLayer.provider('Esri.WorldImagery'),
					};

				this.layerControl = L.control.layers(baseLayers, overlayLayers, {collapsed: true}).addTo(this.map);
			};
			
			this.afterUpdate = function(){
	
			};
			
		});	// End of SDK
		 
		sap.zen.Dispatcher.instance.resumeDispatching();
	});//End of Require Callback 	
})();// End of closure