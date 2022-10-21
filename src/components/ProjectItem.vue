<template>
  <div class="column overflow-hidden justify-between project">
    <router-link class="link" :to="`/project/${project.Guid}`">
      <custom-image
        :src="project.Thumbnail"
        :alt="project.Guid"
        :guid="project.Guid"
      />
    </router-link>
    <!-- <h3 class="col-auto q-px-lg">{{ $mt(project.Title) }}</h3> -->
    <!-- <div class="col-auto q-px-lg q-py-md">{{ project.Description }}</div> -->
    <!-- <q-markdown no-heading-anchor-links class="col-auto q-px-lg q-py-md" :src="$mt(project.SmallDescription)" /> -->
    <q-markdown
      no-heading-anchor-links
      class="col-auto q-px-lg q-pb-md"
      :src="$mt(project.SmallDescription)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CustomImage from './CustomImage.vue';
import { Project } from './models';

export default defineComponent({
  name: 'ProjectItem',

  components: {
    CustomImage,
  },

  props: {
    project: {
      required: true,
      type: Object as PropType<Project>,
    },
  },
});
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  color: $text-color;
}

.project {
  //$width: 100%;
  $width: 400px;
  //$height: $width / 1.2;

  width: inherit;
  max-width: $width;
  //height: $height;
  //max-height: $height;
  position: relative;
  background: #5e575339;
  border-radius: 16px;
  overflow-wrap: break-word;
  //box-shadow: 0 8px 32px 0 rgba(131, 138, 135, 0.37);
  //backdrop-filter: blur(2px);

  font-size: 16px;

  .link {
    display: contents;

    &:deep(img) {
      border-radius: 16px 16px 0 0;
    }
  }

  > * {
    width: 100%;
  }

  &:deep(img) {
    border-radius: 8px;
  }

  /*@media (min-width: $breakpoint-sm-min) {
    $width: 576px;

    width: $width;
    height: $height;
    max-height: $height;
  }

  @media (min-width: $breakpoint-md-min) {
    $width: 768px;

    width: $width;
    height: $height;
    max-height: $height;
  }*/
}
</style>
