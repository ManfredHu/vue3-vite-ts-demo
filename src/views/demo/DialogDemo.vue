<template>
  <div class="dialogDemo">
    Dialog Demo
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'DialogDemo',
  async mounted() {
    // @ts-ignore
    this.$showDialog({
      text: ['Dialog', 'Dialog', '12345678901234567890'], // 两行
      showTime: 86400000,
      showMask: true
    })
  }
})
</script>

<style scoped lang="less"></style>