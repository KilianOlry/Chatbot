import viewNav from '../views/nav';

const Login = class {
  constructor() {
    this.el = document.getElementById('app');

    this.run();
  }

  render() {
    return `
      ${viewNav()}

      <section class='container'>

        <h1 class='title-bot-page'>Se <span>connecter</span></h1>
        
        <form class='form'>
          <div class='input'>
            <label>Pseudo</label>
            <input type='text' placeholder='Pseudo' class='input-pseudo'>
            <button type='submit' class='submit'>valider</button>
          </div>
        </form>
    
      </section>`;
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
