<template>
  <div class="components-list">
    <div class="tips"></div>
    <header class="components-list-header">组件列表</header>
    <ul>
      <li>
        <router-link class="components-list-text" to="/demo/DialogDemo"
          >提示浮层</router-link
        >
      </li>
      <li>
        <router-link class="components-list-text" to="/demo/RequestDemo"
          >请求</router-link
        >
      </li>
      <li>
        <router-link class="components-list-text" to="/demo/HutoolDemo"
          >HutoolDemo</router-link
        >
      </li>
      <li>
        <router-link class="components-list-text" to="/demo/KeyBoard"
          >虚拟键盘</router-link
        >
      </li>
      <li>
        <router-link class="components-list-text" to="/demo/VuexDemo"
          >VuexDemo</router-link
        >
      </li>
      <li>
        <router-link class="components-list-text" to="/demo/TailwindcssDemo"
          >TailwindcssDemo</router-link
        >
      </li>
      <li>
        <router-link class="components-list-text" to="/demo/ProvideInjectDemo"
          >ProvideInjectDemo</router-link
        >
      </li>
      <!-- <li>
        <router-link class="components-list-text" to="/confirm">确认框</router-link>
      </li>
      <li>
        <router-link class="components-list-text" to="/totop">返回顶部</router-link>
      </li>
      <li>
        <router-link class="components-list-text" to="/distpicker">地区级联选择</router-link>
      </li>
      <li>
        <router-link class="components-list-text" to="/toast">弹出式提示（Loading/Suc）</router-link>
      </li>
      <li>
        <router-link class="components-list-text" to="/vcode">验证码</router-link>
      </li>
      <li>
        <router-link class="components-list-text" to="/idcard">身份证</router-link>
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts">
import baseView from '../base/baseView'
import debug from 'debug'
const log = debug('app:index.vue')

export default {
  extends: baseView,
  name: 'Index',
  components: {},
  created() {
    log('created exec')
  }
}
</script>

<style lang="less" scoped>
.components {
  &-list {
    color: #fff;
    &-header {
      font-size: 48px;
    }
    &-text {
      font-size: 38px;
      color: #eee;
    }
  }
}
// rem测试
.tips {
  height: 1px; // 这里就是1px，可以忽略postcss转化
  width: 375px;
  background: red;
}
</style>
