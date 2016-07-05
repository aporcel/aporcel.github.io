var mymap = L.map('leafletmap');



var SensorIcon = L.icon({
    iconUrl: 'icon/SensorIcon.png',
    shadowUrl: 'icon/SensorIconShdw.png',
    iconSize:     [30, 47], // size of the icon
    shadowSize:   [47, 30], // size of the shadow
    iconAnchor:   [7, 47], // point of the icon which will correspond to marker's location
    shadowAnchor: [10, 30],  // the same for the shadow
    //popupAnchor:  [-3, -76] // point from which the popup should open relative to the conAnchor
});

var marker1 = L.marker([40.676759, -74.004602],{icon: SensorIcon}).addTo(mymap);
var marker2 = L.marker([40.676828,-74.004637],{icon: SensorIcon}).addTo(mymap);
var marker3 = L.marker([40.678174,-74.0181302],{icon: SensorIcon}).addTo(mymap);
var marker4 = L.marker([40.679296,-74.012106],{icon: SensorIcon}).addTo(mymap);

mymap.setView([40.676,-74.008], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 25
}).addTo(mymap);
