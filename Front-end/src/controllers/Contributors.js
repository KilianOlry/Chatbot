import viewNav from '../views/nav';
import Utiles from '../services/Utiles';

const Bots = class {
  constructor() {
    this.el = document.getElementById('app');

    this.run();
  }

  async renderSkeleton() {
    return `
      ${viewNav()}
      <h1 class= 'title-bot-page'>Nos <span>Collaborateurs</span></h1>
      <main class='main-listBots'>
        
      </main>
    `;
  }

  async run() {
    this.el.innerHTML = await this.renderSkeleton();
    this.utiles = new Utiles();
  }
};

export default Bots;
