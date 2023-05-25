import Layout from '@/layout'

const cssDemoRouter = {
  path: '/cssDemo',
  component: Layout,
  name: 'CssDemo',
  meta: { title: 'CSS-Demo', icon: 'el-icon-orange' },
  children: [
    {
      path: 'testFlex',
      name: 'TestFlex',
      component: () => import('@/views/cssDemo/test-flex'),
      meta: { title: '练习flex(弹性)布局', icon: 'el-icon-apple', noCache: true }
    }
  ]
}

export default cssDemoRouter
