<template>
  <div id="q-app">
    <div class="bg"></div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss" scoped>
#q-app {
  position: relative;

  & > .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #dcc589;
  }
}
</style>
