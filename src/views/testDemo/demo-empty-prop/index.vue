<!---->
<template>
  <div>
    <h1>看console.log</h1>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>
<script>
import _ from 'lodash'
import { setEmptyPropNullVal } from '@/utils/setPropDefaultValue'
export default {
  name: 'DemoEmptyProp',
  components: {
  },
  data() {
    return {
      formData: {
        userName: '1',
        userAge: '2',
        userArr: [123],
        children: {
          userName: '4',
          userAge: 5,
          userArr: [678],
          children: {
            userName: '',
            userAge: 0,
            userArr: [],
            children: {
              userName: '',
              userAge: 0,
              userArr: [],
              children: {
                userName: '',
                userAge: 0,
                userArr: []
              }
            }
          }
        }
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
    handleSubmit() {
      console.log(setEmptyPropNullVal(this.formData))
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
  .select-width .el-select{
    width: 100%;
  }

  .el-date-editor {
    margin-top: 0px !important;
  }
</style>
