<template>
  <div class="text-blue-500">这个页面{{myName}}是InjectComponentsA嵌套InjectComponentsB</div>
  <div class="requestDemo">
    <InjectComponentsA></InjectComponentsA>
  </div>
</template>

<script lang="ts">
import { provide, ref, defineComponent } from 'vue'
import InjectComponentsA from '@/components/demo/InjectComponentsA.vue'

export default defineComponent({
  name: 'ProvideInjectDemo',
  components: {
    InjectComponentsA
  },
  setup() {
    const myName = ref(`ProvideInjectDemo.vue`)

    // 这里提供provide
    provide('content', `this is one`) // 无依赖的常量
    provide('getContent', () => {
      return myName.value
    })
    return {
      myName
    }
  },
  async mounted() {
  }
})
</script>

<style scoped lang="less"></style>