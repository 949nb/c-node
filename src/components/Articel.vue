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

    <div class="huifu">
      <div class="topbar">回复</div>
      <div v-for="(reply,index) in post.replies" style="border-bottom: 1px solid #F0F0F0">
        <div class="userfoo">
          <router-link  class="pic" tag="div" :to="{
          name:'user_info',
          params:{
              name:reply.author.loginname
            }
          }">
            <img :src="reply.author.avatar_url">
          </router-link>
          <span style="color: #666666;">{{reply.author.loginname}}</span>
          <span style="color: #3B86C6;">
          {{index+1}}楼-{{post.create_at | formatDate}}
        </span>
          <span v-if="reply.ups.length>0" style="position: absolute; right: 10px;color: #666666;">
          👍 {{reply.ups.length}}
        </span>
          <span v-else style="position: absolute; right: 10px;color: #666666;">👍0</span>
        </div>
        <p v-html="reply.content" class="huifucontent"></p>
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
  .topic_header{
    background: #FFFFFF;
    border-radius: 5px;
  }
  .huifu{
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    & > .topbar{
      background: #F6F6F6;
      height: 40px;
      line-height: 40px;
      padding-left: 5px;
      border-radius: 5px;
      font-size: 14px;
      color: #8EBC39;
    }
  }
  .huifucontent{
    margin-left: 50px;
    margin-bottom: 10px;
  }
  .pic {
    display: inline-block;
    & > img{
      height: 30px;
      width: 30px;
      border-radius: 5px;
      margin: 10px;
      cursor: pointer;
    }
  }
  .userfoo{
    display: flex;
    align-items: center;
    & > span {
      margin-right: 10px;
    }
  }
  .loading{
    height: 100vh;
    background: #FFFFFF;
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
  }
</style>
<style>
  @import url('../assets/markdown-github.css');
</style>
