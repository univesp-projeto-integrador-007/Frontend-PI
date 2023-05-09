<template>
  <div class="header">
    <div>
      <h1>Logo</h1>
    </div>
    <div>
      <ul class="header__options">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/produtos">Produtos</router-link></li>
        <li><router-link to="/quem-somos">Quem somos</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $secondary;
  padding: 0 75px;

  &__options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  }
}
</style>
