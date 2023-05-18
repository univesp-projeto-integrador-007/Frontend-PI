<template>
  <div class="carousel">
    <div class="parent">
      <div class="one">
        <div class="one__container">
          <h1>A doceria onde o principal ingrediente é amor.</h1>
          <p>Feito com frutas selecionadas</p>
          <a href="#cardapio">
            <Button text="Ver cardápio" />
          </a>
        </div>
      </div>
      <div class="two"></div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Carousel",
  components: { Button },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.carousel {
  width: 100%;
  height: 400px;
}

.parent {
  position: relative;
  width: 100%;
}
.one {
  position: absolute;
  height: 400px;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1365px) {
    width: 55%;
  }

  &__container {
    width: 470px;
    text-align: left;

    h1 {
      line-height: 40px;
      font-size: 36px;
      font-weight: 700;
      color: $yellow-50;
      margin-bottom: 8px;
    }

    p {
      font-size: 22px;
      font-weight: 400;
      color: $orange-50;
      margin-bottom: 40px;
    }
  }
}
.two {
  position: absolute;
  height: 400px;
  width: 65%;
  @media (min-width: $desktop) {
    width: 43%;
  }
}
.one {
  left: 0;
  top: 0;
  background: $secondary;
}
.two {
  right: 0;
  top: 0;
  background-image: url("@/assets/candy.svg");
  -webkit-clip-path: polygon(30% 0, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(30% 0, 100% 0%, 100% 100%, 0% 100%);
}
</style>
