import Layout from '@/layout'

const testDemoRouter = {
  path: '/testDemo',
  component: Layout,
  name: 'TestDemo',
  meta: { title: '测试Demo', icon: 'el-icon-user' },
  children: [
    {
      path: 'testError',
      name: 'TestError',
      component: () => import('@/views/testDemo/demo-error'),
      meta: { title: '测试Error', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'testPromise',
      name: 'TestPromise',
      component: () => import('@/views/testDemo/demo-promise'),
      meta: { title: '测试Promise', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'testJitter',
      name: 'TestJitter',
      component: () => import('@/views/testDemo/demo-jitter'),
      meta: { title: '测试窗口防抖函数', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'testComponentParam',
      name: 'TestComponentParam',
      component: () => import('@/views/testDemo/demo-component-param'),
      meta: { title: '父子组件相互传参', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'parentComponent',
      name: 'ParentComponent',
      component: () => import('@/views/testDemo/demo-component-param-plus/parentComponent'),
      meta: { title: '父子组件传参(优化)', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'judgeType',
      name: 'JudgeType',
      component: () => import('@/views/testDemo/demo-judge-type'),
      meta: { title: '判断变量类型', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoVueFilter',
      name: 'DemoVueFilter',
      component: () => import('@/views/testDemo/demo-vue-filter'),
      meta: { title: 'vue过滤器', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoJsCompont',
      name: 'DemoJsCompont',
      component: () => import('@/views/testDemo/demo-js-component'),
      meta: { title: 'js封装vue组件', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoEmptyProp',
      name: 'DemoEmptyProp',
      component: () => import('@/views/testDemo/demo-empty-prop'),
      meta: { title: 'js空属性设置为null', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoPayeeBank',
      name: 'DemoPayeeBank',
      component: () => import('@/views/testDemo/demo-payee-bank'),
      meta: { title: '收款银行Demo', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoLazyLoading',
      name: 'DemoLazyLoading',
      component: () => import('@/views/testDemo/demo-lazy-loading'),
      meta: { title: '图片懒加载', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoCutImg',
      name: 'DemoCutImg',
      component: () => import('@/views/testDemo/demo-cut-img'),
      meta: { title: '图片裁剪', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoDescDetail',
      name: 'DemoDescDetail',
      component: () => import('@/views/testDemo/demo-desc-detail'),
      meta: { title: '文字过长自动提示', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoFetchXhr',
      name: 'DemoFetchXhr',
      component: () => import('@/views/testDemo/demo-fetch-xhr'),
      meta: { title: 'fetch和xhr请求', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoEmoji',
      name: 'DemoEmoji',
      component: () => import('@/views/testDemo/demo-emoji'),
      meta: { title: '表情', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoIframe',
      name: 'DemoIframe',
      component: () => import('@/views/testDemo/demo-iframe'),
      meta: { title: 'iframe', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'demoDirective',
      name: 'DemoDirective',
      component: () => import('@/views/testDemo/demo-directive'),
      meta: { title: '自定义指令', icon: 'el-icon-user', noCache: true }
    }
  ]
}

export default testDemoRouter
