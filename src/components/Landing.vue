<template>
    <section class="landing">
        <div class="landing__wrapper container">
            <div class="landing__container">
                <h1 class="title">
                    {{title}}
                    <img src="../assets/img/sun-emoji.svg">
                </h1>
                <div class="landing__txt" v-html="description">
                </div>  
            </div>
        </div>
        <socials
            v-bind:social="commun.social"
            v-bind:contact="commun.contact"
        />
    </section>
</template>

<script>
import Socials from "@/components/Socials.vue";


export default {
    name: "Landing",
    props: {
        title: String,
        description: String,
        commun: Object
    },
    components: {
        Socials
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
}
</style>
