<template>
  <div class="project">
    <h1>{{this.$route.params.name}}</h1>
    <h2>COUUOUOOUUO</h2>
    {{projectInfos}}
  </div>
</template>

<script>
import { projects } from "../datas/projects.js";


export default {
  name: "project",
  components: {
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