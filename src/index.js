import viewNav from './views/nav';
import viewUsers from './views/viewUsers';
import viewInput from './views/viewInput';
import viewMessage from './views/viewMessage';
import Router from './Router';
import Chat from './controllers/Chat';

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
          <div class='textarea px-5'>

            <div class='row'>
              <div class='col-12 d-flex justify-content-start'>
                <div class='row'>
                  ${viewMessage()}
                </div>
              </div>
            </div>

            <div class='row'>
              <div class='col-12 d-flex justify-content-end'>
                <div class='row message'>

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
  }
};

const routes = [{
  url: '/chat',
  controller: Chat
}];

const showSite = new Site();

showSite.run();
new Router(routes);
