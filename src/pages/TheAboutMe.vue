<template>
    <article class="article">
        <div class="intro_wrap">
            <div class="img_wrap">
                <img src="" alt="" class="img" style="width: 500px; height: 500px; background: #ddd;">
            </div>
            <div class="text_wrap">
                <span class="title">KIM YOONJEONG</span>
                <p class="text">
                    안녕하세요!<br>
                    웹 퍼블리셔 김나영입니다.<br><br>
                    좋아하면 더 잘한다는 마음으로 UI 개발 일을 하고 있습니다.<br><br>
                    웹 퍼블리싱을 빠삭하게 다룹니다.<br>
                    React/TypeScript 등 프레임워크 환경에서 컴포넌트 단위의 마크업 작업을 능숙하게 할 수 있어요.<br>
                    어디에서도 잘 보이는 반응형, 웹 접근성과 웹 표준을 고려한 웹 페이지를 그려냅니다.<br><br>
                    맡은 프로젝트의 목적을 우선적으로 고려하며, 원활한 협업을 중요하게 생각해요.<br>
                    다양한 직군과 함께 멋지고 즐거운 UX를 만드는 데 관심이 많습니다.
                </p>
                <TheButton
                    type="a"
                    :to="`https://www.kakaocorp.com/page`"
                    color="primary"
                    size="md"
                    :round="true">
                    자기소개 더보기
                    <template v-slot:after>
                        <TheIcon
                        size="xs"
                        icon="arrow2"
                        rotate="270" />
                    </template>
                </TheButton>
            </div>
        </div>
    </article>

    <article class="article">
        <h3 class="article_title">연혁</h3>
        <p class="article_text">카카오가 디딘 첫걸음부터 지금까지의 발걸음을 담았습니다.</p>
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
        <p class="article_text">카카오가 디딘 첫걸음부터 지금까지의 발걸음을 담았습니다.</p>
        <div class="list_type3">
            <ul class="list">
                <li v-for="(item, idx) in company" :key="idx" class="item">
                    <div class="item_cont">
                        <img :src="item.image" :alt="item.name" class="img black">
                        <!-- <router-link v-if="item.page" to="/" class="container">
                            <TheIcon size="md" icon="user_pen1" />
                        </router-link> -->
                    </div>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
import TheIcon from '@/components/TheIcon.vue';
import TheButton from '@/components/TheButton.vue';


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
                            text: '웹퍼블리셔 (2024년 8월 기준 재직 중)',
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
                            text: '서울특별시 강서구 소재의 상업계',
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
                    image: require('../assets/images/ione.svg'),
                    page: true,
                },
                {
                    name: '신한은행',
                    image: require('../assets/images/work24.svg'),
                    page: true,
                },
                {
                    name: '신한은행',
                    image: require('../assets/images/amorepacific.svg'),
                    page: true,
                },
                {
                    name: '신한은행',
                    image: require('../assets/images/hyosung.svg'),
                    page: true,
                },
                {
                    name: '신한은행',
                    image: require('../assets/images/shinhan.svg'),
                    page: true,
                },
                {
                    name: '신한은행',
                    image: require('../assets/images/yakedu.svg'),
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
        TheIcon,
        TheButton
    }
}
</script>

<style>
</style>
