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
    <SmallSection/>
    <FaceBloc/>
    <Experiments/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import CaseStudies from "@/components/CaseStudies.vue";
import SmallSection from "@/components/SmallSection.vue";
import Experiments from "@/components/Experiments.vue";
import FaceBloc from "@/components/FaceBloc.vue";

export default {
  name: "home",
  components: {
    Landing,
    CaseStudies,
    SmallSection,
    Experiments,
    FaceBloc
  }
};
</script>
