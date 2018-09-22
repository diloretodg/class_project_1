//redirecting window to hurricane florance relief page

// =================this backup option works===============================================
document.getElementById("button").onclick = function() {
    window.location.href = "https://www.redcross.org/donate/hurricane-florence-donations.html/?cid=fy19hurflorence&med=cpc&source=google&scode=rsg00000e017&gclid=Cj0KCQjw_vfcBRDJARIsAJafEnFmG9mB-fUspuh4dyZBYTc1urKftDMwW9gPCelV1VWGAdSanMhEBJoaAnbfEALw_wcB&gclsrc=aw.ds&dclid=CNTE593VwN0CFcJtwQodDvEJrA";
  };
// ================= end of backup button option =============================================

// ============= HOPED TO ADD additional API useage in aeris weather API =======================================
//https://www.aerisweather.com/support/docs/api/reference/endpoints/rivers-gauges/#examples
//adding ajax call for weather api just in case we cannot get the music one to work:
//api called AERIS weather (free trial for this usage)
//Access ID: XpouNVniWa4jaocLgXE9E           Secret Key: JyrJY0aD0eyg36ddw2gzKHSXy9xWZwRLG8Y3XgV0 
// aeris.config.setApiId('XpouNVniWa4jaocLgXE9E');
// aeris.config.setApiSecret('JyrJY0aD0eyg36ddw2gzKHSXy9xWZwRLG8Y3XgV0');

// $(document).on("click", "#crestingInfo", function(){
//   //creating url to view river gauges for raleigh (cresting being an issue)
//   var queryURL = "https://api.aerisapi.com/rivers/gauges/&p=raliegh?client_id=XpouNVniWa4jaocLgXE9E&client_secret=JyrJY0aD0eyg36ddw2gzKHSXy9xWZwRLG8Y3XgV0"
  
//   $.ajax({
//     URL: queryURL,
//     method:'GET',
//     data:{  
//       format: "string",
//       callback: "functionName"
//     }
//   })
//       // RequireJS/AMD added here for functionality:
//       require(['aeris/maps/map', 'aeris/maps/layers/radar'], function(AerisMap, Radar) {
//         var map = new AerisMap('map-canvas');
//         var radar = new Radar();
      
//         radar.setMap(map);
//       });
      
// said that this AMD module linked all the dependencies that might not be bundled in the CND
      // require.config({
      //   paths: {
      //       // Specify base path of aeris-js library 
      //       aeris: 'myApp/vendor/aerisjs/src',
      
      //       // Core dependencies.
      //       // Required for all Aeris.js components
      //       underscore: 'myApp/vendor/underscore',
      //       backbone: 'myApp/vendor/backbone',
      
      //       // Google Maps AMD module loader plugin
      //       // See https://github.com/hamweather/googlemaps-amd
      //       // Only required if using Google Maps
      //       googlemaps: 'myApp/vendor/googlemaps',
            
      //       // The async AMD loader plugin is used by googlemaps.
      //       // See https://github.com/millermedeiros/requirejs-plugins
      //       async: 'myApp/vendor/async',
      
      //       // Only required for marker collections rendered with Google Maps.
      //       // Must use exact version 2.1.1
      //       // (v2.1.2 includes a breaking change. Go figure.)
      //       // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html
      //       'gmaps-markerclusterer-plus': 'mapApp/lib/vendor/gmaps-markerclusterer-plus',
      
      //       // Only required for marker collections rendered with Leaflet
      //       // See https://github.com/Leaflet/Leaflet.markercluster
      //       'leaflet-markercluster': 'mapApp/lib/vendor/leaflet.markercluster'
      //   },
      
      //   // A Shim configuration is required for libraries which
      //   // do not support AMD out of the box.
      //   // See http://requirejs.org/docs/api.html#config-shim
      //   shim: {
      //       // Only required when using google maps
      //       'gmaps-markerclusterer-plus': {
      //         exports: 'MarkerClusterer'
      //       },
      
      //       // Only required when using Leaflet
      //       'leaflet-markercluster': {
      //         deps: ['leaflet'],
      //         exports: 'L.MarkerClusterGroup'
      //       }
      //   }
      // });
      //})end of doc on click function
  //==============end of would be aeris weather API ================================================================