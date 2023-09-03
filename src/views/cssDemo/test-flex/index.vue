<!---->
<template>
  <div class="page-container">
    <el-tabs v-model="activeName" @tab-click="handleActiveClick">
      <!--tab1-->
      <el-tab-pane name="fixedFlex" label="Flex固定块布局">
        <!--标题-->
        <div style="display:flex;align-items: center;justify-content:center;">
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
      </el-tab-pane>

      <!--tab2-->
      <el-tab-pane name="splitBlockFlex" label="Flex分割块布局">
        <div class="tab2-flex-container">
          <!--part1-->
          <div class="part-1">part 1</div>
          <!--part2-->
          <div class="part-2">part 2</div>
          <!--part3-->
          <div class="part-3">part 3</div>
          <!--part4-->
          <div class="part-4">part 4</div>
          <!--part5-->
          <div class="part-5">part 5</div>
          <!--part6-->
          <div class="part-6">part 6</div>
          <!--part7-->
          <div class="part-7">part 7</div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'TestFlex',
  components: {
  },
  data() {
    return {
      boxArray: [],
      activeName: 'fixedFlex',
      colorlists: [
        'rgb(229, 0, 19)',
        'rgb(206,194,28)',
        'rgb(0,161,233)',
        'rgb(109,185,45)',
        'rgb(166,0,130)',
        'rgb(237,108,0)',
        'rgb(240, 28, 131)',
        'rgb(84, 21, 226)',
        'rgb( 0,128,0)',
        'rgb( 255,69,0)',
        'rgb( 255,165,0)',
        'rgb( 178,34,34)',
        'rgb( 255,0,255)',
        'rgb(65,105,225)',
        'blueviolet']
    }
  },
  computed: {
  },
  watch: {

  },
  created() {
    // this.randomsColor()
  },
  mounted() {
  },
  methods: {
    randomsColor() {
    },
    handleInsertBox() {
      // 把获取到的值赋值给 Number
      const colorTemp = this.colorlists[Math.floor(Math.random() * 10)]
      const obj = { color: colorTemp }
      this.boxArray.push(obj)
    },
    handleActiveClick(tab, event) {

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
  ::v-deep .el-tabs__header{
    width: 1200px;
    margin: 10px auto!important;
  }
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
    margin: 20px auto;
    // width: 1256px;
    width: 1200px;
    // border: 3px solid black;
    // min-height: 500px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    // gap: 10px;
    min-height: 440px;
    background-color: #ccc;
    border-radius: 20px;
  }
  .flex-box{
    width: 200px;
    height: 200px;
    border-radius: 20px;
    // flex-grow: 1; // 1就是 自动填充剩余空间 0不填充
    // flex-shrink:0; //0就是不缩小，1 如果空间不足，该项目将缩小。
    line-height: 200px;
    font-size: 25px;
    color: #fff;
    text-align: center;
    font-weight: 800;
    margin: 10px calc(((100% - 200px * 5)/5/2));//计算出左右margin (父盒子总宽度100% - 200px小盒子宽度 * 5一行展示小盒子数量) / 5一行展示小盒子数量 / 2左右margin
    // flex-basis: 200px; // 一般等于宽度
  }
  .tab2-flex-container{
    margin: 0 auto;
    width: 1200px;
    background-color: #ccc;
    min-height: 440px;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    text-align: center;
    font-size: 17px;
    font-weight: 800;
    line-height: 200px;
  }
  .part-1{
    background-color: red;
    flex: 0 0 70%;  // [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  }
  .part-2{
    margin-left: 20px;
    background-color: gold;
    flex: 0 0 calc(30% - 20px); // [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  }
  .part-3{
    background-color: #3385ff;
    flex: 0 0 calc((100% / 3) - 20px); // [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  }
  .part-4{
    background-color: #ff6d6d;
    flex: 0 0 calc(100% / 3); // [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    margin: 0px 20px;
  }
  .part-5{
    background-color: #ff9d73;
    flex: 0 0 calc((100% / 3) - 20px); // [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  }
  .part-6{
    background-color: pink;
    flex: 0 0 calc(30% - 20px); // [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    margin-right: 20px;
  }
  .part-7{
    background-color: black;
    flex: 0 0 70%; // [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  }
  </style>
