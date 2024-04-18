<template>
  <TheHeader />
  <TheAside @asideSelected="asideSelected = $event" />
  <section class="section">
    <TheTab :tabs="tabs" @tabSelected="tabSelected = $event">
      <template v-slot:temp1>
        탭1
        <TheList01 :list="projects" />
      </template>
      <template v-slot:temp2>
        탭2
        <TheList01 :list="projects" />
      </template>
    </TheTab>
  </section>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheAside from './components/TheAside.vue';
import TheTab from './components/TheTab.vue';
import TheList01 from './components/TheList01.vue';
import projects from './assets/projects';

export default {
  name: 'App',
  data(){
    return {
      tabs: [
        {
          text: '실무',
          itemClass: '',
          disabled: false,
        },
        {
          text: '개인',
          itemClass: '',
          disabled: false,
        }
      ],
      projectsOri: projects,
      projects: [...projects],
      asideSelected: 0,
      tabSelected: 0,
    }
  },
  components: {
    TheHeader,
    TheAside,
    TheTab,
    TheList01,
  }
}
</script>

<style>
  @import '~@/assets/style/import.css';
</style>
