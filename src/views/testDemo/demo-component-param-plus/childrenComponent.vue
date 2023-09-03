<!--子组件-->
<template>
  <div>
    <!-- <el-form :model="textTitleObj" :inline="true" label-width="150px" size="small"> -->
    <!-- <el-form-item label="修改标题" prop="userName"> -->
    {{ modelValueLocal }}
    <el-input v-model="modelValueLocal.text" placeholder="" />
    <el-button type="primary" @click="handleModifyTitle">修改值为《哈哈哈》</el-button>
    <!-- </el-form-item> -->
    <!-- </el-form> -->
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'ChildrenComponent',
  components: {
  },
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    modelValueLocal: {
      get() {
        const _this = this
        return new Proxy(this.modelValue, {
          get(target, key) {
            return Reflect.get(target, key)
          },
          set(target, key, value) {
            console.log('对象发生变化:', target, key, value)
            _this.$emit('update:modelValue', { ...target, [key]: value })
            return true
          }
        })
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  watch: {

  },
  created() {
  },
  mounted() {
    this.textTitle = '4454'
  },
  methods: {
    handleModifyTitle() {
      this.modelValueLocal.text = '哈哈哈'
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
