<template>
  <div class="mt-8">
    <router-link :to="to">
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
        {{ buttonText }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['to', 'buttonText'],
}
</script>