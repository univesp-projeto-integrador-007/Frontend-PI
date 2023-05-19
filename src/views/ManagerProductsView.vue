<template>
  <div class="products">
    <h1>Produtos:</h1>
    <modal-product
      v-if="modal.isShow"
      :valueDefault="modal.valueDefault"
      @handleModal="handleModal"
      @AddProduct="AddProduct"
      @EditProduct="EditProduct"
    />
    <div class="products__top">
      <span>Nome</span>
      <span>Código</span>
      <span>Tipo</span>
      <span>Valor</span>
      <button @click="handleModal(true)">
        <img src="@/assets/plus-circle.svg" alt="" /> Adicionar produto
      </button>
    </div>
    <div v-for="product in products" :key="product._id" class="products__table">
      <div class="products__item">
        <span>{{ product.name }}</span>
        <span>{{ product._id }}</span>
        <span>{{ product.type }}</span>
        <span>{{ maskedMoney(product.price) }}</span>
        <span
          ><img
            src="@/assets/edit.svg"
            alt="Editar"
            @click="handleEditProduct(product)" />
          <img
            src="@/assets/trash.svg"
            alt="Excluir"
            @click="handleRemove(product._id)"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ModalProduct from "@/components/ModalProduct.vue";
import ConvertMoney from "@/helpers/convert-money";

export default {
  name: "ManagerProductsView",
  components: { ModalProduct },
  data() {
    return {
      products: [],
      token: "",
      modal: {
        isShow: false,
        valueDefault: "",
      },
    };
  },

  async mounted() {
    this.token = localStorage.getItem("token");
    if (!this.token) {
      return this.$router.push("/");
    }
    this.getInfos();
  },

  methods: {
    async getInfos() {
      try {
        const res = await axios.get(
          `${process.env.VUE_APP_BACKEND}api/products`
        );
        this.products = res.data;
      } catch (err) {
        console.log(err.response.data.msg);
      }
    },
    maskedMoney(value) {
      return ConvertMoney(value);
    },
    async handleRemove(value) {
      try {
        await axios.delete(
          `${process.env.VUE_APP_BACKEND}api/products/${value}`,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );

        this.getInfos();
      } catch (err) {
        console.log(err.response.data.msg);
      }
    },
    handleEditProduct(value) {
      this.modal.valueDefault = value;
      this.handleModal(true);
    },
    handleModal(value) {
      if (!value) {
        this.modal.valueDefault = "";
      }
      this.modal.isShow = value;
    },
    async AddProduct(payload) {
      try {
        await axios.post(
          `${process.env.VUE_APP_BACKEND}api/products/`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );

        this.getInfos();
        this.handleModal(false);
      } catch (err) {
        console.log(err);
      }
    },
    async EditProduct(payload) {
      try {
        await axios.put(
          `${process.env.VUE_APP_BACKEND}api/products/${payload.id}`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );

        this.getInfos();
        this.handleModal(false);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.products {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 180px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: $primary;
    margin-bottom: 30px;
  }

  &__top {
    max-width: 1050px;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    color: $primary;
    font-weight: 700;
    padding: 10px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      background: $primary;
      color: #fff;
      font-size: 0.9rem;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      font-weight: 600;

      &:active {
        filter: brightness(0.7);
        transition: 0.4s;
      }
    }
  }

  &__table {
    width: 90%;
    max-width: 1050px;
  }

  &__item {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    color: $primary;
    border: 1px solid $secondary;
    padding: 5px;

    img {
      width: 25px;
      margin-right: 30px;
      cursor: pointer;
    }
  }
}
</style>
