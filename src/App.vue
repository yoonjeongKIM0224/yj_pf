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
          <div class="tag_list1">
            <span class="item" v-for="(item, idx) in info.tags" :key="idx">{{ item }}</span>
          </div>
          <span class="title" v-html="info.title"></span>
          <p class="desc" v-html="info.desc"></p>
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
  <div class="wrap">
    <TheAside :list="menu" @asideSelected="asideSelected = $event" />
    <section class="section">
      <h2 class="section_title">{{ menu[asideSelected].title + menu[asideSelected].icon }}</h2>
      <p class="section_text">{{ menu[asideSelected].text }}</p>
      <router-view :list="detailInfo"></router-view>
      <TheFooter />
    </section>
  </div>
  <TheButton
      type="a"
      :to="`https://www.kakaocorp.com/page`"
      class="button_chat"
      color="primary"
      size="lg"
      :round="true">
      카카오톡
      <template v-slot:after>
        <TheIcon
          size="sm"
          icon="msg1" />
      </template>
    </TheButton>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheAside from '@/components/TheAside.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheButton from '@/components/TheButton.vue';
import TheIcon from '@/components/TheIcon.vue';
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
          title: 'About Me',
          text: '소개하는 페이지입니다.',
          icon: '💥',
          link: '/about_me',
          itemClass: '',
        },
        {
          title: 'Projects',
          text: '프로젝트 페이지입니다.',
          icon: '🌹',
          link: '/projects',
          itemClass: '',
        },
        {
          title: 'Components',
          text: '컴포넌트 페이지입니다.',
          icon: '🎨',
          link: '/components',
          itemClass: '',
        },
        {
          title: 'Hobby',
          text: '취미 페이지입니다.',
          icon: '🧬',
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
    TheButton,
    TheIcon
  },
  watch: {
    asideSelected(){
      console.log('변경')
    }
  }
}
</script>

<style>
  @import '~@/assets/style/import.css';
</style>
