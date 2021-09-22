<template>
  <div class="VuexDemo">
    <div @click="goback">后退 {{count}}</div>
    <div> {{addOne}}</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default defineComponent({
  name: 'VuexDemo',
  setup() {
    const time = ref('')
    // const store = useStore();
    // const { countAddOne } = store.getters;
    const router = useRouter()
    const goback = () => {
      router.push({
        path: '/',
        query: {
          from: 'vuexdemo' // 添加参数
        }
      })
    }

    return {
      time,
      goback,
    }
  },
  computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      'count'
    ]),
    ...mapGetters({
      // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
      addOne: 'countAddOne'
    })
  },
  methods: {
    ...mapMutations([
      'countAddNumber'
    ]),
    ...mapActions([
      'getDataAndCountAddOne'
    ])
  },
  async mounted() {
    // +10
    this.countAddNumber(10)
    this.getDataAndCountAddOne()
  }
})
</script>

<style scoped lang="less"></style>