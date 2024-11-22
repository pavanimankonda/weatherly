const API_KEY = '095c5121c54c485595a180434242211';  // Replace with your actual API key

const getWeatherData = async (city) => {
		const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`;
		try {
				const response = await fetch(URL);
				const data = await response.json();
				if (response.ok) {
						return data;
				} else {
						throw new Error(data.error.message);
				}
		} catch (error) {
				console.error("Error fetching weather data:", error);
				displayError(error.message);
		}
};

const searchCity = async () => {
		const city = document.getElementById('city-input').value.trim();
		if (!city) return;

		document.getElementById('loader').style.display = 'inline-block';  // Show loader
		document.getElementById('weather-output').style.display = 'none';  // Hide weather output
		document.getElementById('error-message').style.display = 'none';  // Hide error message

		const weatherData = await getWeatherData(city);
		if (weatherData) {
				showWeatherData(weatherData);
				displayWeatherChart(weatherData);
		}
		document.getElementById('loader').style.display = 'none';  // Hide loader
};

const showWeatherData = (weatherData) => {
		const { location, current, forecast } = weatherData;

		document.getElementById('city-name').innerText = location.name;
		document.getElementById('weather-type').innerText = current.condition.text;
		document.getElementById('temp').innerText = current.temp_c;
		document.getElementById('min-temp').innerText = forecast.forecastday[0].day.mintemp_c;
		document.getElementById('max-temp').innerText = forecast.forecastday[0].day.maxtemp_c;
		document.getElementById('humidity').innerText = current.humidity;
		document.getElementById('pressure').innerText = current.pressure_mb;
		document.getElementById('wind-speed').innerText = current.wind_kph;

		document.getElementById('weather-output').style.display = 'block';  // Show weather output
};

const displayError = (message) => {
		const errorMessage = document.getElementById('error-message');
		errorMessage.innerText = message;
		errorMessage.style.display = 'block';
};

const displayWeatherChart = (weatherData) => {
		const { current, forecast } = weatherData;

		const ctx = document.getElementById('weather-chart').getContext('2d');
		const chart = new Chart(ctx, {
				type: 'line',
				data: {
						labels: ['Current Temp', 'Min Temp', 'Max Temp'],
						datasets: [{
								label: 'Temperature (°C)',
								data: [current.temp_c, forecast.forecastday[0].day.mintemp_c, forecast.forecastday[0].day.maxtemp_c],
								backgroundColor: 'rgba(54, 162, 235, 0.2)',
								borderColor: 'rgba(54, 162, 235, 1)',
								borderWidth: 1,
								tension: 0.4,
						}]
				},
				options: {
						responsive: true,
						plugins: {
								tooltip: {
										callbacks: {
												label: function(tooltipItem) {
														return `${tooltipItem.label}: ${tooltipItem.raw}°C`;
												}
										}
								}
						},
						scales: {
								y: {
										beginAtZero: false
								}
						}
				}
		});
};
