		//set up markers 
		var myMarkers = {
		    "markers": [
		        { "latitude": "21.161572447717777", "longitude": "-86.83493363316464", "icon": "img/map-marker.png" }
		    ]
		};

		//set up map options
		$(".map_contact").mapmarker({
		    zoom: 14,
		    center: 'Plaza Arrecife 28 Cancun',
		    markers: myMarkers
		});
