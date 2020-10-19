<template>
    <div class="nan">
        <h6>户型分析(4)</h6>
       <div class="dl_wra">
           <dl>
           <dd v-for="(item, index) in nanList" :key='index'>
               <div class="img_wra">
                  <img :src=item.url alt="">
               </div>
               <div class="hType">
                   <span>{{item.size}}平户型</span>
                   <span>在售</span>
               </div>
               <div class="hSize">
                   <span>建面</span>
                   <span>{{item.size}}㎡</span>
               </div>
               <div class="pric">
                   约{{item.pric}}万
               </div>
           </dd>
       </dl>
       </div>
       <div @click = 'nanBot' class="nan_bottom">
           获取详细户型图
       </div>
    </div>
</template>

<script>
export default {
    data () {
       return{
            nanList: [
            {
                url: require('../../assets/picture/fxs/hou1.jpg'),
                size: 88,
                pric: 23.2
            },
             {
                url: require('../../assets/picture/fxs/hou3.jpg'),
                size: 120,
                pric: 168
            },
             {
                url: require('../../assets/picture/fxs/hou2.jpg'),
                size: 103,
                pric: 257.5
            },
             {
                url: require('../../assets/picture/fxs/hou4.jpg'),
                size: 125,
                pric: 175
            }
        ]
       }
    },
    methods: {
        nanBot () {
              this.$store.state.fix = true;
              this.$store.state.tit1 = '领取户型图';
              this.$store.state.tit2 = '售楼处会将全部户型图资料发送给您';
              this.$store.state.word = '立即领取'
        }
    }
}
</script>


  <style lang="less" scoped>
   @import './../../assets/h5less/HouseNan.less';
  </style>