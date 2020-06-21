<template>
  <div class="login">
    
  </div>
</template>

<script>

import axios from "axios";
import peoductDetail from './peoductDetail'

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
