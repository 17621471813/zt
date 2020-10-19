<template>
    <div class="homePage">
            <public-nav />
           <router-view />
            <public-copy />
    </div>
</template>
<script>
import PublicNav from '@/components/web/public/PublicNav.vue'
import PublicCopy from  '@/components/web/public/PublicCopy'
export default {
    components: {
        PublicNav,
        PublicCopy
    },
    beforeRouteLeave(to,from,next){
        clearInterval(window.timer)
        next()
    }
}
</script>

<style lang="less">
.homePage{
    .sm{
     display: flex;
    position:relative;
   top: 200px;
    width: 100vw;
    height: 200px;
    background:rgb(34, 32, 32);
     color: #999;
    }
}
@media screen and (min-width: 300px) and (max-width: 900px) {
    .homePage{
        display: none;
    }
 }
</style>