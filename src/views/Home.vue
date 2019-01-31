<template>
  <div class="home">
    <ArrowFill />
    <div class="bloc--1">
      <Landing
        class="bg__white"
        v-bind:title="home.title"
        v-bind:description="home.description"
        v-bind:commun="commun"
        v-bind:isSocials="true"
      />
      <CaseStudies
        class="bg__white"
        v-bind:caseStudy="home.caseStudy"
        v-bind:index="1"
      />
    </div> 
      <SmallSection
        :style="{transform: 'translateY(-' + this.translateBlocY+ 'px)' }"
        class="fixed"
        v-bind:surtitle="home.freelance.surtitle"
        v-bind:title="home.freelance.title"
        v-bind:description="home.freelance.description"
        v-bind:contact="home.freelance.contact"
        v-bind:instruction="home.freelance.instruction"
        v-bind:isFooter="false"
        v-bind:index="2"
        theme="dark"
      /> 

      <div 
        class="bloc--2 "
      >
        <FaceBloc
          class="bg__white"
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
        v-bind:isFooter="true"
        v-bind:index="3"
        theme="light"
      />
    
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import {ScrollMagic} from 'scrollmagic';
// import { TimelineMax } from 'gsap';
// import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';
import ArrowFill from "@/components/ArrowFill.vue";
import Landing from "@/components/Landing.vue";
import CaseStudies from "@/components/CaseStudies.vue";
import SmallSection from "@/components/SmallSection.vue";
import Experiments from "@/components/Experiments.vue";
import FaceBloc from "@/components/FaceBloc.vue";


export default {
  name: "home",
  components: {
    ArrowFill,
    Landing,
    CaseStudies,
    SmallSection,
    Experiments,
    FaceBloc
  },
  data() {
      return {
          scroll: 0,
          translateBlocY: 0,
      }
  },
  props: {
    home: Object,
    commun: Object
  },
  methods: {
    handleScroll (e) {
      const scroll = window.scrollY;

      this.scroll= scroll;
      const windowHeight = window.innerHeight;
      const blocFixHeight = document.querySelector('.fixed').offsetHeight;
      
      const bloc1Height = document.querySelector('.bloc--1').offsetHeight;
      const bloc2Scroll = document.querySelector('.bloc--2').offsetTop;
      if (bloc2Scroll < (scroll + windowHeight)) {
        let translate = scroll - bloc2Scroll + windowHeight;
        this.translateBlocY = translate;
      } else {
        this.translateBlocY = 0;
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
	  // init controller

  }
};
</script>
<style scoped lang="scss">
.bloc--1 {
  margin-bottom: 80vh;
  z-index: 10;
  position: relative;
}
.fixed {
  margin-top: 20vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}
.bloc--2 {
  position: relative;
  z-index: 10;
}
</style>
