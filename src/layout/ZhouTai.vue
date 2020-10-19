<template>
    <div class="zhou">
       <public-nav />
       <Zhou-cont />
       <public-footer />
       <public-posi />
       <phone-get />
    </div>
</template>

<script>
import PublicNav from '@/components/web/public/PublicNav.vue'
import ZhouCont from '@/components/web/ZhouTai/ZhouCont.vue'
import PublicFooter from '@/components/web/public/PublicFooter.vue'
import PublicPosi from '@/components/web/public/PublicPosi.vue'
import PhoneGet from '@/components/h5/PhoneGet.vue'
export default {
    components: {
        PublicNav,
        ZhouCont,
        PublicFooter,
        PublicPosi,
        PhoneGet,
        
    }
}
</script>


<style lang="less" scoped>
 @media screen and (min-width: 300px) and (max-width: 900px) {
   .zhou{
       .nav{
           display: none;
       }
       .cont{
           display: none;
       }
       .position{
           display: none;
       }
       .sm{
           display: none;
       }
   }
 }
  @media screen and (min-width: 900px) {
       .phone{
           display: none;
       }
  }
</style>