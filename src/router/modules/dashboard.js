
import Layout from '@/layout'

const dashboardRouter = {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index'),
    meta: { title: '主页', icon: 'rabbit', affix: true }
  }]
}

export default dashboardRouter
