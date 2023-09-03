<!---->
<template>
  <div class="square-class">
    <square-input :code="123456" />
  </div>

</template>
<script>
import SquareInput from '@/views/component/squareInput.vue'
export default {
  name: 'SquareInputDemo',
  components: {
    SquareInput
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

  <style scoped>
  .select-width .el-select{
    width: 100%;
  }

  .el-date-editor {
    margin-top: 0px !important;
  }
  .square-class{
    display: flex;
    align-items: center;
    justify-content: center;
    height:80vh
  }
  </style>
