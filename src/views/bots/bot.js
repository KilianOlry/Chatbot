export default (data) => {
  const { name, image, actions } = data;
  return `
  <article class='card-bot'>
    <div class='img-bot' style="background-image: url('${image}')"></div>
    <div class='content-text'>
      <ul>
      <li class='botName'>${name}</li>
        <li class='items'>Actions :
          <ul class='item items'>
            <li>${actions.name}</li>
          </ul>
        </li>
      </ul>
    </div>
  </article>
  `;
};
