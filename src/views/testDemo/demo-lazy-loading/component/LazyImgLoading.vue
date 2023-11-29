<!--page-->
<template>
  <div>
    <img ref="imgRef" :src="defaultImgSrcLocal" lazyload="1" :width="`${imgWidth}px`" :height="`${imgHeight}px`">
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'LazyImgLoading',
  components: {},
  props: {
    imgSrc: {
      type: String,
      default: require('@/assets/images/loading.gif')
    },
    defaultImgSrc: {
      type: String,
      default: require('@/assets/images/loading.gif')
    },
    imgWidth: {
      type: Number,
      default: 200
    },
    imgHeight: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      defaultImgSrcLocal: this.defaultImgSrc
    }
  },
  computed: {
  },
  watch: {},
  created() {},
  mounted() {
    this.imgObserver()
  },
  methods: {
    imgObserver() {
      // 创建Observer观察者
      const observer = new IntersectionObserver((entries) => {
        entries.filter(item => {
          // 是否交叉
          if (item.isIntersecting) {
            this.defaultImgSrcLocal = this.imgSrc
            // 赋值完成之后卸载监听
            observer.unobserve(item.target)
          }
        })
      }, {
        root: null, // 默认是视口,也可以自己指定dom元素
        rootMargin: '0px', // 交叉区域的margin
        threshold: 0 // 交叉区域的比例 0:交叉 1完全交叉覆盖
      })
      // const imgDomArr = []
      const watchDomArr = []
      // for (const item of imgDomArr) {
      //   if (item.getAttribute('lazyload') !== null && item.getAttribute('lazyload') !== undefined && item.getAttribute('lazyload') !== false) {
      //     watchDomArr.push(item)
      //   }
      // }
      watchDomArr.push(this.$refs.imgRef)
      watchDomArr.filter(item => {
        const imgDom = item
        // 监听图片加载失败
        imgDom.addEventListener('error', (event) => {
          this.defaultImgSrcLocal = this.defaultImgSrc
        })
        observer.observe(item)
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
