<template>
  <div>
    <BabySitterDetails />
    <AButton class="text-white bg-orange-500" style="float:right" to="/checkout" buttonText="Sipariş Ver" />
  </div>
</template>

<script>
import BabySitterDetails from "@/components/BabySitterDetails.vue";
import AButton from "@/components/atoms/AButton.vue";
export default {
  components: {
    BabySitterDetails,
    AButton
  }
}
</script>

<style lang="scss" scoped>

</style>