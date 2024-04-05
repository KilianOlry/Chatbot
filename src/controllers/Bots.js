import viewNav from '../views/nav';
import listBots from '../views/bots/list-bots';

const Bots = class {
  constructor() {
    this.el = document.getElementById('app');
    this.message = document.querySelector('.container__message__user');

    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav()}
      <h1 class= 'title-bot-page'>Nos <span>Bots</span></h1>
      <main class='main-listBots'>
        ${listBots()}
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

  run() {
    this.el.innerHTML = this.renderSkeleton();
    this.toggleBtn();
  }
};

export default Bots;
