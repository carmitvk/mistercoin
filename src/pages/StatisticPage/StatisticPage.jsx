import { Component } from 'react'
import './StatisticPage.scss'
import { Chart } from '../../cmps/Chart'

export class StatisticPage extends Component {


  render() {
    return (
      <div className="statistic-page">
        {
          <div>
            <h3>Statistics:</h3>  
            <Chart data={[10,50,30,5,50]} color={"yellow"}/>
          </div>
        }
      </div>
    )
  }
}

/*

import { Component } from 'react'
import './StatisticPage.scss'
import { bitcoinService } from '../../services/bitcoinService'
import { Chart } from '../../cmps/Chart'

export class StatisticPage extends Component {

  state = {
    price: null,
    transactions: null
}

componentDidMount() {
    this.loadPrice()
    this.loadTransactions()
}

async loadPrice() {
    const price = await bitcoinService.getMarketPrice()
    this.setState({ price })
}

async loadTransactions() {
    const transactions = await bitcoinService.getConfirmedTransactions()
    console.log('transactions in cmp:', transactions)
    this.setState({ transactions })
}

get priceForChart() {
    return this.state.price.values.map(item => item.y)
}

get transactionsForChart() {
    return this.state.transactions.values.map(item => item.y)
}

  render() {
    const { price, transactions } = this.state
    return (
      <div className="statistic-page">
        {
          <div>
            <h3>Statistics:</h3>  
            {price &&
                    <div className="chart-price-container">  
                        <h2>{price.name}</h2>
                        <Chart data={this.priceForChart} color="red"/>
                        <h3>{price.description}</h3>
                    </div>
                }
            {transactions &&
                <div className="chart-transactions-container">  
                    <h2>{transactions.name}</h2>
                    <Chart data={this.transactionsForChart} color="yellow"/>
                    <h3>{transactions.description}</h3>
                </div>
            }
          </div>
        }
      </div>
    )
  }
}


*/