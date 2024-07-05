import botDatas from '../../models/entite';

async function help() {
  console.log(botDatas);
  return botDatas.map((element) => element.name).join('<br>');
}
export default help;
