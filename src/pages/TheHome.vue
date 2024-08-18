<template>
    <article class="article">
        <h3 class="article_title">ABOUT ME & COMPONENTS</h3>
        <div class="list_type4">
            <ul class="list">
                <li :class="['item', item.class]" v-for="(item, idx) in introList" :key="idx">
                    <router-link :to="item.link" class="item_cont">
                        <span class="title" v-html="item.text"></span>
                        <p class="desc" v-html="item.desc"></p>
                    </router-link>
                </li>
            </ul>
        </div>
    </article>

    <article class="article">
        <h3 class="article_title">PROJECT</h3>
        <TheList type="1" :list="projectList" />
    </article>

    <article class="article">
        <h3 class="article_title">HOBBY</h3>
        <TheList type="1" :list="hobbyList" />
    </article>
</template>

<script>
import TheList from '@/components/TheList.vue';

export default {
    name: 'TheHome',
    data(){
        return {
            introList: [
                {
                    text: '안녕하세요! 김윤정입니다. 🥰<br>제 소개를 한 번 보시겠어요?',
                    desc: 'ABOUT ME 바로가기',
                    link: '/aboutMe',
                    class: 'item1'
                },
                {
                    text: 'CodePen으로 보여주는!<br>다양한 컴포넌트가<br>궁금하지 않으신가요?',
                    desc: 'COMPONENTS 바로가기',
                    link: '/components',
                    class: 'item2'
                },
            ]
        }
    },
    computed: {
        projectList: function(){
            let val = this.list.filter((item) => item.category === 'projects' && item.tab === '실무' && item.recommend == true)
            let newVal = [];

            val.forEach(function(item, idx){
                if(idx < 3) {
                    newVal.push(item)
                }
            });

            return newVal
        },
        hobbyList: function(){
            let val = this.list.filter((item) => item.category === 'hobby')
            let newVal = [];

            val.forEach(function(item, idx){
                if(idx < 3) {
                    newVal.push(item)
                }
            });

            return newVal
        },
    },
    props: {
        list: Object
    },
    components: {
        TheList
    },
}
</script>

<style>
</style>
