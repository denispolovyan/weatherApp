<template>
  <div class="wrapper">
    <header-navbar class="header" @loadWeekForecast="loadWeekForecast" />
    <main class="main__block">
      <forecast-container :weekForecast="weekForecast" />
    </main>
    <footer-navbar class="footer"/>
  </div>
</template>

<script>
import HeaderNavbar from "./components/HeaderNavbar.vue";
import FooterNavbar from "./components/FooterNavbar.vue";
import ForecastContainer from "./components/ForecastContainer.vue";
import { loadWeatherData } from "./api";

export default {
  name: "App",
  components: {
    HeaderNavbar,
    FooterNavbar,
    ForecastContainer,
  },
  data: () => {
    return {
      weekForecast: [],
      currentCity: "",
    };
  },
  methods: {
    async loadWeekForecast(city) {
      this.weekForecast = await loadWeatherData(city);
      this.currentCity = city;
      console.log(this.weekForecast);
    },
  },

  created() {},
};
</script>

<style>
@import url("./assets/css/nullstyle.css");
#app{
	height: 100%;
}


.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main__block {
  flex: 1 0 auto;
}
</style>
