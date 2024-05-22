import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../views/loginPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: loginPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue') // 当图片比较多时，懒加载是一种优化方式
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: () => import('@/views/mainPage.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path !== '/about' && to.path !== '/' && to.path !== undefined ) {
    // router.addRoute({
    //   path: to.path,
    //   name: to.path.replace('/', ''),
    //   meta: {},
    //   component: () =>import('views/mainPage.vue')
    // })
    next('/mainPage') // 
  } else {
    next()
  }
})

export default router
