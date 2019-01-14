<template>
    <div class="experiment">
        <img class="experiment__img" src="../assets/experiment.png">
        <div class="experiment__infos">
            {{date}}
            <div class="bold">
                {{credit}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Experiment",
    props: {
        date: String,
        credit: String,
        img: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.experiment {
    margin: 15vh 0;
    width: 70%;
    position: relative;
    img {
        width: 100%;
        height: auto;
    }
    &:nth-child(even){
        align-self: flex-end;
    }
}
.experiment__infos {
    color: white;
    position: absolute;
    top: 100%;
    right: 0;
    text-align: right;
}
</style>
