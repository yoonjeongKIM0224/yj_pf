<template>
    <TheList type="1" :list="list.components.use" url="/components/detail" />
</template>
  
<script>
import TheList from '@/components/TheList.vue';

export default {
    name: 'TheComponents',
    data(){
        return {
        }
    },
    props: {
        list: Object
    },
    components: {
        TheList
    }
}
</script>

<style>
</style>
