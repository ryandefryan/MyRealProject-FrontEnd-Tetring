import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Footer from './components/Footer.jsx';
import ActivationAccount from './pages/ActivationAccount.jsx';
import './../src/supports/stylesheets/LandingPage.css';
import './../src/supports/stylesheets/Utilities.css';
import './../src/supports/stylesheets/Login.css';
import './../src/supports/stylesheets/ActivationAccount.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={Login} />
        <Route path='/activate-account/:id/:password/:activationMethod' component={ActivationAccount} />
        <Route path='*' component={LandingPage} /> {/* Halaman Pages Not Found */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
