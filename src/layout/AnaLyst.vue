<template>
    <div class="anawra">
         <public-nav />
       <analyst-cont />
       <public-copy />
    </div>
</template>

<script>
import PublicNav from '@/components/web/public/PublicNav.vue'
import AnalystCont from '@/components/web/Analyst/AnalystCont.vue'
import PublicCopy from '@/components/web/public/PublicCopy.vue'
export default {
   
   components: {
       PublicNav,
       AnalystCont,
       PublicCopy
   }
}
</script>


<style lang="less" scoped>
     .anawra{
    margin-top: 80px;
    padding-top: 20px;
    background:rgba(249,249,249,1);
     }
     
@media screen and (min-width: 300px) and (max-width: 900px) {
    .anawra{
        display: none;
    }
 }
</style>
