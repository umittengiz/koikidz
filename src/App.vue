<template>
  <div id="app">
    <div v-if="this.$route.name === 'signup'">
      <sign-up-view />
    </div>
    <div v-else-if="this.$route.name === 'login'">
      <login-view />
    </div>
    <div v-else-if="this.$route.name === 'signup-mother'">
      <sign-up-mother-view />
    </div>
    <div v-else>
      <l-boxed-layout />
    </div>
  </div>
</template>

<script>
import LBoxedLayout from "./layouts/LBoxedLayout.vue";
import SignUpView from './views/SignUpView.vue';
import LoginView from './views/LoginView.vue';
import SignUpMotherView from './views/SignUpMotherView.vue';

export default {
  components: { LBoxedLayout, SignUpView, LoginView, SignUpMotherView },
};
</script>