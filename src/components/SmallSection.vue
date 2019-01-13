<template>
    <section class="smallSection">
        <div class="container">
            <h4 class="smallSection__surtitle">Available for freelance</h4>
            <h2 class="smallSection__title title bold">
                To the moon and back
                <img src="../assets/freelance-emoji.svg">
            </h2>
            <div class="smallSection__info">
                Always on the for new opportunities.
                Once again feel free to <a href="mailto:olsak.ugo@gmail.com">contact me.</a>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "SmallSection"
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
}
.smallSection__surtitle {
    margin: 0;
    font-size: 1rem;
}
.smallSection__info {
    width: 31%;
    a {
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
}
.smallSection__title {
    margin: 0;
}
</style>
