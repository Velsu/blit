function initialize() {
		var myLatLng = {lat: 51.147853, lng: 23.456402};

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(myLatLng),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)

        var marker = new google.maps.Marker({
		    position: myLatLng,
		    map: map,
		    title: 'Litwin-Rehabilitacja'
		  });

      }
      google.maps.event.addDomListener(window, 'load', initialize);
