<template>
    <a :href="link" class="experiment" target="_blank">
        <div class="experiment__imgContainer">
            <img 
                class="experiment__img" 
                :src="imgs[0]"
                :srcset="`${imgs[0]} 800w,
                    ${imgs[1]} 400w`"
            >
        </div>
        <div class="experiment__infos">
            {{date}}
            <div class="bold">
                {{credit}}
            </div>
        </div>
    </a>
</template>

<script>

export default {
    name: "Experiment",
    props: {
        date: String,
        credit: String,
        imgs: Array,
        link: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.experiment {
    margin: 15vh 0;
    width: 70%;
    position: relative;
    .experiment__imgContainer {
        width: 100%;
        overflow: hidden;
        height: auto;
        &:hover {
            img {
                transform: scale(1.08);
            }
        }
        img {
            width: 100%;
            height: auto;
            will-change: transform;
            transition: transform 1.8s ease-in-out;

            transform: scale(1);
        }
    }

    &:nth-child(even){
        align-self: flex-end;
    }
    @media (max-width: 700px){
        width: 100%;
        &:nth-child(even){
            align-self: flex-start;
        }
    }
}
.experiment__infos {
    color: white;
    position: absolute;
    top: 100%;
    right: 0;
    text-align: right;
    @media (max-width: 700px){
        text-align: left;
        right: unset;
        left: 0;

    }
}
</style>
