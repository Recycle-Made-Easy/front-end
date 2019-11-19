  
        var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('.google-map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
          });
        }
   
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4&callback=initMap"
      async defer></script>