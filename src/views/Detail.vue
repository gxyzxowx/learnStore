<!--
 * @Date         : 2020-06-02 10:55:24
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-03 10:01:35
 * @FilePath     : \learnstore\src\views\Detail.vue
 * @Description  :
-->
<style lang="scss" scoped>
.detail{
  header{
    @include rect(100%, 2.4rem);
    background-color: #f7f7f7;
    // background-image: url('http://i3.cqnews.net/art/2020-06/02/33a1680d-6848-4fc8-b71d-88884a915477.jpg');
    .top{
      @include rect(100%, .42rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .25rem;
    box-sizing: border-box;
    @include font(.18rem, #fff);
    .icon{
      @include rect(.18rem, .18rem);
      &.img{
        @include rectBg(.18rem, .18rem, '~@/assets/img/left.png');
      }
    }
    }
  }
  main{
    background-color: #fff;
    padding: .25rem;
    box-sizing: border-box;
    .title{
      @include font(.26rem, #222);
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: .23rem;
    }
    .author{
      @include font(.12rem, #565656);
    }
    .time{
      @include font(.12rem, #AFAFAF);
    }
    .content{
      margin-top: .28rem;
      @include font(.14rem, #565656);
      margin-bottom: 1rem;
    }
  }
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    @include rect(100%, .55rem);
    padding: 0 .25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .cell{
      @include rect(1.55rem, .37rem);
      @include font(.12rem, #fff);
      text-align: center;
      line-height: .37rem;
      background-color: $c;
      border-radius: .1rem;
    }
  }
}
</style>
<template>
  <div class="detail">
    <header :style="{backgroundImage:'url(' + item.bg +')',backgroundSize:'cover'}">
      <div class="top">
         <div class="icon img" @click="backList"></div>
      <div class="text">标题</div>
      <div class="icon"></div>
      </div>
    </header>
    <main>
      <div class="title">
        这是标题
      </div>
      <div class="author">竹林小虾</div>
      <div class="time">2020年3月2日</div>
      <div class="content">
        这是具体的内容...
      </div>
    </main>
    <footer>
      <div class="pre cell">上一个</div>
      <div class="next cell">下一个</div>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item: {
        bg: 'http://i3.cqnews.net/art/2020-06/02/33a1680d-6848-4fc8-b71d-88884a915477.jpg'
      }
    }
  },
  methods: {
    backList () {
      window.history.go(-1)
    }
  }
}
</script>
