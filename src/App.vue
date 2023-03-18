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
      <push-message v-if="showPushMessage" />
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
import PushMessage from "./components/PushMessage.vue";

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
    PushMessage,
  },
  data: () => {
    return {
      quantityForecast: [],
      currentForecast: [],
      currentCity: "",
      currentCityDuplicate: "",
      forecastDaysQuantity: "3",
      services: {},
      responseError: false,
      flagForCurrentForecast: false,
      showPushMessage: false,
    };
  },
  methods: {
    async loadForecast(city) {
      if (this.forecastDaysQuantity > 3) {
        this.showPushMessage = true;
        setTimeout(() => {
          this.showPushMessage = false;
        }, 3000);
      }
      if (this.flagForCurrentForecast && this.currentCity != city) {
        this.currentCity = city;
        this.forecastDaysQuantity = "";
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
        this.currentCityDuplicate = city;
        this.currentForecast = [];
      }
    },
    async loadCurrentForecast() {
      const currentForecastResponse = await loadCurrentWeatherData(
        this.currentCity
      );
      if (
        typeof currentForecastResponse != "object" ||
        currentForecastResponse["error"]
      ) {
        this.responseError = true;
        this.currentCity = this.currentCityDuplicate;
        return;
      } else {
        this.forecastDaysQuantity = "";
        this.responseError = false;
        this.currentForecast = currentForecastResponse;
        this.currentCityDuplicate = this.currentCity;
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
      if (this.forecastDaysQuantity) {
        this.loadForecast(this.currentCity);
      }
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
  position: relative;
}
.footer {
  flex: 0 0 auto;
}

@media (max-width: 1150px) {
  .wrapper {
    margin: 0px;
  }
}
</style>
