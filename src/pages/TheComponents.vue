<template>
    <TheTab type="2" :tabs="tabs" :handler="true" @tabSelected="tabSelected = $event">
        <template v-slot:tabPanel1>
            <iframe height="600" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/yoonjeongkim0224/embed/poXewEQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/yoonjeongkim0224/pen/poXewEQ">
            Untitled</a> by yoonjeong (<a href="https://codepen.io/yoonjeongkim0224">@yoonjeongkim0224</a>)
            on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </template>
        <template v-slot:tabPanel2>
            <iframe height="600" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/yoonjeongkim0224/embed/MWMpJPg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/yoonjeongkim0224/pen/MWMpJPg">
            Untitled</a> by yoonjeong (<a href="https://codepen.io/yoonjeongkim0224">@yoonjeongkim0224</a>)
            on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </template>
        <template v-slot:tabPanel3>
            <iframe height="600" style="width: 100%;" scrolling="no" title="dark mode" src="https://codepen.io/yoonjeongkim0224/embed/VwOomRM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/yoonjeongkim0224/pen/VwOomRM">
                dark mode</a> by yoonjeong (<a href="https://codepen.io/yoonjeongkim0224">@yoonjeongkim0224</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </template>
        <template v-slot:tabPanel4>
            <iframe height="600" style="width: 100%;" scrolling="no" title="js" src="https://codepen.io/yoonjeongkim0224/embed/BaPJwrp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/yoonjeongkim0224/pen/BaPJwrp">
                js</a> by yoonjeong (<a href="https://codepen.io/yoonjeongkim0224">@yoonjeongkim0224</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </template>
        <template v-slot:tabPanel5>
            <iframe height="600" style="width: 100%;" scrolling="no" title="find btn" src="https://codepen.io/yoonjeongkim0224/embed/OJOJrmm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/yoonjeongkim0224/pen/OJOJrmm">
                find btn</a> by yoonjeong (<a href="https://codepen.io/yoonjeongkim0224">@yoonjeongkim0224</a>)
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
                {
                    text: 'radio',
                    itemClass: '',
                    disabled: false,
                },
                {
                    text: 'radio',
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
