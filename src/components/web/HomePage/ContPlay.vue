<template>
    <div class="play">
   <el-carousel  height='480px' >
      <el-carousel-item v-for="(item, index) in playList" :key="index">
   <router-link to='/'>  <img :src="item.url" alt=""></router-link>
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
export default {
    data () {
        return {
            playList: [
                {
                    url: require('../../../assets/picture/play1.jpg')
                },
                {
                    url: require('../../../assets/picture/play2.jpg')
                },
                {
                    url: require('../../../assets/picture/play3.jpg')
                }
                ]
        }
    }
}
</script>

<style lang="less">
.play{
    width: 100%;
    .el-carousel__container{
        img{
            width: 100%;
            height: 540px;
        }
    }
}
</style>