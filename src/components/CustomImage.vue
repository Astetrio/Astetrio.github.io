<template>
  <div class="col q-mb-lg full-width full-height custom-image">
    <div class="inter relative-position">
      <img :src="src" :alt="alt" v-shared-element:[guid]="{
        // $keepSharedElementAlive,
        restrictToRoutes: ['/', `/project/${guid}`],
      }" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import { sharedElementMixin } from 'v-shared-element';

export default defineComponent({
  name: 'CustomImage',

  props: {
    src: String,
    alt: String,
    guid: String,
  },

  //mixins: [sharedElementMixin],
});
</script>

<style lang="scss" scoped>
.custom-image {
  display: flex;
  flex-direction: column;
  align-items: center;

  .inter {
    padding-top: 66%;
    width: 100%;
  }

  img {
    position: absolute;
    inset: 0%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
