<template>
  <section class="casesStudies">
    <div class="casesStudies__container container">
      <div class="caseStudies__introduction">
        <h2 class="caseStudies__title title">
            {{caseStudy.title}}
            <img src="../assets/img/pregnant-emoji.svg">
        </h2>
        <span lass="caseStudies__description">
            {{caseStudy.description}}
        </span>
      </div>
    <project-bloc
        v-for="(value, index) in caseStudy.cases"
        :key="value.slug"
        :imgs="value.imgs"
        :name="value.name"
        :slug="value.slug"
        :forme="value.forme"
        :year="value.year"
        :role="value.role"
        :context="value.context"
        :index="index+1"
    />
    <div class="casesStudies__byTheWay">
      <span class="casesStudies__byTheWaySurtitle">
        {{caseStudy.subSection.surtitle}}
      </span>
        <div class="casesStudies__byTheWayText">
          {{caseStudy.subSection.title}}
          <CopyClickLink
              v-bind:instruction="caseStudy.subSection.instruction"
              v-bind:linkContent="caseStudy.subSection.contact"
              v-bind:index="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectBloc from "@/components/ProjectBloc.vue";
import CopyClickLink from "@/components/CopyClickLink.vue";

export default {
  name: "CaseStudies",
  props: {
    caseStudy: Object,
    index: Number
  },
  components: {
    ProjectBloc,
    CopyClickLink
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.casesStudies__container {
  margin: 0 auto;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
}
.caseStudies__introduction {
  width: 40%;
  align-self: flex-end;
  font-size: 1.2rem;
  line-height: 1.5;

  @media (max-width: 700px) {
    align-self: flex-start;
    width: 100%;
  }
}
.caseStudies__title {
  font-family: "Gotham";
  font-weight: 500;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    font-size: 1.75rem;
  }
}
.caseStudies__description {
  font-size: 0.75rem;
  line-height: 1.5;
}
.caseStudies__link {
  float: right;
  position: relative;
  margin-top: 30px;
  &:after {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: black;
  }
  @media (max-width: 700px) {
    float: left;
    margin-top: 15px;
  }
}
.casesStudies__byTheWay {
  margin: 20vh 0;
}
.casesStudies__byTheWaySurtitle {
  font-size: 1rem;
  font-weight: normal;
  margin-left: 10%;
  @media (max-width: 700px) {
    margin-left: 0;
  }
}
.casesStudies__byTheWayText {
  width: 80%;
  margin: 0 auto;
  font-size: 2.5rem;
  line-height: 60px;
  letter-spacing: 3;
  @media (max-width: 700px) {
    width: 100%;
    font-size: 1.7rem;
    line-height: 1.8;
  }
}
</style>
