import Vue from 'vue'
import Router from 'vue-router'
import Articel from "../components/Articel";
import PostList from "../components/postList"

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:"/",
      components:{ main: PostList},
    },
    {
      name:'post_content',
      path:"/topic/:id",
      components:{ main: Articel},
    }
  ]
})
