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
        <div class="project__txtContainer">
            <div class="project__surtitle">Reflexion</div>
            <div class="project__txt">
                After a few user interviews, we identified many pain points that appeared during their car trip. 
                <br>We then came with a question :
                <div class="project__bold">How to transform a boring, ordinary trip to a meaningful and fun one that you and your passenger will remember ?</div>
            </div> 
        </div>
        <div class="container">
            <div 
                class="container__img"
            >
                <video muted autoplay loop :src="projectInfos.imgs[0][0]"/>
            </div>
        </div>
        <div class="project__txtContainer">
            <div class="project__surtitle">Concept</div>
            <div class="project__txt">
                Choose your destination from the classic search bar 
                or from your preferences.
            </div> 
        </div>
        <div class="container">                
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
        </div>
        <div class="project__txtContainer">
            <div class="project__surtitle">Feature</div>
            <div class="project__txt">
                Driving through Paris ? <br>We suggest activities that are close to 
                your current location.
            </div> 
        </div>
        <div class="container">                
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
        </div>
        <div class="project__txtContainer">
            <div class="project__surtitle">Tired ?</div>
            <div class="project__txt">
                You’ve been driving for a long time ?  <br>
                Tesla is thinking about you and is offering you 
                rest areas nearby.
            </div> 
        </div>
        <div class="container">                
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
        </div>
        <div class="project__txtContainer">
            <div class="project__surtitle">Hungry ?</div>
            <div class="project__txt">
                At lunchtime, Tesla notifies you, so you can find 
                restaurants around you.
            </div> 
        </div>
        <div class="container">                
        
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
        </div>
        <div class="project__txtContainer">
            <div class="project__surtitle">Not so fast</div>
            <div class="project__txt">
                Want to have a digestive walk just after your 
                lunch break ? <br>Just look for a parc nearby.
            </div> 
        </div>
        <div class="container">                
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[11][0]">
            </div>
        </div>
        <div class="project__txtContainer">
            <div class="project__surtitle">Hesitation is a right</div>
            <div class="project__txt">
                Not so sure about what to do next ? <br>
                Just manage your activities by deleting some and adding others. <br>
                They are ranked by proximity.
            </div> 
        </div>
        <div class="container">                
            <div 
                class="container__img"
            >
                <img :src="projectInfos.imgs[12][0]">
            </div>
        </div>
        <div class="project__txtContainer">
            <div class="project__surtitle">No more battery ? </div>
            <div class="project__txt">
                You don’t know what to do while charging your Tesla ? <br>
                Don’t worry, we’ve got your back ! We find you activities
                    next to your charging station.
            </div> 
        </div>
        <div class="container">                
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
        </div>
        <div class="project__txtContainer">
            <div class="project__surtitle">Feel like traveling on your own ? </div>
            <div class="project__txt">
                You can disable notifications while you’re driving, if you 
                have the feeling they are too intrusive. 
                <br>
                We design products to help you, not to disturb you.
            </div> 
        </div>
        <div class="container">                
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
  data: function() {
    return {
      projectInfos: projects.find(project => {
        return project.slug == "tesla-x-tripadvisor";
      })
    };
  },
  mounted() {
    const title = document.querySelector(".title");
    const description = document.querySelector(".landing__txt");
    const infosOverlay = document.querySelector(".infos__overlay");
    this.tl = new TimelineLite();
    this.tl
      .from(title, 0.5, { opacity: 0, transform: "translateY(15%)" })
      .from(description, 0.5, { opacity: 0, transform: "translateY(5%)" })
      .from(infosOverlay, 0.6, { transform: "scaleX(1)" })
      .play();
  }
};
</script>

<style scoped lang="scss">
.container {
  margin: 0;
  background-color: #fafafa;
  width: 100%;
}
.project {
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  video {
    width: 100%;
    height: auto;
  }
  .project__txtContainer,
  .container__img {
    width: 80%;
    margin: 0 auto;
  }
  .container__img {
    line-height: 0.8;
    margin-bottom: 25vh;
  }
}

.project__txtContainer {
  width: 90%;
  margin: 0 auto;
  padding: 0vh 0 25vh;
  @media (max-width: 900px) {
    width: 100%;
  }
}
.project__surtitle {
  font-family: "Graphik", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 0.075rem;
}
.project__bold {
  font-weight: normal;
}
.project__txt {
  font-family: "Graphik", sans-serif;
  font-size: 2.5rem;
  letter-spacing: 0.18rem;
  line-height: 3.75rem;
  font-weight: 300;
  @media (max-width: 900px) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
    line-height: 2.5rem;
  }
}
</style>
