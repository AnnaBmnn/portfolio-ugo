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
            <div class="project__txtContainer">
                <div class="project__surtitle">Reflexion</div>
                <div class="project__txt">
                    After a few user interview, we point out many pain 
                    points that appeared during their car trip. <br> We then came 
                    with a question : 
                    <div class="project__bold">How to transform a boring ordinary trip to a meaningful and fun one that you and your passenger will remember ?</div>
                </div> 
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[0][0]">
            </div>
            <div class="project__txtContainer">
                <div class="project__surtitle">Concept</div>
                <div class="project__txt">
                    Choose your destination from the classic search bar 
                    or your preference.
                </div> 
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[1][0]">
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[2][0]">
            </div>
            <div class="project__txtContainer">
                <div class="project__surtitle">Feature</div>
                <div class="project__txt">
                    Driving through Paris ? <br>We suggest activities that are around 
                    your current location.
                </div> 
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[3][0]">
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[4][0]">
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[5][0]">
            </div>
            <div class="project__txtContainer">
                <div class="project__surtitle">Tired ?</div>
                <div class="project__txt">
                    You’ve been driving for a long time ? <br>Tesla is 
                    thinking about you and offers you rest areas nearby.
                </div> 
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[6][0]">
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[7][0]">
            </div>
            <div class="project__txtContainer">
                <div class="project__surtitle">Hungry ?</div>
                <div class="project__txt">
                    According to your lunch hour, Tesla notify 
                    you, so you can find restaurants nearby.
                </div> 
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[8][0]">
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[9][0]">
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[10][0]">
            </div>
            <div class="project__txtContainer">
                <div class="project__surtitle">Not so fast</div>
                <div class="project__txt">
                    Want to have a digestive walk just after your 
                    lunch break ? <br>Just look for a parc nearby.
                </div> 
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[11][0]">
            </div>
            <div class="project__txtContainer">
                <div class="project__surtitle">Hesitation is a right</div>
                <div class="project__txt">
                    Not so sure about what to do next ? <br>
                    Just manage your activites by deleting them 
                    and add others. <br>They are ordered by proximity. 
                </div> 
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[12][0]">
            </div>
            <div class="project__txtContainer">
                <div class="project__surtitle">No more battery ? </div>
                <div class="project__txt">
                    You don’t know what to do while charging your Tesla ? 
                    <br>Don’t worry we got your back by finding activities 
                    next to your charging station.
                </div> 
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[13][0]">
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[14][0]">
            </div>
            <div class="project__txtContainer">
                <div class="project__surtitle">Feel like traveling on your own ? </div>
                <div class="project__txt">
                    You can disable the notification while you’re driving 
                    if you feel them too intruisive. <br>We design products 
                    to help you, not to disturb you.
                </div> 
            </div>
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[15][0]">
            </div>
        </div>
        <NextProject
            :index="projectInfos.index"
        />
        
    </div>
</template>

<script>
import ArrowFill from "@/components/ArrowFill.vue";
import NextProject from "@/components/NextProject.vue";
import Landing from "@/components/Landing.vue";
import { projects } from "../datas/projects.js";

export default {
  name: "projectTesla",
  components: {
    ArrowFill,
    Landing,
    NextProject
  },
  data: function(){
    return {
        projectInfos: projects.find((project)=>{
            return project.slug == "tesla-x-tripadvisor";
        }
    )
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
        margin-bottom: 80px;
    }
}

.project__txtContainer {
    width: 90%;
    margin: 0 auto;
    padding: 17vh 0 19vh;
    @media (max-width: 900px){
        width: 100%;
    }
}
.project__surtitle {
    font-family: 'Graphik', sans-serif;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 0.075rem;
}
.project__bold {
    font-weight: normal;
}
.project__txt {
    font-family: 'Graphik', sans-serif;
    font-size: 2.5rem;
    letter-spacing: 0.18rem;
    line-height: 3.75rem;
    font-weight: 300;
    @media (max-width: 900px){
        font-size: 2rem;
        letter-spacing: 0.10rem;
        line-height: 2.5rem;
    }
}
</style>