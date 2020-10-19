<template>
         <div class="more_top">
        <div class="more_top_nav">
            <span>新房分析师</span>
            <span>/</span>
            <span>小户型</span>
            </div>
            <div class="more_img">
                <img :src=moreTop[0].url alt="">
            </div>
             </div>
</template>

<script>
export default {
    data () {
        return {
            moreTop: [{
               url: require('../../../assets/picture/moreTop.png')
            }]
        }
    }
}
</script>

<style lang="less">
   .more_top{
        .more_top_nav{
              height: 60px;
              line-height: 60px;
              span{
                  font-size: 15px;
              }
              span:nth-child(3){
                  color:rgb(250, 44, 44);
              }
        }
        .more_img{
            width: 100%;
            img{
                width: 100%;
                height: 320px;
            }
        }
   }
</style>