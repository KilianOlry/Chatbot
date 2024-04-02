import viewNav from '../views/nav';
// import botDatas from '../models/entite';

const Bots = class {
  constructor() {
    this.el = document.getElementById('app');
    this.message = document.querySelector('.container__message__user');

    this.run();
  }

  renderSkeleton() {
    return `
      ${viewNav()}
      <main>
        <h1>bonjour</h1>
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
