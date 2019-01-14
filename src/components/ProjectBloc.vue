<template>
    <div class="project">
        <img class="project__img"  src="../assets/project.png">
        <img class="project__form" src="../assets/projectForm.svg">
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

        <h3 class="project__title">{{name}}</h3>
        <router-link :to="slug" class="project__link">View Case</router-link>

        
    </div>
</template>

<script>
console.log("project")
export default {
    name: "ProjectBloc",
    props: {
        name: String,
        slug: String,
        img: String,
        forme: String,
        year: String,
        role: String,
        context: String
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
    .project__img {
        position: relative;
        object-fit: cover;
        z-index: 2;

    }
    &:nth-child(odd){
        align-self: flex-end;
    }
}
.project__title {
    //gotham
    position: absolute;
    bottom: 30px;
    right: 30px;
    line-height: 3.6rem;
    font-size: 3.6rem;
    color: white;
    margin: 0;
    z-index: 2;
}
.project__date {
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

    .project__info {
        margin-left: 40px;

    }
}

.project__form {
    position: absolute;
    left: -10vw;
    top: -50px;
    z-index: 1;
}

</style>
