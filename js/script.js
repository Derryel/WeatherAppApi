$(document).ready(function() {
	$('#submitWeather').click(function(){
		var city = $("#city").val();

		if(city != '') {
			$.ajax({
				url:'http://api.openweathermap.org/data/2.5/weather?q=' +city+ "&units=imperial" + "&APPID=24c569fd314fb1b15ae502fdae01d36b",
				type: "GET",
				dataType: "jsonp",
				success: function(data) {
					var widget = show(data);

					$("#show").html(widget);

					$("#city").val('');
				}
			});

		}else{
			$("#error").html('Field cannot be empty');
		}
		
	});
});

function show(data) {
	return "<h2><strong>Current Weather for</strong>: "+ data.name + ", "+ data.sys.country +"</h2>" +
		   "<h3><strong>Weather</strong>: "+data.weather[0].main+"</h3>" +
		   "<h3><strong>Description</strong>: "+data.weather[0].description+"</h3>" +
		   "<h3><strong>Temperature</strong>: "+data.main.temp+"</h3>" +
		   "<h3><strong>High</strong>: "+data.main.temp_max+"</h3>" +
		   "<h3><strong>Low</strong>: "+data.main.temp_min+"</h3>" +
		   "<h3><strong>humidity</strong>: "+data.main.humidity+"</h3>" +
		   "<h3><strong>Wind Speed</strong>: "+data.wind.speed+"</h3>" +
		   "<h3><strong>Sunrise</strong>: "+data.sys.sunrise+"</h3>" +
		   "<h3><strong>Sunset</strong>: "+data.sys.sunset+"</h3>";
}