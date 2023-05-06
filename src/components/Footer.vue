<template>
  <div class="footer"></div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.footer {
  background: $dark-green;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;

  &__options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    margin-right: 250px;
  }
}
</style>
