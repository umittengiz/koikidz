<template>
     <div class="p-2 bg-green-200">
        <!-- <BabySitterDetails /> -->
        <!-- <BabySitterCard /> -->
        <div class="grid grid-cols-6">
            <div class="col-span-1 w-4/5 bg-green-200 rounded-2xl">
          <AButton class="w-full text-white bg-red-500 hover:bg-red-800 rounded-full mb-2 mt-2" to="/babysitters" buttonText="Abla Çağır" />
          <AButton class="w-full text-white bg-yellow-500 hover:bg-yellow-800 rounded-full mb-2 mt-2" to="/" buttonText="Çocuklarım" />
          <AButton class="w-full text-white bg-blue-500 hover:bg-blue-800 rounded-full mb-2 mt-2" to="/" buttonText="Adreslerim" />
          <AButton class="w-full text-white bg-teal-400 hover:bg-teal-800 rounded-full mb-2 mt-2" to="/" buttonText="Profil" />
          <AButton class="w-full text-white bg-pink-500 hover:bg-pink-800 rounded-full mb-2 mt-2" to="/" buttonText="Cüzdan" />
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
  components: {  DataTable, AButton },
};
</script>