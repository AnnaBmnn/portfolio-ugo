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
        <ul class="faceBloc__controls">
            <li>
                <a class=" faceBloc__control">Natural</a>
            </li>
            <li>
                <a class="active faceBloc__control">Corporate</a>
            </li>            
        </ul>
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
    }
}
.faceBloc__imgContainer {
    width: 41%;
    height: 100%;
    overflow: hidden;
    img {
        transform: translateY(-50px);
        object-fit: cover;
        min-width: 100%;
        min-height: 100%;
    }
    @media (max-width: 700px){
        order: 3;
        width: 80%;
        margin: 0 auto;
        img {
            width: 100%;
            height: auto;
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
        order: 1;
    }
}
.faceBloc__description {
    width: 40%;
}
.faceBloc__controls {
    position: absolute;
    right: 10%;
    bottom: 30px;
    li {
        margin-left: 30px;
        display: inline-block;
        a {
            position: relative;
        }
    }

    a.active {
        font-weight: bold;
        &:after {
            content: '';
            height: 1px;
            width: calc(100%);
            position: absolute;
            top: 100%;
            right: 0;
            background-color: black;
        }
    }
}
</style>
