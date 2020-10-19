<template>
    <div class="phone">
        <phone-nav />
        <phone-cont />
        <phone-fixed />
        <phone-foo />
    </div>
</template>

<script>
import PhoneNav from '@/components/h5/PhoneNav'
import PhoneCont from '@/components/h5/PhoneCont'
import PhoneFoo from '@/components/h5/PhoneFoo'
import PhoneFixed from '@/components/h5/PhoneFixed'
export default {
    components: {
        PhoneNav,
        PhoneCont,
        PhoneFoo,
        PhoneFixed
    }
}
</script>

<style lang="less" scoped>
.phone{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
    background: rgb(236, 228, 228);
}
</style>