import languages from "../../assets/languages.json"
import Assets from "../utils/assets"
import { createApp } from 'vue'
import { createStore } from 'vuex'

var namespace = "Text.Store:: "

export default {
    namespaced: true,
    state: {
        loading: false,
        loaded: false,
        error: false,
        error_msg: "",
        model: {},
        id: ""
    },
    getters: {
        loading: state => state.loading,
        loaded: state => state.loaded,
        error: state => state.error,
        error_msg: state => state.error_msg,
        model: state => state.model,
        id: state => state.id
    },
    mutations: {
        load(state){
          console.log("loading lang...");
            if (languages === null){
                state.error = true;
                state.error_msg = namespace + "ERROR: 'languages' data is missing or malformatted.";
                return;
            }

            state.model = languages;
            state.id = languages[0].id;
        },
        setLang(state, nextId){
          state.id = nextId;
        },
        setLoading(state, value) {
            state.loading = value;
        },

        setLoaded(state, value) {
            state.loaded = value;
        }
    },
    actions: {
        load({commit}){
            commit('setLoaded', false);
            commit('setLoading', true);
            commit('load');
            commit('setLoaded', true);
            commit('setLoading', false);
        },
        setLang({commit}, nextId){
          commit('setLang', nextId)
        }
    }
}
