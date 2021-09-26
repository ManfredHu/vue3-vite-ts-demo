<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
// @import (less) '../src/style/base/import.all.less';
// .mx_reset();

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  background-image: radial-gradient(ellipse at 50% 10%, #acc8b4 30%, #5b816e);
  position: absolute;
}
</style>
