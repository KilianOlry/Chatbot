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
    <div class="message messageBot d-flex gap-2 mt-4">
      <div class='message_container shadow px-3 rounded-1'>
          <p class='mt-2'>Matéo Grange</p>
          <p>${content}</p>
          <div class='d-flex justify-content-end'>
            <p class='rounded-2 m-2 px-2 d-inline bg-primary text-white fs-6 fst-italic'>15/02/2024</p>
          </div>
        </div>
      <div class=' justify-content-end'>
        <img src="https://i.pinimg.com/564x/47/ba/71/47ba71f457434319819ac4a7cbd9988e.jpg" width='80' class='inline-block rounded-circle shadow-sm' height='80' alt="">
      </div>
    </div>
    `;
  }

  run() {
    this.onKeyPressed();
    this.onClickButton();
  }
};

export default Chat;
