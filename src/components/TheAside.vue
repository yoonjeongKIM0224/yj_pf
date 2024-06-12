<template>
    <aside class="aside">
        <ul class="menu_list">
            <li
                :class="['item', $route.fullPath === item.link  ? 'active' : '']"
                v-for="(item, idx) in list" :key="idx">
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
        }
    },
    props: {
        list: Object,
    },
    components: {
    },
}
</script>

<style>
</style>
