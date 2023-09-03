<!--测试防抖函数-->
<template>
  <el-form :model="form" :rules="formRule">
    <el-form-item label="debounce" prop="value">
      <el-input v-model="form.value" placeholder="测试debounce" @input="loashDebounce" />
    </el-form-item>
  </el-form>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'TestJitter',
  components: {
  },
  data() {
    // 手写防抖函数 =====start======
    let timer; let args; let startTimeStamp = 0
    const myDebounce = (fn, wait) => {
      let context

      const run = (timerInterval) => {
        timer = setTimeout(() => {
          const now = (new Date()).getTime()
          const interval = now - startTimeStamp
          if (interval < timerInterval) {
            startTimeStamp = now
            run(wait - interval)
          } else {
            fn.apply(context, args)
            clearTimeout(timer)
            timer = null
          }
        }, timerInterval)
      }
      return function() {
        context = this
        args = arguments
        const now = (new Date()).getTime()
        startTimeStamp = now
        if (!timer) {
          run(wait)
        }
      }
    }
    // 手写防抖函数 =====End======
    const validateValue = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('不能为空'))
      } else {
        return callback()
      }

      // 手写防抖函数例子
      //  myDebounce(async(value) => {
      //        await checkMobile({mobile:value}).then((res)=>{
      //          const {code ,message} = res;
      //           if(code == 1){//可以使用
      //             return callback()
      //           }else{
      //             return callback(new Error(message));
      //           }
      //        }).catch(err => callback(new Error(err)))
      //      }, 100)(value)
    }
    return {
      form: {
        value: ''
      },
      formRule: {
        value: [
          { validator: _.debounce(validateValue, 2000), trigger: 'change' }
        ]
      }
    }
  },
  computed: {

  },
  watch: {
  },
  created() {
    // 2秒触发执行一次
    this.loashDebounce = _.debounce(this.loashDebounce, 2000)
  },
  mounted() {
  },
  methods: {
    loashDebounce(value) {
      console.log('值', value)
    },
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

  </style>
