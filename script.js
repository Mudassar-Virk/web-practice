const API_KEY = 'b9dacddfc19f9a9a3d50c45477b44caf';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const input = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherCard = document.getElementById('weather-card');
const errorMsg = document.getElementById('error-msg');

async function getWeather(city) {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    displayWeather(data);

  } catch (error) {
    showError();
  }
}

function displayWeather(data) {
  errorMsg.classList.add('hidden');
  weatherCard.classList.remove('hidden');

  document.getElementById('city-name').textContent = data.name;
  document.getElementById('country').textContent = data.sys.country;
  document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById('description').textContent = data.weather[0].description;
  document.getElementById('humidity').textContent = `${data.main.humidity}%`;
  document.getElementById('wind').textContent = `${Math.round(data.wind.speed)} m/s`;
  document.getElementById('feels-like').textContent = `${Math.round(data.main.feels_like)}°C`;

  const iconCode = data.weather[0].icon;
  document.getElementById('weather-icon').src =
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function showError() {
  weatherCard.classList.add('hidden');
  errorMsg.classList.remove('hidden');
}

searchBtn.addEventListener('click', () => {
  const city = input.value.trim();
  if (city) getWeather(city);
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const city = input.value.trim();
    if (city) getWeather(city);
  }
});