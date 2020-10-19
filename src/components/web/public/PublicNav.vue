<template>
    <div class="nav">
        
        <div class="navLeft">
            <router-link to='/'><img src="../../../assets/picture/zt.jpg" alt=""></router-link>
        </div>
        <div class="hz" v-if='city'>
            <div class="hz_top" @mouseenter="enter" @mouseleave='lea'>
                <span>{{adress}}</span>
                <li class='el-icon-arrow-down'></li>
            </div>
            <div class="hz_bottom" @mouseenter="ent"  @mouseleave='lea' v-if='cityDeve'>
                <div class="chCity">选择城市</div>
                <div  @mouseenter='mouseGuang' @click="gClick" ref='ref' @mouseleave="leaveGuang"  :class="{'adress': adGuang}">{{ guang}}</div>
                <div  @mouseenter='mouseHang'  @click="hClick" ref='ref'  @mouseleave="leaveHang" :class="{'adress': adHang}">{{ hang }}</div>
            </div>
        </div>
        <ul class='navCont'  >
            <li  @mouseover='mouseover(index)' @mouseleave='mouseleave(index)' v-for="(item, index) in NavList " :class="{'conCor': index==isCor}" :key="index" >
                <router-link class='rou' :class="{'routCor': isTrue == index}" :to="{name: item.to}"> {{ item.name }}</router-link>
            </li>
        </ul>
        <div class="navRig"> 
            <li class ='el-icon-phone-outline'> 
            <span>咨询路线:&nbsp;&nbsp;&nbsp;400-666-6666</span>
            </li>
            </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            adGuang: '',
            adHang: '',
            guang: '广州',
            hang: '杭州',
            adress: '杭州',
            cityDeve: false,
            city: true,
            isCor: null,
            isTrue: null,
            NavList: [
                {
                    name: '首页',
                    to: 'HomePage'
                },
                {
                    name: '楼盘查询',
                    to: 'LouPan'
                },
                {
                    name: '查底价',
                    to: 'CheckPrice'
                },
                {
                    name: '咨询师',
                    to: 'AnaLyst'
                },
                {
                    name: '关于我们',
                    to: 'AboutAs'
                }
            ]
        }
    },
    methods:{
        mouseover (index) {
            this.isCor = index;
            this.isTrue = index;
        },
        mouseleave (index) {
             this.isCor = null;
             this.isTrue = null;
        },
        enter () {
                this.cityDeve = true;
        },
        lea () {
               let that = this;
             window.timer =  setTimeout(function () {
                   that.cityDeve = false;
              },500)
       
        },
        ent () {
            clearTimeout(window.timer);
            this.cityDeve = true;
        },
        mouseGuang () {
              this.adGuang = true ;
        },
        leaveGuang () {
            this.adGuang = false;
             if (this.adress === this.hang){
            this.adHang = true;
        };
        },
        mouseHang () {
            this.adHang = true;
        },
        leaveHang () {
            this.adHang = false;
             if (this.adress === this.guang){
            this.adGuang = true;
        }
        },
        hClick () {
            this.adress = this.hang;
            this.cityDeve = false;
        },
        gClick () {
            this.adress = this.guang;
            this.cityDeve = false;
        }
    },
    created () {
        if(this.$route.fullPath === '/'){
            this.city = false;
        }
    },
    mounted () {
        if (this.adress === this.hang){
            this.adHang = true;
        };
        if (this.adress === this.guang){
            this.adGuang = true;
        }
        
    }
}
</script>

<style lang="less">
 @import '../../../assets/webLess/ZhouTai/NavTop.less';
// @import '../../../assets/webLess/ZhouTai/NavTopH5.less';
</style>