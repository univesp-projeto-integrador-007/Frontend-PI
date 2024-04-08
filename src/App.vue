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
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { onMounted, ref } from 'vue'
import router from './router'

export default {
  components: { Header, Footer },
  setup() {
    const isLogged = ref(false)

    const searchTypeUser = () => {
      const tokenArmazenado = localStorage.getItem('token')
      isLogged.value = !!tokenArmazenado
    }

    const handleToLogin = () => {
      if (isLogged.value) {
        return router.push('/admin')
      }
      return router.push('/login')
    }

    const handleLogout = () => {
      localStorage.removeItem('token')
      searchTypeUser()
    }

    onMounted(() => {
      searchTypeUser()
    })

    return { isLogged, searchTypeUser, handleToLogin, handleLogout }
  }
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
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
