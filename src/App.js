import './App.css';
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { ContactDetailsPage } from './pages/ContactDetailsPage'
import { StatisticPage } from './pages/StatisticPage'
import { ContactEditPage } from './pages/ContactEditPage'
import { AppHeader } from './cmps/AppHeader'
import { HashRouter as Router,  Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <AppHeader />
      {/* <HomePage/>
      <ContactPage/> */}
      <Switch>
        <Route component={ContactEditPage} path='/contact/edit/:id?' />
        <Route component={ContactDetailsPage} path='/contact/:id' />
        <Route component={HomePage} path='/loggeduser' />
        <Route component={StatisticPage} path='/statistic' />
        <Route component={ContactPage} path='/' />
      </Switch>


    </div>
    </Router>
  );
}

export default App;
