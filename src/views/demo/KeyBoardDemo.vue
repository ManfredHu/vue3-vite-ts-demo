<template>
  <div class="keyBoardDemo">
    <div>
      <p>这个输入框focus会拉起系统数字键</p>
      <input
        type="number"
        pattern="\d*"
        class="phoneInput"
        placeholder="会自动呼起系统键盘"
        :maxlength="11"
      />
    </div>
    <div>
      <input
        type="tel"
        pattern="\d*"
        class="phoneInput"
        placeholder="会自动呼起系统键盘"
        :maxlength="11"
      />
    </div>
    <button @click.prevent="showKeyBoard">点击拉起虚拟键盘</button>
    <KeyBoard
      :keyPress="onKeyboardPress"
      v-model:typing="typing"
      v-model:phoneText="phoneText"
      :blurMask="1"
      :placeHolder="placeHolder"
    ></KeyBoard>
    <div>输入的号码为:{{ purePhone }}</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs, computed, getCurrentInstance} from 'vue'

import KeyBoard from '@/components/base/KeyBoard.vue'
import { Phone } from 'hu-tool'

export default defineComponent({
  name: 'KeyBoardDemo',
  components: {
    KeyBoard
  },
  setup() {
    const internalInstance = getCurrentInstance()
    const data = reactive({
      typing: 0,
      phoneText: '',
      placeHolder: '请输入手机号码'
    })

    const showKeyBoard = () => {
      data.typing = 1
    }

    const onKeyboardPress = (e: {type: string, value: undefined|number|string}) => {
      if (e.type === 'enter') {
        if (Phone.getPurePhone(data.phoneText).length < 11) {
          data.phoneText += e.value
        }
      } else if (e.type === 'delete') {
        const tt = data.phoneText
        data.phoneText = tt.length > 1 ? tt.substr(0, tt.length - 1) : ''
      } else if (e.type === 'clear') {
        data.phoneText = ''
      } else if (e.type === 'finish' || e.type === 'cancel') {
        if (!data.phoneText) {
          // @ts-ignore
          internalInstance.appContext.config.globalProperties.$showDialog({
            text: ['请输入手机号'],
            showTime: 2000
          })
        }
        data.typing = 0
      }
    }

    // computed
    const purePhone = computed(() => Phone.getPurePhone(data.phoneText))
    return {
      ...toRefs(data),
      showKeyBoard,
      purePhone,
      onKeyboardPress
    }
  }
})
</script>

<style scoped lang="less">
.phoneInput {
  border: none;
  color: #000;
  border-radius: 0;
}
</style>
