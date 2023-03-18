<template>
  <div class="push-message">
    <div class="push-message__body">
      <div class="push-message__title">Error!</div>
      <div class="push-message__text">
        Api of this site accepts requests max for 3 days.
      </div>
    </div>
  </div>
</template>

<style scoped>
.push-message {
  position: absolute;
  background-color: #e2e2e2;
  font-family: "Nunito Sans", sans-serif;
  bottom: 20px;
  right: 20px;
}
.push-message__body {
  padding: 10px;
  max-width: 190px;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
