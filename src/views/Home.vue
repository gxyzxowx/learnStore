<!--
 * @Date         : 2020-06-02 10:55:24
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-03 10:21:11
 * @FilePath     : \learnstore\src\views\Home.vue
 * @Description  : Home
-->
<style lang="scss" scoped>
.home{
  background-color: #F8F8F7;
.header-warp{
position: fixed;
    top:0;
    @include rect(100%, .9rem);
      background-color: #F8F8F7;
}
  header{

    @include rect(100%, .42rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .25rem;
    box-sizing: border-box;
    @include font(.18rem, #fff);
    background-color: $c;
    .icon{
      @include rect(.18rem, .18rem);
      &.img{
        @include rectBg(.18rem, .18rem, '~@/assets/img/left.png');
      }
    }
  }
  nav{

    margin:.13rem;
    display: flex;
    overflow-x: scroll;
    .nav-cell{
      flex-shrink: 0;
      @include rect(1.06rem, .24rem);
      background: #fff;
      color: #7C7C7C;
      line-height: .24rem;
      text-align: center;
      font-size: .12rem;
      border-radius:.1rem;
      margin-right: .16rem;
      &.active{
        background: $c;
        color: #fff;
      }
    }
  }
  main{
    margin:.13rem;
      margin-top: .9rem;
    ul{
      li.item{
        @include rect(100%, .88rem);
        background-color: #fff;
        border-radius:.1rem;
        box-shadow:0px .02rem .15rem 0px rgba(1,54,48,0.05);
        display: flex;
        padding: .13rem .12rem;
        box-sizing: border-box;
        margin-bottom: .17rem;
        .pic{
          @include square(.62rem);
          border-radius: .1rem;
          background-color: #D8D8D8;
          overflow: hidden;
          img{
            @include square(100%);
          }
        }
        .content{
          margin-left: .14rem;
          flex: 1;
          .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .title{
              @include font(.18rem, #222);
            }
            .time{
              @include font(.12rem, #AFAFAF);
            }
          }
          .desc{
            margin-top: .05rem;
            @include font(.12rem, #565656);
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }

}
</style>
<template>
  <div class="home">
    <div class="header-warp">
    <header>
      <div class="icon img"></div>
      <div class="text">标题</div>
      <div class="icon"></div>
    </header>
    <nav>
      <div class="nav-cell" :class="{active: currentIndex === index}" v-for="(item, index) in 4" :key="index" @click="changeCategory(index)">学习资料</div>
    </nav>
    </div>

    <main>
      <ul>
        <li class="item" @click="linkCell()" v-for="(item, index) in num" :key="index">
          <div class="pic">
            <img src="@/assets/logo.png" alt="">
          </div>
          <div class="content">
            <div class="top">
              <div class="title">这是标题</div>
              <div class="time">2020年3月3日</div>
            </div>
            <div class="desc">描述描述描述描述描述描述描述描述描述描述
              描述描述描述描述描述描述描述描述描述描述描述描述
              描述描述描述描述描述描述描述描述是
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      ifBottom: false,
      num: 6,
      currentIndex: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollEvent, false)
  },
  methods: {
    // 进入详情
    linkCell () {
      this.$router.push({
        name: 'Detail',
        query: 123
      })
    },
    // 切换类别
    changeCategory (index) {
      this.currentIndex = index
    },
    // 触底监听事件
    scrollEvent () {
      if (document.documentElement.scrollTop +
                     document.documentElement.clientHeight >=
                    document.body.scrollHeight) {
        this.onBottom()
      }
    },
    onBottom () {
      if (this.ifBottom) {
        return
      }
      this.ifBottom = true
      console.log(123)
      // 请求数据到后端，然后增加page
      setTimeout(() => {
        this.num += 5
        this.ifBottom = false
      }, 1000)
    }
  }
}
</script>
