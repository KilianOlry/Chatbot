import axios from 'axios';

async function botsData() {
  const apiUrl = 'http://localhost/bots';
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    return error;
  }
}
export default botsData;
