
import Vue from 'vue'
import Vuex from 'vuex'

import customer from "./customer";
import order from "./order";



Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        name:'',
        description:'',
        img:'',
        price:0,
        quantity:0
    },

    mutations: {


    },

    actions: {

    },

    getters: {


    },

    modules: {
        customer,
        order,
    }
})

export default store;
