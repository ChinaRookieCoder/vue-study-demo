<!--测试Error-->
<template>
  <div class="error-wrapper">
    <!--情况一，同步error-->
    <el-button style="display:block" type="primary" @click="syncErrorTigger">触发同步异常(局部加try/catch)</el-button>
    <!--情况二，异步error-->
    <el-button style="display:block" type="primary" @click="asyncErrorTigger">触发异步异常(局部加try/catch)</el-button>
    <!--情况三，全局异常处理-->
    <el-button style="display:block" type="primary" @click="totalErrorTigger">触发同步和异步异常(局部上层不加try/catch)</el-button>
  </div>
</template>
<script>
export default {
  name: 'TestError',
  components: {
  },
  data() {
    return {
    }
  },
  errorCaptured(error, vm, info) {
    console.log('局部组件', error)
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
    /**
     * @description 同步触发异常
     */
    syncErrorTigger() {
      try {
        const a = null
        if (a.length > 0) console.log('6')
      } catch (error) {
        console.log('局部try/catch同步触发异常', error)
      }
    },
    /**
     * @description 异步触发异常
     * 对于Promise来说，需要加async/await才能捕获异常[异步错误只能异步的捕捉]
     */
    async asyncErrorTigger() {
      // ===================Promise块=======================
      try {
        await new Promise((resolve, reject) => {
          console.log('局部try/catch Promise异步执行了...')
          const a = null
          if (a.length > 0) console.log('6')
        })
      } catch (error) {
        console.log('局部try/catch Promise异步异常进入try/catch类型是->', typeof error)
        console.log(error)
      }
      // ===================Promise块2=======================
      new Promise((resolve, reject) => {
        // todo something
        console.log('局部Promise2异步执行了')
        const a = null
        if (a.length > 0) console.log('6')
      }).then(resolve => {
        console.log(resolve)
      }).catch(error => {
        console.log('局部Promise2异常：', error)
      })
      // ===================定时器块=======================
      setTimeout(() => {
        console.log('定时器异步执行了...')
        const a = null
        if (a.length > 0) console.log('6')
      }, 1000)
    },
    totalErrorTigger() {
      // 同步异常
      // const n = null
      // if (n.length > 0) console.log('6')

      // promise异步异常
      new Promise((resolve, reject) => {
        const n = null
        if (n.length > 0) console.log('6')
      })

      // 异步定时器异常
      setTimeout(() => {
        const n = null
        if (n.length > 0) console.log('6')
      }, 1000)
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
  .error-wrapper{
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  </style>
