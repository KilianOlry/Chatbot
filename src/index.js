import viewNav from './views/nav';
import viewUsers from './views/viewUsers';
import Router from './Router';

import './index.scss';

const Site = class {
  constructor() {
    this.el = document.getElementById('app');
  }

  render() {
    return `
    ${viewNav()}
    <main class="mt-2">
      <div class='row'>
        <article class='col-3'>
          ${viewUsers()}
        </article>
        <div class='col-9'>
          <div class='row textarea'>

          </div>
          
          <div class='row'>
            <div class="input-group">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="button addons">
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>

          </div>
        </div>
      </div>

    </main>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

const routes = [{
  url: '/search'
  // ,controller: Search
}];

const showSite = new Site();

showSite.run();
new Router(routes);
