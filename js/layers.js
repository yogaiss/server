const layers = {
  sekolah: {
    file: "data/sekolah.geojson",
    layer: L.layerGroup(),
    color: "blue",
    popup: (props) => `
      <strong>${props.nama_sekolah}</strong><br>
      NPSN: ${props.npsn}<br>
      Jenjang: ${props.jenjang}<br>
      Alamat: ${props.alamat}`
  },
  puskesmas: {
    file: "data/puskesmas.geojson",
    layer: L.layerGroup(),
    color: "green",
    popup: (props) => `
      <strong>${props.nama}</strong><br>
      Alamat: ${props.alamat}`
  },
  desa: {
    file: "data/desa.geojson",
    layer: L.layerGroup(),
    style: {
      color: "#ff7800",
      weight: 2,
      fillOpacity: 0.2
    },
    popup: (props) => `<strong>${props.nama_desa}</strong>`
  }
};

// Loop semua layer
Object.entries(layers).forEach(([key, config]) => {
  fetch(config.file)
    .then(res => res.json())
    .then(data => {
      const geoJson = L.geoJSON(data, {
        onEachFeature: (feature, layer) => {
          layer.bindPopup(config.popup(feature.properties));
        },
        ...(config.color && {
          pointToLayer: (feature, latlng) =>
            L.circleMarker(latlng, {
              radius: 6,
              fillColor: config.color,
              color: "#fff",
              weight: 1,
              fillOpacity: 0.8
            })
        }),
        ...(config.style && { style: config.style })
      });

      geoJson.addTo(config.layer);
    });

  config.layer.addTo(map);
});

// Layer control
const overlays = {};
Object.keys(layers).forEach(name => {
  overlays[name.charAt(0).toUpperCase() + name.slice(1)] = layers[name].layer;
});
L.control.layers({}, overlays).addTo(map);
