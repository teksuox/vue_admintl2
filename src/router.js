import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/Paginas/Login/Login.vue'

import App from './components/Principal/Layout/Layout.vue';
import Blanco from './views/Paginas/Blanco/Blanco.vue';
import Otro from './views/Paginas/Otro/Otro.vue';
import General from './views/Paginas/General/General.vue';


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '*',
      component: Login
    },
    {
      path: '/app',
      name: 'app',
      component: App,
      children: [
        {
          path: '*',
          component: Blanco
        },
        {
          path: 'blanco',
          name: 'blanco',
          component: Blanco,
          // meta:{
          //   auntentificado: true
          // }
        },
        {
          path: 'otro',
          name: 'otro',
          component: Otro,
          // meta:{
          //   auntentificado: true
          // }
        },
        {
          path: 'general',
          name: 'general',
          component: General,
          // meta:{
          //   auntentificado: true
          // }
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   let usuario = false;
//   if(window.sessionStorage.getItem('Logiado') === 'true'){
//     usuario = true;
//   }else{
//     usuario = false;
//   }

//   let autorizacion = to.matched.some(record => record.meta.auntentificado);

//   if (autorizacion && !usuario) {
//     next('Login');
//   }else if (!autorizacion && usuario  === 'true') {
//     next('app/ventas');
//   }else {
//     next();
//   }
// })

export default router;