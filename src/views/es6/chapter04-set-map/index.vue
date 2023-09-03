<!--变量的解构赋值-->
<template>
  <div class="base-warpper">
    <p>1.<font class="title">[Set]</font> ES6 提供了新的数据结构 Set。它类似于数组，但是<font class="light-height">成员的值都是唯一的，没有重复的值</font><el-button type="primary" @click="handleTestSet">查看控制台</el-button></p>
    <h4>(1) 初始化Set</h4>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        // 1. 初始化Set
        const set = new Set([1, 2])
        console.log('初始化set', set, 'set长度', set.size, '类型', Object.prototype.toString.call(set))
        // 遍历set
        for (const item of set) {
          console.log('遍历set', item)
        }
        // set转数组
        const arr = Array.from(set)
        console.log('set转数组', arr, Object.prototype.toString.call(arr))
      </pre>
    </VueCodeHighlight>
    <h4>(2) Set添加元素</h4>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        // 2. Set添加元素
        const arr = Array.of(1, 2, 1, 3, 3, 4, 6)
        const set = new Set()
        arr.filter(v => { set.add(v) })
        console.log('添加数组元素后的set', set)
      </pre>
    </VueCodeHighlight>
    <h4>(3) Set删除元素</h4>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        // 3. Set删除元素
        const set = new Set([1, 2, 3, 4, 5, 6, 6])
        set.delete(1)
        console.log('删除元素后的set', set)
      </pre>
    </VueCodeHighlight>
    <h4>(4) Set判断元素是否存在</h4>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        // 4. Set判断元素是否存在
        const set = new Set([1, 2, 3, 4, 5, 6, 6])
        const hasFlag = set.has(5)
        console.log('查找元素', hasFlag)
      </pre>
    </VueCodeHighlight>
    <h4>(5) Set清空元素</h4>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        // 5. Set清空元素
        const set = new Set([1, 2, 3, 4, 5, 6, 6])
        set.clear()
        console.log('清空元素后的set', set)
      </pre>
    </VueCodeHighlight>
    <h4>(6) 实现并集、交集、差集</h4>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        // 6. 实现并集、交集、差集
        const a = new Set([1, 2, 3])
        const b = new Set([4, 3, 2])

        // 并集
        const union = new Set([...a, ...b])
        // Set {1, 2, 3, 4}

        // 交集
        const intersect = new Set([...a].filter(x => b.has(x)))
        // set {2, 3}

        // （a 相对于 b 的）差集
        const difference = new Set([...a].filter(x => !b.has(x)))
        // Set {1}
      </pre>
    </VueCodeHighlight>
    <p>2.<font class="title">[Map]</font> S6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构<font class="light-height">提供了“字符串—值”的对应</font><el-button type="primary" @click="handleTestMap">查看控制台</el-button></p>
    <VueCodeHighlight language="javascript" class="code-wrapper">
      <pre>
        handleTestMap() {
          // 1. 初始化Map
          const map = new Map([
            ['name', '张三'],
            ['title', 'Author']
          ])
          console.log('初始化map', map, 'map长度', map.size, '类型', Object.prototype.toString.call(map))
          // 遍历map
          for (const [key, value] of map) {
            console.log('遍历map', key, value)
          }
          // 设置元素
          map.set('age', 18)
          // 获取元素
          const age = map.get('age')
          console.log('获取元素', age)
          // 删除元素
          map.delete('title')
          // 判断元素是否存在
          const hasFlag = map.has('age')
          console.log('判断age是否存在', hasFlag)
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
  name: 'Chapter04SetMap',
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
    handleTestSet() {
      {
        // 1. 初始化Set
        const set = new Set([1, 2])
        console.log('初始化set', set, 'set长度', set.size, '类型', Object.prototype.toString.call(set))
        // 遍历set
        for (const item of set) {
          console.log('遍历set', item)
        }
        // set转数组
        const arr = Array.from(set)
        console.log('set转数组', arr, Object.prototype.toString.call(arr))
      }

      {
        // 2. Set添加元素
        const arr = Array.of(1, 2, 1, 3, 3, 4, 6)
        const set = new Set()
        arr.filter(v => { set.add(v) })
        console.log('添加数组元素后的set', set)
      }

      {
        // 3. Set删除元素
        const set = new Set([1, 2, 3, 4, 5, 6, 6])
        set.delete(1)
        console.log('删除元素后的set', set)
      }

      {
        // 4. Set判断元素是否存在
        const set = new Set([1, 2, 3, 4, 5, 6, 6])
        const hasFlag = set.has(5)
        console.log('查找元素', hasFlag)
      }

      {
        // 5. Set清空元素
        const set = new Set([1, 2, 3, 4, 5, 6, 6])
        set.clear()
        console.log('清空元素后的set', set)
      }
      {
        // 6. 实现并集、交集、差集
        const a = new Set([1, 2, 3])
        const b = new Set([4, 3, 2])

        // 并集
        const union = new Set([...a, ...b])
        // Set {1, 2, 3, 4}

        // 交集
        const intersect = new Set([...a].filter(x => b.has(x)))
        // set {2, 3}

        // （a 相对于 b 的）差集
        const difference = new Set([...a].filter(x => !b.has(x)))
        // Set {1}
      }
    },
    handleTestMap() {
      {
        // 1. 初始化Map
        const map = new Map([
          ['name', '张三'],
          ['title', 'Author']
        ])
        console.log('初始化map', map, 'map长度', map.size, '类型', Object.prototype.toString.call(map))
        // 遍历map
        for (const [key, value] of map) {
          console.log('遍历map', key, value)
        }
        // 设置元素
        map.set('age', 18)
        // 获取元素
        const age = map.get('age')
        console.log('获取元素', age)
        // 删除元素
        map.delete('title')
        // 判断元素是否存在
        const hasFlag = map.has('age')
        console.log('判断age是否存在', hasFlag)
      }
      console.log('')
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
