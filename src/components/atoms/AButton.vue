<template>
  <div>
    <router-link :to="to">
      <button role="button" aria-label="login my account" class="
                text-sm
                font-semibold
                leading-none
                rounded-full
                w-full
                py-4 px-4
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