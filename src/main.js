import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'



import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,

    attempt: 1
})



import * as filters from './filters'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

var VueMaterial = require('vue-material')
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
    
})
