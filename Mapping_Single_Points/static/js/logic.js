// Add console.log to check to see if our code is working.
console.log("working");

/* // Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);*/

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      34.0522, -118.2437
    ],
    zoom: 14
  });

// We create the tile layer that will be the background of our map.
// tile layer assigned to variable streets
// following urls: 1) API URL with a reference to the accessToken
// 2) OpenStreetMap URL inside the curly braces of our tileLayer() method
/* let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    // zoom value
    maxZoom: 18,
    // allow streets to show
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    // assign to api key
    accessToken: API_KEY
});*/
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

/*L.circle([34.0522, -118.2437], {
  radius: 100
}).addTo(map);*/

L.circleMarker([34.0522, -118.2437],{
  radius : 300,
  color: "black",
  fillColor: "#ffffa1"
}).addTo(map);

//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
//We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    // zoom value
    maxZoom: 18,
    // assign to api key
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// diff mapbox id
/*
mapbox/streets-v11
mapbox/outdoors-v11
mapbox/light-v10
mapbox/dark-v10
mapbox/satellite-v9
mapbox/satellite-streets-v11
 */