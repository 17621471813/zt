<template>
    <div class="houseType" id='2' >
         <dl>
             <dt>在售户型</dt>
             <dd v-for="(item, index) in houseSell" :key='index'>
                 <span>{{item.size }}平户型</span>
                 <span>{{item.size }}㎡</span>
                 <span>约{{ item.pri }}万</span>
                 <span>({{ item.ave }}/㎡)</span>
             </dd>
         </dl>
         <div class="expound">
             以上价格为售楼处公开报价,输入手机号码查询成交底价
         </div>
         <div @click = 'check' class="checkBot">查底价</div>
    </div>
</template>


<script>
export default {
    data () {
        return{
            houseSell: [
                {
                    size: 88,
                    pri: 123.2,
                    ave: 14000,
                },
                {
                    size: 120,
                    pri: 168,
                    ave: 14000,
                },
                {
                    size: 103,
                    pri: 257.5,
                    ave: 25000,
                }
            ]
        }
    },
    methods: {
        check () {
              this.$store.state.fix = true;
              this.$store.state.tit1 = '底价查询';
              this.$store.state.tit2 = '查询售楼处最新成交底价';
              this.$store.state.word = '确定'
        }
    }
}
</script>


 <style lang="less" scoped>
   @import './../../assets/h5less/HouseType.less';
  </style>