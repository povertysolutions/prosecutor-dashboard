import Vue from "vue"
import Vuex from "vuex"
//import appStore from "./app.store"
import langStore from "./lang.store"

Vue.use(Vuex)

export const store = new Vuex.Store({
    namespaced: true,
    modules:{
        //app: appStore,
        lang: langStore
    }
})
