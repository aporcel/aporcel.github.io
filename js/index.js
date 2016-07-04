var myCenter=new google.maps.LatLng(40.676,-74.008);
var myMarker1 = new google.maps.LatLng(40.676759, -74.004602);
var myMarker2 = new google.maps.LatLng(40.676828,-74.004637);
var myMarker3 = new google.maps.LatLng(40.678174,-74.0181302);
var myMarker4 = new google.maps.LatLng(40.679296,-74.012106);
var image = {
  url: 'icon/SensorIcon.png',
  //size: new google.maps.Size(300, 472),
  //origin: new google.maps.Point(0, 0),
  //anchor: new google.maps.Point(102, 472),
  scaledSize: new google.maps.Size(30, 47)
};

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker1=new google.maps.Marker({
    position:myMarker1,
    icon:image
   });
  marker1.setMap(map);
    
  var marker2=new google.maps.Marker({
    position:myMarker2,
    icon:image
  }); 
  marker2.setMap(map);
  
  var marker3=new google.maps.Marker({
    position:myMarker3,
    icon:image
  });
  marker3.setMap(map);
  
  var marker4=new google.maps.Marker({
    position:myMarker4,
    icon:image
  });
  marker4.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);