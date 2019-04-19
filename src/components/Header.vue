<template>
  <div class="header">
    <div class="wrapper">
      <router-link :to="{name: 'root'}">
        <img src="../assets/logo.svg" alt="">
      </router-link>

      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登陆</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss" scoped>
  .header{
    background-color: #444444;
    height: 50px;

  }
  .wrapper{
    width: 80%;
    margin: 0 auto;
  }
  img {
    max-width: 150px;
    margin-top: 6px;
  }
  ul{
    list-style-type: none;
    float:right;
    margin: 4px;
  }
  li{
    display: inline-block;
    padding: 10px 0px 10px 20px;
  }
  a{
    text-decoration: none;
    color:#ccc;
    font-size: 14px;
    &:hover{
      color: white;
    }
  }
</style>