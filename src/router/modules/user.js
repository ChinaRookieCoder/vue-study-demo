import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  name: 'UserManager',
  meta: { title: '用户中心', icon: 'el-icon-user' },
  children: [
    {
      path: 'userInfoManager',
      name: 'UserInfoManager',
      component: () => import('@/views/userInfoManager'),
      meta: { title: '用户信息管理', icon: 'el-icon-user', noCache: true }
    },
    {
      path: 'squareInputDemo',
      name: 'SquareInputDemo',
      component: () => import('@/views/userInfoManager/squareInput'),
      meta: { title: '测试方块输入框', icon: 'el-icon-grape', noCache: true }
    }
  ]
}
export default userRouter
