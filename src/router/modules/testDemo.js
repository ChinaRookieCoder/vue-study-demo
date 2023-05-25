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
      path: 'judgeType',
      name: 'JudgeType',
      component: () => import('@/views/testDemo/demo-judge-type'),
      meta: { title: '判断变量类型', icon: 'el-icon-user', noCache: true }
    }
  ]
}

export default testDemoRouter
