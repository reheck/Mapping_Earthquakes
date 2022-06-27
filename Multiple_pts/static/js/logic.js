// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center near the geographica center of the US, and zoom level on scale of 0-18.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Create the map object with a center and zoom level; useful when adding multiple tile layers or background image of map.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle as a marker to the map for LA
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// add a circle marker to the map for LA
L.circleMarker([34.0522, -118.2437], {
        radius: 300,
        color: "black",
        fillColor: '#ffffa1'
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