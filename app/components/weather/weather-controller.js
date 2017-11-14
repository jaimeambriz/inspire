function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		//What can you do with this weather object?
		drawWeather(weather)
	})
	// weatherService.getWeather(drawWeather)
	
			//What can you do with this weather object?
	
		var weatherElem = document.getElementById('weather')
	
		function drawWeather(weather){
			var	template = `
			<div class="col-xs-12">
			<p>${weather.city}: ${weather.temp}°F</p>
		</div>
		<div class="row">
			<div class="col-xs-6 low">
				<p>Low:${weather.low}°F</p>
			</div>
			<div class="col-xs-6 weather-hi">
				<p>High:${weather.high}°F</p>
			</div>
		</div>`
			weatherElem.innerHTML = template
		}
}
					// <div class="row">
					// 	<div class="col-xs-12">
					// 		<p> Picture of Weather (clouds, sunny, rain, etc)</p>
					// 	</div>
					// </div>

					// <div class="row">
					// 	<div class="col-xs-12">
					// 		<p>${weather.city}</p>
					// 	</div>
					// </div>