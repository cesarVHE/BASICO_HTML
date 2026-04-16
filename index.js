// Inicializar el mapa
var map = L.map("map").setView([24.1, -102], 6);

// Cargar capa base de OpenStreetMap
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map)
