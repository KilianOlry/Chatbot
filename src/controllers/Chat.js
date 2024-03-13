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
      'bonjour': 'Bonjour ! Comment allez-vous ?',
      'comment ca va': 'Je vais bien, merci ! Et vous ?'
    };

    elInputChat.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        const keyWord = elInputChat.value;
        elInputChat.value = '';

        const botResponse = responses[keyWord] || 'Désolé, je ne comprends pas.';
        this.message.innerHTML += this.render(keyWord);
        this.message.innerHTML += this.render(botResponse);
        this.saveMessage(keyWord);
      }
    });
  }

  onClickButton() {
    const elInputChat = document.querySelector('.form-control');
    const elInputButton = document.querySelector('.btn-input');

    elInputButton.addEventListener('click', () => {
      const keyWord = elInputChat.value;
      elInputChat.value = '';
      this.message.innerHTML += this.render(keyWord);
      this.saveMessage(keyWord);
    });
  }

  render(content) {
    return `
    <div class="message__user messageBot">
      <div class='message__content'>
          <p class='user__name'>Matéo Grange</p>
          <p class='user__message'>${content}</p>
          <p class='user__date'>13:04:14 - 15/02/2024</p>
        </div>
        <img src="https://i.pinimg.com/564x/47/ba/71/47ba71f457434319819ac4a7cbd9988e.jpg" width='80' height='80' alt="">
    </div>
    `;
  }

  run() {
    this.onKeyPressed();
    this.onClickButton();
  }
};

export default Chat;
