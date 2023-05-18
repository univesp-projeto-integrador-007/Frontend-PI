<template>
  <div class="product">
    <div class="product__container-image">
      <img :src="product.image" alt="Foto do Produto" />
    </div>
    <div class="product__container-product">
      <h2 class="product__container-product__type">{{ product.type }}</h2>
      <h1 class="product__container-product__title">{{ product.name }}</h1>
      <p class="product__container-product__description">
        {{ product.description }}
      </p>
      <div class="product__container-product__wrapper" />
      <div>
        <span class="product__container-product__value">{{
          maskedMoney(product.price)
        }}</span>
        <span
          v-if="product.oldPrice"
          class="product__container-product__old-value"
        >
          {{ maskedMoney(product.oldPrice) }}
        </span>
      </div>
      <div class="product__container-product__button">
        <button @click="addToCart(product)">
          <img src="@/assets/plus-circle.svg" alt="" /> Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import Button from "@/components/Button.vue";
import ConvertMoney from "@/helpers/convert-money";
export default {
  components: { ProductCard, Button },
  name: "ProductView",
  data() {
    return {
      product: {},
    };
  },
  created() {
    this.product = this.$store.state.currentProduct;
  },
  methods: {
    addToCart(value) {
      this.$store.commit("storeCart", value);
    },
    maskedMoney(value) {
      return ConvertMoney(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.product {
  padding: 50px 150px 180px;
  display: flex;
  @media (max-width: $tablet) {
    flex-direction: column;
    gap: 25px;
    padding: 50px 25px 150px;
  }

  &__container-image {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    img {
      width: 100%;
    }
  }

  &__container-product {
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: left;
    padding-left: 50px;
    width: 100%;

    &__type {
      font-family: "Cairo", sans-serif;
      font-weight: 700;
      font-size: 1.4rem;
      color: $brown-100;
    }

    &__title {
      font-size: 2.8rem;
      font-weight: bold;
      color: $primary;
      text-align: left;
    }

    &__description {
      font-weight: 400;
      font-size: 1.3rem;
      color: $brown-200;
    }

    &__wrapper {
      margin: 10px 0;
      width: 80px;
      height: 2px;
      background: $yellow-150;
    }

    &__value {
      font-weight: 600;
      font-size: 2.5rem;
      color: $brown-200;
    }

    &__old-value {
      font-weight: 400;
      font-size: 1.6rem;
      color: $brown-100;
      margin-left: 15px;
      text-decoration: line-through;
    }

    &__button {
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 10px 20px;
        background: transparent;
        border: 4px solid $secondary;
        border-radius: 50px;
        color: $secondary;
        font-size: 1.7rem;
        font-weight: 600;
        cursor: pointer;

        &:active {
          background: $secondary;
          color: #fff;
          transition: 0.4s;
        }
      }
    }

    &__product {
      padding: 25px 0;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
  }
}
</style>
