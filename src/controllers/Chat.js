// import viewUsers from '../views/viewUsers';
// import viewInput from '../views/viewInput';
// import viewMessage from '../views/viewMessage';

const Chat = class {
  constructor() {
    this.el = document.getElementById('app');
    this.message = document.querySelector('.message');
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
        this.message.innerHTML += this.render(keyWord);
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
      this.message.innerHTML += this.render(keyWord);
    });
  }

  render(content) {
    return `
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 gap-2 align-items-center">
          <img src="https://imgs.search.brave.com/9OLUzBkpzVC9rtgBkiOhA0IrfiAk8cDh7to3I7YugPQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhdGJvdC5jb20v/Y2hhdGJvdC1haS1h/c3Npc3QuZDk3ZmQ2/NzgxZDVhZGMwNTU1/MDQ2MTQ4NzMzZjJj/MDlmYjBhMjExNDI1/MTI3NmZjYjU3NWNl/ZjU3NjViMjVjMi5w/bmc" width='70' height='70' class="img-thumbnail border-0" alt="profileBot">
          <h5 class="mb-1">Matéo Grange</h5>
        </div>
        <p class="mb-1">${content}</p>
        <small class="text-body-secondary text-end">And some muted small print.</small>
      </a>
    </div>
    `;
  }

  run() {
    this.onKeyPressed();
    this.onClickButton();
  }
};

export default Chat;
