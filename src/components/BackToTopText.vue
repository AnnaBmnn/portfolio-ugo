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
    },
    methods: {
        goToTop (e) {
            console.log("TOP");
            window.scrollTo(0,0);
        }
    },
    mounted() {


        this.$nextTick(() => {
            this.documentHeight = document.body.clientHeight;
            this.windowHeight = window.innerHeight;
            window.addEventListener('resize', () => {
                this.documentHeight = document.body.scrollHeight;
                this.windowHeight = window.innerHeight;
            });
        })
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
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
