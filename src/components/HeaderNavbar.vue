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
            <div class="city__body">{{ currentCity }}</div>
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
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #e0f1f6;
  padding: 0px 20px;
}
.logo {
  flex: 1 1 200px;
}
.logo__body img {
  height: 40px;
  max-width: 40px;
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
  background-color: #a29eea;
  border-radius: 5px;
}
@media (max-width: 700px) {
  .city {
    padding: 5px 6px;
  }
  .list__body {
    gap: 10px;
  }
  .header__body {
    padding: 0px 10px;
  }
}
</style>
