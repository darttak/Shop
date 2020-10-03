import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Admin from "../views/Admin.vue";
// import Login from "../views/Login.vue";
import Category from "../views/admin/Category.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { path: "login" }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: { path: "admin/category" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/Admin.vue"),
      children: [
        {
          path: 'category',
          name: 'admin.category',
        component: Category
        }
      ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
