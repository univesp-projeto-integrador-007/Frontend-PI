<template>
  <div class="login">
    <form class="login__container" @submit="loginSubmit">
      <h1>Faça seu login para continuar</h1>
      <div class="login__wrapper" />
      <input
        required
        class="login__input"
        type="email"
        placeholder="Insira seu email"
        v-model="email"
      />
      <input
        required
        class="login__input"
        type="password"
        placeholder="Insira sua senha"
        v-model="password"
      />
      <input type="submit" class="login__submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginSubmit(e) {
      e.preventDefault();
      const payload = {
        email: this.email,
        password: this.password,
      };
      try {
        const res = await axios.post(
          `${process.env.VUE_APP_BACKEND}api/auth/login`,
          payload
        );
        const token = res.data.token;
        localStorage.setItem("token", token);
        this.$router.push("/");
      } catch (err) {
        console.log(err.response.data.msg);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/scss/main.scss";
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 180px;

  h1 {
    margin-top: 100px;
    font-size: 2rem;
    color: $primary;
  }

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__wrapper {
    width: 100%;
    background: $yellow-150;
    height: 2px;
    margin: 20px 0;
  }

  &__input {
    width: 90%;
    padding: 12px 24px;
    background: transparent;
    border-radius: 10px;
    border: 2.5px solid $yellow-150;
    margin-bottom: 16px;
    font-size: 20px;
    color: $brown-200;

    @media (max-width: $tablet) {
      width: 90%;
    }

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: $brown-200;
      font-size: 20px;
    }
  }

  &__submit {
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
}
</style> 