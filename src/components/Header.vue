<template>
  <div class="header">
    <div class="wrapper">
      <router-link :to="{name: 'root'}">
        <img src="../assets/logo.svg" alt="">
      </router-link>

      <ul>
        <li><span class="topnav" href="#">本demo为CNODE纯预览版，看源码 <span href="https://github.com/949nb/c-node" class="clickHere">--> 点这里 <--</span> </span></li>
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
  .topnav{
    text-decoration: none;
    color:#ccc;
    font-size: 14px;
  }
  .clickHere{
    text-decoration: none;
    cursor: pointer;
    &:hover{
      color: white;
    }
  }
</style>