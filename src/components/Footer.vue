<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container__items">
        <div class="footer__container__items__item">
          <Facebook />
        </div>
        <div class="footer__container__items__item">
          <Instagram />
        </div>
        <div class="footer__container__items__item">
          <Whatsapp />
        </div>
      </div>
      <div class="footer__container__text">Copyright © D.Brigadeiros 2023</div>
    </div>
  </div>
</template>

<script>
import Facebook from "@/assets/icon-facebook.svg";
import Instagram from "@/assets/icon-instagram.svg";
import Whatsapp from "@/assets/icon-whatsapp.svg";

export default {
  name: "Footer",
  components: { Facebook, Instagram, Whatsapp },
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
