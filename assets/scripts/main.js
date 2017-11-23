var position = [37.5157677,126.9538096];

function showGoogleMaps() {

  var latLng = new google.maps.LatLng(position[0], position[1]);

  var mapOptions = {
    streetViewControl: true, // hide the yellow Street View pegman
    scaleControl: false, // allow users to zoom the Google Map
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: latLng
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Show the default red marker at the location
  marker = new google.maps.Marker({
  position: latLng,
  map: map,
  draggable: false,
  animation: google.maps.Animation.DROP
  });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);
