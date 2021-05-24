import Vue from 'vue'
import Vuex from 'vuex'
import collection from './collection.js'
import looks from './closerlook.js'
import article from './article.js'
import questionBank from "./questionBank"
import brandManual from "./brandManual"
import pack from "./pack.js"
import bus from "./bus.js"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {


    },
    getters: {

    },
    mutations: {

    },
    actions: {},
    modules: {
        collection,
        looks,
        article,
        questionBank,
        brandManual,
        pack,
        bus
    }
})