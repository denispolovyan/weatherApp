<template>
  <div class="wrapper">
    <header-navbar
      class="header"
      @loadForecast="loadForecast"
      :currentCity="currentCity"
      :responseError="responseError"
    />
    <service-navbar />
    <quantity-navbar
      @setForecastLength="setForecastLength"
      @currentForecastResponse="loadCurrentForecast"
    />
    <main class="main__block">
      <day-forecast
        :weekForecast="weekForecast"
        :currentForecast="currentForecast"
      />
    </main>
    <footer-navbar class="footer" />
  </div>
</template>

<script>
import HeaderNavbar from "./components/HeaderNavbar.vue";
import FooterNavbar from "./components/FooterNavbar.vue";
import DayForecast from "./components/DayForecast.vue";
import ServiceNavbar from "./components/ServiceNavbar.vue";
import QuantityNavbar from "./components/QuantityNavbar.vue";
import { loadWeatherData } from "./api";
import { loadCurrentWeatherData } from "./api";

export default {
  name: "App",
  components: {
    HeaderNavbar,
    FooterNavbar,
    DayForecast,
    ServiceNavbar,
    QuantityNavbar,
  },
  data: () => {
    return {
      weekForecast: [],
      currentForecast: [],
      currentCity: "Kiev",
      responseError: false,
      forecastDaysQuantity: "7",
    };
  },
  methods: {
    async loadForecast(city) {
      const forecastResponse = await loadWeatherData(
        city,
        this.forecastDaysQuantity
      );
      if (forecastResponse == "Error: Bad Request") {
        this.responseError = true;
        return;
      } else {
        this.weekForecast = forecastResponse;
        this.currentCity = city;
        this.currentForecast = [];
      }
    },
    async loadCurrentForecast() {
      const currentForecastResponse = await loadCurrentWeatherData(
        this.currentCity
      );
      this.currentForecast = currentForecastResponse;
    },
    setForecastLength(length) {
      this.forecastDaysQuantity = length;
    },
  },

  watch: {
    forecastDaysQuantity() {
      this.loadForecast(this.currentCity);
    },
  },

  created() {
    this.loadForecast("Kiev");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap");
@import url("./assets/css/nullstyle.css");

#app {
  height: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f3eae8;
  margin: 0px 15%;
}
.main__block {
  flex: 1 0 auto;
}
</style>
