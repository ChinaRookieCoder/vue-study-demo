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
    },
    {
      path: 'testAnimation',
      name: 'TestAnimation',
      component: () => import('@/views/cssDemo/test-animation'),
      meta: { title: 'vue动画', icon: 'el-icon-apple', noCache: true }
    },
    {
      path: 'testLayout',
      name: 'TestLayout',
      component: () => import('@/views/cssDemo/test-layout'),
      meta: { title: 'el-row', icon: 'el-icon-apple', noCache: true }
    },
    {
      path: 'testCanvas',
      name: 'TestCanvas',
      component: () => import('@/views/cssDemo/test-canvas'),
      meta: { title: 'Canvas', icon: 'el-icon-apple', noCache: true }
    }

  ]
}

export default cssDemoRouter
