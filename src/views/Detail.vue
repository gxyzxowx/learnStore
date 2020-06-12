<!--
 * @Date         : 2020-06-02 10:55:24
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-11 15:56:41
 * @FilePath     : \learnstore\src\views\Detail.vue
 * @Description  :
-->
<style lang="scss" scoped>
.detail{
  height: 100%;
  header{

    background-color: #f7f7f7;
    // background-image: url('http://i3.cqnews.net/art/2020-06/02/33a1680d-6848-4fc8-b71d-88884a915477.jpg');
    .top{
      @include rect(100%, .42rem);
      position: fixed;
      top:0;
      left:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .25rem;
    box-sizing: border-box;
    @include font(.18rem, #fff);
    background-color: $c;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    .icon{
      @include rect(.18rem, .18rem);
      &.img{
        @include rectBg(.18rem, .18rem, '~@/assets/img/left.png');
      }
    }
    .text{
      flex: 1;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      text-align: center;
    }
    }
    .content{
      margin-top: .42rem;
      @include rect(100%,100%);
      img{
        object-fit: cover;
         @include rect(100%,100%);
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
video {

    margin: 0;
    padding: 0;
    background-color: #333;
    border: none;
}
</style>
<template>
  <div class="detail">
    <header>
      <div class="top">
         <div class="icon img" @click="backList"></div>
      <div class="text">{{item.name}}</div>
      <div class="icon"></div>
      </div>
      <div class="content">
        <!-- type 视频0，图片1 ,ppt 2-->
        <img :src="item.bg" v-if="type==1">
        <video  v-if="type==0"  width="100%" :src="item.bg" poster="@/assets/img/test.jpg" height="240" controls="controls" autoplay
            preload="auto" x5-video-player-type="h5" controlsList="nodownload" webkit-playsinline="true"
            playsinline="true" x-webkit-airplay="allow" x5-video-player-fullscreen="true"
            x5-video-orientation="portraint">您的浏览器不支持 video 视屏播放</video>
        <div class="boxppt" v-if="type==2" v-html="item.pptcontent">
        </div>
      </div>
    </header>
    <main  v-if="type==0">
      <div class="title" >
        {{item.name}}
      </div>
    </main>
    <footer>
      <div class="pre cell" @click="pre">上一个</div>
      <div class="next cell" @click="next">下一个</div>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item: {
        bg: 'http://i3.cqnews.net/art/2020-06/02/33a1680d-6848-4fc8-b71d-88884a915477.jpg',
        name: '暂无',
        pptcontent: '暂无'
      },
      pptcontent: '',
      fileTypeName: '暂无',
      // 视频0，图片1
      type: 0,
      cellList: [],
      currentIndex: 0,
      currentCell: {}
    }
  },
  mounted () {
    this.currentIndex = this.$route.query.index
    this.cellList = this.$route.query.cellList

    // 给页面赋值
    this.getData()
    // console.log(this.cellList)
  },
  methods: {
    getData () {
      this.CM.loading()
      setTimeout(() => {
        this.CM.loading(0)
      }, 1200)
      this.currentCell = this.cellList[this.currentIndex]
      console.log(this.currentCell)
      // const type = this.currentCell.type
      this.type = this.currentCell.type
      console.log('this.type' + this.type)
      this.item.name = this.currentCell.pName
      this.item.bg = this.currentCell.pContent
      this.item.pptcontent = this.currentCell.pDescS
      // switch (type) {
      //   case 1:
      //     // 图片
      //     this.item.bg = this.currentCell.fileUrl
      //     break
      //   case 2:
      //     // 视频
      //     break
      //   case 3:
      //     // 文档
      //     break
      // }
    },
    // 返回键
    backList () {
      window.history.go(-1)
    },
    // 上一个
    pre () {
      if (this.currentIndex === 0) {
        alert('已经是第一个了')
        return
      }
      this.item.bg = ''
      this.currentIndex--
      this.getData()
    },
    // 下一个
    next () {
      if (this.currentIndex === this.cellList.length - 1) {
        alert('已经是最后一个了')
        return
      }
      this.item.bg = ''
      this.currentIndex++
      this.getData()
    }
  }
}
</script>
