<!---->
<template>
  <div class="base-container">
    <h1>Lodash判断变量类型</h1>
    <div style="width:20vw;margin: 10px auto"><el-input v-model="keywordSearch" placeholder="请输入关键字" @input="handleKeywordSearch" /></div>
    <div class="collapse-content">
      <el-collapse v-model="activeNames" @change="handleActiveChange">
        <div v-for="(item,index) in judgeTypeModelList" :key="index">
          <el-collapse-item style="margin-bottom:10px" :name="item.collapseName" :title="item.collapseTitle">
            <el-tag type="danger">语法</el-tag>
            <span class="content-main">{{ item.grammar }}<label class="copy-style el-icon-copy-document" @click="copyGrammar(item.grammar)">Copy</label></span>
            <el-tag type="warning">返参</el-tag>
            <span class="content-main">{{ item.returnParam }}</span>
            <el-tag type="info">用法</el-tag>
            <span class="content-main-desc">{{ item.descrition }}</span>
          </el-collapse-item>
        </div>
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
        NUMBER: 'number',
        ARRAY: 'array',
        OBJECT: 'object'
      },
      keywordSearch: '',
      judgeTypeModelList: []
    }
  },
  computed: {
    ...mapState('judgeType', ['judgeTypeList'])
  },
  watch: {

  },
  created() {
    console.log('测试字符串类型', this.judgeVaribleType(this.CONST.STRING, '123124'))// 测试字符串类型
    console.log('测试数值类型', this.judgeVaribleType(this.CONST.NUMBER, 1.12))// 测试数值类型
    console.log('测试是否数组类型', this.judgeVaribleType(this.CONST.ARRAY, []))// 测试是否数组类型
    console.log('测试是否Object类型', this.judgeVaribleType(this.CONST.OBJECT, {}))
  },
  mounted() {
    this.judgeTypeModelList = _.cloneDeep(this.judgeTypeList)
  },
  methods: {
    handleActiveChange(val) {
      console.log(val)
    },
    judgeVaribleType(type, val) {
      if (!val) return false
      switch (type) {
        case this.CONST.STRING:
          return _.isString(val)
        case this.CONST.NUMBER:
          return _.isNumber(val)
        case this.CONST.ARRAY:
          return _.isArray(val)
        case this.CONST.OBJECT:
          return _.isObject(val)
      }
    },
    copyGrammar(grammar) {
      this.$copyText(grammar).then(
        success => {
          this.messageSuccess('成功复制到剪切板')
        },
        failed => {
          this.messageError('复制失败')
        }
      )
    },
    handleKeywordSearch: _.debounce(function(val) {
      const fullDataArr = _.cloneDeep(this.judgeTypeList)
      const arr = fullDataArr.filter(v => {
        return v.collapseTitle.indexOf(val) !== -1
      })
      this.judgeTypeModelList = _.cloneDeep(arr)
    }, 1000),
    messageSuccess(messageData) {
      this.$notify({
        title: messageData,
        message: '',
        type: 'success',
        duration: 1000
      })
    },
    messageError(messageData) {
      this.$notify({
        title: '失败',
        message: messageData,
        type: 'error',
        duration: 1000
      })
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
    .copy-style{
      vertical-align: middle;
      margin-left: 50px;
      font-size: 18px;
      // float: right;
    }
    .copy-style:hover{
      cursor: pointer;
      color: #ec6363;
    }
  }
  </style>
