<template>
    <div>
      <router-link to="/">Home</router-link> |
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
       
       <HomeSister/>
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
 
  import HomeSister from "@/components/HomeSister.vue";
  
  
  export default {
    name: "HomeSisterPage",
    components: { HomeSister },
  };
  </script>
  