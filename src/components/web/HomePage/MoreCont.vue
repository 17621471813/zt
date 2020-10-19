<template>
    <div class="more_cont">
        <dl class="dlwrap">
            <dd class="ddwrap" v-for="(item, index) in moreCont " :key='index'>
                <div class="img">
            <img :src= item.img alt="">
        </div>
        <div class="cont_news">
            <div class="news_top">
                <span>{{ item.newsT1}}</span>
                <span>{{ item.newsT2}}</span>
            </div>
            <div class="news_adress">
               {{item.newsAdr}}
            </div>
            <div class="news_info">
                <span>{{ item.newsInfo1}}</span>
                <span>{{ item.newsInfo2}}</span>
            </div>
            <dl>
                <dt>今日房源</dt>
                <dd v-for="(pic, picex ) in item.children" :key='picex'>
                    <span>{{pic.houseInfo1}}</span>
                    <span>{{pic.houseInfo2}}㎡</span>
                    <span>约{{pic.houseInfo3}}万({{pic.houseInfo4}}/㎡)</span>
                </dd>
            </dl>
        </div>
        <div class="newest">
            <div class="newest_top">最新动态</div>
            <div class="newest_cont">
                <span>{{ item.slc}}</span>{{item.word}}
                <div class="time">{{item.time}}</div>
            </div>
        </div>
            </dd>
        </dl>
    </div>
</template>


