<!--page-->
<template>
  <div>
    <div class="base-warrper">
      <!--裁剪区Start-->
      <div>
        <input type="file" accept="image/*" @change="handleFileSelect($event)">
        <div class="content-wrapper">
          <!--
        auto-crop: 是否生成截图框
        auto-crop-width: 截图框宽度
        auto-crop-height: 截图框高度
        img: 图片：支持base64、blob、url
        output-size: 输出图片大小
        output-type: 输出图片类型
        can-move：原始图片是否可拖拽移动
        fixed：是否开启截图框宽高固定比例
        fixed-box：截图框是否固定大小
        can-scale：图片是否允许滚轮缩放
        limit-min-size：截图框最小宽高
      -->
          <VueCropper
            ref="cropper"
            :auto-crop="true"
            auto-crop-width="200"
            auto-crop-height="200"
            :img="option.img"
            :output-size="option.size"
            :output-type="option.outputType"
            :can-move="false"
            :fixed="true"
            :fixed-box="true"
            :can-scale="true"
            :limit-min-size="200"
            @realTime="realTimePreview"
          />
        </div>
      </div>
      <!--裁剪区End-->

      <!--预览区Start-->
      <div>
        <div
          class="show-preview"
          :style="previewStyle"
        >
          <div :style="previews.div">
            <img :src="option.img" :style="previews.img">
          </div>
        </div>
      </div>
      <!--预览区End-->
    </div>
    <!--底部按钮-->
    <div style="display: flex;justify-content: center;align-items: center;margin-top: 20px;">
      <div style="margin: 0 20px;"><el-button icon="my-left-xz" type="primary" size="small" @click="$refs.cropper.rotateLeft()">左旋转</el-button></div>
      <div style="margin: 0 20px;"><el-button icon="my-right-xz" type="primary" size="small" @click="$refs.cropper.rotateRight()">右旋转</el-button></div>
      <div style="margin: 0 20px;"><el-button icon="my-download" type="primary" size="small" @click="downloadImg">下载截图</el-button></div>
    </div>
  </div>
</template>
<script>
import { VueCropper } from 'vue-cropper'
import { saveAs } from 'file-saver'
import moment from 'moment'
export default {
  name: 'DemoCutImg',
  components: {
    VueCropper
  },
  props: {},
  data() {
    return {
      option: {
        img: '',
        size: 1,
        outputType: 'png'
      },
      previewStyle: null,
      previews: {
        w: 200,
        h: 200
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleFileSelect(event) {
      // 获取文件对象
      const file = event.target.files[0]
      console.log(file)
      // 文件转blob
      // const blob = URL.createObjectURL(file)
      // blob转文件
      // const file = new File([blob], fileName, { type: fileType, lastModified: Date.now() });
      // // 获取读取文件对象
      const fileReader = new FileReader()
      // 读取文件，并将文件转base64
      fileReader.readAsDataURL(file)
      const _this = this
      // 读取文件回调（回调是异步的）
      fileReader.onload = function(e) {
        const imgBase64 = e.target.result
        _this.option.img = imgBase64
      }
    },
    realTimePreview(data) {
      const previews = data
      this.previewStyle = {
        width: '200px',
        height: '200px',
        overflow: 'hidden',
        margin: '0',
        zoom: 200 / previews.w,
        borderRadius: '50%',
        border: '10px solid orange'
      }
      this.previews = data
    },
    downloadImg() {
      this.$refs.cropper.getCropBlob(data => {
        const { type } = data
        const date = moment().format('YYYYMMDDHHmmssSSS')
        console.log(date)
        const fileName = `截图${date}.png`
        const file = new File([data], fileName, { type: type, lastModified: Date.now() })
        const blob = URL.createObjectURL(file)
        saveAs(blob, fileName, { type: type })
      })
    }
  }
}
</script>
<style lang="scss">
  $icon-font-size: 14px;
 // 自定义icon[左旋转]
.my-left-xz{
  font-size: $icon-font-size;
  background: url('~@/assets/svg/left-xz.svg') center no-repeat;
  background-size: $icon-font-size $icon-font-size;
  vertical-align:baseline;
  margin-right: 4px;
  &::before {
    content: "\e611";
    font-size: $icon-font-size;
    visibility: hidden;
    vertical-align:baseline;
  }
}
  // 自定义icon[右旋转]
.my-right-xz {
  font-size: $icon-font-size;
  background: url('~@/assets/svg/right-xz.svg') center no-repeat;
  background-size: $icon-font-size $icon-font-size;
  vertical-align:baseline;
  margin-right: 4px;
  &::before {
  content: "\e611";
  font-size: $icon-font-size;
  visibility: hidden;
  vertical-align:baseline;
 }
}
  // 自定义icon[右旋转]
.my-download {
  font-size: $icon-font-size;
  background: url('~@/assets/svg/download.svg') center no-repeat;
  background-size: $icon-font-size $icon-font-size;
  vertical-align:baseline;
  margin-right: 4px;
  &::before {
  content: "\e611";
  font-size: $icon-font-size;
  visibility: hidden;
  vertical-align:baseline;
 }
}

</style>
<style lang="scss" scoped>
.content-wrapper{
  width: 600px;
  height: 600px;
}
.base-warrper{
  display: flex;
  align-items: center;
  justify-content: center;
}
.base-warrper>div{
  margin: 0 2vw;
}
.show-preview{
  overflow: hidden;
}
</style>
