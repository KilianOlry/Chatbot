export default (data) => {
  const { name, images, actions } = data;
  return `
  <li class="bot__list__item">
    <img src="${images}" alt="${name}" class='' height='80' width='80' height='80' alt="profileBot">
    <div class='__description'>
      <p class='__description__bot__name'>${name}</p>
      <span class='__description__bot__message'>${actions}</span>
    </div>
  </li>
  `;
};
