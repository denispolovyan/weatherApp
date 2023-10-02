<template>
  <div class="push-message">
    <div class="push-message__body">
      <div class="push-message__title">Error!</div>
      <div class="push-message__text">
        Free API does not support such requests
      </div>
      <img
        class="push-message__img"
        src="../assets/img/error.png"
        alt="error message"
      />
    </div>
  </div>
</template>

<style scoped>
.push-message {
  position: absolute;
  background-color: #3d36b4;
  font-family: "Nunito Sans", sans-serif;
  bottom: 20px;
  right: 20px;
  color: #fff;
}
.push-message__body {
  position: relative;
  padding: 15px 10px;
  max-width: 190px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.push-message__title {
  font-weight: 600;
  padding-bottom:10px;
  border-bottom: 1px solid #fff;
}
.push-message__text{
	margin-top: 3px;
}
.push-message__img {
  position: absolute;
  right: 5px;
  top: 13px;
}
</style>
