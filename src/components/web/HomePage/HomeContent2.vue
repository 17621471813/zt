<template>
<div class="more">
    <more-top />
    <more-cont />
    <public-fixed />
    </div>
</template>


<script>
import MoreTop from '@/components/web/HomePage/MoreTop.vue'
import MoreCont from '@/components/web/HomePage/MoreCont.vue'
import PublicFixed from '@/components/web/public/PublicFixed.vue'
export default {
    components: {
        MoreTop,
        MoreCont,
        PublicFixed
    }
}
</script>


<style lang="less" scoped>
body{
    background: rgba(249,249,249,1);
    .sm{
        margin-top: -180px;
    }
   .more{
         width: 80%;
         margin: 0 auto;
         margin-top: 80px;
   }
}
</style>