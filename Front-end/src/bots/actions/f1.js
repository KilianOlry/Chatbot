import axios from 'axios';
import botDatas from '../../models/entite';

async function f1(messageUser) {
  const words = messageUser.split(' ');
  const arg = words[0];
  const driverName = words[1];
  const botData = botDatas.find((element) => element.actions.keyword === 'f1');

  if (botData.actions.actions.includes(arg)) {
    // const apiUrl = `http://ergast.com/api/f1/drivers/${driverName}`;
    const apiUrl = `https://api.openf1.org/v1/drivers?last_name=${driverName}`;

    const response = await axios.get(apiUrl);
    console.log(response);
  }
  return console.log('nop');
}

export default f1;
