<template>
  <TheHeader />
  <!-- :autoplay="{
      delay: 1000,
      disableOnInteraction: true,
    }" -->
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
  <div class="wrap">
    <TheAside :list="menu" :sectionInfo="sectionInfo" />
    <section class="section">
      <h2 class="section_title">
        {{ sectionInfo.meta.title + sectionInfo.meta.icon }}
      </h2>
      <p class="section_text">{{ sectionInfo.meta.text }}</p>
      <router-view :key="$route.fullPath" :list="detailInfo"></router-view>
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
          link: '/detail/1'
        },
        {
          tags: ['Component'],
          title: '컴포넌트',
          desc: '이것은 텍스트입니다.',
          link: '/projects'
        },
        {
          tags: ['Component'],
          title: '이것은<br />타이틀입니다.3',
          desc: '이것은 텍스트입니다.',
          link: '/projects'
        },
      ],
      menu,
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
  computed: {
    sectionInfo: function(){
      let val = this.sectionInfoHandelr()
      return val
    }
  },
  watch: {
    $route(){
      let val = this.sectionInfoHandelr()
      this.sectionInfo = val
    }
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
    }
  }
}
</script>

<style>
  @import '~@/assets/style/import.css';
</style>
