<template>
  
  <!-- :autoplay="{
        delay: 6000,
        disableOnInteraction: true,
      }" -->
  <div class="wrapper" :class="[]">
    <!-- (detailPage && scroll == 0) || scroll !== 0 ? 'scroll_down' : '' -->
    <TheHeader :list="menu" :sectionInfo="sectionInfo" :width="width" />
    <div :class="['wrap', detailPage ? 'detail_page' : '']">
      <swiper
      v-if="$route.fullPath == '/'"
      :slidesPerView="'auto'"
      :spaceBetween="width <= 600 ? 10 : 20"
      :loop="true"
      :speed="800"
      :pagination="true"
      :modules="modules"
      class="main_swiper"
      >
        <swiper-slide v-for="(info, idx) in mainSwiper" :key="idx">
          <router-link class="container" :to="info.link" :style="`background-color: ${info.color}`">
            <div class="category round_cont">
              <span class="category_text cont" v-html="info.category" :style="`background-color: ${info.color}`"></span>
            </div>
            <img :src="info.img" :alt="info.alt" class="img">
            <div class="link_btn_wrap round_cont">
              <div class="link_btn cont" aria-label="보러가기" :style="`background-color: ${info.color}`">
                <TheIcon size="lg" icon="arrow4" rotate="270" />
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
      <section class="section">
        <h2 class="section_title" v-if="sectionInfo.meta.title && !detailPage" v-html="sectionInfo.meta.title"></h2>
        <p class="section_text" v-if="!detailPage" v-html="sectionInfo.meta.text"></p>
        <router-view :key="$route.fullPath" :list="detailInfo" :sectionInfo="sectionInfo" :width="width"></router-view>
      </section>
    </div>

    <TheButton
    type="a"
    :to="`https://www.kakaocorp.com/page`"
    class="button_chat"
    color="primary"
    size="sm"
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
          color: '#FF8E8B',
          category: 'Projects',
          title: '',
          desc: '',
          img: require('./assets/images/main_banner1.png'),
          link: '/detail/1',
          alt: 'hello! let me introduce my portfolio.'
        },
        {
          color: '#0C0C0C',
          category: 'Hobby',
          title: '',
          desc: '',
          img: require('./assets/images/main_banner2.png'),
          link: '/projects',
          alt: '프론트 작업 외의 저의 취미를 구경해 보실래요? 귀여운 토끼가 움직여요. 토글버튼을 눌러 보세요. 입 그만 움직이라 할까요? Go hobby menu'
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
  props: {
    itemId: String,
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
