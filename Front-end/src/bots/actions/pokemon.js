/* eslint-disable max-len */
import axios from 'axios';
import botDatas from '../../models/entite';

function renderInfo(pokemonData) {
  return `
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
}

function renderEvolution(pokemonData, imageEvo) {
  return `
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
}

function renderError(messageUser) {
  return `<p>La commande '${messageUser}' n'existe pas</p>`;
}

function renderHelp() {
  return `
  <ul>
    <li class='item__stats'>Comment utiliser le bot Pokemon :</li>
    <li class='item__stats'>pokemon [info] [nom du pokemon]</li>
    <li class='item__stats'>pokemon [evolution] [nom du pokemon]</li>
    <li class='item__stats'>pokemon [random]</li>
  <ul>`;
}

async function pokemon(messageUser) {
  const words = messageUser.split(' ');
  const [botName, arg, pokemonName] = words;

  const botData = botDatas.find((element) => element.actions.keyword === botName);

  if (botData.actions.actions.includes(arg)) {
    if (arg === 'help') {
      return { botResponse: renderHelp(), botName: botData.name, botImage: botData.image };
    }
    const apiUrl = `https://tyradex.tech/api/v1/pokemon/${pokemonName}`;
    if (arg === 'info') {
      const response = await axios.get(apiUrl);
      return { botResponse: renderInfo(response.data), botName: botData.name, botImage: botData.image };
    }
    if (arg === 'evolution') {
      const response = await axios.get(apiUrl);
      const pokemonData = response.data;
      const evoUrl = `https://tyradex.tech/api/v1/pokemon/${pokemonData.evolution.next[0].name}`;
      const responseEvo = await axios.get(evoUrl);
      const pokemonImageEvo = responseEvo.data.sprites.regular;
      return { botResponse: renderEvolution(pokemonData, pokemonImageEvo), botName: botData.name, botImage: botData.image };
    }
    if (arg === 'random') {
      return { botResponse: 'test', botName: botData.name, botImage: botData.image };
    }
  }
  return { botResponse: renderError(messageUser), botName: botData.name, botImage: botData.image };
}

export default pokemon;
