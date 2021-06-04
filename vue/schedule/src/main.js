// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'
import Vue from 'vue'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .get('http://localhost:8099/test/get')
      .then(response => (this.info = response))
  }
})
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
