// 汇总插件
import { App, Plugin } from 'vue'
import localforage from 'localforage'
import { is, phone, ua, url } from 'hu-tool'
import rem from '@/helper/rem'
import cookie from 'js-cookie'
import vconsole from '@/helper/vconsole'
import requestAnimFrameFix from '@/helper/requestAnimFrameFix'
import axiosInterceptors from '@/api'
import EventEmitter from 'events'
import axios from 'axios'
import dayjs from 'dayjs'
import longpress from '@/directives/longpress'

const et = new EventEmitter()
const isDev = process.env.NODE_ENV === 'development'

export default {
  install: (app: App) => {
    // -----------------------------------------------------------------------------
    // 全局挂载，可以这么用 this.$axios……
    const global = app.config.globalProperties
    global.$et = et
    global.$cookie = cookie
    global.$time = dayjs
    global.$axios = axios
    global.$cache = localforage
    global.$is = is
    global.$phone = phone
    global.$ua = ua
    global.$url = url

    // -----------------------------------------------------------------------------
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

    // -----------------------------------------------------------------------------
    // rem init
    rem()

    // -----------------------------------------------------------------------------
    // debug options
    vconsole()

    // -----------------------------------------------------------------------------
    // requestAnimFrameFix
    requestAnimFrameFix()

    // -----------------------------------------------------------------------------
    // axios拦截器
    axiosInterceptors()

    // -----------------------------------------------------------------------------
    // 自定义指令
    app.directive('longpress', longpress)
  }
} as Plugin
