<template>
  <div class="userInfo">
    <div class="loading" v-if="isLoading">
      <!--在数据为返回的时候，显示加载-->
      <img src="../assets/Loading.png">
    </div>
    <div v-else>
      数据获取成功
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        isLoading: false
      }
    },
    methods:{
      getData:function () {
        this.$http.get('url')
          .then((res)=>{
            this.isLoading = false
          })
          .catch((err)=>{
            console.log(err)
          })
      }
    },
    beforeMount() {
      this.isLoading = true;
      getData()
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
</style>