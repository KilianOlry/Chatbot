import axios from 'axios';
import viewNav from '../views/nav';
import listBots from '../views/bots/list-bots';

const Bots = class {
  constructor() {
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

  async botsData() {
    const apiUrl = 'http://localhost/bots';
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async run() {
    this.el.innerHTML = await this.renderSkeleton();
    this.toggleBtn();
  }
};

export default Bots;
