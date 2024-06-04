<template>
    <aside class="aside">
        <ul class="menu_list">
            <li
                :class="['item', `/${$route.fullPath.split('/')[1]}` === item.link  ? 'active' : '']"
                v-for="(item, idx) in list" :key="idx"
                @click="$emit('asideSelected', asideSelected = idx)">
                <router-link :to="item.link" class="item_cont">
                    <span>{{ item.title }}</span>
                    <span>{{ item.icon }}</span>
                </router-link>
            </li>
        </ul>
    </aside>
</template>
  
<script>
export default {
    name: 'TheAside',
    data(){
        return {
            asideSelected: 0,
        }
    },
    props: {
        list: Object,
        fullPath: String
    },
    components: {
    }
}
</script>

<style>
</style>
