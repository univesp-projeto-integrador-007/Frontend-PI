<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container__items">
        <div class="footer__container__items__item">
          <img src="@/assets/icon-whatsapp.svg" />
        </div>
        <div class="footer__container__items__item">
          <img src="@/assets/icon-instagram.svg" />
        </div>
        <div class="footer__container__items__item">
          <img src="@/assets/icon-facebook.svg" />
        </div>
      </div>
      <div class="footer__container__text">Copyright © D.Brigadeiros 2023</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.footer {
  background: $primary;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 24px;

    &__items {
      display: flex;
      gap: 20px;

      &__item {
        border: 1px solid $secondary;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 20px;
          height: 20px;
        }
      }
    }

    &__text {
      display: block;
      color: $brown-200;
      font-weight: 600;
    }
  }
}
</style>
