<template>
  <div class="current">
    <div class="current__body">
      <div class="current__date">
        Update time: {{ currentForecast.current.last_updated }}
      </div>
      <div class="current__place">
        {{ currentForecast.location.name }} ,
        {{ currentForecast.location.region }}
      </div>
      <div class="temperature">{{ currentForecast.current.temp_c }} °С</div>
      <div class="current__icon">
        <img
          v-bind:src="currentForecast.current.condition.icon"
          alt="weather image"
        />
      </div>
      <div class="current__wind">
        Wind: {{ currentForecast.current.wind_kph }} kph
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentForecast: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
.current {
  margin: 40px 0px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.current__body {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 5px;
  padding: 10px;
  background-color: #c3dded;
  border: 1px solid #000;
  flex-direction: column;
  box-shadow: 1.5px -4px 2px 0px rgba(0, 0, 0, 0.5);
  font-family: "Nunito Sans", sans-serif;
}
.current__date {
  white-space: nowrap;
}
.current__icon img {
  width: 64px;
  height: 64px;
  border-radius: 5px;
  background-color: #b6d7e5;
}
</style>
