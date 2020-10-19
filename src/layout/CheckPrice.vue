<template>
    <div class="pr">
         <public-nav />
       <check-cont />
       <public-copy />
    </div>
</template>

<script>
import PublicNav from '@/components/web/public/PublicNav.vue'
import CheckCont from '@/components/web/Check/CheckCont.vue'
import PublicCopy from '@/components/web/public/PublicCopy.vue'
export default {
   
   components: {
       PublicNav,
       CheckCont,
       PublicCopy
   }
}
</script>

<style lang="less" scoped>
.pr{
    padding-top: 20px;
    margin-top: 80px;
    background:rgba(249,249,249,1);
    .sm{
        margin-top: 70px;
    }
}
@media screen and (min-width: 300px) and (max-width: 900px) {
    .pr{
        display: none;
    }
 }
</style>