import axios from 'axios';

const BotActions = class {
  constructor() {
    this.meteo();
  }

  async meteo(city) {
    let weatherData = '';
    const apiKey = 'fd278a1ce2bcdec4bbddf662b7409c40';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      weatherData = response.data;
      return weatherData.main.temp;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  run() {

  }
};

export default BotActions;