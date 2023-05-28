// 1. 使用vue-router

import {
  useRouter,
  createRouter,
  createWebHistory
} from 'vue-router'
// 1.1 导入路由文件
const login = () => import('../vue/login.vue')
const index = () => import('../vue/index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: login,
    children: [{
      path: 'children',
      // component: children
    }]
  }, {
    path: '/index',
    name: 'index',
    component: index
  }]
})

export default router