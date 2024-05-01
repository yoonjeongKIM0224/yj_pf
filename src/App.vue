<template>
  <TheHeader />
  <swiper
    :slidesPerView="3"
    :spaceBetween="20"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :loop="true"
    :pagination="{
      type: 'fraction'
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper main_swiper"
    >
      <swiper-slide style="background-color: #ddd; height: 500px;">Slide 1</swiper-slide>
      <swiper-slide style="background-color: #ddd; height: 500px;">Slide 2</swiper-slide>
      <swiper-slide style="background-color: #ddd; height: 500px;">Slide 3</swiper-slide>
      <swiper-slide style="background-color: #ddd; height: 500px;">Slide 4</swiper-slide>
    </swiper>
  <div class="wrap">
    <TheAside :list="menu" @asideSelected="asideSelected = $event" />
    <section class="section">
      <h2 class="section_title">{{ menu[asideSelected].text }}</h2>
      <router-view :list="detailInfo"></router-view>
      <TheFooter />
    </section>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheAside from '@/components/TheAside.vue';
import TheFooter from '@/components/TheFooter.vue';
import detailInfo from '@/assets/data/detail_info.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
          text: 'Design',
          icon: '🌹',
          link: '/design',
          itemClass: '',
        },
        {
          text: 'Contact Me',
          icon: '👀',
          link: '/contact_me',
          itemClass: '',
        },
      ],
      detailInfo,
      asideSelected: 0, //고치기
      modules: [Pagination, Navigation],
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

  .swiper-slide-active {
    width: 80%!important;
    background: yellow!important;
  }

  .swiper-slide-next {
    width: calc((20% - 40px) / 2)!important;
    background: red!important;
  }

  .swiper-slide-next + * {
    width: calc((20% - 40px) / 2)!important;
    background: pink!important;
  }
</style>
