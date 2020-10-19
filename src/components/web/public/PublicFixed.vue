<template>
    <div class="fixed"  v-show='isShow' @click='fixClick'>
    <div class="top"><li class='el-icon-caret-top'></li></div>
    <div class="fixCont">回到顶部</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
           isShow: ''
        }
    },
    mounted () {
     this.show();
    },
    methods: {
        show () {
           window.timer = setInterval( () =>{
               if(window.pageYOffset >360){
               this.isShow = true;
           }else{
               this.isShow = false;
           }
          },1000)
          
        },
        fixClick () {
            window.scrollTo(0,0);
   
        }
    }
}
</script>

<style lang="less">
 .fixed{
     position:fixed;
     width: 60px;
    height: 50px;
     right: 25px;
     top: 48vh;
     border: 1px solid rgb(185, 58, 58);
    text-align: center;
    border-radius: 6px;
    div{
        margin-top: -2px;
    }
    .top{
        .el-icon-caret-top{
            font-size: 30px;
            color:  rgb(185, 58, 58);
        }
    }
    .fixCont{
        font-size: 12px;
        color:rgb(185, 58, 58);
    }
 }
</style>