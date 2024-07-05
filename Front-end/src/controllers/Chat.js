/* eslint-disable no-console */

import viewNav from '../views/nav';
import viewBots from '../views/chat-bot/bots';
import viewInput from '../views/chat-bot/input';
import viewMessageBot from '../views/chat-bot/message';

import ServiceUtiles from '../services/Utiles';
import ServiceAxios from '../services/Axios';
import * as bots from '../bots/bots';

const Chat = class {
  constructor() {
    this.el = document.getElementById('app');
    this.message = document.querySelector('.container__message__user');
    this.serviceAxios = new ServiceAxios();
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

  checkBotExist(firstWord) {
    return this.bots.some((bot) => Object.values(bot).includes(firstWord));
  }

  async callBot(messageUser) {
    const firstWord = messageUser.split(' ')[0].toLowerCase();
    const listMessage = document.querySelector('.textarea');
    const elInput = document.querySelector('.form-control');

    if (this.checkBotExist(firstWord)) {
      const botResponse = await bots[firstWord](messageUser);
      listMessage.insertAdjacentHTML('beforeend', this.renderMessage(messageUser));
      listMessage.insertAdjacentHTML('beforeend', viewMessageBot(botResponse.botName, botResponse.botImage, botResponse.botResponse));
    }

    listMessage.scrollTop = listMessage.scrollHeight;
    elInput.value = '';
  }

  sendMessage() {
    const elInput = document.querySelector('.form-control');
    const elBtn = document.querySelector('.btn');

    elBtn.addEventListener('click', () => {
      if (elInput.value !== '') {
        this.callBot(elInput.value);
      }
      return false;
    });

    elInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13 && elInput.value !== '') {
        this.callBot(elInput.value);
      }
      return false;
    });
  }

  renderMessage(content) {
    return `
    <div class='user'>
      <div class='container__message__user'>
        <div class="message__user messageBot messageUser2">
          <div class='message__content'>
              <p class='user__name'>Matéo Grange</p>
              <p class='user__message'>${content}</p>
              <p class='user__date'>${new Date().toLocaleDateString('fr')}</p>
          </div>
          <img class='user__image avatar' src="https://i.pinimg.com/564x/47/ba/71/47ba71f457434319819ac4a7cbd9988e.jpg" width='80' height='80' alt="image de profil">
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
          ${viewBots(this.bots)}
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

  async getMessages() {
    const messages = await this.serviceAxios.Get('http://localhost/messages');
    return messages;
  }

  async run() {
    this.bots = await this.serviceAxios.Get('http://localhost/bots');
    this.el.innerHTML = await this.renderSkeleton();
    this.utiles = new ServiceUtiles();
    this.sendMessage();
    const messages = await this.getMessages();
    console.log(messages);
  }
};

export default Chat;
