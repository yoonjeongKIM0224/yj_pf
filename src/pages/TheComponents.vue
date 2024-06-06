<template>
    <TheTab type="2" :tabs="tabs" :handler="true" @tabSelected="tabSelected = $event">
        <template v-slot:tabPanel1>
            탭1
        </template>
        <template v-slot:tabPanel2>
            탭2
        </template>
    </TheTab>
</template>
  
<script>
import TheTab from '@/components/TheTab.vue';

export default {
    name: 'TheComponents',
    data(){
        return {
            tabSelected: 0,
            tabs: [
                {
                    text: 'checkbox',
                    itemClass: '',
                    disabled: false,
                },
                {
                    text: 'radio',
                    itemClass: '',
                    disabled: false,
                },
            ],
        }
    },
    props: {
        list: Object
    },
    components: {
        TheTab
    }
}
</script>

<style>
</style>
