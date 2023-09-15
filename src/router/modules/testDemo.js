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
    }
  ]
}

export default testDemoRouter
