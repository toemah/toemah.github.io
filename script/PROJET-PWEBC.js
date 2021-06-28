let map = null, history = null, coord = [], marker = [], line = [];

$(document).ready(function () {
    let undoBtn = $("#undo");
    history = $("#misc-container p");
    $("#map").droppable();
    undoBtn.draggable({ revert: "invalid" });
    undoBtn.on("click", () => undo());
    map = L.map("map", {
        minZoom: 2,
        maxZoom: 2,
        zoomControl: false,
        noWrap: true
    });
    map.setMaxBounds([[-90, -180], [90, 180]]); // prevent users from looping the map on itself leading to misleading coordiantes per countries
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);
    map.setView([0, 0], 2);
    map.on("click", e => {
        draw(e.latlng);
        let str = "", distance = 0;
        if (coord.length < 2) {
            str = reverseSearch(e.latlng.lat, e.latlng.lng);
        } else {
            distance = getDistance(
                marker[marker.length - 1].getLatLng(),
                marker[marker.length - 2].getLatLng()
            );
            str = " to " + reverseSearch(e.latlng.lat, e.latlng.lng) + " : " + distance + "km<br>";
        }
        appendToDOM(history, str);
    });
});

// appends a string to the given DOM
let appendToDOM = (DOM, str) => {
    DOM.append(str);
}

// returns the distance in kilometers between two points
let getDistance = (from, to) => {
    return (from.distanceTo(to) / 1000).toFixed(0);
}

// ajax query to get a country's name from coordinates within its boundaries
let reverseSearch = (x, y) => {
    let result = "";
    $.ajax({
        async: false,
        type: "GET",
        url: `https://nominatim.openstreetmap.org/reverse?lat=${x}&lon=${y}&format=json`,
        success: function (response) {
            if (response.error) result = "not a country";
            else result = response.address.country;
        }
    });
    return result;
}

// places markers and draw lines in between them on the leaflet map
let draw = (latlng) => {
    coord.push(latlng);
    let last = coord.length - 1,
        m = L.marker(coord[last]);
    marker.push(m);
    m.addTo(map);
    if (coord.length >= 2) {
        let l = L.polyline([coord[last], coord[last - 1]]);
        line.push(l);
        l.addTo(map);
    }
}

// removes the last marker placed and any last drawn line if there is one
let undo = () => {
    if (coord.length == 0) return;
    let str = history.html();
    history.empty().append(str.substr(0, str.lastIndexOf("to") || str.length - 1));
    coord.pop();
    map.removeLayer(marker.pop());
    if (line.length > 0) {
        map.removeLayer(line.pop());
    }
}