<template>
  <div>
    <SignUpQuestion />

    <div class="mt-8 flex justify-end">
      <router-link to="/">
        <button role="button" aria-label="login my account" class="
                  focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                  text-sm
                  font-semibold
                  leading-none
                  text-white
                  focus:outline-none
                  bg-orange-500
                  border
                  rounded
                  hover:bg-orange-600
                  py-4 px-3
                ">
          Tamamla
        </button>
      </router-link>

    </div>
  </div>
</template>

<script>
import SignUpQuestion from '@/components/SignUpQuestion.vue';

export default {
  components: {
    SignUpQuestion
  }
}
</script>

<style lang="scss" scoped>

</style>