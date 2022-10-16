<template>
  <div>
    TEBRIKLER! ABLA ALDINIZ!

    YÖNLENDİRİLİYORSUNUZ...
  </div>
</template>

<script>
import router from '@/router';

export default {
  mounted() {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>

</style>