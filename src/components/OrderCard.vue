<template>
  <div class="order-card">
    <p><span class="order-card__title"> Pedido Nº: </span> {{ order._id }}</p>
    <p><span class="order-card__title"> Data: </span> {{ order.date }}</p>
    <p><span class="order-card__title"> Nome: </span> {{ order.name }}</p>
    <p>
      <span class="order-card__title"> Telefone: </span> {{ order.phoneNumber }}
    </p>
    <p>
      <span class="order-card__title"> Valor Total: </span>
      {{ maskedMoney(order.value) }}
    </p>
    <p class="order-card__title">Produtos:</p>
    <div v-for="order in order.products" :key="order._id">
      {{ order.name }}
    </div>
  </div>
</template>

<script>
import ConvertMoney from "@/helpers/convert-money.js";

export default {
  name: "OrderCard",
  props: {
    order: { type: Object, required: true },
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

.order-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 400px;
  padding: 12px 24px;
  background: $yellow-100;
  border-radius: 8px;
  color: $primary;
  margin: 15px;

  &__title {
    font-weight: 700;
  }
}
</style>
