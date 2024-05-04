<template>
    <div class="setting_area">
        <div class="select_type01">
            <select name="document_select01" id="document_select01" class="select">
                <option value="#" class="option">최신순</option>
                <option value="#" class="option">추천순</option>
            </select>
        </div>
    </div>
    <ul class="list_type01" v-if="type === '1'">
        <li class="item" v-for="(info, idx) in list" :key="idx">
            <router-link :to="`/detail/${info.id}`" class="item_cont">
                <div class="visual" :style="{ backgroundColor: `${info.color}` }">
                    <img :src="info.image" :alt="info.alt" class="img">
                </div>
                <span class="tag_list01">
                    <span class="item" v-for="(item, idx) in info.tags" :key="idx">{{ item }}</span>
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
        url: String,
        tabText: String
    },
    components: {
    }
}
</script>

<style>
</style>
