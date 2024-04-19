<template>
    <TheTab :tabs="tabs" @tabSelected="tabSelected = $event">
        <template v-slot:temp1>
          탭1
          <TheList type="1" :list="list" url="/projects/detail" />
        </template>
        <template v-slot:temp2>
          탭2
          <TheList type="1" :list="list" />
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
        }
    },
    props: {
        list: Object
    },
    components: {
        TheTab,
        TheList,
    }
}
</script>

<style>
</style>
