<template>
    <TheList type="1" :list="list.design.use" url="/design/detail" />
</template>
  
<script>
import TheList from '@/components/TheList.vue';

export default {
    name: 'TheDesign',
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
