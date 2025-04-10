// Sekolah
fetch('data/sekolah.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: (feature, layer) => {
        layer.bindPopup(formatSekolahPopup(feature));
      },
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, { radius: 6, fillColor: "blue", color: "#fff", weight: 1 });
      }
    }).addTo(map);
  });

// Puskesmas
fetch('data/puskesmas.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: (feature, layer) => {
        layer.bindPopup(formatPuskesmasPopup(feature));
      },
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, { radius: 6, fillColor: "green", color: "#fff", weight: 1 });
      }
    }).addTo(map);
  });

// Desa (polygon)
fetch('data/desa.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: (feature, layer) => {
        layer.bindPopup(`<strong>${feature.properties.nama_desa}</strong>`);
      },
      style: {
        color: "#ff7800",
        weight: 2,
        fillOpacity: 0.2
      }
    }).addTo(map);
  });
