<template>
  <div class="works">
    <works-bloc
      :commun="commun"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import { TimelineMax } from 'gsap';
import WorksBloc from "@/components/WorksBloc.vue";



export default {
  name: "works",
  components: {
    WorksBloc
  },
  data() {
      return {
      }
  },
  props: {
    commun: Object
  },
  methods: {
  },
  created () {
  },
  destroyed () {
  },
  mounted() {
	  // init controller

  }
};
</script>
<style scoped lang="scss">
.works {
    background-color: #161616;
    color: white;
    min-height: 100vh;
}
</style>
