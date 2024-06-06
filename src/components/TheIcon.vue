<template>
    <i :class="[`icon_${icon}`, size, `rotate${rotate}`]"></i>
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
        rotate: String
    },
    components: {
    }
}
</script>

<style>
</style>
