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
</template>
  
<script>
export default {
    name: 'TheListDetail',
    data(){
        return {
            info: this.list.filter((item) => item.id == this.itemId)[0]
        }
    },
    props: {
        list: Object,
        itemId: String,
        category: String
    },
    components: {
    },
}
</script>

<style>
</style>
