<template>
  <div id="app">
    <div v-if="this.$route.name === 'signup'">
      <signup-view />
    </div>
    <div v-else-if="this.$route.name === 'login'">
      <login-view />
    </div>
    <div v-else-if="this.$route.name === 'mother-signup'">
      <mother-signup />
    </div>
    <div v-else>
      <l-boxed-layout />
    </div>
  </div>
</template>

<script>
import LBoxedLayout from "./layouts/LBoxedLayout.vue";
import SignupView from './views/SignupView.vue';
import LoginView from './views/LoginView.vue';
import MotherSignup from './views/MotherSignup.vue';

export default {
  components: { LBoxedLayout, SignupView, LoginView, MotherSignup },
};
</script>