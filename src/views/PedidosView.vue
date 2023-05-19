<template>
  <div class="orders">
    <h1>Pedidos:</h1>

    <div v-for="order in orders" :key="order._id">
      <OrderCard :order="order" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OrderCard from "@/components/OrderCard.vue";

export default {
  name: "PedidosView",
  components: { OrderCard },
  data() {
    return {
      orders: [],
    };
  },

  async mounted() {
    try {
      const tokenArmazenado = localStorage.getItem("token");
      if (!tokenArmazenado) {
        return this.$router.push("/");
      }
      const res = await axios.get(`${process.env.VUE_APP_BACKEND}api/orders`, {
        headers: {
          Authorization: `Bearer ${tokenArmazenado}`,
        },
      });
      this.orders = res.data;
    } catch (err) {
      console.log(err.response.data.msg);
    }
  },

  methods: {
    HandleProduct(value) {
      this.$store.commit("storeCurrentProduct", value);
      this.$router.push("/produtos");
    },
    handleFilter(value) {
      this.filter = value;
    },
    itensUnicos(arr) {
      return arr.filter((v, i, a) => a.indexOf(v) === i);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.orders {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 100%;
  padding-bottom: 180px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: $primary;
    margin-bottom: 30px;
  }
}
</style>
