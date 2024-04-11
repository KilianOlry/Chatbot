import axios from 'axios';
import viewNav from '../views/nav';
import viewBots from '../views/chat-bot/bots';
import viewInput from '../views/chat-bot/input';
import viewMessageBot from '../views/chat-bot/message';
import botsData from '../models/entite';
import BotActions from '../classes/BotActions';

const Chat = class extends BotActions {
  constructor() {
    super();
    this.el = document.getElementById('app');
    this.message = document.querySelector('.container__message__user');

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

  async callBot(messageUser) {
    const listMessage = document.querySelector('.textarea');
    const elInput = document.querySelector('.form-control');

    const keyWord = messageUser.split(' ');
    if (keyWord.length >= 2) {
      const botName = keyWord[0];
      const actions = keyWord[1];

      if (typeof this[botName] === 'function') {
        const botResponse = await this[botName](actions);
        botsData.forEach((element) => {
          if (element.actions.name === botName) {
            listMessage.insertAdjacentHTML('beforeend', this.renderMessageUser(messageUser));
            listMessage.insertAdjacentHTML('beforeend', viewMessageBot(element.name, element.image, botResponse));
          }
        });
      }
    } else {
      const botError = botsData.find((element) => element.name === 'Error');
      const botResponse = 'Désolé cette commande ne correspond à aucun bot';
      listMessage.insertAdjacentHTML('beforeend', this.renderMessageUser(messageUser));
      listMessage.insertAdjacentHTML('beforeend', viewMessageBot(botError.name, botError.image, botResponse, this.isValidURL));
    }
    listMessage.scrollTop = listMessage.scrollHeight;
    elInput.value = '';
    this.saveMessage(keyWord);
  }

  async getMessages() {
    const apiUrl = 'http://localhost/messages';
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  sendMessage() {
    const elInputChat = document.querySelector('.form-control');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
      const inputValue = elInputChat.value;
      if (inputValue !== '') {
        this.callBot(inputValue, elInputChat);
      }
      return false;
    });

    elInputChat.addEventListener('keyup', (e) => {
      const inputValue = elInputChat.value;

      if (e.keyCode === 13 && inputValue !== '') {
        this.callBot(inputValue, elInputChat);
      }
      return false;
    });
  }

  renderMessageUser(content) {
    return `
    <div class='user'>
      <div class='container__message__user'>
        <div class="message__user messageBot">
          <div class='message__content'>
              <p class='user__name'>Matéo Grange</p>
              <p class='user__message'>${content}</p>
              <p class='user__date'>${new Date().toLocaleDateString('fr')}</p>
          </div>
            <img class='user__image avatar' src="https://i.pinimg.com/564x/47/ba/71/47ba71f457434319819ac4a7cbd9988e.jpg" width='80' height='80' alt="">
        </div>
      </div>
    </div>
    `;
  }

  async renderSkeleton() {
    return `
      ${viewNav()}
      <main>
        <article class='container__bot'>
          ${viewBots(await this.botsData())}
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
    this.sendMessage();
    viewMessageBot(this.getMessages());
  }
};

export default Chat;
