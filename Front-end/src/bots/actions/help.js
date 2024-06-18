import botDatas from '../../models/entite';

async function help() {
  return botDatas.map((element) => element.name).join('<br>');
}
export default help;
