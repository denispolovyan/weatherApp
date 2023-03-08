<template>
  <div class="cards__wrapper">
    <div
      class="cards__container"
      :class="{
        overflowX: showScroll,
      }"
      v-if="!Object.keys(currentForecast).length"
    >
      <div
        v-for="dayForecast in quantityForecast"
        v-bind:key="dayForecast.date"
        @click="select(dayForecast.date), showHourForecast(dayForecast.date)"
      >
        <div class="card">
          <div class="card__body">
            <div class="weather">
              <div class="weather__date">{{ dayForecast.date }}</div>
              <div class="weather__temperature">
                <div class="max-weather">
                  max<br />{{ Math.round(dayForecast.day.maxtemp_c) }}
                </div>
                <div class="min-weather">
                  min<br />{{ Math.round(dayForecast.day.mintemp_c) }}
                </div>
              </div>
              <div class="weather__icon">
                <img
                  v-bind:src="dayForecast.day.condition.icon"
                  alt="weather__icon"
                />
              </div>
              <div class="rain" v-if="services.rain">
                Rain: {{ dayForecast.day.daily_chance_of_rain }} %
              </div>
              <div class="wind" v-if="services.wind">
                Wind: {{ dayForecast.day.maxwind_kph }} kph
              </div>
              <div class="humidity" v-if="services.humidity">
                Humidity: {{ dayForecast.day.avghumidity }} %
              </div>
              <div class="sunphase" v-if="services.sunphase">
                <div class="sunphase__sunrise">
                  Sunrise: {{ dayForecast.astro.sunrise }}
                </div>
                <div class="sunphase__sunset">
                  Sunset: {{ dayForecast.astro.sunset }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hour-forecast
      :dayForecast="dayForecast"
      v-if="!Object.keys(currentForecast).length"
    />
    <current-forecast
      :currentForecast="currentForecast"
      v-if="Object.keys(currentForecast).length"
    />
  </div>
</template>

<script>
import HourForecast from "./HourForecast.vue";
import CurrentForecast from "./CurrentForecast.vue";

export default {
  components: {
    HourForecast,
    CurrentForecast,
  },

  props: {
    quantityForecast: {
      type: Array,
      required: false,
    },
    currentForecast: {
      type: Object,
      required: false,
    },
    services: {
      type: Object,
      required: false,
    },
  },
  data: () => {
    return {
      currentDate: "",
      dayForecast: [],
      showScroll: true,
      clientWidth: null,
    };
  },
  methods: {
    select(date) {
      this.currentDate = date;
    },
    showHourForecast(focusDate) {
      if (focusDate == this.currentDate) {
        const dayForecast = this.quantityForecast.filter(
          (day) => day.date == focusDate
        );
        dayForecast.forEach((day) => {
          this.dayForecast = day.hour;
        });
      }
    },
    getWindowSize() {
      this.clientWidth = window.screen.width;
    },
  },
  watch: {
    quantityForecast() {
      this.dayForecast = [];
      if (this.quantityForecast.length < 8 && this.clientWidth > 800) {
        this.showScroll = false;
      } else if (this.quantityForecast.length > 3 && this.clientWidth < 800) {
        this.showScroll = true;
      } else if (this.quantityForecast.length < 4) {
        this.showScroll = false;
      } else {
        this.showScroll = true;
      }
    },
    currentForecast() {
      if (Object.keys(this.currentForecast).length) {
        this.$emit("setFlagForCurrentForecast");
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.getWindowSize);
    this.getWindowSize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.getWindowSize);
  },
};
</script>

<style scoped>
.cards__wrapper {
  padding: 0px 20px;
}
.cards__container {
  margin: 20px;
  display: flex;
  gap: 10px;
  justify-content: start;
  margin: 40px auto 10px auto;
  max-width: 765px;
  overflow: hidden;
}
.card__body {
  font-family: "Nunito Sans", sans-serif;
  padding: 10px 10px 5px 10px;
  border: 1px solid #000;
  border-radius: 10px;
  text-align: center;
  background-color: #c3dded;
  width: 100px;
}
.weather {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.weather__date {
  white-space: nowrap;
}
.weather__temperature {
  display: flex;
  justify-content: space-between;
}
.weather__icon img {
  height: 64px;
  width: 64px;
}
.rain {
  font-size: 9px;
}
.wind {
  font-size: 9px;
}
.humidity {
  font-size: 9px;
}
.sunphase {
  font-size: 9px;
}
.sunphase {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 9px;
}
.overflowX {
  overflow-x: scroll;
}
</style>
