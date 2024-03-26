import axios from 'axios';

const entitie = [{
  name: 'Thomas Shelby',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4hhYnxq3v-q05kUNHy6K-QDZFKsZM4cdJg&usqp=CAU',
  actions: {
    name: 'No Fighting. No F***ing Fighting, No Fighting, NO F*',
    action: async () => {
      let weatherData = '';
      const apiKey = 'fd278a1ce2bcdec4bbddf662b7409c40';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&lang=fr&appid=${apiKey}`;
      try {
        const response = await axios.get(apiUrl);
        weatherData = response.data;
      } catch (error) {
        console.error(error);
      }
      return weatherData;
    }
  }
},
{
  name: 'Flash McQueen',
  image: 'https://www.thedecofactory.com/pub/media/catalog/product/cache/9801f9953c8bc965c65fa73ccb3f71a9/r/m/rmk1518gm_lightning_mcqueen_giant_wall_decal_assembled_product.jpg',
  actions: {
    name: 'Cars',
    action: async () => {
      let weatherData = '';
      const apiKey = 'fd278a1ce2bcdec4bbddf662b7409c40';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&lang=fr&appid=${apiKey}`;
      try {
        const response = await axios.get(apiUrl);
        weatherData = response.data;
      } catch (error) {
        console.error(error);
      }
      return weatherData;
    }
  }
},
{
  name: 'Louis Bodin',
  image: 'https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2Fvar.2Fvoi.2Fstorage.2Fimages.2Fmedia.2Fmultimedia.2Flouis-bodin-revient-sur-le-sketch-des-guignols-suite-au-drame-de-dropped.2F9538354-1-fre-FR.2Flouis-bodin-revient-sur-le-sketch-des-guignols-suite-au-drame-de-dropped.2Ejpg/170x170/quality/80/video-louis-bodin-revient-sur-le-sketch-des-guignols-suite-au-drame-de-dropped.jpg',
  actions: {
    name: 'Météo',
    action: async () => {
      let weatherData = '';
      const apiKey = 'fd278a1ce2bcdec4bbddf662b7409c40';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&lang=fr&appid=${apiKey}`;
      try {
        const response = await axios.get(apiUrl);
        weatherData = response.data;
      } catch (error) {
        console.error(error);
      }
      return weatherData.main.temp;
    }
  }
},
{
  name: 'Stéphane Bern',
  image: 'https://www.gala.fr/imgre/fit/~1~gal~2023~06~30~1730db8f-85d9-4b7f-96de-df5a48813f07.png/150x150/quality/80/stephane-bern-son-havre-de-paix-loin-de-paris.jpg',
  actions: {
    name: 'City',
    action: async () => {
      let weatherData = '';
      const apiKey = 'fd278a1ce2bcdec4bbddf662b7409c40';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&lang=fr&appid=${apiKey}`;
      try {
        const response = await axios.get(apiUrl);
        weatherData = response.data;
      } catch (error) {
        console.error(error);
      }
      return weatherData.main.temp;
    }
  }
}
];

export default entitie;
