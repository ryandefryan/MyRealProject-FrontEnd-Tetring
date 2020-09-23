import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import ActivationAccount from './pages/ActivationAccount.jsx';
import Navbar from './components/Navbar.jsx';
import LandingPage from './pages/LandingPage.jsx';
import MyTasks from './pages/Tasks.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Footer from './components/Footer.jsx';
import './../src/supports/stylesheets/Utilities.css';
import './../src/supports/stylesheets/Login.css';
import './../src/supports/stylesheets/ActivationAccount.css';
import './../src/supports/stylesheets/LandingPage.css';
import './../src/supports/stylesheets/Tasks.css';
import './../src/supports/stylesheets/PageNotFound.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={Login} />
        <Route path='/activate-account/:id/:password/:activationMethod' component={ActivationAccount} />
        <Route path='/my-tasks' component={MyTasks} />
        <Route path='*' component={PageNotFound} /> {/* Halaman Pages Not Found */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
