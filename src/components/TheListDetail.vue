<template>
    <div :class="['detail_wrap', info.boxClass]">
        <section class="visual_wrap" :style="{ backgroundColor: `${info.color}` }">
            <TheIcon
                v-if="info.recommend"
                aria-label="추천글"
                class="recommend"
                size="sm"
                icon="star1" />

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

        <TheButton
            :to="`/${info.category}`"
            color="primary"
            size="lg"
            :round="true">
            목록 보기
        </TheButton>
    </div>

    {{ info.category }}

    <h1 style="margin-bottom: 20px; margin-top: 40px;">추천글</h1>
    <TheList type="1" :list="recommend" :setting="false" />
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
            recommend: this.list.filter((item) => item.category == beforeInfo.category && item.recommend == true),
        }
    },
    props: {
        list: Object,
        itemId: String,
    },
    components: {
        TheList,
        TheButton,
        TheIcon
    },
}
</script>

<style>
</style>
