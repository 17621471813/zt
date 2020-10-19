<template>
    <div class="housemore" id='0'>
        <div  class="houseImg">
             <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="(item, index) in phoneList" :key="index">
  <img :src=item.url alt="">
      </el-carousel-item>
    </el-carousel>
        </div>
        <div class="houseName">
         <H6>港中旅和乐小镇</H6>
         <span>买贵包赔</span>
        </div>
        <div class="onSell">在售</div>
        <div class="housePri">
            <span>参考均价：</span>
            <span>14000元/㎡</span>
            <span @click='changePri'>变价通知</span>
        </div>
        <div class="houseAdr">
            <span>楼盘地址：</span>
            <span>灵峰度假区梅灵路与机场路交叉口西北角</span>
        </div>
        <div class="seeMore">
            <router-link to=''>查看更多楼盘信息</router-link>
        </div>
    </div>
</template>

  <script>
  export default {
      data () {
          return {
               phoneList: [
                {
                    url: require('./../../assets/picture/play1.jpg')
                },
                {
                    url: require('./../../assets/picture/play2.jpg')
                },
                {
                    url: require('./../../assets/picture/play3.jpg')
                }
                ]
          }
      },
      methods: {
          changePri () {
              this.$store.state.fix = true;
              this.$store.state.tit1 = '变价通知';
              this.$store.state.tit2 = '价格变动实时通知，让您掌握第一手楼盘信息';
              this.$store.state.word = '一键通知'
          }
      }
  }
  </script>


  <style lang="less" scoped>
   @import './../../assets/h5less/HouseMore.less';
  </style>