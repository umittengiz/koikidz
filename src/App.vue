<template>
  <div id="app">
    <!-- <div v-if="this.$route.name === 'signup'">
      <sign-up-view />
    </div>
    <div v-else-if="this.$route.name === 'login'">
      <login-view />
    </div>
    <div v-else-if="this.$route.name === 'signup-mother'">
      <sign-up-mother-view />
    </div>
    <div v-else-if="this.$route.name === 'babysitters'">
      <baby-sitters-view />
    </div>
    <div v-else-if="this.$route.name === 'sister'">
      <home-sister-view />
      
    </div> -->


    <!-- <div v-else>
      <home-view />
      <l-boxed-layout />
    </div> -->


    <router-view></router-view>
  </div>
</template>

<script>
// import LBoxedLayout from "./layouts/LBoxedLayout.vue";
// import SignUpView from './views/SignUpView.vue';
// import LoginView from './views/LoginView.vue';
// import SignUpMotherView from './views/SignUpMotherView.vue';
// import HomeView from './views/HomeView.vue';
// import BabySittersView from './views/BabySittersView.vue';
// import HomeSisterView from "./views/HomeSisterView.vue"


export default {
  // components: { SignUpView, LoginView, SignUpMotherView, HomeView, BabySittersView, HomeSisterView },
};
</script>