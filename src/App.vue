<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'blog' }"> Blog </router-link> |
    </div>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    "app-footer": Footer,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0b88b9;
    }
  }
}
</style>
