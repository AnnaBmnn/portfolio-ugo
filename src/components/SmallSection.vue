<template>
    <section :class="theme" class="smallSection">
        <div class="container">
            <h4 :v-show="surtitle" class="smallSection__surtitle">{{surtitle}}</h4>
            <h2 class="smallSection__title title bold">
                {{title}}
                <img src="../assets/img/freelance-emoji.svg">
            </h2>
            <div class="smallSection__info" v-html="description" />

        </div>
    </section>
</template>

<script>

export default {
    name: "SmallSection",
    props: {
        surtitle: String,
        title: String,
        description: String,
        theme: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
