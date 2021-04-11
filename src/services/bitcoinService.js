const axios = require('axios').default;

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
};

function getRate(coins) {
  return axios
    .get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    .then((res) => {
      // handle success
      // console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}
function getMarketPrice() {
  return axios
    .get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
    .then((res) => {
      // handle success
      // console.log(res.data.values);
      return res.data.values;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

function getConfirmedTransactions() {}
