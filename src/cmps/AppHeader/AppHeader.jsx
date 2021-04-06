import { NavLink, withRouter } from 'react-router-dom'
// import { eventBusService } from '../../services/eventBusService'
import './AppHeader.scss'

const _AppHeader = (props) => {
    // eventBusService.emit('navbar-render', 'hi')
    return (
        <div className="app-header">
            <h1>Contacts</h1>
            <ul>
                <li><NavLink exact to="/" activeClassName="active-nav">Contacts</NavLink></li>
                <li><NavLink to="/loggeduser" activeClassName="active-nav">Loggeduser</NavLink></li>
                <li><NavLink to="/statistic" activeClassName="active-nav">Statistic</NavLink></li>
            </ul>
        </div>
    )
}

export const AppHeader = withRouter(_AppHeader)