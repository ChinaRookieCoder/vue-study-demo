<!---->
<template>
  <div>
    <el-button type="primary" @click="messageShow=true">点我出现弹窗</el-button>
    <my-message
      message-title="温馨提示"
      :message-visible="messageShow"
      :message-width="1100"
      @update:messageVisible="messageShow = $event"
      v-on="$listeners"
    />
  </div>
</template>
<script>
import _ from 'lodash'
import MyMessage from '@/views/component/message/index.vue'
export default {
  name: 'DemoJsCompont',
  components: {
    MyMessage
  },
  props: {
  },
  data() {
    return {
      messageShow: false
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
