<!--父组件-->
<template>
  <div class="base-warrper">
    <!--父组件-->
    <div>
      <h1>父组件</h1>
      <p>父组件标题：{{ textTitleObj.text }}<el-input v-model="textTitleObj.text" placeholder="" /></p>
    </div>
    <!--子组件-->

    <div>
      <h1>子组件</h1>
      <ChildrenComponent
        :model-value="textTitleObj"
        @update:modelValue="textTitleObj = $event"
      />
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import ChildrenComponent from './childrenComponent.vue'
export default {
  name: 'ParentComponent',
  components: {
    ChildrenComponent
  },
  data() {
    return {
      textTitleObj: {
        text: ''
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
  ::v-deep .base-warrper{
    // display: flex;
    // justify-content: center;
    // align-items: center;
    h1{
      text-align: center;
    }
    .el-form-item__content{
      width: 100%;
    }
  }
  .base-warrper>div{
    width: 50%;
  }
  .select-width .el-select{
    width: 100%;
  }

  .el-date-editor {
    margin-top: 0px !important;
  }
</style>
