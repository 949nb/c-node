<template>
  <div class="articel">
    <div class="loading" v-if="isLoading">
      <!--在数据为返回的时候，显示加载-->
      <img src="../assets/Loading.png">
    </div>
    <div>
      <div class="topic_header">
        <div class="topic_title">{{post.title}}</div>
        <ul>
          <li> · 发布于：{{post.create_at | formatDate}}</li>
          <li> · 作者：{{post.author.loginname}}</li>
          <li> · 浏览次数：{{post.visit_count}}次浏览</li>
          <li> · 来自- {{post | tabFormatter}} -</li>
        </ul>
        <div v-html="post.content" class="topic_content"></div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Articel",
    data() {
      return {
        isLoading: false,
        post:{}//代表当前文章页的所有内容/属性
      }
    },
    methods:{
      getData(){
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then((res)=>{

              this.isLoading = false;
              this.post = res.data.data;
              console.log(res);
          }).catch((err)=>{
          console.log(err);
        })
      }
    },
    beforeMount() {
      this.isLoading = true;
      this.getData()
    }
  }
</script>

<style lang="scss">
  @import url("../assets/markdown-github.css");
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
</style>