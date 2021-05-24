import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: {
        qanda: [

            {
                question: "question - 1 ",
                answerA: "answer - 1 ",
                answerB: "answer - 1 "
            },
            {
                question: "question - 2 ",
                answerA: "answer - 2 ",
                answerB: "answer - 2 "
            },
            {
                question: "question - 3 ",
                answerA: "answer - 3 ",
                answerB: "answer - 3 "
            },
            {
                question: "question - 4 ",
                answerA: "answer - 4 ",
                answerB: "answer - 4 "
            }
        ]



    },
    getters: {
        qanda(state) {
            return state.qanda
        },
    },
    mutations: {

    },
    actions: {},
    modules: {}
}