require('dotenv').config();
const axios = require('axios');
const url = process.env.CIELO_URL;


if (!url) {
  console.log('/api/v1/cielo => Você precisa configurar a URL da API!')
};

module.exports = {
  async index(req, res) {
    try {
      const body = {  
        "Cart":{  
           "Items":[  
              {  
                 "Name":"Venda Consultiva - Executive Academy",
                 "Description":"Executive Academy - Venda Consultiva",
                 "UnitPrice":199700,
                 "Quantity":1,
                 "Type":"Digital",
                 "Sku":"VEN",
                 "Weight":00
              },
             ]
        },
        "Shipping":{  
           "Type":"WithoutShipping",
        },
        "Payment":{  
           "BoletoDiscount":00,
           "DebitDiscount":00,
           "Installments":null,
           "MaxNumberOfInstallments": null
        },
        "Customer":{  
           "Identity":"",
           "FullName":"",
           "Email":"",
           "Phone":""
        },
        "Options":{  
          "AntifraudEnabled":true,
          "ReturnUrl": "https://executiveacademy.com.br/obrigado/"
        },
        "Settings":null
     }

      const response = await axios.post(url, body, {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
          'MerchantId': `${process.env.MERCHANT_ID}`
        }
      });
      
      const data = response.data;

      res.json(data.settings.checkoutUrl);
    }
    catch (error) {
      console.log(error);
    }
  }
};
