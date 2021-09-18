// 汇总插件
import { App, Plugin } from "vue";
import localforage from 'localforage'
import { is, phone, ua, url } from 'hu-tool'
import rem from '@/helper/rem'
import vconsole from '@/helper/vconsole'
import requestAnimFrameFix from '@/helper/requestAnimFrameFix'
import axiosInterceptors from '@/api'

const isDev = process.env.NODE_ENV === 'development'

export default {
  install: (app: App) => {
    // set driver to localStorage, if you want to use WEBSQL or INDEXEDDB
    // check https://localforage.github.io/localForage/#settings-api-setdriver
    localforage.config({
      driver: localforage.LOCALSTORAGE,
      name: 'cache'
    })
    // localforage.setItem('Manfred', 'Hu') // will set localStorage key: 'cache/Manfred', value 'Hu'

    if (url().getQueryParam('debug') || isDev) {
      // 开发模式打开debug,设置localStorage模式
      // 生产模式可以加query debug=1/debug=true 等打开
      localStorage.setItem('debug', 'worker:*')
    }

    // rem init
    rem()

    // debug options
    vconsole()

    // requestAnimFrameFix
    requestAnimFrameFix()

    // axios拦截器
    axiosInterceptors()
  }
} as Plugin