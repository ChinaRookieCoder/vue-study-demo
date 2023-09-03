<!---->
<template>
  <div class="base-wrapper">
    <el-form ref="payeeBankFormRef" :model="payeeBankForm" :size="'mini'" :rules="payeeBankFormRule" :inline="true" label-width="120px">
      <el-form-item label="收款联行号：" prop="bankUnionNumber">
        <el-input v-model="payeeBankForm.bankUnionNumber" placeholder="" @change="handlBankUnionNumberChange" />
      </el-form-item>
      <el-form-item label="收款银行全称：" prop="bankOpenName">
        <el-select
          v-model="payeeBankForm.bankOpenName"
          filterable
          clearable
          @change="handleBankOpenNameChange"
        >
          <el-option v-for="bank in selectBankOpenNameArr" :key="bank.bankLineNo" :label="bank.bankLineNoName" :value="bank.bankLineNo" />
        </el-select>
      </el-form-item>
      <el-form-item label="收款银行名称：" prop="bankCatgCode">
        <el-select
          v-model="payeeBankForm.bankCatgCode"
          filterable
          clearable
          @change="handleBankCatgCodeChage"
        >
          <el-option v-for="bank in selectCatgArr" :key="bank.codeValue" :label="bank.codeValueName" :value="bank.codeValue" />
        </el-select>
      </el-form-item>
      <el-form-item label="收款银行账号：" prop="bankAccountNum">
        <el-input v-model="payeeBankForm.bankAccountNum" placeholder="" />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submitPayeeBankForm">提交</el-button>
  </div>
</template>
<script>
import _ from 'lodash'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'TestPayeeBank',
  components: {
  },
  data() {
    const validateBankUnionNumber = (rule, value, callback) => {
      if (!value) {
        this.payeeBankLock.tag = false
        return callback(new Error('请输入收款联行号'))
      }
      const reg = /^\d{12}$/
      if (!reg.test(value)) {
        this.payeeBankLock.tag = false
        return callback(new Error('联行号由12位阿拉伯数字组成！'))
      }
      if (this.payeeBankLock.tag) {
        return callback()
      }
      _.debounce(async(value) => {
        const filterArr = await this.filterSelectBankOpenNameArr({ bankLineNo: value })
        if (filterArr.length === 0) {
          this.payeeBankLock.tag = false
          return callback(new Error('找不到对应的银行信息！'))
        } else {
          this.payeeBankLock.freezeData = filterArr[0]
          this.payeeBankLock.tag = true
        }
        return callback()
      }, 700)(value)
    }
    return {
      payeeBankForm: {
        bankUnionNumber: '',
        bankOpenName: '',
        bankCatgCode: '',
        bankAccountNum: ''
      },
      selectCatgArr: [],
      selectBankOpenNameArr: [],
      payeeBankFormRule: {
        'bankUnionNumber': [
          { required: true, validator: validateBankUnionNumber, trigger: 'change' }
        ]
      },
      payeeBankLock: {
        tag: false,
        freezeData: null
      }
    }
  },
  computed: {
    ...mapState('demo/demoPayeeBank', ['payeeBankValueSet'])
  },
  watch: {
    'payeeBankLock.tag': {
      handler(nval, oval) {
        if (nval && nval !== oval) {
          this.selectBankOpenNameArr = [this.payeeBankLock.freezeData]
          this.selectCatgArr = this.payeeBankValueSet.filter(v => { return this.payeeBankLock.freezeData.reserved1 === v.codeValue })
          this.mergePayeeBankInfo(this.selectBankOpenNameArr)
        } else {
          this.requestGetPayeeBankDataList()
          this.selectCatgArr = _.cloneDeep(this.payeeBankValueSet)
          this.payeeBankForm.bankOpenName = ''
          this.payeeBankForm.bankCatgCode = ''
        }
      },
      immediate: true
    }
  },
  created() {
    this.selectCatgArr = _.cloneDeep(this.payeeBankValueSet)
    this.requestGetPayeeBankDataList()
  },
  mounted() {
  },
  methods: {
    ...mapActions('demo/demoPayeeBank', ['getPayeeBankDataList']),
    handlBankUnionNumberChange() {
      this.payeeBankLock.tag = false
      this.payeeBankLock.freezeData = null
    },
    async handleBankCatgCodeChage(bankCatgCode) {
      if (this.payeeBankLock.tag) {
        return
      }
      if (!bankCatgCode) {
        await this.requestGetPayeeBankDataList()
        return
      }
      const bankArr = await this.filterSelectBankOpenNameArr({ reserved1: bankCatgCode })
      this.selectBankOpenNameArr = bankArr
    },
    async handleBankOpenNameChange(val) {
      if (this.payeeBankLock.tag) {
        return
      }
      const filterArr = await this.filterSelectBankOpenNameArr({ bankLineNo: val })
      // this.handleBankOpenNameChange(filterArr)
      if (filterArr.length > 0) {
        this.payeeBankLock.freezeData = filterArr[0]
        this.payeeBankLock.tag = true
      }
    },
    submitPayeeBankForm() {
      console.log('提交', this.payeeBankForm)
    },
    async requestGetPayeeBankDataList() {
      await this.getPayeeBankDataList().then(res => {
        if (res != null) {
          res.filter(v => {
            if (v?.bankLineNoName) {
              const companyNameIndex = v.bankLineNoName.indexOf('公司') !== -1 ? v.bankLineNoName.indexOf('公司') + 2 : -1
              const bankNameIndex = v.bankLineNoName.indexOf('银行') !== -1 ? v.bankLineNoName.indexOf('银行') + 2 : -1
              const subStr = v.bankLineNoName.substring(companyNameIndex > bankNameIndex ? companyNameIndex : bankNameIndex, v.bankLineNoName.length)
              v.bankLineShortName = subStr
            }
          })
          this.selectBankOpenNameArr = _.cloneDeep(res)
          console.log(this.selectBankOpenNameArr)
        }
      })
    },
    async filterSelectBankOpenNameArr(params) {
      await this.requestGetPayeeBankDataList()
      let arr = []
      if (params?.reserved1) {
        arr = this.selectBankOpenNameArr.filter(v => { return params.reserved1 === v.reserved1 })
      }
      if (params?.bankLineNo) {
        if (arr.length > 0) {
          arr = arr.filter(v => { return params?.bankLineNo === v?.bankLineNo })
        } else {
          arr = this.selectBankOpenNameArr.filter(v => { return params?.bankLineNo === v?.bankLineNo })
        }
      }
      return arr
    },
    mergePayeeBankInfo(paramsArr) {
      if (paramsArr?.length === 1) {
        this.payeeBankForm.bankUnionNumber = paramsArr[0]?.bankLineNo ? paramsArr[0].bankLineNo : ''
        this.payeeBankForm.bankOpenName = paramsArr[0]?.bankLineNoName ? paramsArr[0].bankLineNoName : ''
        this.payeeBankForm.bankCatgCode = paramsArr[0]?.reserved1 ? paramsArr[0].reserved1 : ''
        this.$refs.payeeBankFormRef.validateField('bankUnionNumber')
      }
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
  .base-wrapper{
    margin: 20px;
  }
  ::v-deep .el-input__inner{
    width: 250px;
  }
</style>
