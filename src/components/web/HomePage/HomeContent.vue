<template>
    <div class="homeCont">
             <public-fixed />
            <cont-play />
            <cont-news :house='house1' :houseName='houseName1' />
            <cont-news :house='house2' :houseName='houseName2' />
            <cont-news :house='house3' :houseName='houseName3' />
    </div>
</template>

<script>

 import ContPlay from '@/components/web/HomePage/ContPlay.vue'
  import ContNews from '@/components/web/HomePage/ContNews.vue'
    import PublicFixed from '@/components/web/public/PublicFixed.vue'
export default {
   components: {
       ContPlay,
       ContNews,
       PublicFixed
   },
   data () {
       return {
           houseName1 : '小户型',
           houseName2: '杭州热门住宅',
           houseName3: '投资公寓',
              house1: [
            {
              img:require('../../../assets/picture/home1.jpg'),
              hState: '在售' ,
              hName: '春天学府',
              hAdress: '杭州市临安区',
              hPic: 18000,
              hNew1: '毛坯',
              hNew2: '高层',
            },
              {
              img:require('../../../assets/picture/home2.jpeg'),
              hState: '在售' ,
              hName: '锦上桃源',
              hAdress: '杭州市拱墅区',
              hPic: 31000,
              hNew1: '精装',
              hNew2: '酒店式公寓',
            },
              {
              img:require('../../../assets/picture/home3.png'),
              hState: '在售' ,
              hName: '宋都如意溪湖',
              hAdress: '杭州市临安区',
              hPic: 17500,
              hNew1: '毛坯',
              hNew2: '高层,小高层',
            },
              {
              img:require('../../../assets/picture/home4.jpg'),
              hState: '在售' ,
              hName: '旭辉东原·吴越府',
              hAdress: '杭州市临安区',
              hPic: 15800,
              hNew1: '毛坯',
              hNew2: '高层,联排',
            },
              {
              img:require('../../../assets/picture/home5.jpg'),
              hState: '在售' ,
              hName: '碧桂园玖晟府',
              hAdress: '杭州市临安区',
              hPic: 15000,
              hNew1: '毛坯',
              hNew2: '高层',
            },
              {
              img:require('../../../assets/picture/home6.jpg'),
              hState: '在售' ,
              hName: '越秀·湖山悦',
              hAdress: '杭州市临安区',
              hPic: 17500,
              hNew1: '毛坯',
              hNew2: '高层',
            }
          ],
          house2: [
            {
              img:require('../../../assets/picture/home11.jpg'),
              hState: '在售' ,
              hName: '春天学府',
              hAdress: '杭州市临安区',
              hPic: 18000,
              hNew1: '毛坯',
              hNew2: '高层',
            },
              {
              img:require('../../../assets/picture/home22.jpg'),
              hState: '在售' ,
              hName: '锦上桃源',
              hAdress: '杭州市拱墅区',
              hPic: 31000,
              hNew1: '精装',
              hNew2: '酒店式公寓',
            },
              {
              img:require('../../../assets/picture/home33.jpg'),
              hState: '在售' ,
              hName: '宋都如意溪湖',
              hAdress: '杭州市临安区',
              hPic: 17500,
              hNew1: '毛坯',
              hNew2: '高层,小高层',
            },
              {
              img:require('../../../assets/picture/home44.jpg'),
              hState: '在售' ,
              hName: '旭辉东原·吴越府',
              hAdress: '杭州市临安区',
              hPic: 15800,
              hNew1: '毛坯',
              hNew2: '高层,联排',
            },
              {
              img:require('../../../assets/picture/home55.jpg'),
              hState: '在售' ,
              hName: '碧桂园玖晟府',
              hAdress: '杭州市临安区',
              hPic: 15000,
              hNew1: '毛坯',
              hNew2: '高层',
            },
              {
              img:require('../../../assets/picture/home66.jpg'),
              hState: '在售' ,
              hName: '越秀·湖山悦',
              hAdress: '杭州市临安区',
              hPic: 17500,
              hNew1: '毛坯',
              hNew2: '高层',
            }

          ],
          house3: [
            {
              img:require('../../../assets/picture/home111.jpeg'),
              hState: '在售' ,
              hName: '春天学府',
              hAdress: '杭州市临安区',
              hPic: 18000,
              hNew1: '毛坯',
              hNew2: '高层',
            },
              {
              img:require('../../../assets/picture/home222.jpg'),
              hState: '在售' ,
              hName: '锦上桃源',
              hAdress: '杭州市拱墅区',
              hPic: 31000,
              hNew1: '精装',
              hNew2: '酒店式公寓',
            },
              {
              img:require('../../../assets/picture/home333.jpg'),
              hState: '在售' ,
              hName: '宋都如意溪湖',
              hAdress: '杭州市临安区',
              hPic: 17500,
              hNew1: '毛坯',
              hNew2: '高层,小高层',
            },
              {
              img:require('../../../assets/picture/home444.jpg'),
              hState: '在售' ,
              hName: '旭辉东原·吴越府',
              hAdress: '杭州市临安区',
              hPic: 15800,
              hNew1: '毛坯',
              hNew2: '高层,联排',
            },
              {
              img:require('../../../assets/picture/home555.jpg'),
              hState: '在售' ,
              hName: '碧桂园玖晟府',
              hAdress: '杭州市临安区',
              hPic: 15000,
              hNew1: '毛坯',
              hNew2: '高层',
            },
              {
              img:require('../../../assets/picture/home666.jpeg'),
              hState: '在售' ,
              hName: '越秀·湖山悦',
              hAdress: '杭州市临安区',
              hPic: 17500,
              hNew1: '毛坯',
              hNew2: '高层',
            }
          ]

          
       }
   }
}
</script>
<style lang="less" scoped>
   .homeCont {
       position: relative;
       width: 80%;
       margin: 0 auto;
       top: 100px;
   }
</style>
