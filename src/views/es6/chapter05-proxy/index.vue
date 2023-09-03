<!--变量的解构赋值-->
<template>
  <div class="base-warpper">
    <p>1.<font class="title">[Proxy]</font> Proxy 用于修改某些操作的默认行为，<font class="light-height">Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。</font>    <el-button type="primary" @click="handleDemo01Proxy">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleDemo01Proxy() {
          // target:拦截的目标对象, handler:定制拦截行为
          // var proxy = new Proxy(target, handler);
          const obj = new Proxy({}, {
            // target: 目标对象, propKey: 属性名, receiver: Proxy 代理实例本身（严格地说，是操作行为所针对的对象）
            get(target, propKey, receiver) {
              console.log('获取对象属性', target, propKey, receiver)
              console.log(`getting ${propKey}!`)
              return Reflect.get(target, propKey, receiver)
            },
            set(target, propKey, value, receiver) {
              console.log('设置对象属性', target, propKey, value, receiver)
              console.log(`setting ${propKey}!`)
              return Reflect.set(target, propKey, value, receiver)
            }
          })
          obj.count = 1
          ++obj.count
          console.log('obj', obj)
        }
      </pre>
    </VueCodeHighlight>
    <p>2.<font class="title">[Proxy]</font> 自定义操作<font class="light-height" />    <el-button type="primary" @click="handleDemo02Proxy">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleDemo02Proxy() {
          const user = {
            name: '张三',
            age: 18
          }
          let proxy = new Proxy(user, {
            get(target, propKey) {
              console.log('获取对象属性', target, propKey)
              return Reflect.get(target, propKey)
            },
            set(target, propKey, value) {
              console.log('设置对象属性', target, propKey, value)
              // return true // 无效操作,不改变任何值
              return Reflect.set(target, propKey, value)
            }
          })
          user.name = '李四'
          user.age = 20
          // 直接换对象引用地址Proxy不认
          // user = {
          //   name: '王五',
          //   age: 30
          // }

          // 通过proxy修改对象属性
          proxy.name = '王五'
          proxy.age = 30
          // Proxy直接换对象引用地址,原proxy自然失效
          proxy = {
            name: '赵六',
            age: 40
          }
          console.log('user', user, 'proxy', proxy)
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
  name: 'Chapter05Proxy',
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
    handleDemo01Proxy() {
      // target:拦截的目标对象, handler:定制拦截行为
      // var proxy = new Proxy(target, handler);
      const obj = new Proxy({}, {
        // target: 目标对象, propKey: 属性名, receiver: Proxy 代理实例本身（严格地说，是操作行为所针对的对象）
        get(target, propKey, receiver) {
          console.log('获取对象属性', target, propKey, receiver)
          console.log(`getting ${propKey}!`)
          return Reflect.get(target, propKey, receiver)
        },
        set(target, propKey, value, receiver) {
          console.log('设置对象属性', target, propKey, value, receiver)
          console.log(`setting ${propKey}!`)
          return Reflect.set(target, propKey, value, receiver)
        }
      })
      obj.count = 1
      ++obj.count
      console.log('obj', obj)
    },
    handleDemo02Proxy() {
      const user = {
        name: '张三',
        age: 18
      }
      let proxy = new Proxy(user, {
        get(target, propKey) {
          console.log('获取对象属性', target, propKey)
          return Reflect.get(target, propKey)
        },
        set(target, propKey, value) {
          console.log('设置对象属性', target, propKey, value)
          // return true // 无效操作,不改变任何值
          return Reflect.set(target, propKey, value)
        }
      })
      user.name = '李四'
      user.age = 20
      // 直接换对象引用地址Proxy不认
      // user = {
      //   name: '王五',
      //   age: 30
      // }

      // 通过proxy修改对象属性
      proxy.name = '王五'
      proxy.age = 30
      // Proxy直接换对象引用地址,原proxy自然失效
      proxy = {
        name: '赵六',
        age: 40
      }
      console.log('user', user, 'proxy', proxy)
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
