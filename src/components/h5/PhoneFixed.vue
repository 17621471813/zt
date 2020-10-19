<template>
    <div class="phoneFixed" v-if='fix' >
         <div class="fix_wra"></div>
        <div class="fix_con">
            <div class="cance" @click='canShow'>
             <li class='el-icon-close'></li>
         </div>
            <div class="fixed_name">
                <div class="fix_tittle">{{ tit1 }}</div>
                <div class="fix_word">
                {{ tit2}}
                </div>
            </div>
        
        <div class="form">
            <form action="" name='shouji' method='post' >
            <input onkeyup="this.value=this.value.replace(/\D/g,'')" name='shouji' maxlength="11" v-model='phone' placeholder="请输入手机号码" type="text">
        </form>
        </div>
         <button type='submit' class="get" @click='getPhone'>{{ word }}</button>
         <div class="say">
             <span>Tips:</span>
             <span>我们将严格保密您的手机号</span>
         </div>

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            phone: '',
        }
    },
    computed: {
        fix () {
            return this.$store.state.fix;
        },
        tit1 () {
            return this.$store.state.tit1;
        },
        tit2 () {
            return this.$store.state.tit2;
        },
        word () {
            return this.$store.state.word;
        }
    },
    methods:{
        canShow () {
            this.$store.state.fix = '';
        },
        getPhone () {
            if(this.phone.length < 11){
                window.confirm('请输入手机号')
            }else{
                this.$store.state.fix = '';
                this.phone =''
            }
            
            
            
        }
    }
}
</script>

<style lang="less" scoped>
   @import './../../assets/h5less/PhoneFixed.less';
  </style>