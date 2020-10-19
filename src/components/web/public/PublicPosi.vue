<template>
 <div   class="box"  v-show='fixShow'>
     <div class="wraCor"></div>
        <div class="fixed" >
       <div  class="cancel"  @click='clickNone'><li class='el-icon-close'></li></div>
        <div class="fix_top">{{ cont }}</div>
        <div class="fix_con">{{ $store.state.cont2}}</div>
       <input class = 'input' v-model='input' :placeholder="placeholder" type="text">
       <div class="butTop">{{ $store.state.butTop}}</div>
       <button @click='getPhone'  class='button'>{{ $store.state.button}}</button>
   </div>
 </div>
</template>


<script>
export default {
    data () {
       return {
              input: '',
              timer: '',
       }
    },
    computed: {
        fixShow () {
            return this.$store.state.show;
        },
        placeholder () {
             return this.$store.state.place;
        },
        cont () {
            return this.$store.state.cont1;
        }

    },
    methods: {
        clickNone () {
            this.$store.state.show = false;
             this.$store.state.butTop = '';
        },
        getPhone () {
            let time = new Date(),
                Y = time.getFullYear(),
                M = time.getMonth() + 1,
                D = time.getDate(),
                h = time.getHours(),
                m = time.getMinutes(),
                newTime = Y + '.' + M +'.'+ D + '.' + h + ':' + (m <= 10 ? ( m= 0+''+m) :m );
                this.$store.state.time = newTime;
               this.timer = newTime + ':' + this.input;
            //   let name = this.timer;
             let Ndate = new Date();
             Ndate.setDate(Ndate.getDate()+1);
             let a = this.$store.state.arr;
           a.push('号码',this.input);               
            document.cookie =  'name' + '=' + a + ';expires=' + Ndate; 
            // localStorage.setItem('手机号',document.cookie);
            console.log(document.cookie)
        }
    }
   
}
</script>

<style lang="less">
.box{
    z-index: 900;
    .wraCor{
   position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background:rgb(172, 162, 162);
      z-index: 999;
      opacity: 0.4;
    }
  .fixed{
      position: fixed;
      top: 50%;
      left: 50%;
      width: 400px;
      height: 276px;
      background:white;
      z-index:999;
      margin-top: -138px;
      margin-left: -200px;
      border-radius: 6px;
      z-index: 10000;
      .cancel{
          li{
              font-size: 20px;
              color:rgb(218, 205, 205);
              margin-left: 92%;
              margin-top: 12px;
          }
      }
      .butTop{
         position:relative;
         width: 100%;
        display: none;
         margin-top: -28px;
         margin-bottom: 30px;
          font-size: 13px;
          color: rgb(141, 128, 128);

      }
      .fix_top{
          font-size: 18px;
          font-weight: 700;
        //  margin:10px 0;
        text-align: center;
      }
      .fix_con{
          margin-top: 20px;
          font-size: 14px;
          text-align: center;
      }
      .input{
          width: 318px;
          height: 35px;
          margin: 30px ;
          border-radius: 5px;
          outline: none;
          border: 1px solid rgb(83, 80, 80);
          font-size:12px;
          padding-left: 20px;
      }
      .button{
          width: 85%;
          height: 35px;
          margin-left: 30px;
          margin-top: -5px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
         border: none;
         background:#f0720c;
         border-radius: 5px;
      }
  }
  }
</style>