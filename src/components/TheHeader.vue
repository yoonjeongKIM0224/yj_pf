<template>
    <header class="header">
        <h1 class="logo">
            <router-link to="/aboutMe" class="logo_cont">김윤정</router-link>
        </h1>
        <ul class="menu_list">
            <li :class="['item', item.itemClass]" v-for="(item, idx) in menu" :key="idx">
                <a :href="item.link" class="item_cont" target="_blank">{{ item.text }}</a>
            </li>
        </ul>
    </header>
</template>
  
<script>
export default {
    name: 'TheHeader',
    data(){
        return {
            menu: [
                {
                    text: 'velog',
                    link: 'https://velog.io/@gnoejnooy/posts',
                    itemClass: ''
                },
                {
                    text: 'github',
                    link: 'https://github.com/yoonjeongKIM0224',
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
