<template>
  <div class="service">
    <div class="service__body">
      <div class="service__item">Wind</div>
      <div class="service__item">Snow</div>
      <div class="service__item">Humidity</div>
      <div class="service__item">Sunrise/Sunset</div>
    </div>
  </div>
</template>

<style >
.service {
	padding: 0px 20px;
	background-color: #ced9ff;
}
.service__body {
	height: 40px;
	display: flex;
	align-items: center;
	gap: 20px;
	justify-content: end;
}
.service__item {
	background-color: #fff;
	padding: 2.5px 15px;
	border-radius: 5px;
}
</style>