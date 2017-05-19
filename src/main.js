import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

import VueProgressiveImage from 'vue-progressive-image'

Vue.use(VueProgressiveImage)

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)

var VueMaterial = require('vue-material')
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})
