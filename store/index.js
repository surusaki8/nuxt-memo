import Vuex from 'vuex'
import createParsistedState from "vuex-persistedstate";

export const plugins = [
    createParsistedState(),
]