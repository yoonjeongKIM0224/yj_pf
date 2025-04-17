<template>
    <article class="article">
        <div class="intro_wrap">
            <div class="container1">
                <div class="img_wrap">
                    <img src="../../public/kyj1.png" alt="" class="img">
                </div>
                <div class="img_wrap">
                    <img src="../../public/kyj2.png" alt="" class="img">
                </div>
            </div>
            <div class="text_wrap">
                <span class="title">KIM YOONJEONG</span>
                <p class="text">
                    안녕하세요!<br>
                    4년차 웹퍼블리셔 김윤정입니다.<br>
                    웹에이전시에서 정규직으로 근무하며 신한은행, 농협카드, 고용24, 삼성 등 여러 프로젝트에서 실무한 경험이 있습니다.
                    유지보수를 고려하여 중복되는 코드 없이 깔끔하고 용이한 코드 작성을 추구합니다.<br>
                    Figma, PS 등 디자인 툴을 사용해 보는 것을 좋아합니다.<br>
                    <br>
                    항상 제작자의 입장으로 프로젝트의 전체적인 흐름을 파악하고자 하는 마인드를 가지며 작업합니다.<br>
                    <br>
                    잘 부탁드립니다.
                </p>
                <TheButton
                    type="a"
                    to="https://chain-caribou-27f.notion.site/c0dd8c6fc3fd41039fe41a0c02072251"
                    color="primary"
                    size="sm"
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
        <p class="article_text">사회에서 디딘 첫걸음부터 지금까지의 발걸음을 담았습니다.</p>
        <div class="list_type2">
            <ul class="list">
                <li v-for="(info, idx) in history" class="item" :key="idx">
                    <div class="item_cont">
                        <span class="title" v-html="info.year + '년'"></span>
                        <div class="list_container">
                            <ul class="list">
                                <li v-for="(month, idx) in info.months" :key="idx" :class="['item', month.active ? 'active' : '']" @click="monthsClose(), month.active = !month.active">
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
        <p class="article_text">프로젝트 협업을 했던 업체들을 소개합니다.</p>
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
                    year: '2025',
                    months: [
                        {
                            date: '02',
                            title: '(주)하이브랩 퇴사',
                            text: '웹퍼블리셔 (6개월)',
                            img: require('../assets/images/hivelab.png'),
                            alt: 'hivelab',
                            active: false
                        },
                    ]
                },
                {
                    year: '2024',
                    months: [
                        {
                            date: '09',
                            title: '(주)하이브랩 입사',
                            text: '웹퍼블리셔',
                            img: require('../assets/images/hivelab.png'),
                            alt: 'hivelab',
                            active: false
                        },
                    ]
                },
                {
                    year: '2023',
                    months: [
                        {
                            date: '06',
                            title: '(주)와일리 입사',
                            text: '웹퍼블리셔',
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
                            img: require('../assets/images/react1.png'),
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
                    name: '삼성',
                    image: require('../assets/images/samsung1.png'),
                    page: true,
                },
                {
                    name: '농협카드',
                    image: require('../assets/images/nhcard1.png'),
                    page: true,
                },
                {
                    name: 'i-one 소상공인',
                    image: require('../assets/images/ione.svg'),
                    page: true,
                },
                {
                    name: '고용24',
                    image: require('../assets/images/work24.svg'),
                    page: true,
                },
                {
                    name: 'amorepacific',
                    image: require('../assets/images/amorepacific.svg'),
                    page: true,
                },
                {
                    name: '효성인포메이션시스템',
                    image: require('../assets/images/hyosung.svg'),
                    page: true,
                },
                {
                    name: '신한은행',
                    image: require('../assets/images/shinhan.svg'),
                    page: true,
                },
                {
                    name: '한국과학우주청소년단',
                    image: require('../assets/images/yakedu.svg'),
                    page: true,
                },
                {
                    name: '한국과학우주청소년단',
                    image: require('../assets/images/protolab.svg'),
                    page: true,
                },
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
    },
    methods: {
        monthsClose(){
            this.history.forEach(function(item){
                item.months.forEach(function(item){
                    item.active = false;
                });
            })
        }
    }
}
</script>

<style>
</style>
