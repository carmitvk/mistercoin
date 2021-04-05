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
            <Chart data={[10,50,30,5,50]} color={"black"}/>
          </div>
        }
      </div>
    )
  }
}

