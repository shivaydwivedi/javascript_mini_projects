const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");

async function fetchWeatherData(city) {
    const apiKey = "03debab4f29068ddc18a0d7d31a0051c"; // My OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        weatherResult.innerHTML = `<p class="error">${error.message}</p>`;
    }
}

function displayWeatherData(data) {
    const { name, main, weather } = data;
    const temp = main.temp.toFixed(1);
    const description = weather[0].description;
    const icon = weather[0].icon;
    weatherResult.innerHTML = `
        <h2>${name}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}" />
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Condition:</strong> ${description}</p>
    `;
}

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeatherData(city);
    } else {
        weatherResult.innerHTML = "<p class='error'>Please enter a city name.</p>";
    }
});
