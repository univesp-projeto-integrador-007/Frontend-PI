<template>
  <button class="button" :class="{ '--outline': true }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: { type: String, default: "", required: true },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.button {
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 600;
  background: transparent;
  width: 190px;
  color: $orange-50;
  border: 2.5px solid $orange-50;
  border-radius: 30px;
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
