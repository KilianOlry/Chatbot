import viewNav from './views/nav';
import viewBots from './views/viewBots';
import viewInput from './views/viewInput';
import viewMessage from './views/viewMessage';
import botDatas from './models/Bot';
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
    <main class="main">
      <div class='row'>
        <article class='d-none col-lg-3 container__bot'>
          ${viewBots(botDatas)}
        </article>
        <div class='col-12 col-lg-9'>
          <div class='textarea'>

            <div class='row my-2'>
              <div class='col-12 border-start d-flex flex-direction-column justify-content-start'>
                <div class='row container__message__bot mt-4'>
                  ${viewMessage()}
                </div>
              </div>
            </div>

            <div class='row my-2'>
              <div class='col-12 d-flex justify-content-end'>
                <div class='row container__message__user'>

                </div>
              </div>
            </div>

          </div>

          <div class='container__input'>
            ${viewInput()}
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

// toggle btn
const toggleBtn = document.querySelector('.toggleBtn');
const viewUser = document.querySelector('.container__bot');

toggleBtn.addEventListener('click', () => {
  viewUser.classList.toggle('responsive');
});
