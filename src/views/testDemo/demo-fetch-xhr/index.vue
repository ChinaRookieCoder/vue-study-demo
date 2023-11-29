<!--page-->
<template>
  <div>
    <div class="area-warpper">
      <el-button style="display: block;" type="primary" @click="sendXhrGetRequest()">发送xhr请求[GET]</el-button>
      <el-button style="display: block;" type="primary" @click="sendXhrPostRequest()">发送xhr请求[POST]</el-button>
      <el-button style="display: block;" type="primary" @click="sendFetchGetRequest()">发送fetch请求[GET]</el-button>
      <el-button style="display: block;" type="primary" @click="sendFetchPostRequest()">发送fetch请求[POST]</el-button>
    </div>
    <div class="content-wapper">
      {{ responseData }}
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'DemoFetchXhr',
  components: {},
  props: {},
  data() {
    return {
      responseData: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    sendXhrGetRequest() {
      var xhr = new XMLHttpRequest()
      var url = 'http://127.0.0.1:8080/club/test/sayHelloGet'
      const param = { name: '赵伟杰GET', age: 18 }
      let spliceStr = ''
      if (param) {
        Object.keys(param).filter(v => { spliceStr += `&${v}=${param[v]}` })
        spliceStr = `?${spliceStr.substring(1, spliceStr.length)}`
      }
      xhr.open('GET', url + spliceStr)
      xhr.responseType = 'json'
      xhr.setRequestHeader('token', '2323232')
      xhr.send()
      xhr.onload = () => {
        if (xhr.status === 200) {
          this.responseData = xhr.response
        } else {
          this.$message.error(`请求异常,状态码:${xhr.status}`)
        }
      }
      xhr.onerror = () => {
        console.log('请求失败', xhr)
      }
    },
    sendXhrPostRequest() {
      var xhr = new XMLHttpRequest()
      var url = 'http://127.0.0.1:8080/club/test/sayHelloPost'
      const param = { name: '赵伟杰POST', age: 18 }
      xhr.open('POST', url)
      xhr.responseType = 'json'
      xhr.setRequestHeader('token', '2323232')
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xhr.send(JSON.stringify(param))
      xhr.onload = () => {
        if (xhr.status === 200) {
          this.responseData = xhr.response
        } else {
          this.$message.error(`请求异常,状态码:${xhr.status}`)
        }
      }
      xhr.onerror = () => {
        console.log('请求失败', xhr)
      }
    },
    async sendFetchGetRequest() {
      try {
        const param = { name: '赵伟杰GET', age: 18 }
        let spliceStr = ''
        if (param) {
          Object.keys(param).filter(v => { spliceStr += `&${v}=${param[v]}` })
          spliceStr = `?${spliceStr.substring(1, spliceStr.length)}`
        }
        const response = await fetch(`http://127.0.0.1:8080/club/test/sayHelloGet${spliceStr}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              'token': '2323232'
            }
          })
        if (response.status === 200) {
          const responseData = await response.json()
          this.responseData = responseData
        } else {
          this.$message.error(`请求异常,状态码:${response.status}`)
        }
      } catch (err) {
        this.$message.error(err)
      }
    },
    async sendFetchPostRequest() {
      try {
        const param = { name: '赵伟杰POST', age: 18 }
        const response = await fetch(`http://127.0.0.1:8080/club/test/sayHelloPost`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              'token': '2323232'
            },
            body: JSON.stringify(param)
          })
        if (response.status === 200) {
          const responseData = await response.json()
          this.responseData = responseData
        } else {
          this.$message.error(`请求异常,状态码:${response.status}`)
        }
      } catch (err) {
        this.$message.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.area-warpper{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.content-wapper{
  min-height: 300px;
  border: 1px solid black;
  margin: 10px 10px;
}
</style>
