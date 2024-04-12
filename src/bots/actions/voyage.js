import axios from 'axios';

async function voyage(cityName) {
  const apiKey = process.env.UNSPLASH_API_KEY;
  const apiUrl = `https://api.unsplash.com/search/photos?count=1&query=${cityName}&client_id=${apiKey}`;
  try {
    const data = await axios.get(apiUrl);
    return data.data.results[0].urls.small;
  } catch {
    return false;
  }
}
export default voyage;
