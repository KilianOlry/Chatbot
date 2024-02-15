const Error404 = class {
  constructor() {
    this.el = document.getElementById('app');

    this.run();
  }

  render() {
    return '<h1>Error 404</h1>';
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Error404;
