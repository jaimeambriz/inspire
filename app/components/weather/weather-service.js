function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&units=imperial&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);
	// var farenheitConverter =9/5 - 459.67;

	this.getWeather = function (callWhenDone) {
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
	
				var weather = {
					temp: Math.round(res.main.temp),
					low: Math.round(res.main.temp_min),
					high: Math.round(res.main.temp_max),
					city: res.name
					// picture: res.weather.main
				};
	
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// You should probably convert the temperature data
	
			callWhenDone(weather)
			// return weather
		})
	}
}