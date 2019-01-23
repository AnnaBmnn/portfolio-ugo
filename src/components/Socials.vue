<template>
    <div class="socials">
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
    padding:  5vh 0 5vh 10%;
    box-sizing: border-box;
    background-color: #FAFAFA;
    font-size: 1rem;
    display: flex;
    @media (max-width: 700px){
        width: 100%;
        flex-direction: column;

    }    
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
    margin-bottom: 20px;
    @media (max-width: 700px){
        margin-bottom: 5px;
    }  
}
.socials__item {
    margin-right: 40px;
    display: inline-block;
    box-sizing: border-box;
    @media (max-width: 700px){
        width: 50%;
        margin-right: 0px;
    } 
}

</style>
