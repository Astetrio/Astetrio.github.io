<template>
  <div class="col full-width full-height custom-image">
    <div class="inter relative-position">
      <img
        ref="img"
        :src="src"
        :alt="alt"
        v-shared-element:[`preview-${guid}`]="{
          // $keepSharedElementAlive,
          restrictToRoutes: ['/', `/project/${guid}`],
        }"
      />
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

  // methods: {
  //   onImageLoaded() {
  //     if (!this.img) {
  //       return;
  //     }

  //     this.interStyle = { 'padding-top': `${this.img.naturalHeight / this.img.naturalWidth * this.img.width}px` };
  //   }
  // },

  // mounted() {
  //   if (!this.img) {
  //     return;
  //   }

  //   this.img.onload = this.onImageLoaded;
  // },

  // setup() {
  //   const img = ref<HTMLImageElement>();
  //   const interStyle = ref<StyleValue>();

  //   return { img, interStyle };
  // }
});
</script>

<style lang="scss" scoped>
.custom-image {
  display: flex;
  flex-direction: column;
  align-items: center;

  .inter {
    //padding-top: 66%;
    width: 100%;
  }

  img {
    //position: absolute;
    //inset: 0%;
    width: 100%;
    height: 100%;
    //object-fit: fill;
  }
}
</style>
