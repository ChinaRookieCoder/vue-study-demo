import Layout from '@/layout'

const redirectRouter = {
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [
    {
      path: '/redirect/:path(.*)',
      component: () => import('@/views/redirect/index')
    }
  ]
}

export default redirectRouter
