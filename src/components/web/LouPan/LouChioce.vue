<template>
    <div class="chioce">
        <div class="chTop">
            <span>新房分析师</span>
            <li class='el-icon-arrow-right'></li>
            <span>广州楼盘</span>
        </div>
        <!-- 区域 -->
        <div class="region">
            <dl v-for="(item, index) in findList" :key='index'>
                <dt>{{ item.name}}</dt>
                <dd :class="{'dCor': isCor==word}" @click='click(word)' v-for="(son, word) in item.children" :key='word'>
                    {{ son }}
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
             isCor: '',
            findList: [
                {
                    name: "区域",
                    children:['不限','荔湾区', '越秀区' , '珠海区', '天河区','白云区', '黄浦区' , '番禺区', '花都区','南沙区', '从化区' , '增城区']
                },{
                    name: '总价',
                    children: ['不限','<100万','100-120万', '120-150万', '150-200万', '200-300万', '300-500万', '>500万'] 
                },
                {
                    name: '类型',
                    children: ['不限','住宅','别墅','商住','商铺','写字楼']
                },
                {
                    name: '户型',
                    children:['不限','一居','二居','三居','四居','五居','六居','七居','八居','九居','十居']
                },
                {
                    name: '特色',
                    children: ['不限','自然山水','配套成熟','养老地产','品牌房企','一线海景','板楼','刚需住宅','幼儿园','投资地产','不限购','LOFT','小户型','低总价']
                },
                {
                    children:['有地铁','改善宜居','洋房','紧凑实用','有公园','名校环绕','位置好','单合同','准现房']
                }
            ]
        }
    },
    methods: {
        click (word) {
            this.isCor = word
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../assets/webLess/LouPan/LouChioce.less';
</style>