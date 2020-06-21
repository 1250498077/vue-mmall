<template>
  <div id="app">
    <div v-if=" currentUrl == '/login'">
      <Login />
    </div>
    <div v-if=" currentUrl !== '/login'">
      <Home />
    </div>
  </div>
</template>

<script>
import Login from "./page/login/loginView.vue";
import Home from "./page/home/homeView";

export default {
  name: "App",
  data: () => {
    return {
      currentUrl: ""
    };
  },
  components: {
    Login,
    Home
  },
  created() {
    console.log('login', location.hash.indexOf('login') !== -1)
    if (location.hash.indexOf('login') !== -1) {
      this.currentUrl = '/login';
    }
  },
  mounted() {
    
  },
  watch: {
    $route(to, from) {
      this.currentUrl = to.path;
    }
  }
};
</script>

<style>
#app {

}
</style>
