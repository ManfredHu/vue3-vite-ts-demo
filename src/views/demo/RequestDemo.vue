<template>
  <div class="requestDemo">
    {{ requestText }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'RequestDemo',
  setup() {
    const requestText = ref('')
    return {
      requestText
    }
  },
  async mounted() {
    try {
      // @ts-ignore
      const rst: any = await this.$axios(
        `https://registry.npm.taobao.org/egg/latest`
      )
      this.requestText = rst.repository.url
    } catch (err) {
      console.error(err)
    }
  }
})
</script>

<style scoped lang="less"></style>
