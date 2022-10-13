<template>
  <q-page class="main">
    <section class="column text-black items-center projects">
      <div class="col q-px-lg justify-center container q-gutter-y-lg projects_content">
        <project-item :key="project.Guid" v-for="project in projects" :project="project" />
      </div>
    </section>
    <div>{{ $i18n.locale }}</div>
    <div>{{ $t('success') }}</div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProjectItem from 'src/components/ProjectItem.vue';
import { projects as projectsArray } from 'src/stores/projects';

export default defineComponent({
  name: 'IndexPage',

  components: {
    ProjectItem,
  },

  /*async mounted() {
    const projects = await this.$api.get('/projects');
    this.projects = projects.data;
  },*/

  /*beforeRouteLeave() {
    const img = document.createElement('img');

    img.src = this.clickedImageSrc;
    img.style.position = 'absolute';
    img.style.top = `${this.clickedImageRect.top}px`;
    img.style.left = `${this.clickedImageRect.left}px`;
    img.style.width = `${this.clickedImageRect.width}px`;
    img.style.height = `${this.clickedImageRect.height}px`;

    this.$root?.$el.appendChild(img);

    setTimeout(() => {
      img.remove();
    }, 1000);
  },*/

  mounted() {
		/*if (!this.$root) {
			return;
		}
  
  	this.$root.$i18n.locale = 'ru-RU';*/
  	this.$i18n.locale = 'ru-RU';
  },

  setup() {
    // {"Id":1,"Guid":"68dfcad1-5624-4929-9fbd-49de3f21b97f","Title":"Crazy Stack","Description":"A very long description","Thumbnail":"images/crazy-stack.jpg"}
    const projects = ref(projectsArray);

    return { projects };
  },
});
</script>

<style lang="scss" scoped>
.projects {
  padding-top: 16px;
  padding-bottom: 16px;

  &_content {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: auto;
    column-gap: 64px;

    > .flex {
      flex-direction: column;
      row-gap: 32px;
    }

    @media (min-width: $breakpoint-sm-max) {
      grid-template-columns: auto auto;
    }

    // @media (min-width: $breakpoint-md-max) {
    //   grid-template-columns: auto auto auto;
    // }
  }
}
</style>
