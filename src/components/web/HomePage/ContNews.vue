<template>
    <div class="news">
      <div class="new_nav">
        <div class="navLeft">{{ houN }}</div>
        <div class="navRight" @click='more'>查看更多 
          <li class = 'el-icon-arrow-right'></li>
        </div>
      </div>
      <div class="new_cont">
              <dl>
                <dd v-for="(item, index) in mj " :key="index+'1'" >
                  <div class="cont_img"><img  @mouseenter = 'bigImg(index)' @mouseleave='smallImg' :class = "{'bigImg':index ==isClass}" :src=item.img alt=""></div>
                  <div class="house_name">
                    <span>{{item.hState}}</span>
                    <span>{{ item.hName }}</span>
                    <span>{{ item.hAdress}}</span>
                    </div>
                    <div class="house_money">
                      <span>均价：</span>
                      <span>{{item.hPic}}元/m²</span>
                      </div>
                      <div class="house_news">
                        <span>{{item.hNew1}}</span>
                        <span>{{ item.hNew2}}</span>
                        <span>查低价</span>
                      </div>
                  
                </dd>
              </dl>
              
      </div>
    </div>
</template>

<script>
export default {
  props:['house','houseName'],
  data () {
    return {
      isClass: null,
      mj: '',
    }
  },
  methods: {
      bigImg (index) {
        this.isClass = index;
      },
      smallImg () {
        this.isClass = null;
      },
      more () {
        this.$router.push({path:'/HomePage/HomeContent2'})
      }
  },
  computed: {
          houN () {
            return this.houseName;
          }
  },
  mounted () {
    this.mj = this.house;

  }
}
</script>

<style lang="less">
 @import '../../../assets/webLess/HomePage/ContNews.less';
</style>
