fetch('data/sekolah.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(formatPopup(feature));
      },
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, { radius: 6, fillColor: "#3388ff", color: "#fff", weight: 1, fillOpacity: 0.8 });
      }
    }).addTo(map);
  });
