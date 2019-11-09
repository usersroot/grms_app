import Vue from 'vue'
import Vuex from 'vuex'
import shop from './shop'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        shop,
        user
    }
})