<template>
    <section class="casesStudies">
        <div class="casesStudies__container container">
            <div class="caseStudies__introduction">
                <h2 class="caseStudies__title title">
                    {{caseStudy.title}}
                    <img src="../assets/pregnant-emoji.svg">
                </h2>
                <span>
                    {{caseStudy.description}}
                </span>
                <router-link class="caseStudies__link" to="/about">View all projects</router-link>
            </div>
            <project-bloc
                v-for="(value) in caseStudy.cases"
                :key="value.slug"
                :img="value.img"
                :name="value.name"
                :slug="value.slug"
                :forme="value.forme"
                :year="value.year"
                :role="value.role"
                :context="value.context"
            />
            <div class="casesStudies__byTheWay">
                <span class="casesStudies__byTheWaySurtitle">
                    {{caseStudy.subSection.surtitle}}
                </span>
                <div class="casesStudies__byTheWayText">
                    {{caseStudy.subSection.title}}
                    <a class='casesStudies__byTheWayContact' href='mailto:olsak.ugo@gmail.com'>Contact me.</a>
                </div>
                <div class="casesStudies__byTheWayInstruction" >
                    {{caseStudy.subSection.instruction}}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectBloc from "@/components/ProjectBloc.vue";

export default {
    name: "CaseStudies",
    props: {
        caseStudy: Object
    },
    components: {
        ProjectBloc
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.casesStudies__container {
    margin: 5vh auto 10vh;
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
.casesStudies__byTheWaySurtitle {
    margin-left: 5%;
    font-size: 1rem;
}
.casesStudies__byTheWayText {
    width: 90%;
    margin: 0 auto;
    font-size: 2.5rem;
}
.casesStudies__byTheWayContact {
    position: relative;
    &:after {
        content: '';
        height: 1px;
        width: calc(100%);
        position: absolute;
        top: 100%;
        right: 0;
        background-color: black;
    }
}
.casesStudies__byTheWayInstruction {
    font-size: 1rem;
    float: right;
    margin-top: 10vh;
}
</style>
