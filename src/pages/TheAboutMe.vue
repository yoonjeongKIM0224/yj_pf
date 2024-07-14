<template>
    <div class="list_type2">
        <ul class="list">
            <li v-for="(info, idx) in history" class="item" :key="idx">
                <div class="item_cont">
                    <span class="title">{{ info.year }}년</span>
                    <div class="list_container">
                        <ul class="list">
                            <li v-for="(month, idx) in info.months" :key="idx" class="item">
                                <div class="item_cont">
                                    <span class="info1">{{ month.date }}월</span>
                                    <div class="container">
                                        <span class="title">{{ month.title }}</span>
                                        <span class="text">{{ month.text }}</span>
                                    </div>

                                    <!-- <img :src="month.img" alt="" class="img"> -->
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
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
                            img: require('../assets/images/main_banner01.png'),
                        },
                        {
                            date: '05',
                            title: '(주)더웹스타일 퇴사',
                            text: '웹퍼블리셔 (1년 5개월)',
                            img: require('../assets/images/main_banner01.png'),
                        },
                        {
                            date: '04',
                            title: 'React.js 프론트엔드개발 과정 수료',
                            text: '이젠아카데미(2개월)',
                            img: require('../assets/images/main_banner01.png'),
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
                            img: require('../assets/images/main_banner01.png'),
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
                            img: require('../assets/images/main_banner01.png'),
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
                            img: require('../assets/images/main_banner01.png'),
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
                            img: require('../assets/images/main_banner01.png'),
                        },
                        {
                            date: '01',
                            title: '(주)스카이라인 스포츠 입사',
                            text: '관리부 경영관리자',
                            img: require('../assets/images/main_banner01.png'),
                        },
                    ]
                },
            ],
        }
    },
    props: {
        list: Object,
        sectionInfo: Object,
    },
    components: {
    }
}
</script>

<style>
</style>
