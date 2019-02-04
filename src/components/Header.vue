<template>
  <header class="nav">
    <router-link class="nav__link bold nav__link--olsak" to="/"><span>Olsak.</span></router-link>
    <router-link class="nav__link nav__link--works" to="/works">Works</router-link>
    <a href="../BaumannAnnaStage.pdf" target="_blank" class="nav__link nav__link--resume" >Resume</a>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav__link {
    position: fixed;
    top: 40px;
    z-index: 100;
    mix-blend-mode: difference;
    color: #FFF;
  }
  .nav__link--olsak {
    font-weight: 500;
    left: 40px;

  }
  .nav__link--works {
    right: 40px;
  }
  .nav__link--resume {
    right: 40px;
    top: 80px;
  }
</style>

