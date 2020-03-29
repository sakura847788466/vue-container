import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/Login.vue'

import UserInfo from './components/UserInfo/UserInfo.vue'

import DownLoad from './components/DownLoad/DownLoad.vue'
import SecretKey from './components/SecretKey/SecretKey.vue'
import InterFace from './components/InterFace/InterFace.vue'
import Document from './components/Document/Document.vue'


Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    children:[
      {
        path: '/userInfo',
        name: 'userInfo',
        component: UserInfo
      },{
        path: '/downLoad',
        name: 'downLoad',
        component: DownLoad
      },{
        path: '/secretKey',
        name: 'secretKey',
        component: SecretKey
      },{
        path: '/interFace',
        name: 'interFace',
        component: InterFace
      },{
        path: '/document',
        name: 'document',
        component: Document
      }
    ]
  }
]
export default new Router({
  // mode: 'hash',
  routes
})
