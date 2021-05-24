import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ScrollAnimation from "./directives/scrollanimation"
import ScrollFadingAnimation from "./directives/scrollfadinganimation"
import FallingAnimation from "./directives/fallinganimation"






Vue.directive('scrollanimation', ScrollAnimation)
Vue.directive('scrollfadinganimation', ScrollFadingAnimation)
Vue.directive('fallinganimation', FallingAnimation)

require('@/assets/css/styles.css')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
