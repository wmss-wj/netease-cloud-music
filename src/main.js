import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let end = new Date().getTime()
let loading = 1500
if (end - window.myStartTime > loading) {
  loading = 1
} else {
  loading = loading - (end - window.myStartTime)
}

setTimeout(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}, loading)
