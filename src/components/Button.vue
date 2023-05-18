<template>
  <button class="button" :class="{ '--outline': true }" @click="handleClick()">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: { type: String, default: "", required: true },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
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
  color: $orange-50;
  border: 2.5px solid $orange-50;
  border-radius: 30px;
  cursor: pointer;
  flex-wrap: nowrap;

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
