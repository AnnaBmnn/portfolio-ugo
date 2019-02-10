<template>
    <div class="faceBloc">
        <div class="faceBloc__imgContainer">  
            <img class="faceBloc__img" src="../assets/img/olsakUgo.png">
        </div>
        <div class="faceBloc__textContainer"> 
            <h2 class="caseStudies__title title">
                    {{title}}
                <img src="../assets/img/face-emoji.svg">
            </h2>
            <div class="faceBloc__description">
                {{description}}
            </div> 
        </div>
    </div>
</template>

<script>

export default {
    name: "FaceBloc",
    props: {
        title: String,
        description: String,
        img: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.faceBloc {
    height: 90vh;
    display: flex;
    position: relative;
    @media (max-width: 700px){
        flex-direction: column;
        height: unset;
        padding-top: 15vh;
    }
}
.faceBloc__imgContainer {
    width: 41%;
    height: 100%;
    overflow: hidden;
    img {
        transform: translateY(-50px);
        object-fit: cover;
        width: 100%;
        height: auto;
    }
    @media (max-width: 700px){
        order: 3;
        width: 80%;
        margin: 0 auto;
        img {
            width: 100%;
            height: auto;
            min-height: unset;
            transform: translateY(0px);

        }
    }
}
.faceBloc__textContainer {
    width: 60%;
    padding-left: 5% ;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 700px){
        width: 80%;
        margin: 0 auto;
        order: 1;
        padding-left: 0% ;

    }
}
.caseStudies__title {
    font-family: 'Gotham';
    font-weight: normal;

    @media (max-width: 700px){
        font-size: 1.75rem;
        width: 80%;
    }
}
.faceBloc__description {
    width: 40%;
    margin: 20px 0;
    @media (max-width: 700px){
        width: 90%;
        line-height: 1.8;
        margin: 20px 0 30px;
    }
}

</style>
