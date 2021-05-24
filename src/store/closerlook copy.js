import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: {
        lookObj: {
            articleNumber: 5432,
            titleT: "Sauti",
            titleBtm: "Sol",
            athrName: "MONic SDF",
            artBodyText: "ljfksdjkdlsf",
            headerImg: "img55.jpg",
            looksPhotoArray: [
                {
                    collectionHeaderText: "hello 0",
                    collectionImg: "img50.jpg",
                    editionName: "Alpha",
                },
                {
                    collectionHeaderText: "hello 0",
                    collectionImg: "img51.jpg",
                    editionName: "Beta",
                },
                {
                    collectionHeaderText: "hello 1",
                    collectionImg: "img52.jpg",
                    editionName: "Delta",
                },

                {
                    collectionHeaderText: "hello 3",
                    collectionImg: "img53.jpg",
                    editionName: "Omega",
                },
                {
                    collectionHeaderText: "hello 4",
                    collectionImg: "img54.jpg",
                    editionName: "Zeta",
                },
            ],
        },
        looks: [

            {
                articleNumber: 5432,
                titleT: "Aniversario",
                titleBtm: "Moda 75 ",
                athrName: "Javier Lopez · Miguel Barbera",
                headerImg: "img57.jpg",
                credit: [
                    { title: "photography", value: "Javier Lopez" },
                    { title: "publisher", value: "Miguel Barbera" },
                ],
                looksPhotoArray: [
                    {
                        collectionHeaderText: "hello 0",
                        collectionImg: "img56.jpg",
                        editionName: "Alpha",
                    },
                    {
                        collectionHeaderText: "hello 0",
                        collectionImg: "img51.jpg",
                        editionName: "Beta",
                    },
                    {
                        collectionHeaderText: "hello 1",
                        collectionImg: "img52.jpg",
                        editionName: "Delta",
                    },

                    {
                        collectionHeaderText: "hello 3",
                        collectionImg: "img53.jpg",
                        editionName: "Omega",
                    },
                    {
                        collectionHeaderText: "hello 4",
                        collectionImg: "img54.jpg",
                        editionName: "Zeta",
                    },
                    {
                        collectionHeaderText: "hello 4",
                        collectionImg: "img55.jpg",
                        editionName: "Zeta",
                    },
                ],
            },
            {
                articleNumber: 5432,
                titleT: "Sauti",

                titleBtm: "Sol",
                athrName: "SPACE KRTVE",
                artBodyText: "ljfksdjkdlsf",
                headerImg: "img20.jpg",
                credit: [
                    { title: "production", value: "SPACE KRTVE" },
                    { title: "in frame", value: "SAUTI SOL" },
                    { title: "makeup", value: "SINITTA AKELLO" },
                    { title: "outfits", value: "BANKOLE THOMAS" },
                    { title: "styling", value: "BRIAN BABU" },
                    { title: "publisher", value: "Arthur Keef" },
                ],
                looksPhotoArray: [
                    {
                        collectionHeaderText: "hello 0",
                        collectionImg: "img21.jpg",
                        editionName: "Alpha",
                    },
                    {
                        collectionHeaderText: "hello 0",
                        collectionImg: "img22.jpg",
                        editionName: "Beta",
                    },
                    {
                        collectionHeaderText: "hello 1",
                        collectionImg: "img23.jpg",
                        editionName: "Delta",
                    },

                    {
                        collectionHeaderText: "hello 3",
                        collectionImg: "img25.jpg",
                        editionName: "Omega",
                    },
                    {
                        collectionHeaderText: "hello 4",
                        collectionImg: "img26.jpg",
                        editionName: "Zeta",
                    },
                ],
            },
            {
                articleNumber: 5432,
                titleT: "Harper's Bazaar",
                titleBtm: "España: La Lista",
                athrName: "Javier Lopez · Miguel Barbera",
                artBodyText: "ljfksdjkdlsf",
                headerImg: "img38.jpg",
                credit: [
                    { title: "photography", value: "Javier Lopez" },
                    { title: "publisher", value: "Miguel Barbera" },
                ],
                looksPhotoArray: [
                    {
                        collectionHeaderText: "hello 0",
                        collectionImg: "img30.jpg",
                        editionName: "Alpha",
                    },
                    {
                        collectionHeaderText: "hello 0",
                        collectionImg: "img37.jpg",
                        editionName: "Beta",
                    },
                    {
                        collectionHeaderText: "hello 1",
                        collectionImg: "img36.jpg",
                        editionName: "Delta",
                    },
                    {
                        collectionHeaderText: "hello 2",
                        collectionImg: "img33.jpg",
                        editionName: "Gamma",
                    },
                    {
                        collectionHeaderText: "hello 3",
                        collectionImg: "img34.jpg",
                        editionName: "Omega",
                    },
                    {
                        collectionHeaderText: "hello 4",
                        collectionImg: "img35.jpg",
                        editionName: "Zeta",
                    },
                ],
            },
            {
                articleNumber: 5432,
                titleT: "Harper's Bazaar",
                titleBtm: "Hong Kong: Kate Kolin",
                athrName: "Javier Lopez · Miguel Barbera",
                artBodyText: "ljfksdjkdlsf",
                headerImg: "img29.jpg",
                credit: [
                    { title: "photography", value: "Javier Lopez" },
                    { title: "publisher", value: "Miguel Barbera" },
                ],
                looksPhotoArray: [
                    {
                        collectionHeaderText: "hello 0",
                        collectionImg: "img41.jpg",
                        editionName: "Alpha",
                    },
                    {
                        collectionHeaderText: "hello 0",
                        collectionImg: "img42.jpg",
                        editionName: "Beta",
                    },
                    {
                        collectionHeaderText: "hello 1",
                        collectionImg: "img43.jpg",
                        editionName: "Delta",
                    },
                    {
                        collectionHeaderText: "hello 2",
                        collectionImg: "img44.jpg",
                        editionName: "Gamma",
                    },
                    {
                        collectionHeaderText: "hello 3",
                        collectionImg: "img45.jpg",
                        editionName: "Omega",
                    },
                    {
                        collectionHeaderText: "hello 4",
                        collectionImg: "img46.jpg",
                        editionName: "Zeta",
                    },
                ],
            },
        ],

    },
    getters: {
        currentLook(state) {
            return state.looks
        },
        lookObj(state) {
            return state.lookObj
        }
    },
    mutations: {
        updateLook(state, data) {
            state.currentLook = data
        },
        updateLookObj(state, data) {
            state.lookObj = data
        }
    },
    actions: {
    },
    modules: {
    }
}

