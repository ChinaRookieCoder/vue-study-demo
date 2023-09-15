<!--page-->
<template>
  <div>
    <img :src="imgSrc" lazyload="true" :width="`${imgWidth}px`" :height="`${imgHeight}px`">
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
    return {}
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
      const observer = new IntersectionObserver((entries) => {
        console.log(entries)
      })
      const imgDom = document.getElementsByTagName('img')
      console.log(imgDom)
    }
  }
}
</script>

<style lang="scss" scoped></style>
