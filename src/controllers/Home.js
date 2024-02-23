import viewNav from '../views/nav';
import viewBots from '../views/chat-bot/bots';
import viewInput from '../views/chat-bot/input';
import viewMessage from '../views/chat-bot/message';
import botDatas from '../models/entite';

const Home = class {
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

const showSite = new Home();

showSite.run();

// toggle btn
const toggleBtn = document.querySelector('.toggleBtn');
const viewUser = document.querySelector('.container__bot');

toggleBtn.addEventListener('click', () => {
  viewUser.classList.toggle('responsive');
});

export default Home;
