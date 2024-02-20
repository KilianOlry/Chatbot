import viewNav from './views/nav';
import viewBots from './views/chatBot/viewBots';
import viewInput from './views/chatBot/viewInput';
import viewMessage from './views/chatBot/viewMessage';
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
    <main>

        <article class='container__bot'>
          ${viewBots(botDatas)}
        </article>

        <div class='container__right'>
          <div class='textarea'>

              <div class=''>
                <div class='container__message__bot'>
                  ${viewMessage()}
                </div>
              </div>

              <div class='test'>
                <div class='container__message__user'>

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
