import Layout from '@/layout'

const es6Router = {
  path: '/es6',
  component: Layout,
  name: 'Es6',
  meta: { title: 'ES6', icon: 'el-icon-orange' },
  children: [
    {
      path: 'chapter01Scope',
      name: 'Chapter01Scope',
      component: () => import('@/views/es6/chapter01-scope'),
      meta: { title: 'es6作用域', icon: 'el-icon-apple', noCache: true }
    },
    {
      path: 'chapter02Destructuring',
      name: 'Chapter02Destructuring',
      component: () => import('@/views/es6/chapter02-destructuring'),
      meta: { title: '变量的解构赋值', icon: 'el-icon-apple', noCache: true }
    },
    {
      path: 'chapter03String',
      name: 'Chapter03String',
      component: () => import('@/views/es6/chapter03-string'),
      meta: { title: '字符串新增方法', icon: 'el-icon-apple', noCache: true }
    },
    {
      path: 'chapter04SetMap',
      name: 'Chapter04SetMap',
      component: () => import('@/views/es6/chapter04-set-map'),
      meta: { title: 'Set和Map数据结构', icon: 'el-icon-apple', noCache: true }
    },
    {
      path: 'chapter05Proxy',
      name: 'Chapter05Proxy',
      component: () => import('@/views/es6/chapter05-proxy'),
      meta: { title: 'Proxy', icon: 'el-icon-apple', noCache: true }
    },
    {
      path: 'chapter06Reflect',
      name: 'Chapter06Reflect',
      component: () => import('@/views/es6/chapter06-reflect'),
      meta: { title: 'Reflect', icon: 'el-icon-apple', noCache: true }
    }
  ]
}

export default es6Router
