const sekolahLayer = L.layerGroup();
const puskesmasLayer = L.layerGroup();
const desaLayer = L.layerGroup();

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
    }).addTo(sekolahLayer);
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
    }).addTo(puskesmasLayer);
  });

// Desa
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
    }).addTo(desaLayer);
  });

// Tambahkan ke map
sekolahLayer.addTo(map);
puskesmasLayer.addTo(map);
desaLayer.addTo(map);

// Layer control
const baseLayers = {};
const overlays = {
  "Sekolah": sekolahLayer,
  "Puskesmas": puskesmasLayer,
  "Desa": desaLayer
};

L.control.layers(baseLayers, overlays, { collapsed: false }).addTo(map);
