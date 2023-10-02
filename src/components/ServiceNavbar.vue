<template>
  <div class="service">
    <div
      class="service__body"
      @click="$emit('addServicesToForecast', services)"
    >
      <div
        class="service__item"
        :class="{
          bgcolor: services.wind,
        }"
        id="wind"
        @click="setStylesForButton"
      >
        Wind
      </div>
      <div
        class="service__item"
        :class="{
          bgcolor: services.rain,
        }"
        id="rain"
        @click="setStylesForButton"
      >
        Rain
      </div>
      <div
        class="service__item"
        :class="{
          bgcolor: services.humidity,
        }"
        id="humidity"
        @click="setStylesForButton"
      >
        Humidity
      </div>
      <div
        class="service__item"
        :class="{
          bgcolor: services.sunphase,
        }"
        id="sunphase"
        @click="setStylesForButton"
      >
        Sunrise/Sunset
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      services: {
        wind: false,
        rain: false,
        humidity: false,
        sunphase: false,
      },
    };
  },
  methods: {
    setStylesForButton(e) {
      for (let value in this.services) {
        this.services[value] = false;
      }
      let element = e.target.id;
      this.services[element] = true;
    },
  },
};
</script>

<style scoped>
.service {
  padding: 0px 20px;
  background-color: #3d36b4;
}
.service__body {
  height: 60px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: end;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;

}
.service__item {
	display: flex;
  align-items: center;
  height: 30px;
  background-color: #fff;
  padding: 2.5px 15px;
  border-radius: 5px;
  cursor: pointer;
}
.bgcolor {
  transition-duration: 0.5s;
  background-color: #3d36b4;
  color: #fff

}
@media (max-width: 700px) {
  .service__body {
    gap: 8px;
  }
  .service__item {
    padding: 5px 6px;
  }
  .service {
    padding: 0px 10px;
  }
}
</style>
