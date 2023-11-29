<!--page-->
<template>
  <div>
    <el-row :gutter="24" class="el-row-wrapper">
      <el-col :span="8">
        <label>姓名</label>
        <el-tooltip :disabled="toolTipDisable.name" class="item" effect="dark" placement="top-end">
          <div slot="content" style="max-width:400px">{{ dataInfo.name }}</div>
          <span ref="name">{{ dataInfo.name }}</span>
        </el-tooltip>
      </el-col>
      <el-col :span="8">
        <label>邮箱</label>
        <el-tooltip :disabled="toolTipDisable.email" class="item" effect="dark" placement="top-end">
          <div slot="content" style="max-width:400px">{{ dataInfo.email }}</div>
          <span ref="email">{{ dataInfo.email }}</span>
        </el-tooltip>
      </el-col>
      <el-col :span="8">
        <label>身份证</label>
        <el-tooltip :disabled="toolTipDisable.cardNo" class="item" effect="dark" placement="top-end">
          <div slot="content" style="max-width:400px">{{ dataInfo.cardNo }}</div>
          <span ref="cardNo">{{ dataInfo.cardNo }}</span>
        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import _ from 'lodash'
import ResizeObserver from 'resize-observer-polyfill'
export default {
  name: 'DemoDescDetail',
  components: {
  },
  props: {},
  data() {
    return {
      dataInfo: {
        name: '阿圣诞节哈哈是大家啊受打击合计大萨达',
        email: '666666666666623423423342342342342342342666@qq.com',
        cardNo: '5555555555555555555555555'
      },
      toolTipDisable: {},
      observer: null
    }
  },
  computed: {
  },
  watch: {
    // 当元素的高度发生变化时，这里的代码会被执行
  },
  created() {
    Object.keys(this.dataInfo).filter(v => {
      this.$set(this.toolTipDisable, v, false)
    })
  },
  mounted() {
    this.addResizeObserver()
  },
  beforeDestroy() {
    this.removeResizeObserver()
  },
  methods: {
    handleMouseoverTooltip(ref) {
      if (Reflect.has(this.toolTipDisable, ref) && this.$refs[ref]) {
        this.toolTipDisable[ref] = true
        this.$refs[ref].classList.remove('overflow-wrapper')
        this.$nextTick(() => {
          const currentDomHeight = this.$refs[ref].offsetHeight
          const standardHeight = 16 * 2
          // 空间的高，文字大小的2倍说明空间不足了
          if (currentDomHeight > standardHeight) {
            this.$refs[ref].classList.add('overflow-wrapper')
            this.toolTipDisable[ref] = false
          }
        })
      }
    },
    addResizeObserver() {
      // ResizeObserver兼容问题 npm install resize-observer-polyfill --save-dev
      // import ResizeObserver from 'resize-observer-polyfill';
      // 创建监听器
      const _this = this
      this.observer = new ResizeObserver(entries => {
        // 监听器会返回一个数组，数组中存放着每个被监听的元素的相关数据
        entries.forEach(entry => {
          const domRef = entry.target?.__vue__?._vnode?.data?.ref
          _this.handleMouseoverTooltip(domRef)
          // 监听的元素
          // console.log(entry.target)
          // 元素改变后的尺寸
          // console.log(entry.contentRect)
        })
      })
      Object.keys(this.toolTipDisable).filter(v => {
        console.log(v, this.$refs[v])
        this.observer.observe(this.$refs[v])
      })
    },
    removeResizeObserver() {
      Object.keys(this.toolTipDisable).filter(v => {
        this.observer.unobserve(this.$refs[v])
      })
      console.log('销毁尺寸监听器')
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-row-wrapper{
  margin: 45px 0px;
  .el-col label{
    display: block;
    text-align: right;
    font-size: 16px;
    font-weight: 800;
    padding-right: 10px;
    height: 16px;
    flex-shrink:0;
    flex-basis: 130px;
  }
  .el-col span{
    font-size: 16px;
    display: block;
    white-space: normal;
    overflow: visible;
    word-break: break-all;
    word-wrap:break-word;
  }
  .el-col-8{
    display: flex!important;
  }
  .overflow-wrapper{
    white-space: nowrap!important;
    overflow: hidden!important;
    text-overflow: ellipsis!important;
    word-break: unset!important;
    word-wrap:unset!important;
  };
}
</style>
