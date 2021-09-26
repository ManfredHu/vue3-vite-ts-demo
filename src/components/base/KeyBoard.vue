<template>
  <div @keyup="onKeyUp" data-tabindex="0">
    <div
      class="mask"
      @click.prevent="triggerBlur"
      v-if="!!blurMask && !!typing"
    ></div>
    <div class="keyboard" v-if="!!typing" :sytle="defaultStyle">
      <div class="topBar" v-if="Boolean(finishBtn)">
        <div class="finishBtn" @click.prevent="finishEdit">完成</div>
      </div>
      <div class="keyboard-input">
        <input
          readonly
          class="phoneInput"
          :placeholder="placeHolder"
          v-model="beautifyPhone"
        />
      </div>
      <div class="shell">
        <div class="btn" @click.prevent="typeText(1)">1</div>
        <div class="btn" @click.prevent="typeText(2)">2</div>
        <div class="btn" @click.prevent="typeText(3)">3</div>
        <div class="btn" @click.prevent="typeText(4)">4</div>
        <div class="btn" @click.prevent="typeText(5)">5</div>
        <div class="btn" @click.prevent="typeText(6)">6</div>
        <div class="btn" @click.prevent="typeText(7)">7</div>
        <div class="btn" @click.prevent="typeText(8)">8</div>
        <div class="btn" @click.prevent="typeText(9)">9</div>
        <div class="btn" @click.prevent="typeText('X')" v-if="isID === 1">
          X
        </div>
        <div class="spaceBtn" v-else-if="isID === 2"></div>
        <div class="hideBtn" @click.prevent="finishEdit" v-else></div>
        <div class="btn" @click.prevent="typeText.bind(this, 0)">0</div>
        <div
          class="deleteBtn"
          @click.prevent="deleteText"
          v-longpress="clearText"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
import { phone } from 'hu-tool'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'KeyBoard',
  props: {
    // 1 支持身份证X
    // 2 隐藏收起键盘按钮
    isID: {
      type: Number,
      default: 0
    },
    keyPress: Function,
    finishBtn: {
      default: 1
    },
    typing: {
      type: Number,
      twoWay: true,
      default: 0
    },
    blurMask: {
      default: 0
    },
    zIndex: {
      default: 500
    },
    phoneText: {
      type: String,
      default: ''
    },
    placeHolder: {
      type: String,
      default: '请输入号码'
    }
  },
  setup: (props, { emit }) => {
    const defaultStyle = {
      zIndex: props.zIndex
    }

    const typeText = (num: number | string) => {
      props.keyPress &&
        props.keyPress({
          type: 'enter',
          value: num
        })
    }
    const deleteText = () => {
      props.keyPress &&
        props.keyPress({
          type: 'delete',
          value: undefined
        })
    }
    const clearText = () => {
      props.keyPress &&
        props.keyPress({
          type: 'clear',
          value: undefined
        })
    }
    const finishEdit = () => {
      emit('typing', 0)
      props.keyPress &&
        props.keyPress({
          type: 'finish',
          value: undefined
        })
    }
    const triggerBlur = () => {
      emit('typing', 0)
      props.keyPress &&
        props.keyPress({
          type: 'cancel',
          value: undefined
        })
    }
    const onKeyUp = (e: { key: string }) => {
      const key = parseInt(e.key)
      if (key >= 0 && key < 10) {
        typeText(key)
      } else if (e.key === 'x') {
        typeText(e.key.toUpperCase())
      } else if (e.key === 'Backspace') {
        deleteText()
      } else if (e.key === 'Enter') {
        finishEdit()
      }
    }

    const beautifyPhone = computed(() => phone.beautifyPhone(props.phoneText))
    return {
      defaultStyle,
      typeText,
      deleteText,
      clearText,
      finishEdit,
      triggerBlur,
      onKeyUp,
      beautifyPhone
    }
  }
})
</script>

<style scoped lang="less">
@lightGray: #cfd6da;
@lighterGray: #f8f8f8;
@gray: #b1b7ba;
@gray2: #eceeee;
@deepDark: #4d4d4d;
@blue: #618bff;
@maskBgColor: rgba(0, 0, 0, 0.6);
.keyboard {
  animation: showUp 0.3s;
  position: fixed;
  z-index: 500;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: @gray2;
  box-sizing: border-box;
  box-shadow: 0 16px 40px 0 rgba(0, 0, 0, 0.8);
  &-input {
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      padding: 20px;
      border: none;
      font-size: 40px;
      font-weight: bold;
      width: 100%;
      text-align: center;
    }
  }

  .topBar {
    background: @lighterGray;
    width: 100%;
    box-sizing: border-box;
    text-align: right;
    height: 68px;
    font-size: 30px;
    line-height: 68px;
    padding: 0 20px;
    color: @blue;
    font-weight: bold;
  }

  .shell {
    display: flex;
    flex-wrap: wrap;
    padding: 22px 14px;
    justify-content: space-between;

    .btn {
      width: 234px;
      height: 92px;
      background: #fff;
      border-radius: 10px;
      font-size: 56px;
      line-height: 92px;
      text-align: center;
      font-weight: bold;
      color: @deepDark;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      margin-bottom: 14px;

      &:active {
        background: @gray;
      }
    }

    .spaceBtn {
      .btn();

      background: @gray2;
      box-shadow: none;
    }

    .hideBtn {
      .btn();
      background: url('@/assets/img/hideKeyboard.png') no-repeat center;
      background-size: 84px;
      box-shadow: none;

      img {
        margin-top: 8px;
        width: 84px;
        height: 84px;
      }
    }

    .deleteBtn {
      .btn();
      background: url('@/assets/img/delete.png') no-repeat center;
      background-size: 84px;
      box-shadow: none;

      img {
        margin-top: 8px;
        width: 84px;
        height: 84px;
      }
      &:active {
        background: url('@/assets/img/delete.png') no-repeat center;
        background-size: 84px;
      }
    }
  }

  @keyframes showUp {
    0% {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    100% {
      transform: translate3d(0, 0, 0);
    }
  }
}

.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 499;
  background: @maskBgColor;
}
</style>
