import axios from 'axios';

const RATE_KEY = 'rate'
const PRICE_KEY = 'price'
const TRANSACTION_KEY = 'transaction'

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions
}

/*
Use axios to fetch the data.
Functions:
• getRate(coins) (returns Promise)
  o Bitcoin rate (use a Bitcoin value API such as this)
• getMarketPrice(), getConfirmedTransactions()
  o Return chart data as described below.
*/

async function getRate(coins){
  var rate = JSON.parse(localStorage.getItem(RATE_KEY)) 
  if (!rate) {
      const {data} = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
      rate = 1 / data
      localStorage.setItem(RATE_KEY, JSON.stringify(rate))
  } 
  return rate
}

async function getMarketPrice() {
  var price = JSON.parse(localStorage.getItem(PRICE_KEY)) 
  if (!price) {
      const { data } = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
      price = data
      console.log('price:', price)
      localStorage.setItem(PRICE_KEY, JSON.stringify(price))
  } return price

}

async function getConfirmedTransactions() {
  var transaction = JSON.parse(localStorage.getItem(TRANSACTION_KEY)) 
  if (!transaction) {
      const { data } = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`)
      transaction = data
      console.log('transaction in if:', transaction)
      localStorage.setItem(TRANSACTION_KEY, JSON.stringify(transaction))
  } return transaction
}
