<!--自定义指令page-->
<template>
  <div>
    <div class="data-centent-wapper">
      <el-row :gutter="24">
        <el-col :span="6">
          <label>姓名:</label>
          <span v-autotip>{{ dataContent.name }}</span>
        </el-col>
        <el-col :span="6">
          <label>年龄:</label>
          <span v-autotip>{{ dataContent.age }}</span>
        </el-col>
        <el-col :span="6">
          <label>性别:</label>
          <span v-autotip>{{ dataContent.sex }}</span>
        </el-col>
        <el-col :span="6">
          <label>地址:</label>
          <span v-autotip>{{ dataContent.address }}</span>
        </el-col>
      </el-row>
    </div>
    <button @click="changeData('杨丽莎')">改变数据</button>
    <!-- 添加本组件全局公用el-tooltip -->
    <el-tooltip ref="tooltip" placement="top" :content="tooltipContent" />
  </div>
</template>
<script>
/* eslint-disable */
    // 获取style
function getStyle(obj, attr) {
  if (obj.currentStyle) {
      return obj.currentStyle[attr];
  } else {
      return getComputedStyle(obj)[attr];
  }
}
import _ from 'lodash'
export default {
  name: 'DemoDirective',
  components: {},
  props: {},
  data() {
    return {
      dataContent: {
        name: '赵伟杰',
        age:18,
        sex:'男',
        address:'阿加莎打卡机三大空间大凯撒阿九山东科技啊卡仕达酱阚'
      },
      tooltipContent: ''
    }
  },
  directives: {
    autotip: {
      bind(el, binding, vnode, oldVnode) {
        el.style.whiteSpace = 'nowrap'
        el.style.overflow = 'hidden'
        el.style.textOverflow = 'ellipsis'
      },
      inserted(el, binding, vnode, oldVnode) {
        // 获取el-tooltip组件
        const tooltip = vnode.context.$refs.tooltip
        // 给添加指令的el对象添加鼠标移入事件
        el.__vueOverflowTooltipMouseenter__ = function() {
          // 获取el.childNodes长度判断是否触发Range对象计算宽度
          const childNodesLength = el.childNodes.length
          if (childNodesLength) {
            // 使用 range 代替 scrollWidth 来判断文本是否溢出，这样做是为了解决潜在的 bug。
            const range = document.createRange();
            // 设置range的起点
            range.setStart(el, 0);
            // 设置 range 的终点，因为起终点都在同一个节点上，所以设置终点偏移量以选中节点的内容
            range.setEnd(el, childNodesLength);
            // 获取节点内容的宽度
            const rangeWidth = range.getBoundingClientRect().width;
            // 获取el盒模型
            const boxSizing = getStyle(el, 'boxSizing');
            // 获取el左右pandding
            const padding = boxSizing === 'border-box' ? 0 : (parseInt(getStyle(el, 'paddingLeft'), 10) + parseInt(getStyle(el, 'paddingRight'), 10))
            // 判断宽度是否溢出
            // 条件一：(内容宽度+内边距) > 元素的可见宽度
            // 条件二: 元素的像素宽度，高度包含内边距 > 元素的可见宽度
            if (rangeWidth + padding > el.offsetWidth || el.scrollWidth > el.offsetWidth) {
              // 赋值tooltip组件的tooltipContent
              vnode.context.$data.tooltipContent = el.innerText || el.textContent;
              // 关联el(当前元素)
              tooltip.referenceElm = el;
              // 隐藏之前打开的tooltip组件
              tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
              // 注销tooltip组件
              tooltip.doDestroy();
              tooltip.setExpectedState(true);
              tooltip.handleShowPopper()
            }
          }
        }
        // 给添加指令的dom对象添加鼠标移出事件
        el.__vueOverflowTooltipMouseleave__ = function() {
          tooltip.setExpectedState(false);
          tooltip.handleClosePopper();
        }
        // 绑定鼠标移入移出事件
        el.addEventListener('mouseenter', el.__vueOverflowTooltipMouseenter__);
        el.addEventListener('mouseleave', el.__vueOverflowTooltipMouseleave__);
      },
      unbind(el) {
        el.removeEventListener('mouseenter', el.__vueOverflowTooltipMouseenter__);
        el.removeEventListener('mouseleave', el.__vueOverflowTooltipMouseleave__);
        delete el.__vueOverflowTooltipMouseenter__;
        delete el.__vueOverflowTooltipMouseleave__; 
      }
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    changeData(name) {
      this.dataContent.name = name
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .data-centent-wapper{
  background-color: orange;
  .el-row{
    &>.el-col{
      display: flex;
      &>label,&>span{
        display: block;
      }
      &>label{
        text-align: right;
        flex-shrink: 0;
        flex-basis: 110px;
      }
    }
  }
}
</style>
