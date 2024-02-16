export default (botDatas) => (`
<ul class="list-group list-group-flush botCard">
  ${botDatas.map((bot) => (
    `<li class="list-group-item d-flex align-items-center gap-2">
      <img src="${bot.image}" alt="${bot.name}" class='inline-block rounded-circle shadow-sm' height='80' width='80' height='80' class="img-thumbnail border-0" alt="profileBot">
      <div>
        <p class='fst-italic'>${bot.name}</p>
        <span class='fst-italic d-inline-block text-truncate preview'>${bot.actions.name}</span>
      </div>
    </li>`
  )).join('')}
</ul>
`);
