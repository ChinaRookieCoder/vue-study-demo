<template>
  <!-- 用户信息管理页面 -->
  <div>
    <!--查询条件-->
    <div class="filter-container">
      <div class="filter-main" :class="[{ 'is-open': isExpanded }]">
        <el-row :gutter="10">
          <el-col :span="8">
            <label>用户姓名</label>
            <el-input v-model="userInfo.userName" size="mini" />
          </el-col>
          <el-col :span="8">
            <label>用户代码</label>
            <el-input v-model="userInfo.userCode" size="mini" />
          </el-col>
          <el-col :span="8">
            <label>用户爱好</label>
            <el-select v-model="userInfo.userHobby" multiple clearable placeholder="" size="mini">
              <el-option v-for="user in hobbyValueSet" :key="Number(user.value)" size="mini" :value="Number(user.value)" :label="user.valueDesc" />
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8">
            <label>创建日期</label>
            <el-date-picker
              v-model="userInfo.createdEndDate"
              size="mini"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd 23:59:59"
              class="picker"
              type="date"
              placeholder="创建日期/止"
            />
            <label class="picker-separator">-</label>
            <el-date-picker
              v-model="userInfo.createdStartDate"
              size="mini"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd 00:00:00"
              class="picker"
              type="date"
              placeholder="创建日期/起"
            />
          </el-col>
          <el-col :span="8"><span>&nbsp;</span></el-col>
        </el-row>
      </div>
      <!--查询条件按钮-->
      <el-row class="filter-operate" :gutter="20">
        <el-col :span="24">
          <span class="expand-button" @click="toggleFilter">
            {{ isExpanded ? '收起' : '展开' }}
            <el-icon :name="isExpanded ? 'arrow-up' : 'arrow-down'" />
          </span>
          <el-button
            type="primary"
            size="small"
            @click="searchByFilter"
          >查询</el-button>
          <el-button type="white" size="small" @click="resetFilterParam">重置</el-button>
        </el-col>
      </el-row>
    </div>

    <!--查询结果-->
    <div class="result-container">
      <div class="title">
        <span class="title-text">查询结果</span>
      </div>
      <el-table
        ref="table"
        border
        :data="userInfoTableData"
        stripe
        fit
        highlight-current-row
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" align="center" width="55" />
        <el-table-column
          align="center"
          label="ID"
          show-overflow-tooltip
          width="180"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="用户代码"
          width="150"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row.userCode }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="用户姓名"
          show-overflow-tooltip
          width="120"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.userName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="用户性别"
          width="100"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row.userSex === 1 ? '男':'女' }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="用户年龄"
          width="100"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row.userAge }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="用户生日"
          width="160"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row.userBirthday | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="left"
          label="用户爱好"
          min-width="200px"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row.userHobbyValue }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="left"
          label="用户余额"
          min-width="200"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row.userBalance }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="创建时间"
          show-overflow-tooltip
          width="160"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.createdDate | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="创建人"
          width="80"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row.createdUser }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="修改时间"
          show-overflow-tooltip
          width="160"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.updatedDate | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="修改人"
          width="80"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row.updatedUser }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" width="180">
          <template slot-scope="{ row }">
            <el-button type="warning" style="width:35px;height:35px" icon="el-icon-tickets" circle @click="executeTrigger(EXECUTE_TYPE.DETAIL,row)" />
            <el-button type="primary" style="width:35px;height:35px" icon="el-icon-edit" circle @click="executeTrigger(EXECUTE_TYPE.MODIFY,row)" />
            <el-button type="danger" style="width:35px;height:35px" icon="el-icon-delete" circle @click="executeTrigger(EXECUTE_TYPE.DELETE,row)" />
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <pagination
          v-show="pageData.totals > 0"
          :total="pageData.totals"
          :offset.sync="pageData.pageNum"
          :limit.sync="pageData.pageSize"
          @pagination="requestPageQueryUserInfo"
        />
      </div>
      <div class="table-operate">
        <el-button type="primary" size="small" @click="dialogTrigger(EXECUTE_TYPE.ADD)">新增</el-button>
        <el-button type="primary" size="small">批量删除</el-button>
        <el-button type="primary" size="small" @click="exportExcel">导出表格</el-button>
      </div>
    </div>
    <!--添加弹窗组件-->
    <insert-dialog ref="insertDialogRef" @requestPageQueryUserInfo="requestPageQueryUserInfo" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import _ from 'lodash'
