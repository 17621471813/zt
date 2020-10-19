<template>
    <div class="PhoneNav">
        <div class="nav_top">
            <span>
                <li class='el-icon-office-building'></li>
                州泰地产</span>
            <span><li class='el-icon-phone-outline'></li>4006666666</span>
        </div>
        <div class="pnav">
            <ul>
                <li @click='liClick(index)'  v-for="(item, index) in navList" :key='index'  >
                 <a :class="{'liCor': cor==index}" :href="herf"> {{ item}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            herf: '',
            cor: 0,
            navList: ['楼盘', '动态', '户型', '点评', '配套'],
        }
    },
    methods: {
        liClick (index) {
            this.cor = index;
            this.herf = '#'+ index;
        }
    }
}
</script>

 <style lang="less" scoped>
   @import './../../assets/h5less/PhoneNav.less';
  </style>