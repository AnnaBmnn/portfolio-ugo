<template>
    <section class="landing">
        <div class="landing__wrapper container">
            <div class="landing__container">
                <h1 class="title">
                    {{title}}
                    <span v-if="index"> - 00{{index}}</span>
                    <img :src="emoji"/>
                </h1>
                <div class="landing__txt" v-html="description">
                </div>  
            </div>
        </div>
        <socials
            v-if="isSocials"
            v-bind:social="commun.social"
            v-bind:contact="commun.contact"
        />
        <Infos
            v-else
            v-bind:commun="commun"
            v-bind:link="link"
            v-bind:siteLink="siteLink"
        />
    </section>
</template>

<script>
import { TimelineLite } from 'gsap';
import Socials from "@/components/Socials.vue";
import Infos from "@/components/Infos.vue";


export default {
    name: "Landing",
    props: {
        title: String,
        description: String,
        commun: Object,
        isSocials: Boolean,
        link: String,
        siteLink: String,
        emoji: String,
        index: String
    },
    data() {
        return {
            tl: "",
        }
    },
    components: {
        Socials,
        Infos,
    },
    mounted() {
        // this.$nextTick(() => {
            console.log("mounted")
            if(this.isSocials){
                const name = document.querySelector('.nav__link--olsak');
                const resume = document.querySelector('.nav__link--resume');
                const title = document.querySelector('.title');
                const description = document.querySelector('.landing__txt');
                const socialsOverlay = document.querySelector('.socials__overlay');
                this.tl = new TimelineLite();
                this.tl
                    .from(name, 0.6, {opacity: 0, transform: "translateY(15%)"}, "+=1")
                    .from(resume, 0.5, {opacity: 0, transform: "translateY(15%)"})
                    .from(title, 0.5, {opacity: 0, transform: "translateY(15%)"})
                    .from(description, 0.5, {opacity: 0, transform: "translateY(5%)"})
                    .from(socialsOverlay, 0.6, {transform: "scaleX(1)"})
                    .play();
            }
        // })
    }
};
</script>
      
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.landing {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (max-width: 1300px){
        padding-top: 4vh;
    }
    @media (max-width: 700px){
        padding-top: 25vh;
    }
}
.landing__txt {
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
</style>
