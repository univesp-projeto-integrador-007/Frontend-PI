<template>
  <div id="app">
    <Header />
    <router-view class="content-wrap" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  min-height: 100vh;
}

.content-wrap {
  padding: 100px 0;
}

body {
  background: $background;
}
</style>
