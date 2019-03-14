<template>
    <div class="infos">
        <div class="infos__overlay"></div>

        <div class="infos__social infos__section">

            <div 
                class="infos__info"
                v-for="(value, key, index) in commun"
                :key="index" 
            >
                <div class="infos__title bold">
                    {{key}}
                </div>
                <div>
                    {{value}}
                </div>
            </div>
        </div>
        <div class="infos__contact infos__section" v-if="link !== 'false' ">
            <div class="infos__title bold">
                See it live
            </div>
            <div>
                <a
                    target="_blank" 
                    :href="link"
                >
                   {{siteLink}}
                </a>
                
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "infos",
  props: {
    commun: Object,
    link: String,
    siteLink: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.infos {
  position: relative;
  width: 66%;
  margin: 10vh 0;
  padding: 7vh 0 7vh 10%;
  box-sizing: border-box;
  background-color: #fafafa;
  font-size: 1rem;
  display: flex;
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
}
.infos__overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  z-index: 2;
  transform-origin: right;
}
.infos__info {
  display: inline-block;
  min-width: 100px;
}
.infos__contact {
  width: 42%;
  @media (max-width: 700px) {
    margin-bottom: 30px;
  }
}
.infos__social {
  width: 57%;
  @media (max-width: 700px) {
    width: 90%;
  }
}
.infos__title {
  text-transform: capitalize;
  line-height: 1;
  margin-bottom: 2vh;
  @media (max-width: 700px) {
    margin-bottom: 5px;
  }
}
.infos__item {
  line-height: 1;
  margin-right: 40px;
  display: inline-block;
  box-sizing: border-box;
  @media (max-width: 700px) {
    width: 50%;
    margin-right: 0px;
  }
}
</style>
