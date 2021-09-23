<template>
  <div class="h-full w-full">
    <div class="flex flex-col h-full w-full justify-between">
      <div class="flex flex-row w-full justify-between">
        <span class="w-1/3">1.1</span>
        <span class="w-1/3">1.2</span>
        <span class="w-1/3">1.3</span>
      </div>
      <div class="flex flex-row w-full justify-between">
        <span class="w-full">2</span>
      </div>
      <div class="flex flex-row w-full justify-between">
        <span class="w-1/2">3.1</span>
        <span class="w-1/2">3.2</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default defineComponent({
  name: 'tailwindcss',
  setup() {
    return {
    }
  }
})
</script>

<style scoped lang="less">
</style>