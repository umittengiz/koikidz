<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">Signup</router-link> |
    <router-link to="/signup/mother">Mother Signup</router-link>
    <div class="grid  grid-cols-1">
      <div class="p-2">
        <BabySitterCard />
      </div>
      <div class="p-2">
        <SisterDetails />
      </div>

    </div>

  </div>
</template>

<script>
// import BabySitterCard from "../components/BabySitterCard.vue"
import SisterDetails from "@/components/SisterDetails.vue";
import BabySitterCard from "@/components/BabySitterCard.vue";

export default {
  name: "HomeView",
  components: { BabySitterCard, SisterDetails },
};
</script>
