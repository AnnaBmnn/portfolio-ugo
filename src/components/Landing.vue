<template>
    <section class="landing">
        <div class="landing__wrapper container">
            <div class="landing__container">
                <h1 class="title">
                    Oh ! Hey there sunshine 
                    <img src="../assets/sun-emoji.svg">
                </h1>
                <div class="landing__txt">
                    I’m Ugo Olsak, a
                        <span class='bold'> fourth year student at HETIC</span> 
                    and <span class='bold'>freelancer</span>. Even though the 
                    digital environment is for me like water for a fish, I grew 
                    up wondering why things were made the way they are 
                    (...consider me a very self aware fish). This quest led me to 
                    an emerging passion, <span class='bold'>design.</span>
                </div>  
            </div>
        </div>
        <socials />
    </section>
</template>

<script>
import Socials from "@/components/Socials.vue";


export default {
    name: "Landing",
    props: {
        title: String,
        description: String,
        commun: Object,
        social: Object
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
