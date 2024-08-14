<template>
    <i :class="[`icon_${icon}`, size, rotate ? `rotate${rotate}` : '', margin ? `margin_${margin}` : '']"></i>
</template>

<script>
export default {
    name: 'TheButton',
    data(){
        return {
        }
    },
    props: {
        icon: String,
        size: String,
        rotate: String,
        margin: String,
    },
    components: {
    }
}
</script>

<style>
</style>
