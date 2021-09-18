// import {deaultRem} from '@/config/rem'
import debug from 'debug'
const log = debug('worker:rem')

/**
 * change the fontSize property in html tag
 * 判断用户client width
 * 然后给html设置一个font-size
 * 目的是为了方便rem做自适应布局
 */


function rem(logicWidth = 750) {
  const win = window
  const doc = document
  if (!win || !doc) {
    throw new Error('not window or document global object')
  }
  const docEl = doc.documentElement
  // 判断是横竖屏
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

  function recalc() {
    const clientWidth = docEl.clientWidth
    if (!clientWidth) return
    // 按照比例缩放
    const salepro = clientWidth / logicWidth
    const baseSize = 37.5 // 与postcss.config.js的rootValue一致
    docEl.style.fontSize = (baseSize * Math.min(salepro, 2)) + 'px'
    log('set <html> font-size', docEl.style.fontSize)
  }

  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}
export default rem
