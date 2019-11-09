import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './ui_ele'
import './utils/request'

import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3000'
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')