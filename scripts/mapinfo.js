d3.json("<%= relative_path_to(@item[:map]) %>",
  function(error, topology) {
    //console.log(topology);
    <% if ! @item[:gps_center] %>
    console.log(d3.geo.centroid(topology))
    <% end %>

    <% if @item[:gps_sw] && @item[:gps_ne] %>
    // boundaries in google coords
    var southWest = new google.maps.LatLng(<%= @item[:gps_sw] %>);
    var northEast = new google.maps.LatLng(<%= @item[:gps_ne] %>);
    <% else %>
    // boundaries in d3 coords
    var bounds = d3.geo.bounds(topology)
    console.log(bounds)

    // boundaries in google coords
    var southWest = new google.maps.LatLng(bounds[0][1], bounds[0][0]);
    var northEast = new google.maps.LatLng(bounds[1][1], bounds[1][0]);
    <% end %>
    bounds = new google.maps.LatLngBounds(southWest,northEast);

    // set the boundaries and add the topology
    map.fitBounds(bounds);
    map.data.addGeoJson(topology);

    // add listeners
    map.data.addListener('click', function(event) {
      var url = "https://www.google.com/maps/preview/place/";
      if ( /(iPad|iPhone|iPod)/g.test( navigator.userAgent ) ) {
        url = "http://maps.apple.com/?q=";
      }
      url = url + event.latLng.toUrlValue();
      window.open(url);
    });
    map.data.addListener('mouseover', function(event) {
      //console.log(event);
      console.log(event.feature.j);
    });
    map.data.addListener('mouseout', function(event) {
      map.data.revertStyle();
    });
});
