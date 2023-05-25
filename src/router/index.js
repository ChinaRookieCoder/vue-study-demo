import Vue from 'vue'
import Router from 'vue-router'
import testDemoRouter from '@/router/modules/testDemo'
import cssDemoRouter from '@/router/modules/cssDemo'
import nestedRouter from '@/router/modules/nested'
import redirectRouter from '@/router/modules/redirect'
import dashboardRouter from '@/router/modules/dashboard'
import userRouter from '@/router/modules/user'
import loginRouter from '@/router/modules/login'
Vue.use(Router)

export const constantRoutes = [
  { ...loginRouter },
  { ...dashboardRouter },
  { ...userRouter },
  { ...redirectRouter },
  { ...testDemoRouter },
  { ...cssDemoRouter },
  { ...nestedRouter },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
