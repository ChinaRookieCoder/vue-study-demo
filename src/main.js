import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import VueclipBoard from 'vue-clipboard2'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui.js'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/permission' // permission control
import * as filters from './filters' // global filters
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
Vue.use(VueclipBoard) // 复制到剪切板依赖
Vue.prototype.Velocity = Velocity // 引用Velocity动画库
Vue.prototype.$moment = moment
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

// Vue处理全局同步异常
// Vue.config.errorHandler = function(error, vm, info) {
//   console.log('进入vue全局异常了。。。。。错误类型->', typeof error)
//   console.log(error)
// }

// // window监听全局异步定时器异常
// window.onerror = function(message, source, line, columns, error) {
//   console.log('进入window全局异常了。。。。。错误类型->', typeof error)
//   console.log(error)
// }
// window.onunhandledrejection = function(event) {
//   console.log('进入了异步Promise全局异常。。。。。', typeof event.reason)
//   console.log(event.reason)
// }
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
