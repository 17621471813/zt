<template>
    <div class="pic">
        <div class="picTop">
                <div class="picTop_left">在售户型</div>
                <div class="picTop_right">全部户型 
                    <li class='el-icon-d-arrow-right'></li>
                </div>
        </div>
        <!-- 户型 -->
        <div class="picCon">
           <div class="picWrap">
                <div  @mouseenter="mouseover"  @mouseleave="mouseleave" class="butt" v-show='butShow'>
            <li class='el-icon-arrow-left' @click='clickLeft'></li>
             <li class='el-icon-arrow-right' @mouseenter="mouseover"  @mouseleave="mouseleave" @click='clickRight'></li>
        </div>
                <dl  @mouseenter="mouseover"  @mouseleave="mouseleave" :class='dl'>
                <dd v-for="(hou, hoIndex) in houseList" :key = 'hoIndex' >
                    <div class="hImg">
                        <img :src= hou.img alt="">
                    </div>
                    <div class="hShow">
                        <span> {{ hou.name }} </span>
                        <span> {{ hou.size }} </span>
                    </div>
                   
                    <div class="hBut"> 约{{ hou.pic  }} 万</div>
                 <div class="button" @click='getPic'>
                     <el-button size="mini">点击获取详细户型分析与资料
                         <li class= 'el-icon-d-arrow-right'></li>
                     </el-button>
                </div>
                </dd>
            </dl>
   
           </div>
        </div>
    
    </div>
</template>


<script>
export default {
    data () {
        return {
            dl: null,
            butShow: null,
            houseList: [
                {
                    img: require('../../../assets/picture/house1.jpg'),
                    name: '合院别墅',
                    size:  ' 三居 93㎡',
                    pic: 260.40,
                },
                  {
                    img: require('../../../assets/picture/house2.jpg'),
                    name: '合院别墅',
                    size:  ' 三居 103㎡',
                    pic: 288.40,
                },
                  {
                    img: require('../../../assets/picture/house3.jpg'),
                    name: '合院别墅',
                    size:  ' 三居 88㎡',
                    pic: 123.20,
                },
                  {
                    img: require('../../../assets/picture/house4.jpg'),
                    name: '合院别墅',
                    size:  ' 四居 93㎡',
                    pic: 179.20,
                }
            ]
        }
    },
    methods: {
        mouseover  () {
            this.butShow = true;
        },
        mouseleave () {
            this.butShow = null;
        },
        clickLeft () {
            this.dl = 'dlLeft';
        },
        clickRight () {
            this.dl = 'dlRight';
        },
        getPic () {
            this.$store.state.show = true;
            this.$store.state.cont1 = '查看户型分析与资料';
            this.$store.state.cont2 = '户型资料存在私密信息，通过短信发送';
            this.$store.state.place = '输入手机号';
            this.$store.state.button = '提交';
            this.$store.state.butTop = '为保证信息能够成功接收，请填写正确的手机号';
        }
    }
}
</script>

<style lang="less" scoped>
 @import '../../../assets/webLess/ZhouTai/ShowPic.less';
</style>