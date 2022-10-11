import { boot } from 'quasar/wrappers';
import { createSharedElementDirective, SharedElementRouteGuard } from 'v-shared-element';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router }) => {
  app.use(
    createSharedElementDirective({
      restrictToViewport: true,
    }),
  );

  router.beforeEach(SharedElementRouteGuard);
});
