<template>
  <div class="cards__container">
    <div v-for="dayForecast in weekForecast" v-bind:key="dayForecast">
      <div class="card">
        <div class="card__body">
          <div class="weather">
            <div class="weather-date">{{ dayForecast.date }}</div>
            <div class="max-weather">{{ dayForecast.day.maxtemp_c }}</div>
            <div class="min-weather">{{ dayForecast.day.mintemp_c }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weekForecast: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped>
.cards__container {
  display: flex;
  gap: 20px;
}
.card__body {
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  text-align: center;
}
.weather {
}
.max-weather {
  margin-bottom: 20px;
}
.weather-date {
  margin-bottom: 20px;
}
.min-weather {
}
</style>
