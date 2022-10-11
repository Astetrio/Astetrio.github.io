import { AnimeFn } from '@maybecode/vue-next-animejs';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $anime: AnimeFn;
  }
}
