<!--变量的解构赋值-->
<template>
  <div class="base-warpper">
    <p>1.<font class="title">[let命令]</font> ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在<font class="light-height">let命令所在的代码块内有效</font>    <el-button type="primary" @click="handleTestLet">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleTestLet() {
          {
            let a = ''
            a = '测试let'
            console.log('代码块内', a)
          }
          console.log('代码块外', a)
        }
      </pre>
    </VueCodeHighlight>
    <p>2.<font class="title">[const命令]</font> const声明一个只读的常量。<font class="light-height">一旦声明，常量的值就不能改变</font><el-button type="primary" @click="handleTestConst">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleTestConst() {
          const finalVariable = '测试const'
          console.log('正常', finalVariable)
          finalVariable = '32423'
          console.log('二次赋值', finalVariable)
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
  name: 'Chapter01Scope',
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
    handleTestLet() {
      {
        let a = ''
        a = '测试let'
        console.log('代码块内', a)
      }
      console.log('代码块外', a)
    },
    handleTestConst() {
      const finalVariable = '测试const'
      console.log('正常', finalVariable)
      finalVariable = '32423'
      console.log('二次赋值', finalVariable)
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
