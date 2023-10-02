<template>
  <div class="service">
    <div
      class="service__body"
      @click="$emit('addServicesToForecast', services)"
    >
      <div class="forecast-tip" v-if="!hideTip">
        <img src="../assets/img/info.png" alt="info" /> Click weather card to
        watch hourly forecast
      </div>
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
      hideTip: false,
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
  mounted() {
    setTimeout(() => {
      this.hideTip = true;
    }, 3000);
  },
};
</script>

<style scoped>
.service {
  padding: 0px 20px;
  background-color: #3d36b4;
}
.service__body {
  position: relative;
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
  color: #fff;
}
.forecast-tip {
  display: flex;
  align-items: center;
  gap: 3px;
  position: absolute;
  left: 0;
  font-weight: 600;
  color: #fff;
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
@media (min-width: 1050px) {
  .service__body {
    width: 765px;
    margin: 0px auto;
  }
}
</style>
