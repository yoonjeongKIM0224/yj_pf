<template>
    <TheTab type="2" :tabs="tabs" @tabSelected="tabSelected = $event">
        <template v-slot:tabPanel1>
            <TheList type="1" :list="detailList" :setting="true" />
        </template>
        <template v-slot:tabPanel2>
            <TheList type="1" :list="workList" :setting="true" />
        </template>
        <template v-slot:tabPanel3>
            <TheList type="1" :list="indivList" :setting="true" />
        </template>
    </TheTab>
</template>
  
<script>
import TheTab from '@/components/TheTab.vue';
import TheList from '@/components/TheList.vue';

export default {
    name: 'TheProjects',
    data(){
        return {
            tabSelected: 0,
            tabs: [
                {
                    text: '전체',
                    itemClass: '',
                    disabled: false,
                },
                {
                    text: '실무',
                    itemClass: '',
                    disabled: false,
                },
                {
                    text: '개인',
                    itemClass: '',
                    disabled: false,
                }
            ],
            detailList: this.list.filter((item) => item.category === 'projects'),
            workList: this.list.filter((item) => item.category === 'projects' && item.tab === '실무'),
            indivList: this.list.filter((item) => item.category === 'projects' && item.tab === '개인'),
        }
    },
    props: {
        list: Object
    },
    components: {
        TheTab,
        TheList
    },
}
</script>

<style>
</style>
