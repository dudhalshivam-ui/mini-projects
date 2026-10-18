# WeatherNow 🌦️

WeatherNow is a simple weather application that allows users to search for a city and view its current weather information. It uses the Open-Meteo API to retrieve geographical coordinates and weather data.

## Features

- Search for weather by city name.
- Get the geographical coordinates of a city.
- Display the current temperature.
- Display relative humidity.
- Display wind speed.
- Fetch live weather data using APIs.

## Technologies Used

- **HTML5** — Structure of the application.
- **CSS3** — Styling and layout.
- **JavaScript** — API requests, asynchronous operations, and DOM manipulation.
- **Open-Meteo API** — Geocoding and weather data.

## APIs Used

**1. Geocoding API**

Converts the city name into geographical coordinates (latitude and longitude).

https://open-meteo.com/en/docs/geocoding-api

**2. Weather Forecast API**

Uses the coordinates to retrieve current weather information.

https://open-meteo.com/en/docs

## How It Works

1. The user enters a city name in the search box.
2. The Geocoding API finds the city's latitude and longitude.
3. The application uses these coordinates to request weather data.
4. JavaScript extracts the temperature, humidity, and wind speed.
5. The weather information is displayed on the webpage.

## Getting Started

1. Clone this repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Open the project folder in VS Code.
3. Open `index.html` in your browser, or run the project using the VS Code Live Server extension.
4. Enter a city name and submit the search form.

No API key is required for the basic Open-Meteo endpoints used in this project.

## Project Structure

```text
WeatherNow/
├── index.html
├── style.css
├── script.js
└── README.md
```

## What I Learned

- Working with REST APIs using `fetch()`.
- Understanding asynchronous JavaScript with `async` and `await`.
- Handling JSON responses.
- Using template literals to create dynamic API URLs.
- Extracting data from objects and arrays.
- Updating webpage content using DOM manipulation.
- Handling API errors using `try...catch`.

## Future Improvements

- Display weather conditions with icons.
- Show the feels-like temperature.
- Add a loading indicator while fetching data.
- Improve error messages for invalid city names.
- Make the application more responsive on mobile devices.
- Display a multi-day weather forecast.

## Acknowledgements

Weather data provided by [Open-Meteo](https://open-meteo.com/).

---

**Built as a learning project using HTML, CSS, JavaScript, and the Open-Meteo API.**
