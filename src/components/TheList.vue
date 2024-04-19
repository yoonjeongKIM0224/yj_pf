<template>
    <ul class="list_type01" v-if="type === '1'">
        <li class="item" v-for="(info, idx) in list" :key="idx">
            <router-link :to="info.link ? info.link : `${url}/${idx}`" class="item_cont">
                <div class="visual" :style="{ backgroundColor: `#${info.color}` }">
                    <img :src="info.image" :alt="info.alt" class="img">
                </div>
                <span class="tag_list" v-for="(item, idx) in info.tags" :key="idx">
                    <span class="item">{{ item }}</span>
                </span>
                <span class="title">{{ info.title }}</span>
                <p class="text">{{ info.text }}</p>
            </router-link>
        </li>
    </ul>
</template>
  
<script>
export default {
    name: 'TheList',
    data(){
        return {
        }
    },
    props: {
        list: Object,
        type: String,
        url: String
    },
    components: {
    }
}
</script>

<style>
</style>
