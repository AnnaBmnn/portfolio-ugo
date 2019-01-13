<template>
  <div class="home">
    <!-- <Landing
      v-bind:title="hello"
      v-bind:description="home.description"
      v-bind:commun="commun"
      v-bind:social="social"
    /> -->
    <Landing/>
    <CaseStudies/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import CaseStudies from "@/components/CaseStudies.vue";

export default {
  name: "home",
  components: {
    Landing,
    CaseStudies
  }
};
</script>
