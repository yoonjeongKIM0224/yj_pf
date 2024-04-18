<template>
    <aside class="aside">
        <ul class="menu_list">
            <li :class="['item', item.itemClass, asideSelected === idx ? 'active' : '']" v-for="(item, idx) in menu" :key="idx" @click="$emit('asideSelected', asideSelected), asideSelected = idx">
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
            menu: [
                {
                    text: 'About Me',
                    icon: '💕',
                    link: '/',
                    itemClass: '',
                },
                {
                    text: 'Projects',
                    icon: '🤞',
                    link: '/',
                    itemClass: '',
                },
                {
                    text: 'Components',
                    icon: '🙌   ',
                    link: '/',
                    itemClass: '',
                },
                {
                    text: 'Design',
                    icon: '🌹',
                    link: '/',
                    itemClass: '',
                },
                {
                    text: 'Contact Me',
                    icon: '👀',
                    link: '/',
                    itemClass: '',
                },
            ],
            asideSelected: 0,
        }
    },
    components: {
    }
}
</script>

<style>
</style>
