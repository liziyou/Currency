import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import {
  Common,
  Views
} from 'cps/';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      hidden: true,
      component: Common.Login
    },
    {
      path:'/loginExpires',
      hidden:true,
      component:Common.Home,
      children:[
        {
          path:'loginExpires',
          name:'登陆超时',
          component:Common.loginExpires
        }
      ]
    },
    {
      path:'/home',
      name:'主页 ',
      icon:'home',
      component:Common.Home,
      children:[
        {
          path:'/home',
          hidden:true,
          component:Views.Content
        }
      ]
    },
    {
      path:'/userManage',
      name:'用户管理',
      icon:'user-circle-o',
      component:Common.Home,
      children:[
        {
          path:'/userInfo',
          name:'个人信息',
          component:Views.UserInfo
        },
        {
          path:'/memberInfo',
          name:'会员列表',
          component:Views.MemberInfo
        },
        {
          path:'/AgentInfo',
          name:'代理列表',
          component:Views.AgentInfo
        }
      ]
    },
    {
      path:'/fundManage',
      name:'资金管理',
      icon:'gg-circle',
      component:Common.Home,
      children:[
        {
          path:'/fundManage',
          name:'资金列表',
          component:Views.FundList
        }
      ]
    },
    {
      path:'/orderManage',
      name:'订单管理',
      icon:'list-alt',
      component:Common.Home,
      children:[
        {
          path:'/orderManage',
          name:'历史订单',
          component:Views.OrderManage
        }
      ]

    }
  ]
})
