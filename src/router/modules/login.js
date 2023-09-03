const loginRouter = {
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
}

export default loginRouter
