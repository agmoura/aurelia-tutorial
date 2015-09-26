import 'bootstrap';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Github Users' },
      { route: 'bootstrap',     name: 'bootstrap',    moduleId: 'bootstrap-test', nav: true, title:'Bootstrap Test' },
      { route: 'todo',          name: 'todo',         moduleId: 'todo/index',   nav: true, title:'To Do Module' },
      { route: 'customer',      name: 'customer',     moduleId: 'customer/index',   nav: true, title:'Customers Module' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}