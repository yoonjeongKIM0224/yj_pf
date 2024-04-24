<template>
    <TheTab :tabs="tabs" @tabSelected="tabSelected = $event">
        <template v-slot:tabPanel1>
          <TheList type="1" :list="workList" />
        </template>
        <template v-slot:tabPanel2>
            <TheList type="1" :list="indivList" />
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
