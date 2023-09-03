<!--测试Promise-->
<template>
  <div class="base-container">
    <h1>{{ num }}</h1>
    <el-button type="primary" @click="triggerPromise">同步触发promise</el-button>
  </div>

</template>
<script>
export default {
  name: 'TestPromise',
  components: {
  },
  data() {
    return {
      num: 0
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
    handlePromise() {
      return new Promise((resolve, reject) => {
        this.num++
        resolve()
      })
    },
    timePromise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.num++
          resolve()
        }, 2000)
      })
    },
    async triggerPromise() {
      await this.handlePromise()
      await this.timePromise()
      this.messageSuccess('函数执行结束')
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
.base-container{
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    margin-right: 20px;
  }
}
</style>
