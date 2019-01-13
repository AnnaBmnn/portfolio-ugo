<template>
    <section class="casesStudies">
        <div class="casesStudies__container container">
            <div class="caseStudies__introduction">
                <h2 class="caseStudies__title title">
                    Case Studies
                    <img src="../assets/pregnant-emoji.svg">
                </h2>
                <span>
                    A quick selection of my work as an intern, freelance and student.
                </span>
                <router-link class="caseStudies__link" to="/about">View all projects</router-link>
            </div>
            <project-bloc />
            <project-bloc />
            <project-bloc />
        </div>
    </section>
</template>

<script>
import ProjectBloc from "@/components/ProjectBloc.vue";

export default {
    name: "CaseStudies",
    props: {
        title: String,
        description: String,
        commun: Object,
        social: Object
    },
    components: {
        ProjectBloc
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.casesStudies__container {
    margin: 200px auto;
    display: flex;
    flex-direction: column;
}
.caseStudies__introduction {
    width: 40%;
    align-self: flex-end;
    font-size: 1.2rem;
}
.caseStudies__title {
    margin-bottom: 20px;
}
.caseStudies__link {
    float: right;
    position: relative;
    margin-top: 30px;
    &:after {
        content: '';
        height: 1px;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: black;
    }
}
</style>
