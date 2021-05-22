import axios from 'axios';
class Api {

  async getSabores() {
    const { data } = await axios.get('/mockup/sabores.json');
    return data;
  }

  async getMassas() {
    const { data } = await axios.get('/mockup/massas.json');
    return data;
  }

  async getTamanhos() {
    const { data } = await axios.get('/mockup/tamanhos.json');
    return data;
  }
  

}

export default new Api();