<script>
export default {
    data () {
        return {
            moreCont: [
                {
                    img: require('../../../assets/picture/home1.jpg'),
                    newsT1: '在售',
                    newsT2: '春天学府',
                    newsAdr: '[杭州市临安区]城中街与锦天路交叉口',
                    newsInfo1: '毛坯',
                    newsInfo2: '高层',
                    slc: '【春天学府售楼处】',
                    time: '2020年1月20',
                    word:'：大城西，市中心，第一名校学区房，在售141方五房大平层，均价18000元，不限购，地铁直达安未来科技城！详情请致电咨询！',
                    children: [
                        {
                            houseInfo1: '两室两厅',
                            houseInfo2: 141,
                            houseInfo3: 254,
                            houseInfo4: 18000
                        }
                    ]

                },
                   {
                    img: require('../../../assets/picture/home2.jpeg'),
                    newsT1: '在售',
                    newsT2: '锦上桃源(公寓)',
                    newsAdr: '杭州市拱墅区] 北秀街与云锦路交叉口',
                    newsInfo1: '精装',
                    newsInfo2: '酒店式公寓',
                    slc: '【锦上桃源售楼处】',
                    time: '2020年2月20',
                    word: '：现加推9、10、12、14号楼，在售户型41平复式公寓，仅限40套，均价31000元/平。具体一房一价。更多楼盘详情请致电咨询！',
                    children: [
                        {
                            houseInfo1: '公寓复式',
                            houseInfo2: 41,
                            houseInfo3: 127,
                            houseInfo4: 31000
                        }
                    ]

            
        },
                   {
                    img: require('../../../assets/picture/home4.jpg'),
                    newsT1: '在售',
                    newsT2: '旭辉东原·吴越府',
                    newsAdr: '[杭州市临安区] 万马路与福兴街交叉口',
                    newsInfo1: '毛坯',
                    newsInfo2: '高层,联排',
                    slc: '【旭辉东原吴越府售楼处】',
                    time: '2020年3月20',
                    word: '：市中心，亚运红盘，地铁旁现房，即买即住、上名校，少量129/139/186方舒适四房，单价仅15800元/㎡，更多详情，欢迎来电详询。',
                    children: [
                        {
                            houseInfo1: '四室两厅',
                            houseInfo2: 129,
                            houseInfo3: 204,
                            houseInfo4: 15800
                        },
                         {
                            houseInfo1: '四室两厅',
                            houseInfo2: 129,
                            houseInfo3: 220,
                            houseInfo4: 15800
                        },
                         {
                            houseInfo1: '联排别墅',
                            houseInfo2: 186,
                            houseInfo3: 521,
                            houseInfo4: 28000
                        }
                    ]

            
        },
                   {
                    img: require('../../../assets/picture/home5.jpg'),
                    newsT1: '在售',
                    newsT2: '碧桂园玖晟府',
                    newsAdr: '[杭州市临安区] 16号线地铁九州街站',
                    newsInfo1: '毛坯',
                    newsInfo2: '高层',
                    slc: '【碧桂园玖晟府售楼处】',
                    time: '2020年4月20',
                    word: '：未来科技城，地铁口50米、宝龙广场旁、对门亚运分会场，杭州热销神盘！！现加推15号楼，在售主力户型125-140平，均价16000元/平，更多详情，欢迎看电售楼部，免费接送看房！',
                    children: [
                        {
                            houseInfo1: '四房两厅',
                            houseInfo2: 140,
                            houseInfo3: 210,
                            houseInfo4: 15000,
                        },
                          {
                            houseInfo1: '三房两厅',
                            houseInfo2: 125,
                            houseInfo3: 188,
                            houseInfo4: 15000,
                        }
                    ]
        },
                   {
                    img: require('../../../assets/picture/home6.jpg'),
                    newsT1: '在售',
                    newsT2: '越秀·湖山悦',
                    newsAdr: '[杭州市临安区] 滨湖新城',
                    newsInfo1: '毛坯',
                    newsInfo2: '高层',
                    slc: '【越秀·湖山悦】',
                    time: '2020年5月20',
                    word: '：落子滨湖新城核心，临湖而筑，直面青山湖一线湖景，是临安乃至杭州难得一见的高端纯住品小区。在售128-165㎡湖景四房，均价17500元/平左右，准现房，即买即入住！',
                    children: [
                        {
                            houseInfo1: '四房两厅',
                            houseInfo2: 128,
                            houseInfo3: 224,
                            houseInfo4: 17500
                        },
                        {
                            houseInfo1: '四房两厅',
                            houseInfo2: 139,
                            houseInfo3: 243,
                            houseInfo4: 17500
                        },
                        {
                            houseInfo1: '四房两厅',
                            houseInfo2: 165,
                            houseInfo3: 289,
                            houseInfo4: 17500
                        }
                    ]

        },
                   {
                    img: require('../../../assets/picture/more2.jpeg'),
                    newsT1: '在售',
                    newsT2: '城中府',
                    newsAdr: '[杭州市临安区] 锦城街道城中街延伸段',
                    newsInfo1: '精装',
                    newsInfo2: '高层',
                    slc: '【城中府售楼处】',
                    time: '2020年6月20',
                    word: '：当前在售8号楼（楼王），主力户型103-136平，均价18000元/平，实景现房，即买即享，不限购入住杭州第十区，详情请致电咨询！',
                    children: [
                        {
                            houseInfo1: '三房两厅',
                            houseInfo2: 103,
                            houseInfo3: 185,
                            houseInfo4: 18000
                        },
                          {
                            houseInfo1: '三房两厅',
                            houseInfo2: 117,
                            houseInfo3: 211,
                            houseInfo4: 18000
                        },
                          {
                            houseInfo1: '四房两厅',
                            houseInfo2: 136,
                            houseInfo3: 245,
                            houseInfo4: 18000
                        }
                    ]

        },
                   {
                    img: require('../../../assets/picture/more3.jpg'),
                    newsT1: '在售',
                    newsT2: '融创·杭州湾壹号',
                    newsAdr: '[宁波市慈溪市] 金源大道和滨海二路交叉口',
                    newsInfo1: '精装',
                    newsInfo2: '高层',
                    time: '2020年7月20',
                    word: '融创杭州湾壹号，杭州湾新区里的“当红炸子鸡”，纯新品首发，高层90平左右，精装发售',
                    children: [
                        {
                            houseInfo1: '三房两厅',
                            houseInfo2: 90,
                            houseInfo3: 117,
                            houseInfo4: 13000,
                        },
                         {
                            houseInfo1: '三房两厅',
                            houseInfo2: 94,
                            houseInfo3: 122,
                            houseInfo4: 13000,
                        }
                    ]
        },
                   {
                    img: require('../../../assets/picture/more4.jpg'),
                    newsT1: '在售',
                    newsT2: '卓越·杭州湾蔚蓝海岸',
                    newsAdr: '[宁波市慈溪市] 杭州湾大道与滨海五路交汇处',
                    newsInfo1: '精装',
                    newsInfo2: '高层',
                    time: '2020年8月20',
                    word: '卓越蔚蓝海岸是杭州湾的纯新品，主力户型75-125平，百万方TOD城市都会综合体，现正认筹中！',
                    children: [
                        {
                            houseInfo1: '两房两厅',
                            houseInfo2: 75,
                            houseInfo3: 94,
                            houseInfo4: 12500
                        },
                         {
                            houseInfo1: '三房两厅',
                            houseInfo2: 90,
                            houseInfo3: 113,
                            houseInfo4: 12500
                        },
                         {
                            houseInfo1: '三房两厅',
                            houseInfo2: 110,
                            houseInfo3: 138,
                            houseInfo4: 12500
                        }
                    ]
         }
            ]
    }
}
}
</script>

<style lang="less">
 @import '../../../assets/webLess/HomePage/MoreCont.less';
</style>