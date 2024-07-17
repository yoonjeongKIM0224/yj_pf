<template>
    <header :class="['header']">
        <div class="container">
            <h1 class="logo">
                <router-link to="/" class="logo_cont">
                    <svg class="header_logo" viewBox="0 0 106 38" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="01">
                                <path d="M14.5208 2.64002H20.1208C20.1208 12.48 13.8408 19.16 2.80078 22L0.800781 17.84C9.88078 15.56 14.5208 10.84 14.5208 5.28002V2.64002ZM2.92078 2.64002H17.9608V6.80002H2.92078V2.64002ZM26.0408 0.52002H31.4008V21.16H26.0408V0.52002ZM6.88078 22.72H31.4008V37.16H6.88078V22.72ZM26.1608 26.92H12.1208V32.96H26.1608V26.92Z" fill="black"/>
                            </clipPath>
                            <clipPath id="02">
                                <path d="M54.1577 1.20002C62.1177 1.20002 67.4777 4.20002 67.4777 8.88002C67.4777 13.56 62.1177 16.52 54.1577 16.52C46.1577 16.52 40.8377 13.56 40.8377 8.88002C40.8377 4.20002 46.1577 1.20002 54.1577 1.20002ZM54.1577 5.40002C49.4777 5.40002 46.5577 6.60002 46.5577 8.88002C46.5577 11.12 49.4777 12.32 54.1577 12.32C58.8377 12.32 61.7577 11.12 61.7577 8.88002C61.7577 6.60002 58.8377 5.40002 54.1577 5.40002ZM37.4377 18.44H70.9577V22.68H37.4377V18.44ZM41.1977 32.68H67.6777V36.92H41.1977V32.68ZM41.1977 26.04H46.5177V35.12H41.1977V26.04ZM48.8777 19.92H54.1977V29.2H48.8777V19.92ZM57.8377 19.96H63.1577V29.24H57.8377V19.96Z" fill="black"/>
                            </clipPath>
                            <clipPath id="03">
                                <path d="M94.2745 9.48002H101.315V13.8H94.2745V9.48002ZM99.8745 0.52002H105.195V22.52H99.8745V0.52002ZM92.6345 23.32C100.475 23.32 105.315 26 105.315 30.48C105.315 35 100.475 37.6 92.6345 37.6C84.7945 37.6 79.9545 35 79.9545 30.48C79.9545 26 84.7945 23.32 92.6345 23.32ZM92.6345 27.36C87.8345 27.36 85.2745 28.36 85.2745 30.48C85.2745 32.56 87.8345 33.56 92.6345 33.56C97.4745 33.56 100.035 32.56 100.035 30.48C100.035 28.36 97.4745 27.36 92.6345 27.36ZM82.7545 4.24002H87.0745V6.56002C87.0745 13.64 83.7945 20.12 76.7145 22.52L73.9945 18.32C80.1145 16.24 82.7545 11.32 82.7545 6.56002V4.24002ZM83.8745 4.24002H88.1545V6.56002C88.1545 10.92 90.6745 15.44 96.5145 17.4L93.9145 21.6C87.0345 19.32 83.8745 13.16 83.8745 6.56002V4.24002ZM75.4345 2.76002H95.3545V7.00002H75.4345V2.76002Z" fill="black"/>
                            </clipPath>
                        </defs>

                        <g class="svg-bg">
                            <path clip-path="url(#01)" d="M2.5 5.5H18C17.1667 9.83333 12 19.5 1 21.5" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#01)" d="M29 1.5V22.5" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#01)" d="M9.46484 28.7273V36H28.9997V26H9.46484V34" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#02)" d="M54.7354 4.02425C51.9403 3.85795 44.562 4.44776 44.0379 8.93776C43.3338 14.9699 52.6391 15 55.7836 15C58.9281 15 65 13.428 65 9.43687C65 5.44576 59.7592 3.94914 51.898 4.44822" stroke="#FF6A6A" stroke-width="7"/>
                            <path clip-path="url(#02)" d="M37 22H54.5H72" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#02)" d="M51 22V30.5" stroke="#FF6A6A" stroke-width="7"/>
                            <path clip-path="url(#02)" d="M60.5 22V31" stroke="#FF6A6A" stroke-width="7"/>
                            <path clip-path="url(#02)" d="M43.5 26V36H68.5" stroke="#FF6A6A" stroke-width="7"/>
                            <path clip-path="url(#03)" d="M75 5.5H96" stroke="#FF6A6A" stroke-width="7"/>
                            <path clip-path="url(#03)" d="M75 21.5C78.6667 19.1667 84.5 18 85 7" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#03)" d="M95.5 20.5C91.5 18.5 86.5 15 85.4844 7.5" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#03)" d="M102.5 1V24" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#03)" d="M94 13H102" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#03)" d="M92.707 26.0751C90.0404 25.9084 83.001 26.4995 82.501 30.9995C81.8293 37.0451 90.707 37.0753 93.707 37.0753C96.707 37.0753 102.5 35.4998 102.5 31.4998C102.5 27.4998 97.5 25.9998 90 26.5" stroke="#FF6A6A" stroke-width="6"/>
                        </g>

                        <g class="svg-main">
                            <path clip-path="url(#01)" d="M2.5 5.5H18C17.1667 9.83333 12 19.5 1 21.5" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#01)" d="M29 1.5V22.5" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#01)" d="M9.46484 28.7273V36H28.9997V26H9.46484V34" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#02)" d="M54.7354 4.02425C51.9403 3.85795 44.562 4.44776 44.0379 8.93776C43.3338 14.9699 52.6391 15 55.7836 15C58.9281 15 65 13.428 65 9.43687C65 5.44576 59.7592 3.94914 51.898 4.44822" stroke="#FF6A6A" stroke-width="7"/>
                            <path clip-path="url(#02)" d="M37 22H54.5H72" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#02)" d="M51 22V30.5" stroke="#FF6A6A" stroke-width="7"/>
                            <path clip-path="url(#02)" d="M60.5 22V31" stroke="#FF6A6A" stroke-width="7"/>
                            <path clip-path="url(#02)" d="M43.5 26V36H68.5" stroke="#FF6A6A" stroke-width="7"/>
                            <path clip-path="url(#03)" d="M75 5.5H96" stroke="#FF6A6A" stroke-width="7"/>
                            <path clip-path="url(#03)" d="M75 21.5C78.6667 19.1667 84.5 18 85 7" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#03)" d="M95.5 20.5C91.5 18.5 86.5 15 85.4844 7.5" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#03)" d="M102.5 1V24" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#03)" d="M94 13H102" stroke="#FF6A6A" stroke-width="6"/>
                            <path clip-path="url(#03)" d="M92.707 26.0751C90.0404 25.9084 83.001 26.4995 82.501 30.9995C81.8293 37.0451 90.707 37.0753 93.707 37.0753C96.707 37.0753 102.5 35.4998 102.5 31.4998C102.5 27.4998 97.5 25.9998 90 26.5" stroke="#FF6A6A" stroke-width="6"/>
                        </g>
                    </svg>
                </router-link>
            </h1>
            <button type="button" title="메뉴 열기" v-if="width <= 1000" @click="menuActive = true">
                <TheIcon size="md" icon="burger1" />
            </button>
            <div class="menu_container" v-if="width <= 1000 ? menuActive : true">
                <ul class="menu_list gnb">
                    <li
                    :class="['item', $route.fullPath && sectionInfo.path === item.path ? 'active' : '']"
                    v-for="(item, idx) in list" :key="idx">
                        <router-link :to="item.path" class="item_cont" @click="menuActive = false">
                            {{ item.meta.title }}
                        </router-link>
                    </li>
                </ul>
                <ul class="menu_list util">
                    <li :class="['item', item.itemClass]" v-for="(item, idx) in menu" :key="idx">
                        <a
                        :href="item.link"
                        class="item_cont"
                        target="_blank"
                        :title="item.text">
                            <TheIcon size="sm" :icon="item.icon" />
                        </a>
                    </li>
                </ul>
                <button type="button" class="close_btn" title="메뉴 닫기" v-if="width <= 1000" @click="menuActive = false">
                    <TheIcon size="sm" icon="close1" />
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import TheIcon from '@/components/TheIcon.vue';

