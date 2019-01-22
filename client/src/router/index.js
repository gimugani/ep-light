import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component:() => import('../views/Login.vue'),
    },
    {
      path: '/start',
      name: 'survey',
      component:() => import('../views/Survey.vue'),
    },

    {
      path: '/thankyou',
      name: 'thankyou',
      component:() => import('../views/Thankyou.vue'),
    },
    {
      path:'/responses',
      name: 'responses',
      component:() => import('../views/Responses.vue'),
    },
  ]
})
