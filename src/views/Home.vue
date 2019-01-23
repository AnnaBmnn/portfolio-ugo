<template>
  <div class="home">
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
      theme="light"
    />
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
  },
  props: {
    home: Object,
    commun: Object
  }
};
</script>
