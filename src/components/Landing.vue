<template>
    <section class="landing">
        <div class="landing__wrapper container">
            <div class="landing__container">
                <h1 class="title">
                    {{title}}
                    <img src="../assets/sun-emoji.svg">
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
}
.landing__txt {
    font-size: 1.5rem;
    width: 90%;
}
.title {
    font-size: 3.6rem;
    //family: gotham
}
</style>
