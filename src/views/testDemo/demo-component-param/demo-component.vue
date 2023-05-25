<!--测试Promise-->
<template>
  <div style="background:#ccc">
    <h1>父组件的传来的值是：{{ parentValue }}</h1>
    <el-input v-model="inputValue" placeholder="改变父组件中的值" />
    <h1>我是子组件</h1>
  </div>
</template>
<script>
export default {
  name: 'DemoComponent',
  components: {
  },
  props: {
    parentValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.parentValue
      },
      set(val) {
        this.$emit('update:value', val)
      }
    }
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
