import viewNav from '../views/nav';
import viewListBots from '../views/bots/list-bots';

import ServiceUtiles from '../services/Utiles';
import ServiceAxios from '../services/Axios';

const Bots = class {
  constructor() {
    this.el = document.getElementById('app');
    this.serviceAxios = new ServiceAxios();
    this.run();
  }

  async renderSkeleton(bots) {
    return `
      
      ${viewNav()}
      
      <h1 class= 'title-bot-page'>Nos <span>Bots</span></h1>
      
      <main class='main-listBots'>
        
        ${viewListBots(bots)}
      
      </main>
    `;
  }

  async getBots() {
    const bots = await this.serviceAxios.Get('http://localhost/bots');
    return bots;
  }

  async run() {
    const bots = await this.getBots();
    this.el.innerHTML = await this.renderSkeleton(bots);
    this.utiles = new ServiceUtiles();
  }
};

export default Bots;