export default {
    name: 'TheHeader',
    data(){
        return {
            menu: [
                {
                    text: 'velog',
                    link: 'https://velog.io/@gnoejnooy/posts',
                    itemClass: '',
                    icon: 'velog1'
                },
                {
                    text: 'github',
                    link: 'https://github.com/yoonjeongKIM0224',
                    itemClass: '',
                    icon: 'github1'
                },
            ],
            menuActive: false
        }
    },
    props: {
        list: Object,
        sectionInfo: Object,
        width: Number
    },
    components: {
        TheIcon
    },
    mounted(){
        const bgGroup = document.querySelector('.svg-bg')
        const bgPaths = bgGroup.querySelectorAll('path')

        bgPaths.forEach((path, i) => {
            const length = path.getTotalLength()
            path.style.setProperty('--length', length)
            path.style.setProperty('--duration', length * 10 + 'ms')
            path.style.setProperty('--delay', i * 100 + 'ms')
        })

        const mainGroup = document.querySelector('.svg-main')
        const mainPaths = mainGroup.querySelectorAll('path')

        mainPaths.forEach((path, i) => {
            const length = path.getTotalLength()
            path.style.setProperty('--length', length)
            path.style.setProperty('--duration', length * 20 + 'ms')
            path.style.setProperty('--delay', i * 200 + 'ms')
        })
    },
}
</script>

<style>
</style>
