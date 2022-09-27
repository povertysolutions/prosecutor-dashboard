var namespace = "App.Store:: "

export default {
    namespaced: true,
    state: {
        loading: false,
        loaded: false,
        error: false,
        error_msg: "",
    },
    getters: {
        loading: state => state.loading,
        loaded: state => state.loaded,
        error: state => state.error,
        error_msg: state => state.error_msg,
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value;
        },
        setLoaded(state, value) {
            state.loaded = value;
        },
        setError(state, value) {
            state.error = value;
        },
        setErrorMsg(state, value) {
            state.error_msg = value;
        },
    },
    actions: {
        setLoading({ commit }, value) {
            commit('setLoading', value);
        },
        setLoaded({ commit }, value) {
            commit('setLoaded', value);
        },
        setError({ commit }, value) {
            commit('setError', value);
        },
        setErrorMsg({ commit }, value) {
            commit('setErrorMsg', value);
        }
    }
}
