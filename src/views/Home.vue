<template>
  <div class="home">
    <ArrowToTop />
    <div class="animateSection">
      <Landing
        v-bind:title="home.title"
        v-bind:description="home.description"
        v-bind:commun="commun"
      />
      <CaseStudies
        v-bind:caseStudy="home.caseStudy"
      />
      <SmallSection
        v-bind:surtitle="home.freelance.surtitle"
        v-bind:title="home.freelance.title"
        v-bind:description="home.freelance.description"
        v-bind:contact="home.freelance.contact"
        v-bind:instruction="home.freelance.instruction"
        theme="dark"
      />
    </div>  

    <FaceBloc
      v-bind:title="home.face.title"
      v-bind:description="home.face.description"
      v-bind:img="home.face.img"
    />
    <Experiments
      v-bind:title="home.experimentsBloc.title"
      v-bind:description="home.experimentsBloc.description"
      v-bind:experimentsArray="home.experimentsBloc.experiments"
    />
    <SmallSection
      v-bind:title="home.thanks.title"
      v-bind:description="home.thanks.text"
      v-bind:contact="home.thanks.contact"
      v-bind:instruction="home.thanks.instruction"
      theme="light"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ArrowToTop from "@/components/ArrowToTop.vue";
import Landing from "@/components/Landing.vue";
import CaseStudies from "@/components/CaseStudies.vue";
import SmallSection from "@/components/SmallSection.vue";
import Experiments from "@/components/Experiments.vue";
import FaceBloc from "@/components/FaceBloc.vue";

export default {
  name: "home",
  components: {
    ArrowToTop,
    Landing,
    CaseStudies,
    SmallSection,
    Experiments,
    FaceBloc
  },
  props: {
    home: Object,
    commun: Object
  }
};
</script>
