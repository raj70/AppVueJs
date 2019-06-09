import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/authentication/Login.vue';
import Register from './views/authentication/Register.vue';
import TasksAll from './views/tasks/TasksAll.vue';
import TasksCreate from './views/tasks/TasksCreate.vue';
import TasksEdit from './views/tasks/TasksEdit.vue';

import Users from './views/Users.vue';

import {isLoggedIn} from './services/AuthService';

/** 
 * for more info Vue VueRouter
 *  https://router.vuejs.org/guide/#html 
 * */

Vue.use(Router);

const appnavigation = [
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
    path: '/Users',
    name: 'users',
    component: Users,
    beforeEnter: (to, from , next)=>{
      if(isLoggedIn()){
        next();
      }else{
        next("/");
      }
    }
  },
  {
    path: '*',
    redirect: '/',
    beforeEnter: (to, from, next) =>{
      console.log("anything");
      next();
    }
  },
]


const routes =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: appnavigation,
  linkActiveClass: 'active'
})

export default routes;