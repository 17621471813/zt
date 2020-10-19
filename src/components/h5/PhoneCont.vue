<template>
    <div class="phoneCont">
        <house-more />
        <call-phone />
        <house-type />
        <house-word />
        <house-nan />
        <house-pri />
        <house-people/>
        <make-appo />
          <sheng-ming/>
    </div>
</template>

<script>
import   HouseMore from '@/components/h5/HouseMore.vue'
import   CallPhone from '@/components/h5/CallPhone.vue'
import   HouseType from '@/components/h5/HouseType.vue'
import   HouseWord from '@/components/h5/HouseWord.vue'
import   HousePri from '@/components/h5/HousePri.vue'
import   HousePeople from '@/components/h5/HousePeople.vue'
import   MakeAppo from '@/components/h5/MakeAppo.vue'
import   ShengMing from '@/components/h5/ShengMing.vue'
import   HouseNan from '@/components/h5/HouseNan.vue'
export default {
    components: {
        HouseMore,
        CallPhone,
        HouseType,
        HouseWord,
        HouseNan,
        HousePri,
        HousePeople,
        MakeAppo,
        ShengMing
    }
}
</script>