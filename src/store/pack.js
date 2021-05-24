import Vue from 'vue'
import Vuex from 'vuex'
// import img1 from "../assets/images/pack/jar1.png"
// import img2 from "../assets/images/pack/standing-back.png"
// import img3 from "../assets/images/pack/standing-front.png"

Vue.use(Vuex)

export default ({
    state: {

packs: [
    {    img1: "jar1.png"},
    {
        img2: "pine1F.png"
    },
    {    img3: "pine4F.png"},
    {
        img4: "pine4B.png"
    },
    {    img5: "pine5F.png"},
    {
        img6: "pine5B.png"
    },
    {    img7: "spa1.png"},
    {
        img8: "spa2.png"
    }

 
]


    },
    getters: {
packs(state) {
    return state.packs
}
    },
    mutations: {

    },
    actions: {},

})