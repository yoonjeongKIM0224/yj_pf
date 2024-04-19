<template>
    <aside class="aside">
        <ul class="menu_list">
            <li :class="['item', `/${$route.fullPath.split('/')[1]}` === item.link  ? 'active' : '']" v-for="(item, idx) in list" :key="idx">
                <router-link :to="item.link" class="item_cont">
                    <span>{{ item.text }}</span>
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
        fullPath: String
    },
    components: {
    }
}
</script>

<style>
</style>
