<template>
    <section class="experiments">
        <div class="container">
            <h2 class="title bold">
                {{title}}
                <img src="../assets/lab-emoji.svg">
            </h2>
            <div class="experiments__description">
                {{description}}
            </div>
            <div class="experiments__container">
                <experiment
                    v-for="(value) in experimentsArray"
                    :key="value.slug"
                    :img="value.img"
                    :date="value.date"
                    :credit="value.credit"
                 />
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
    },
    props: {
        title: String,
        description: String,
        experimentsArray: Array
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
