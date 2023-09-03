<!--解构赋值-->
<template>
  <div class="base-warpper">
    <div class="directory">
      <ul>
        <li><a @click="toDirectory(directoryMap.get('Array'))">1.数组的解构</a></li>
        <li><a @click="toDirectory(directoryMap.get('Object'))">2.对象的解构</a></li>
        <li><a @click="toDirectory(directoryMap.get('String'))">3.字符串的解构</a></li>
        <li><a @click="toDirectory(directoryMap.get('NormalUse'))">4.常见用途</a></li>
      </ul>
    </div>
    <p ref="arrayRef">1.<font class="title">[数组的解构]</font> ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为<font class="light-height">解构（Destructuring）</font><el-button type="primary" @click="handleTestArray">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleTestArray() {
          {
            const [a, b, c] = [1, 2, 3]
            console.log('基本数组解构结果', a, b, c)
          }
          {
            const [a, [b, c]] = [1, [2, 3]]
            console.log('嵌套数组解构结果', a, b, c)
          }
          {
            const [,, c] = [1, 2, 3]
            console.log('模式匹配数组解构', c)
          }
        }
      </pre>
    </VueCodeHighlight>
    <p ref="objectRef">2.<font class="title">[对象的解构]</font> 解构不仅可以用于数组，还可以用于对象<font class="light-height" /><el-button type="primary" @click="handleTestObject">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
         handleTestObject() {
          // c=3 表示如果对象没有c属性，就给c属性赋值为3
          const { a, b, c = 3 } = { a: 1, b: 2 }
          console.log('对象解构', a, b, c)
          const node = {
            baseObj: {
              user: {
                name: 'Lili',
                age: 5
              }
            }
          }
          const { baseObj, baseObj: { user }, baseObj: { user: { name }}, baseObj: { user: { age }}} = node
          console.log('嵌套对象解构', baseObj, user, name, age)
         }
      </pre>
    </VueCodeHighlight>
    <p ref="stringRef">3.<font class="title">[字符串的解构]</font> 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。<font class="light-height" /><el-button type="primary" @click="handleTestString">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleTestString() {
          const [a, b, c, d, e] = 'hello'
          console.log('字符串解构结果', a, b, c, d, e)
        }
      </pre>
    </VueCodeHighlight>
    <p ref="normalUseRef">4.<font class="title">[常见用途]</font>变量的解构赋值用途很多<font class="light-height" /><el-button type="primary" @click="handleTestNormal">查看控制台</el-button></p>
    <h4>(1)提取 JSON 数据</h4>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        // (1)提取 JSON 数据
        const jsonData = {
          id: 42,
          status: 'OK',
          data: [867, 5309]
        }
        const { id, status, data } = jsonData
        console.log('提取 JSON 数据', id, status, data)
      </pre>
    </VueCodeHighlight>
    <h4>(2)遍历 Map 结构</h4>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        // (2)遍历 Map 结构
        const map = new Map()
        map.set('a', '1')
        map.set('b', '2')
        map.set('c', '3')
        for (const [key, value] of map) {
          console.log('遍历 Map 结构', key, value)
        }
        for (const [key, value] of Object.entries(jsonData)) {
          console.log('遍历 jsonData 结构', key, value)
        }
        for (const [key] of Object.entries(jsonData)) {
          console.log('遍历 jsonData key', key)
        }
        for (const [, value] of Object.entries(jsonData)) {
          console.log('遍历 jsonData value', value)
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
  name: 'Chapter02Destructuring',
  components: {
    VueCodeHighlight
  },
  data() {
    return {
      directoryMap: new Map([
        ['Array', 'arrayRef'],
        ['Object', 'objectRef'],
        ['String', 'stringRef'],
        ['NormalUse', 'normalUseRef']
      ])
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
    handleTestArray() {
      {
        const [a, b, c] = [1, 2, 3]
        console.log('基本数组解构结果', a, b, c)
      }
      {
        const [a, [b, c]] = [1, [2, 3]]
        console.log('嵌套数组解构结果', a, b, c)
      }
      {
        const [,, c] = [1, 2, 3]
        console.log('模式匹配数组解构', c)
      }
      console.log()
    },
    handleTestObject() {
      // c=3 表示如果对象没有c属性，就给c属性赋值为3
      const { a, b, c = 3 } = { a: 1, b: 2 }
      console.log('对象解构', a, b, c)
      const node = {
        baseObj: {
          user: {
            name: 'Lili',
            age: 5
          }
        }
      }
      const { baseObj, baseObj: { user }, baseObj: { user: { name }}, baseObj: { user: { age }}} = node
      console.log('嵌套对象解构', baseObj, user, name, age)
    },
    handleTestString() {
      const [a, b, c, d, e] = 'hello'
      console.log('字符串解构结果', a, b, c, d, e)
    },
    handleTestNormal() {
      // (1)提取 JSON 数据
      const jsonData = {
        id: 42,
        status: 'OK',
        data: [867, 5309]
      }
      const { id, status, data } = jsonData
      console.log('提取 JSON 数据', id, status, data)
      // (2)遍历 Map 结构
      const map = new Map()
      map.set('a', '1')
      map.set('b', '2')
      map.set('c', '3')
      for (const [key, value] of map) {
        console.log('遍历 Map 结构', key, value)
      }
      for (const [key, value] of Object.entries(jsonData)) {
        console.log('遍历 jsonData 结构', key, value)
      }
      for (const [key] of Object.entries(jsonData)) {
        console.log('遍历 jsonData key', key)
      }
      for (const [, value] of Object.entries(jsonData)) {
        console.log('遍历 jsonData value', value)
      }
    },
    toDirectory(ref) {
      this.$refs[ref].scrollIntoView({ behavior: 'smooth', block: 'center' })
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
    position: relative;
    .directory{
      background-color: black;
      padding: 20px;
      border-radius: 8px;
      color: #fff;
      position: fixed;
      right: 0;
      top:40vh;
      ul{
        padding: 0;
      }
      li{
        padding: 5px;
        list-style: none;
        text-align: left;
      }
      li>a:hover{
        color: orange;
        font-weight: 800;
      }
    }
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
