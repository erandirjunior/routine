
const routes = [
  {
    path: '/',
    component: () => import('src/app/view/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/app/view/pages/Example.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('src/app/view/pages/Error404.vue')
  })
}

export default routes
