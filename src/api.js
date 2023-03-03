const apiKey = "77b6a98ada8b4138b34193721230303";
const apiUrl = "http://api.weatherapi.com/v1/forecast.json";

export async function loadWeatherData(query) {
  return await fetch(`${apiUrl}?key=${apiKey}&q=${query}&days=7`)
    .then((data) => data.json())
    .then((res) => res.forecast.forecastday);
}
