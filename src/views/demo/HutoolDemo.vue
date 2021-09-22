<template>
  <div class="hutoolDemo">
    now time: {{time}}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'hutoolDemo',
  setup() {
    const time = ref('')
    return {
      time
    }
  },
  async mounted() {
    // @ts-ignore
    console.log(this.$is.isArray([1,2,3]))
    // @ts-ignore
    this.time = this.$time().format('YYYY-MM-DD HH:mm:ss')
  }
})
</script>

<style scoped lang="less"></style>