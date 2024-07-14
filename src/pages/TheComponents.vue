<template>
    <TheTab type="2" :tabs="tabs" :handler="true" @tabSelected="tabSelected = $event">
        <template v-slot:tabPanel1>
            <iframe height="600" style="width: 100%;" scrolling="no" title="cat" src="https://codepen.io/yoonjeongkim0224/embed/vYJqxVx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/yoonjeongkim0224/pen/vYJqxVx">
            cat</a> by yoonjeong (<a href="https://codepen.io/yoonjeongkim0224">@yoonjeongkim0224</a>)
            on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </template>
        <template v-slot:tabPanel2>
            <iframe height="600" style="width: 100%;" scrolling="no" title="skull" src="https://codepen.io/yoonjeongkim0224/embed/VwMedvx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/yoonjeongkim0224/pen/VwMedvx">
            skull</a> by yoonjeong (<a href="https://codepen.io/yoonjeongkim0224">@yoonjeongkim0224</a>)
            on <a href="https://codepen.io">CodePen</a>.
            </iframe>
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
    },
}
</script>

<style>
</style>
