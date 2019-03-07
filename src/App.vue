<template>
  <div id="app">
    <Header/>
    <router-view
    :key="$route.fullPath"
    />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { TimelineLite } from 'gsap';

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
        dribbble: "dribbble.com",
        linkedin: "linkedin.fr"
      },
      tl: "",
    }
  },
  mounted() {
    // this.$nextTick(() => {
      const socialsOverlay = document.querySelector('.socials__overlay');
    
    if(socialsOverlay){
      const name = document.querySelector('.nav__link--olsak');
      const resume = document.querySelector('.nav__link--resume');
      const title = document.querySelector('.title');
      const description = document.querySelector('.landing__txt');
      const socialsOverlay = document.querySelector('.socials__overlay');
      this.tl = new TimelineLite();
      this.tl
          .from(name, 0.6, {opacity: 0, transform: "translateY(15%)"}, "+=1")
          .from(resume, 0.5, {opacity: 0, transform: "translateY(15%)"})
          .from(title, 0.5, {opacity: 0, transform: "translateY(15%)"})
          .from(description, 0.5, {opacity: 0, transform: "translateY(5%)"})
          .from(socialsOverlay, 0.6, {transform: "scaleX(1)"})
          .play();
    }
      // })
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
  text-transform: capitalize;
  &:visited {
    color: black;
  }
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>
