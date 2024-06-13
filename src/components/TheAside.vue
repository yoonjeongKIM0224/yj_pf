<template>
    <aside class="aside">
        <ul class="menu_list">
            <li
                :class="['item', $route.fullPath === item.path  ? 'active' : '']"
                v-for="(item, idx) in list" :key="idx">
                <router-link :to="item.path" class="item_cont">
                    <span>{{ item.meta.title }}</span>
                    <span>{{ item.meta.icon }}</span>
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
