export default (botDatas) => (`
<ul class="bot__list d-flex flex-column gap-4">
  ${botDatas.map((bot) => (
    `<li class="d-flex align-items-center gap-2" bot__list__item border>
      <img src="${bot.image}" alt="${bot.name}" class='inline-block rounded-circle shadow-sm' height='80' width='80' height='80' class="img-thumbnail border-0" alt="profileBot">
      <div class='__description'>
        <p class='fst-italic'>${bot.name}</p>
        <span class='fst-italic d-inline-block text-truncate preview'>${bot.actions.name}</span>
      </div>
    </li>`
  )).join('')}
</ul>
`);
