<template>
    <section class="smallSection">
        <div class="container">
            <h4 class="smallSection__surtitle">{{surtitle}}</h4>
            <h2 class="smallSection__title title bold">
                {{title}}
                <img src="../assets/img/freelance-emoji.svg">
            </h2>
            <div class="smallSection__info" >
                {{description}}
                <a class="link" href="mailto:olsak.ugo@gmail.com">contact me.</a>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "SmallSection",
    props: {
        surtitle: String,
        title: String,
        description: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.smallSection {
    height: 80vh;
    display: flex;
    align-items: center;
    background-color: #161616;
    color: white;
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
