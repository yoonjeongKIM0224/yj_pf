<template>
  <TheHeader />
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper main_swiper">
    <swiper-slide>
      <img src="./assets/images/banner.png" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="./assets/images/banner.png" alt="">
    </swiper-slide>
  </swiper>
  <div class="wrap">
    <TheAside :list="menu" @asideSelected="asideSelected = $event" />
    <section class="section">
      <h2 class="section_title">{{ menu[asideSelected].text }}</h2>
      <router-view :list="projects"></router-view>
      <TheFooter />
    </section>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheAside from '@/components/TheAside.vue';
import TheFooter from '@/components/TheFooter.vue';
import projects from '@/assets/projects';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

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
      asideSelected: 0, //고치기
      projectsOri: projects,
      projects: [...projects],
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
</style>
