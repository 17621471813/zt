<template>
    <div class="data">
          <div class="dealDa">成交数据</div>
          <div class="dealNews">
              <div class="newsL">
                  <li class="el-icon-s-promotion"></li><span>成交快报</span>
              </div>
              <div class="newR">
              <div class="newCon">
                 <span>{{ suName }}</span>
                 <span>{{ suPhone }}</span>
                 <span>{{  surRgion}}</span>
                 <span>{{ suDate }}</span>
                 <span>{{ suSu}}</span>
              </div>
              
              </div>
          </div>
          <!-- 图表 -->
          <div class="eartchs">
              <div id ="earLeft"></div>
              <div class="earRig">
                  <dl>
                      <dt>
                          <span>日期</span>
                          <span>成交套数</span>
                          <span>平均成交总价</span>
                      </dt>
                      <dd v-for="(ite, index) in dataArr" :key='index'>
                          <span>{{ ite.time }}</span>
                          <span> {{ ite.houNum }}</span>
                          <span>{{ ite.houPic }}</span>
                      </dd>
                  </dl>
              </div>
          </div>
          <div class="bott" @click="getQue">
                <el-button size="mini" plain>获取最新楼盘成交信息与价格</el-button>
          </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            suName: '',
            suPhone: '',
             surRgion: '',
              suDate: '',
               suSu: '',
            dataArr: [
                {
                    time: '9月26',
                    houNum: 0 ,
                    houPic: ''
                },
                  {
                    time: '9月25',
                    houNum: 2 ,
                    houPic: '229万'
                },
                  {
                    time: '9月24',
                    houNum: 0 ,
                    houPic: ''
                },
                  {
                    time: '9月23',
                    houNum: 5 ,
                    houPic: '207万'
                },
                  {
                    time: '9月22',
                    houNum: 3 ,
                    houPic: '135万'
                }
            ],
            dataList:[
                {
                  name: '汪聪',
                  phone: 17621471813,
                  region: '【浙江省 杭州市】',
                  date: '09月22日',
                  sucss: '购房成功'
                },
                  {
                  name: '余晓静',
                  phone: 18621471813,
                  region: '【浙江省 杭州市】',
                  date: '09月22日',
                  sucss: '购房成功'
                },
                  {
                  name: '俄罗斯',
                  phone: 15321471813,
                  region: '【浙江省 杭州市】',
                  date: '09月22日',
                  sucss: '购房成功'
                },
                  {
                  name: '杨恒',
                  phone: 12421471813,
                  region: '【浙江省 杭州市】',
                  date: '09月22日',
                  sucss: '购房成功'
                }
            ]
        }
    },
    mounted () {
            this.setIn();
            this.drawLine();
    },
    methods: {
       setIn () {
                let i = 0;
            this.suName = this.dataList[i].name.substr(0,1)+ '*'; 
        setInterval(() => {
       i++;
       if(i === this.dataList.length ){
           i = 0;
       }
       this.suName = this.dataList[i].name.substr(0,1)+ '*'; 
       this.suPhone = this.dataList[i].phone.toString().substr(0,3) + '****' + this.dataList[i].phone.toString().substr(7);
     
       this.surRgion = this.dataList[i].region;
       this.suDate = this.dataList[i].date;
       this.suSu = this.dataList[i].sucss;
     
        }, 1000);
    },
    drawLine () {
        let myChart = this.$echarts.init(document.getElementById('earLeft'));
        let option = {
         legend: {
             data: ['djdkdj']
         },
            color: ['#007aff'],
            grid: {
                left: '70px',
                // top: '30px'
            },
    xAxis: {
        type: 'category',
        data: ['4月', '5月', '6月', '7月', '8月', '9月']
    },
    yAxis: {
        scale: true,
        type: 'value',
        interval: 500,
        min: 12000,
        max: 16000
    },
    series: [{
        data: [14057, 14960, 13754, 14600, 14359, 14514],
        type: 'line'
    }],
};
   myChart.setOption(option)
    },
    getQue () {
             this.$store.state.show = true;
            this.$store.state.cont1 = '查询最新成交信息与价格';
            this.$store.state.cont2 = '输入手机号，立即获取最新信息';
            this.$store.state.place = '输入手机号';
            this.$store.state.button = '提交';
            this.$store.state.butTop = '最新信息会通过短信发送给您，请填写正确的手机号';
    }
    }
}
</script>

<style lang="less" scoped>
 @import '../../../assets/webLess/ZhouTai/ShowEar.less';
</style>