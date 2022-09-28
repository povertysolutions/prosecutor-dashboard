import { createApp } from 'vue'
import { createStore } from 'vuex'
// import appStore from "./app.store"
import lang from "./langStore"

var store;
export default store = createStore({
  namespaced: true,
  modules:{
      // app: appStore,
      lang
  }
})
