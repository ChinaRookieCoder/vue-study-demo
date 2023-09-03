<!--方块输入框组件-->
<template>
  <div class="input-box">
    <div
      class="input-content"
      @keydown="keydown"
      @keyup="keyup"
      @paste="paste($event)"
      @mousewheel="mousewheel"
      @input="inputEvent"
    >
      <input
        ref="firstinput"
        v-model.trim="input[0]"
        maxlength="1"
        data-index="0"
      >
      <input v-model.trim="input[1]" maxlength="1" data-index="1">
      <input v-model.trim="input[2]" maxlength="1" data-index="2">
      <input v-model.trim="input[3]" maxlength="1" data-index="3">
      <input v-model.trim="input[4]" maxlength="1" data-index="4">
      <input v-model.trim="input[5]" maxlength="1" data-index="5">
    </div>
  </div>
</template>
<script>
export default {
  name: 'SquareInput',
  components: {
  },
  props: {
    val: {
      type: Array,
      default: () => ['', '', '', '', '', '']
    }
  },
  data() {
    return {
      // 存放粘贴进来的数字
      pasteResult: [],
      input: this.val
    }
  },
  computed: {
  },
  watch: {

  },
  created() {
  },
  mounted() {
  },
  methods: {
    // 解决一个输入框输入多个字符
    inputEvent(e) {
      var index = e.target.dataset.index * 1
      var el = e.target
      const reg = /^(?:0|[1-9]?|9)$/
      if (reg.test(el.value)) {
        this.$set(this.input, index, el.value.slice(0, 1))
      } else {
        this.$set(this.input, index, '')
      }
    },
    keydown(e) {
      var index = e.target.dataset.index * 1
      var el = e.target
      if (e.key === 'Backspace') {
        if (this.input?.length && this.input[index]?.length > 0) {
          this.$set(this.input, index, '')
        } else {
          if (el.previousElementSibling) {
            el.previousElementSibling.focus()
            this.$set(this.input, index - 1, '')
          }
        }
      } else if (e.key === 'Delete') {
        if (this.input[index].length > 0) {
          this.$set(this.input, index, '')
        } else {
          if (el.nextElementSibling) {
            this.$set(this.input, index = 1, '')
          }
        }
        if (el.nextElementSibling) {
          el.nextElementSibling.focus()
        }
      } else if (e.key === 'Home') {
        el.parentElement.children[0] && el.parentElement.children[0].focus()
      } else if (e.key === 'End') {
        el.parentElement.children[this.input.length - 1] && el.parentElement.children[this.input.length - 1].focus()
      } else if (e.key === 'ArrowLeft') {
        if (el.previousElementSibling) {
          el.previousElementSibling.focus()
        }
      } else if (e.key === 'ArrowRight') {
        if (el.nextElementSibling) {
          el.nextElementSibling.focus()
        }
      } else if (e.key === 'ArrowUp') {
        if (this.input[index] * 1 < 9) {
          this.$set(this.input, index, (this.input[index] * 1 + 1).toString())
        }
      } else if (e.key === 'ArrowDown') {
        if (this.input[index] * 1 > 0) {
          this.$set(this.input, index, (this.input[index] * 1 - 1).toString())
        }
      }
    },
    keyup(e) {
      var index = e.target.dataset.index * 1
      var el = e.target
      if (/Digit|Numpad/i.test(e.code)) {
        this.$set(this.input, index, e.code.replace(/Digit|Numpad/i, ''))
        el.nextElementSibling && el.nextElementSibling.focus()
        if (index === 5) {
          if (this.input.join('').length === 6) {
            // 失去焦点触发：document.activeElement.blur()
            this.$emit('complete', this.input)
          }
        }
      } else {
        if (this.input[index] === '') {
          this.$set(this.input, index, '')
        }
      }
    },
    mousewheel(e) {
      var index = e.target.dataset.index
      if (e.wheelDelta > 0) {
        if (this.input[index] * 1 < 9) {
          this.$set(this.input, index, (this.input[index] * 1 + 1).toString())
        }
      } else if (e.wheelDelta < 0) {
        if (this.input[index] * 1 > 0) {
          this.$set(this.input, index, (this.input[index] * 1 - 1).toString())
        }
      } else if (e.key === 'Enter') {
        if (this.input.join('').length === 6) {
          document.activeElement.blur()
          this.$emit('complete', this.input)
        }
      }
    },
    paste(e) {
      // 当进行粘贴时
      var clipboardData = e.clipboardData // IE
      if (!clipboardData) {
        // chrome
        clipboardData = e.originalEvent.clipboardData
      }
      const data = clipboardData.getData('Text')
      const reg = /^(?:0|[1-9]?|9)$/
      if (data.length === 6) {
        const arr = data.split('')
        const passArr = arr.filter(v => {
          if (reg.test(v)) {
            return v
          }
        })
        if (passArr.length !== 6) {
          this.messageWarring('粘贴数据不是全数字,请检查粘贴的数据')
        } else {
          this.input = arr
        }
      } else {
        this.messageWarring('粘贴数据不是6位字符')
      }
    },
    messageSuccess(messageData) {
      this.$message.success({ message: messageData, duration: 1000, showClose: true })
    },
    messageError(messageData) {
      this.$message.error({ message: messageData, duration: 1000, showClose: true })
    },
    messageWarring(messageData) {
      this.$message.warning({ message: messageData, duration: 1000, showClose: true })
    }
  }
}
</script>

<style scoped>
 .input-box .input-content{
   width: 447px;
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: space-between;
  }

.input-box .input-content input{
  color: inherit;
  font-family: inherit;
  border: 0;
  outline: 0;
  border: 1px solid #919191;
  height: 48px;
  width: 48px;
  font-size: 20px;
  text-align: center;
}

.input-box .input-content input::-webkit-outer-spin-button{
  appearance: none;
  margin: 0;
}
.input-box .input-content input::-webkit-inner-spin-button{
  appearance: none;
  margin: 0;
}
</style>
