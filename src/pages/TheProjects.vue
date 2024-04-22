<template>
    <TheTab :tabs="tabs" @tabSelected="tabSelected = $event">
        <template v-slot:tabPanel1>
          <TheList type="1" :list="workList" url="/projects/detail" tabText="work" />
        </template>
        <template v-slot:tabPanel2>
            <TheList type="1" :list="indivList" url="/projects/detail" tabText="indiv" />
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
            workList: this.list.projects.use.filter((item) => item.tabType !== '개인'),
            indivList: this.list.projects.use.filter((item) => item.tabType === '개인'),
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
