import Vue from "vue";
import VueAnalytics from 'vue-analytics'
import Router from "vue-router";
import Home from "./views/Home.vue";
import Works from "./views/Works.vue";
import {datas} from "./datas/datas.js";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Ugo Olsak’s Portfolio - Product designer"
      },
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
      path: "/project/tesla-x-tripadvisor",
      name: "projectTesla",
      meta: {
        title: "Tesla X TripAdvisor - Ugo Olsak’s Portfolio"
      },
      props: {
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "project" */ "./views/ProjectTesla.vue")
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
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  
});

Vue.use(VueAnalytics, {
  // this one of course needs to me a real domain ID
  id: 'UA-136105445-1',
 // use the `router` instance here 
  router,
  debug: {
    // enabled: true
  }
});

export default router;

