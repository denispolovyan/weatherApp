<template>
  <form action="" class="form">
    <div class="form__input">
      <input
        maxlength="20"
        :class="{
          redBorder: responseError && !currentCity,
        }"
        type="text"
        placeholder="Type your city"
        v-model="currentCity"
      />
    </div>
    <div
      class="form__button"
      @click.prevent="$emit('loadForecast', currentCity)"
      @click="currentCity = ''"
    >
      <button>find</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    responseError: {
      type: Boolean,
    },
  },
  data: () => {
    return {
      currentCity: "",
    };
  },
};
</script>

<style scoped>
.form {
  display: flex;
}
.form__input input {
  height: 30px;
  width: 110px;
  padding: 0px 10px;
  border-radius: 5px 0px 0px 5px;
  font-weight: 600;
}
.form__button button {
  height: 30px;
  width: 40px;
  border-radius: 0px 5px 5px 0px;
  background-color: #3d36b4;
  font-weight: 600;
  color: #fff;
}
.redBorder {
  border: 1px solid red;
}
</style>
