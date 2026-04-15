// Inicializar el mapa
var map = L.map("map").setView([24.1, -102], 6);

// Cargar capa base de OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
}).addTo(map);