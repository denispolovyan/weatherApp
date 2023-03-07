const apiKey = "77b6a98ada8b4138b34193721230303";
const apiUrl = "https://api.weatherapi.com/v1/";

export async function loadWeatherData(query = "Kiev", days = "7") {
  try {
    return await fetch(
      `${apiUrl}forecast.json?key=${apiKey}&q=${query}&days=${days}` 
    )
      .then((data) => {
        if (data.status == 400) {
          let error = new Error(data.statusText);
          throw error;
        } else {
          return data.json();
        }
      })
      .then((res) => res.forecast.forecastday);
  } catch (err) {
    if (err == "Error: Bad Request") {
      return err;
    }
  }
}

export async function loadCurrentWeatherData(query = "Kiev") {
  return await fetch(`${apiUrl}current.json?key=${apiKey}&q=${query}`).then(
    (data) => data.json()
  );
}
