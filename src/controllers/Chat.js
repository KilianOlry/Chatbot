import viewNav from '../views/nav';
import viewBots from '../views/chat-bot/bots';
import viewInput from '../views/chat-bot/input';
import viewMessage from '../views/chat-bot/message';
import botDatas from '../models/entite';

const Chat = class {
  constructor() {
    this.el = document.getElementById('app');
    this.message = document.querySelector('.container__message__user');
    this.data = [];

    this.run();
  }

  saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    if (messages.length > 50) {
      messages = messages.slice(messages.length - 50);
    }
    localStorage.setItem('messages', JSON.stringify(messages));
  }

  onKeyPressed() {
    const elInputChat = document.querySelector('.form-control');

    const responses = {
      bonjour: 'Bonjour ! Comment allez-vous ?',
      'comment ca va': 'Je vais bien, merci ! Et vous ?'
    };
    const listMessage = document.querySelector('.textarea');

    elInputChat.addEventListener('keyup', (e) => {
      const keyWord = elInputChat.value;

      if (e.keyCode === 13 && keyWord !== '') {
        const botResponse = responses[keyWord] || 'Désolé, je ne comprends pas.';
        listMessage.insertAdjacentHTML('beforeend', this.renderMessage(keyWord));
        listMessage.insertAdjacentHTML('beforeend', viewMessage(botResponse));
        this.saveMessage(keyWord);
        elInputChat.value = '';
      }
    });
  }

  onClickButton() {
    const elInputChat = document.querySelector('.form-control');
    const elInputButton = document.querySelector('.btn-input');

    const responses = {
      bonjour: 'Bonjour ! Comment allez-vous ?',
      'comment ca va': 'Je vais bien, merci ! Et vous ?'
    };

    elInputButton.addEventListener('click', () => {
      const listMessage = document.querySelector('.textarea');
      const keyWord = elInputChat.value;
      if (keyWord !== '') {
        const botResponse = responses[keyWord] || 'Désolé, je ne comprends pas.';
        listMessage.insertAdjacentHTML('beforeend', this.renderMessage(keyWord));
        listMessage.insertAdjacentHTML('beforeend', viewMessage(botResponse));
        this.saveMessage(keyWord);
        elInputChat.value = '';
      }
    });
  }

  renderMessage(content) {
    return `
    <div class='user'>
      <div class='container__message__user'>
        <div class="message__user messageBot">
          <div class='message__content'>
              <p class='user__name'>Matéo Grange</p>
              <p class='user__message'>${content}</p>
              <p class='user__date'>${new Date().toLocaleDateString('fr')}</p>
          </div>
            <img src="https://i.pinimg.com/564x/47/ba/71/47ba71f457434319819ac4a7cbd9988e.jpg" width='80' height='80' alt="">
        </div>
      </div>
    </div>
    `;
  }

  renderSkeleton() {
    return `
      ${viewNav()}
      <main>
        <article class='container__bot'>
          ${viewBots(botDatas)}
        </article>

        <div class='container__right'>
          <div class='textarea'>

            <div class='container__input'>
              ${viewInput()}
            </div>

          </div>
        </div>
      </main>
    `;
  }

  run() {
    this.el.innerHTML = this.renderSkeleton();
    this.onKeyPressed();
    this.onClickButton();
  }
};
// toggle btn
// const toggleBtn = document.querySelector('.toggleBtn');
// const viewUser = document.querySelector('.container__bot');

// toggleBtn.addEventListener('click', () => {
//   viewUser.classList.toggle('responsive');
// });
export default Chat;
