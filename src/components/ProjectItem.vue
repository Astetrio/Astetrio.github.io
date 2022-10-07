<template>
  <div class="column q-pb-sm overflow-hidden justify-between items-center project">
    <div class="col q-mb-lg full-width full-height img">
      <q-intersection once class="inter">
        <!--<q-img :src="thumbnail" :alt="title" width="368px" height="243.5px" />-->
        <router-link :to="`/project/${guid}`">
          <img :src="thumbnail" :alt="title" />
        </router-link>
      </q-intersection>
    </div>
    <h2 class="col-auto">{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectItem',

  props: {
    thumbnail: String,
    title: String,
    guid: String,
    description: Number,
  },
});
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  color: $text-color;
}

.project {
  $width: 320px;
  $height: $width / 1.2;

  width: $width;
  height: $height;
  max-height: $height;
  position: relative;
  background: #5e575339;
  border-radius: 16px;
  //box-shadow: 0 8px 32px 0 rgba(131, 138, 135, 0.37);
  //backdrop-filter: blur(2px);

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

.img {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    vertical-align: bottom;
    object-fit: cover;
  }
}

.inter {
  width: 100%;
  height: 100%;

  &:deep(div) {
    width: 100%;
    height: 100%;
  }
}
</style>
