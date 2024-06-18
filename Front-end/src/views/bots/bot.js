export default (data) => {
  const { name, images, actions } = data;
  return `
  <article class='card-bot'>
    <div class='img-bot' style="background-image: url('${images}')"></div>
    <div class='content-text'>
      <ul>
      <li class='botName'>${name}</li>
        <li class='items'>Actions :
          <ul class='item items'>
            <li>${actions}</li>
          </ul>
        </li>
      </ul>
    </div>
  </article>
  `;
};
