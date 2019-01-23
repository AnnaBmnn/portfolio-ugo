<template>
  <div id="app">
    <Header/>
    <router-view
    />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  },
  data (){
    return {
      home: {
        title: "Oh ! Hey there sunshine ",
        description: "I’m Ugo Olsak, a<span class='bold'> fourth year student at HETIC</span> and <span class='bold'>freelancer</span>. Even though the digital environment is for me like water for a fish, I grew up wondering why things were made the way they are (...consider me a very self aware fish). This quest led me to an emerging passion, <span class='bold'>design.</span>",
      },
      commun: {
        contact: "olsak.ugo@gmail.com"
      },
      social: {
        twitter: "twitter.fr",
        behance: "behance.com",
        dribble: "dribble.com",
        linkedin: "linkedin.fr"
      }
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/_fonts.scss";
@import "~@/assets/scss/_animateSection.scss";

#app {
  font-family: 'Graphik', "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin: 0;
  width: 100vw;
  overflow: hidden;
  font-size: 1.12rem;
  line-height: 40px;
  font-weight: 200;
  background-color: white;

}
body, ul, li, h1, h2, h3, h4 {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 3rem;
  img {
    height: 60px;
    width: 60px;
    transform: translateY(10px);
    @media (max-width: 700px){
      height: 40px;
      width: 40px;
      transform: translateY(5px);

    }
  }

}

li {
  text-decoration: none;
  list-style: none;;
}
.bold {
  font-weight: normal;
}
a {
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
  }
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>