import InsertDialog from './component/insert-dialog.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'UserInfoManager',
  components: {
    Pagination,
    InsertDialog
  },
  data() {
    return {
      // form过滤条件折叠控制
      isExpanded: false,
      EXECUTE_TYPE: {
        ADD: 'insert',
        MODIFY: 'modify',
        DELETE: 'delete',
        DETAIL: 'detail'
      },
      // 爱好值集
      hobbyValueSet: [],
      userInfo: {
        userName: '', // 用户姓名
        userCode: '', // 用户代码
        createdStartDate: '',
        createdEndDate: '',
        userHobby: [] // 用户爱好
      },
      userInfoTableData: [],
      // 分页数据
      pageData: {
        pageNum: 1,
        pageSize: 10,
        totals: 0
      }
    }
  },
  computed: {
    ...mapState('userInfo/userInfoManager', ['valueSetSearch'])
  },
  watch: {

  },
  created() {
    this.hobbyValueSet = this.valueSetSearch('USER_HOBBY')
  },
  mounted() {
    this.requestPageQueryUserInfo()
  },
  methods: {
    ...mapActions('userInfo/userInfoManager', ['pageQueryUserInfo', 'deleteUserInfo', 'exportUserInfoExcel']),
    toggleFilter() {
      this.isExpanded = !this.isExpanded
    },
    transferFormFilter() {
      const formFilter = {}
      const props = [
        'userName',
        'userCode',
        'createdStartDate',
        'createdEndDate',
        'userHobby' // 用户爱好
      ]
      props.forEach((v) => {
        if (this.userInfo[v]) {
          formFilter[v] = this.userInfo[v]
        }
      })
      return formFilter
    },
    // 重置条件参数
    resetFilterParam() {
      this.userInfo = {
        userName: '', // 用户姓名
        userCode: '', // 用户代码
        createdStartDate: '',
        createdEndDate: '',
        userHobby: [] // 用户爱好
      }
    },
    // 查询按钮
    searchByFilter() {
      this.requestPageQueryUserInfo()
      console.log('查询按钮触发')
    },
    requestPageQueryUserInfo() {
      let filterParam = this.transferFormFilter()
      if (filterParam?.userHobby?.length > 0) {
        if (filterParam.userHobby.length > 1) {
          filterParam.userHobby = filterParam.userHobby.sort((a, b) => { return a - b })
        }
        filterParam.userHobby = filterParam.userHobby.join(',')
      }
      filterParam = Object.assign(filterParam, this.pageData)
      this.pageQueryUserInfo(filterParam).then(res => {
        if (res?.list && res?.list?.length > 0) {
          this.transferTableData(res.list)
        } else {
          this.userInfoTableData = []
        }
        this.pageData.pageNum = res?.pageNum ? Number(res.pageNum) : 1
        this.pageData.pageSize = res.pageSize ? Number(res.pageSize) : 10
        this.pageData.totals = res.totals ? Number(res.totals) : 0
      }).catch(err => {
        this.messageError(err)
      })
    },
    transferTableData(list) {
      const arr = _.cloneDeep(list)
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].userHobby) {
          const finalArr = []
          const splitStr = arr[i].userHobby.split(',')
          splitStr.filter(v => {
            const filterStr = this.hobbyValueSet.filter(p => {
              return p.value === Number(v)
            })
            if (filterStr.length > 0) {
              finalArr.push(filterStr[0].valueDesc)
            }
          })
          if (finalArr.length > 0) {
            arr[i].userHobbyValue = finalArr.join(',')
          }
        }
      }
      this.userInfoTableData = arr
    },
    // 当选择项发生变化时会触发该事件
    handleSelectionChange(selection) {
      console.log('表格', selection)
    },
    // 列表按钮触发
    executeTrigger(executeType, row) {
      switch (executeType) {
        case this.EXECUTE_TYPE.DETAIL:
          this.$refs.insertDialogRef.openDialog(this.EXECUTE_TYPE.DETAIL, row.id)
          break
        case this.EXECUTE_TYPE.MODIFY:
          this.$refs.insertDialogRef.openDialog(this.EXECUTE_TYPE.MODIFY, row.id)
          break
        case this.EXECUTE_TYPE.DELETE:
          this.$confirm('确定要删除此项吗？', '提示', {
            type: 'warning',
            confirmButtonText: '确定',
            cancelButtonText: '取消'
          }).then(() => {
            this.deleteUserInfo({ id: row.id }).then(res => {
              if (res?.code === 1) {
                this.messageSuccess('删除成功')
                this.requestPageQueryUserInfo()
              } else {
                this.messageError(res?.message || '删除失败')
              }
            })
          }).catch(action => {
            this.messageSuccess('取消成功')
          })
          break
      }
    },
    dialogTrigger(executeType) {
      switch (executeType) {
        case this.EXECUTE_TYPE.ADD:
          this.$refs.insertDialogRef.openDialog(this.EXECUTE_TYPE.ADD, null)
          break
      }
    },
    exportExcel() {
      console.log('导出表格')
      this.exportUserInfoExcel().then(res => {
        if (res) {
          // res为bolb类文件对象 Blob(4412) {size: 1718815, type: "application/force-download"}
          const blob = new Blob([res], { type: 'application/vnd.openxmlformats-  officedocument.spreadsheetml.sheet;charset=utf-8' }) // type这里表示xlsx类型
          const downloadElement = document.createElement('a')
          const href = window.URL.createObjectURL(blob) // 创建下载的链接
          downloadElement.href = href
          downloadElement.download = '用户信息表格.xlsx' // 下载后文件名
          document.body.appendChild(downloadElement)
          downloadElement.click() // 点击下载
          document.body.removeChild(downloadElement) // 下载完成移除元素
          window.URL.revokeObjectURL(href) // 释放掉blob对象
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

  <style scoped>
  .select-width .el-select{
    width: 100%;
  }

  .el-date-editor {
    margin-top: 0px !important;
  }
  .pagination-container {
    margin: 0;
    padding: 5px 0px;
    text-align: right;
    float: right;
  }
  </style>
