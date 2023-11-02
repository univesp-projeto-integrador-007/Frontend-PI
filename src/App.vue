<template>
  <div id="app">
    <Header
      :isLogged="isLogged"
      @searchTypeUser="searchTypeUser"
      @handleToLogin="handleToLogin"
      @handleLogout="handleLogout"
    />
    <router-view class="content-wrap" @searchTypeUser="searchTypeUser" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
  data() {
    return {
      isLogged: false,
    };
  },

  created() {
    this.searchTypeUser();
  },
  methods: {
    searchTypeUser() {
      const tokenArmazenado = localStorage.getItem("token");

      if (tokenArmazenado) {
        this.isLogged = true;
        return;
      }

      this.isLogged = false;
    },
    handleToLogin() {
      if (this.isLogged) {
        return this.$router.push("/admin");
      }
      return this.$router.push("/login");
    },
    handleLogout() {
      localStorage.removeItem("token");
      this.searchTypeUser();
    },
  },
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
  scroll-behavior: smooth;
}

.content-wrap {
  padding: 100px 0;
}

body {
  background: $background;
}
</style>
