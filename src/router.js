import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Meta from 'vue-meta'

Vue.use(Router);
Vue.use(Meta)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Contact.vue")
    },
    {
      path: "/resume",
      name: "resume",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Resume.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Blog.vue")
    },
    {
      path: "/blog/:id",
      name: "blogPost",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/BlogPost.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Services.vue")
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Portfolio.vue")
    },
    {
      path: "/portfolio/video",
      name: "videoPortfolio",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Video.vue")
    },
    {
      path: "/portfolio/graphic",
      name: "graphicPortfolio",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Graphic.vue")
    },
    {
      path: "/portfolio/web",
      name: "webPortfolio",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Web.vue")
    },
    {
      path: "*",
      name: "Error",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Error.vue")
    }
  ]
});
