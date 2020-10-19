

<template>
    <div class="position">
        <div class="pis_button">
            <div class="pis_left">
                <img :src="imgUrl" alt="">
            </div>
             <div class="pis_con">
                <div class='pis_con_top'>【港中旅·和乐小镇售楼处】安吉地段、配套最好的景区别墅</div>
                <div class='pis_con_bottom'>组团砍价活动正在进行，组团成功，全体参与客户可享受团购价</div>
            </div>
            <div class="pis_rig">
                <div class='inputTop'>报名团购，组团成功后短信通知您</div>
                <div class="input">
                   <el-input type='text' maxlength="11" onkeyuo="this.value=this.value.replace(/\D/g,'')" v-model="input" placeholder="输入手机号码"></el-input>    
                   <el-button size="small">立即报名</el-button>
                </div>
                <div class="phone">售楼处电话: <span>400-666-6666</span></div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data () {
        return {
            input: '',
           imgUrl: require('../../../assets/picture/posi1.png')
        }
    }
}
</script>

<style lang="less">
 @import '../../../assets/webLess/ZhouTai/ZhouFooter.less';
</style>