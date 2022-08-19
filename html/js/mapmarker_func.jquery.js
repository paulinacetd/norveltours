		//set up markers 
		var myMarkers = {
		    "markers": [
		        { "latitude": "21.161492404893888", "longitude": "-86.83497654850679", "icon": "img/map-marker.png" }
		    ]
		};

		//set up map options
		$(".map_contact").mapmarker({
		    zoom: 14,
		    center: 'Plaza Arrecife 28',
		    markers: myMarkers
		});
