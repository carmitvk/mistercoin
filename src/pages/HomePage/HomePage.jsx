import { Component } from 'react'
import { userService } from '../../services/userService'
import { bitcoinService } from '../../services/bitcoinService'
import './HomePage.scss'

export class HomePage extends Component {

  state = {
    loggedUser: null,
    rate: null
  }

  componentDidMount() {
    this.loadUser()
  }

  async loadUser() {
    const loggedUser = await userService.getUser()
    const rate = await bitcoinService.getRate(loggedUser.coins)
    this.setState({ loggedUser,rate })
  }


  render() {
    return (
      <div className="home-page">
        {
          this.state.loggedUser && 
          <div>
            <h3>connected user:</h3>  
            <p>UserName:{this.state.loggedUser.name}</p>
            <p>Coins:{this.state.loggedUser.coins}</p>
            <p>Rate:{this.state.rate}</p>
          </div>
        }
      </div>
    )
  }
}

