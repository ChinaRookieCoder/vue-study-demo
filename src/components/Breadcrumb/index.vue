<template>
  <el-breadcrumb class="app-breadcrumb" separator="">
    <el-badge :value="messageCount" :max="99" class="item" :hidden="messageCount===0">
      <!-- <el-button style="" size="mini" class="message" @click="drawer=true">消息</el-button> -->
    </el-badge>
    <!--消息列表-->
    <!-- <el-drawer
      :title="`${messageCount}条最新消息`"
      :visible.sync="drawer"
      :direction="'rtl'"
      :before-close="handleClose"
      :modal="true"
      width="200px"
    >
      <el-tag v-for="(message,index) in messageList" :key="index" type="danger" effect="plain">{{ message.message }}</el-tag>
      <el-tag v-show="messageCount!==0" effect="dark" style="text-align:center;cursor: pointer;" @click="clearMessgae">点我清空消息</el-tag>
    </el-drawer> -->
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      levelList: null,
      websocket: null,
      timer: null,
      messageCount: 0,
      // 消息抽屉
      drawer: false,
      messageList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
    // this.initWebsocket()
  },
  // 页面销毁时，关闭webSocket连接
  destroyed() {
    this.websocketClose()
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (!this.isDashboard(first)) {
        matched = [{ path: '/dashboard', meta: { title: '主页' }}].concat(matched)
      }

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    },
    // 初始化websocket
    initWebsocket() {
      if (this.websocket) {
        this.$message.warning('websocket已经连接成功')
        return
      }
      if (typeof WebSocket === 'undefined') {
        this.$message.error('您的浏览器不支持WebSocket')
        return
      } else {
        const protocol = 'ws'
        let socketurl = ''
        // if (window.localtion.protocol == "https:") {
        //   protocol = "wss";
        // }
        socketurl = `${protocol}://localhost:8088/sol-gateway/webSocket/admin`

        // 打开一个websocket
        this.websocket = new WebSocket(socketurl)
        // 连接socket
        this.websocket.onopen = this.websocketOnOpen
        // 接收后端返回数据
        this.websocket.onmessage = this.websocketOnMessage
        // 连接建立失败重连
        this.websocket.onerror = this.websocketOnError
        // 连接关闭
        this.websocket.onclose = this.websocketClose
      }
    },
    // 连接socket
    websocketOnOpen() {
      // 添加心跳检测，每15秒发一次数据，防止连接断开（这跟服务器的设置有关，如果服务器没有设置每隔多长时间不发消息断开，可以不进行心跳设置）
      const self = this
      self.timer = window.setInterval(() => {
        try {
          self.websocket.send(JSON.stringify({ code: 888, message: '==30秒心跳检测==' }))
        } catch (err) {
          console.log('断开了,正在尝试重新连接WebSocket：' + err)
          self.initWebsocket()
        }
      }, 60000)
    },
    // 接收后端返回的数据，可以根据需要进行处理
    websocketOnMessage(e) {
      const result = JSON.parse(e.data)
      const code = result?.code ? result.code.toString() : ''
      if (code === '666') {
        this.$notify({
          title: 'websocket连接成功😁',
          type: 'success',
          duration: 3000,
          position: 'bottom-left',
          iconClass: 'el-icon-s-opportunity'
        })
        this.messageCount = result?.messageCount ? result.messageCount : 0
        this.messageList = result?.messageList ? result.messageList : []
        console.log('list', this.messageList)
      } else if (code === '888') {
        console.log('==心跳检测==', result)
        this.$notify({
          title: 'websocket心跳监测😁',
          position: 'bottom-left',
          duration: 1000,
          iconClass: 'el-icon-s-opportunity'
        })
      } else if (code === '1') {
        this.messageCount = result?.messageCount ? result.messageCount : 0
        this.messageList = result?.messageList ? result.messageList : []
        this.$notify({
          title: '服务通知',
          duration: 2000,
          message: result.message,
          type: 'success'
        })
      }
    },
    // socket断开回调
    websocketOnError() {
      // console.log("连接异常,正在重新连接socket...");
      // this.initWebsocket();
    },
    // 关闭socket连接
    websocketClose() {
      if (this.websocket) {
        this.websocket.close()
        this.websocket = null
        this.$message.success('关闭websocket成功')
      }
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    // 向websocket发送信息
    sendClientMessage(message) {
      if (!this.websocket) {
        this.$message.warning('请先连接websockit')
        return
      }
      this.websocket.send(message)
    },
    // 抽屉关闭事件
    handleClose() {
      console.log('抽屉关闭')
      this.drawer = false
    },
    // 清空消息事件
    clearMessgae() {
      this.websocket.send(JSON.stringify({ code: 777, message: 'clearMessage', sid: 'admin' }))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}

::v-deep .is-fixed{
    top:16px!important;
  }

.el-tag{
  width: 270px;
  display: block;
  margin: 5px auto;
}
::v-deep .el-drawer{
  width: 300px!important;
}
::v-deep .el-drawer__header{
  margin-bottom: 0px!important;
  padding: 10px 8px 0px 17px;
}

::v-deep .el-drawer__body{
overflow-y: auto;
}

::v-deep .el-drawer__body::-webkit-scrollbar {
  width: 8px;
  height: 10px;
  border-radius: 0px;
  background-color: #fff;
}

::v-deep .el-drawer__body::-webkit-scrollbar-thumb {
  width: 8px;
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 1px #a0aabd;
  box-shadow: inset 0 0 1px #a0aabd;
  background-color: #C2C2C2;
  cursor: pointer
}

::v-deep .el-drawer__body::-webkit-scrollbar-thumb:hover {
  background-color: rgba(128, 135, 139, .8)
}
</style>
