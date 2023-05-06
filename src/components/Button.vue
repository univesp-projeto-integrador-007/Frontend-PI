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
  background: #006c67;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    filter: opacity(0.7);
  }
}
</style>
