import itemBot from './bot';
import entite from '../../models/entite';

export default () => (`
<div class="bot-container container">
${entite.map((bot) => itemBot(bot)).join('')}
</div>
`);
