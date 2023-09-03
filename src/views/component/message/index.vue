<!---->
<template>
  <div>
    <el-dialog
      :title="messageTitle"
      :visible.sync="localMessageVisible"
      :width="messageWidth+'px'"
    >
      <h1>6666</h1>
      <div class="footer-wrapper">
        <div><el-button type="info" @click="handleCancel">取消</el-button></div>
        <div><el-button type="primary" @click="handleConfirm">确定</el-button></div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'MyMessage',
  components: {
  },
  props: {
    messageTitle: {
      type: String,
      default: '提示信息'
    },
    messageVisible: {
      type: Boolean,
      default: false
    },
    messageWidth: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      // localMessageVisible: this.messageVisible
      objData: {
        prop: '',
        arr: []
      }
    }
  },
  computed: {
    localMessageVisible: {
      get() {
        return this.messageVisible
      },
      set(val) {
        this.$emit('update:messageVisible', val)
      }
    }
  },
  watch: {

  },
  created() {
    console.log('数组操作==================')

    console.log('1. 数组合并')
    const arr1 = [1, 2, 3, 4]
    const arr2 = [5, 6, 7, 8]
    const arr3 = [9, 10, 11]
    const mergeArr = arr1.concat(arr2, arr3)
    console.log('数组合并结果:' + mergeArr, Array.isArray(mergeArr))

    console.log('2. 数组迭代对象')
    const fruits = [{ name: '香蕉' }, { name: '苹果' }, { name: '梨' }]
    const iteratorFruits = fruits.entries()
    console.log(iteratorFruits.next().value)
    console.log(iteratorFruits.next().value)
    console.log(iteratorFruits.next().value)

    console.log('3. 数组每个元素检测返回Boolean')
    const arr4 = ['a1', 'a2', 'a3']
    const checkArr4 = arr4.every((v) => { return v.startsWith('a') })
    console.log(checkArr4)

    console.log('4. 条件查找数组中符合条件的第一个元素')
    const arr5 = [1, 18, 20]
    const passElement = arr5.find((v) => { return v >= 18 })
    console.log(passElement)

    console.log('5. 条件删除数组中的元素')
    const objArr1 = [{ name: '王建' }, { name: '嘻哈' }, { name: '小李' }, { name: '王建啊' }]
    const removeIndex = objArr1.findIndex((v) => { return v.name === '王建' })
    if (removeIndex !== -1) {
      objArr1.splice(removeIndex, 1)
    }
    console.log(objArr1)

    console.log('6. 对象和数组')
    const objDataTemp = {
      prop: 'haha',
      arr: [1, 2],
      name: '哈哈',
      childrenObj: {
        name: '子'
      }
    }
    // this.objData = _.cloneDeep(objDataTemp)
    this.objData = Object.assign({}, objDataTemp)
    this.objData.name = '哈哈'
    console.log('对象是否有getter、setter', this.objData)
  },
  mounted() {
  },
  methods: {
    handleCancel() {
      this.localMessageVisible = false
      this.$emit('handleCancel')
    },
    handleConfirm() {
      this.localMessageVisible = false
      this.$emit('handleConfirm')
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
  .footer-wrapper{
    display: flex;
    justify-content: center;
  }
  .footer-wrapper{
     div:nth-child(2){
      margin-left: 15%;
     }
  }
</style>
