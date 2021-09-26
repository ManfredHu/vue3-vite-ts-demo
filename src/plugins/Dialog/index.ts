import index from './index.vue'
import { App, Plugin } from 'vue'
import { createApp, createVNode, render, defineComponent } from 'vue'

let $inst: any = null

// 创建挂载实例
let createMount = (opts: any) => {
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  const app = createApp(index, {
    ...opts,
    remove() {
      app.unmount(mountNode)
      document.body.removeChild(mountNode)
    }
  })
  return app.mount(mountNode)
}

function showDialog(options: any = {}) {
  // 全局单例
  if (!$inst) {
    $inst = createMount(options)
  }
  $inst.show(options)
  return $inst
}

function hideDialog() {
  if ($inst) {
    $inst.hide()
  }
}

export default {
  install: (app: App) => {
    // 全局组件
    app.component('Dialog', index)

    // 挂载全局方法
    app.config.globalProperties.$showDialog = showDialog
    app.config.globalProperties.$hideDialog = hideDialog

    // 提供provide/inject
    // app.provide('showDialog', showDialog)
  }
}

// Obj.install = (Vue) => {
//   // 生成一个Vue的子类
//   // 同时这个子类也就是组件
//   const ObjConstructor = Vue.extend(index)

//   // 生成一个该子类的实例
//   const instance = new ObjConstructor()

//   // 将这个实例挂载在创建的div上
//   // 并将此div加入全局挂载点内部
//   instance.$mount(document.createElement('div'))
//   document.body.appendChild(instance.$el)

//   // 通过Vue的原型注册一个方法
//   // 让所有实例共享这个方法
//   Vue.prototype.$showDialog = (params) => {
//     const info = {
//       text: [],
//       showMask: false,
//       showTime: 2000
//     }
//     const resultParams = Object.assign({}, info, params)
//     instance.text = resultParams.text
//     instance.showMask = resultParams.showMask
//     instance.showTime = resultParams.showTime
//     instance.show()
//   }

//   Vue.prototype.$hideDialog = () => {
//     instance.isShow = false
//     instance.text = []
//   }
// }
// export default Obj
