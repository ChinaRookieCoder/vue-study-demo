<!--page-->
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <h1 class="back-ground">1</h1>
      </el-col>
      <el-col :span="8">
        <h1 class="back-ground">2</h1>
      </el-col>
      <el-col :span="8">
        <h1 class="back-ground">3</h1>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'TestLayout',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.back-ground{
  background-color: #000;
  color: #fff;
}
</style>
