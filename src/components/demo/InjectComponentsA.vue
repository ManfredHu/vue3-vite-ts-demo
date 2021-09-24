<template>
  <div>
    This is InjectComponentsA.vue
    <InjectComponentsB></InjectComponentsB>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import InjectComponentsB from './InjectComponentsB.vue'
export default defineComponent({
  name: 'InjectComponentsA',
  components: {
    InjectComponentsB
  },
  setup() {
    return {
    }
  },
  async mounted() {
  }
})
</script>

<style scoped lang="less"></style>