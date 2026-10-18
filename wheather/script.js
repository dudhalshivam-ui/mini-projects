// const wAPI = "https://api.open-meteo.com/v1/forecast?latitude=18.5204&longitude=73.8567&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
// const gAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=5&language=en&format=json`;



let latitude;
let longitude;

const searchform = document.querySelector(".search-form");
const cityinp = document.getElementById("cityInput");

searchform.addEventListener("submit", async (event) => {
    event.preventDefault();

    const cityname = cityinp.value.trim();

    console.log(cityname);

    const gAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityname)}&count=5&language=en&format=json`;

    const coordinates = await goecoordinates(cityname, gAPI);

    console.log(coordinates);

    // Added: check if coordinates exist
    if (!coordinates?.results?.length) {
        console.log("City not found");
        return;
    }

    latitude = coordinates.results[0].latitude;
    longitude = coordinates.results[0].longitude;

    const wAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    // Changed: pass cityname as the second argument
    wheatherdata(wAPI, cityname);
});

async function goecoordinates(cityname, gAPI) {
    if (cityname === "") {
        console.log("Please enter city name");
        return;
    }

    try {
        const response = await fetch(gAPI);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log("error fetching location", error);
        return null;
    }
}

// Weather fetching
async function wheatherdata(wAPI, cityname) {
    try {
        const response = await fetch(wAPI);

        if (!response.ok) {
            throw new Error("Weather request failed");
        }

        const wheaterdata = await response.json();
        console.log(wheaterdata);

        // Added: display data in HTML
        const current = wheaterdata.current;

        document.getElementById("cityName").textContent = cityname;
        document.getElementById("temperature").textContent =
            `${current.temperature_2m}°C`;
        document.getElementById("humidity").textContent =
            current.relative_humidity_2m;
        document.getElementById("windSpeed").textContent =
            current.wind_speed_10m;

    } catch (error) {
        console.log("Error fetching weather:", error);
    }
}
