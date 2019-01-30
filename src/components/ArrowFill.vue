<template>
    <div class="ArrowFill">
        <img src="../assets/icons/arrow.svg"/>
        <svg class="ArrowFill__circle"  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"> 
            <circle cx="50" cy="50" r="47" fill="none" stroke="black" stroke-width="3" :style="{strokeDashoffset: this.ratioScroll*295}"></circle>
        </svg>
    </div>

</template>

<script>

export default {
    name: "ArrowFill",
    data() {
        return {
            fullHeight: 0,
            windowHeight: 0,
            ratioScroll: 1,
        }
    },
    methods: {
        handleScroll (e) {
            const scroll = window.scrollY;
            this.fullHeight = document.querySelector('#app').offsetHeight;
            this.ratioScroll = 1-(scroll)/(this.fullHeight-this.windowHeight);
        }
    },
    mounted() {


        this.$nextTick(() => {
            this.fullHeight = document.querySelector('#app').offsetHeight;
            this.windowHeight = window.innerHeight;
            window.addEventListener('resize', () => {
                this.fullHeight = document.querySelector('#app').offsetHeight;
                this.windowHeight = window.innerHeight;
            });
        })
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
        this.fullHeight = document.querySelector('#app').offsetHeight;

    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ArrowFill {
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
    .ArrowFill__circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 1px);
        // mix-blend-mode: difference;


        circle {
            stroke-dasharray: 295;
            transform: rotateZ(-90deg);
            transform-origin: center;
            // stroke: #FFF;

        }
    }
}

</style>
