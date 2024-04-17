<template>
  <TheHeader />
  <TheAside />
  <TheTab :tabs="tabs">
    <template v-slot:temp1>
      <ul>
        <li v-for="(info, idx) in projects" :key="idx">
          {{ info.title }}
          <img :src="info.image" />
          {{ info.content }}

          <span v-for="(item, idx) in info.tags" :key="idx">{{ item }}</span>
        </li>
      </ul>
    </template>
    <template v-slot:temp2>tab contents2</template>
  </TheTab>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheAside from './components/TheAside.vue';
import TheTab from './components/TheTab.vue';
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
      projects: [...projects]
    }
  },
  components: {
    TheHeader,
    TheAside,
    TheTab,
  }
}
</script>

<style>
</style>
