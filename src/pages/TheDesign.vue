<template>
    <TheList type="1" :list="detailList" />
</template>
  
<script>
import TheList from '@/components/TheList.vue';

export default {
    name: 'TheDesign',
    data(){
        return {
            detailList: this.list.filter((item) => item.category === 'design'),
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
