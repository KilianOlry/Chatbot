import axios from 'axios';
import botDatas from '../../models/entite';

async function pokemon(messageUser) {
  const words = messageUser.split(' ');
  const arg = words[1];
  const pokemonName = words[2];
  let pokemonData = '';
  let pokemonDataEvo = '';
  let imageEvo = '';
  const apiUrl = `https://tyradex.tech/api/v1/pokemon/${pokemonName}`;
  const botData = botDatas.find((element) => element.actions.name === 'pokemon');

  try {
    const response = await axios.get(apiUrl);
    pokemonData = response.data;
    let botResponse = ' ';
    if (arg === 'info') {
      botResponse = `
      <div class='container__pokemon'>
        <div class='container__pokemon__left'>
          <p class='title'>${pokemonData.name.fr}</p>
          <img src="${pokemonData.sprites.regular}" class='pokemon__img'>
        </div>
          <ul>
            <li class='item__stats types'>Types : ${pokemonData.types.map((type) => `<img class='pokemon__type__img' src="${type.image}">`).join(' ')}</li>
            <li class='item__stats'>Santé : ${pokemonData.stats.hp}
              <span>
                <i class="ri-heart-fill"></i>
              </span>
            </li>
            <li class='item__stats'>Attaque : ${pokemonData.stats.atk}
              <span>
                <i class="ri-focus-3-fill"></i>
              </span>
            </li>
            <li class='item__stats'>Défense : ${pokemonData.stats.def}
              <span>
                <i class="ri-shield-fill"></i>
              </span>
            </li>
            <li class='item__stats'>Vitesse : ${pokemonData.stats.vit}
              <span>
                <i class="ri-speed-up-fill"></i>
              </span>
            </li>
          </ul>
        </div>
      `;
    } else if (arg === 'evolution') {
      const evoUrl = `https://tyradex.tech/api/v1/pokemon/${pokemonData.evolution.next[0].name}`;
      try {
        const responseEvo = await axios.get(evoUrl);
        pokemonDataEvo = responseEvo.data;
        imageEvo = pokemonDataEvo.sprites.regular;
      } catch {
        return false;
      }
      botResponse = `
      <div class='container__pokemon'>
        <div>
          <p class='title'>${pokemonData.name.fr}</p>
          <img src="${pokemonData.sprites.regular}" class='pokemon__img'>
        </div>
        <div>
          ${pokemonData.evolution.next.map((evolution) => `${evolution.name}`).join('')}
          <img src="${imageEvo}" class='pokemon__img'>
        </div>
      </div>`;
    } else if (arg === 'random') {
      botResponse = 'random';
    } else {
      botResponse = `
      <ul>
        <li class='item__stats'>Comment utiliser le bot Pokemon :</li>
        <li class='item__stats'>pokemon [info] [nom du pokemon]</li>
        <li class='item__stats'>pokemon [evolution] [nom du pokemon]</li>
        <li class='item__stats'>pokemon [random]</li>
      <ul>`;
    }
    return [botResponse, botData.name, botData.image];
  } catch (error) {
    const botResponse = `
    <p>Erreur lors de la récupération des données pokemon<br>Peut-être une erreur dans le nom du pokemon<p>`;
    return [botResponse, botData.name, botData.image];
  }
}

export default pokemon;
