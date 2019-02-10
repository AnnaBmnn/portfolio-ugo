<template>
    <section class="nextProject">
        <div class="nextProject__wrapper container">
            <div class="nextProject__container">
                <h1 class="title">
                    {{projectInfos.name}}
                    <span > - 00{{projectInfos.index}}</span>
                    <img :src="projectInfos.emoji"/>
                </h1>
                <div class="nextProject__txt" v-html="projectInfos.description">
                </div> 
                <router-link class="nextProject__link" :to="`${projectInfos.slug}`">See Case</router-link> 
            </div>
        </div>

    </section>
</template>

<script>
import { projects } from "../datas/projects.js";

export default {
    name: "NextProject",
    props: {
        index: Number
    },
    data: function(){
        return {
            // projectInfos: projects[this.index%3]
            projectInfos: projects[this.index]
        
        }
    }
};
</script>
      
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nextProject {
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 22vh 0 18vh;

    @media (max-width: 1300px){
        padding: 12vh 0 15vh;

    }
    @media (max-width: 700px){
        padding: 10vh;
    }
}
.nextProject__txt {
    margin-top: 30px;
    font-size: 1.5rem;
    width: 90%;
    .bold {
        font-weight: normal;
    }
    @media (max-width: 1200px){
        font-size: 1.2rem;
        line-height: 31px;
    }
    @media (max-width: 700px){
        width: 100%;
    }
}
.title {
    font-size: 3.6rem;
    font-family: 'Gotham';
    font-weight: normal;
    margin-bottom: 20px;
    @media (max-width: 1200px){
        font-size: 2.6rem;
    }
    @media (max-width: 700px){
        font-size: 2.4rem;
    }
    img {
        margin-left: 20px;
        width: auto;
    }
}
.nextProject__link {
    margin-top: 30px;
    position: relative;
    font-weight: normal;
    &:after {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        top: 102%;
        left: 0;
        background-color: black;
    }
}
</style>
