import languages from "../../assets/languages.json"
import glossary from "../../assets/glossary.json"
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
        langModel: {},
        langId: "",
        glossaryModel: {},
    },
    getters: {
        loading: state => state.loading,
        loaded: state => state.loaded,
        error: state => state.error,
        error_msg: state => state.error_msg,
        langModel: state => state.langModel,
        langId: state => state.langId,
        glossaryModel: state => state.glossaryModel,
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
            state.langId = languages[0].id;

            var orderedGlossary = glossary.sort((a, b) => a.term[state.langId] > b.term[state.langId] ? 1 : -1);
            state.glossaryModel = orderedGlossary;
        },
        setLang(state, nextId){
          state.langId = nextId;
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
