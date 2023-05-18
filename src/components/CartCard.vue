<template>
  <div class="cart-card">
    <img class="cart-card__image" :src="product.image" alt="" />
    <div class="cart-card__description">
      <span class="cart-card__content__type">{{ product.type }}</span>
      <h1 class="cart-card__content__title">{{ product.name }}</h1>
    </div>
    <p class="cart-card__value">{{ maskedMoney(product.price) }}</p>
    <img
      src="@/assets/trash.svg"
      class="cart-card__trash"
      @click="handleRemove(product.name)"
    />
  </div>
</template>

<script>
import ConvertMoney from "@/helpers/convert-money.js";

export default {
  name: "CartCard",
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    handleRemove(value) {
      this.$emit("handleRemove", value);
    },
    maskedMoney(value) {
      return ConvertMoney(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.cart-card {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100px;
  padding: 12px 24px;
  background: $yellow-100;
  border-radius: 8px;

  &__image {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  &__description {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-family: "Cairo", sans-serif;
      color: $brown-100;
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 6px;
    }

    h1 {
      font-weight: 400;
      font-size: 1.3rem;
      color: $primary;
    }
  }

  &__value {
    font-weight: 400;
    color: $brown-100;
    font-size: 1.3rem;
    margin-inline: auto;
  }

  &__trash {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: auto;
  }
}
</style>
