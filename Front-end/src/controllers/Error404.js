const Error404 = class {
  constructor() {
    this.el = document.getElementById('app');

    this.run();
  }

  render() {
    return `
      <div class="main-error">
        <div class="fof">
          <h1>Error 404</h1>
        </div>
      </div>`;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Error404;
