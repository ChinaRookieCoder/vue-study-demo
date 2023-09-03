<!--变量的解构赋值-->
<template>
  <div class="base-warpper">
    <p>1.<font class="title">[Reflect]</font> Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。
      Reflect对象的设计目的有这样几个。
    </p><p>（1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。</p>
    <p>（2） 修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。</p>
    <p>（3） 让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。</p>
    <el-button type="primary" @click="handleTestReflect">查看控制台</el-button>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleTestReflect() {
          const obj = { name: '张三' }
          // 1. 获取元素 Reflect.get(target, name, receiver:可选)
          console.log('获取元素', Reflect.get(obj, 'name'), Reflect.get(obj, 'age'))
          // 2. 设置元素 Reflect.set(target, name, value, receiver:可选)
          Reflect.set(obj, 'age', 18)
          console.log('设置元素', obj)
          // 3. 判断元素是否存在 Reflect.has(target, name)
          console.log('判断元素是否存在', Reflect.has(obj, 'name'), Reflect.has(obj, 'sex'))
          // 4. 删除元素 Reflect.deleteProperty(target, name)
          Reflect.deleteProperty(obj, 'age')
          console.log('删除元素', obj)
        }
      </pre>
    </VueCodeHighlight>
    <p>(4) Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。</p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        var loggedObj = new Proxy(obj, {
          get(target, name) {
            console.log('get', target, name);
            return Reflect.get(target, name);
          },
          deleteProperty(target, name) {
            console.log('delete' + name);
            return Reflect.deleteProperty(target, name);
          },
          has(target, name) {
            console.log('has' + name);
            return Reflect.has(target, name);
          }
        });
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
  name: 'Chapter06Reflect',
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
    handleTestReflect() {
      const obj = { name: '张三' }
      // 1. 获取元素 Reflect.get(target, name, receiver:可选)
      console.log('获取元素', Reflect.get(obj, 'name'), Reflect.get(obj, 'age'))
      // 2. 设置元素 Reflect.set(target, name, value, receiver:可选)
      Reflect.set(obj, 'age', 18)
      console.log('设置元素', obj)
      // 3. 判断元素是否存在 Reflect.has(target, name)
      console.log('判断元素是否存在', Reflect.has(obj, 'name'), Reflect.has(obj, 'sex'))
      // 4. 删除元素 Reflect.deleteProperty(target, name)
      Reflect.deleteProperty(obj, 'age')
      console.log('删除元素', obj)
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
