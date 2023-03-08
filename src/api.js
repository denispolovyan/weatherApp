const apiKey = "77b6a98ada8b4138b34193721230303";
const apiUrl = "https://api.weatherapi.com/v1/";

export function loadWeatherData(query = "Kiev", days = "7") {
  return fetch(`${apiUrl}forecast.json?key=${apiKey}&q=${query}&days=${days}`)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      if (days == 2) {
        return [res.forecast.forecastday.pop()];
      }
      return res.forecast.forecastday;
    })
    .catch((err) => err);
}

export async function loadCurrentWeatherData(query = "Kiev") {
  return await fetch(`${apiUrl}current.json?key=${apiKey}&q=${query}`)
    .then((data) => data.json())
    .catch((err) => err);
}
