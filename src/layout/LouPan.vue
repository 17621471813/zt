<template>
    <div class="loupan">
         <public-nav />
           <loupan-cont/>
         <public-copy />
    </div>
</template>


<script>
import PublicNav from '@/components/web/public/PublicNav.vue'
import PublicCopy from '@/components/web/public/PublicCopy.vue'
import LoupanCont from '@/components/web/Loupan/LoupanCont.vue'
export default {
    components: {
        PublicNav,
        PublicCopy,
        LoupanCont
    }
}
</script>

<style lang="less" scoped>
@media screen and (min-width: 300px) and (max-width: 900px) {
    .loupan{
        display: none;
    }
 }
</style>