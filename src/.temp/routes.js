export default [
  {
    path: "/tag/:id/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/yonatankof/Kof-Dev/kof-site-2020-gridsome-starter-blog/src/templates/Tag.vue")
  },
  {
    path: "/posts/",
    component: () => import(/* webpackChunkName: "page--src--pages--posts-vue" */ "/Users/yonatankof/Kof-Dev/kof-site-2020-gridsome-starter-blog/src/pages/Posts.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/yonatankof/Kof-Dev/kof-site-2020-gridsome-starter-blog/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/:urlname/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/yonatankof/Kof-Dev/kof-site-2020-gridsome-starter-blog/src/templates/Post.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/yonatankof/Kof-Dev/kof-site-2020-gridsome-starter-blog/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/yonatankof/Kof-Dev/kof-site-2020-gridsome-starter-blog/node_modules/gridsome/app/pages/404.vue")
  }
]

