<template>
  <div>
    <router-link to="/">Mother Home</router-link> |
    <router-link to="/sister">Sister Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">Signup</router-link> |
    <router-link to="/signup/mother">Signup - Mother</router-link>
    <div class="grid grid-cols-1">
      <HomeMother />

      <!-- <div class="p-2">
        <BabySitterCard />
      </div>
      <div class="p-2">
        <BabySitterDetails />
      </div>
      <div class="p-2">
        <SignUpKidsAdd />
      </div>
      <div class="p-2">
        <CheckoutPayment />
      </div>
      <HomeMother />
      <ProfileComp /> -->
    </div>
  </div>
</template>

<script>
// import BabySitterCard from "../components/BabySitterCard.vue"
// import BabySitterDetails from "@/components/BabySitterDetails.vue";
// import SignUpKidsAdd from "@/components/SignUpKidsAdd.vue";
// import CheckoutPayment from "../components/CheckoutPayment.vue";
import HomeMother from "@/components/HomeMother.vue"
// import ProfileComp from "@/components/ProfileComp.vue";
// import SignUpKidsAdd from "@/components/SignUpKidsAdd.vue";
// import BabySitterCard from "@/components/BabySitterCard.vue";
// import BabySitterDetails from "@/components/BabySitterDetails.vue";

// import DataTable from "@/components/DataTable.vue";
// import AButton from "@/components/atoms/AButton.vue";



export default {
  name: "HomeView",
  components: { HomeMother },
};
</script>
