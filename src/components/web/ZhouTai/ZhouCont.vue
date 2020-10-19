<template>
    <div class="cont">
        <show-home />
        <show-word />
        <show-people />
        <show-ear />
        <show-pic />
        <show-esse />
        <hot-house />
        <public-copy />
    </div>
</template>

<script>
import ShowHome from '@/components/web/ZhouTai/ShowHome.vue'
import ShowWord from '@/components/web/ZhouTai/ShowWord.vue'
import ShowPeople from '@/components/web/ZhouTai/ShowPeople.vue'
import ShowEar from '@/components/web/ZhouTai/ShowEar.vue'
import ShowPic from '@/components/web/ZhouTai/ShowPic.vue'
import ShowEsse from '@/components/web/ZhouTai/ShowEsse.vue'
import HotHouse from '@/components/web/ZhouTai/HotHouse.vue'
import PublicCopy from '@/components/web/public/PublicCopy.vue'

export default {
    components: {
         ShowHome,
         ShowWord,
         ShowPeople,
         ShowEar,
         ShowPic,
         ShowEsse,
         PublicCopy,
         HotHouse
    }
}
</script>
<style lang='less'>

.cont{
    height: 3200px;
   background-color:rgb(236, 235, 235);
   .sm{
       position: relative;
       margin-top: 10px;

   }
}

</style>