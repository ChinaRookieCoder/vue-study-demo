<!--变量的解构赋值-->
<template>
  <div class="base-warpper">
    <p>1.<font class="title">[实例方法:includes(), startsWith(), endsWith()]</font> <font class="light-height" />    <el-button type="primary" @click="handleFirstDemo">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleFirstDemo() {
          const str = '我最牛'
          const includesFlag = str.includes('最')
          const startsWithFlag = str.startsWith('我')
          const endsWithFlag = str.endsWith('牛')
          const includesFlag2 = str.includes('哈')
          console.log(includesFlag, startsWithFlag, endsWithFlag, includesFlag2)
        }
      </pre>
    </VueCodeHighlight>
    <p>2.<font class="title">[实例方法:padStart()，padEnd()]</font> 如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。<font class="light-height" /><el-button type="primary" @click="handleSecond">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleSecond() {
          const numStr = '100'
          const padStartStr = numStr.padStart(5, '0')
          const padEndStr = numStr.padEnd(5, '0')
          console.log('前面补零', padStartStr, '后面补零', padEndStr)
        }
      </pre>
    </VueCodeHighlight>
    <p>3.<font class="title">[实例方法:at()]</font> at()方法接受一个整数作为参数，返回参数指定位置的字符，支持负索引（即倒数的位置）,如果参数位置超出了字符串范围，at()返回undefined。<font class="light-height" /><el-button type="primary" @click="handleThird">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleThird() {
          const str = '我最牛啊'
          const atStr = str.at(1)
          const atStr2 = str.at(-1)
          const atStr3 = str.at(10)
          console.log('atStr', atStr, 'atStr2', atStr2, 'atStr3', atStr3)
        }
      </pre>
    </VueCodeHighlight>
  </div>
</template>
<script>
import _ from 'lodash'
import 'vue-code-highlight/themes/prism-tomorrow.css' // 直接引入即可
import 'vue-code-highlight/themes/window.css' // 同上
import { component as VueCodeHighlight } from 'vue-code-highlight' // 引入组件
export default {
  name: 'Chapter03String',
  components: {
    VueCodeHighlight
  },
  data() {
    return {
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
    handleFirstDemo() {
      const str = '我最牛'
      const includesFlag = str.includes('最')
      const startsWithFlag = str.startsWith('我')
      const endsWithFlag = str.endsWith('牛')
      const includesFlag2 = str.includes('哈')
      console.log(includesFlag, startsWithFlag, endsWithFlag, includesFlag2)
    },
    handleSecond() {
      const numStr = '100'
      const padStartStr = numStr.padStart(5, '0')
      const padEndStr = numStr.padEnd(5, '0')
      console.log('前面补零', padStartStr, '后面补零', padEndStr)
    },
    handleThird() {
      const str = '我最牛啊'
      const atStr = str.at(1)
      const atStr2 = str.at(-1)
      const atStr3 = str.at(10)
      console.log('atStr', atStr, 'atStr2', atStr2, 'atStr3', atStr3)
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

<style lang="scss" scoped>
  .base-warpper{
    padding-left: 20px;
  }
  .light-height {
    color:red;
    font-weight:700
  }
  .title{
    margin-left: 5px;
    color:green;
    font-weight: 900;
  }
  .code-wrapper{
    width: 1000px;
    font-size: 13px;
  }
</style>
