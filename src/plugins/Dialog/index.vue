<template>
  <div class="dialog" v-if="isShow">
    <div class="dialog-mask" v-if="showMask"></div>
    <div class="dialog-main">
      <div class="dialog-bd" v-html="text.join('<br>')"></div>
    </div>
  </div>
</template>

<script lang="ts">
import baseComponent from '@/base/baseComponent'
import { reactive, toRefs } from '@vue/reactivity'

export default {
  name: 'Dialog',
  extends: baseComponent,
  props: {
    text: {
      type: [Array],
      default: () => ['']
    }
  },
  setup() {
    let timer = 0
    const data = reactive({
      isShow: false,
      showTime: 2000,
      showMask: false,
    })

    // 显示
    const show = ({showTime = 2000, showMask = false}) => {
      data.isShow = true
      data.showMask = showMask
      clearTimeout(timer)
      if (showTime > 0) {
        timer = window.setTimeout(() => {
          hide()
        }, showTime)
      }
    }

    // 隐藏
    const hide = () => {
      data.isShow = false
      clearTimeout(timer)
    }

    return {
      ...toRefs(data),
      show,
      hide
    }
  },
  mounted() {}
}
</script>

<style lang="less" scope>
.dialog {
  &-mask {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
  }
  &-main {
    position: fixed;
    z-index: 500;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  &-bd {
    padding: 0.8em 1.6em;
    font-size: 34px;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #fff;
    background: rgba(17, 17, 17, 0.7);
  }
}
</style>
