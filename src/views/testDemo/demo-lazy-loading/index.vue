<!--page-->
<template>
  <div>
    <div class="font-warpper">
      <h1>图片在下方</h1>
    </div>
    <LazyImgLoading ref="11" :img-src="imgSrc" :default-img-src="require('@/assets/images/picture.png')" />
    <LazyImgLoading ref="22" :img-src="imgSrc2" />
  </div>
</template>
<script>
import _ from 'lodash'
import LazyImgLoading from './component/LazyImgLoading.vue'
export default {
  name: 'DemoLazyLoading',
  components: {
    LazyImgLoading
  },
  props: {},
  data() {
    return {
      imgSrc: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg1.jpeg',
      imgSrc2: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.font-warpper h1{
  font-size: 200px;
  text-align: center;
  background-color: green;
  vertical-align: center;
  padding: 20%;
  margin: auto;
}
</style>
