<!--page-->
<template>
  <div style="height: calc(100vh - 89px);padding: 20px;">
    <div class="base-wrapper">
      <div class="content-wrapper">内容区域</div>
      <div class="tool-wrapper">
        <el-button type="primary" size="mini" @click="handleInputEmoji">表情</el-button>
        <span>{{ inputContent.length }}字</span>
      </div>
      <div class="input-wrapper">
        <contenteditable
          id="input-content"
          ref="inputContent"
          v-model="inputContent"
          class="input-content"
          tag="p"
          :contenteditable="isEditable"
          :no-n-l="true"
          :no-h-t-m-l="false"
          @returned="enterPressed"
        />
      </div>
    </div>
  </div>
</template>
<script>
import contenteditable from 'vue-contenteditable/src/contenteditable.vue'
export default {
  name: 'DemoEmoji',
  components: {
    contenteditable
  },
  props: {},
  data() {
    return {
      inputContent: '',
      isEditable: true
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    enterPressed(val) {
      console.log('val', JSON.stringify(this.inputContent))
    },
    handleInputEmoji() {
      // 插入html到光标处
      this.pasteHtmlAtCaret('&#x1F600;')
      // 同步内容
      this.inputContent = document.getElementById('input-content').innerHTML
    },
    /**
     *  插入html到光标处，插入后，光标自动设置到插入后的位置
     * */
    pasteHtmlAtCaret(html) {
      let sel, range
      if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection()
        if (sel?.focusNode?._prevClass === 'input-content' || sel?.focusNode?.parentNode?._prevClass === 'input-content') {
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0)
            range.deleteContents()

            // Range.createContextualFragment() would be useful here but is
            // only relatively recently standardized and is not supported in
            // some browsers (IE9, for one)
            var el = document.createElement('span')
            el.innerHTML = html
            const frag = document.createDocumentFragment()
            let node
            let lastNode
            while ((node = el.firstChild)) {
              lastNode = frag.appendChild(node)
            }
            range.insertNode(frag)
            // Preserve the selection
            if (lastNode) {
              range = range.cloneRange()
              range.setStartAfter(lastNode)
              range.collapse(true)
              sel.removeAllRanges()
              sel.addRange(range)
            }
          }
        }
      } else if (document.selection && document.selection.type !== 'Control') {
        // IE < 9
        document.selection.createRange().pasteHTML(html)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-wrapper{
  height: 100%;
  display: flex;
  flex-direction: column;
  border:2px solid #000;
}
.content-wrapper{
  height: 60%
}
.tool-wrapper{
  border-top: 2px solid #000;
  flex-shrink:0;
  flex-basis: 30px;
  line-height: 30px;
}
.input-wrapper{
  border-top: 2px solid #000;
  height: 35%;
  overflow: scroll;
  overflow-y: scroll;
  overflow-x: hidden;
  .input-content{
    padding: 2px;
    color: black;
    height: 100%;
    margin: 0;
    width: 100%;
  }
}
</style>
