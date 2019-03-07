<template>
    <section :class="theme" class="smallSection">
        <div class="container">
            <h4 v-if="surtitle" class="smallSection__surtitle">{{surtitle}}</h4>
            <h2 class="smallSection__title title bold">
                {{title}}
                <img src="../assets/img/freelance-emoji.svg">
            </h2>
            <div class="smallSection__info" >
                <span class="smallSection__description" v-html="description"/>

                <CopyClickLink
                    v-bind:instruction="instruction"
                    v-bind:linkContent="contact"
                    v-bind:index="index"
                />
            </div>
            <BackToTopText v-if="isFooter" />
            <div v-if="isFooter" class="smallSection__credits"><span class="developed"> Developed by <a href="https://annabaumann.fr/" target="_blank" class="bold" >Anna Baumann</a><img src="../assets/img/dolphin.png"></span>Credits @2018-2019 </div>
        </div>
    </section>
</template>

<script>

import CopyClickLink from "@/components/CopyClickLink.vue";
import BackToTopText from "@/components/BackToTopText.vue";

export default {
    name: "SmallSection",
    components: {
        CopyClickLink,
        BackToTopText
    },
    props: {
        surtitle: String,
        title: String,
        description: String,
        theme: String,
        contact: String,
        instruction: String,
        isFooter: Boolean,
        index: Number
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.dark {
    .copyClickLink__contact:after {
        background-color: white;
    }
}
.smallSection {
    .copyClickLink__index {
        font-size: 0.7rem;
    }
}
</style>
<style scoped lang="scss">
.smallSection {
    position: relative;
    height: 80vh;
    display: flex;
    align-items: center;
    @media (max-width: 1000px){
        .container {
            margin-bottom: 20vh;
        }

    }
    &.dark {
        background-color: #161616;
        color: white;
    }
    &.light {
        background-color: white;
        color: #161616;
        .copyClickLink__contact {
            font-weight: normal;

        }
        .smallSection__info {
            width: 40%;
            .smallSection__description {
                width: 100%;
            }
        }
    }
    @media (max-width: 700px){
        height: 65vh;
    }
}
.smallSection__surtitle {
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
}
.smallSection__info {
    width: 33%;
    margin-top: 20px;
    line-height: 1.5;
    .link {
        position: relative;
        color: white;
        &:after {
            content: '';
            height: 1px;
            width: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            transform: scaleX(0);
            transition: 0.3s transform cubic-bezier(.78,0,.49,.91);
            background-color: white;
        }
    }
    &:hover {
        &:after {
            transform: scaleX(1);
            transform-origin: left;

        }
    }
    @media (max-width: 700px){
        width: 100%;
    }
}
.smallSection__title {
    margin: 0;
    font-family :'Gotham';
    font-weight: 400;
    @media (max-width: 700px){
        font-size: 1.75rem;
    }

}
.smallSection__credits {
    color: rgba(0,0,0,1);
    line-height: 1;
    letter-spacing: 1.35px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1000px){
        text-align: center;
    }
}
.developed {
    position: relative;
    margin-right: 30px;

    img {
        margin-left: 8px;
        width: 20px;
        height: auto;
    }
    &:after {
        content: "";
        border-radius: 50%;
        height: 5px;
        width: 5px;
        background-color: black;
        position: absolute;
        right: -15px;
        top: 50%;

        transform: translateY(-50%);
    }
    @media (max-width: 1000px){
        width: 100%;
        margin-bottom: 15px;
        margin-right: 0;
        display: inline-block;
        &:after {
            display: none;

        }

    }
}
</style>
