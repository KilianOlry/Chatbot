import axios from 'axios';
import botDatas from '../../models/entite';

function renderImage(image) {
  return `
    <img src='${image}' class='img-voyage' alt='Image'>
    <a href='' class='link-download' download='${image}'>Télécharger l'image</a>
  `;
}
function renderError(messageUser) {
  return `
    <p>La commande : '${messageUser}' n'est pas reconnu</p>
  `;
}

async function voyage(messageUser) {
  const words = messageUser.split(' ');
  const [botName, cityName] = words;
  const botData = botDatas.find((element) => element.actions.keyword === botName);

  if (botData.actions.actions.includes(botName)) {
    const apiKey = process.env.UNSPLASH_API_KEY;
    const apiUrl = `https://api.unsplash.com/search/photos?count=1&query=${cityName}&client_id=${apiKey}`;
    const data = await axios.get(apiUrl);
    const botResponse = renderImage(data.data.results[0].urls.small);
    return { botResponse, botName: botData.name, botImage: botData.image };
  }
  const botResponse = renderError(messageUser);
  return { botResponse, botName: botData.name, botImage: botData.image };
}
export default voyage;
