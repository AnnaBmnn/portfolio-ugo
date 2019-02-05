<template>
    <section class="experiments">
        <div class="container">
            <h2 class="title bold">
                {{title}}
                <img class="emoji" src="../assets/img/lab-emoji.svg">
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
    background-color: white;
    color: white;
    transition: background-color 1s ease-in-out;
    .emoji {
        opacity: 0;
        transition: opacity 0.1s ease-in;

    }
    &.active {
        background-color: #161616;
        .emoji {
            opacity: 1;
        }
    }
    .title {
        @media (max-width: 700px){
            font-size: 1.75rem;
        }
    }
}
.experiments__container {
    display: flex;
    flex-direction: column;
}
.experiments__description {
    width: 50%;
    margin-top: 20px;
    @media (max-width: 700px){
        width: 100%;
    }
}
</style>
