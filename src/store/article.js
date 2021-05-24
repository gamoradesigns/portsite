import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: {
        articleObj: {

            titleT: "Agile",
            titleBtm: "Fitness",
            athrName: "Monte Mone",
            articleImg: "fashion18.jpg",
            artBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet mauris commodo quis imperdiet massa. Tristique risus nec feugiat in. Morbi leo urna molestie at elementum eu facilisis sed. Nullam non nisi est sit amet facilisis. Ut tristique et egestas quis ipsum suspendisse ultrices. Bibendum at varius vel pharetra vel turpis nunc. Adipiscing commodo elit at imperdiet dui. Urna et pharetra pharetra massa massa ultricies. Nam aliquam sem et tortor consequat id.Aliquet nec ullamcorper sit amet risus nullam eget.Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc.Pretium fusce id velit ut tortor pretium viverra suspendisse potenti.Facilisis mauris sit amet massa.Ac placerat vestibulum lectus mauris ultrices eros in .Vulputate mi sit amet mauris commodo.Nisl pretium fusce id velit ut tortor pretium.Velit euismod in pellentesque massa placerat duis.Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.Aliquam purus sit amet luctus.Nulla aliquet porttitor lacus luctus accumsan.Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.Arcu vitae elementum curabitur vitae nunc sed velit.Magna fringilla urna porttitor rhoncus dolor.Turpis in eu mi bibendum neque.Cras semper auctor neque vitae tempus.Luctus accumsan tortor posuere ac.Pretium nibh ipsum consequat nisl vel. Sed blandit libero volutpat sed cras ornare arcu dui vivamus.Elit sed vulputate mi sit amet mauris commodo quis.Vel quam elementum pulvinar etiam non quam lacus.Sit amet est placerat in egestas erat imperdiet sed.Ipsum nunc aliquet bibendum enim.Donec et odio pellentesque diam volutpat commodo sed egestas.Arcu risus quis varius quam quisque.Neque egestas congue quisque egestas diam in arcu cursus euismod.Senectus et netus et malesuada.Aliquet risus feugiat in ante metus.Vitae sapien pellentesque habitant morbi tristique.Neque ornare aenean euismod elementum.Non nisi est sit amet facilisis magna etiam tempor.A lacus vestibulum sed arcu non odio.Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.In nibh mauris cursus mattis molestie a.Cras sed felis eget velit aliquet sagittis id consectetur.Nec ultrices dui sapien eget mi proin.Eget mi proin sed libero enim sed faucibus turpis. Pellentesque elit eget gravida cum sociis natoque penatibus.Porta non pulvinar neque laoreet suspendisse.Tristique et egestas quis ipsum suspendisse.Diam quis enim lobortis scelerisque.Proin fermentum leo vel orci porta non pulvinar neque laoreet.Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.Aliquet enim tortor at auctor urna nunc id cursus.Dui accumsan sit amet nulla facilisi morbi tempus iaculis.Volutpat diam ut venenatis tellus in metus vulputate.Consequat id porta nibh venenatis cras sed. Ut sem nulla pharetra diam sit.Facilisis volutpat est velit egestas dui.At tempor commodo ullamcorper a lacus vestibulum sed.Ornare lectus sit amet est placerat in .Id volutpat lacus laoreet non.Mattis nunc sed blandit libero volutpat sed cras ornare arcu.Phasellus vestibulum lorem sed risus ultricies tristique nulla.Et malesuada fames ac turpis egestas integer.Consectetur a erat nam at lectus urna duis convallis.Enim sed faucibus turpis in .Tempus quam pellentesque nec nam aliquam sem.",

        },
        articles: [{
            titleT: "Agile",
            titleBtm: "Fitness",
                athrName: "Your Tailored Fitness Journey",
                articleImg: "fashion18.jpg",
                artBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet mauris commodo quis imperdiet massa. Tristique risus nec feugiat in. Morbi leo urna molestie at elementum eu facilisis sed. Nullam non nisi est sit amet facilisis. Ut tristique et egestas quis ipsum suspendisse ultrices. Bibendum at varius vel pharetra vel turpis nunc. Adipiscing commodo elit at imperdiet dui. Urna et pharetra pharetra massa massa ultricies. Nam aliquam sem et tortor consequat id.Aliquet nec ullamcorper sit amet risus nullam eget.Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc.Pretium fusce id velit ut tortor pretium viverra suspendisse potenti.Facilisis mauris sit amet massa.Ac placerat vestibulum lectus mauris ultrices eros in .Vulputate mi sit amet mauris commodo.Nisl pretium fusce id velit ut tortor pretium.Velit euismod in pellentesque massa placerat duis.Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.Aliquam purus sit amet luctus.Nulla aliquet porttitor lacus luctus accumsan.Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.Arcu vitae elementum curabitur vitae nunc sed velit.Magna fringilla urna porttitor rhoncus dolor.Turpis in eu mi bibendum neque.Cras semper auctor neque vitae tempus.Luctus accumsan tortor posuere ac.Pretium nibh ipsum consequat nisl vel. Sed blandit libero volutpat sed cras ornare arcu dui vivamus.Elit sed vulputate mi sit amet mauris commodo quis.Vel quam elementum pulvinar etiam non quam lacus.Sit amet est placerat in egestas erat imperdiet sed.Ipsum nunc aliquet bibendum enim.Donec et odio pellentesque diam volutpat commodo sed egestas.Arcu risus quis varius quam quisque.Neque egestas congue quisque egestas diam in arcu cursus euismod.Senectus et netus et malesuada.Aliquet risus feugiat in ante metus.Vitae sapien pellentesque habitant morbi tristique.Neque ornare aenean euismod elementum.Non nisi est sit amet facilisis magna etiam tempor.A lacus vestibulum sed arcu non odio.Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.In nibh mauris cursus mattis molestie a.Cras sed felis eget velit aliquet sagittis id consectetur.Nec ultrices dui sapien eget mi proin.Eget mi proin sed libero enim sed faucibus turpis. Pellentesque elit eget gravida cum sociis natoque penatibus.Porta non pulvinar neque laoreet suspendisse.Tristique et egestas quis ipsum suspendisse.Diam quis enim lobortis scelerisque.Proin fermentum leo vel orci porta non pulvinar neque laoreet.Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.Aliquet enim tortor at auctor urna nunc id cursus.Dui accumsan sit amet nulla facilisi morbi tempus iaculis.Volutpat diam ut venenatis tellus in metus vulputate.Consequat id porta nibh venenatis cras sed. Ut sem nulla pharetra diam sit.Facilisis volutpat est velit egestas dui.At tempor commodo ullamcorper a lacus vestibulum sed.Ornare lectus sit amet est placerat in .Id volutpat lacus laoreet non.Mattis nunc sed blandit libero volutpat sed cras ornare arcu.Phasellus vestibulum lorem sed risus ultricies tristique nulla.Et malesuada fames ac turpis egestas integer.Consectetur a erat nam at lectus urna duis convallis.Enim sed faucibus turpis in .Tempus quam pellentesque nec nam aliquam sem.",
            },
            {
                titleT: "ALTA",
                titleBtm: "Payment Stment",
                athrName: "Good bye cash, hello alta",
                articleImg: "/agile/agile2.jpg",
                artBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.",
            },
            {
                titleT: "Product & Packaging",
                titleBtm: "Design",
                athrName: "",
                articleImg: "fashion19.jpg",
                artBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.",
            },
            {
                titleT: " Stationery ",
                titleBtm: "Design",
                athrName: "",
                articleImg: "fashion16.jpg",
                artBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.",
            },
        ],

    },
    getters: {
        articleObj(state) {
            return state.articleObj
        },
        articles(state) {
            return state.articles
        },

    },
    mutations: {
        updateArticles(state, data) {
            state.articles = data
        },
        updateArticleObj(state, data) {
            console.log('from store', data)
            state.articleObj = data
        }
    },
    actions: {},
    modules: {}
}