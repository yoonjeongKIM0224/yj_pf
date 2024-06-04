<template>
    <TheList type="2" :list="detailList" :setting="false" />
</template>
  
<script>
import TheList from '@/components/TheList.vue';

export default {
    name: 'TheComponents',
    data(){
        return {
            detailList: this.list.filter((item) => item.category === 'components'),
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
