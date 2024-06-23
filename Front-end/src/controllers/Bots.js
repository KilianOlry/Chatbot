import axios from 'axios';
import viewNav from '../views/nav';
import listBots from '../views/bots/list-bots';
import Utiles from '../services/Utiles';

const Bots = class {
  constructor() {
    this.el = document.getElementById('app');

    this.run();
  }

  async renderSkeleton(bots) {
    return `
      ${viewNav()}
      <h1 class= 'title-bot-page'>Nos <span>Bots</span></h1>
      <main class='main-listBots'>
        ${listBots(bots)}
      </main>
    `;
  }

  getBots() {
    return axios.get('http://localhost/bots', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  async run() {
    const bots = await this.getBots();
    this.el.innerHTML = await this.renderSkeleton(bots);
    this.utiles = new Utiles();
  }
};

export default Bots;
