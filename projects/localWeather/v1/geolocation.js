$(document).ready(function(){


	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			$('#data').html('latitude: ' + position.coords.latitude + '<br>longitude: ' + position.coords.longitude);
		});
	}


	var api = 'http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=3e24d71944ac2d7f1bdddb569985a87c';
	$.getJSON(api, function(data){
		//alert(data.coord.lon);
	})
})
