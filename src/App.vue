<template>
  <div class="wrapper">
    <header-navbar class="header" @loadWeekForecast="loadWeekForecast" />
    <main class="main__block">
      <week-forecast :weekForecast="weekForecast" />
    </main>
    <footer-navbar class="footer" />
  </div>
</template>

<script>
import HeaderNavbar from "./components/HeaderNavbar.vue";
import FooterNavbar from "./components/FooterNavbar.vue";
import WeekForecast from "./components/WeekForecast.vue";
import { loadWeatherData } from "./api";

export default {
  name: "App",
  components: {
    HeaderNavbar,
    FooterNavbar,
    WeekForecast,
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
    },
  },

 created() {
    this.loadWeekForecast("Kiev");
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
}
.main__block {
  flex: 1 0 auto;
}
</style>
