<!---->
<template>
  <div>
    <span style="line-height:30px;">转大写:{{ inputData.upperInput | uppercase }}</span>
    <el-input v-model="inputData.upperInput" placeholder="请输入字母" />

    <span style="line-height:30px;">转小写:{{ inputData.lowerInput | lowercase }}</span>
    <el-input v-model="inputData.lowerInput" placeholder="请输入字母" />

    <span style="line-height:30px;">转金额:{{ inputData.currencyInput | currency('$',2) }}</span>
    <el-input v-model="inputData.currencyInput" placeholder="请输入字母" />

    <template v-if="templateShow">
      <div>
        <h1>我是template</h1>
      </div>
    </template>
    <el-divider />
    <template v-for="(item,index) in tempArr">
      <p :key="index">{{ item }}</p>
    </template>
    <el-button type="primary" @click="handleDomClick($event)">获取原生dom</el-button>
    <el-divider />
    <span v-once>只渲染{{ onceNumber }}次</span>
    <el-button type="primary" @click="handleOnceClick">加一</el-button>
    <el-divider />

  </div>
</template>
<script>
import _ from 'lodash'
import { toThousandAndDotFilter } from '@/filters/index'
export default {
  name: 'DemoVueFilter',
  components: {
  },
  // 不影响model值
  filters: {
    uppercase(val) {
      if (_.isString(val)) {
        val = val.toUpperCase()
      }
      return val
    },
    lowercase(val) {
      if (_.isString(val)) {
        val = val.toLowerCase()
      }
      return val
    },
    currency(amount, type, bit) {
      const numreg = /^([0-9]{1}|^[1-9]{1}\d{1,12})(\.\d{1,4})?$/
      if (amount && numreg.test(amount)) {
        return toThousandAndDotFilter(amount, true, bit, false)
      }
      return 0
    }
  },
  data() {
    return {
      inputData: {
        upperInput: '', // 转大写
        lowerInput: '', // 转小写
        currencyInput: '' // 转金额
      },
      templateShow: false,
      tempArr: ['a', 'b'],
      onceNumber: 1
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
    /**
      * @description 格式化金额
      * @param {String | Number} amount - 金额
      * @param {Number} decimalDigits - 保留的小数位数
      * @return {String}
    */
    formatAmount(amount, decimalDigits = 0) {
      const amountStr = String(Number(amount).toFixed(decimalDigits))
      const reg = /\B(?=(?:\d{3})+$)/g
      // 是否是小数
      const isDecimal = amountStr.indexOf('.') > -1
      if (isDecimal) {
        // 整数部分
        const integerPart = amountStr.substring(0, amountStr.indexOf('.'))
        // 小数部分
        const decimalPart = amountStr.substring(amountStr.length, amountStr.indexOf('.'))
        return `${integerPart.replace(reg, ',')}${decimalPart}`
      } else {
        return amountStr.replace(reg, ',')
      }
    },
    handleDomClick(event) {
      console.log(event)
    },
    handleOnceClick() {
      console.log(this.onceNumber)
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
