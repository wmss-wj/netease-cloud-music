import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/iconfont/iconfont.css'

Vue.config.productionTip = false

let end = new Date().getTime()
let loading = 1500
if (end - window.webStartTime > loading) {
  loading = 0
} else {
  loading = loading - (end - window.webStartTime)
}

setTimeout(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}, loading)
