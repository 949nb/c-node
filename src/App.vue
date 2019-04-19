<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import PostList from './components/postList'

export default {
  name: 'App',
  components:{
    Header,
    PostList
  }
}
</script>

<style scoped>
  .main{
    max-width: 80%;
    margin: 15px auto;
    background: #FFFFFF;
    border-radius: 5px;
  }
</style>
