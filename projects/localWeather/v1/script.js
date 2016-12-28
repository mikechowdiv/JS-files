$(document).ready(function(){

var lon;
var lat;
var ftemp;
var cTemp;
var kTemp;

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){

			lon = position.coords.longitude;
			lat = position.coords.latitude;

			$('#data').html('latitude: ' + lat + '<br>longitude: ' + lon);
		});
	}


	var api = 'http://api.openweathermap.org/data/2.5/weather?lat=22.276802800000002&lon=114.240302&appid=3e24d71944ac2d7f1bdddb569985a87c';
				
	$.getJSON(api, function(data){
		
		var weatherType = data.weather[0].description;
		kTemp = data.main.temp;
		var windSpeeds = data.wind.speed;
		var city = data.name;

		fTemp = (kTemp) * (9/5) - 459.67;

		console.log(city);
		console.log(api);
	})
})

