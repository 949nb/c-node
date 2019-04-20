import Vue from 'vue'
import Router from 'vue-router'
import Articel from "../components/Articel";
import PostList from "../components/postList";
import userInfo from "../components/userInfo"

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',//router-link中使用 :to='root'跳转
      path:"/",
      components:{ main: PostList},//main就是在router-view中使用 name='main' 实现但页面切换
    },
    {
      name:'post_content',
      path:"/topic/:id",
      components:{ main: Articel},
    },
    {
      name:'user_info',
      path:"/userinfo/:name",
      components:{ main:userInfo }
    }
  ]
})
