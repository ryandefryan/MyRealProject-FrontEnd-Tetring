import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import './../src/supports/stylesheets/Utilities.css';
import './../src/supports/stylesheets/Login.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
