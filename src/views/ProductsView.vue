<template>
  <div class="home">
    <h1 class="home__container__title">Nossos Produtos</h1>
    <div class="home__container__products">
      <product-card />
      <product-card />
      <product-card />
      <product-card />
      <product-card />
      <product-card />
      <product-card />
      <product-card />
      <product-card />
      <product-card />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: { ProductCard },
  name: "ProductView",
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.home {
  padding: 50px 150px 150px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: left;

    &__title {
      font-size: 32px;
      font-weight: bold;
      color: $dark-green;
      text-align: left;
    }

    &__products {
      padding: 25px 0;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
  }
}
</style>
