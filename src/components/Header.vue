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
        <div v-if="cart.length" class="header__cart__circle">
          {{ cart.length }}
        </div>
        <router-link to="/carrinho"><img src="@/assets/cart.svg" alt="carrinho" /></router-link>
      </li>

      <li class="header__options__login" @click="handleToLogin">
        <div>
          <img src="@/assets/user-login.svg" alt="login" />
        </div>
      </li>
    </ul>
    <div :class="{ active: burgerVisibility }" class="header__hamburger" @click="changeVisibility">
      <span class="header__hamburger__item" />
      <span class="header__hamburger__item" />
      <span class="header__hamburger__item" />
    </div>
    <nav :class="{ active: burgerVisibility }" class="header__nav">
      <ul @click="burgerVisibility = false">
        <li><router-link to="/quem-somos">Sobre nós</router-link></li>
        <li>
          <router-link to="/carrinho"> Carrinho ({{ numberOfItems }})</router-link>
        </li>
        <li @click="handleToLogin">{{ isLogged ? 'Admin' : 'Login' }}</li>
        <li v-if="isLogged" @click="handleLogout">Desconectar</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      numberOfItems: 0,
      burgerVisibility: false
    }
  },
  props: {
    isLogged: {
      default: false
    }
  },

  computed: {
    cart() {
      console.log(this.$store.state.cart)
      return this.$store.state.cart
    }
  },

  methods: {
    searchTypeUser() {
      this.$emit('searchTypeUser')
    },
    handleToLogin() {
      this.$emit('handleToLogin')
    },
    handleLogout() {
      this.$emit('handleLogout')
    },
    changeVisibility() {
      this.burgerVisibility = !this.burgerVisibility
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.header {
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: $secondary;

  @media (max-width: $tablet) {
    justify-content: space-around;
  }

  &__return {
    padding-left: 100px;
    width: 200px;
    @media (max-width: $tablet) {
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

    @media (max-width: $tablet) {
      display: none;
    }

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

  &__hamburger {
    display: inline-block;
    box-sizing: border-box;
    transition: all 0.3s;
    z-index: 20;
    position: relative;
    width: 40px;
    height: 40px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid $primary;
    cursor: pointer;

    @media (min-width: $tablet) {
      display: none;
    }

    &__item {
      display: inline-block;
      box-sizing: border-box;
      transition: all 0.3s;
      position: absolute;
      width: 30px;
      height: 4px;
      background-color: $primary;
      border-radius: 5px;

      &:nth-of-type(1) {
        top: 8px;
      }
      &:nth-of-type(2) {
        top: 16px;
      }
      &:nth-of-type(3) {
        bottom: 8px;
      }
    }
    &.active {
      border: none;
    }
    &.active .header__hamburger__item:nth-of-type(1) {
      -moz-transform: translateY(10px) rotate(-45deg);
      -webkit-transform: translateY(10px) rotate(-45deg);
      transform: translateY(10px) rotate(-45deg);
      background-color: #fff;
    }
    &.active .header__hamburger__item:nth-of-type(2) {
      transition-duration: 0s;
      opacity: 0;
    }
    &.active .header__hamburger__item:nth-of-type(3) {
      -moz-transform: translateY(-10px) rotate(45deg);
      -webkit-transform: translateY(-10px) rotate(45deg);
      transform: translateY(-10px) rotate(45deg);
      background-color: #fff;
    }
  }

  &__nav {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: $primary;
    z-index: 2;
    padding: 50px;
    color: white;
    display: none;

    ul {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      li {
        text-align: left;
        width: 100%;
        font-size: 28px;
        margin-bottom: 18px;

        a {
          color: white;
        }
      }
    }

    &.active {
      display: block;
    }
  }
}
</style>
