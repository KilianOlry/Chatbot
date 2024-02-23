const Chat = class {
  constructor() {
    this.el = document.getElementById('app');
    this.message = document.querySelector('.container__message__user');
    this.data = [];

    this.run();
  }

  onKeyPressed() {
    const elInputChat = document.querySelector('.form-control');

    elInputChat.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        const keyWord = elInputChat.value;
        elInputChat.value = '';
        this.message.innerHTML += this.render(keyWord);
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
