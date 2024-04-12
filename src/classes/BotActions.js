import axios from 'axios';
import botDatas from '../models/entite';
import viewMessageBot from '../views/chat-bot/message';

const BotActions = class {
  async meteo(messageUser) {
    const words = messageUser.split(' ');
    const arg = words[1];
    const city = words[2];
    let weatherData = '';
    const apiKey = process.env.WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;
    const botData = botDatas.find((element) => element.actions.name === 'meteo');
    const listMessage = document.querySelector('.textarea');
    try {
      const response = await axios.get(apiUrl);
      weatherData = response.data;
      let botResponse = ' ';
      if (arg === 'info') {
        botResponse = `Il fait ${weatherData.main.temp} degrés à ${city} <br> description: ${weatherData.weather[0].description}`;
      } else if (arg === 'temperature') {
        botResponse = `Il fait ${weatherData.main.temp} degrés à ${city}`;
      } else if (arg === 'vent') {
        botResponse = `La vitesse du vent à ${city} et de ${weatherData.wind.speed}km/h`;
      } else {
        botResponse = 'Comment utiliser le bot météo:<br>   -meteo [info] [ville]<br>   -meteo [temperature] [ville]<br>   -meteo [vent] [ville]';
      }
      listMessage.insertAdjacentHTML('beforeend', viewMessageBot(botData.name, botData.image, botResponse));
      return undefined;
    } catch (error) {
      const botResponse = 'Erreur lors de la récupération des données météo.<br>Peut-être une erreur dans le nom de la ville.';
      listMessage.insertAdjacentHTML('beforeend', viewMessageBot(botData.name, botData.image, botResponse));
      return false;
    }
  }

  async help() {
    return botDatas.map((element) => element.name).join('<br>');
  }

  async voyage(cityName) {
    const apiKey = '';
    const apiUrl = `https://api.unsplash.com/search/photos?count=1&query=${cityName}&client_id=${apiKey}`;
    try {
      const data = await axios.get(apiUrl);
      return data.data.results[0].urls.small;
    } catch {
      return false;
    }
  }

  async pokemon(pokemonName) {
    const apiUrl = `https://tyradex.tech/api/v1/pokemon/${pokemonName}`;
    try {
      const data = await axios.get(apiUrl);
      return data.data.sprites.regular;
    } catch {
      return false;
    }
  }

  async f1(driverName) {
    const apiUrl = `http://ergast.com/api/f1/drivers/${driverName}`;
    try {
      const data = await axios.get(apiUrl);
      return data.data;
    } catch {
      return false;
    }
  }

  run() {

  }
};

export default BotActions;
