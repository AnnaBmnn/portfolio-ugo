<template>
    <div class="arrowToTop">
        <img src="../assets/icons/arrow.svg"/>
        <svg class="arrowToTop__circle"  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"> 
            <circle cx="50" cy="50" r="47" fill="none" stroke="black" stroke-width="3" :style="{strokeDashoffset: this.ratioScroll*275}"></circle>
        </svg>
    </div>

</template>

<script>

export default {
    name: "ArrowToTop",
    data() {
        return {
            documentHeight: 0,
            windowHeight: 0,
            ratioScroll: 0,
        }
    },
    methods: {
        handleScroll (e) {
            const scroll = window.scrollY;
            console.log(window.scrollTop);
            console.log(this.documentHeight);
            console.log(window.visualViewport.pageTop);
            this.ratioScroll = 1-(scroll)/(this.documentHeight);
            // this.ratioScroll = 1-(scroll)/(this.documentHeight-this.windowHeight);
            console.log(this.ratioScroll);
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
.arrowToTop {
    width: 60px;
    height: 60px;
    position: fixed;
    top: 83%;
    right: 60px;
    z-index: 1000;
    // background-color: white;
    // mix-blend-mode: difference;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 1px);
    }
    .arrowToTop__circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 1px);
        // transform: translate3d(-50%, -50%, 1px) scale(4);
        circle {
            stroke-dasharray: 295;
            transform: rotateZ(-90deg);
            transform-origin: center;


        }
    }
}

</style>
