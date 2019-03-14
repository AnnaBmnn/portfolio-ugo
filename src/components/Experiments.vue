<template>
    <section class="experiments">
        <div class="container">
            <h2 class="title bold">
                {{title}}
                <img class="emoji" src="../assets/img/lab-emoji.svg">
            </h2>
            <div class="experiments__description" v-html="description">
            </div>
            <div class="experiments__container">
                <experiment
                    v-for="(value) in experimentsArray"
                    :key="value.slug"
                    :imgs="value.imgs"
                    :date="value.date"
                    :credit="value.credit"
                    :link="value.link"
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

  .title {
    @media (max-width: 700px) {
      font-size: 1.75rem;
    }
  }
}
.experiments__container {
  display: flex;
  flex-direction: column;
}
.experiments__description {
  line-height: 1.5;
  width: 50%;
  margin-top: 20px;
  @media (max-width: 700px) {
    width: 100%;
  }
}
</style>
