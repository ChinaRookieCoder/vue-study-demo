<!---->
<template>
  <div>
    <el-button type="primary" @click="blockShow=!blockShow">隐藏/显示</el-button>
    <transition name="showAnimation" appear>
      <h1 v-show="blockShow">组件动画效果</h1>
    </transition>
    <el-input v-model="paramsProps" placeholder="" />
    <xiha :params="paramsProps" />
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'TestAnimation',
  components: {
    xiha: {
      props: {
        params: {
          type: String,
          default: '1234'
        }
      },
      class: {},
      methods: {},
      functional: true,
      render: (h, context) => {
        return (
          <h1 class='font-color' >render&{context.props.params}&render</h1>
        )
      }
    }
  },
  data() {
    return {
      blockShow: true,
      paramsProps: '4567'
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
  },
  mounted() {
  },
  methods: {
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
  .showAnimation-enter-active{
    -webkit-animation: rotate-hor-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    animation: rotate-hor-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  }
  .showAnimation-leave-active{
    -webkit-animation: slit-out-diagonal-2 0.5s ease-in both;
    animation: slit-out-diagonal-2 0.5s ease-in both;
  }
  @-webkit-keyframes rotate-hor-center {
    0% {
      -webkit-transform: rotateX(0);
              transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-360deg);
              transform: rotateX(-360deg);
    }
  }
  @keyframes rotate-hor-center {
    0% {
      -webkit-transform: rotateX(0);
              transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-360deg);
              transform: rotateX(-360deg);
    }
  }

  @-webkit-keyframes slit-out-diagonal-2 {
    0% {
      -webkit-transform: translateZ(0) rotate3d(-1, 1, 0, 0);
              transform: translateZ(0) rotate3d(-1, 1, 0, 0);
      opacity: 1;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg);
              transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg);
              transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg);
      opacity: 0;
    }
  }
  @keyframes slit-out-diagonal-2 {
    0% {
      -webkit-transform: translateZ(0) rotate3d(-1, 1, 0, 0);
              transform: translateZ(0) rotate3d(-1, 1, 0, 0);
      opacity: 1;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg);
              transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg);
              transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg);
      opacity: 0;
    }
  }
  // .font-color{
  //   color: red;
  // }
</style>
