<!---->
<template>
  <div class="base-container">
    <h1>Lodash判断变量类型</h1>
    <div class="collapse-content">
      <el-collapse v-model="activeNames" @change="handleActiveChange">
        <el-collapse-item name="stringType" title="判断String类型">
          <el-tag type="danger">语法</el-tag>
          <span class="content-main">_.isString(val)</span>
          <el-tag type="warning">返参</el-tag>
          <span class="content-main">Boolean(true/false)</span>
          <el-tag type="info">用法</el-tag>
          <span class="content-main-desc">
            用于判断是否String类型
          </span>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import { mapState } from 'vuex'
export default {
  name: 'JudgeType',
  components: {
  },
  data() {
    return {
      activeNames: [],
      CONST: {
        STRING: 'string',
        INTEGER: 'integer'
      }
    }
  },
  computed: {
    ...mapState('judgeType', ['judgeTypeList'])
  },
  watch: {

  },
  created() {
    console.log(this.judgeTypeList)
  },
  mounted() {
  },
  methods: {
    handleActiveChange(val) {
      console.log(val)
    },
    judgeVaribleType(type, val) {
      switch (type) {
        case this.CONST.STRING:
          return _.isString(val)
      }
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
  .base-container{
    width: 100%;
    h1{
      text-align: center;
    }
    .collapse-content{
      width: 1200px;
      margin: 0 auto;
    }
  }
  ::v-deep .el-collapse-item__header{
    background-color: #ec6363;
    font-size: 18px;
    font-weight: 800;
    padding: 0px 20px;
    color:#fff
  }
  ::v-deep .el-collapse-item__content{
    padding: 20px 20px;
    background-color: #fbc65b;
    font-size: 15px;
    font-weight: 800;
    color: #5fa585;
    span{
      // margin-right: 10px;
      background:#fff;
      display: block;
      border-radius: 4px;
      // padding-left: 10px;
    }
     .content-main{
      display: block;
      padding-left: 10px;
      font-weight: 900;
      font-size: 25px;
    }
    .content-main-desc{
      display: block;
      padding-left: 10px;
      font-weight: 700;
      font-size: 17px;
      color: #75c4dc;
    }
  }
  </style>
