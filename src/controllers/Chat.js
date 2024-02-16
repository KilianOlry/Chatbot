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
    <div class="message messageBot">
    <div class='d-flex justify-content-end'>
      <img src="https://imgs.search.brave.com/0VTo8VUZnbZd3RhVgdSh3ER2UrAB_SxA-Xlj_CiByec/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mci50/b3B3b3JsZGF1dG8u/Y29tL3Bob3Rvcy8v/ZDcvYzcvbGlnaHRu/aW5nLW1jcXVlZW4t/cmVkLWNhci1mcm9t/LWRpc25leS0zOS1z/LW1vdmllLWNhcnMt/NjI1LmpwZw" width='80' class='inline-block rounded-circle shadow-sm' height='80' alt="">
    </div>
    <div class='shadow-sm px-3 rounded-5'>
      <p class=''>Flash McQueen</p>
      <p>${content}</p>
      <div class='d-flex justify-content-end'>
        <p class='rounded-2 px-2 d-inline bg-primary text-white fs-6 fst-italic'>15/02/2024</p>
      </div>
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