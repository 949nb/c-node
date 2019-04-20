<template>
  <div class="postList">
    <div class="loading" v-if="isLoading">
      <!--在数据为返回的时候，显示加载-->
      <img src="../assets/Loading.png" >
    </div>
    <!--帖子回复列表-->
    <div class="posts" v-else>
      <ul>
        <li>
          <div class="topbar">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
            <span>客户端测试</span>
          </div>
        </li>
        <li v-for="post in posts">
          <!--头像-->
          <img :src="post.author.avatar_url" alt="">
          <!--回复/浏览-->
          <span>
            <span class="count">
              <span class="reply_count">{{post.reply_count}}</span><span class="visit_count">/{{post.visit_count}}</span>
            </span>
          </span>
          <!--帖子类别-->
          <span :class="[{put_good:(post.good === true),put_top:(post.top === true),
          put_tab:(post.good !== true && post.top !== true )}]" class="tab">
            <span>
              {{post | tabFormatter}}
            </span>
          </span>
          <!--标题-->
          <router-link :to="{name: 'post_content',params:{id:post.id}}">
            <span class="title"> {{post.title}} </span>
          </router-link>
          <!--时间-->
          <span class="last_reply"> {{post.last_reply_at | formatDate}} </span>
        </li>
        <li>
          <pagination @handle="renderList">

          </pagination>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import pagination from "./Pagination"
  export default {
    name: "postList",
    components:{
      pagination
    },
    data() {
      return {
        isLoading: false,
        posts:[],//代表页面的列表数组
        postPage: 1
      }
    },
    methods:{
      getData(){
        this.$http.get('https://cnodejs.org/api/v1/topics',{
          params:{
            page:this.postPage,
            limit:20
          }
        }).then((res) => {
          this.isLoading = false
          this.posts = res.data.data
        }).catch((err)=>{
          //处理返回失败后的问题
          console.log(err)
        })
      },
      renderList:function (value) {
        console.log(value);
        this.postPage = value;
        this.getData();
      }
    },
    beforeMount() {
      this.isLoading = true;
      this.getData()
    }
  }
</script>

<style lang="scss" scoped>
img{
  width:30px;
  height: 30px;
  margin-right: 10px;
  border-radius:5px;
}
.title{
  color: #333333;
  font-size: 16px;
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
  background: #FFFFFF;
  border-radius: 5px;
}
.posts > ul{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
.posts > ul > li{
  height: 50px;
  list-style: none;
  border-top: 1px solid #F0F0F0;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;
}
.posts > ul > li > span{
  margin-right: 10px;
}

.posts > ul > li > .last_reply{
  position: absolute;
  right: 10px;
  font-size: 14px;
  color: #999999;
}
.count{
  margin: -5px;
  display: inline-block;
  width: 70px;
  height:30px;
  text-align: center;
}
.reply_count,.visit_count{
  margin: 0;
  font-size: 14px;
  color: #9879BB;
}
.visit_count{
  color: #cccccc;
  font-size: 12px;
}

ul > li:first-child{
  background-color: #F6F6F6;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-size: 14px;
  border: none;
  height: 40px;
  &>div>span{
    margin-right: 20px;
    color: #98BA4F;
    padding: 1px 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
      color: white;
      background-color: #98BA4F;
    }
  }
}
.loading{
  height: 100vh;
  text-align: center;
  & > img{
    margin-top: 100px;
    animation: x .7s linear infinite;
  }
}
@keyframes x {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}
a{
  text-decoration: none;
}
</style>