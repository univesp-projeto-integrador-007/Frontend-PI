<template>
  <div class="sucess">
    <div class="sucess__container">
      <img src="@/assets/success.svg" alt="Sucesso" />
      <h1>Seu pedido foi recebido!</h1>
      <p>
        Seu pedido foi recebido, em questão de dúvida ou cancelamento entrar em
        contato no nosso Whatsapp no número: (11) 91234-5678 .
      </p>
      <button @click="handleToHome">Continuar comprando</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "sucess",
  methods: {
    handleToHome() {
      return this.$router.push("/");
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/scss/main.scss";
.sucess {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0 180px;

  @media (max-width: $tablet) {
    padding: 51px 16px 220px;
  }

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }

    h1 {
      margin: 15px 0;
      font-size: 2rem;
      color: $green;

      @media (max-width: $tablet) {
        font-size: 1.4rem;
      }
    }

    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: $brown-100;
      max-width: 800px;
      margin-bottom: 30px;

      @media (max-width: $tablet) {
        font-size: 1.1rem;
      }
    }

    button {
      background: $primary;
      color: #fff;
      font-size: 1.1rem;
      padding: 15px 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 400;

      @media (max-width: $tablet) {
        font-size: 1rem;
      }

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
}
</style> 