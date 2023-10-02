<template>
  <div class="header__body">
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
        <div class="list__item">
          <div class="city">
            <div class="city__body">{{ currentCity || "Select city" }}</div>
          </div>
        </div>
        <div class="list__item">
          <submit-form
            @loadForecast="loadForecast"
            :responseError="responseError"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitForm from "./SubmitForm";

export default {
  components: {
    SubmitForm,
  },
  props: {
    currentCity: {
      type: String,
      required: true,
    },
    responseError: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    loadForecast(city) {
      this.$emit("loadForecast", city);
    },
  },
};
</script>

<style scoped>
.header__body {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #82daf8;
  padding: 0px 20px;
  gap: 10px;
}
.logo {
  flex: 1 1 200px;
}
.logo__body img {
	height: 40px;
	min-width: 130px;
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
.city {
  padding: 2.5px 15px;
  background-color: #3d36b4;
  border-radius: 5px;
  height: 30px;
  display: flex;
  align-items: center;
  color: #fff
}
@media (max-width: 700px) {
	.city {
  padding: 2.5px 5px;
}
  .list__body {
    gap: 5px;
  }
  .header__body {
    padding: 0px 10px;
  }
}
</style>
