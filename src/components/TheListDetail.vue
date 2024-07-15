<template>
    <div :class="['detail_wrap', info.boxClass]">
        <section class="visual_wrap" :style="{ backgroundColor: `${info.color}` }">
            <img :src="info.bannerImage" alt="배경" class="bg_img">

            <div class="container">
                <TheIcon
                    v-if="info.recommend"
                    aria-label="추천"
                    class="recommend"
                    size="sm"
                    icon="star1" />

                <div class="logo" v-if="info.image">
                    <img :src="info.image" :alt="info.alt" class="img">
                </div>

                <h3 class="visual_title">{{ info.title }}</h3>

                <ul class="info_list" v-if="info.infoList">
                    <li v-for="(item, idx) in info.infoList" :key="idx" class="item">
                        <div class="item_cont">
                            <span class="title">{{ item.title }}.</span>
                            <span class="info">{{ item.text }}</span>
                        </div>
                    </li>
                </ul>

                <p v-html="info.text" class="text"></p>
            </div>

            <TheButton @click="scrollDown" size="sm" class="scroll_down_btn">
                Scroll Down
                <TheIcon size="xs" icon="arrow3" />
            </TheButton>
        </section>
        
        <div class="info_wrap">
            <div class="container">
                <section class="text_wrap">
                    <article v-for="(item, idx) in info.content" :key="idx" class="article">
                        <div class="img_list" v-if="item.image">
                            <div v-for="(img, idx) in item.image" :key="idx" class="item">
                                <div class="item_cont">
                                    <img :src="img" alt="" class="img">
                                </div>
                            </div>
                        </div>
                        <h4 class="title">{{ item.title }}</h4>
                        <p v-html="item.text" class="text"></p>

                        <iframe class="iframe" v-if="info.iframe" height="500" style="width: 100%;" scrolling="no" :title="info.iframe.title" :src="info.iframe.src" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a :href="info.iframe.href">
                        rabbit</a> by yoonjeong (<a href="https://codepen.io/yoonjeongkim0224">@yoonjeongkim0224</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                        </iframe>
                    </article>
                </section>
    
                <TheButton
                    :to="`/${info.category}`"
                    color="primary"
                    size="lg"
                    :round="true">
                    목록 보기
                </TheButton>
    
                <div class="recommend_wrap" v-if="recommend.length">
                    <h1 class="recommend_title">추천 콘텐츠</h1>
                    <TheList type="1" :list="recommend" :setting="false" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheList from '@/components/TheList.vue';
import TheButton from '@/components/TheButton.vue';
import TheIcon from '@/components/TheIcon.vue';

export default {
    name: 'TheListDetail',
    data(){
        let beforeInfo = this.list.filter((item) => item.id == this.itemId)[0];

        return {
            info: beforeInfo,
            recommend: this.list.filter((item) => item.category == beforeInfo.category && item.recommend == true && beforeInfo.id !== item.id),
        }
    },
    props: {
        list: Object,
        itemId: String,
        sectioninfo: Object
    },
    components: {
        TheList,
        TheButton,
        TheIcon
    },
    methods: {
        scrollDown(){
            window.scrollTo(
                {
                    left: 0,
                    top: window.innerHeight,
                    behavior: 'smooth'
                }
            )
        },
    },
}
</script>

<style>
</style>
