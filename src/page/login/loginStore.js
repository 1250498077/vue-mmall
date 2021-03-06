import Vue from 'vue';
import Vuex from 'vuex';
import {setWith} from 'lodash';
import request from '../../common/httpServer';
Vue.use(Vuex);
const state = {
    username: '',
    password: '',
    userInfo: null
};
const getters = {   //实时监听state值的变化(最新状态)

};
const mutations = {
    storeState(state, data) {
        let copyState= { ...state };
        Object.keys(data).forEach((key) => {
            copyState= setWith(copyState, key, data[key]);
        });
        state = copyState
    },

};
const actions = {
    setStoreState(context, value) {
        context.commit('storeState', value);
    },
    
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
// 对外暴露一个对象
export default store;