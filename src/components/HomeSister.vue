<template>
    <div class="p-2 bg-white">
      <!-- <BabySitterDetails /> -->
      <!-- <BabySitterCard /> -->
      <div class="grid grid-cols-12">
        <div class="col-span-2 w-3/4 bg-white rounded-2xl">
            <AButton
            class="w-full border-2 border-solid border-teal-500 text-gray-500 bg-teal-100 hover:bg-teal-200 rounded-full mb-2 mt-2"
            to="/" buttonText="Anneleri Gor" />
          <AButton class="w-full text-white bg-orange-500 border-solid border-blue-500 border-2 hover:bg-orange-400 rounded-full mb-2 mt-2" to="/babysitters"
            buttonText="Cuzdan" />
          <AButton
            class="w-full border-2 border-solid border-yellow-500 text-yellow-600 bg-yellow-100 hover:bg-yellow-200 rounded-full mb-2 mt-2"
            to="/" buttonText="Profil" />
          <AButton
            class="w-full border-2 border-solid border-blue-500 text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-full mb-2 mt-2"
            to="/" buttonText="Onceki Islerim" />
          
        </div>
        <div class="grid col-span-10">
          <ActiveMother class="bg-white flex justify-center" />
        </div>
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

import AButton from "@/components/atoms/AButton.vue"
import ActiveMother from "./ActiveMother.vue";


export default {
  name: "HomeSister",
  components: { AButton, ActiveMother },
};
</script>