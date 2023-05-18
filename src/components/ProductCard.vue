<template>
  <div class="product-card">
    <img class="product-card__image" :src="product.image" alt="" />
    <div class="product-card__content">
      <span class="product-card__content__type">{{ product.type }}</span>
      <h1 class="product-card__content__title">{{ product.name }}</h1>
      <p class="product-card__content__text">
        {{ maskedMoney(product.price) }}
      </p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ConvertMoney from "@/helpers/convert-money";
export default {
  name: "ProductCard",
  components: { Button },
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    maskedMoney(value) {
      return ConvertMoney(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.product-card {
  display: flex;
  flex-direction: column;
  width: 195px;
  height: 190px;
  background: transparent;
  border-radius: 10px;
  border: 2px solid $yellow-100;
  cursor: pointer;

  &__image {
    height: 120px;
    border-radius: 10px 10px 5px 5px;
    -webkit-mask-image: linear-gradient(to top, transparent 0%, black 10%);
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 8px;
    text-align: left;

    &__type {
      font-weight: 700;
      font-size: 12px;
      color: $brown-100;
      margin-bottom: 4px;
    }

    &__title {
      font-weight: 400;
      font-size: 16px;
      color: $primary;
      margin-bottom: 7px;
    }

    &__text {
      font-size: 12px;
      color: $brown-200;
    }

    &__button {
      margin-top: 24px;
    }
  }
}
</style>
