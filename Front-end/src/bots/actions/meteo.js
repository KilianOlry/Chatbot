import axios from 'axios';
import ModelBotDatas from '../../models/entite';

function info(city, weatherData) {
  return `Il fait ${weatherData.main.temp} °C à ${city} <br> description: ${weatherData.weather[0].description}`;
}
function temperature(city, weatherData) {
  return `Il fait ${weatherData.main.temp} °C à ${city}`;
}
function vent(city, weatherData) {
  return `La vitesse du vent à ${city} et de ${weatherData.wind.speed}km/h`;
}
function help() {
  return `
  <ul>
    <li class='item__stats'>Comment utiliser le bot Meteo :</li>
    <li class='item__stats'>meteo [info] [ville]</li>
    <li class='item__stats'>meteo [temperature] [nom du pokemon]</li>
    <li class='item__stats'>meteo [vent] [ville]</li>
  <ul>`;
}
function errorActions() {
  return "L'actions demandé n'existe pas veuillez écrire la commande ' meteo help '";
}

const nameFunctions = {
  info,
  temperature,
  vent,
  help
};

async function meteo(messageUser) {
  const words = messageUser.split(' ');
  const [botName, arg, city] = words;

  const botData = ModelBotDatas.find((element) => element.actions.keyword === botName);
  if (botData.actions.actions.includes(arg)) {
    if (arg === 'help') {
      return {
        botResponse: help(),
        botName: botData.name,
        botImage: botData.image
      };
    }
    let weatherData = '';
    const apiKey = process.env.WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;
    const response = await axios.get(apiUrl);
    weatherData = response.data;

    let botResponse = '';

    const nameFunction = arg;
    const funcFromMap = nameFunctions[nameFunction];
    if (typeof funcFromMap === 'function') {
      botResponse = funcFromMap(city, weatherData);
    }

    return { botResponse, botName: botData.name, botImage: botData.image };
  }

  const botResponse = errorActions();
  return { botResponse, botName: botData.name, botImage: botData.image };
}

export default meteo;
