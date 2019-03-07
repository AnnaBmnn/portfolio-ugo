<template>
    <div class="socials">
        <div class="socials__overlay"></div>
        <div class="socials__contact socials__section">
            <div class="socials__title bold">
                Contact
            </div>
            <div>
                {{contact}}
            </div>

        </div>
        <div class="socials__social socials__section">
            <div class="socials__title bold">
                Social
            </div>
            <ul>
                <li 
                    class="socials__item" 
                    v-for="(value, key, index) in social"
                    :key="index"  
                    
                >
                    <a 
                        :href="value"
                        target="_blank"
                    >
                        {{key}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "socials",
    props: {
        contact: String,
        social: Object
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.socials {
    width: 66%;
    margin: 10vh 0 ;
    padding:  7vh 0 7vh 10%;
    box-sizing: border-box;
    background-color: #FAFAFA;
    font-size: 1rem;
    display: flex;
    position: relative;
    @media (max-width: 700px){
        width: 100%;
        flex-direction: column;

    }    
}
.socials__overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    z-index: 2;
    transform-origin: right;
}
.socials__contact {
    width: 42%;
    @media (max-width: 700px){
        margin-bottom: 30px;
    }    
}
.socials__social {
    width: 57%;
    @media (max-width: 700px){
        width: 90%;
    } 
}
.socials__title {
    line-height: 1;
    margin-bottom: 2vh;
    @media (max-width: 700px){
        margin-bottom: 5px;
    }  
}
.socials__item {
    line-height: 1;
    margin-right: 40px;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    z-index: 0;

    &:after {
        transform-origin: right;
        content: '';
        background-color: black;
        height: 1px;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        transform: scaleX(0);
        transition: 0.3s transform cubic-bezier(.78,0,.49,.91);
    }
    &:hover {
        &:after {
            transform: scaleX(1);
            transform-origin: left;

        }
    }
    @media (max-width: 700px){
        width: 50%;
        margin-right: 0px;
    } 
}

</style>
