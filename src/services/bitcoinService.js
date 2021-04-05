import axios from 'axios';

export const bitcoinService = {
  getRate,
  // getMarketPrice,
  // getConfirmedTransactions,
}

/*
Use axios to fetch the data.
Functions:
• getRate(coins) (returns Promise)
  o Bitcoin rate (use a Bitcoin value API such as this)
• getMarketPrice(), getConfirmedTransactions()
  o Return chart data as described below.
*/

function getRate(coins){
  return  axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
      .then(res => {
        return res.data;
      })
}