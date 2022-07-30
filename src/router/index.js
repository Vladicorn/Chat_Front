import { createRouter, createWebHistory } from 'vue-router'
import Chat from '../views/ChatView.vue'
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";

const routes = [
  {
    path: '/',
    name: 'ChatView',
    component: Chat
  },
  {
    path: '/login',
    name: 'LoginView',
    component: Login
  },
  {
    path: "/register",
    name: "RegisterView",
    component: Register,
    meta: { guest: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

/*
import Vue from "vue";
import VueRouter from "vue-router";

import Register from "../views/Register";
import Login from "../views/Login_";
import Chat from "../views/Chat";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Ch",
    component: Chat,
  },
  {
    path: "/register",
    name: "Registd",
    component: Register,
    meta: { guest: true },
  },
  {
    path: "/login",
    name: "Log",
    component: Login,
    meta: { guest: true },
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
   
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
  
    next();
  } else {
    next();
  }
});

export default router;*/