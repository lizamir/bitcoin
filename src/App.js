import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { BitconApp } from './views/BitconApp';
import { Contact } from './views/Contact';
import { StatisticPage } from './views/StatisticPage';
import { ContactDetails } from './views/ContactDetails';
import { ContactEdit } from './views/ContactEdit';
import { SignUp } from './views/SignUp';
import { AppHeader } from './cmps/AppHeader';

export function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
        <Route component={ContactEdit} path='/contact/edit/:id?' />
          <Route component={ContactDetails} path='/contact/:id' />
          <Route component={Contact} path='/contact' />
          <Route component={StatisticPage} path='/statistic' />
          <Route component={SignUp} path='/Signup' />
          <Route component={BitconApp} path='/' />
        </Switch>
      </div>
    </Router>


  );
}

