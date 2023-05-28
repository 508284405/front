console.log('这是一个入口文件')

// js的入口文件

// 1. 导入jQuery
import $ from 'jquery'

// 2. 导入css文件 
import '../css/index.css'

// 3. 导入less文件
import '../css/index.less'

// 4. 导入scss文件
import '../css/index.scss'

// 5. 导入vue
import {
  createApp,
  VueElement,
  getCurrentInstance,
  onBeforeMount,
  ref
} from 'vue'

// 6. 导入login组件
import login from '../app.vue'

// 7. 使用vue-router
import router from './router'

import {
  useRouter
} from 'vue-router'

// 8. 使用bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// 9. 使用v-resource(或axios)发送get,post,jsonp请求
import axios from 'axios'
import qs from 'qs'
// 10. 使用封装的axios
// import './api.js'

// 11. 使用element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//创建vue实例
const app = createApp(login)

//绑定路由
app.use(router)
app.use(ElementPlus)

//自定义指令
app.directive('focus', {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el) {
    // 聚焦元素
    el.focus()
  }
})

axios.defaults.baseURL = 'http://localhost:8099/api'
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

app.config.globalProperties.$axios = axios
app.config.globalProperties.$qs = qs
//挂载html
app.mount('#app')