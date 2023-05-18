<template>
  <form class="modal-product">
    <div class="modal-product__close" @click="handleModal">
      <img src="@/assets/close.svg" />
    </div>
    <input
      required
      class="modal-product__input"
      type="text"
      v-model="name"
      placeholder="Insira o nome do produto"
    />
    <input
      required
      class="modal-product__input"
      type="text"
      v-model="description"
      placeholder="Insira a descrição do produto"
    />
    <input
      required
      class="modal-product__input"
      type="text"
      v-model="type"
      placeholder="Insira o tipo do produto "
    />
    <input
      required
      class="modal-product__input"
      type="text"
      v-model="price"
      placeholder="Insira o preço do produto"
    />
    <input
      class="modal-product__input"
      type="text"
      v-model="oldPrice"
      placeholder="Insira o preço antigo  do produto"
    />
    <input
      required
      class="modal-product__input"
      type="text"
      v-model="image"
      placeholder="Insira o link de imagem do produto"
    />
    <span>
      <input type="checkbox" v-model="isEmphasis" />
      Destaque
    </span>

    <input
      class="modal-product__button"
      type="submit"
      :value="textButton"
      @click="handleAction"
    />
  </form>
</template>

<script>
import ConvertMoney from "@/helpers/convert-money.js";

export default {
  name: "ModalProduct",
  props: {
    valueDefault: { type: Object, required: false },
  },
  computed: {
    textButton() {
      if (!this.valueDefault) {
        return "Adicionar";
      }
      return "Editar";
    },
  },
  mounted() {
    if (this.valueDefault) {
      this.name = this.valueDefault.name;
      this.description = this.valueDefault.description;
      this.type = this.valueDefault.type;
      this.price = this.valueDefault.price;
      this.oldPrice = this.valueDefault.oldPrice
        ? this.valueDefault.oldPrice
        : "";
      this.image = this.valueDefault.image;
      this.isEmphasis = this.valueDefault.isEmphasis;
    }
  },
  data() {
    return {
      name: "",
      description: "",
      type: "",
      price: "",
      oldPrice: "",
      image: "",
      isEmphasis: false,
    };
  },
  methods: {
    maskedMoney(value) {
      return ConvertMoney(value);
    },
    handleAction(e) {
      e.preventDefault();
      const payload = {
        name: this.name,
        description: this.description,
        type: this.type,
        price: this.price,
        oldPrice: this.oldPrice,
        image: this.image,
        isEmphasis: this.isEmphasis,
        id: this.valueDefault._id,
      };
      if (this.valueDefault) {
        return this.$emit("EditProduct", payload);
      }
      return this.$emit("AddProduct", payload);
    },

    handleModal() {
      this.$emit("handleModal", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.modal-product {
  position: absolute;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 800px;
  padding: 40px;
  border-radius: 8px;
  color: $primary;
  text-align: left;

  &__close {
    border: 1px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    cursor: pointer;

    img {
      width: 20px;
    }
  }

  &__title {
    font-weight: 700;
  }

  &__input {
    width: 80%;
    padding: 12px 24px;
    background: transparent;
    border-radius: 10px;
    border: 2.5px solid $yellow-100;
    margin-bottom: 16px;
    font-size: 20px;
    color: $brown-200;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: $brown-200;
      font-size: 20px;
    }
  }

  span {
    width: 80%;
    font-size: 1.5rem;
    color: $primary;
  }

  &__button {
    background: $primary;
    color: #fff;
    font-size: 1.1rem;
    padding: 15px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 400;

    &:hover {
      filter: opacity(0.9);
      transition: 0.5s;
    }

    &:active {
      filter: brightness(0.7);
      transition: 0.4s;
    }
  }
  input[type="checkbox"] {
    position: relative;
    border: 2px solid $primary;
    border-radius: 2px;
    background: none;
    cursor: pointer;
    line-height: 0;
    margin: 0 0.6em 0 0;
    outline: 0;
    padding: 0 !important;
    vertical-align: text-top;
    height: 20px;
    width: 20px;
    -webkit-appearance: none;
    opacity: 0.5;
  }

  input[type="checkbox"]:hover {
    opacity: 1;
  }

  input[type="checkbox"]:checked {
    background-color: $primary;
    opacity: 1;
  }

  input[type="checkbox"]:before {
    content: "";
    position: absolute;
    right: 50%;
    top: 50%;
    width: 4px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    margin: -1px -1px 0 -1px;
    transform: rotate(45deg) translate(-50%, -50%);
    z-index: 2;
  }
}
</style>
