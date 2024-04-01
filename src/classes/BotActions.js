import axios from 'axios';
import botDatas from '../models/entite';

const BotActions = class {
  async meteo(city) {
    let weatherData = '';
    const apiKey = 'fd278a1ce2bcdec4bbddf662b7409c40';
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

  run() {

  }
};

export default BotActions;
