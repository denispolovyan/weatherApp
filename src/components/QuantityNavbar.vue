<template>
  <div class="quantity">
    <div class="quantity__body">
      <div
        class="quantity__item"
        :class="{
          bgcolor: quantity.now,
        }"
        id="now"
        @click.stop="$emit('currentForecastResponse')"
        @click="setStylesForButton"
      >
        Now
      </div>
      <div
        class="quantity__item"
        :class="{
          bgcolor: quantity.today,
        }"
        id="today"
        @click.stop="$emit('setForecastLength', 1)"
        @click="setStylesForButton"
      >
        Today
      </div>
      <div
        class="quantity__item"
        :class="{
          bgcolor: quantity.tomorrow,
        }"
        id="tomorrow"
        @click.stop="$emit('setForecastLength', 2)"
        @click="setStylesForButton"
      >
        Tomorrow
      </div>
      <div
        class="quantity__item"
        :class="{
          bgcolor: quantity.threeDays,
        }"
        id="threeDays"
        @click.stop="$emit('setForecastLength', 3)"
        @click="setStylesForButton"
      >
        3 days
      </div>
      <div
        class="quantity__item"
        :class="{
          bgcolor: quantity.sevenDays,
        }"
        id="sevenDays"
        @click.stop="$emit('setForecastLength', 7)"
        @click="setStylesForButton"
      >
        7 days
      </div>
      <div
        class="quantity__item"
        :class="{
          bgcolor: quantity.fourteenDays,
        }"
        id="fourteenDays"
        @click.stop="$emit('setForecastLength', 14)"
        @click="setStylesForButton"
      >
        14 days
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      quantity: {
        now: false,
        today: false,
        tomorrow: false,
        threeDays: true,
        sevenDays: false,
        fourteenDays: false,
      },
    };
  },
  methods: {
    setStylesForButton(e) {
      for (let value in this.quantity) {
        this.quantity[value] = false;
      }
      let element = e.target.id;
      this.quantity[element] = true;
    },
  },
};
</script>

<style scoped>
.quantity {
  padding: 0px 20px;
  background-color: #82daf8;
}
.quantity__body {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: end;
}
.quantity__item {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 2.5px 15px;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  height: 30px;
}
.bgcolor {
  transition-duration: 0.5s;
  background-color: #3d36b4;
  color: #fff;
}
@media (max-width: 700px) {
  .quantity__body {
    gap: 8px;
  }
  .quantity__item {
    padding: 5px 4px;
  }
  .quantity {
    padding: 0px 10px;
  }
}
@media (max-width: 500px) {
  .quantity__body {
    gap: 4px;
  }
}

@media (min-width: 1050px) {
  .quantity__body {
    width: 765px;
    margin: 0px auto;
  }
}
</style>
