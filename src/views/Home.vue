<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Landing
      v-bind:title="hello"
      v-bind:description="home.description"
      v-bind:commun="commun"
      v-bind:social="social"
    /> -->
    <Landing/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";

export default {
  name: "home",
  components: {
    Landing
  }
};
</script>
