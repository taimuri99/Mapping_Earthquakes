// Add console.log to check to see if our code is working.
console.log("working");

/* // Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);*/

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
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


// Get data from cities.js
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
});

//We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
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