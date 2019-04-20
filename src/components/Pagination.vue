<template>
  <div class="pagination">
    <button>首页</button>
    <button>上一页</button>
    <button v-for="btn in pagebtns" :class="[{currentPage:btn === currentPage},'pagebtn']" @click="changeBtn(btn)">
      <span> {{btn}} </span>
    </button>

    <button>下一页</button>

  </div>
</template>

<script>
  export default {
    name: "Pagination",
    data() {
      return {
        pagebtns:[1,2,3,4,5,6,7,8],
        currentPage:1
      }
    },
    methods:{
      changeBtn:function (page) {
        this.currentPage = page;
        if(page === this.pagebtns[7]){
          this.pagebtns.shift();
          this.pagebtns.splice(7,0,this.pagebtns[6]+1)
        }else if(page === this.pagebtns[0] && page !== 1){
          this.pagebtns.pop();
          this.pagebtns.splice(0,0,this.pagebtns[0]-1)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .currentPage{
    background-color: #cccccc;
    color: white;
  }
  .pagebtn{
    padding: 3px 10px;
    margin: 2px 10px;
    border-radius: 2px;
    &:focus{
      outline: none;
    }
  }

</style>