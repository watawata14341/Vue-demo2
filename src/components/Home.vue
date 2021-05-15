<template>
    <div>
        <p v-border:solid.round.shadow="{width: '2px', color: 'red'}">Home</p>
        <h2>{{ title }}</h2>
    </div>
    <CountNumber></CountNumber>
</template>

<script>
import CountNumber from "./CountNumber.vue"

export default {
    data() {
        return {
            title: "welcome to tokyo"
        };
    },
    components: {
        CountNumber
    },
    directives: {
        border(el,binding) {
            el.style.border = "solid black 2px";
            el.style.borderWidth = binding.value.width;
            el.style.borderColor = binding.value.color;
            el.style.borderStyle = binding.arg;
        }
    }
}
</script>