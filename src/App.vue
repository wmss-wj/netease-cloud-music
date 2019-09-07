<template>
  <div id="app">
    <launcher />

    <template v-if="!this.$store.state.isTourist && !this.$store.state.isLogin">
      <login />
    </template>
    <template v-else>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </template>
  </div>
</template>

<script>
import Launcher from './components/launcher.vue'
import Login from './components/login.vue'
export default {
  components: {
    Launcher,
    Login
  },
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;

  text-align: center;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
