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
            <span class="reply_count">{{post.reply_count}}</span>
            <span class="visit_count">/{{post.visit_count}} </span>
          </span>
          <!--帖子类别-->
          <span :class="[{put_good:(post.good === true),put_top:(post.top === true),
          put_tab:(post.good !== true && post.top !== true )}]" class="tab">
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
  margin-right: 10px;
  border-radius:5px;
}
.tab{
  background: #E5E5E5;
  border-radius: 4px;
  font-size: 12px;
  padding:1px 5px;
  color: #999999;
}
.put_good{
  background-color: #8EBC39;
  color: white;
}
.put_top{
  background-color: #8EBC39;
  color: white;
}
.postList{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.posts > ul{
  margin:0;
  padding: 0;
  box-sizing: border-box;

}
.posts > ul > li{
  height: 50px;
  list-style: none;
  border-top: 2px solid #F0F0F0;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.posts > ul > li > span{
  margin-right: 10px;
}
.reply_count,.visit_count{
  padding: 0;
  font-size: 14px;
  color: #9879BB;
}
.visit_count{
  color: #cccccc;
  font-size: 12px;
}

.postList > ul > li:not(:first-child){
  padding: 9px;
  font-size: 15px;
}
</style>