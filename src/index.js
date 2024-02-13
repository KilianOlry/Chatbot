import viewNav from './views/nav';
import viewUsers from './views/viewUsers';
import viewInput from './views/viewInput';
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
      <div class='row p-2'>
        <article class='col-3 border-end'>
          ${viewUsers()}
        </article>
        <div class='col-9'>
          <div class='row textarea'>

          </div>
          
          <div class='row'>
            ${viewInput()}
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
