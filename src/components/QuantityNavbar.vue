<template>
  <div class="quantity">
    <div class="quantity__body">
      <div class="quantity__item" @click="$emit('currentForecastResponse')">Now</div>
      <div class="quantity__item" @click="$emit('setForecastLength', 1)">
        Today
      </div>
      <div class="quantity__item" @click="$emit('setForecastLength', 3)">
        3 days
      </div>
      <div class="quantity__item" @click="$emit('setForecastLength', 7)">
        7 days
      </div>
      <div class="quantity__item" @click="$emit('setForecastLength', 14)">
        14 days
      </div>
    </div>
  </div>
</template>

<style>
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
}
.quantity__item:active {
  background-color: #000;
}
</style>
