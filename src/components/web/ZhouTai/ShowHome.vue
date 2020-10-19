<template>
    <div class="ShowHome">
      <!-- 图片轮播 -->
             <div class="block">
    <el-carousel trigger="click" height='500px'>
      <el-carousel-item v-for="(item, index) in picList" :key="index">
     <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
    <!-- 房源信息 -->
        <div class="information">
                <H6>【港中旅·和乐小镇售楼处】安吉地段、配套最好的景区别墅</H6>
                <div class="activity">
                    <span >活动</span>
                    <span>周末推出限时特惠专场</span>
                    <span @click='seeHome'>立即报名看房 <li class='el-icon-d-arrow-right'></li> </span>
                </div>
    <!-- 价格信息 -->
            <div class="inforPic">
                <span>{{ picture }}元/m²</span>
                <span>{{ picFlo }}  </span> <li class='el-icon-top'></li>
                <span @click ='getPri'>获取价格变化信息 <li class ='el-icon-d-arrow-right'></li> </span>
            </div>
    <!-- 按钮 -->
            <div class="buttDis">
                <el-row>
  <el-button size="small" plain v-for="(bot, num) in botList" :key='num'>{{ bot }}</el-button>
</el-row>
            </div>
            <div class="gps">
                <span>[湖州市安吉县] 灵峰度假区梅灵路与机场路交叉口西北角</span>
                <span>获取精确位置地图 <li class='el-icon-d-arrow-right'></li></span>
            </div>
          <div class="couCar">
                <!-- 优惠劵 -->
            <div class="coupon" @click='getCou'>
                <div class="couLeft">
                    <div class="couMon">10000元购房优惠券</div>
                    <div class="couTime">网络预约客户专享，10月2日截止</div>
                </div>
                <div class="couRight" >立即领取</div>
            </div>
            <!-- 专车接送 -->
             <div class="special" @click='getSpe'>
                <div class="speLeft">
                    <div class="speCar">VIP看房专车</div>
                    <div class="spePeo">专人专车，免费接送</div>
                </div>
                <div class="speRight">立即领取</div>
            </div>
   
          </div>
          <!-- 在手户型 -->
          <div class="houseType">
                 <dl>
                     <dt>在售户型</dt>
                     <dd v-for="( house, hIndex) in houseList" :key='hIndex'>
                         <span>{{ house.houName }}</span>
                         <span> {{ house.houSize }}㎡ </span>
                         <span> 约{{ house.houPic }}万 </span>
                         <span>（ {{ house.avePic }}/m² ）</span>
                         <span> {{ house.dealPic }}</span>
                     </dd>
                 </dl>
                 <div class="houNud" @click='getHou'>
                     点击了解全部户型及户型详细资料
                 </div>
             </div>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            picture: 14000,
            picFlo: '价格上涨',
            botList:['可托管','度假小镇','旅游资源丰富','配套已建好'],
            picList:[
                {
                    url: require('../../../assets/picture/pic1.jpg')
                },
                {
                    url: require('../../../assets/picture/pic2.jpg')
                },
                {
                    url: require('../../../assets/picture/pic3.jpg')
                },
                {
                    url: require('../../../assets/picture/pic4.jpg')
                },
                {
                    url: require('../../../assets/picture/pic5.jpg')
                },
                {
                    url: require('../../../assets/picture/pic6.jpg')
                },
                {
                    url: require('../../../assets/picture/pic7.jpg')
                }
            ],
            houseList:[
                {
                    houName: '合院别墅',
                    houSize: 93,
                    houPic: 260,
                    avePic: 28000,
                    dealPic: "查看户型成交底价"
                },
                 {
                    houName: '合院别墅',
                    houSize: 103,
                    houPic: 288,
                    avePic:  28000,
                    dealPic:  "查看户型成交底价"
                },
                 {
                    houName: '精装洋房',
                    houSize: 88,
                    houPic: 123,
                    avePic: 14000,
                    dealPic: "查看户型成交底价"
                },
               {
                    houName: '精装洋房',
                    houSize: 128,
                    houPic: 179,
                    avePic: 14000,
                    dealPic: "查看户型成交底价"
                }
            ]
        }
    },
    methods: {
        seeHome () {
            this.$store.state.show = true;
            this.$store.state.cont1 = '报名看房';
            this.$store.state.cont2 = '现在报名可享受活动优惠，名额有限，先到先得';
            this.$store.state.place = '输入手机号码,立即报名';
            this.$store.state.button = '立即报名';
        },
        getPri () {
            this.$store.state.show = true;
            this.$store.state.cont1 = '获取价格变化信息';
            this.$store.state.cont2 = '填写手机号，获取每日价格变动信息';
            this.$store.state.place = '输入手机号码,立即获取';
            this.$store.state.button = '立即获取';
        },
        getCou () {
              this.$store.state.show = true;
            this.$store.state.cont1 = '10000元购房优惠券';
            this.$store.state.cont2 = '10000元现金优惠券，限时领取';
            this.$store.state.place = '输入手机号码,立即领取';
            this.$store.state.button = '立即领取';
        },
        getSpe ()  {
             this.$store.state.show = true;
            this.$store.state.cont1 = '看房专车券';
            this.$store.state.cont2 = 'VIP看房专车，一对一免费接送，限时领取';
            this.$store.state.place = '输入手机号码,免费领取';
            this.$store.state.button = '立即领取';
        },
        getHou () {
              this.$store.state.show = true;
            this.$store.state.cont1 = '领取全部户型资料';
            this.$store.state.cont2 = '输入手机号，立即获取全部户型信息和资料';
            this.$store.state.place = '输入手机号';
            this.$store.state.button = '立即领取';
            this.$store.state.butTop = '户型资料会通过短信发送给你，请填写正确的手机号';
        }
    }
}
</script>



<style lang="less">
@import '../../../assets/webLess/ZhouTai/ShowHome.less';
// @import '../../../assets/webLess/ZhouTai/ShowHomeH5.less';
</style>
