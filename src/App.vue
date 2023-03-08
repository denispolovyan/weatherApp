<template>
  <div class="wrapper">
    <header-navbar
      class="header"
      @loadForecast="loadForecast"
      :currentCity="currentCity"
      :responseError="responseError"
    />
    <service-navbar @addServicesToForecast="addServicesToForecast" />
    <quantity-navbar
      @setForecastLength="setForecastLength"
      @currentForecastResponse="loadCurrentForecast"
    />
    <main class="main__block">
      <day-forecast
        @setFlagForCurrentForecast="flagForCurrentForecast = true"
        :quantityForecast="quantityForecast"
        :currentForecast="currentForecast"
        :services="services"
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
      quantityForecast: [],
      currentForecast: [],
      currentCity: "Kiev",
      responseError: false,
      forecastDaysQuantity: "7",
      services: {},
      flagForCurrentForecast: false,
    };
  },
  methods: {
    async loadForecast(city) {
      if (this.flagForCurrentForecast && this.currentCity != city) {
        this.currentCity = city;
        this.loadCurrentForecast();
        return;
      }
      const forecastResponse = await loadWeatherData(
        city,
        this.forecastDaysQuantity
      );
      if (!Array.isArray(forecastResponse)) {
        this.responseError = true;
        return;
      } else {
        this.flagForCurrentForecast = false;
        this.responseError = false;
        this.quantityForecast = forecastResponse;
        this.currentCity = city;
        this.currentForecast = [];
      }
    },
    async loadCurrentForecast() {
      const currentForecastResponse = await loadCurrentWeatherData(
        this.currentCity
      );
      if (typeof currentForecastResponse != 'object') {
        this.responseError = true;
        return;
      } else {
        this.responseError = false;
        this.currentForecast = currentForecastResponse;
      }
    },

    setForecastLength(length) {
      this.forecastDaysQuantity = length;
    },
    addServicesToForecast(services) {
      this.services = services;
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
  background-color: #e9fdf5;
  margin: 0px 15%;
}
.main__block {
  flex: 1 0 auto;
}
.footer {
  flex: 0 0 auto;
}

@media (max-width: 1000px) {
  .wrapper {
    margin: 0px;
  }
}
</style>
