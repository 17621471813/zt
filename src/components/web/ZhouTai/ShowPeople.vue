<template>
    <div class="people">
        <div class="proCon">
            <span>置业顾问</span>
            <span>您可以选择以下置业顾问为您提供1对1咨询服务</span>
        </div>
        <div  @mouseenter="over"  @mouseleave="leave" class="boot" v-show='isShow'>
            <li class='el-icon-arrow-left' @click='clickLe'></li>
             <li class='el-icon-arrow-right' @mouseenter="over"  @mouseleave="leave" @click='clickRi'></li>
        </div>
        <div class="peoGo" :class="isPeo" @mouseenter="over"  @mouseleave="leave" >
        

          
                  <div  v-for="(peo, nub) in peoList" :key="nub" class="wrap">
                  <div class="wrap_left"><img  :src=peo.url alt=""></div>
        
                      <ul >
                          <li>{{ peo.name }}</li>
                          <li> {{ peo.work}}</li>
                           <li> 服务满意度:&emsp;&nbsp;<span>{{ peo.sati}}%</span></li>
                          <li> 服务人数:&emsp;&emsp;&nbsp;<span>{{ peo.numb}}人</span> </li>
                          <li> 平均响应速度:<span> {{ peo.speed }}分钟</span></li>
                      </ul>
                  <div class="warp_rig" @click='getAsk'>
                       <el-button size="mini">向他咨询</el-button>
                  </div>
           
              </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isShow: false,
            isPeo: false,
            peoList: [
                {
                  url: require('../../../assets/picture/zx.jpg'),
                  name : '张翔',
                  work: '高级置业顾问',
                  sati: 96,
                  numb: 226,
                  speed: 11,
                },
                  {
                  url: require('../../../assets/picture/lz.jpg'),
                  name : '吕震',
                  work: '高级置业顾问',
                  sati: 91,
                  numb: 326,
                  speed: 11
                },  
                  {
                  url: require('../../../assets/picture/jc.jpg'),
                  name : '赵欲兴',
                  work: '高级置业顾问',
                  sati: 91,
                  numb:222,
                  speed: 17
                },
                 {
                  url: require('../../../assets/picture/wm.jpg'),
                  name : '吕河山',
                  work: '高级置业顾问',
                  sati: 91,
                  numb:222,
                  speed: 17
                }
            ]
        }
    },
    methods:{
        over () {
               this.isShow = true;
        },
        leave () {
            this.isShow = false;
        },
        clickLe () {
            this.isPeo = 'peoL';
        },
        clickRi () {
            this.isPeo = "peoR";
        },
        getAsk () {
              this.$store.state.show = true;
            this.$store.state.cont1 = '咨询置业顾问';
            this.$store.state.cont2 = '请留下您的手机号，置业顾问会马上联系您';
            this.$store.state.place = '输入手机号';
            this.$store.state.button = '立即领取';
            this.$store.state.butTop = '请填写正确的手机号，否则无法联系到您';
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../../assets/webLess/ZhouTai/ShowPeople.less';
</style>