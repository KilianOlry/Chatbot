import itemBot from './item-bot';

export default (botDatas) => (`
<ul class="bot__list">
  <li class='bot__list__item galery'>
    <a href="" class='icon-galery-bot'>
      <i class="ri-gallery-view-2"></i>
    </a>
  </li>
    ${itemBot(botDatas)}
</ul>
`);
