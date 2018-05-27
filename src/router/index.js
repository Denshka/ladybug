import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Yeezy from '@/components/Yeezy'
import NikeXOffWhite from '@/components/NikeXOffWhite'
import HumanRace from '@/components/HumanRace'
import Gucci from '@/components/Gucci'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/yeezy',
      name: 'Yeezy',
      component: Yeezy
    },
    {
      path: '/nikexoffwhite',
      name: 'NikeXOffWhite',
      component: NikeXOffWhite
    },
    {
      path: '/humanrace',
      name: 'HumanRace',
      component: HumanRace
    },
    {
      path: '/gucci',
      name: 'Gucci',
      component: Gucci
    }
  ]
})
