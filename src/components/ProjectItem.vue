<template>
  <div class="column q-pa-sm justify-between items-center project">
    <div class="col q-my-lg full-width full-height img">
      <q-intersection once class="inter">
        <img :src="thumbnail" :alt="title" width="368px" height="243.5px" />
      </q-intersection>
    </div>
    <h2 class="col-auto">{{ title }}</h2>
    <h3 v-if="price" class="col-auto">{{ price }} {{ $i18n.t('sum') }}</h3>
    <div class="col q-my-lg full-width full-height img">
      <q-intersection once class="inter">
        <img :src="usagePreview" :alt="usageTitle" width="368px" height="243.5px" />
      </q-intersection>
    </div>
    <h2 class="col-auto">{{ usageTitle }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectItem',

  props: {
    thumbnail: String,
    usagePreview: String,
    title: String,
    usageTitle: String,
    price: Number,
  },
});
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  color: $text-color;
}

.project {
  $size: 224px;

  width: $size * 2;
  height: $size;
  max-height: $size;
  position: relative;
  background: #7e570339;
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(131, 138, 135, 0.37);
  backdrop-filter: blur(2px);

  @media (min-width: $breakpoint-sm-min) {
    $size: 288px;

    width: $size * 2;
    height: $size;
    max-height: $size;
  }

  @media (min-width: $breakpoint-md-min) {
    $size: 384px;

    width: $size * 2;
    height: $size;
    max-height: $size;
  }
}

.img {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: auto;
    max-width: 100%;
    height: 100%;
    vertical-align: bottom;
    object-fit: cover;
  }
}

.inter {
  width: auto;
  height: 100%;

  &::v-deep div {
    width: auto;
    height: 100%;
  }
}
</style>
