<template>
    <div class="project">
        <Landing
            v-bind:title="`${projectInfos.name}`"
            v-bind:description="projectInfos.description"
            v-bind:isSocials="false"
            v-bind:link="projectInfos.link"
            v-bind:commun="{ 
                role: projectInfos.role,
                year: projectInfos.year,
                context: projectInfos.context
            }"
        />
    {{projectInfos}}
        <div class="container">
            <div 
                v-for="(value, key, index) in projectInfos.imgs"
                :key="index" 
            >
                <img :src="value">
            </div>
        </div>
    </div>
</template>

<script>
import Landing from "@/components/Landing.vue";
import { projects } from "../datas/projects.js";

export default {
  name: "project",
  components: {
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