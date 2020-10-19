<template>
    <div class="check">
        <div class="cheTop">
            <p>
                新房咨询师为您提供了询底价服务，本地及周边的所有楼盘，您想了解最新的房
            </p>
            <p>
                源源底价,都可以提交咨询,会有咨询师为您提供咨询结果。
            </p>
        </div>
        <div class="chForm">
            <form action="">
                <input placeholder="请输入名想要了解的楼盘名，可输入多个" v-model='name' type="text">
                <input placeholder="请输入手机号"    v-model='phone' type="text">
            </form> 
        </div>
        <div class="jg">
            <li class='el-icon-warning'></li>
            为保证数据的私密性，咨询师将通过电话为你提供咨询结果；请注意接听！
        </div>
        <button type= 'submit'  >确认咨询</button>
    </div>
</template>


<script>
export default {
    data () {
        return {
            name: '',
            phone: ''
        }
    }
}
</script>

<style lang="less" scoped>
.check{
    width: 80%;
    position: relative;
    padding-top: 100px;
    background:white;
    margin: 0 auto;
    height: 450px;
    text-align: center;
    .cheTop{
        width: 100%;
        text-align: center;
        p{
            font-size: 18px;
            line-height: 30px;
        }
    }
    .chForm{
        width: 500px;
        margin-left: 280px;
        margin-top: 80px;
       input{
           display: block;
           width: 500px;
           height: 51px;
           border:none;
           border-bottom: 1px solid rgb(129, 124, 124);
           outline: 0;
           font-size: 14px;
       }
    }
    .jg{
        margin-top: 30px;
        li{
              color:rgba(180,37,54,1);
        }
    }
    button{
        width: 336px;
        height: 50px;
        background:rgba(180,37,54,1);
        color: white;
        border:none;
        outline: 0;
        border-radius: 5px;
        margin-top: 50px;

    }
}
</style>