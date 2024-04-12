import axios from 'axios';

async function f1(driverName) {
  const apiUrl = `http://ergast.com/api/f1/drivers/${driverName}`;
  try {
    const data = await axios.get(apiUrl);
    return data.data;
  } catch {
    return false;
  }
}

export default f1;
