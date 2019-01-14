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
    margin: 100px 0 90px;
    padding:  65px 0 65px 10%;
    box-sizing: border-box;
    background-color: #FAFAFA;
    font-size: 1rem;
    display: flex;
}
.socials__contact {
    width: 42%;
}
.socials__social {
    width: 57%;
}
.socials__title {
    margin-bottom: 20px;
}
.socials__item {
    margin-right: 40px;
}
.socials__item {
    display: inline-block;
}
</style>
