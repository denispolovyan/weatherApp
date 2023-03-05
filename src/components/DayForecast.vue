<template>
  <div class="hour-forecast__container">
    <div v-for="hourForecast in dayForecast" v-bind:key="hourForecast.time">
      <div class="card">
        <div class="card__body">
          <div class="weather">
            <div class="weather-date">
              {{ hourForecast.time.split(" ")[1] }}
            </div>
            <div class="weather__temperature_hour">
              {{ Math.round(hourForecast.temp_c) }} °C
            </div>
            <div class="weather__icon">
              <img
                v-bind:src="hourForecast.condition.icon"
                alt="weather__icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dayForecast: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style >
.hour-forecast__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px;
}
.weather__temperature_hour {
  text-align: center;
}
</style>