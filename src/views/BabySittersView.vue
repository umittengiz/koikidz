<template>
  <div class="grid grid-cols-8 m-10">
    <div class="grid col-span-2 pr-10">
      <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->
      <FilterBar />


    </div>
    <div class="grid grid-cols-3 col-span-6 gap-6">
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />
      <BabySitterCard />

    </div>
  </div>

</template>

<script>
import BabySitterCard from "@/components/BabySitterCard.vue";
import FilterBar from "@/components/FilterBar.vue"

export default {
  components: {
    BabySitterCard,
    FilterBar
  }
}
</script>

<style lang="scss" scoped>

</style>