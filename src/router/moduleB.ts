export default [
  {
    path: '/moduleb/orderList',
    component: () => import(/* webpackChunkName: "orderList" */ '@/views/moduleB/orderList.vue'),
    meta: {
      pageId: 21
    }
  },
]