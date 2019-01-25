<template>
    <back-to-top 
        bottom="30px"
        right="40px"
        class="backToTop"
        @click="goToTop"
    >
        back to top
    </back-to-top>

</template>

<script>
import BackToTop from 'vue-backtotop'
export default {
    name: "BackToTopText",
    components: {
        BackToTop
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.backToTop {
    cursor: pointer;
    position: absolute;
    // bottom: 30px;
    // right: 40px;
    color: rgba(0,0,0,0.5);
    font-weight: normal;
    line-height: 1;
    letter-spacing: 1.35px;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: 1px;
        background-color: rgba(0,0,0,0.5);
    }
}

</style>
