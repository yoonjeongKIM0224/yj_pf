<template>
    <aside class="aside">
        <ul class="menu_list">
            <li :class="['item', item.itemClass]" v-for="(item, idx) in menu" :key="idx">
                <router-link :to="item.link" class="item_cont">{{ item.text }}</router-link>
            </li>
        </ul>
    </aside>
</template>
  
<script>
export default {
    name: 'TheAside',
    data(){
        return {
            menu: [
                {
                    text: 'About Me',
                    link: '/',
                    itemClass: ''
                },
                {
                    text: 'Projects',
                    link: '/',
                    itemClass: ''
                },
                {
                    text: 'Components',
                    link: '/',
                    itemClass: ''
                },
                {
                    text: 'Design',
                    link: '/',
                    itemClass: ''
                },
                {
                    text: 'dddd',
                    link: '/',
                    itemClass: ''
                },
                {
                    text: 'Contact Me',
                    link: '/',
                    itemClass: ''
                },
            ]
        }
    },
    components: {
    }
}
</script>

<style>
</style>
