<template>
  <div class="header">
    <img class="header__image" src="@/assets/cake-example.jpg" alt="" />
    <div class="header__content">
      <h1 class="header__content__title">Bole de chocolate com morango</h1>
      <p class="header__content__text">
        Bolo de massa de chocolate com recheio de morango, com decoração de
        kitkat e morangos em cima
      </p>
      <Button class="header__content__button" text="Adicionar ao carrinho" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "Header",
  components: { Button },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.header {
  background: #fff;
  border-radius: 5px;
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__image {
    width: 250px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    text-align: left;

    &__title {
      font-weight: 600;
      font-size: 16px;
    }

    &__text {
      padding: 10px 0;
      font-size: 14px;
    }

    &__button {
      margin-top: 24px;
    }
  }
}
</style>
