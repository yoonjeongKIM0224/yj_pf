<template>
    <article class="article">
        <h3 class="article_title">연혁</h3>
        <p class="article_text">카카오가 디딘 첫걸음부터 지금까지의 발걸음을 담았습니다.</p>
        <div class="list_type4">
            <ul class="list">
                <li class="item item1">
                    <div class="container">
                        <span class="title">카카오의 다양한 소식을 구독하세요!</span>
                        <p class="desc">공식 소셜 미디어 바로가기</p>
                        <span class="circle_list">
                            <span class="item">🥰</span>
                            <span class="item">🥰</span>
                            <span class="item">🥰</span>
                            <span class="item">🥰</span>
                        </span>
                    </div>
                </li>
                <li class="item item2">
                    <div class="container">
                        <span class="title">세상만사에 관심이 많다면,<br>당신은 이미 카카오 크루</span>
                        <span class="desc">영입소식</span>
                    </div>
                </li>
            </ul>
        </div>
    </article>

    <article class="article">
        <h3 class="article_title">연혁</h3>
        <p class="article_text">카카오가 디딘 첫걸음부터 지금까지의 발걸음을 담았습니다.</p>
        <TheList type="1" :list="projectList" />
    </article>

    <article class="article">
        <h3 class="article_title">연혁</h3>
        <p class="article_text">카카오가 디딘 첫걸음부터 지금까지의 발걸음을 담았습니다.</p>
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
