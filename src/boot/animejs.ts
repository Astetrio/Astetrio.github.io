import { boot } from 'quasar/wrappers';
import vueNextAnimejs from '@maybecode/vue-next-animejs';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(vueNextAnimejs);
});

