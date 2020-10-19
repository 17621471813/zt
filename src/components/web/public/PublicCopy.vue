<template>
    <div class="sm">
        <div class="lefr">
            <div> 关于我们<span>隐私声明</span></div>
            <div> 上海州泰房地产经纪有限公司 | 粤ICP备18066666  号-1</div>
            <div>注：项目资料中涉及户型面积，均为建筑面积。</div>
            <div>© 2020 版权所有</div>
        </div>
        <!-- <div class="right">
            <img :src='img' alt="">
        </div> -->
    </div>
</template>


<script>
export default {
    data () {
        return {
            // img: require('../../../assets/picture/sm.png')
        }
    }
}
</script>
<style lang="less" scoped>
.sm{
    display: flex;
    width: 100vw;
    height: 200px;
    background:rgb(34, 32, 32);
     color: #999;
     div{
         font-size: 14px;
         margin: 20px 0 20px 90px;
         span{
             font-size: 14px;
             margin-left: 20px;
         }
     }
     div:nth-child(1){
         padding-top: 5px;
     }
     .right{
         img{
             width: 50px;
             margin-left: 400px;
             margin-top: 100px;
         }
     }

}

</style>