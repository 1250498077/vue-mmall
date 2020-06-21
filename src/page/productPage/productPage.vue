<template>
  <div class="product">

    <div>
      <el-button
        round
        v-for="(item, key, index) in categoryList"
        v-bind:key="index"
        v-on:click="selectCategory(item)"
      >{{item.name}}</el-button>
    </div>

    <div class="container-block">
      <div v-for="(item, key, index) in list" v-bind:key="index" class="product-item">
        <div class="product-item-img-container">
          <img :src="item.imageHost + item.mainImage" class="product-item-img" />
        </div>
        <div class="product-title">{{item.subtitle}}</div>
        <div class="product-price">{{item.price}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import productPageStore from "./productPageStore";
import config from "../../common/http-config";

export default {
  name: "App",
  data: () => {
    return {
      list: [],
      categoryList: [],
      keyword: "",
      categoryId: ""
    };
  },
  components: {},
  created() {
    this.getProduct();
    this.getCategory();
  },
  methods: {
    async getProduct(keyword = "", categoryId = "", page = 1, size = 10) {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      let res = await axios({
        method: "get",
        withCredentials: true,
        url: `${config.httpURL}/product/list.do?keyword=${keyword}&categoryId=${categoryId}&page=${page}&size=${size}`
      });
      loading.close();
      this.list = res.data.data.list;
    },
    async getCategory() {
      let res = await axios({
        method: "get",
        url: `${config.httpURL}/category/list.do`
      });
      this.categoryList = res.data.data;
    },
    selectCategory(category) {
      this.getProduct("", category.id);
    }
  }
};
</script>

<style lang="scss" scoped >
.product {
  width: 100%;
  height: 100%;
  .container-block {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .product-item {
      width: 200px;
      height: 400px;
      margin: 10px 10px;
      .product-item-img-container {
        width: 200px;
        height: 200px;
        .product-item-img {
          width: 100%;
          height: 100%;
        }
      }
      .product-title {
        text-align: left;
      }
      .product-price {
        text-align: left;
        color: #ffbf2e;
      }
    }
  }
}
</style>
