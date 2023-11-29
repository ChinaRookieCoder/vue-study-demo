<!--page-->
<template>
  <div>
    <el-button type="primary" @click="printPdf">
      打印
    </el-button>
    <iframe v-if="iframeExist" v-show="false" id="my-iframe" :srcdoc="iframeHtml" :src="void 0" width="100%" height="100%" frameborder="0" />
    <div v-show="false" id="hidden-table-html">
      <table
        border
        cellspacing="0"
        cellpadding="0"
        style="width:100%;text-align:center;margin:2px 0px;"
      >
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>赵伟杰</td>
            <td>18</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">合计</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoIframe',
  components: {},
  props: {},
  data() {
    return {
      iframeHtml: '',
      iframeExist: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    printPdf() {
      this.iframeHtml = document.getElementById('hidden-table-html').innerHTML
      this.iframeExist = true
      this.$nextTick(() => {
        const myIframe = document.getElementById('my-iframe')
        const myIframeWindow = myIframe.contentWindow
        myIframeWindow.print()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .my-dialog-wapper{
  .el-dialog__body{
    height: 500px;
  }
}
</style>
