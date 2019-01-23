<template>
    <section :class="theme" class="smallSection">
        <div class="container">
            <h4 :v-show="surtitle" class="smallSection__surtitle">{{surtitle}}</h4>
            <h2 class="smallSection__title title bold">
                {{title}}
                <img src="../assets/img/freelance-emoji.svg">
            </h2>
            <div class="smallSection__info" >
                {{description}}
                <CopyClickLink
                    v-bind:instruction="instruction"
                    v-bind:linkContent="contact"
                />
            </div>

        </div>
    </section>
</template>

<script>
import CopyClickLink from "@/components/CopyClickLink.vue";

export default {
    name: "SmallSection",
    components: {
        CopyClickLink
    },
    props: {
        surtitle: String,
        title: String,
        description: String,
        theme: String,
        contact: String,
        instruction: String
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
</style>
<style scoped lang="scss">
.smallSection {
    height: 80vh;
    display: flex;
    align-items: center;

    &.dark {
        background-color: #161616;
        color: white;
    }
    &.light {
        background-color: white;
        color: #161616;
        .smallSection__info {
            width: 40%;
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
    width: 31%;
    margin-top: 20px;
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
            background-color: white;
        }
    }
    @media (max-width: 700px){
        width: 100%;
    }
}
.smallSection__title {
    margin: 0;
    font-family :'Gotham';
    font-weight: normal;
    @media (max-width: 700px){
        font-size: 1.75rem;
    }

}
</style>
