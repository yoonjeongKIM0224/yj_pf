<template>
    <TheList type="1" :list="detailList" />
</template>

<script>
import TheList from '@/components/TheList.vue';

export default {
    name: 'TheHobby',
    data(){
        return {
            detailList: this.list.filter((item) => item.category === 'hobby'),
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
