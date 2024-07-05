import axios from 'axios';

const Axios = class {
  async Get(url) {
    return axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        throw new Error(`Erreur: Réponse inattendue, statut ${response.status}`);
      })
      .catch((response) => {
        console.log(response);
      });
  }
};
export default Axios;
