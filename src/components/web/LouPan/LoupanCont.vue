<template>
    
    <div class="loupan">
        <lou-chioce />
        <lou-news />

    </div>
</template>

<script>
import LouChioce from '@/components/web/LouPan/LouChioce.vue'
import LouNews from '@/components/web/LouPan/LouNews.vue'
export default {
    components: {
        LouChioce,
        LouNews,
    }
}
</script>

