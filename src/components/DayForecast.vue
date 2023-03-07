<template>
  <div class="cards__wrapper">
    <div class="cards__container" v-if="!Object.keys(currentForecast).length">
      <div
        v-for="dayForecast in weekForecast"
        v-bind:key="dayForecast.date"
        @click="select(dayForecast.date), showHourForecast(dayForecast.date)"
      >
        <div class="card">
          <div class="card__body">
            <div class="weather">
              <div class="weather-date">{{ dayForecast.date }}</div>
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
    weekForecast: {
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
    };
  },
  methods: {
    select(date) {
      this.currentDate = date;
    },
    showHourForecast(focusDate) {
      if (focusDate == this.currentDate) {
        const dayForecast = this.weekForecast.filter(
          (day) => day.date == focusDate
        );
        dayForecast.forEach((day) => {
          this.dayForecast = day.hour;
        });
      }
    },
  },
  watch: {
    weekForecast() {
      this.dayForecast = [];
    },
    currentForecast() {
      if (Object.keys(this.currentForecast).length) {
        console.log(this.currentForecast);
      }
    },
  },
};
</script>

<style>
.cards__container {
  margin: 20px;
  display: flex;
  gap: 10px;
  justify-content: start;
  margin: 40px auto 10px auto;
  max-width: 765px;
  overflow-x: scroll;
}
.card__body {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600px;
  padding: 10px 10px 5px 10px;
  border: 1px solid #000;
  border-radius: 10px;
  text-align: center;
  background-color: #c3dded;
}
.weather {
  display: flex;
  flex-direction: column;
  gap: 5px;
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
	font-size: 10px;
}
.wind {
	font-size: 10px;
}
.humidity {
	font-size: 10px;
}
.sunphase {
	font-size: 10px;
}
.sunphase{
	display: flex;
	flex-direction: column;
	gap: 2px;
	font-size: 9px;
}
</style>
