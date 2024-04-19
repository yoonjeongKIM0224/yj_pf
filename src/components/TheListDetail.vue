<template>
    <section :style="{ backgroundColor: `#${info.color}` }">
        <div>
            <img :src="info.image" :alt="info.alt">
        </div>

        <h3>{{ info.title }}</h3>

        <ul>
            <li v-for="(item, idx) in info" :key="idx">
                <span>{{ item.title }}</span>
                <span>{{ item.text }}</span>
            </li>
        </ul>

        <p v-html="info.text"></p>
    </section>

    <section>
        <article v-for="(item, idx) in info.content" :key="idx">
            <div class="img_list">
                <div v-for="(img, idx) in item.image" :key="idx">
                    <img :src="img" alt="">
                </div>
            </div>
            <h4>{{ item.title }}</h4>
            <p v-html="item.text"></p>
        </article>
    </section>
</template>
  
<script>
export default {
    name: 'TheListDetail',
    data(){
        return {
            info: this.list[this.itemIdx]
        }
    },
    props: {
        list: Object,
        itemIdx: String
    },
    components: {
    },
}
</script>

<style>
</style>
