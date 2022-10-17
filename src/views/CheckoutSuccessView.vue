<template>
  <div>
    <SuccessPage/>
  </div>
</template>

<script>
import router from '@/router';
import SuccessPage from "@/components/SuccessPage.vue"


export default {
    mounted() {
        setTimeout(() => {
            router.push("/");
        }, 5000);
    },
    components: { SuccessPage }
}
</script>

<style lang="scss" scoped>

</style>