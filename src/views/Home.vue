<!--
 * @Date         : 2020-06-02 10:55:24
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-11 17:55:36
 * @FilePath     : \learnstore\src\views\Home.vue
 * @Description  : Home
-->
<style lang="scss" scoped>
.home{
  background-color: #f3f3f3;
.header-warp{
  position: fixed;
    top:0;
    @include rect(100%, .9rem);
      background-color: #f3f3f3;
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
    letter-spacing:2px;
    .icon{
      @include rect(.18rem, .18rem);
      &.img{
        @include rectBg(.18rem, .18rem, '~@/assets/img/left.png');
      }
    }
  }
  nav{

    margin:.15rem 0;
    display: flex;
    overflow-x: scroll;
    .nav-cell{
       padding: 0.02rem .18rem;
       line-height: .26rem;
      flex-shrink: 0;
      @include rect(auto, .24rem);
      background: #fff;
      color: #7C7C7C;
      text-align: center;
      font-size: .16rem;
      border-radius:.1rem;
      margin-right: .18rem;
      &:nth-of-type(1){
        margin-left: .15rem;
      }
      &.active{
        background: $c;
        color: #fff;
      }
    }
  }
  main{
    margin:.13rem;
      margin-top: .95rem;
    ul{
      li.item{
        @include rect(100%, 1rem);
        background-color: #fff;
        border-radius:.1rem;
        box-shadow:0px .02rem .15rem 0px rgba(1,54,48,0.05);
        display: flex;
        padding: .13rem .12rem;
        box-sizing: border-box;
        margin-bottom: .17rem;
        .pic{
          @include square(.68rem);
          border-radius: .1rem;
          background-color: #D8D8D8;
          overflow: hidden;
          img{
            @include square(100%);
            object-fit: cover;
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
              height: .49rem;
              text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
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
      <div class="text">学习资料</div>
      <div class="icon"></div>
    </header>
    <nav>
      <div class="nav-cell" :class="{active: currentIndex === index}" v-for="(item, index) in categoryList" :key="index" @click="changeCategory(index)">{{item.codeName}}</div>
    </nav>
    </div>

    <main>
      <ul>
        <li class="item" @click="linkCell(index)" v-for="(item, index) in cellList" :key="index">
          <div class="pic">
            <!-- // 视频0，图片1, 2PPT多图 -->
            <img :src="item.pDescS" v-if="item.type==0">
            <img :src="item.pContent"  v-else  alt="">
            <!-- <img src="@/assets/img/test.jpg" v-else  alt=""> -->

          </div>
          <div class="content">
            <div class="top">
              <div class="title">{{item.pName}}</div>
              <!-- <div class="time">{{item.createTime}}</div> -->
            </div>
            <div class="desc">学习资料类型： {{item.typeName}}
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
      // 当前的类别
      currentIndex: 0,
      currentId: null,
      categoryList: [],
      cellList: []
    }
  },
  mounted () {
    this.getCategory()
  },
  methods: {
    getCategory () {
      this.CM.loading()
      this.CM.post('/generalCode/list', {
        page: 1,
        pageSize: 80,
        parentGeneralCode: 'QR_CODE'
      })
        .then(rs => {
          if (rs.code === 200) {
            console.log(JSON.stringify(rs))
            this.categoryList = rs.data.records
            // 默认点击第一个
            this.changeCategory(0)
          } else {
            alert(rs.message)
          }
          this.CM.loading(0)
        })
    },
    // 点击分类出来分类列表
    getList () {
      this.CM.loading()
      this.CM.post('/propaganda/list', {
        page: 1,
        pageSize: 80,
        generalCode: this.currentId
      })
        .then(rs => {
          if (rs.code === 200) {
            console.log(JSON.stringify(rs))
            const data = rs.data.records

            data.map((item, index, arr) => {
              const strMp4 = item.pName.indexOf('mp4')
              const strPng = item.pName.indexOf('png')
              const strJpg = item.pName.indexOf('jpg')
              if (strMp4 !== -1) {
                // 视频0，图片1, PPT多图
                arr[index].type = 0
                arr[index].typeName = '视频'
              } else if (strPng !== -1 || strJpg !== -1) {
                arr[index].type = 1
                arr[index].typeName = '图片'
              } else {
                arr[index].type = 2
                arr[index].typeName = 'PPT多图'
              }
            })
            this.cellList = data
          } else {
            alert(rs.message)
          }
          this.CM.loading(0)
        })
    },
    // 进入详情
    linkCell (index) {
      this.$router.push({
        name: 'Detail',
        query: {
          index: index,
          cellList: this.cellList
        }
      })
    },
    // 切换类别
    changeCategory (index) {
      this.currentIndex = index
      this.currentId = this.categoryList[index].generalCode
      this.getList()
    }
  }
}
</script>
