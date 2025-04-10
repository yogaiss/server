function formatSekolahPopup(feature) {
  const props = feature.properties;
  return `
    <strong>${props.nama_sekolah}</strong><br>
    NPSN: ${props.npsn}<br>
    Jenjang: ${props.jenjang}<br>
    Alamat: ${props.alamat}
  `;
}

function formatPuskesmasPopup(feature) {
  const props = feature.properties;
  return `
    <strong>${props.nama}</strong><br>
    Alamat: ${props.alamat}
  `;
}
