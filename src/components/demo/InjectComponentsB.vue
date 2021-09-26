<template>
  <div>This is {{ name }}</div>
</template>

<script lang="ts">
import { inject, ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'InjectComponentsB',
  setup() {
    const name = ref('InjectComponentsB.vue')
    const content = inject('content')
    const getContent = inject('getContent')
    return {
      name,
      content,
      getContent
    }
  },

  created() {
    console.log(this.content)
    // @ts-ignore
    console.log(this.getContent())
  },
  async mounted() {}
})
</script>

<style scoped lang="less"></style>
