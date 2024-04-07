import viewNav from '../views/nav';
import listBots from '../views/bots/list-bots';
import BotActions from '../classes/BotActions';

const Bots = class extends BotActions {
  constructor() {
    super();
    this.el = document.getElementById('app');
    this.message = document.querySelector('.container__message__user');

    this.run();
  }

  async renderSkeleton() {
    return `
      ${viewNav()}
      <h1 class= 'title-bot-page'>Nos <span>Bots</span></h1>
      <main class='main-listBots'>
        ${listBots(await this.botsData())}
      </main>
    `;
  }

  toggleBtn() {
    const toggleBtn = document.querySelector('.toggleBtn');
    const viewUser = document.querySelector('.container__bot');
    toggleBtn.addEventListener('click', () => {
      viewUser.classList.toggle('responsive');
    });
  }

  async run() {
    this.el.innerHTML = await this.renderSkeleton();
    this.toggleBtn();
  }
};

export default Bots;
