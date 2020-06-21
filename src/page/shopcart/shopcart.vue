<template>
  <div class="login">
    <div class="container-block">
      <el-input v-model="username" placeholder="请输入账号"></el-input>
      <el-input v-model="password" placeholder="请输入密码" class="input-password"></el-input>
      <el-button type="primary" class="input-submit" v-on:click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
// import store from "./loginStore";
// import request from '../../common/httpServer';
import axios from "axios";
import shopcart from './shopcart'

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
    async login() {
      let res = await axios({
        method: "post",
        url: "http://localhost:8088/user/login",
        params: {
          username: this.username,
          password: this.password
        }
      });
      


    }
  }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  .container-block {
    width: 500px;
    margin: 0 auto;
    margin-top: 300px;
    .input-password {
      margin-top: 15px;
    }
    .input-submit {
      margin-top: 15px;
    }
  }
}
</style>
