<template>
  <q-page class="project">
    <section class="column text-black items-center">
      <div class="col q-px-lg justify-center container relative-position">
        <div class="preview">
          <custom-image
            :src="project?.Thumbnail"
            :alt="project?.Guid"
            :guid="guid"
          />
        </div>
        <!-- <p>{{ project?.Description }}</p> -->
        <q-markdown
          class="content"
          :src="
            $mt(project?.Description).replace(
              '{{SmallDescription}}',
              $mt(project?.SmallDescription),
            )
          "
        />
      </div>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CustomImage from 'src/components/CustomImage.vue';
import { Project } from 'src/components/models';
import { mappedProjects as projectsDict } from 'src/stores/projects';

export default defineComponent({
  name: 'ProjectPage',

  components: {
    CustomImage,
  },

  // computed: {
  //   guid() {
  //     return this.$route.params['guid'].toString();
  //   }
  // },

  // activated() {
  //   this.guid = this.$route.params['guid'].toString();
  // },

  beforeMount() {
    this.guid = this.$route.params['guid'].toString();
    this.project = projectsDict.get(this.guid);
  },

  /*async mounted() {
    const project = await this.$api.get(`/projects/${this.$route.params['guid']}`);
    this.project = project.data;
  },*/

  setup() {
    const project = ref<Project>();
    const guid = ref<string>();

    return { project, guid };
  },
});
</script>

<style lang="scss" scoped>
.project:deep(img) {
  border-radius: 8px;
}

.preview {
  position: relative;
  padding: 0;

  // @media (min-width: $breakpoint-xs-max) {
  //   padding: 0 64px;
  // }

  @media (min-width: $breakpoint-sm-max) {
    padding: 0 128px;
  }

  @media (min-width: $breakpoint-md-max) {
    padding: 0 256px;
  }
}

.content {
  padding: 0;

  /*&:deep(img) {
    //margin-left: 20%;
    //width: 60%;
    vertical-align: bottom;
  }*/

  &:deep(a)::after {
    content: none;
  }

  @media (min-width: $breakpoint-sm-max) {
    padding: 0 128px;
  }

  @media (min-width: $breakpoint-md-max) {
    padding: 0 256px;
  }
}
</style>
