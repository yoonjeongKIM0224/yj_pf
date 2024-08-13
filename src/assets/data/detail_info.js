export default [
    {
        category: 'projects',
        tab: '개인',
        id: 1,
        recommend: true,
        title: '캔디 도매 사이트',
        image: require('/src/assets/images/work24.svg'),
        bannerImage: require('/src/assets/images/work24_img1.png'),
        alt: '알트값',
        color: '#4D65E1',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'projects',
        tab: '개인',
        id: 788,
        title: '영화 추천 사이트',
        bannerImage: require('/src/assets/images/work24_img1.png'),
        alt: '알트값',
        color: '#4D65E1',
        text: `React 환경에서 yts.mx의 API를 사용하여 영화 추천을 해 주는 사이트입니다.`,
        tags: ['React', '2024년'],
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
                text: "총 20개의 영화를 추천하는 사이트인 만큼 리스트에 숫자를 매기고 싶었습니다. ex) 01, 02... 20 <br>숫자가 10 이상이 되면 앞에 0이 붙을 필요가 없어지는데 이 경우 아래의 코드로 해결했습니다.<br>{String(idx + 1).length == 1 ? `0${idx + 1}` : idx + 1}<br> 위 코드에서 idx는 영화 정보 배열의 index값을 의미합니다. 숫자의 length가 한자리일 때만 앞에 0을 붙여주면 되는 점을 이용하여 코드를 작성했습니다."
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
    {
        category: 'projects',
        tab: '개인',
        id: 888,
        recommend: true,
        title: '블로그',
        image: require('/src/assets/images/work24.svg'),
        bannerImage: require('/src/assets/images/work24_img1.png'),
        alt: '알트값',
        color: '#4D65E1',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'projects',
        tab: '개인',
        id: 111,
        recommend: true,
        title: '영단어 스터디 사이트',
        image: require('/src/assets/images/work24.svg'),
        bannerImage: require('/src/assets/images/work24_img1.png'),
        alt: '알트값',
        color: '#4D65E1',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'projects',
        tab: '개인',
        id: 123123,
        recommend: true,
        title: '모멘텀',
        image: require('/src/assets/images/work24.svg'),
        bannerImage: require('/src/assets/images/work24_img1.png'),
        alt: '알트값',
        color: '#4D65E1',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 2,
        recommend: true,
        title: '고용24',
        image: require('/src/assets/images/work24.svg'),
        bannerImage: require('/src/assets/images/work24_img1.png'),
        alt: '알트값',
        color: '#4D65E1',
        text: `차세대 디지털 고용 서비스 플랫폼 '고용24' 구축은 고용 관련 민원 서비스를 제공하는 주요 시스템 및 행정 서비스를 통합 구축하는 프로젝트입니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
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
//         첫째, 웹접근성 수정으로 과도한 일정에서도 수시로 요청오는 개발 수정, 고객 수정, 신규 페이지 건을 전부 혼자작업했습니다. (고용24 2차)
// 둘째, 웹접근성 위배에 예상되는 페이지가 대략 1,800페이지가 있었는데 JS를 사용하여 이를 600페이지 가량으로 대폭 줄인 성과가 있습니다. (고용24)
// 셋째, 철수 전 고객으로부터 급하게 들어온 신규 건이 있어 빠른 작업을 위해 야근을 하며 피그마에서 직접 디자인작업을 하였습니다. (고용24)
// 넷째, 철수한 프로젝트에서 온 긴급 퍼블 수정요청이 있어휴가날에 재택근무를 하여 처리한 경험이 있습니다.
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `디자인 없이 퍼블리싱 작업을 할 때 😮`,
                text: `프로젝트마다 여러가지 이슈가 있지만 해당 프로젝트는 모바일 디자인이 따로 없어서 PC 화면을 보고 모바일 퍼블리싱 작업을 해야 했었습니다.<br>
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
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `웹접근성 위배 사항을 대폭 줄인 경험`,
                text: `
                웹접근성 1차 검수를 받은 후 위배 페이지는 대략 1,800장 정도였습니다.<br>
                헤드 타이틀들의 순서, 테이블 캡션, input의 label, img alt값, 시멘틱하지 않은 마크업의 컴포넌트 등이 주요 원인이었습니다.<br>
                
                `
            }
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 4,
        recommend: true,
        boxClass: 'black',
        title: 'IBK 온라인 입점 소상공인부 대출',
        image: require('/src/assets/images/ione.svg'),
        alt: '알트값',
        color: '#DBF4FF',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 5,
        recommend: false,
        boxClass: 'black',
        title: '아모레퍼시픽 SCM방문등록시스템',
        image: require('/src/assets/images/amorepacific.svg'),
        alt: '알트값',
        color: '#F3F3F6',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 6,
        recommend: false,
        title: 'HIS STaaS 관리자 페이지',
        image: require('/src/assets/images/hyosung.svg'),
        alt: '알트값',
        color: '#333333',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 7,
        recommend: false,
        title: '신한은행 SOL(앱)',
        image: require('/src/assets/images/shinhan.svg'),
        alt: '알트값',
        color: '#0046FF',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 8,
        recommend: false,
        title: '프로토랩',
        image: require('/src/assets/images/protolab.svg'),
        bannerImage: require('/src/assets/images/protolab_img1.png'),
        alt: '알트값',
        color: '#00479E',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'projects',
        tab: '실무',
        id: 9,
        recommend: true,
        title: '한국과학우주청소년단',
        image: require('/src/assets/images/yakedu.svg'),
        bannerImage: require('/src/assets/images/yakedu_img1.png'),
        alt: '알트값',
        color: '#232D64',
        text: `한국과학우주청소년단 홍보 및 행사를 안내하는 오피셜사이트 개편프로젝트`,
        tags: ['구축 퍼블리싱', '2023년'],
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
                'title': '나의 첫 구축 프로젝트 😎',
                'text': '처음인 만큼 모든 게 어려웠고 실수를 하게 될까 봐 무서웠지만, 함께 작업한 사원들끼리 서로 도와주며 협업했습니다.<br>상사에게 질문하는 것조차 조마조마했던 기억도 있습니다. (질문 전 구글 검색 OK, 예의 준비 OK)'
            },
            {
                'image': [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg'
                ],
                'title': '시뮬레이션 가동은 필수 🔎',
                'text': '처음으로 작업하게 된 페이지는 [공지사항 상세] 입니다.<br><br>첨부파일 영역에는 100개 이상의 첨부파일명이 들어갈 수도 있는 상황을 생각해야 합니다.<br>CSS의 + 선택자를 사용하지 않고 파일명마다 <b>margin-right</b>로 간격을 줘서 첨부파일 영역이 2줄 이상이 되어도 어색하지 않도록 스타일링 했습니다.<br><br>이전글, 다음글 영역 또한 제목이 두 줄 이상이 되지 않도록 <b>overflow: hidden, white-space: nowrap, text-overflow: ellipsis</b>을 사용하여 1줄 말줄임으로 작업했습니다.<br><br>지금은 당연한 거지만 초초초 신입이었던 당시에는 여러가지 방법을 탐색하다 발견했습니다.<br>해당 작업들을 통해 항상 아이템이 수백개일 때를 고려해야 하는 것을 깨달았습니다.'
            },
            {
                'image': [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg'
                ],
                'title': '가상요소 활용 👌',
                'text': '이미지나 아이콘의 경우 img 태그를 사용할 수 있지만 굳이 읽혀야 하는 이미지가 아'
            }
        ]
    },
    {
        category: 'components',
        id: 13,
        recommend: false,
        title: 'components',
        image: require('/src/assets/images/main_banner01.png'),
        alt: '알트값',
        color: '#EF3B24',
        text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.<br>이 프로젝트는 'Simple & Easy' 컨셉을 중심으로 구현되었으며, 이를 통해 프리미엄 아울렛의 독특한 차별성을 강조하였습니다.`,
        tags: ['구축 퍼블리싱', '2023년'],
        infoList: [
            {
                title: 'Client',
                text: '신세계사이먼'
            },
            {
                title: 'Category',
                text: 'WEB / MOBILE / APP'
            },
            {
                title: 'Date',
                text: '2024.01 ~ 2024.02'
            },
            {
                title: 'Service',
                text: 'HTML, CSS, JS, 웹접근성, Figma'
            }
        ],
        content: [
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            },
            {
                image: [
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                    'https://codingapple1.github.io/vue/room0.jpg',
                ],
                title: `MD TAP 신설, 차별성 부여`,
                text: `신세계사이먼 샵프리미엄 3차 고도화 프로젝트를 통해 혁신적인 쇼핑 경험을 사용자들에게 제공하고, 더욱 편리하고 개인화된 서비스를 제공할 수 있도록 노력하였습니다.`
            }
        ]
    },
    {
        category: 'hobby',
        id: 14,
        title: 'Rabbit 🐰',
        image: require('/src/assets/images/main_banner01.png'),
        alt: '알트값',
        color: '#8E1D76',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: '제목',
                text: '내용'
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
        id: 15,
        title: 'Skull',
        color: '#E4691C',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: '제목',
                text: '내용'
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
        color: '#0B2C49',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: '제목',
                text: '내용'
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
        color: '#1C27B5',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: '제목',
                text: '내용'
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
        color: '#4DB6AC',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: '제목',
                text: '내용'
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
        color: '#FFCFBF',
        tags: ['HTML', 'CSS'],
        content: [
            {
                title: '제목',
                text: '내용'
            }
        ],
        iframe: {
            title: 'Cat',
            src: 'https://codepen.io/yoonjeongkim0224/embed/vYJqxVx?default-tab=html%2Cresult',
            href: 'https://codepen.io/yoonjeongkim0224/pen/vYJqxVx'
        }
    }
];