<template>
  <header class="nav">
    <router-link class="nav__link bold nav__link--olsak" to="/">Olsak.</router-link>
    <router-link class="nav__link nav__link--works" to="/about">My works</router-link>
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
  }
  .nav__link--olsak {
    left: 40px;
  }
  .nav__link--works {
    right: 40px;
  }
</style>
