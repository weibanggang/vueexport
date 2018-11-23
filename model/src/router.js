import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//导入
import Fool2 from './views/Fool2.vue'
import Foo from './views/Foo3.vue'


Vue.use(Router)

const rou=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
			path:'/foo',
			name:'f1',
			component: () => import('./views/fool.vue')
		},
		{
			path:'/foo2',
			name:'f222',
			component:Fool2
		}, {
      path: '/about',
      name: 'about11',
			//导入
      component: () => import('./views/About.vue')
    },
  { path: '/bar', component: Foo }
		
  ]
})
rou.beforeEach((to,form,nex)=>{

nex();
})
export default rou;