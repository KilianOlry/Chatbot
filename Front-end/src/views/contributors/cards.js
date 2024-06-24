import card from './card';

export default (contributors) => `
  <div class='bot-container container'>
    ${contributors.map((item) => card(item)).join('')}
  </div>
`;
