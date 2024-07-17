<template>
    <article class="article">
        <h3 class="article_title">연혁</h3>
        <div class="list_type2">
            <ul class="list">
                <li v-for="(info, idx) in history" class="item" :key="idx">
                    <div class="item_cont">
                        <span class="title" v-html="info.year + '년'"></span>
                        <div class="list_container">
                            <ul class="list">
                                <li v-for="(month, idx) in info.months" :key="idx" :class="['item', month.active ? 'active' : '']" @click="month.active = !month.active">
                                    <div class="item_cont">
                                        <span class="info1" v-html="month.date + '월'"></span>
                                        <div class="container">
                                            <span class="title" v-html="month.title"></span>
                                            <span class="text" v-if="month.text" v-html="month.text"></span>
                                        </div>
                                    </div>

                                    <div class="img_wrap" v-if="month.img">
                                        <img :src="month.img" :alt="month.alt" class="img">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </article>

    <article class="article">
        <h3 class="article_title">작업 업체</h3>
        <p class="article_text">
            <TheIcon size="md" icon="user_pen1" />
            의 표시가 있는 것들은 프로젝트 소개 페이지로 이동할 수 있습니다.
        </p>
        <div class="list_type3">
            <ul class="list">
                <li v-for="(item, idx) in company" :key="idx" class="item">
                    <div class="item_cont">
                        <img :src="item.image" :alt="item.name" class="img">
                        <router-link v-if="item.page" to="/" class="container">
                            <TheIcon size="md" icon="user_pen1" />
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </article>
</template>
  
<script>
import TheIcon from '@/components/TheIcon.vue';

export default {
    name: 'TheList',
    data(){
        return {
            history: [
                {
                    year: '2023',
                    months: [
                        {
                            date: '06',
                            title: '(주)와일리 입사',
                            text: '웹퍼블리셔 (2024년 7월 기준 재직 중)',
                            img: require('../assets/images/wylie.png'),
                            alt: 'wylie',
                            active: false
                        },
                        {
                            date: '05',
                            title: '(주)더웹스타일 퇴사',
                            text: '웹퍼블리셔 (1년 5개월)',
                            img: require('../assets/images/thewebstyle.png'),
                            alt: 'thewebstyle',
                            active: false
                        },
                        {
                            date: '04',
                            title: 'React.js 프론트엔드개발 과정 수료',
                            text: '이젠아카데미(2개월)',
                            img: require('../assets/images/react.png'),
                            alt: 'react',
                            active: false
                        },
                    ]
                },
                {
                    year: '2022',
                    months: [
                        {
                            date: '01',
                            title: '(주)더웹스타일 입사',
                            text: '웹퍼블리셔',
                            img: require('../assets/images/thewebstyle.png'),
                            alt: 'thewebstyle',
                            active: false
                        },
                    ]
                },
                {
                    year: '2021',
                    months: [
                        {
                            date: '08',
                            title: '웹디자인&웹퍼블리싱 과정 수료',
                            text: '방송정보국제교육원 (6개월)',
                            img: require('../assets/images/html_css.png'),
                            alt: 'html css',
                            active: false
                        },
                    ]
                },
                {
                    year: '2020',
                    months: [
                        {
                            date: '12',
                            title: '(주)스카이라인스포츠 퇴사',
                            text: '관리부 경영관리자 (1년 10개월)',
                            img: require('../assets/images/skyline.png'),
                            alt: 'skyline',
                            active: false
                        },
                    ]
                },
                {
                    year: '2019',
                    months: [
                        {
                            date: '02',
                            title: '신정여자상업고등학교 졸업',
                            text: '서울특별시 강서구',
                            alt: '',
                            active: false
                        },
                        {
                            date: '01',
                            title: '(주)스카이라인 스포츠 입사',
                            text: '관리부 경영관리자',
                            img: require('../assets/images/skyline.png'),
                            alt: 'skyline',
                            active: false
                        },
                    ]
                },
            ],
            company: [
                {
                    name: '신한은행',
                    image: require('../assets/images/main_banner01.png'),
                    page: true,
                },
                {
                    name: '신한은행',
                    image: require('../assets/images/main_banner01.png'),
                    page: true,
                },
                {
                    name: '신한은행',
                    image: require('../assets/images/main_banner01.png'),
                    page: true,
                },
                {
                    name: '신한은행',
                    image: require('../assets/images/main_banner01.png'),
                    page: true,
                },
                {
                    name: '신한은행',
                    image: require('../assets/images/main_banner01.png'),
                    page: true,
                }
            ],
        }
    },
    props: {
        list: Object,
        sectionInfo: Object,
    },
    components: {
        TheIcon
    }
}
</script>

<style>
</style>
