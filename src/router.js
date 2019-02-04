import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Works from "./views/Works.vue";
import {datas} from "./datas/datas.js";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: {
        home: datas.home,
        commun: datas.commun
      }
    },
    {
      path: "/works",
      name: "works",
      component: Works,
      props: {
        commun: datas.commun
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "works" */ "./views/Works.vue")
    },
    {
      path: "/project/:slug",
      name: "project",
      props: {
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "project" */ "./views/Project.vue")
    }
  ]
});
