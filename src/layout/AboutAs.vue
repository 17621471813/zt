<template>
    <div class="aboutAs">
         <public-nav />
       <about-cont />
       <public-copy />
    </div>
</template>

<script>
import PublicNav from '@/components/web/public/PublicNav.vue'
import AboutCont from '@/components/web/About/AboutCont.vue'
import PublicCopy from '@/components/web/public/PublicCopy.vue'
export default {
   
   components: {
       PublicNav,
       AboutCont,
       PublicCopy
   }
}
</script>

<style lang="less" scoped>
 body{
     .aboutAs{
    background:rgba(249,249,249,1);
    padding-top: 20px;
     }
     .sm{
         margin-top: 50px;
     }
}
@media screen and (min-width: 300px) and (max-width: 900px) {
    .aboutAs{
        display: none;
    }
 }
</style>