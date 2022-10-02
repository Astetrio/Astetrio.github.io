<template>
  <q-page class="main">
    <section class="column text-black items-center projects">
      <div class="col q-px-lg justify-center container q-gutter-y-lg projects_content">
        <project-item></project-item>
      </div>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectItem from '../components/ProjectItem.vue';

export default defineComponent({
  name: 'IndexPage',

  components: {
    ProjectItem,
  },
});
</script>

<style lang="scss" scoped>
.projects {
  padding-top: 16px;

  &_content {
    display: flex;
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

    @media (min-width: $breakpoint-md-max) {
      grid-template-columns: auto auto auto;
    }
  }
}
</style>
