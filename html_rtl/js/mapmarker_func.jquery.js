		//set up markers 
		var myMarkers = {
		    "markers": [
		        { "latitude": "21.16163", "longitude": "-86.83498", "icon": "img/map-marker.png" }
		    ]
		};

		//set up map options
		$(".map_contact").mapmarker({
		    zoom: 14,
		    center: 'Plaza Arrecife 28',
		    markers: myMarkers
		});
