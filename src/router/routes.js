
const routes = [
  {
    path: '/',
    component: () => import('../app/view/layouts/MainLayout'),
    children: [
      { path: '', component: () => import('../app/view/pages/Index.vue') },
      { path: '/tasks', component: () => import('../app/view/pages/Task.vue') },
      { path: '/groups', component: () => import('../app/view/pages/Group.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
