<template>
    <div class="phoneFooter">
        <div class="callPh">
            <a href="tel:400-666-6666">
                <li class='el-icon-phone-outline'></li>
            <p>售楼处热线</p>
            </a>
        </div>
        <div @click='next' class="next">
            <li class='el-icon-timer'></li>
            预约看房
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        next () {
              this.$store.state.fix = true;
              this.$store.state.tit1 = '预约看房';
              this.$store.state.tit2 = '专车接送，省心更省钱';
              this.$store.state.word = '立即预约'
        }
    }
}
</script>


<style lang="less" scoped>
  .phoneFooter{
      position: fixed;
      bottom: 0;
      z-index: 111;
      background: white;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: .3rem 0;
      .callPh{
          width: 30%;
          border-right: 1px solid rgb(173, 167, 167);
          a{
              width: 100%;
              text-decoration: none;
              color: black;
              text-align: center;
              li{
                  margin-left: 45%;
                   color:rgb(48, 107, 196);
                   font-weight: 900;
                   font-size: 20px;
              }
              p{
                  font-size: 12px;
                  font-weight: 700;
              }
          }
      }
      .next{
          width: 30%;
          background:rgb(48, 107, 196);
          margin-right: .5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          color: white;

      }
  }
</style>