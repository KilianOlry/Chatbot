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
      this.redirectToChat();
    });
  }

  buildLocaleStorage(pseudo) {
    const userInformation = { pseudo, imageProfil: `https://ui-avatars.com/api/?name=${pseudo}` };
    window.localStorage.setItem('user', JSON.stringify(userInformation));
  }

  redirectToChat() {
    window.location.href = '/chat';
  }

  run() {
    this.el.innerHTML = this.render();
    this.submitForm();
  }
};

export default Login;
