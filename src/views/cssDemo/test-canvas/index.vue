<!--page-->
<template>
  <div>
    <div class="base-warpper">
      <!--创建一张canvas画布-->
      <canvas id="canvas" width="600" height="600" class="canvas-wrapper">你的浏览器不支持canvas，快去升级浏览器吧</canvas>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestCanvas',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.initLineCanvas()
  },
  methods: {
    // 初始化canvas(线条)
    initLineCanvas() {
      debugger
      // 获取canvas元素dom
      const canvasDom = document.getElementById('canvas')
      // 通过getContext()方法来获得渲染上下文和它的绘画功能
      const ctx = canvasDom.getContext('2d')
      // moveTo(x,y)：定义画线的起始点；
      // lineTo(x,y)：定义画线的折点；
      // stroke()：通过线条来绘制图形轮廓
      ctx.strokeStyle = 'red' // 设置线段颜色为红色
      ctx.lineCap = 'round' // 设置线帽为圆
      ctx.lineWidth = 20 // 设置线段宽度
      ctx.lineJoin = 'round' // 设置线段连接处为圆形
      ctx.moveTo(10, 250)
      ctx.lineTo(590, 250)
      ctx.stroke()
      ctx.moveTo(590, 250)
      ctx.lineTo(10, 590)
      ctx.stroke()
      ctx.moveTo(10, 590)
      ctx.lineTo(300, 10)
      ctx.stroke()
      ctx.moveTo(300, 10)
      ctx.lineTo(590, 590)
      ctx.stroke()
      ctx.moveTo(590, 590)
      ctx.lineTo(10, 250)
      ctx.stroke()
    }
  }
}
</script>

<style lang="scss" scoped>
.base-warpper{
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.canvas-wrapper{
  /* box-shadow:水平位置 垂直位置 模糊距离 阴影尺寸（影子大小） 阴影颜色  内/外阴影； */
  box-shadow: 0px 0px 30px  rgba(0, 0, 0, .4);;
}
</style>
