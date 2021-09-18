import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/index.vue' // 首页
import DemoRouter from '@/router/demo'
import ModuleBRouter from '@/router/moduleB'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
    meta: {
      pageId: 1 // 权限id之类的配置,vue-router的beforeEach等可以拿
    }
  },
  ...DemoRouter, // demo的router
  ...ModuleBRouter // moduleB的router
]

const router = createRouter({
  history: createWebHashHistory(), // createWebHistory or createWebHashHistory, hash模式SEO不行
  routes
});

export default router;