// Add console.log to check to see if our code is working.
console.log("working");

// Add GeoJSON data.
/*let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};*/


/* // Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);*/

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level in centre of earth.
// let map = L.map('mapid').setView([30, 30], 2);

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);


// pointToLayer Function
// Grabbing our GeoJSON data.
/* L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.name + "</h2>" + "</h2> <hr>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
  }
}).addTo(map); */

// onEachFeature fucntion
/*L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "</h2> <hr>" + "Airport Name: " + feature.properties.name + "</h3>");
   }
}).addTo(map);*/


/*// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      36.1733, -120.1794
    ],
    zoom: 7
  });*/


// Coordinates for each point to be used in the polyline.
/* let line = [
  [37.6213, -122.3790],
  [30.1975,-97.6664],
  [43.6777,-79.6248],
  [40.6413,-73.7781]
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: '5,10'
}).addTo(map);*/

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

/*// An array containing each city's location, state, and population.
let cities = [{
  location: [40.7128, -74.0059],
  city: "New York City",
  state: "NY",
  population: 8398748
},
{
  location: [41.8781, -87.6298],
  city: "Chicago",
  state: "IL",
  population: 2705994
},
{
  location: [29.7604, -95.3698],
  city: "Houston",
  state: "TX",
  population: 2325502
},
{
  location: [34.0522, -118.2437],
  city: "Los Angeles",
  state: "CA",
  population: 3990456
},
{
  location: [33.4484, -112.0740],
  city: "Phoenix",
  state: "AZ",
  population: 1660272
}
];

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
  console.log(city)
  L.marker(city.location).addTo(map);
 });*/


/*// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000,
    color: "orange",
    fillColor: "#ffffa1"
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});*/

//We create the tile layer that will be the background of our map.
/*let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    // zoom value
    maxZoom: 18,
    // allow streets to show
    id: 'mapbox/streets-v11',
    // id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    // assign to api key
    accessToken: API_KEY
  });*/
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    // zoom value
    maxZoom: 18,
    // assign to api key
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);





// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/taimuri99/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJSON(data).addTo(map);
//});
L.geoJSON(data, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "</h2> <hr>" + "Airport Name: " + feature.properties.name + "</h3>");
   }
}).addTo(map);
});

// diff mapbox id
/*
mapbox/streets-v11
mapbox/outdoors-v11
mapbox/light-v10
mapbox/dark-v10
mapbox/satellite-v9
mapbox/satellite-streets-v11
*/