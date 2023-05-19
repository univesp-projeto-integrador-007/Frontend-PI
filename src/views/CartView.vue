<template>
  <div>
    <div class="cart" v-if="cart.length">
      <div class="cart__title">
        <h1>Seu Carrinho</h1>
        <span>{{ numberItems }} itens</span>
      </div>
      <div class="cart__container">
        <div class="cart__container-left">
          <div
            class="cart__container-left__table"
            v-for="product in cart"
            :key="product.id"
          >
            <CartCard :product="product" @handleRemove="handleRemove" />
          </div>
          <h1>
            SubTotal: <span>{{ maskedMoney(addedValues) }}</span>
          </h1>
        </div>
        <div class="cart__container-right">
          <h1>Resumo da compra</h1>
          <div class="cart__container-right__wrapper" />
          <div class="cart__container-right__userData">
            <input v-model="name" type="text" placeholder="Insira seu nome" />
            <input
              v-model="phoneNumber"
              type="tel"
              placeholder="Insira seu telefone"
            />
          </div>
          <div class="cart__container-right__date">
            <button
              class="cart__container-right__date__button"
              @click="handleDate"
            >
              {{ buttonText }}
            </button>
            <DatePicker
              v-model="selectedDate"
              :min-date="new Date()"
              :disabled-dates="{ weekdays: [2, 0] }"
              @click="handleDate"
              v-if="isShow"
            />

            <!-- <div class="cart__container-right__wrapper" /> -->
            <div class="cart__container-right__line">
              <span>Valor total: </span>
              <span>{{ maskedMoney(addedValues) }}</span>
            </div>
            <button class="cart__container-right__button" @click="handleForm">
              Confirmar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="empty" v-else>
      <h1>Não há itens no seu carrinho!</h1>
    </div>
  </div>
</template>

<script>
import CartCard from "@/components/CartCard.vue";
import Button from "@/components/Button.vue";
import ConvertMoney from "@/helpers/convert-money";
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import axios from "axios";

export default {
  components: { CartCard, Button, Calendar, DatePicker },
  name: "CartView",
  data() {
    return {
      cart: {},
      numberItems: 0,
      isShow: false,
      selectedDate: "",
      name: "",
      phoneNumber: "",
    };
  },
  watch: {
    selectedDate(newVal) {
      this.selectedDate = newVal;
      this.isShow = false;
    },
  },
  computed: {
    addedValues() {
      if (this.cart.length) {
        let soma = 0;
        for (var i = 0; i < this.cart.length; i++) {
          soma += this.cart[i].price;
        }
        return soma;
      }
    },
    buttonText() {
      if (this.selectedDate) {
        var data = this.selectedDate,
          dia = data.getDate().toString().padStart(2, "0"),
          mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
          ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
      }
      return "Selecione uma data";
    },
  },
  created() {
    this.cart = this.$store.state.cart;
    this.numberItems = this.cart.length;
  },
  methods: {
    handleRemove(value) {
      this.$store.commit("storeRemoveCart", value);
      this.cart = this.$store.state.cart;
      this.numberItems = this.cart.length;
    },
    maskedMoney(value) {
      return ConvertMoney(value);
    },
    handleDate() {
      this.isShow = !this.isShow;
    },
    async handleForm() {
      try {
        if (
          this.cart &&
          this.addedValues &&
          this.selectedDate &&
          this.name &&
          this.phoneNumber
        ) {
          const payload = {
            products: this.cart,
            value: this.addedValues,
            date: this.buttonText,
            name: this.name,
            phoneNumber: this.phoneNumber,
          };

          const res = await axios.post(
            `${process.env.VUE_APP_BACKEND}api/orders`,
            payload
          );
          this.$router.push("/sucesso");
          this.$store.commit("storeCleanCart");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.cart {
  padding: 50px 150px 180px;

  &__title {
    display: flex;
    width: 50%;
    justify-content: space-between;
    font-weight: 600;
    height: 60px;
    border-bottom: 1px solid $yellow-100;

    h1 {
      font-size: 2rem;
      color: $primary;
    }
    span {
      font-size: 1.7rem;
      color: $brown-100;
    }
  }

  &__container {
    display: flex;
    gap: 50px;
    @media (max-width: $tablet) {
      flex-direction: column;
    }
  }

  &__container-left {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    h1 {
      margin: 36px;
      color: $brown-100;
      font-weight: 400;
      font-size: 1.7rem;
      text-align: right;
      width: 100%;
    }
    span {
      font-weight: 600;
    }
  }

  &__container-right {
    margin-left: 20px;
    background: $yellow-100;
    height: 100%;
    width: 100%;
    padding: 50px 20px;
    border-radius: 8px;

    h1 {
      color: $primary;

      font-weight: 600;
      font-size: 1.7rem;
    }

    &__wrapper {
      background: $yellow-150;
      width: 100%;
      height: 1px;
      margin: 10px 0;
    }

    &__userData {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 100%;

      input {
        width: 50%;
        padding: 12px 24px;
        background: transparent;
        border-radius: 10px;
        border: 2.5px solid $yellow-150;
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
    }

    &__date {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin: 20px;

      h1 {
        color: $brown-100;

        font-weight: 00;
        font-size: 1.2rem;
      }

      &__button {
        background: $primary;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }

    &__button {
      background: $primary;
      color: #fff;
      font-size: 1.1rem;
      width: 320px;
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

    &__line {
      color: $primary;
      font-weight: 600;
      font-size: 1.5rem;
      margin: 50px 0;
    }
  }
}
.empty {
  height: calc(100vh - 250px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    color: $primary;
  }
}
</style>
