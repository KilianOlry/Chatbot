import viewNav from '../views/nav';
import viewCards from '../views/contributors/cards';

import ModelContributors from '../models/contributors';

import ServiceUtiles from '../services/Utiles';

const Bots = class {
  constructor() {
    this.el = document.getElementById('app');

    this.run();
  }

  renderSkeleton() {
    return `
    
      ${viewNav()}
      
      <h1 class='title-bot-page'>Les <span>Développeurs</span></h1>
      
      <main class=''>
        
        ${viewCards(ModelContributors)}
      
      </main>
    `;
  }

  removeEffect() {
    const elements = document.querySelectorAll('.user-card');
    elements.forEach((item) => {
      setTimeout(() => {
        item.classList.remove('skeleton');
        item.querySelectorAll('.hide-text').forEach((child) => {
          child.classList.remove('hide-text');
        });
      }, 1000);
    });
  }

  async run() {
    this.el.innerHTML = this.renderSkeleton();
    this.removeEffect();
    this.utiles = new ServiceUtiles();
  }
};

export default Bots;
