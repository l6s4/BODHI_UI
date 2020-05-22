import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import CreateUser from './pages/CreateUser';
import MainNavigation from './components/Navigation/MainNavigation';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment />
        <MainNavigation />
        <main className="main-content">
          <Switch>
            <Redirect from="/" to="/login" exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/createUser" component={CreateUser} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
export default App;
