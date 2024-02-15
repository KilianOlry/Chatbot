// import viewUsers from '../views/viewUsers';
// import viewInput from '../views/viewInput';
// import viewMessage from '../views/viewMessage';

const Chat = class {
  constructor() {
    this.el = document.getElementById('app');
    this.data = [];

    this.run();
  }

  onKeyPressed() {
    const elInputChat = document.querySelector('.form-control');

    elInputChat.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        const keyWord = elInputChat.value;
        console.log(keyWord);
        elInputChat.value = '';
      }
    });
  }

  onClickButton() {
    const elInputChat = document.querySelector('.form-control');
    const elInputButton = document.querySelector('.btn-input');

    elInputButton.addEventListener('click', () => {
      const keyWord = elInputChat.value;
      console.log(keyWord);
      elInputChat.value = '';
    });
  }

  run() {
    this.onKeyPressed();
    this.onClickButton();
  }
};

export default Chat;
