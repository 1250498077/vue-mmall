<template>
  <div class="page">
    <div class="nav">
      <el-button
        v-on:click="login()"
      >登录</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import home from "./home";

export default {
  name: "App",
  data: () => {
    return {
      username: "",
      password: ""
    };
  },
  components: {},
  created: async () => {},
  methods: {
    login() {
      this.$router.push({path: 'login'}); 
    }
  }
};
</script>

<style lang="scss">
.page {
  width: 100%;
  .nav {
    height: 100px;
    background-color: #999;
  }
}
</style>
