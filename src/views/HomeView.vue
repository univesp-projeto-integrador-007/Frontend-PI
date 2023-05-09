<template>
  <div class="home">
    <Carousel />
    <div class="home__container">
      <div class="home__container__emphasis">
        <h1>Doces em destaque</h1>
        <p>
          Produtos destacados por sua popularidade, além de suas deliciosidades
          e gosturas doces
        </p>
      </div>
      <div class="home__container__items">
        <product-card />
        <product-card />
        <product-card />
        <product-card />
      </div>
      <div class="home__container__wrapper" />
      <div class="home__container__emphasis">
        <h1>Cardápio</h1>
        <p>Onde você encontra todos os produtos, ordenados ou filtrados</p>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "HomeView",
  components: { Carousel, ProductCard },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.home {
  width: 100%;
  height: 100%;
  padding-bottom: 150px;

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__emphasis {
      margin: 40px 0 26px;
      width: 350px;

      h1 {
        font-size: 32px;
        font-weight: 600;
        color: $primary;
      }
      p {
        font-size: 16px;
        font-weight: 300;
        color: $brown-100;
        font-family: "Cairo", sans-serif;
        line-height: 20px;
      }
    }

    &__items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 21px;
    }

    &__wrapper {
      margin: 50px 0;
      width: 300px;
      height: 2px;
      background: $yellow-100;
    }
  }
}
</style>
