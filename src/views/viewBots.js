export default (botDatas) => (`
<ul class="bot__list">
  <li class='bot__list__item galery'>
    <a href="" class='icon-galery-bot'>
      <i class="ri-gallery-view-2"></i>
    </a>
  </li>
  ${botDatas.map((bot) => (
    `<li class="bot__list__item" >
      <img src="${bot.image}" alt="${bot.name}" class='' height='80' width='80' height='80' class="img-thumbnail border-0" alt="profileBot">
      <div class='__description'>
        <p class='__description__bot__name'>${bot.name}</p>
        <span class='__description__bot__message'>${bot.actions.name}</span>
      </div>
    </li>`
  )).join('')}
</ul>
`);
