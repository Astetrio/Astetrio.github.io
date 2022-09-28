<template>
  <q-page class="main">
    <section class="column text-white items-center products section">
      <div class="col q-px-lg justify-center container q-gutter-y-lg products_content"></div>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>

<style lang="scss" scoped>
.products {
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

.about {
  padding: 16px;
}

.description {
  grid-row: span 4;
  grid-column: 2;
  color: $text-color;
}
</style>
