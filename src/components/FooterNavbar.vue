<template>
  <div class="footer__body">
    <div class="list">
      <div class="list__body">
        <div class="list__item">Weather in real time</div>
        <div class="list__item">© WeatherApp</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer__body {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #3d36b4;
  padding: 0px 20px;
  font-family: "Nunito Sans", sans-serif;
  color: #fff;
  font-weight: 600;
}
.list {
  width: 100%;
}
.list__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 5px;
}
.list__item {
  font-size: 16px;
}
</style>
