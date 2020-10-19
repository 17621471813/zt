<template>
    <div class="analyst">
        <div class="img1">
            <img :src='url' alt="">
        </div>
        <div class= 'nan' v-for="(item, index) in naList" :key='index' >
            <img :src=item.img alt="">
        </div>
        <div @click='dwClick' class="dwimg">
            <img :src="dw" alt="">
        </div>
        <div class="dwword" v-if='show'>
           <div class="dwposi"> </div>
           <div class="fix">
                    <div class="dw_tit">
                输入姓名和电话，预约咨询分析师
            </div>
           <div class="from">
                <form action="">
                <input v-model='input' type="text" placeholder="请输入您的姓名">
                <input v-model= 'phone' type="text" placeholder="请输入正确手机号码">
            </form>
           </div>
            <div class='yy'>
                <li class='el-icon-warning'></li>
                预约成功后，将有分析师联系您，根据您的购房需求，为您找到合适的房源。
            </div>
            <button type= 'submit' @click='feClick' >确认咨询</button>
           </div>
           </div>
    </div>
</template>


<script>
export default {
    data () {
       return {
           show: '',
           input: '',
           phone: '',
           dw: require('../../../assets/picture/lz.jpg'),
            url: require('../../../assets/picture/jc.jpg'),
              naList: [
             {
                img: require('../../../assets/picture/zx.jpg')
            },
             {
                img: require('../../../assets/picture/zt.jpg')
            },
             {
                img: require('../../../assets/picture/wm.jpg')
            },
        ]
       }
    },
    computed: {
             fxshow () {
                 return this.show;
             }
    },
    methods: {
        feClick () {
                  if(this.input==''){
                     window.confirm('请输入名字');
                     return;
                  };
                    if(this.phone==''){
                     window.confirm('请输入手机号')
                  };
            
                  if(this.input&&this.phone){
                      this.show =false;
                      this.input ='';
                      this.phone = '';
                  }

        },
        dwClick () {
            this.show = true;
            
        }
    }
}
</script>


<style lang="less" scoped>
.analyst{
    width: 80%;
    margin: 0 auto;
    background: white;

        .img1{
         width: 80%;
         height: 100px;
        margin: 0 auto;
         img{
             width: 100%;
             height: 200px;
         }
    }
    .nan{
        position: relative;
        margin-top: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 700px;
            height: 700px;
        }
    }
    .dwimg{
        img{
        width: 126px;
        height: 138px;
        position:fixed;
        top: 60vh;
        left: 80vw;
        }
    }
    .dwword{
      .dwposi{
       position: fixed;
       width: 100vw;
       height: 100vh;
       top: 0;
       left: 0;
       background:rgb(172, 162, 162);
       z-index: 10000;
       opacity: 0.4;
        }
        .fix{
          position: fixed;
          top: 50%;
          left: 50%;
           width: 400px;
           height: 470px;
           background:white;
           margin-top: -200px;
            margin-left: -235px;
            z-index:19999;
            border-radius: 10px;
            .dw_tit{
                width: 100%;
                text-align: center;
                font-weight: 500;
                margin-top: 40px;
                font-size: 18px;
            }
            .from{
                width: 100%;
                text-align:center;
                 margin-top: 40px;
                input{
                    width: 80%;
                    height: 40px;
                    border:none;
                    outline: 0;
                    border-bottom: 1px solid rgb(202, 188, 188);
                    margin: 5px 0;
                    font-size: 14px;
                }
            }
            .yy{
                width:80%;
                margin: 0 auto;
                font-size: 14px;
                color:rgb(73, 67, 67);
                margin-top: 60px;
                li{
                    color:rgba(180,37,54,1);
                }
            }
            button{
                width: 200px;
                height: 46px;
                background:rgba(180,37,54,1);
                color: white;
                border: none;
                outline: 0;
                border-radius: 5px;
                margin-left:  100px;
                margin-top: 60px;
            }
        }
    }
   
}
</style>