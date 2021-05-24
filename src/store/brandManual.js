import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default ({
    state: {
        bible: [
            {
                id: 1,
               page0: "img50.jpg",
            },
                 {
                    id: 1,
                   page1: "img50.jpg",
                },
                 {
                    id: 2,
                    page2: 'collection02.jpg',           
                },
                //   {
                //     id: 3,
                //     page1: 'collection01.jpg',
                // },
                //  {
                //     id: 4,
                //     page1: 'collection03.jpg'
                // }

            
        ]
          
          
        
  

    },
    getters: {
        getAltaImgArray(state) {
          console.log(state.bible)
            return state.bible
        }

    },
    mutations: {

    },
    actions: {},
 
})