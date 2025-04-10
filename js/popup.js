function formatPopup(feature) {
  const props = feature.properties;
  return `
    <strong>${props.nama_sekolah}</strong><br>
    NPSN: ${props.npsn}<br>
    Jenjang: ${props.jenjang}<br>
    Alamat: ${props.alamat}
  `;
}
