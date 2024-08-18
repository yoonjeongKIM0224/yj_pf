<template>
    <article class="article">
        <h3 class="article_title">ABOUT ME & COMPONENTS</h3>
        <div class="list_type4">
            <ul class="list">
                <li class="item item1">
                    <router-link to="/aboutMe" class="container">
                        <span class="title">안녕하세요! 김윤정입니다. 🥰<br>제 소개를 한 번 보시겠어요?</span>
                        <p class="desc">ABOUT ME 바로가기</p>
                    </router-link>
                </li>
                <li class="item item2">
                    <router-link to="/components" class="container">
                        <span class="title">CodePen으로 보여주는!<br>다양한 컴포넌트가<br>궁금하지 않으신가요?</span>
                        <span class="desc">COMPONENTS 바로가기</span>
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
