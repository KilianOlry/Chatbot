import Error404 from './controllers/Error404';

const Router = class {
  constructor(routes = []) {
    this.path = window.location.pathname;
    this.granted = !!window.localStorage.getItem('user');
    this.params = !window.location.search ? {} : Object.fromEntries(
      window.location.search
        .split('?')[1]
        .split('&')
        .map((param) => param.split('='))
    );
    this.routes = routes;

    this.run();
  }

  startController() {
    let ifExist = false;

    for (let i = 0; i < this.routes.length; i += 1) {
      const route = this.routes[i];

      if (route.url === this.path) {
        if (route.granted === undefined || route.granted === this.granted) {
          const Controller = route.controller;
          new Controller(this.params);
          ifExist = true;
          break;
        }
        window.location.href = '/';
      }
    }

    if (!ifExist) {
      new Error404();
    }
  }

  run() {
    this.startController();
  }
};

export default Router;
