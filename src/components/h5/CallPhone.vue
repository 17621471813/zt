<template>
    <div class="call">
        <div class="top">
            <div class="toLeft">
           <a href="tel:400-666-6666">
                  <p>400-666-6666</p>
              <p>免费咨询售楼处,了解更多信息</p>
               <div class="ph">
                <li class='el-icon-phone'></li>
            </div>
           </a>
            </div>
        </div>
        <div class="bottom">
            <div class="botLeft">
                <li class='el-icon-chat-dot-square'></li>
                <span @click='makePeo'>预约咨询师</span>
            </div>
            <div class="botRig">
                <li class='el-icon-truck'></li>
                <span @click='makeCar' >预约管家式专车服务</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        makePeo () {
             this.$store.state.fix = true;
              this.$store.state.tit1 = '专业咨询师';
              this.$store.state.tit2 = '预约专业咨询师';
              this.$store.state.word = '一键通知';
        },
        makeCar () {
              this.$store.state.fix = true;
              this.$store.state.tit1 = '管家式专车接送';
              this.$store.state.tit2 = '售楼处将为您提供预约管家专车式接送';
              this.$store.state.word = '一键预约'
        }
    }
}
</script>

 <style lang="less" scoped>
   @import './../../assets/h5less/CallPhone.less';
  </style>