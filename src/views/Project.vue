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
            <div 
                class="container__img"
                v-for="(value, index) in projectInfos.imgs"
                :key="index" 
            >
                <div class="container">
                    <span class="project__index">{{index+1 < 10 ? "0" : ""}}{{index+1}}</span>
                    <legend class="project__legend">{{value[1]}}</legend>
                </div>

                <div class="container__imgColor">
                    <div class="container">
                        <img :src="value[0]">
                    </div>
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
    .container__imgColor {
        line-height: 0.8;
        background-color: #FAFAFA;
    }
}
.project__index {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 9%;
    padding-left: 2px;
}
.project__legend {
    margin-left: 9%;
    margin-bottom: 30px;
    font-size: 2.5rem;
    font-weight: 200;
    letter-spacing: 3px;
    padding: 0;
}
</style>