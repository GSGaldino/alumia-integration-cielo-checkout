require('dotenv').config();
const axios = require('axios');
const url = process.env.CIELO_URL;


if(!url){
  console.log('/api/v1/cielo => Você precisa configurar a URL da API!')
};

module.exports = {
  async index(req, res) {
    try {
      const response = await axios({
        method: 'GET',
        url: url,
        headers: {},
        data: {},
      });

      const data = response.data;

      res.json(data);
    } 
    catch (error) {
      console.log(error);
    }
  }
};
