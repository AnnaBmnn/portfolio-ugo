<template>
    <span>
        <span 
            class='copyClickLink__contact' 
            @click="clickToCopy"
        >
            {{linkContent}}
        </span>
        <div class="copyClickLink__instruction" >
            {{stateInstruction}}
        </div>
    </span>
</template>

<script>

export default {
    name: "CopyClickLink",
    data (){
        return {
            stateInstruction: this.instruction
        }
    },
    props: {
        instruction: String,
        linkContent: String
    },
    methods: {
        clickToCopy: function(){
            navigator.clipboard.writeText("olsak.ugo@gmail.com").then(()=> {
                /* clipboard successfully set */
                this.stateInstruction = "copied to clipboard";
            }, function() {
                console.log("fail");
                /* clipboard write failed */
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.copyClickLink__contact {
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-weight: 300;
    &:after {
        content: '';
        height: 1px;
        width: calc(100%);
        position: absolute;
        top: 100%;
        right: 0;
        background-color: black;
    }
    &:hover + .copyClickLink__instruction {
        opacity: 1;
    }
}
.copyClickLink__instruction {
    opacity: 0;
    transition: 0.3s opacity ease-in-out;
    font-size: 1rem;
    position: absolute;
    right: 10%;
    margin-top: 10vh;
    font-weight: normal;
}
</style>
