<template>
  <div class="header">
    <div class="header__return"></div>
    <div class="header__logo">
      <router-link to="/">
        <h1>
          <span> D.</span>
          <img src="@/assets/brigadeiro.svg" alt="" />Brigadeiros
        </h1>
      </router-link>
    </div>
    <ul class="header__options">
      <li><router-link to="/quem-somos">Sobre nós</router-link></li>
      <li class="header__cart">
        <div v-if="numberOfItems" class="header__cart__circle">
          {{ numberOfItems }}
        </div>
        <router-link to="/carrinho"
          ><img src="@/assets/cart.svg" alt="carrinho"
        /></router-link>
      </li>

      <li class="header__options__login" @click="handleToLogin">
        <div>
          <img src="@/assets/user-login.svg" alt="login" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      numberOfItems: 0,
    };
  },

  computed: {
    myProp() {
      return this.$store.state.cart;
    },
  },
  watch: {
    myProp(newValue) {
      this.numberOfItems = newValue.length;
    },
  },
  methods: {
    handleToLogin() {
      const tokenArmazenado = localStorage.getItem("token");
      if (tokenArmazenado) {
        return this.$router.push("/admin");
      }
      return this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.header {
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: $secondary;

  &__return {
    padding-left: 100px;
    width: 200px;
    @media (max-width: $mobile) {
      display: none;
    }
  }

  &__logo {
    color: $primary;
    font-size: 1.9rem;

    span {
      color: #f7b239;
    }
  }

  &__options {
    display: flex;
    align-items: center;
    gap: 32px;
    padding-right: 100px;

    li {
      font-size: 1.2rem;
    }

    &__login {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 3px solid $secondary;
      width: 30px;
      height: 30px;

      img {
        width: 20px;
      }
    }
  }

  &__cart {
    width: 30px;
    height: 25px;
    position: relative;

    &__circle {
      display: flex;
      align-items: center;
      justify-content: center;
      background: red;
      width: 18px;
      height: 18px;
      position: absolute;
      right: -10px;
      top: -10px;
      color: #fff;
      border-radius: 50%;
      font-size: 14px;
    }
  }
}
</style>
