import Vue from 'vue'
import ZhouTai from '@/layout/ZhouTai'
import HomePage from '@/layout/HomePage'
import LouPan from '@/layout/LouPan'
import CheckPrice from '@/layout/CheckPrice'
import AnaLyst from '@/layout/AnaLyst'
import AboutAs from '@/layout/AboutAs'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      exact: true,
      name: 'ZhouTai',
      component: ZhouTai
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage ,
      redirect: '/HomePage/HomeContent',
      children: [
        {
          path: 'HomeContent',
          name: 'HomeContent',
          component: () => import('@/components/web/HomePage/HomeContent')
        },
        {
          path: 'HomeContent2',
          name: 'HomeContent2',
          component: () => import('@/components/web/HomePage/HomeContent2')
        }
      ]
    },
    {
      path: '/LouPan ',
      name: 'LouPan',
      component:  LouPan
    },
    {
      path: '/CheckPrice ',
      name: 'CheckPrice',
      component: CheckPrice
    },
    {
      path: '/AnaLyst ',
      name: 'AnaLyst',
      component:  AnaLyst
    },
    {
      path: '/AboutAs ',
      name: 'AboutAs',
      component:  AboutAs
    },
  ]
})
