import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)

Vue.use(Buefy)

Vue.config.productionTip = false

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key))
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
