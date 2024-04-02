import axios from 'axios';
import botDatas from '../models/entite';

const BotActions = class {
  async meteo(city) {
    let weatherData = '';
    const apiKey = '';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      weatherData = response.data;
      return weatherData.main.temp;
    } catch (error) {
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

  async formule1(driverName) {
    const apiUrl = `http://ergast.com/api/f1/2010/drivers/${driverName}`;
    try {
      const data = await axios.get(apiUrl);
      console.log(data.data);
      return data.data;
    } catch {
      return false;
    }
  }

  run() {

  }
};

export default BotActions;
