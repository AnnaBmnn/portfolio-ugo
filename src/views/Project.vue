<template>
    <div class="project">
        <ArrowFill />
        <Landing
            v-bind:title="`${projectInfos.name}`"
            v-bind:description="projectInfos.description"
            v-bind:isSocials="false"
            v-bind:link="projectInfos.link"
            v-bind:emoji="projectInfos.emoji"
            v-bind:siteLink="projectInfos.siteLink"
            v-bind:index="projectInfos.index"

            v-bind:commun="{ 
                role: projectInfos.role,
                year: projectInfos.year,
                context: projectInfos.context
            }"
        />
        <div class="container">
            <div 
                class="container__img"
                v-for="(value, key, index) in projectInfos.imgs"
                :key="index" 
            >
                <img :src="value[0]">
            </div>
        </div>
        <NextProject
            :index="(projectInfos.index)%3"
        />
    </div>
</template>

<script>
import ArrowFill from "@/components/ArrowFill.vue";
import Landing from "@/components/Landing.vue";
import { projects } from "../datas/projects.js";
import NextProject from "@/components/NextProject.vue";
import { TimelineLite } from 'gsap';


export default {
  name: "project",
  components: {
    ArrowFill,
    Landing,
    NextProject
  },
  data: function(){
    return {
      projectInfos: projects.find((project)=>{
        return project.slug == this.$route.params.slug;
    })
    }
  },
  mounted() {
      console.log("mounted");
      const title = document.querySelector('.title');
      const description = document.querySelector('.landing__txt');
      const infosOverlay = document.querySelector('.infos__overlay');
      this.tl = new TimelineLite();
      this.tl
          .from(title, 0.5, {opacity: 0, transform: "translateY(15%)"})
          .from(description, 0.5, {opacity: 0, transform: "translateY(5%)"})
            .from(infosOverlay, 0.6, {transform: "scaleX(1)"})
          .play();
    }
};
</script>

<style scoped lang="scss">
.project {
    position: relative;
    img {
        width: 100%;
        height: auto;
    }
    .container__img {
        margin-bottom: 25vh;
    }
}
</style>