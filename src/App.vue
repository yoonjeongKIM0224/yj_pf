<template>
  <TheHeader />
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="20"
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
          <div class="tag_list01">
            <span class="item" v-for="(item, idx) in info.tags" :key="idx">{{ item }}</span>
          </div>
          <span class="title" v-html="info.title"></span>
          <p class="desc" v-html="info.desc"></p>
        </div>
      </swiper-slide>

      <div class="swiper_info_wrap">
        <div class="swiper-button-prev" solt="button-prev"></div>
        <div class="swiper-pagination" solt="pagination"></div>
        <div class="swiper-button-next" solt="button-next"></div>
      </div>
    </swiper>
  <div class="wrap">
    <TheAside :list="menu" @asideSelected="asideSelected = $event" />
    <section class="section">
      <h2 class="section_title">{{ menu[asideSelected].text }}</h2>
      <router-view :list="detailInfo"></router-view>
      <TheFooter />
    </section>
  </div>
  <a href="https://www.kakaocorp.com/page/" target="_blank" class="chat_btn">
    <span class="container">
      오픈채팅
    </span>
  </a>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheAside from '@/components/TheAside.vue';
import TheFooter from '@/components/TheFooter.vue';
import detailInfo from '@/assets/data/detail_info.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

export default {
  name: 'App',
  data(){
    return {
      menu: [
        {
          text: 'About Me',
          icon: '💕',
          link: '/about_me',
          itemClass: '',
        },
        {
          text: 'Projects',
          icon: '🤞',
          link: '/projects',
          itemClass: '',
        },
        {
          text: 'Components',
          icon: '🙌   ',
          link: '/components',
          itemClass: '',
        },
        {
          text: 'Hobby',
          icon: '🌹',
          link: '/hobby',
          itemClass: '',
        },
        // {
        //   text: 'Contact Me',
        //   icon: '👀',
        //   link: '/contact_me',
        //   itemClass: '',
        // },
      ],
      detailInfo,
      asideSelected: 0, //고치기
      modules: [Pagination, Navigation],
      mainSwiper: [
        {
          tags: ['Components'],
          title: '이것은<br />타이틀입니다.1',
          desc: '이것은 텍스트입니다.'
        },
        {
          tags: ['Projects'],
          title: '이것은<br />타이틀입니다.2',
          desc: '이것은 텍스트입니다.'
        },
        {
          tags: ['Component'],
          title: '이것은<br />타이틀입니다.3',
          desc: '이것은 텍스트입니다.'
        },
        {
          tags: ['Component'],
          title: '이것은<br />타이틀입니다.4',
          desc: '이것은 텍스트입니다.'
        }
      ]
    }
  },
  components: {
    TheHeader,
    TheAside,
    TheFooter,
    Swiper,
    SwiperSlide,
  },
}
</script>

<style>
  @import '~@/assets/style/import.css';
</style>
