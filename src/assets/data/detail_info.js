export default [
    {
        category: 'projects',
        tab: '개인',
        id: 20,
        recommend: true,
        title: '김윤정',
        image: require('/src/assets/images/vue1.png'),
        bannerImage: '',
        alt: '알트값',
        color: '#FF8E8B',
        text: `차세대 디지털 고용 서비스 플랫폼 '고용24' 구축은 고용 관련 민원 서비스를 제공하는 주요 시스템 및 행정 서비스를 통합 구축하는 프로젝트입니다.`,
        tags: ['Vue.js', '2024년', '현재사이트', '반응형'],
        infoList: [
            {
                title: 'Client',
                text: '김윤정😎'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / 반응형'
            },
            {
                title: 'Service',
                text: 'Vue.js, HTML, CSS, JS, Figma'
            }
        ],
        content: [
            {
                title: `현재의 사이트를 만들 때의 마음가짐 🙃`,
                text: `
                가장 중요하게 생각했던 것은 '지속성'이었습니다.<br>
                3년 전, 웹퍼블리셔로 취업하기 위해 만들었던 사이트는 신입인 만큼 코드도 전만큼 맘에 들지 않았고 보완사항이 많다고 생각했습니다.<br>
                실무에서 사용하는 여러 component guide를 보고 아이디어를 얻었고 이것을 저의 NEW! 포트폴리오에 녹여보고자 했습니다.<br>
                제가 만든 여러가지 작업물들을 계속 업로드 할 수 있고 김윤정 자체가 기업...🙄 이라는 컨셉을 잡고 여러 기업 사이트를 벤치마킹했습니다.<br>
                (kakaocorp을 제일 많이 참고했습니다.)<br>
                `
            },
            {
                image: [
                    require('/src/assets/images/project33.png'),
                    require('/src/assets/images/project34.png'),
                ],
                title: `개인프로젝트니까~ 디알못(디자인을 알지 못함 🤣)이지만 레이어를 잡아봤어요!`,
                text: `
                3년 전 첫 포트폴리오 사이트를 만들 때 겪은 문제가 있었습니다.<br>
                그 당시 핀터레스트를 제일 많이 참고하였는데 아무리 예쁜 디자인을 갖고 와서 코딩한다 해도 내용물이 없으니 말짱도루묵이었습니다.<br>
                이후 기획의 중요성을 알게 되었고 이번에는 기획을 탄탄히 하고 그에 맞는 디자인을 만들고자 노력했습니다!<br>
                그때 겪은 문제는 지금까지도 기획, 디자인, 퍼블, 개발 순서과 견고함이 얼마나 중요한지 깨닫게 해주었습니다.<br>
                <br>
                초기에는 타사이트와의 차별성도 두고 빠른 메뉴 이동을 위하여 aside 형식으로 메뉴를 배치했습니다.<br>
                이때는 aside의 width + 간격 = 220px을 제외한 나머지 <b>1200px</b>만 레이어를 잡았습니다.<br>
                하지만 이후 주변인들의 애매한 반응으로 현재의 사이트처럼 1440px로 레이어를 잡게 되었습니다.<br>
                `
            },
            {
                image: [
                    require('/src/assets/images/project35.png'),
                    require('/src/assets/images/project36.png'),
                ],
                title: `url에 대한 고민 😥`,
                text: `
                PROJECTS, HOBBY 메뉴는 리스트와 디테일 페이지가 동일합니다. 즉, 동일한 루트입니다.<br>
                이 경우 디테일 페이지에 접속했을 때의 url에 대한 고민을 많이 했습니다.<br>
                <br>
                1. /project/1, /hobby/1 등으로 나타낼지<br>
                2. 메뉴와 상관 없이 /detail/1, /detail/2 등으로 나타낼지<br>
                <br>
                <b>고민 끝에 2번을 결정했습니다.</b><br>
                kakaocorp는 'www.kakaocorp.com/page/detail/11162' 식으로 2번과 같은 방법을 사용하는 것 같았습니다.<br>
                따라서 저도 PROJECTS, HOBBY에 들어갈 아이템들을 객체화해서 detail_info.js에 통합했습니다.
                `
            },
            {
                image: [
                    require('/src/assets/images/project36.png'),
                ],
                title: `목록의 순서 바꾸기 💦`,
                text: `
                저의 포트폴리오 방문자들이 추천글을 빠르게 확인할 수 있도록 PROJECT 메뉴에는 목록의 순서를 변경할 수 있는 select를 추가했습니다.<br>
                추천순을 만들기 위해서 객체에 recommend라는 key와 booleand값의 value를 추가했습니다.<br>
                그리고 select의 선택에 따라 recommend의 값과 sort를 이용해 목록의 순서를 변경해주었습니다.<br>
                <br>
                <b>
                selectSort(selectValue){<br>
                &nbsp;&nbsp;if(selectValue === 'latest') {<br>
                &nbsp;&nbsp;&nbsp;this.listUse = [...this.list];<br>
                &nbsp;&nbsp;} else {<br>
                &nbsp;&nbsp;&nbsp;this.listUse.sort(function(a, b){<br>
                &nbsp;&nbsp;&nbsp;&nbsp;if(selectValue === 'recommend') {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a.recommend === b.recommend ? 0 : a.recommend ? -1 : 1;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                &nbsp;&nbsp;&nbsp;})<br>
                &nbsp;&nbsp;}<br>
                }
                </b><br>
                <br>
                이로써 추천순에 따라 목록이 변경되는 기능을 만들 수 있었습니다.
                `
            },
            {
                title: `프로젝트에 대한 간단한 회고`,
                text: `
                    위에 설명한 기능 말고도 간단한 기능이지만 헤맸던 것들도 많았고, vue에서 이런 문법을 사용해도 되나? 라는 고민도 많이 하며 작업했습니다.<br>
                    여러 IT커뮤니티나 같은 업계 주변인들에게도 자문을 구해가면서 구현하고자 하는 기능은 다 구현을 해냈습니다.<br>
                    회사와 병행하며 작업한 터라 시간은 오래 걸렸지만 vue 실력도 많이 늘었고 제 자신도 성장을 많이 할 수 있던 프로젝트였습니다.<br>
                    처음 설명한 마음가짐처럼 몇 년이고 저의 작업물을 업로드할 수 있는 사이트로 유지하고 싶습니다.<br>
                    <br>
                    <b>긴 글 읽어주셔서 감사합니다. ❤</b>
                `
            },
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 1,
        recommend: true,
        title: '농협카드',
        image: require('/src/assets/images/nhcard1.png'),
        bannerImage: require('/src/assets/images/nhcard_img1.png'),
        alt: '알트값',
        color: '#8AC8FF',
        text: `차세대 디지털 고용 서비스 플랫폼 '고용24' 구축은 고용 관련 민원 서비스를 제공하는 주요 시스템 및 행정 서비스를 통합 구축하는 프로젝트입니다.`,
        tags: ['Vue.js', '2024년'],
        infoList: [
            {
                title: 'Client',
                text: '농협카드'
            },
            {
                title: 'Category',
                text: 'APP'
            },
            {
                title: 'Date',
                text: '2024.07 ~ 2024.11'
            },
            {
                title: 'Service',
                text: 'Vue.js, HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                title: `첫 Vue 프로젝트 😆`,
                text: `
                    첫 프로젝트인 만큼 Vue 기본문법에 대한 예습을 하고 투입했습니다.<br>
                    실제로 작업을 하면서 예습을 미리 해 두길 잘했다는 생각을 했습니다.<br>
                    같이 일하는 직원들에게 모르는 것도 알려줄 수 있었고 성장도 한 것 같아서 뿌듯했습니다.<br>
                    <b>(해당 앱은 아직 오픈 전이라 사진이 없습니다! 참고 부탁드립니다.)</b>
                `
            },
            {
                title: `어쩌다 공통 컴포넌트 작업을 했어요!`,
                text: `
                    사원급들은 Vue로 만든 공통 컴포넌트를 사용하며 페이지 작업만 하는 룰이었습니다.<br>
                    그러다 제가 사용하던 툴팁 컴포넌트가 스크롤에 따라 조금씩 움직이는 이상한 현상이 있는 것을 발견했습니다.<br>
                    공통 컴포넌트 담당자의 휴가로 바로 문제를 해결하기에 어려움이 있었습니다.<br>
                    어쩌지 고민하던 중에 팀장님께서 저보고 플러그인을 사용하지 않은 새 툴팁 컴포넌트를 만들어 보라고 하셔서 이제까지 공부한 걸 활용해 볼 겸 도전해보겠다고 했습니다.<br>
                    단순 퍼블리싱이 아닌 <b>모든 직원들이 다 사용하는 공통 컴포넌트</b>를 만든다고 생각하니 괜히 긴장되었습니다.<br>
                    <br>
                    우선 기존에 상사분들이 제작하신 여러 컴포넌트들을 보고 변수를 생성할 때는 어떻게 하는지, props를 가져온 후 어떤 방식으로 활용하는지에 대한 간단한 틀을 익혔습니다.<br>
                    아직 앱이 오픈하지 않아 사진은 첨부가 불가능하지만,<br>
                    props, @click, v-if, 툴팁이 닫혔는지에 대한 boolean값을 담은 변수 등을 이용해 툴팁을 제작을 성공적으로 완료했습니다.<br>
                    이후 2개월쯤 뒤에 전체 컴포넌트 리팩토링을 진행했는데, <b>그 과정에서도 큰 수정을 거치지 않고 살아남았습니다.(?)</b><br>
                    컴포넌트 자체가 단순하여 살아남은 거일 수도 있겠지만 철수 전까지도 컴포넌트 가이드에 예쁘게 잘 살아남아있는 것을 보고 괜히 뿌듯하고 기분이 좋았습니다.<br>
                    다시 한 번 프론트엔드 공부에 열정을 느끼는 경험이었던 것 같습니다. 🥰
                `
            },
            {
                image: [
                    require('/src/assets/images/project37.png'),
                ],
                title: `단순 반복 업무를 JS로 시간절약하기`,
                text: `
                    해당 프로젝트는 규모가 큰 프로젝트로 생활편의, 대금결제, 카드 등등... 메뉴와 페이지가 엄청나게 많았습니다.<br>
                    이때 엑셀에 있는 모든 메뉴들을 각 메뉴 담당자가 퍼블리싱 리스트에 옮겼어야 했는데, 이게 굉장한 단순 반복 작업이었습니다...<br>
                    어떻게 해야 시간절약도 하고 정확도도 올릴 수 있을까 고민했습니다.<br>
                    그러다 위 사진처럼 엑셀을 활용하여 for문을 작성하였고 이를 직원들에게 공유하였습니다.<br>
                    어디선가 게으른 사람이 창의적인 생각을 한다고 들었던 것 같은데 🙄 그 말이 공감하는 경험이었습니다.<br>
                    (코드 설명을 위한 발사진 죄송합니다... 😊)
                `
            },
            {
                title: `프로젝트를 마치고`,
                text: `
                    처음 겪는 Vue 프로젝트에 설레하며 투입한 때가 엊그제 같습니다.<br>
                    야근도 많이 하고, 출퇴근도 왕복 4시간이 걸렸던 터라 체력적으로도 지치고, 직원들과 저녁밥을 같이 먹으며 친해지기도 하고, 수정에 수정을 거듭하기도 하고...<br>
                    퍼블리싱 1.0 찍기까지 정말 많은 사건사고들이 기억이 납니다.<br>
                    그래도 맡은 메뉴들은 큰 이슈 없이 마무리한 채로 철수하여 후련하고 뿌듯했던 프로젝트입니다.
                `
            }
        ]
    },
    // {
    //     category: 'projects',
    //     tab: '개인',
    //     id: 2,
    //     recommend: false,
    //     title: '캔디 도매 사이트',
    //     image: require('/src/assets/images/vue1.png'),
    //     bannerImage: require('/src/assets/images/vue1.png'),
    //     alt: '알트값',
    //     color: '#D3E9DE',
    //     text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
    //     tags: ['구축 퍼블리싱', '2023년'],
    //     infoList: [
    //         {
    //             title: 'Client',
    //             text: '신세계사이먼'
    //         },
    //         {
    //             title: 'Category',
    //             text: 'WEB / MOBILE / APP'
    //         },
    //         {
    //             title: 'Date',
    //             text: '2024.01 ~ 2024.02'
    //         },
    //         {
    //             title: 'Service',
    //             text: 'HTML, CSS, JS, 웹접근성, Figma'
    //         }
    //     ],
    //     content: [
    //         {
    //             image: [
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //             ],
    //             title: `MD TAP 신설, 차별성 부여`,
    //             text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
    //         },
    //         {
    //             image: [
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //             ],
    //             title: `MD TAP 신설, 차별성 부여`,
    //             text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
    //         }
    //     ]
    // },
    {
        category: 'projects',
        tab: '개인',
        id: 3,
        title: '영화 추천 사이트',
        image: require('/src/assets/images/react2.svg'),
        bannerImage: require('/src/assets/images/movie_img1.png'),
        alt: '알트값',
        color: '#222',
        text: `React 환경에서 yts.mx의 API를 사용하여 영화 추천을 해 주는 사이트입니다.`,
        tags: ['React', '2024년'],
        link: 'https://yoonjeongkim0224.github.io/react_movie/',
        content: [
            {
                image: [
                    require('/src/assets/images/project3.png'),
                    require('/src/assets/images/project1.png'),
                ],
                title: `로딩바 구현`,
                text: `yts.mx의 API를 사용하여 영화 정보를 호출했습니다.<br>useState를 이용하여 loading의 값이 true일 때는 로딩바를 보여주고 false일 때는 영화 정보를 보여주게 했습니다.<br>API가 정상적으로 다 불러와지면 loading의 값을 setLoading을 사용하여 false로 변경했습니다.<br>최종적으로 사용자가 로딩 중이라는 것을 알 수 있게 구현하였습니다.`
            },
            {
                title: `0으로 시작하는 숫자 구현`,
                text: "총 20개의 영화를 추천하는 사이트인 만큼 리스트에 숫자를 매기고 싶었습니다. ex) 01, 02... 20 <br>숫자가 10 이상이 되면 앞에 0이 붙을 필요가 없어지는데 이 경우 아래의 코드로 해결했습니다.<br><b>{String(idx + 1).length == 1 ? `0${idx + 1}` : idx + 1}</b><br> 위 코드에서 idx는 영화 정보 배열의 index값을 의미합니다. 숫자의 length가 한자리일 때만 앞에 0을 붙여주면 되는 점을 이용하여 코드를 작성했습니다."
            },
            {
                image: [
                    require('/src/assets/images/project2.png'),
                ],
                title: `상세페이지 구현`,
                text: `Detail.js로 상세페이지 템플릿을 만들었습니다.<br>props를 사용하여 별점, 영화 개봉년도, 설명 정보를 기입했습니다.<br>"View List" 버튼에는 css hover 이용해 애니메이션 효과를 줬습니다.`
            }
        ]
    },
    // {
    //     category: 'projects',
    //     tab: '개인',
    //     id: 4,
    //     recommend: false,
    //     title: '블로그',
    //     image: require('/src/assets/images/vue1.png'),
    //     bannerImage: require('/src/assets/images/work24_img1.png'),
    //     alt: '알트값',
    //     color: '#D3E9DE',
    //     text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
    //     tags: ['구축 퍼블리싱', '2023년'],
    //     infoList: [
    //         {
    //             title: 'Client',
    //             text: '신세계사이먼'
    //         },
    //         {
    //             title: 'Category',
    //             text: 'WEB / MOBILE / APP'
    //         },
    //         {
    //             title: 'Date',
    //             text: '2024.01 ~ 2024.02'
    //         },
    //         {
    //             title: 'Service',
    //             text: 'HTML, CSS, JS, 웹접근성, Figma'
    //         }
    //     ],
    //     content: [
    //         {
    //             image: [
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //             ],
    //             title: `MD TAP 신설, 차별성 부여`,
    //             text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
    //         },
    //         {
    //             image: [
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //             ],
    //             title: `MD TAP 신설, 차별성 부여`,
    //             text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
    //         }
    //     ]
    // },
    // {
    //     category: 'projects',
    //     tab: '개인',
    //     id: 5,
    //     recommend: false,
    //     title: '영단어 스터디 사이트',
    //     image: require('/src/assets/images/react2.svg'),
    //     bannerImage: require('/src/assets/images/work24_img1.png'),
    //     alt: '알트값',
    //     color: '#222',
    //     text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
    //     tags: ['구축 퍼블리싱', '2023년'],
    //     infoList: [
    //         {
    //             title: 'Client',
    //             text: '신세계사이먼'
    //         },
    //         {
    //             title: 'Category',
    //             text: 'WEB / MOBILE / APP'
    //         },
    //         {
    //             title: 'Date',
    //             text: '2024.01 ~ 2024.02'
    //         },
    //         {
    //             title: 'Service',
    //             text: 'HTML, CSS, JS, 웹접근성, Figma'
    //         }
    //     ],
    //     content: [
    //         {
    //             image: [
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //             ],
    //             title: `MD TAP 신설, 차별성 부여`,
    //             text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
    //         },
    //         {
    //             image: [
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //                 'https://codingapple1.github.io/vue/room0.jpg',
    //             ],
    //             title: `MD TAP 신설, 차별성 부여`,
    //             text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
    //         }
    //     ]
    // },
    {
        category: 'projects',
        tab: '실무',
        id: 6,
        recommend: true,
        title: '고용24',
        image: require('/src/assets/images/work24.svg'),
        bannerImage: require('/src/assets/images/work24_img1.png'),
        alt: '알트값',
        color: '#4D65E1',
        text: `차세대 디지털 고용 서비스 플랫폼 '고용24' 구축은 고용 관련 민원 서비스를 제공하는 주요 시스템 및 행정 서비스를 통합 구축하는 프로젝트입니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        link: 'https://www.work24.go.kr/cm/main.do',
        infoList: [
            {
                title: 'Client',
                text: '고용24'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE'
            },
            {
                title: 'Date',
                text: '2024.07 ~ 2024.11'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                title: `구축부터 웹접근성 작업을 한 프로젝트`,
                text: `
                    구축은 모바일만 작업했으며 투입 당시 일정이 급박하여 진척율을 가장 중요시 여겼습니다.<br>
                    공통 가이드는 파일이 무거워 진입로딩과 찾는 것이 오래 걸렸기에 시간 절약을 위해 저만의 가이드를 만들었습니다.<br>
                    yj.html 파일을 생성해(커밋 X) 담당 메뉴에서 자주 사용하는 컴포넌트와 자주 사용하는 클래스, 컨텐츠 등을 취합했습니다.<br>
                    그 결과, 검색시간 절약으로 작업 속도가 현저히 줄었고 마감기한 내에 일정을 맞출 수 있었습니다.<br>
                    추후 다른 프로젝트에서 같은 메뉴를 담당하는 팀원들끼리 팀가이드를 만들어 작업해도 좋을 것 같다는 생각이 들었습니다.<br>
                `
            },
            {
                image: [
                    require('/src/assets/images/project14.png'),
                    require('/src/assets/images/project15.png'),
                ],
                title: `디자인 없이 퍼블리싱 작업을 할 때 😮`,
                text: `
                프로젝트마다 여러가지 이슈가 있지만 해당 프로젝트는 모바일 디자인이 따로 없어서 PC 화면을 보고 모바일 퍼블리싱 작업을 해야 했었습니다.<br>
                광범위한 페이지를 디자인 없이 작업해 본 적이 처음이라 많이 걱정했지만,<br>
                모바일 컴포넌트가 전부 제작 완료되어있는 점과 대부분의 페이지가 컴포넌트만으로 퍼블리싱 가능하다는 점이 있어 나름 수월하게 작업했습니다.<br>
                <br>
                처음에는 어려웠지만 해당 상황을 통하여 디자이너와 소통하는 방법이 늘었습니다.<br>
                당시에 Figma를 사용했는데 Figma를 다루는 법도 늘었고 간격이나 위치 같은 간단한 디자인은 직접 Figma로 구현하여<br>디자이너에게 "이건 어떨까요?", "이런 식으로 하면 될까요?" 등으로 제안을 하기도 했습니다.<br>
                위기를 기회로 바꾼다는 말이 생각나는 프로젝트입니다.
                `
            },
            {
                image: [
                    require('/src/assets/images/project16.jpg'),
                    require('/src/assets/images/project17.jpg'),
                    require('/src/assets/images/project18.jpg'),
                ],
                title: `웹접근성 위배 사항을 대폭 줄인 경험(1400p → 500p) 😊`,
                text: `
                구축 일정이 완료되고 PC 웹접근성 집중 작업을 시작했습니다.<br>
                웹접근성 1차 검수를 받은 후 위배 페이지는 대략 1,400p 정도였습니다.<br>
                구축하면서 웹접근성을 잡았다면 좋았겠지만 저의 투입 시점에서는 PC작업은 이미 다 끝난 상황이었습니다.<br>
                접근성 감리에서 title이 p태그로 되어있는 점, 인풋에 title이 없는 점, 배치용 테이블인데 th가 있는 점 등 대략 1400페이지의 웹접근성 위배사항을 확인했습니다.<br>
                이에 수작업보다는 JS를 사용해서 감축하고자 했습니다.<br>
                <br>
                <b>1. title이 p로 되어있는 경우</b><br>
                p태그를 사용했지만 title의 스타일을 표현하기 위해 t2_sb, t1_sb, t3_sb 등 공통 클래스를 사용한 점을 활용했습니다.<br>
                해당 클래스면서 p태그인 엘레멘트를 모두 잡아 for문으로 돌린 후<br>
                outerHTML과 replace를 사용하여 &lt;p → &lt;h3, &lt;/p → &lt;/h3 로 변경했습니다.<br>
                (h2는 페이지 상단에 고정으로 존재함)<br>
                <br>
                <b>2. 인풋에 title이 없는 경우</b><br>
                인풋에 title은 없었지만 placeholder는 대부분 적용되어있는 점을 활용했습니다.<br>
                document.querySelectAll('input[type="text"][placeholder]:not(:read-only):not(:disabled)')로 placeholder가 있는 text input을 잡아서<br>
                input의 placeholder 내용을 input의 title에 대입했습니다.<br>
                placeholder가 없는 input은 별로 없었기에 검색/찾기하여 수작업으로 보완했습니다.<br>
                <br>
                <b>3. 배치용 테이블인데 th가 있는 경우</b><br>
                구축 공통가이드 중 배치용 테이블(input, select 포함 검색 테이블)이 있었습니다.<br>
                배치용 테이블은 &lt;caption&gt; 요소, summary 속성, &lt;th&gt; 제목 셀을 제공하지 않아야 합니다.<br>
                문제를 해결하기 위해 해당 테이블은 article.box_form_content 의 부모를 필수로 가지고 있는 점을 활용했습니다.<br>
                js filter를 사용해 input, select가 있는 테이블만 추출하였습니다.<br>
                caption, summray는 remove를 사용해 제거하고 th는 outerHTML과 replace를 사용하여 &lt;th → &lt;td, &lt;/th → &lt;/td 로 변경했습니다.<br>
                td 변경 시 깨지는 스타일은 classList.add('new_th')로 클래스를 부여해 스타일링했습니다.<br>
                <br>
                이처럼 JS로 해결한 결과, 위배 페이지는 1400장에서 500장으로 감축했습니다. 해당 성과는 프로젝트에 큰 도움이 되었고 연말 인사평가에서 좋은 결과를 얻었습니다.<br>
                img의 alt, 숨김텍스트 등은 구축 작업과 동시진행한 경험은 있지만 웹접근성 집중 작업은 처음이라 초반에는 헷갈리는 게 많았습니다.<br>
                하지만 웹와치와 한국웹접근성인증평가원의 Q&A 게시판을 통하여 많은 조언을 얻었고 질문하는 노하우도 터득했습니다.
                `
            }
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 7,
        recommend: false,
        boxClass: '',
        title: 'IBK 온라인 입점 소상공인부 대출',
        image: require('/src/assets/images/ione.svg'),
        bannerImage: require('/src/assets/images/ibk_img1.png'),
        alt: '알트값',
        color: '#DBF4FF',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: 'IBK'
            },
            {
                title: 'Category',
                text: 'MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, Zeplin'
            }
        ],
        content: [
            {
                image: [
                    require('/src/assets/images/project10.png'),
                    require('/src/assets/images/project11.png'),
                    require('/src/assets/images/project12.png'),
                ],
            },
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 8,
        recommend: false,
        boxClass: '',
        title: '아모레퍼시픽 SCM방문등록시스템',
        image: require('/src/assets/images/amorepacific.svg'),
        alt: '알트값',
        color: '#F3F3F6',
        text: ``,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '아모레퍼시픽'
            },
            {
                title: 'Category',
                text: 'WEB'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, Zeplin'
            }
        ],
        content: [
            {
                image: [
                    require('/src/assets/images/project4.png'),
                ],
            },
            {
                image: [
                    require('/src/assets/images/project5.png'),
                ],
            },
            {
                image: [
                    require('/src/assets/images/project6.png'),
                ],
            }
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 9,
        recommend: true,
        title: '신한은행 SOL',
        image: require('/src/assets/images/shinhan.svg'),
        bannerImage: require('/src/assets/images/shinhan_img1.png'),
        alt: '알트값',
        color: '#0046FF',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신한은행'
            },
            {
                title: 'Category',
                text: 'APP'
            },
            {
                title: 'Date',
                text: '2023.05 ~ 2023.10'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    require('/src/assets/images/project22.jpg'),
                    require('/src/assets/images/project23.jpg'),
                    require('/src/assets/images/project24.jpg'),
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    require('/src/assets/images/project25.jpg'),
                    require('/src/assets/images/project26.jpg'),
                    require('/src/assets/images/project27.jpg'),
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 10,
        recommend: false,
        title: '프로토랩',
        image: require('/src/assets/images/protolab.svg'),
        bannerImage: require('/src/assets/images/protolab_img1.png'),
        alt: '알트값',
        color: '#00479E',
        text: ``,
        tags: ['구축 퍼블리싱', '2023년'],
        link: 'https://www.protolab.co.kr/',
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, Zeplin'
            }
        ],
        content: [
            {
                image: [
                    require('/src/assets/images/project7.png'),
                    require('/src/assets/images/project8.png'),
                ],
            },
            {
                image: [
                    require('/src/assets/images/project19.jpg'),
                    require('/src/assets/images/project20.jpg'),
                    require('/src/assets/images/project21.jpg'),
                ],
            },
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 11,
        recommend: false,
        title: '한국과학우주청소년단',
        image: require('/src/assets/images/yakedu.svg'),
        bannerImage: require('/src/assets/images/yakedu_img1.png'),
        alt: '알트값',
        color: '#232D64',
        text: `한국과학우주청소년단 홍보 및 행사를 안내하는 오피셜사이트 개편프로젝트`,
        tags: ['구축 퍼블리싱', '2023년'],
        link: 'https://www.yakedu.or.kr/index.asp',
        infoList: [
            {
                title: 'Client',
                text: '한국과학우주청소년단'
            },
            {
                title: 'Category',
                text: '적응형 WEB'
            },
            {
                title: 'Date',
                text: '2022.02 ~ 2022.03'
            },
            {
                title: 'Role',
                text: '구축 퍼블리셔'
            },
            {
                title: 'Use',
                text: 'HTML, CSS, VS Code, Zeplin'
            }
        ],
        content: [
            {
                image: [
                    require('/src/assets/images/project28.png'),
                    require('/src/assets/images/project29.png'),
                ],
            },
            {
                image: [
                    require('/src/assets/images/project30.jpg'),
                    require('/src/assets/images/project31.jpg'),
                    require('/src/assets/images/project32.jpg'),
                ],
            }
        ]
    },
    {
        category: 'hobby',
        id: 12,
        title: 'Rabbit 🐰',
        image: require('/src/assets/images/rabbit1.png'),
        alt: '알트값',
        color: '#8E1D76',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: 'Rabbit',
                text: 'HTML, CSS만으로 제작한 애니메이션입니다.'
            }
        ],
        iframe: {
            title: 'rabbit',
            src: 'https://codepen.io/yoonjeongkim0224/embed/PoJZgpE?default-tab=html%2Cresult',
            href: 'https://codepen.io/yoonjeongkim0224/pen/PoJZgpE'
        }
    },
    {
        category: 'hobby',
        id: 14,
        title: 'arrow',
        image: require('/src/assets/images/arrow_move1.png'),
        alt: '알트값',
        color: '#C8CDFF',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: 'arrow',
                text: 'HTML, CSS만으로 제작한 애니메이션입니다. 신한은행 프로젝트에서 사용했습니다.'
            }
        ],
        iframe: {
            title: 'rabbit',
            src: 'https://codepen.io/yoonjeongkim0224/embed/ZERLKWd?default-tab=html%2Cresult',
            href: 'https://codepen.io/yoonjeongkim0224/pen/ZERLKWd'
        }
    },
    {
        category: 'hobby',
        id: 15,
        title: 'Skull',
        image: require('/src/assets/images/skull1.png'),
        color: '#E4691C',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: 'Skull',
                text: 'HTML, CSS만으로 제작한 애니메이션입니다.'
            }
        ],
        iframe: {
            title: 'Skull',
            src: 'https://codepen.io/yoonjeongkim0224/embed/VwMedvx?default-tab=html%2Cresult',
            href: 'https://codepen.io/yoonjeongkim0224/pen/VwMedvx'
        }
    },
    {
        category: 'hobby',
        id: 16,
        title: 'Building',
        image: require('/src/assets/images/building1.png'),
        color: '#0B2C49',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: 'Building',
                text: 'HTML, CSS만으로 제작한 애니메이션입니다.'
            }
        ],
        iframe: {
            title: 'Building',
            src: 'https://codepen.io/yoonjeongkim0224/embed/mdBeozW?default-tab=html%2Cresult',
            href: 'https://codepen.io/yoonjeongkim0224/pen/mdBeozW'
        }
    },
    {
        category: 'hobby',
        id: 17,
        title: 'Duck',
        image: require('/src/assets/images/duck1.png'),
        color: '#1C27B5',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: 'Duck',
                text: 'HTML, CSS만으로 제작한 애니메이션입니다.'
            }
        ],
        iframe: {
            title: 'Duck',
            src: 'https://codepen.io/yoonjeongkim0224/embed/rNzEXaK?default-tab=html%2Cresult',
            href: 'https://codepen.io/yoonjeongkim0224/pen/rNzEXaK'
        }
    },
    {
        category: 'hobby',
        id: 18,
        title: 'Cat Work',
        image: require('/src/assets/images/cat_work1.png'),
        color: '#4DB6AC',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: 'Cat Work',
                text: 'HTML, CSS만으로 제작한 애니메이션입니다.'
            }
        ],
        iframe: {
            title: 'Cat Work',
            src: 'https://codepen.io/yoonjeongkim0224/embed/LYzpMve?default-tab=html%2Cresult',
            href: 'https://codepen.io/yoonjeongkim0224/pen/LYzpMve'
        }
    },
    {
        category: 'hobby',
        id: 19,
        title: 'Cat',
        image: require('/src/assets/images/cat1.png'),
        color: '#FFCFBF',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: 'Cat',
                text: 'HTML, CSS, js만으로 제작한 애니메이션입니다.<br><b>토글 버튼을 눌러 보세요!</b>'
            }
        ],
        iframe: {
            title: 'Cat',
            src: 'https://codepen.io/yoonjeongkim0224/embed/gOJNZWr?default-tab=html%2Cresult',
            href: 'https://codepen.io/yoonjeongkim0224/pen/gOJNZWr'
        }
    },
    {
        category: 'hobby',
        id: 21,
        title: 'Cube',
        image: require('/src/assets/images/cube1.png'),
        color: '#ddd',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: 'Cat',
                text: 'HTML, CSS 제작한 애니메이션입니다.'
            }
        ],
        iframe: {
            title: 'Cat',
            src: 'https://codepen.io/yoonjeongkim0224/embed/VwOJowN?default-tab=html%2Cresult',
            href: 'https://codepen.io/yoonjeongkim0224/pen/VwOJowN'
        }
    }
];