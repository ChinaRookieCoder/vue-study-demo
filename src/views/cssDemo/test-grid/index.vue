<!---->
<template>
  <div class="page-container">
    <!--标题-->
    <div style="display:flex;align-items: center;justify-content:center;">
      <h1 class="title">测试Flex布局</h1>
      <div style="margin-left:20px"><el-button type="primary" size="small" @click="handleInsertBox">添加</el-button></div>
      <div style="margin-left:20px"><el-button type="danger" size="small" @click="boxArray=[]">清空</el-button></div>
    </div>
    <!--大盒子-->
    <div class="big-box">
      <!--小盒子-->
      <div v-for="(item,index) in boxArray" :key="index" class="flex-box" :style="'background:'+item.color">
        <span> {{ index }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestGrid',
  components: {
  },
  data() {
    return {
      boxArray: []
    }
  },
  computed: {
  },
  watch: {

  },
  created() {
    this.randomsColor()
  },
  mounted() {
  },
  methods: {
    randomsColor() {
    },
    handleInsertBox() {
      // 把获取到的值赋值给 Number
      const colorTemp = '#' +
        // 下舍入（0-1随机数 乘以 255）转换为16进制
        Math.floor(Math.random() * 255).toString(16) +
        Math.floor(Math.random() * 255).toString(16) +
        Math.floor(Math.random() * 255).toString(16)
      const obj = { color: colorTemp }
      this.boxArray.push(obj)
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
  .title{
    text-align: center;
    color: pink;
  }
  .big-box{
    border: 3px solid black;
    min-height: 500px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .flex-box{
    width: 200px;
    height: 200px;
    line-height: 200px;
    font-size: 17px;
    color: black;
    font-weight: 800;
    text-align: center;
    margin: 10px auto;
  }
  </style>
