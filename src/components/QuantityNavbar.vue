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
        threeDays: false,
        sevenDays: true,
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
  background-color: #c2d1ff;
}
.quantity__body {
  height: 40px;
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: end;
}
.quantity__item {
  background-color: #fff;
  padding: 2.5px 15px;
  border-radius: 5px;
  cursor: pointer;
}
.bgcolor {
	transition-duration: .5s;
  background-color: #a29eea;
}
</style>
