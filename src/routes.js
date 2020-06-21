import Vue from 'vue'
import Router from 'vue-router'

import productPage from './page/productPage/productPage';
import shopcart from './page/shopcart/shopcart';
import orderDetail from './page/orderDetail/orderDetail';
import peoductDetail from './page/peoductDetail/peoductDetail';

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'productPage',
        redirect: '/login'
      },
      {
        path: '/product_page',
        name: 'productPage',
        component: productPage
      },
      {
        path: '/shopcart',
        name: 'shopcart',
        component: shopcart
      },
      {
        path: '/order_detail',
        name: 'orderDetail',
        component: orderDetail
      },
      {
        path: '/peoduct_detail',
        name: 'peoductDetail',
        component: peoductDetail
      }
    ]
  })