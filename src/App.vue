<template>
  <div class="wrapper" :class="[]">
    <!-- (detailPage && scroll == 0) || scroll !== 0 ? 'scroll_down' : '' -->
    <TheHeader :list="menu" :sectionInfo="sectionInfo" :width="width" />
    <!-- :autoplay="{
        delay: 1000,
        disableOnInteraction: true,
      }" -->
    <div :class="['wrap', detailPage ? 'detail_page' : '']">
      <swiper
      v-if="$route.fullPath == '/'"
      :slidesPerView="'auto'"
      :spaceBetween="width <= 600 ? 10 : 20"
      :loop="true"
      :speed="800"
      :pagination="{ 
        el: '.swiper-pagination', 
        type: 'fraction'
      }"
      :navigation="{ 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev'
      }"
      :modules="modules"
      class="main_swiper"
      >
      <swiper-slide v-for="(info, idx) in mainSwiper" :key="idx">
        <div class="container">
          <div class="tag_list1">
            <span class="item" v-for="(item, idx) in info.tags" :key="idx">{{ item }}</span>
          </div>
          <span class="title" v-html="info.title"></span>
          <p class="desc" v-html="info.desc"></p>
          <img :src="info.img" alt="" class="img">
          <router-link :to="info.link" class="container_cont" aria-label="보러가기" />
        </div>
      </swiper-slide>

      <div class="swiper_info_wrap">
        <div class="swiper-button-prev" solt="button-prev">
          <TheIcon size="xs" icon="arrow2" rotate="90" />
        </div>
        <div class="swiper-pagination" solt="pagination"></div>
        <div class="swiper-button-next" solt="button-next">
          <TheIcon size="xs" icon="arrow2" rotate="270" />
        </div>
      </div>
      </swiper>
      <section class="section">
        <h2 class="section_title" v-if="sectionInfo.meta.title && !detailPage">
          {{ sectionInfo.meta.title }}
          <TheIcon size="xxl" :icon="sectionInfo.meta.icon" margin="left" />
        </h2>
        <p class="section_text" v-if="!detailPage">{{ sectionInfo.meta.text }}</p>
        <router-view :key="$route.fullPath" :list="detailInfo" :sectionInfo="sectionInfo"></router-view>
      </section>
    </div>
    <TheButton
    v-if="false"
    type="a"
    :to="`https://www.kakaocorp.com/page`"
    class="button_chat"
    color="primary"
    size="md"
    :round="true">
    카카오톡
    <template v-slot:after>
      <TheIcon
      size="sm"
      icon="msg1" />
    </template>
    </TheButton>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheButton from '@/components/TheButton.vue';
import TheIcon from '@/components/TheIcon.vue';
import detailInfo from '@/assets/data/detail_info.js';
import menu from '@/menu.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

export default {
  name: 'App',
  data(){
    return {
      detailInfo,
      modules: [Autoplay, Pagination, Navigation],
      mainSwiper: [
        {
          tags: ['Projects'],
          title: '포트폴리오 사이트<br>Review 보러가기 🏃‍♀️',
          desc: '주니어의 삽질... 한 번 보실라유?!',
          img: require('./assets/images/main_banner01.png'),
          link: '/detail/1'
        },
        {
          tags: ['Component'],
          title: '컴포넌트',
          desc: '이것은 텍스트입니다.',
          img: require('./assets/images/main_banner01.png'),
          link: '/projects'
        },
        {
          tags: ['Component'],
          title: '이것은<br />타이틀입니다.3',
          desc: '이것은 텍스트입니다.',
          img: require('./assets/images/main_banner01.png'),
          link: '/projects'
        },
      ],
      menu,
      width: window.innerWidth,
      scroll: window.scrollY,
    }
  },
  components: {
    TheHeader,
    TheFooter,
    Swiper,
    SwiperSlide,
    TheButton,
    TheIcon
  },
  computed: {
    sectionInfo: function(){
      let val = this.sectionInfoHandelr()
      return val
    },
    detailPage: function(){
      return this.$route.fullPath.indexOf('detail') > -1
    }
  },
  watch: {
    $route(){
      let val = this.sectionInfoHandelr()
      this.sectionInfo = val
    },
  },
  methods: {
    sectionInfoHandelr(){
      let val = this.$route

      if(Object.keys(this.$route.meta).length == 0){
        for(let i = 0; i < detailInfo.length; i++){
          if(detailInfo[i].id == this.$router.currentRoute.value.params.itemId){
            let category = detailInfo[i].category

            for(let j = 0; j < this.$router.options.routes.length; j++){
              if(category == this.$router.options.routes[j].path.split('/')[1]) {
                val = this.$router.options.routes[j]
              }
            }
          }
        }
      }

      return val
    },
    handleResize() {
      this.width = window.innerWidth;
    },
    handleScroll() {
      this.scroll = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  },
  BeforeUnmount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
  @import '~@/assets/style/import.css';
</style>
