import ModelBotDatas from '../../models/entite';

async function help(messageUser) {
  const words = messageUser.split(' ');
  const [botName] = words;
  const botDatas = ModelBotDatas.find((element) => element.actions.keyword === botName);

  const botResponse = `
  <ul>
    ${ModelBotDatas.map((element) => `
    <li>
      ${element.name} | <span class='botmessage'>${element.actions.keyword}<span>
    </li>`).join(' ')}
  </ul>
  `;

  return { botResponse, botName: botDatas.name, botImage: botDatas.image };
}
export default help;
