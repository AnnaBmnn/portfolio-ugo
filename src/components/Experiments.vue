<template>
    <section class="experiments">
        <div class="container">
            <h2 class="title bold">
                Last but not least, some experiments
                <img src="../assets/lab-emoji.svg">
            </h2>
            <div class="experiments__description">
                Since i’m still a student I like learning (always wil) 
                and trying stuff. Here is a quick selection of some of
                 my experiments so far. 
            </div>
            <div class="experiments__container">
                <experiment/>
                <experiment/>
                <experiment/>
            </div>
        </div>
    </section>
</template>

<script>
import Experiment from "@/components/Experiment.vue";

export default {
    name: "Experiments",
    components: {
        Experiment
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.experiments {
    padding: 15vh 0;
    background-color: #161616;
    color: white;

}
.experiments__container {
    display: flex;
    flex-direction: column;
}
.experiments__description {
    width: 50%;
    margin-top: 20px;
}
</style>
