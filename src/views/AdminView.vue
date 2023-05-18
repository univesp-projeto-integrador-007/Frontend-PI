<template>
  <div class="admin">
    <div class="admin__container">
      <router-link to="/admin/pedidos">
        <button>Ir para pedidos</button>
      </router-link>

      <div class="admin__wrapper" />
      <router-link to="/admin/produtos">
        <button>Ir para seus Produtos</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {},
};
</script>


<style lang="scss" scoped>
@import "@/scss/main.scss";
.admin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 180px 0;

  h1 {
    margin-top: 100px;
    font-size: 2rem;
    color: $primary;
  }

  &__container {
    display: flex;
    flex-direction: column;

    button {
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

  &__wrapper {
    width: 100%;
    background: $yellow-150;
    height: 2px;
    margin: 20px 0;
  }
}
</style> 