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
import axios from "axios";
import loginStore from "./loginStore";

export default {
  name: "App",
  data: () => {
    return {
      username: "",
      password: "",
      path: "ws://localhost:8088/websocket/testWebSocket",
      socket: ""
    };
  },
  components: {},
  created: async () => {},
  mounted () {
    this.init()
  },
  methods: {
    async login() {
      let res = await axios({
        method: "post",
        url: "http://localhost:8088/user/login",
        withCredentials: true,
        params: {
          username: this.username,
          password: this.password
        }
      });

      if (res.data.status === 0) {
        this.$message({ message: res.data.msg, type: "success" });
        loginStore.commit("storeState", res.data);
        // 登陆成功跳转到首页
        this.$router.push({ path: "product_page" });
      } else {
        this.$message.error(res.data.msg);
      }
    },

    init: function() {
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path);
        // 监听socket连接
        this.socket.onopen = this.open;
        // 监听socket错误信息
        this.socket.onerror = this.error;
        // 监听socket消息
        this.socket.onmessage = this.getMessage;
      }
    },
    open: function() {
      console.log("socket连接成功");
    },
    error: function() {
      console.log("连接错误");
    },
    getMessage: function(msg) {
      console.log(msg.data);
    },
    send: function() {
      this.socket.send(params);
    },
    close: function() {
      console.log("socket已经关闭");
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .input-password {
      margin-top: 15px;
    }
    .input-submit {
      margin: 0 auto;
      margin-top: 15px;
    }
  }
}
</style>
