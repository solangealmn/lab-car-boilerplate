// La funcionalidad de tu proyecto
// Initialize and add the map
function initMap() {
  var ibmec = {lat: -23.557605, lng: -46.662384};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: ibmec});
  var marker = new google.maps.Marker({position: ibmec, map: map});
}
