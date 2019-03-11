<template>
    <router-link 
        class="project" 
        :to="`project/${slug}`"

    >  
        <div 
            @mouseenter="mouseEnter(slug, $event)"
            @mouseleave="mouseLeave(slug, $event)"
        >
            <div 
                class="project__imgContainer"

            >
                <img 
                    class="project__img"  
                    :src="imgs[0]"
                    :srcset="`
                        ${imgs[0]} 480w,
                        ${imgs[1]} 2x,
                        ${imgs[2]} 500w,
                        `"
                >
            </div>
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
            <div class="project__svg">
                <svg  width="730" height="640" viewBox="0 0 520 640">
                    <defs> 
                        <filter id="turb">
                            <feTurbulence :class="`turbwave__${slug}`" type="fractalNoise" baseFrequency="0.00" numOctaves="2"
                                result="turbulence_3" data-filterId="3" />
                            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="turbulence_3" scale="40" />
                        </filter>
                    </defs>
                    <image id="img" x="20" y="20" width="680px" height="600px" v-bind:xlink:href="forme" filter="url(#turb)" />
                </svg>
            </div>
        </div>
        
    </router-link >
</template>

<script>
import { TweenMax } from 'gsap';

export default {
    name: "ProjectBloc",
    props: {
        name: String,
        slug: String,
        imgs: Array,
        year: String,
        role: String,
        context: String,
        index: Number,
        forme: String
    },
    data: function(){
        return {
            tl: ""
        }
    },
    components: {
    },
    methods: {
        mouseEnter: function(elementHover, event){
            // const hoverElementDom = `.turbwave__${elementHover}`;
            // const formeElement = document.querySelector(hoverElementDom);
            // console.log(formeElement);
            // this.tl = TweenMax.to(formeElement, 2, {
            //     attr:{"baseFrequency":0.01},
            //     repeat:-1,
            //     yoyo:true
            // });
            // console.log(this.tl);

        },
        mouseLeave: function(elementHover, event){
            // this.tl.baseFrequencyX = 0;
            // this.tl.repeat = 1;
            // const hoverElementDom = `.turbwave__${elementHover}`;
            // const formeElement = document.querySelector(hoverElementDom);
            // this.tl = TweenMax.to(formeElement, 0.2, {
            //     attr:{"baseFrequency":0.00},
            //     repeat:1,
            //     yoyo:false
            // });   
            // console.log(this.tl);

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
    .project__imgContainer {
        overflow: hidden;
        height: 100%;
        width: 100%;
        &:hover {
            .project__img {
                transform: scale(1.02);
            }
        }
    }
    
    .project__svg {
        position: absolute;
        top: -2vh;
        left: -6vw;
        // z-index: -1;
        // height: 100%;
        width: 100%;
    }
    .project__img {
        position: relative;
        object-fit: cover;
        z-index: 2;
        will-change: transform;
        transition: transform 1.8s ease-in-out;
        // transition: transform 1.8s cubic-bezier(0.075, 0.82, 0.165, 1);
        transform: scale(1);
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
    text-align: right;
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
    transform: scale(4) translateY(50%);
}

</style>
