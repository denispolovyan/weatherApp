<template>
  <div
    class="hour-forecast__container"
    :class="{ addOverflowX: dayForecast.length }"
  >
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

<style>
.hour-forecast__container {
  display: flex;
  justify-content: start;
  max-width: 765px;
  gap: 10px;
  margin: 0px auto 40px auto;
  overflow: hidden;
}
.card__body {
  font-family: "Nunito Sans", sans-serif;
  padding: 10px 10px 5px 10px;
  border: 1px solid #000;
  border-radius: 10px;
  text-align: center;
  background-color: #c3dded;
  width:100px;
}
.weather{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.weather__temperature_hour {
  text-align: center;
}
.addOverflowX {
  overflow-x: scroll;
}
</style>
