import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
    config.title = 'Astetrio';
    config.map([
      {
        route: '',
        name: 'index',
        moduleId: PLATFORM.moduleName('./index'),
        nav: true
      },
      {
        route: 'users',
        name: 'users',
        moduleId: PLATFORM.moduleName('./users'),
        nav: true,
        title: 'Github Users'
      }
    ]);

    config.options.pushState = true;
    config.options.root = '/';

    this.router = router;
  }
}
