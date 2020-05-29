
const routes = [
  {
    path: '/',
    component: () => import('../app/view/layouts/MainLayout'),
    children: [
      {
        path: '',
        component: () => import('../app/view/pages/Index.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('../app/view/layouts/EmptyLayout'),
    children: [
      {
        path: '/task',
        component: () => import('../app/view/pages/Task.vue')
      },
      {
        path: '/tasks',
        component: () => import('../app/view/pages/Tasks.vue')
      },
      {
        path: '/task/:id',
        component: () => import('../app/view/pages/Task.vue'),
        props: true
      },
      {
        path: '/groups',
        component: () => import('../app/view/pages/Groups.vue')
      },
      {
        path: '/group',
        component: () => import('../app/view/pages/Group.vue')
      },
      {
        path: '/group/:id',
        component: () => import('../app/view/pages/Group.vue'),
        props: true
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../app/view/pages/Error404.vue')
  })
}

export default routes
