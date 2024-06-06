<template>
    <i :class="[`icon_${icon}`, size]"></i>
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
        size: String
    },
    components: {
    }
}
</script>

<style>
</style>
