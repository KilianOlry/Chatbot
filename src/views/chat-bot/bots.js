import itemBot from './item-bot';
import entite from '../../models/entite';

export default () => (`
<ul class="bot__list">
  <li class='bot__list__item galery'>
    <a href="" class='icon-galery-bot'>
      <i class="ri-gallery-view-2"></i>
    </a>
  </li>
  ${entite.map((bot) => itemBot(bot)).join('')}
</ul>
`);
