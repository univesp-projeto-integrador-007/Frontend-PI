<template>
  <button class="chip">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Chip",
  props: {
    text: { type: String, default: "", required: true },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.chip {
  font-size: 16px;
  font-weight: 400;
  font-family: "Cairo", sans-serif;
  background: transparent;
  color: $brown-200;
  border: 2px solid $yellow-100;
  border-radius: 30px;
  min-width: 130px;
  cursor: pointer;

  &:hover {
    animation: changeColor 0.5s ease-in-out forwards;
  }
}

@keyframes changeColor {
  100% {
    background: $orange-50;
    color: $secondary;
  }
}
</style>
