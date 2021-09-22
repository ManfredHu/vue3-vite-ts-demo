export default [
  // {
  //   path: '/demo/SwiperDemo',
  //   component: () => import(/* webpackChunkName: "SwiperDemo" */ '@/views/demo/SwiperDemo.vue'),
  //   meta: {
  //     pageId: 2
  //   }
  // },
  {
    path: '/demo/DialogDemo',
    component: () => import(/* webpackChunkName: "DialogDemo" */ '@/views/demo/DialogDemo.vue'),
    meta: {
      pageId: 23
    }
  },
  {
    path: '/demo/RequestDemo',
    component: () => import(/* webpackChunkName: "RequestDemo" */ '@/views/demo/RequestDemo.vue'),
    meta: {
      pageId: 24
    }
  },
  {
    path: '/demo/HutoolDemo',
    component: () => import(/* webpackChunkName: "HutoolDemo" */ '@/views/demo/HutoolDemo.vue'),
    meta: {
      pageId: 25
    }
  },
  {
    path: '/demo/KeyBoard',
    component: () => import(/* webpackChunkName: "KeyBoard" */ '@/views/demo/KeyBoardDemo.vue'),
    meta: {
      pageId: 26
    }
  },
  
]