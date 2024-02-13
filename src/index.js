import viewNav from './views/nav';
import Router from './Router';
import toto from './toto.png';

import './index.scss';

const Site = class {
  constructor() {
    this.el = document.getElementById('app');
  }

  render() {
    return viewNav();
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

const routes = [{
  url: '/search'
  // ,controller: Search
}];

new Router(routes);

const showSite = new Site();

showSite.run();
