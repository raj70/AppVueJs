import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/authentication/Login.vue';
import Register from './views/authentication/Register.vue';
import TasksAll from './views/tasks/TasksAll.vue';
import TasksCreate from './views/tasks/TasksCreate.vue';
import TasksEdit from './views/tasks/TasksEdit.vue';

import {isLoggedIn} from './services/AuthService';

Vue.use(Router)


const routes =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'tasks-all',
      component: TasksAll,
      beforeEnter: (to, from , next) =>{
        if(isLoggedIn()){
          console.log(to, from ,"TaskAll");
          next();
        }else{
          next('/login');
        }
      }
    },
    {
      path: '/tasks/new',
      name: 'tasks-create',
      component: TasksCreate,
      beforeEnter: (to, _from , next) =>{
        if(isLoggedIn()){
          next();
        }else{
          next('/login');
        }
      }
    },
    {
      path: '/tasks/:id',
      name: 'tasks-edit',
      component: TasksEdit,
      beforeEnter: (to, _from , next) =>{
        if(isLoggedIn()){
          next();
        }else{
          next('/login');
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: (to, from , next)=>{
        if(!isLoggedIn()){
          next();
        }else{
          next("/");
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from , next)=>{
        if(!isLoggedIn()){
          next();
        }else{
          next("/");
        }
      }
    },
    {
      path: '*',
      redirect: '/'
    },
  ],
  linkActiveClass: 'active'
})

// routes.beforeEach((to, from , next)=>{
//   if(isLoggedIn){
//     next();
//   }else{
//     next("/login");
//   }
// })

export default routes;