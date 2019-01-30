<template>
    <div 
        class="project" 
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
    >
        <img class="project__img"  src="../assets/img/project.png">
        <forme ref="turbForm" class="project__form" />
        <span class="project__date">{{year}}</span>
        <div class="project__infos">
            <div class="project__info">
                <span class="bold">Rôle</span>
                <br>
                <span class="">{{role}}</span>
            </div>
            <div class="project__info">
                <span class="bold">Contexte</span>
                <br>
                <span class="">{{context}}</span>
            </div>

        </div>

        <h3 class="project__title">
            {{name}}
            <span class="project__numero">{{index}}</span>
        </h3>
        <router-link :to="`project/${slug}`" class="project__link">View Case</router-link>

        
    </div>
</template>

<script>
import { TweenMax } from 'gsap'
import Forme from "@/components/Forme.vue";

export default {
    name: "ProjectBloc",
    props: {
        name: String,
        slug: String,
        img: String,
        forme: String,
        year: String,
        role: String,
        context: String,
        index: Number
    },
    components: {
        Forme
    },
    methods: {
        mouseOver: function(){
            console.log("hover");
            const forme = this.$refs.turbForm ;
            console.log(forme);
            TweenMax.to("#turbwave", 2, {
                // attr:{"fill":"#000000"},
                attr:{"baseFrequency":0.01},
                repeat:-1,
                yoyo:true
            });
        },
        mouseLeave: function(){
            console.log("moouse out")
            
        },
        mounted() { 
            const { box } = this.$refs
            const timeline = new TimelineLite() 
            
            timeline.to(box, 1, { x: 200, rotation: 90 }) 
        } 
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project {
    height: 600px;
    width: 480px;
    margin: 15vh 0;
    position: relative;
    .project__img {
        position: relative;
        object-fit: cover;
        z-index: 2;

    }
    &:nth-child(odd){
        align-self: flex-end;
    }
    @media (max-width: 700px){
        width: 100%;
        height: fit-content;
        img {
            width: 100%;
            height: auto;
        }
    }
}
.project__title {
    font-family: 'Gotham';
    font-weight: 500;
    position: absolute;
    bottom: 30px;
    right: 30px;
    line-height: 3.6rem;
    font-size: 3.6rem;
    color: white;
    margin: 0;
    z-index: 2;
    @media (max-width: 700px){
        font-size: 2.2rem;
    }
}
.project__numero {
    position: absolute;
    left: 100%;
    line-height: 1;
    top: 0px;
    font-size: 14px;
    font-family: 'Graphik';
    font-weight: 500;

}
.project__date {
    font-weight: normal;
    position: absolute;
    top: -30px;
    // bottom: 620px;
    right: 20px;
    line-height: 1rem;
    font-size: 1rem;
    z-index: 2;

}
.project__link {
    position: absolute;
    bottom: -30px;
    right: 20px;
    line-height: 1.2rem;
    font-weight: normal;
    font-size: 1.2rem;
    z-index: 2;

    &:after {
        content: '';
        height: 1px;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: black;
    }
}

.project__infos {
    position: absolute;
    top: 30px;
    right: 20px;
    font-size: 1rem;
    color: white;
    display: flex;
    z-index: 2;
    .bold {
        font-weight: 500;
    }
    .project__info {
        font-weight: normal;
        margin-left: 40px;
    }
    @media (max-width: 700px){
        top: 15px;
        line-height: 1.8;
    }
}

.project__form {
    position: absolute;
    left: -10vw;
    top: -50px;
    z-index: 1;
}

</style>
