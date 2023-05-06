<template>
  <div class="home">
    <div class="home__container">
      <h1 class="home__container__title">D. Brigadeiros</h1>
      <p class="home__container__text">conheça nossos produtos</p>
      <router-link to="/produtos"><Button text="Ver produtos" /></router-link>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "HomeView",
  components: { Button },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.home {
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-top: 200px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: left;

    &__title {
      font-size: 32px;
      font-weight: bold;
      color: $dark-green;
    }

    &__text {
      font-size: 16px;
      font-weight: 400;
      color: $dark-green;
    }
  }
}
</style>
