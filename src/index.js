import viewNav from './views/nav';
import viewUsers from './views/viewUsers';
import viewInput from './views/viewInput';
import viewMessage from './views/viewMessage';
import Router from './Router';

import './index.scss';

const Site = class {
  constructor() {
    this.el = document.getElementById('app');
  }

  render() {
    return `
    ${viewNav()}
    <main class="mt-2 main">
      <div class='row p-2'>
        <article class='d-none col-lg-3 border-end viewUser'>
          ${viewUsers()}
        </article>
        <div class='col-12 col-lg-9'>
          <div class='textarea px-5'>

            <div class='row my-2'>
              <div class='col-12 d-flex justify-content-start'>
                <div class='row'>
                  ${viewMessage()}
                </div>
              </div>
            </div>

            <div class='row my-2'>
              <div class='col-12 d-flex justify-content-end'>
                <div class='row'>
                  ${viewMessage()}
                </div>
              </div>
            </div>
          
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
    const toggleBtn = document.querySelector('.toggleBtn');
    const viewUser = document.querySelector('.viewUser');

    toggleBtn.addEventListener('click', () => {
      viewUser.classList.toggle('responsive');
    });
  }
};

const routes = [{
  url: '/search'
  // ,controller: Search
}];

const showSite = new Site();

showSite.run();
new Router(routes);
