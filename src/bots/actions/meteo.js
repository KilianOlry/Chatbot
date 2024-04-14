import axios from 'axios';
import botDatas from '../../models/entite';

function info(city, weatherData) {
  const botResponse = `Il fait ${weatherData.main.temp} °C à ${city} <br> description: ${weatherData.weather[0].description}`;
  return botResponse;
}
function temperature(city, weatherData) {
  const botResponse = `Il fait ${weatherData.main.temp} °C à ${city}`;
  return botResponse;
}
function vent(city, weatherData) {
  const botResponse = `La vitesse du vent à ${city} et de ${weatherData.wind.speed}km/h`;
  return botResponse;
}
function help() {
  const botResponse = `
  <ul>
    <li class='item__stats'>Comment utiliser le bot Meteo :</li>
    <li class='item__stats'>meteo [info] [ville]</li>
    <li class='item__stats'>meteo [temperature] [nom du pokemon]</li>
    <li class='item__stats'>meteo [vent] [ville]</li>
  <ul>`;
  return botResponse;
}
function errorActions() {
  const botResponse = "L'actions demandé n'existe pas veuillez écrire la commande ' meteo help '";
  return botResponse;
}

async function meteo(messageUser) {
  const words = messageUser.split(' ');
  const arg = words[1];
  const city = words[2];
  let weatherData = '';
  const apiKey = process.env.WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;
  const botData = botDatas.find((element) => element.actions.keyword === 'meteo');
  if (botData.actions.actions.includes(arg)) {
    const response = await axios.get(apiUrl);
    weatherData = response.data;

    let botResponse = '';
    if (arg === 'info') {
      botResponse = info(city, weatherData);
    } else if (arg === 'temperature') {
      botResponse = temperature(city, weatherData);
    } else if (arg === 'vent') {
      botResponse = vent(city, weatherData);
    } else if (arg === 'help') {
      botResponse = help();
    }
    return [botResponse, botData.name, botData.image];
  }
  const botResponse = errorActions();
  return [botResponse, botData.name, botData.image];
}

export default meteo;
