<template>
    <div :class="['detail_wrap', info.boxClass]">
        <section class="visual_wrap" :style="{ backgroundColor: `${info.color}` }">
            <div class="logo">
                <img :src="info.image" :alt="info.alt" class="img">
            </div>

            <h3 class="visual_title">{{ info.title }}</h3>

            <ul class="info_list">
                <li v-for="(item, idx) in info.infoList" :key="idx" class="item">
                    <div class="item_cont">
                        <span class="title">{{ item.title }}.</span>
                        <span class="info">{{ item.text }}</span>
                    </div>
                </li>
            </ul>

            <p v-html="info.text" class="text"></p>
        </section>

        <section class="text_wrap">
            <article v-for="(item, idx) in info.content" :key="idx" class="article">
                <div class="img_list">
                    <div v-for="(img, idx) in item.image" :key="idx" class="item">
                        <div class="item_cont">
                            <img :src="img" alt="" class="img">
                        </div>
                    </div>
                </div>
                <h4 class="title">{{ item.title }}</h4>
                <p v-html="item.text" class="text"></p>
            </article>
        </section>
    </div>

    <div style="display: flex; justify-content: center; margin-top: 80px;">
        <router-link :to="`/${info.category}`" class="item_cont" style="background-color: #FF8E8B; padding: 16px; border-radius: 100px; color: #fff; width: 140px; font-size: 18px; text-align: center;">목록 보기</router-link>
    </div>

    <h1 style="margin-bottom: 20px; margin-top: 40px;">추천글</h1>
    <TheList type="1" :list="recommend" :setting="false" />
</template>

<script>
import TheList from '@/components/TheList.vue';

export default {
    name: 'TheListDetail',
    data(){
        let beforeInfo = this.list.filter((item) => item.id == this.itemId)[0];

        return {
            info: beforeInfo,
            recommend: this.list.filter((item) => item.category == beforeInfo.category && item.recommend == true),
        }
    },
    props: {
        list: Object,
        itemId: String,
    },
    components: {
        TheList
    },
}
</script>

<style>
</style>
