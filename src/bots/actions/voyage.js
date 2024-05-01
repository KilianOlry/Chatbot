import axios from 'axios';
import botDatas from '../../models/entite';

function renderMessage(image) {
  return `
    <img src='${image}' class ='img-voyage' alt='Image'>
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
  const arg = words[0];
  const cityName = words[1];
  const botData = botDatas.find((element) => element.actions.keyword === 'voyage');

  if (botData.actions.actions.includes(arg)) {
    const apiKey = process.env.UNSPLASH_API_KEY;
    const apiUrl = `https://api.unsplash.com/search/photos?count=1&query=${cityName}&client_id=${apiKey}`;
    try {
      const data = await axios.get(apiUrl);
      const image = data.data.results[0].urls.small;
      const botResponse = renderMessage(image);
      return [botResponse, botData.name, botData.image];
    } catch {
      const botResponse = renderError(messageUser);
      return [botResponse, botData.name, botData.image];
    }
  }
  const botResponse = renderError(messageUser);
  return [botResponse, botData.name, botData.image];
}
export default voyage;
