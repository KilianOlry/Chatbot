import itemBot from './bot';

export default (dataBots) => `
  <div class="bot-container container">
    ${dataBots.map((bot) => itemBot(bot)).join('')}
  </div>
`;
