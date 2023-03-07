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
      <div class="wind">{{ currentForecast.current.wind_kph }} kph</div>
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

<style>
.current {
  margin: 40px 0px;
  text-align: center;
}
.current__body {
	border-radius: 5px;
  padding: 20px;
  background-color: #c3dded;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 0px auto;
  gap: 5px;
}
.current__date {
}
.current__place {
}
.temperature {
}
.temperature__min {
}
.temperature__max {
}
.current__icon img{
	width: 64px;
	height: 64px;
	border: 1px solid #000;
	border-radius: 5px;
	background-color: #fff;
}
.wind {
}
</style>
