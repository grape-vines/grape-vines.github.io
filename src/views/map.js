export default function populateMap(mapDiv) {
    // var map = L.map(mapDiv).setView([42.6438717, 26.4279556], 11);
    var map = L.map(mapDiv, {
        center: [42.6438717, 26.4279556],
        zoom: 12,
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' + ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
        maxZoom: 18
    }).addTo(map);
    var marker = L.marker([42.6438717, 26.4279556]).addTo(map);
    var popup = marker.bindPopup('<b>Разсадник за лози - Кънчо Радков</b><br />с. Тополчане, общ.Сливен');
    popup.openPopup();
    return map;
}