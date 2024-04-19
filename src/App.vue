<template>
  <TheHeader />
  <div class="wrap">
    <TheAside :list="menu" />
    <section class="section">
      <router-view :list="projects"></router-view>
    </section>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheAside from '@/components/TheAside.vue';
import projects from '@/assets/projects';

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
      projectsOri: projects,
      projects: [...projects],
    }
  },
  components: {
    TheHeader,
    TheAside,
  },
}
</script>

<style>
  @import '~@/assets/style/import.css';
</style>
