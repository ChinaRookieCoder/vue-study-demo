<!--新增、修改弹窗-->
<template>
  <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogVisible"
    width="1200px"
    :close="closeDialog"
    :before-close="closeDialog"
    :close-on-click-modal="false"
  >
    <!--Form表单-->
    <div class="cmmon-form">
      <el-form ref="formRef" :model="userInfoForm" :rules="userInfoFormRule" label-width="80px" :inline="true">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="用户姓名" prop="userName">
              <el-input v-model="userInfoForm.userName" placeholder="用户姓名" size="mini" :disabled="btnControl" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户性别" prop="userSex">
              <el-select v-model="userInfoForm.userSex" :disabled="btnControl" placeholder="用户性别" clearable size="mini">
                <el-option label="" value="" />
                <el-option v-for="sex in valueSetSearch('USER_SEX')" :key="Number(sex.value)" :label="sex.valueDesc" :value="Number(sex.value)" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户年龄" prop="userAge">
              <el-input v-model="userInfoForm.userAge" :disabled="btnControl" placeholder="用户年龄" size="mini" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="用户生日" prop="userBirthday">
              <el-date-picker
                v-model="userInfoForm.userBirthday"
                size="mini"
                :disabled="btnControl"
                type="datetime"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择日期时间"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户爱好" prop="userHobby">
              <el-select v-model="userInfoForm.userHobby" :disabled="btnControl" placeholder="用户爱好" size="mini" multiple clearable>
                <el-option v-for="hobby in valueSetSearch('USER_HOBBY')" :key="Number(hobby.value)" :label="hobby.valueDesc" :value="Number(hobby.value)" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户余额" prop="userBalance">
              <el-input v-model="userInfoForm.userBalance" :disabled="btnControl" placeholder="用户余额" size="mini" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <span v-if="!btnControl" slot="footer" class="dialog-footer btn-style">
      <el-button size="small" @click="closeDialog">取 消</el-button>
      <p style="width:20%" />
      <el-button size="small" type="primary" @click="userInfoFormSubmit">提 交</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import _ from 'lodash'
import { parseTime } from '@/utils'
export default {
  name: 'InsertDialog',
  components: {

  },
  data() {
    return {
      dialogVisible: false,
      dialogTitle: '',
      btnControl: false,
      userInfoForm: {
        userName: '',
        userSex: '',
        userAge: '',
        userBirthday: '',
        userHobby: [],
        userBalance: ''
      }
    }
  },
  computed: {
    ...mapState('userInfo/userInfoManager', ['valueSetSearch', 'userInfoFormRule'])
  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    ...mapActions('userInfo/userInfoManager', ['insertUserInfo', 'getUserInfo', 'modifyUserInfo']),
    openDialog(executeType, id) {
      if (executeType === 'insert') {
        this.dialogTitle = '新增'
        this.btnControl = false
      } else if (executeType === 'modify') {
        this.btnControl = false
        this.dialogTitle = '修改'
        this.requestGetUserInfo(id)
      } else if (executeType === 'detail') {
        this.dialogTitle = '详情'
        this.btnControl = true
        this.requestGetUserInfo(id)
      }
      this.dialogVisible = true
    },
    closeDialog() {
      this.clearDialog()
      this.dialogVisible = false
    },
    clearDialog() {
      this.userInfoForm = {
        userName: '',
        userSex: '',
        userAge: '',
        userBirthday: '',
        userHobby: [],
        userBalance: ''
      }
      this.$nextTick(() => {
        // 手动触发取消校验
        this.$refs.formRef.clearValidate()
      })
    },
    requestGetUserInfo(id) {
      this.getUserInfo({ id: id }).then(res => {
        if (res.code === 1) {
          const result = _.cloneDeep(res.data)
          if (result.userBirthday) {
            result.userBirthday = parseTime(result.userBirthday, `{y}-{m}-{d} {h}:{i}:{s}`)
          }
          if (result.userHobby) {
            result.userHobby = result.userHobby.split(',')
            const arr = []
            result.userHobby.filter(v => {
              v = Number(v)
              arr.push(v)
              return v
            })
            result.userHobby = arr
          } else {
            result.userHobby = []
          }
          this.userInfoForm = result
        } else {
          this.messageError(res.message)
        }
      })
    },
    userInfoFormSubmit() {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          const param = _.cloneDeep(this.userInfoForm)
          if (param?.userHobby?.length > 0) {
            if (param.userHobby.length > 1) {
              param.userHobby = param.userHobby.sort((a, b) => { return a - b })
            }
            param.userHobby = param.userHobby.join(',')
          } else {
            param.userHobby = ''
          }
          if (this.dialogTitle === '修改') {
            this.modifyUserInfo(param).then(res => {
              if (res.code === 1) {
                this.closeDialog()
                this.messageSuccess('修改成功')
                this.$emit('requestPageQueryUserInfo')
              } else {
                this.messageError(res?.message || '修改失败')
              }
            })
          } else if (this.dialogTitle === '新增') {
            this.insertUserInfo(param).then(res => {
              if (res?.code === 1) {
                this.closeDialog()
                this.messageSuccess('添加成功')
                this.$emit('requestPageQueryUserInfo')
              } else {
                this.messageError(res?.message || '添加失败')
              }
            })
          }
        }
      })
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
.btn-style{
  display: flex;
  justify-content: center;
}
.cmmon-form{
  margin-top: 20px;
}

.el-date-editor{
  width: 100%!important;
}
::v-deep .el-form-item__content{
   width: calc(100% - 80px);
}
</style>
