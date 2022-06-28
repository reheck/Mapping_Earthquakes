// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center near the geographica center of the US, and zoom level on scale of 0-18.
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "red"
  }).addTo(map);

// We create the tile layer that will be the background of our map, and in the tileLayer link include the style which is dark.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);