<template>
  <div class="footer__body">
    <div class="logo">
      <div class="logo__body">
        <img
          class="logo__img"
          src="../assets/img/logo.png"
          alt="logo"
          style="width: 60px"
        />
      </div>
    </div>
    <div class="list">
      <div class="list__body">
      </div>
    </div>
  </div>
</template>

<style >
.footer__body {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #e2e2e2;
  padding: 0px 20px;
}
.logo {
  flex: 1 1 200px;
}
.list {
  width: 100%;
}
.list__body {
  justify-content: end;
  display: flex;
  align-items: center;
  gap: 40px;
}
.item {
  font-size: 16px;
  display: flex;
}
</style>
