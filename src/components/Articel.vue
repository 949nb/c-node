<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <!--在数据为返回的时候，显示加载-->
      <img src="../assets/Loading.png">
    </div>
    <div v-else>
      <div class="topic_header">
        <h1 class="topic_title">
          <span>{{post | tabFormatter}}</span>
          {{post.title}}
        </h1>
        <ul class="titleInfo">
          <li> · 发布于：{{post.create_at | formatDate}}</li>
          <li> · 作者：{{post.author.loginname}}</li>
          <li> · 浏览次数：{{post.visit_count}}次浏览</li>
          <li> · 来自：{{post | tabFormatter}}</li>
        </ul>
        <div v-html="post.content" id="content" class="topic_content"></div>
      </div>
    <div>
      <div class="topbar">回复</div>
      <div v-for="(reply,index) in post.replies" class="pic">
        <div>
          <router-link :to="{
          name:'user_info',
          params:{
              name:reply.author.loginname
            }
          }">
            <img :src="reply.author.avatar_url">
          </router-link>
          <span>{{reply.author.loginname}}</span>
          <span>
          {{index+1}}楼·{{post.create_at | formatDate}}
        </span>
          <span v-if="reply.ups.length>0">
          👍 {{reply.ups.length}}
        </span>
          <span v-else></span>
        </div>
        <p v-html="reply.content"></p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data() {
      return {
        isLoading: false,
        post:{}//代表当前文章页的所有内容/属性
      }
    },
    methods:{
      getData:function(){
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then((res)=>{
            this.isLoading = false
            this.post = res.data.data
          }).catch((err)=>{
            console.log(err);
        })
      }
    },
    beforeMount:function() {
      this.isLoading = true;
      this.getData();
    }
  }
</script>




<style lang="scss" scoped>
  .loading{
    height: 100vh;
    text-align: center;
    & > img{
      margin-right: 10px;
      width:30px;
      height: 30px;
      margin-top: 100px;
      animation: x 0.5s linear infinite;
    }
  }
  @keyframes x {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
  }
  .topic_title{
    height: 50px;
    font-size: 22px;
    display: flex;
    align-items: center;
    & > span{
        padding: 0px 2px;
        font-size: 12px;
        background: #8EBC39;
        color: white;
        border-radius: 3px;
        margin-right: 5px;
        margin-left: 5px;
      }
    }

  ul{
    list-style: none;
    border-bottom: 1px solid #E5E5E5;
    padding-left: 5px;
    padding-bottom: 10px;
    margin-top: -5px;
    & > li{
      display: inline-block;
      font-size: 12px;
      color: #858585;
    }
  }
  .topic_content{
    margin:15px;
    font-size: 16px!important;
    line-height: 1.8em;
    color: #333333;
    border-bottom: 1px solid #cccccc;
  }
  .pic > img{
    height: 30px;
    width: 30px;
  }
</style>
<style>
  @import url('../assets/markdown-github.css');
</style>
