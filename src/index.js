import viewNav from './views/nav';
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

const showSite = new Site();

showSite.run();
