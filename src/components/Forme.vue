<template>
<svg class="mysvg" width="538" height="190" viewBox="0 0 600 200">
    <defs> 
        <filter id="turb">
            <feTurbulence ref="turbForm" id="turbwave" type="fractalNoise" baseFrequency="0.015" numOctaves="2"
                result="turbulence_3" data-filterId="3" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="turbulence_3" scale="40" />
        </filter>
    </defs>
    <image id="img" x="0" y="0" width="100%" height="100%" xlink:href="../assets/img/projectForm.svg" filter="url(#turb)" />
</svg>
</template>

<script>
export default {
  name: "Forme",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mysvg {
  transform: scale(2);
}
</style>
