<template>
  <div class="p-2 bg-blue-200">
    <!-- <BabySitterDetails /> -->
    <!-- <BabySitterCard /> -->
    <div class="grid grid-cols-6">
      <div class="col-span-1 w-4/5 bg-blue-200 rounded-2xl">
        <AButton class="w-full text-white bg-orange-500 hover:bg-orange-400 rounded-full mb-2 mt-2" to="/babysitters"
          buttonText="Abla Çağır" />
        <AButton
          class="w-full border-2 border-solid border-yellow-500 text-yellow-600 bg-yellow-100 hover:bg-yellow-200 rounded-full mb-2 mt-2"
          to="/" buttonText="Çocuklarım" />
        <AButton
          class="w-full border-2 border-solid border-blue-500 text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-full mb-2 mt-2"
          to="/" buttonText="Adreslerim" />
        <AButton
          class="w-full border-2 border-solid border-teal-500 text-teal-600 bg-teal-100 hover:bg-teal-200 rounded-full mb-2 mt-2"
          to="/" buttonText="Profil" />
        <AButton
          class="w-full border-2 border-solid border-pink-500 text-pink-600 bg-pink-100 hover:bg-pink-200 rounded-full mb-2 mt-2"
          to="/" buttonText="Cüzdan" />
      </div>
      <div class="grid col-span-5">
        <DataTable class="bg-white flex justify-center" />
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
import DataTable from "@/components/DataTable.vue"
import AButton from "@/components/atoms/AButton.vue"


export default {
  name: "HomeView",
  components: { DataTable, AButton },
};
</script>