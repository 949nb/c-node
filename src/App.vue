<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <PostList></PostList>
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
    max-width: 1200px;
    margin: 10px auto;
    background: #cccccc;
  }
</style>
