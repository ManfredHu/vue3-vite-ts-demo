import {
  TypeCheck
} from 'hu-tool'

// 长按时间，与小程序长按时间同步
// https: //developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
const longTapDelay = 350

// the distance between touchstart and touchend
const distanceStandard = 10

function isLongpress(self: any) {
  // if click the disabled input ,cancal!
  if (self.disabled) {
    return false
  }
  const longpressObj = self.longpressObj
  // 这里的逻辑是为了区分滑动操作
  const tapX = !TypeCheck.isNumber(longpressObj.distanceX) ||
    (Math.abs(longpressObj.distanceX) < distanceStandard && (longpressObj.clientX || longpressObj.pageX))
  const tapY = !TypeCheck.isNumber(longpressObj.distanceY) ||
    (Math.abs(longpressObj.distanceY) < distanceStandard && (longpressObj.clientY || longpressObj.pageY))
  const result = longpressObj.timeGap >= longTapDelay && tapX && tapY
  return result
}

/**
 * 获取鼠标在页面的位置信息存储到el.longpressObj
 * 获取点击时刻的时间戳存储到el.time
 * @param {event} e
 * @param {element} self
 */
function touchstart(e: any, self: any) {
  const touches = e.touches[0]
  const {
    longpressObj
  } = self
  longpressObj.pageX = touches.pageX
  longpressObj.pageY = touches.pageY
  longpressObj.clientX = touches.clientX
  longpressObj.clientY = touches.clientY
  longpressObj.touchStartTime = new Date()
  longpressObj.timer = setTimeout(() => {
    longpressObj.timeGap = new Date().getTime() - longpressObj.touchStartTime
    longpressObj.distanceX = longpressObj.pageX - touches.pageX
    longpressObj.distanceY = longpressObj.pageY - touches.pageY
    if (isLongpress(self)) {
      longpressObj.handler(e)
    }
  }, longTapDelay)
}

function touchend(e: any, self: any, modifiers: any) {
  // 默认单点触摸 https://segmentfault.com/q/1010000002870710
  // http://www.cnblogs.com/yexiaochai/p/3462657.html
  // touchend时，touches与targetTouches信息会被删除，changedTouches保存的最后一次的信息，最好用于计算手指信息
  const touches = e.changedTouches[0]
  const {
    longpressObj
  } = self
  longpressObj.timeGap = new Date().getTime() - longpressObj.touchStartTime
  longpressObj.distanceX = longpressObj.pageX - touches.pageX
  longpressObj.distanceY = longpressObj.pageY - touches.pageY
  longpressObj.timer && clearTimeout(longpressObj.timer)
}

function _callback(el: HTMLElement & { longpressObj: any, href: string}, binding: any) {
  el.longpressObj = {}
  el.longpressObj.handler = (e: Event) => {
    // This directive.handler
    let callback = binding.value
    if (!callback && el.href && !binding.modifiers.prevent) {
      window.location.href = el.href
      return
    }
    callback.event = e
    callback.longpressObj = el.longpressObj

    const tagName = callback.event.target.tagName.toLocaleLowerCase()
    if (tagName === 'input') {
      // not only focus, but also execute callback
      callback.event.target.focus()
    }

    callback(e)
  }
}

export default {
  mounted: (el: HTMLElement & { longpressObj: any, href: string}, binding: any) => {
    _callback.call(this, el, binding)
    el.addEventListener(
      'touchstart',
      (e: Event) => {
        if (binding.modifiers.stop) e.stopPropagation()
        if (binding.modifiers.prevent) e.preventDefault()
        touchstart(e, el)
      },
      false
    )
    el.addEventListener(
      'touchend',
      (e: Event) => {
        try {
          Object.defineProperty(e, 'currentTarget', {
            // 重写currentTarget对象 与jq相同
            value: el,
            writable: true,
            enumerable: true,
            configurable: true
          })
        } catch (err) {
          // ios 7下对 e.currentTarget 用defineProperty会报错。
          // 报“TypeError：Attempting to configurable attribute of unconfigurable property”错误
          // 在catch里重写
          // e.currentTarget = el
        }

        // 这会调用event.preventDefault()以防止浏览器继续处理触摸事件（这也可以防止鼠标事件也被传递）
        e.preventDefault()

        return touchend(e, el, binding.modifiers)
      },
      false
    )
  },
  unmounted: (el: HTMLElement & { longpressObj: any, href: string}) => {
    el.longpressObj.handler = null
    el.longpressObj.timer = null
    el.longpressObj = null
  }
}
