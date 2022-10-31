<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/sister">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">Signup</router-link> |
    <router-link to="/signup/mother">Mother Signup</router-link>
    <div class="grid grid-cols-1">
      <!-- <div class="p-2">
        <BabySitterCard />
      </div>
      <div class="p-2">
        <SisterDetails />
      </div>
      <div class="p-2">
        <SignupKidsAdd />
      </div> -->
      <!-- <div class="p-2">
        <CheckoutPayment />
      </div> -->
     <!-- <HomeMother /> -->
    <ProfileComp/>
    </div>
  </div>
</template>

<script>
// import BabySitterCard from "../components/BabySitterCard.vue"
// import SisterDetails from "@/components/SisterDetails.vue";
// import SignupKidsAdd from "@/components/SignupKidsAdd.vue";
// import CheckoutPayment from "../components/CheckoutPayment.vue";
// import SignUpKidsAdd from "@/components/SignUpKidsAdd.vue";
// import BabySitterCard from "@/components/BabySitterCard.vue";
// import BabySitterDetails from "@/components/BabySitterDetails.vue";

// import DataTable from "@/components/DataTable.vue";
// import AButton from "@/components/atoms/AButton.vue";
// import HomeMother from "@/components/HomeMother.vue"
import ProfileComp from "@/components/ProfileComp.vue";



export default {
  name: "HomeView",
  components: {  ProfileComp },
};
</script>
