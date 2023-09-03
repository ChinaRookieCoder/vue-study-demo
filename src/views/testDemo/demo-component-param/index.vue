<!--测试父子组件交互数据-->
<template>
  <div>
    <div style="background:pink;height: 90px;">
      <el-input v-model="form.value" placeholder="" />
      <h1>我是父组件</h1>
    </div>

    <!--子组件-->
    <demoComponent :parent-value="form.value" @update:value="form.value = $event" />
  </div>
</template>
<script>
import demoComponent from './demo-component.vue'
export default {
  name: 'TestComponentParam',
  components: {
    demoComponent
  },
  data() {
    return {
      form: {
        value: ''
      }
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

  </style>
