<template>
    <section class="worksBloc">
        <div class="container" >
            <span
                v-for="(value, index) in projects"
                :key="index"
                @mouseover="mouseOver(index)"
                @mouseleave="mouseLeave"
            >
                <router-link 
                    class="works__title"
                    :to="`project/${value.slug}`"

                >
                    {{value.name}}
                    <span class="works__index">
                        {{index}}
                    </span>
                </router-link>
            </span>
            <div v-if="projectHover" class="container__img"
            >
                {{projectHover.name}}
                {{projectHover.imgs[0]}}
                <img
                    :src="projectHover.imgs[0]"
                />
                <img :src="projectHover.form"  />
            </div>
        </div>
    </section>
</template>

<script>
import { projects } from "@/datas/projects.js";

export default {
  name: "WorksBloc",
  props: {
    commun: Object
  },
  data() {
    return {
      tl: "",
      projects: projects,
      projectHover: false
    };
  },
  components: {},
  methods: {
    mouseOver: function(index) {
      console.log(index);
      this.projectHover = this.projects[index];
      console.log(this.projectHover);
    },
    mouseLeave: function() {
      console.log("moouse out");
      this.projectHover = false;
      console.log(this.projectHover);
    },
    mounted() {
      const { box } = this.$refs;
      const timeline = new TimelineLite();

      timeline.to(box, 1, { x: 200, rotation: 90 });
    }
  },
  mounted() {
    console.log(projects);
    // this.tl = new TimelineLite();
    // this.tl
    //     .from(name, 0.6, {opacity: 0, transform: "translateY(15%)"}, "+=1")
    //     .play();
  }
};
</script>
      
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.worksBloc {
  background-color: #161616;
  color: white;
  min-height: 100vh;
  padding: 20vh 0;
  position: relative;
  .container {
    background-color: #161616;
  }
}
.container__img {
  position: fixed;
  right: 10%;
  top: 25vh;
}
.works__title {
  font-family: "Gotham";
  font-weight: 500;
  line-height: 3rem;
  font-size: 3rem;
  color: white;
  position: relative;
  margin-bottom: 10vh;
  display: block;
  width: fit-content;
  &:visited {
    color: white;
  }
}
.works__index {
  position: absolute;
  right: -15px;
  top: -15px;
  font-size: 1rem;
}
</style>
