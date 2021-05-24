import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default ({
    state: {

bus: [
    {    img1: "businesscard1.1.png"},
    {
        img2: "businesscard1.2.png"
    }

 
]


    },
    getters: {
bus(state) {
    return state.bus
}
    },
    mutations: {

    },
    actions: {},

})