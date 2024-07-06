import viewNav from '../views/nav';

const Login = class {
  constructor() {
    this.el = document.getElementById('app');

    this.run();
  }

  render() {
    return `
      ${viewNav()}

      <div class="login">
        <form class='form'>
          <img src='https://imgs.search.brave.com/9OLUzBkpzVC9rtgBkiOhA0IrfiAk8cDh7to3I7YugPQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhdGJvdC5jb20v/Y2hhdGJvdC1haS1h/c3Npc3QuZDk3ZmQ2/NzgxZDVhZGMwNTU1/MDQ2MTQ4NzMzZjJj/MDlmYjBhMjExNDI1/MTI3NmZjYjU3NWNl/ZjU3NjViMjVjMi5w/bmc' width='200px' height='200px'>
          <div class='input'>
            <input type='text' placeholder='Pseudo' class='input-pseudo'>
            </div>
            <button type='submit' class='submit'>valider</button>
          </form>
      </div>`;
  }

  submitForm() {
    const elForm = document.querySelector('.form');
    const inputPseudo = document.querySelector('.input-pseudo');
    elForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.buildLocaleStorage(inputPseudo.value);
    });
  }

  buildLocaleStorage(pseudo) {
    window.localStorage.setItem('pseudo', pseudo);
    window.location.href = '/chat';
  }

  run() {
    this.el.innerHTML = this.render();
    this.submitForm();
  }
};

export default Login;
