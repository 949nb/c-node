<template>
  <div class="postList">
    <div class="loading">
      <!--在数据为返回的时候，显示加载-->
      <img src="../assets/Loading.png" v-if="isLoading">
    </div>
    <!--帖子回复列表-->
    <div class="posts">
      <ul>
        <li>
          <div class="topbar">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </div>
        </li>
        <li v-for="post in posts">
          <!--头像-->
          <img :src="post.author.avatar_url" alt="">
          <!--回复/浏览-->
          <span>
            <span class="reply_count"> {{post.reply_count}} </span>
            <span class="visit_count"> /{{post.visit_count}} </span>
          </span>
          <!--帖子类别-->
          <span :class="[{put_good:(post.good == true),put_top:(post.top == true),
          put_tab:(post.good != true && post.top != true )}]">
            <span>
              {{post | tabFormatter}}
            </span>
          </span>
          <!--标题-->
          <span class="title"> {{post.title}} </span>
          <!--时间-->
          <span class="last_reply"> {{post.last_reply_at | formatDate}} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "postList",
    data() {
      return {
        isLoading: false,
        posts:[]//代表页面的列表数组
      }
    },
    methods:{
      getData(){
        this.$http.get('https://cnodejs.org/api/v1/topics',{
          page:1,
          limit:20
        }).then((res) => {
          this.isLoading = false
          this.posts = res.data.data
          console.log(res);
        }).catch((err)=>{
          //处理返回失败后的问题
          console.log(err)
        })
      }
    },
    beforeMount() {
      this.isLoading = true;
      this.getData()
    }
  }
</script>

<style scoped>
img{
  width:30px;
  height: 30px;
}
.put_good{
  color:red;
}
.put_top{
  color:blue;
}
</style>