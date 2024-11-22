# Weatherly: Interactive Weather Forecasting App

Weatherly is a weather forecasting application that allows users to search for weather data by city. It utilizes the [WeatherAPI](https://www.weatherapi.com/) to fetch location-based weather updates, including temperature, humidity, wind speed, and pressure.

## Features

- **City Search**: Search for weather data by entering a city name.
- **Weather Details**: Displays current temperature, minimum and maximum temperatures, humidity, pressure, and wind speed.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Interactive Charts**: Visualize temperature trends using Chart.js.

## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: Styling for a clean and modern design.
- **JavaScript**: Fetching weather data and adding interactivity.
- **Chart.js**: For data visualization.
- **Bootstrap 4**: To make the app responsive.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/pavanimankonda/weatherly.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weatherly
    ```
3. Open `index.html` in your browser to run the application.
4. Enter the name of a city in the search bar to fetch weather data.

## API Key

This project uses the [WeatherAPI](https://www.weatherapi.com/) to fetch weather data. Replace the `API_KEY` in the `script.js` file with your own API key:

```javascript
const API_KEY = '095c5121c54c485595a180434242211';
```
## Contribution
Contributions are welcome! Feel free to submit a pull request.
