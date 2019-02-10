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
    </div>
</template>

<script>
import ArrowFill from "@/components/ArrowFill.vue";
import Landing from "@/components/Landing.vue";
import { projects } from "../datas/projects.js";

export default {
  name: "project",
  components: {
    ArrowFill,
    Landing
  },
  data: function(){
    return {
      projectInfos: projects.find((project)=>{
        return project.slug == this.$route.params.slug;
    })
    }
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
        margin-bottom: 30px;
    }
}
</style>